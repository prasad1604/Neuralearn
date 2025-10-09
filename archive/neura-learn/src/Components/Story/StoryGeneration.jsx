import React, { useState, useEffect, useRef } from 'react';
import { Modal, Button} from 'react-bootstrap'; // Install react-bootstrap and bootstrap if not done already
import './style.css'

const userProfile = {
  username: "Kunal",
  gender: "Male",
  age: 8,
  favoriteColor: "Blue",
  favoriteAnimal: "Cat",
  favoriteFood: "Pizza",
  favoriteCartoon: "Doraemon"
};

const predefinedStories = [
  { id: 1, title: "Making Friends", description: "Learn how to make new friends at school", emoji: "👥", bgColor: "bg-primary-subtle", borderColor: "border-primary" },
  { id: 2, title: "Going to the Doctor", description: "What happens during a doctor visit", emoji: "🏥", bgColor: "bg-success-subtle", borderColor: "border-success" },
  { id: 3, title: "Sharing Toys", description: "How to share and take turns with toys", emoji: "🧸", bgColor: "bg-warning-subtle", borderColor: "border-warning" },
  { id: 4, title: "Brushing Teeth", description: "Daily routine for dental hygiene", emoji: "🦷", bgColor: "bg-info-subtle", borderColor: "border-info" },
  { id: 5, title: "School Bus Ride", description: "What to expect on the school bus", emoji: "🚌", bgColor: "bg-danger-subtle", borderColor: "border-danger" },
  { id: 6, title: "Birthday Party", description: "Celebrating birthdays with friends", emoji: "🎂", bgColor: "bg-secondary-subtle", borderColor: "border-secondary" }
];

const promptSuggestions = [
  "Write a story about sharing toys at school",
  "Create a story about going to the dentist",
  "Tell a story about making new friends",
  "Write about trying new foods at lunch",
  "Create a story about loud noises at assemblies",
  "Tell a story about visiting the library"
];

const sampleStories = {
  "Making Friends": `Hi, my name is ${userProfile.username}. I am ${userProfile.age} years old and I like the color ${userProfile.favoriteColor.toLowerCase()}. Today I want to make a new friend at school.

When I see someone sitting alone, I can walk over and say 'Hello! My name is ${userProfile.username}. Would you like to play with me?' Sometimes other children might be shy too, just like me.

If they say yes, that's wonderful! We can talk about things we both like. I love ${userProfile.favoriteAnimal.toLowerCase()}s and ${userProfile.favoriteFood.toLowerCase()} and watching ${userProfile.favoriteCartoon}. Maybe they like some of the same things!

If they say no, that's okay too. Not everyone wants to play at the same time. I can try again later or find someone else to be friends with.

Making friends takes time and practice. Every time I try, I get better at it. My teachers and family are proud of me for being brave and kind.`,
  
  "Going to the Doctor": `My name is ${userProfile.username} and I am going to see the doctor today. The doctor's office is a place where doctors help people feel better.

When I arrive, I will sit in the waiting room with my grown-up. There might be other children there too. I can bring my favorite ${userProfile.favoriteColor.toLowerCase()} item to hold if it makes me feel better.

The doctor will call my name when it's my turn. The doctor is a nice person who wants to help me stay healthy. They might listen to my heart with a stethoscope or look in my ears.

If I feel nervous, I can take deep breaths or ask my grown-up to hold my hand. The doctor understands that some children feel worried, and that's perfectly normal.

After the visit, I will feel proud that I was brave. Taking care of my health is important, and the doctor is there to help me.`,
  
  // Add other sample stories similarly...
};


const StoryGeneration = () => {
  // State
  const [customPrompt, setCustomPrompt] = useState('');
  const [isValidPrompt, setIsValidPrompt] = useState(true);
  const [validationMsg, setValidationMsg] = useState('');
  const [activeStoryTitle, setActiveStoryTitle] = useState(null);
  const [activeStoryText, setActiveStoryText] = useState('');
  const [loading, setLoading] = useState(false);
  const [errorModalShow, setErrorModalShow] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  
  const storyDisplayRef = useRef(null);

  // Validate prompt based on your original rules
  const isValidStoryPrompt = (text) => {
    if (!text || text.trim().length < 5) return false;

    const storyKeywords = [
      'story', 'tell', 'write', 'create', 'about', 'make',
      'school', 'friend', 'family', 'home', 'play', 'share',
      'help', 'kind', 'nice', 'happy', 'sad', 'scared', 'brave',
      'doctor', 'dentist', 'store', 'park', 'library', 'bus',
      'eat', 'sleep', 'brush', 'wash', 'clean', 'routine',
      'birthday', 'party', 'celebration', 'visit', 'trip',
      'learn', 'teach', 'practice', 'try', 'new', 'different',
      'going', 'visiting', 'learning', 'feeling', 'being'
    ];

    const invalidKeywords = [
      'hack', 'password', 'login', 'delete', 'destroy', 'hurt',
      'violence', 'weapon', 'inappropriate', 'adult', 'random'
    ];

    if (invalidKeywords.some(keyword => text.includes(keyword))) return false;

    if (/^[0-9\s]+$/.test(text) || /^[a-z]{1,3}\s*[0-9]+/.test(text)) return false;

    const hasStoryKeyword = storyKeywords.some(keyword => text.includes(keyword));
    const hasStoryPattern = text.includes('how to') ||
                            text.includes('what happens') ||
                            /\b(going|visiting|learning|feeling|being|trying|making|sharing)\b/.test(text);

    return hasStoryKeyword || hasStoryPattern;
  };

  // Validate prompt on each change
  useEffect(() => {
    const text = customPrompt.toLowerCase();
    if (customPrompt.length === 0) {
      setIsValidPrompt(true);
      setValidationMsg('');
      return;
    }
    if (isValidStoryPrompt(text)) {
      setIsValidPrompt(true);
      setValidationMsg('✅ Great! This looks like a story request.');
    } else {
      setIsValidPrompt(false);
      setValidationMsg('💡 Please write about a story you\'d like to hear. Try topics like school, friends, activities, or feelings.');
    }
  }, [customPrompt]);

  // Generate fallback story
  const generateFallbackStory = (title) => {
    return `Hello! My name is ${userProfile.username}, and I'm ${userProfile.age} years old. Today I want to share a story with you about ${title.toLowerCase()}.

This is an important part of life that many children experience. Sometimes it might feel new or different, but that's okay! Everyone learns at their own pace.

When I encounter new situations, I remember that it's normal to have different feelings. I can feel excited, nervous, curious, or even a little worried - all of these feelings are okay.

I have people who care about me and want to help me succeed. My family, teachers, and friends are always there to support me when I need them.

By practicing and being patient with myself, I can learn and grow. Every experience teaches me something new and helps me become more confident.

I am proud of myself for being brave and trying new things. This is how I learn and become the best version of myself!`;
  };

  // Generate custom story text
  const generateCustomStoryText = (prompt) => {
    let topic = prompt.toLowerCase()
      .replace(/^(write|create|tell|make).*?(story|about)/i, '')
      .replace(/^(a\s+)?story\s+(about\s+)?/i, '')
      .trim();

    if (!topic) topic = 'something new and exciting';

    return `Hi! My name is ${userProfile.username}, and I'm ${userProfile.age} years old. This is my special story about ${topic}.

Today is an important day because I'm learning about ${topic}. Sometimes new experiences can feel exciting and maybe a little nervous too, and that's perfectly okay! Everyone feels this way when experiencing new things.

I remember that I am brave and capable. When I need to feel calm, I can take deep breaths and think about my favorite things. I love the color ${userProfile.favoriteColor.toLowerCase()} because it makes me feel peaceful and happy.

I also love ${userProfile.favoriteAnimal.toLowerCase()}s - they remind me to be gentle and kind to others. When I'm hungry, I enjoy eating ${userProfile.favoriteFood.toLowerCase()}, which always makes me smile.

During this experience with ${topic}, I will try my best and be patient with myself. It's okay if things don't go perfectly the first time. Learning and growing takes practice, and I am always learning new things.

I have people who care about me and want to help me succeed. My family, teachers, and friends are always there to support me when I need them. If I need help or have questions, I can ask them.

At the end of the day, I will feel proud of myself for being brave and trying something new. My family and friends will be proud of me too, because they love me just the way I am.

This is my story about ${topic}, and I am the hero of my own adventure! Every day I learn and grow, and that makes me special and wonderful.`;
  };

  // Generate story (predefined or custom)
  const generatePredefinedStory = (storyId) => {
    const story = predefinedStories.find(s => s.id === storyId);
    if (!story) return;

    setLoading(true);
    setActiveStoryTitle(null);
    setActiveStoryText('');
    setCustomPrompt('');

    setTimeout(() => {
      setLoading(false);
      const text = sampleStories[story.title] || generateFallbackStory(story.title);
      setActiveStoryTitle(story.title);
      setActiveStoryText(text);
      storyDisplayRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 2500);
  };

  const generateCustomStory = () => {
    if (!customPrompt.trim()) {
      setErrorMessage("Please write what kind of story you'd like to hear!");
      setErrorModalShow(true);
      return;
    }
    if (!isValidPrompt) {
      setErrorMessage("Please write about a story topic! Try asking for stories about school, friends, family, or daily activities.");
      setErrorModalShow(true);
      return;
    }

    setLoading(true);
    setActiveStoryTitle(null);
    setActiveStoryText('');

    setTimeout(() => {
      setLoading(false);
      const text = generateCustomStoryText(customPrompt);
      setActiveStoryTitle('Your Custom Story');
      setActiveStoryText(text);
      storyDisplayRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setCustomPrompt('');
    }, 3000);
  };

  const closeStoryDisplay = () => {
    setActiveStoryTitle(null);
    setActiveStoryText('');
  };

  const printStory = () => {
    if (!activeStoryTitle || !activeStoryText) return;

    const printWindow = window.open('', '_blank');
    printWindow.document.write(`
      <!DOCTYPE html>
      <html>
      <head>
        <title>${activeStoryTitle}</title>
        <link href="https://fonts.googleapis.com/css2?family=Fredoka+One:wght@400&family=ABeeZee:wght@400&display=swap" rel="stylesheet">
        <style>
          body { 
            font-family: 'ABeeZee', Arial, sans-serif; 
            line-height: 1.8; 
            padding: 20px; 
            max-width: 800px; 
            margin: 0 auto;
            color: #2c3e50;
          }
          h1 { 
            font-family: 'Fredoka One', cursive;
            color: #6C9BD1; 
            text-align: center; 
            margin-bottom: 30px;
            font-size: 2.5rem;
          }
          .story-text { 
            font-size: 1.1rem; 
            white-space: pre-line;
            background: linear-gradient(135deg, #f8f9fa, #e3f2fd);
            padding: 30px;
            border-radius: 15px;
            border: 3px solid #6C9BD1;
            box-shadow: 0 5px 15px rgba(0,0,0,0.1);
          }
          .footer {
            text-align: center;
            margin-top: 40px;
            color: #666;
            font-size: 0.95rem;
            font-family: 'Fredoka One', cursive;
          }
          .header-emoji {
            font-size: 3rem;
            display: block;
            margin-bottom: 20px;
          }
        </style>
      </head>
      <body>
        <span class="header-emoji">📚</span>
        <h1>${activeStoryTitle}</h1>
        <div class="story-text">${activeStoryText}</div>
        <div class="footer">
          <p>🌟 Created with NeuraLearn Social Story Generator 🌟</p>
          <p>Personalized for ${userProfile.username}</p>
        </div>
      </body>
      </html>
    `);
    printWindow.document.close();

    setTimeout(() => {
      printWindow.print();
    }, 500);
  };

  return (
    <div>
      <div className="container-fluid main-background">
        <header className="text-center py-4 mb-4">
          <div className="container">
            <h1 className="display-3 header-title text-white mb-3">
              <span className="logo-emoji">📚</span> NeuraLearn Social Stories
            </h1>
            <p className="lead text-white-75 fs-4">Create personalized stories just for you!</p>
          </div>
        </header>

          <div className="card profile-card shadow-lg border-0 rounded-4 mx-auto h-64">
            <div className="card-header bg-gradient-primary text-white text-center py-3">
              <div className="avatar-circle mx-auto mb-2">👤</div>
              <h2 className="card-title mb-0 fs-3">Your Profile</h2>
            </div>
            <div className="card-body p-4">
              <div className="row g-3">
                <div className="col-md-6">
                  <div className="profile-item bg-info-subtle border border-info rounded-3 p-3">
                    <span className="profile-icon me-2">👋</span>
                    <span className="profile-label fw-semibold">Name:</span>
                    <span className="profile-value ms-2">{userProfile.username}</span>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="profile-item bg-warning-subtle border border-warning rounded-3 p-3">
                    <span className="profile-icon me-2">🎂</span>
                    <span className="profile-label fw-semibold">Age:</span>
                    <span className="profile-value ms-2">{userProfile.age} years old</span>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="profile-item bg-success-subtle border border-success rounded-3 p-3">
                    <span className="profile-icon me-2">🌈</span>
                    <span className="profile-label fw-semibold">Favorite Color:</span>
                    <span className="profile-value ms-2">{userProfile.favoriteColor}</span>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="profile-item bg-primary-subtle border border-primary rounded-3 p-3">
                    <span className="profile-icon me-2">🐱</span>
                    <span className="profile-label fw-semibold">Favorite Animal:</span>
                    <span className="profile-value ms-2">{userProfile.favoriteAnimal}</span>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="profile-item bg-danger-subtle border border-danger rounded-3 p-3">
                    <span className="profile-icon me-2">🍕</span>
                    <span className="profile-label fw-semibold">Favorite Food:</span>
                    <span className="profile-value ms-2">{userProfile.favoriteFood}</span>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="profile-item bg-secondary-subtle border border-secondary rounded-3 p-3">
                    <span className="profile-icon me-2">📺</span>
                    <span className="profile-label fw-semibold">Favorite Cartoon:</span>
                    <span className="profile-value ms-2">{userProfile.favoriteCartoon}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
       

        <main className="container">
          <div className="text-center mb-5">
            <h2 className="section-title text-white display-5 mb-3">Choose Your Story Adventure!</h2>
          </div>

     
            <div className="card shadow-lg border-0 rounded-4">
              <div className="card-header bg-gradient-success text-white text-center py-4">
                <h3 className="card-title mb-0 fs-2 text-white">🌟 Ready-Made Stories</h3>
                <p className="mb-0 mt-2 fs-5 text-white">
                  Click on any story to create a personalized version just for you!
                </p>
              </div>
              <div className="card-body p-4">
                <div className="row g-4">
                  {predefinedStories.map(story => (
                    <div key={story.id} className="col-md-6 col-lg-4">
                      <div className={`card story-card h-100 ${story.bgColor} ${story.borderColor} shadow-sm rounded-4`}>
                        <div className="card-body text-center p-4">
                          <span className="story-icon d-block" style={{ fontSize: '2rem' }}>{story.emoji}</span>
                          <h4 className="story-card-title card-title">{story.title}</h4>
                          <p className="story-card-description card-text">{story.description}</p>
                          <button 
                            className="btn btn-primary btn-lg rounded-pill px-4 w-100"
                            onClick={() => generatePredefinedStory(story.id)}
                          >
                            <span className="me-2">✨</span>
                            Create This Story
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
        

      
            <div className="card shadow-lg border-0 rounded-4">
              <div className="card-header bg-gradient-warning text-white text-center py-4">
                <h3 className="card-title mb-0 fs-2 text-white">✨ Create Your Own Story</h3>
                <p className="mb-0 mt-2 fs-5 text-white">
                  Tell us what story you'd like to hear!
                </p>
              </div>
              <div className="card-body p-4">
                <div className="mb-4">
                  <p className="fw-semibold fs-5 mb-3 text-center">💡 Need ideas? Try these:</p>
                  <div className="d-flex flex-wrap justify-content-center gap-2">
                    {promptSuggestions.map((prompt, idx) => (
                      <span
                        key={idx}
                        className="suggestion-chip badge fs-6 me-2 mb-2"
                        style={{ cursor: "pointer" }}
                        onClick={() => setCustomPrompt(prompt)}
                      >
                        {prompt}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mb-4">
                  <textarea
                    id="customPrompt"
                    className="form-control form-control-lg rounded-3 border-2"
                    placeholder="Write about what kind of story you want... For example: 'Write a story about sharing toys at school' or 'Create a story about going to the dentist'"
                    rows="4"
                    style={{ fontSize: "1.1rem" }}
                    value={customPrompt}
                    onChange={(e) => setCustomPrompt(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' && e.ctrlKey) {
                        e.preventDefault();
                        generateCustomStory();
                      }
                    }}
                  />
                  <div className={`mt-2 ${isValidPrompt ? 'text-success' : 'text-danger'}`} style={{ fontWeight: '600' }}>
                    {validationMsg}
                  </div>
                </div>

                <div className="text-center">
                  <button
                    className="btn btn-primary btn-lg px-5 py-3 rounded-pill shadow"
                    disabled={!isValidPrompt}
                    onClick={generateCustomStory}
                    style={{ fontSize: "1.2rem" }}
                  >
                    <span className="me-2">✨</span>Create My Story
                  </button>
                </div>
              </div>
            </div>
          

          {activeStoryTitle && (
            <section className="mb-5" ref={storyDisplayRef}>
              <div className="card shadow-lg border-0 rounded-4">
                <div className="card-header bg-gradient-info text-white d-flex justify-content-between align-items-center py-3">
                  <h3 className="card-title mb-0 fs-2 text-white">{activeStoryTitle}</h3>
                  <button
                    className="btn btn-outline-light btn-sm rounded-pill"
                    onClick={closeStoryDisplay}
                    aria-label="Close story"
                  >
                    <span className="me-1">✖️</span>Close
                  </button>
                </div>
                <div className="card-body p-4">
                  <div
                    className="story-text bg-light border border-2 border-info rounded-3 p-4 mb-4"
                    style={{ fontSize: "1.1rem", lineHeight: 1.8, whiteSpace: 'pre-wrap' }}
                  >
                    {activeStoryText}
                  </div>
                  <div className="text-center">
                    <div className="btn-group gap-3" role="group">
                      <Button variant="warning" size="lg" className="rounded-pill px-4" onClick={generateCustomStory}>
                        <span className="me-2">🔄</span>Make Another Story
                      </Button>
                      <Button variant="outline-primary" size="lg" className="rounded-pill px-4" onClick={printStory}>
                        <span className="me-2">🖨️</span>Print Story
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          )}
        </main>
      </div>

      {/* Loading Modal */}
      <Modal centered show={loading} backdrop="static" keyboard={false} aria-labelledby="loadingModalLabel">
        <Modal.Body className="text-center p-5">
          <div className="fs-1 mb-4">📖</div>
          <h3 className="text-primary mb-3" id="loadingModalLabel">Creating your story...</h3>
          <p className="text-secondary fs-5">Please wait while we personalize your story just for you!</p>
          <div className="progress mt-4" style={{ height: "8px" }}>
            <div
              className="progress-bar bg-gradient-primary progress-bar-striped progress-bar-animated"
              role="progressbar"
              style={{ width: "100%" }}
            />
          </div>
        </Modal.Body>
      </Modal>

      {/* Error Modal */}
      <Modal centered show={errorModalShow} onHide={() => setErrorModalShow(false)} aria-labelledby="errorModalLabel">
        <Modal.Body className="text-center p-5">
          <div className="fs-1 mb-4">😊</div>
          <h3 className="text-primary mb-3" id="errorModalLabel">Oops! Let's try again</h3>
          <p className="text-secondary fs-5 mb-4">{errorMessage}</p>
          <Button variant="primary" size="lg" className="rounded-pill px-4" onClick={() => setErrorModalShow(false)}>
            <span className="me-2">👍</span>Got it!
          </Button>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default StoryGeneration;
