# route_illustration.py

import os
import hashlib
from typing import List, Optional

from fastapi import APIRouter, HTTPException
from pydantic import BaseModel, Field, conint
from urllib.parse import quote_plus
from dotenv import load_dotenv

# Load environment variables
load_dotenv()

illustration_router = APIRouter(tags=["Illustration"])

# Correct Pollinations endpoint
POLLINATIONS_IMAGE_BASE = "https://gen.pollinations.ai/image/"

# ==============================
# Prompt template
# ==============================

ILLUSTRATION_PROMPT_TEMPLATE = """
Create a colorful and engaging illustration based on the following scene description.
{section_text}

The image should be in the warm, friendly, and imaginative style of a children's storybook.

[style]
Classic children's storybook illustration, colored pencil texture, soft shading,
warm cozy colors, expressive faces, full body visible, natural anatomy,
clear composition, no cropped limbs, no text, no watermark.

[contents]
Show child expressions clearly. Cozy environment. Friendly and emotionally safe scene.
""".strip()


# ==============================
# Prompt builder
# ==============================

def build_illustration_prompt(
    section_text: str,
    reference_images: Optional[List[str]] = None
) -> str:

    base = ILLUSTRATION_PROMPT_TEMPLATE.format(
        section_text=section_text.strip()
    )

    if reference_images:
        refs = "\n".join(reference_images)
        base += f"\n\n[reference_images]\n{refs}"

    # Pollinations supports long prompts but limit safely
    return base[:6000]


# ==============================
# Image URL generator
# ==============================

def make_image_url(
    prompt: str,
    width: int = 896,
    height: int = 896,
    seed: Optional[int] = None,
    model: Optional[str] = None,
    nologo: bool = True
) -> str:

    api_key = os.getenv("POLLINATIONS_TOKEN")

    safe_prompt = prompt[:500]

    # ✅ ALWAYS ensure valid model
    model = model or "gptimage"

    params = [
        f"model={model}",
        f"width={width}",
        f"height={height}",
        "enhance=false"
    ]

    if seed is not None:
        params.append(f"seed={seed}")

    if api_key:
        params.append(f"key={api_key}")

    return f"https://gen.pollinations.ai/image/{quote_plus(safe_prompt)}?{'&'.join(params)}"


# ==============================
# Stable seed generator
# ==============================

def stable_seed_from_key(*parts: str) -> int:
    h = hashlib.sha256("|".join(parts).encode("utf-8")).hexdigest()
    return int(h[:8], 16) % 2147483647



# ==============================
# Schemas
# ==============================

IntW = conint(ge=256, le=1536)
IntSec = conint(ge=1, le=9)


class IllustrationRequest(BaseModel):

    section_text: str = Field(..., min_length=3)

    width: IntW = 896
    height: IntW = 896

    seed: Optional[int] = None
    model: Optional[str] = None

    nologo: bool = True

    reference_images: Optional[List[str]] = None

    username: Optional[str] = None
    section_index: Optional[IntSec] = None


class IllustrationResponse(BaseModel):

    url: str
    prompt: str


class IllustrationBatchRequest(BaseModel):

    sections: List[str] = Field(..., min_items=1, max_items=9)

    width: IntW = 896
    height: IntW = 896

    seed: Optional[int] = None
    model: Optional[str] = None

    nologo: bool = True

    reference_images: Optional[List[str]] = None
    username: Optional[str] = None


class IllustrationBatchItem(BaseModel):

    section: IntSec
    url: str
    prompt: str


class IllustrationBatchResponse(BaseModel):

    images: List[IllustrationBatchItem]


# ==============================
# Routes
# ==============================

@illustration_router.post(
    "/illustrate",
    response_model=IllustrationResponse
)
def illustrate(req: IllustrationRequest):

    if not req.section_text.strip():
        raise HTTPException(
            status_code=400,
            detail="section_text is required."
        )

    prompt = build_illustration_prompt(
        req.section_text,
        req.reference_images
    )

    seed = req.seed

    if seed is None and (req.username or req.section_index):
        seed = stable_seed_from_key(
            req.username or "",
            str(req.section_index or "")
        )

    url = make_image_url(
        prompt=prompt,
        width=req.width,
        height=req.height,
        seed=seed,
        model=req.model,
        nologo=req.nologo,
    )

    return {
        "url": url,
        "prompt": prompt
    }


@illustration_router.post(
    "/illustrate/batch",
    response_model=IllustrationBatchResponse
)
def illustrate_batch(req: IllustrationBatchRequest):

    if not req.sections:
        raise HTTPException(
            status_code=400,
            detail="sections must not be empty."
        )

    images = []

    for idx, raw_text in enumerate(req.sections, start=1):

        section_text = raw_text.strip()

        if not section_text:
            continue

        prompt = build_illustration_prompt(
            section_text,
            req.reference_images
        )

        if req.seed is not None:
            seed = req.seed
        elif req.username:
            seed = stable_seed_from_key(req.username, str(idx))
        else:
            seed = None

        url = make_image_url(
            prompt=prompt,
            width=req.width,
            height=req.height,
            seed=seed,
            model=req.model,
            nologo=req.nologo,
        )

        images.append(
            IllustrationBatchItem(
                section=idx,
                url=url,
                prompt=prompt
            )
        )

    if not images:
        raise HTTPException(
            status_code=400,
            detail="No valid sections provided."
        )

    return {
        "images": images
    }