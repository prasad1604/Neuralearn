// Social Story Generator Application with Bootstrap 5
class SocialStoryGenerator {
    constructor() {
        this.userProfile = {
            username: "Alex",
            gender: "Non-binary", 
            age: 8,
            favoriteColor: "Blue",
            favoriteAnimal: "Cat",
            favoriteFood: "Pizza",
            favoriteCartoon: "Bluey"
        };

        this.predefinedStories = [
            {
                id: 1,
                title: "Making Friends",
                description: "Learn how to make new friends at school",
                emoji: "👥",
                bgColor: "bg-primary-subtle",
                borderColor: "border-primary"
            },
            {
                id: 2,
                title: "Going to the Doctor",
                description: "What happens during a doctor visit",
                emoji: "🏥",
                bgColor: "bg-success-subtle",
                borderColor: "border-success"
            },
            {
                id: 3,
                title: "Sharing Toys",
                description: "How to share and take turns with toys",
                emoji: "🧸",
                bgColor: "bg-warning-subtle",
                borderColor: "border-warning"
            },
            {
                id: 4,
                title: "Brushing Teeth",
                description: "Daily routine for dental hygiene",
                emoji: "🦷",
                bgColor: "bg-info-subtle",
                borderColor: "border-info"
            },
            {
                id: 5,
                title: "School Bus Ride",
                description: "What to expect on the school bus",
                emoji: "🚌",
                bgColor: "bg-danger-subtle",
                borderColor: "border-danger"
            },
            {
                id: 6,
                title: "Birthday Party",
                description: "Celebrating birthdays with friends",
                emoji: "🎂",
                bgColor: "bg-secondary-subtle",
                borderColor: "border-secondary"
            }
        ];

        this.promptSuggestions = [
            "Write a story about sharing toys at school",
            "Create a story about going to the dentist",
            "Tell a story about making new friends",
            "Write about trying new foods at lunch",
            "Create a story about loud noises at assemblies",
            "Tell a story about visiting the library"
        ];

        this.sampleStories = {
            "Making Friends": `Hi, my name is ${this.userProfile.username}. I am ${this.userProfile.age} years old and I like the color ${this.userProfile.favoriteColor.toLowerCase()}. Today I want to make a new friend at school.

When I see someone sitting alone, I can walk over and say 'Hello! My name is ${this.userProfile.username}. Would you like to play with me?' Sometimes other children might be shy too, just like me.

If they say yes, that's wonderful! We can talk about things we both like. I love ${this.userProfile.favoriteAnimal.toLowerCase()}s and ${this.userProfile.favoriteFood.toLowerCase()} and watching ${this.userProfile.favoriteCartoon}. Maybe they like some of the same things!

If they say no, that's okay too. Not everyone wants to play at the same time. I can try again later or find someone else to be friends with.

Making friends takes time and practice. Every time I try, I get better at it. My teachers and family are proud of me for being brave and kind.`,

            "Going to the Doctor": `My name is ${this.userProfile.username} and I am going to see the doctor today. The doctor's office is a place where doctors help people feel better.

When I arrive, I will sit in the waiting room with my grown-up. There might be other children there too. I can bring my favorite ${this.userProfile.favoriteColor.toLowerCase()} item to hold if it makes me feel better.

The doctor will call my name when it's my turn. The doctor is a nice person who wants to help me stay healthy. They might listen to my heart with a stethoscope or look in my ears.

If I feel nervous, I can take deep breaths or ask my grown-up to hold my hand. The doctor understands that some children feel worried, and that's perfectly normal.

After the visit, I will feel proud that I was brave. Taking care of my health is important, and the doctor is there to help me.`,

            "Sharing Toys": `Hello! My name is ${this.userProfile.username}, and I'm ${this.userProfile.age} years old. Today I'm going to learn about sharing toys with my friends.

When I have a toy that I'm playing with, sometimes my friends might want to play with it too. This is normal! Everyone likes to play with fun toys.

If someone asks to play with my toy, I can say "Sure! We can take turns." Taking turns means I play for a little while, then my friend plays for a little while.

Sometimes it's hard to share, especially if I really like the toy. That's okay! I can count to ten and remember that sharing makes everyone happy. When I share, my friends will want to share with me too.

I can suggest playing together! Maybe we can build something with blocks together, or take turns being different characters. Playing together is even more fun than playing alone.

When I share my toys, I feel good inside. My friends think I'm kind, and they want to play with me more. Sharing helps me make friends and have more fun!`,

            "Brushing Teeth": `Hi! I'm ${this.userProfile.username}, and I take care of my teeth every day. Brushing my teeth is an important part of my routine.

Every morning when I wake up, and every night before bed, I brush my teeth. This keeps them clean and healthy, just like how I keep my body clean.

First, I put a small amount of toothpaste on my toothbrush. The toothpaste might taste like mint or fruit - I can choose one I like! Then I brush gently in small circles.

I brush the front of my teeth, the back of my teeth, and the tops where I chew. I count to make sure I brush for long enough - sometimes I count to 30, or sing a short song.

When I'm done brushing, I spit out the toothpaste and rinse my mouth with water. Then I rinse my toothbrush too and put it away.

Clean teeth help me eat my favorite foods like ${this.userProfile.favoriteFood.toLowerCase()} and keep my smile bright and healthy!`,

            "School Bus Ride": `My name is ${this.userProfile.username}, and today I'm taking the school bus! The school bus is a big yellow vehicle that takes children to and from school safely.

When the bus arrives, I wait for it to stop completely before I get on. The bus driver is a helpful person who makes sure everyone gets to school safely.

I find an empty seat or sit next to a friend. I put my backpack on my lap or under the seat so it doesn't block the aisle. On the bus, I use my quiet voice so everyone can have a peaceful ride.

Sometimes the bus might be a little bumpy or make noise - that's normal for buses! I can look out the window and see interesting things on the way to school, or talk quietly with friends.

The bus ride is a good time to think about my day at school. Maybe I'll see my teacher, play with friends, or learn something new. I feel excited about the day ahead!

When we arrive at school, I wait for my turn to get off the bus and remember to thank the bus driver. Taking the bus is a fun way to start and end my school day!`,

            "Birthday Party": `Hello! My name is ${this.userProfile.username}, and today I'm going to a birthday party! Birthday parties are special celebrations for someone's special day.

When I arrive at the party, I might see balloons, decorations, and other children. There might be games to play and fun activities. I brought a gift for the birthday person to show I care about them.

At parties, there are usually games like musical chairs or pin the tail on the donkey. I try my best to play fairly and have fun. If I don't win a game, that's okay - the important thing is to celebrate with friends!

There will probably be cake and maybe ice cream too! I wait patiently for everyone to sing "Happy Birthday" before we eat. The birthday person gets to blow out the candles and make a wish.

Sometimes parties can be loud or busy. If I feel overwhelmed, I can ask a grown-up to help me find a quieter space for a few minutes. It's okay to take breaks when I need them.

Birthday parties are about celebrating friendship and having fun together. Even if some things are different than I expected, I can still enjoy celebrating with my friends!`
        };

        // Initialize Bootstrap modals
        this.loadingModal = null;
        this.errorModal = null;
        
        this.init();
    }

    init() {
        this.loadUserProfile();
        this.generateStoryCards();
        this.generatePromptSuggestions();
        this.bindEvents();
        this.setupPromptValidation();
        this.initializeModals();
    }

    initializeModals() {
        // Initialize Bootstrap modals
        this.loadingModal = new bootstrap.Modal(document.getElementById('loadingModal'));
        this.errorModal = new bootstrap.Modal(document.getElementById('errorModal'));
    }

    loadUserProfile() {
        // Update profile display
        document.getElementById('username').textContent = this.userProfile.username || 'Not specified';
        document.getElementById('age').textContent = this.userProfile.age ? `${this.userProfile.age} years old` : 'Not specified';
        document.getElementById('favoriteColor').textContent = this.userProfile.favoriteColor || 'Not specified';
        document.getElementById('favoriteAnimal').textContent = this.userProfile.favoriteAnimal || 'Not specified';
        document.getElementById('favoriteFood').textContent = this.userProfile.favoriteFood || 'Not specified';
        document.getElementById('favoriteCartoon').textContent = this.userProfile.favoriteCartoon || 'Not specified';
    }

    generateStoryCards() {
        const storyGrid = document.getElementById('storyGrid');
        storyGrid.innerHTML = '';

        this.predefinedStories.forEach(story => {
            const storyCard = document.createElement('div');
            storyCard.className = 'col-md-6 col-lg-4';
            storyCard.innerHTML = `
                <div class="card story-card h-100 ${story.bgColor} ${story.borderColor} shadow-sm rounded-4">
                    <div class="card-body text-center p-4">
                        <span class="story-icon d-block">${story.emoji}</span>
                        <h4 class="story-card-title card-title">${story.title}</h4>
                        <p class="story-card-description card-text">${story.description}</p>
                        <button class="btn btn-primary btn-lg rounded-pill px-4 w-100" data-story-id="${story.id}">
                            <span class="me-2">✨</span>
                            Create This Story
                        </button>
                    </div>
                </div>
            `;
            storyGrid.appendChild(storyCard);
        });
    }

    generatePromptSuggestions() {
        const suggestionsContainer = document.getElementById('promptSuggestions');
        suggestionsContainer.innerHTML = '';

        this.promptSuggestions.forEach(suggestion => {
            const chip = document.createElement('span');
            chip.className = 'suggestion-chip badge fs-6 me-2 mb-2';
            chip.textContent = suggestion;
            chip.style.cursor = 'pointer';
            chip.addEventListener('click', () => {
                document.getElementById('customPrompt').value = suggestion;
                this.validateCustomPrompt();
            });
            suggestionsContainer.appendChild(chip);
        });
    }

    bindEvents() {
        // Story card clicks
        document.getElementById('storyGrid').addEventListener('click', (e) => {
            if (e.target.closest('button[data-story-id]')) {
                const button = e.target.closest('button[data-story-id]');
                const storyId = parseInt(button.dataset.storyId);
                this.generatePredefinedStory(storyId);
            }
        });

        // Custom story generation
        document.getElementById('generateCustomBtn').addEventListener('click', () => {
            this.generateCustomStory();
        });

        // Story actions
        document.getElementById('closeStory').addEventListener('click', () => {
            this.closeStoryDisplay();
        });

        document.getElementById('regenerateBtn').addEventListener('click', () => {
            this.closeStoryDisplay();
        });

        document.getElementById('printBtn').addEventListener('click', () => {
            this.printStory();
        });

        // Modal close events
        document.getElementById('closeErrorBtn').addEventListener('click', () => {
            this.errorModal.hide();
        });

        // Enter key in textarea
        document.getElementById('customPrompt').addEventListener('keydown', (e) => {
            if (e.key === 'Enter' && e.ctrlKey) {
                e.preventDefault();
                this.generateCustomStory();
            }
        });

        // Add interactive feedback for buttons and cards
        this.addInteractiveFeedback();
    }

    addInteractiveFeedback() {
        document.addEventListener('click', (e) => {
            if (e.target.matches('.btn, .story-card, .suggestion-chip') || 
                e.target.closest('.btn, .story-card, .suggestion-chip')) {
                
                const element = e.target.matches('.btn, .story-card, .suggestion-chip') 
                    ? e.target 
                    : e.target.closest('.btn, .story-card, .suggestion-chip');
                
                // Add click animation
                element.style.transform = 'scale(0.95)';
                setTimeout(() => {
                    element.style.transform = '';
                }, 150);
            }
        });
    }

    setupPromptValidation() {
        const promptInput = document.getElementById('customPrompt');
        
        promptInput.addEventListener('input', () => {
            this.validateCustomPrompt();
        });
    }

    isValidStoryPrompt(text) {
        if (!text || text.trim().length < 5) {
            return false;
        }

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

        // Check for invalid content
        if (invalidKeywords.some(keyword => text.includes(keyword))) {
            return false;
        }

        // Check if it's just random characters or numbers
        if (/^[0-9\s]+$/.test(text) || /^[a-z]{1,3}\s*[0-9]+/.test(text)) {
            return false;
        }

        // Must contain story-related keywords or patterns
        const hasStoryKeyword = storyKeywords.some(keyword => text.includes(keyword));
        const hasStoryPattern = text.includes('how to') || 
                               text.includes('what happens') ||
                               /\b(going|visiting|learning|feeling|being|trying|making|sharing)\b/.test(text);

        return hasStoryKeyword || hasStoryPattern;
    }

    validateCustomPrompt() {
        const prompt = document.getElementById('customPrompt').value.trim();
        const generateBtn = document.getElementById('generateCustomBtn');
        const validationDiv = document.getElementById('inputValidation');
        
        if (prompt.length === 0) {
            validationDiv.innerHTML = '';
            validationDiv.className = '';
            generateBtn.disabled = false;
            return true;
        }

        const isValid = this.isValidStoryPrompt(prompt.toLowerCase());
        
        if (isValid) {
            validationDiv.innerHTML = '<span class="text-success fw-bold"><i class="me-1">✅</i>Great! This looks like a story request.</span>';
            generateBtn.disabled = false;
        } else {
            validationDiv.innerHTML = '<span class="text-danger fw-bold"><i class="me-1">💡</i>Please write about a story you\'d like to hear. Try topics like school, friends, daily activities, or feelings.</span>';
            generateBtn.disabled = true;
        }
        
        return isValid;
    }

    generatePredefinedStory(storyId) {
        const story = this.predefinedStories.find(s => s.id === storyId);
        if (!story) return;

        this.showLoadingModal();

        // Simulate API delay with realistic timing
        setTimeout(() => {
            this.hideLoadingModal();
            const storyText = this.sampleStories[story.title] || this.generateFallbackStory(story.title);
            this.displayStory(story.title, storyText);
        }, 2500);
    }

    generateCustomStory() {
        const prompt = document.getElementById('customPrompt').value.trim();
        
        if (!prompt) {
            this.showErrorModal('Please write what kind of story you\'d like to hear!');
            return;
        }

        if (!this.isValidStoryPrompt(prompt.toLowerCase())) {
            this.showErrorModal('Please write about a story topic! Try asking for stories about school, friends, family, or daily activities. For example: "Write a story about sharing toys" or "Tell a story about going to the dentist".');
            return;
        }

        this.showLoadingModal();

        // Simulate API delay
        setTimeout(() => {
            this.hideLoadingModal();
            const storyText = this.generateCustomStoryText(prompt);
            this.displayStory('Your Custom Story', storyText);
        }, 3000);
    }

    generateCustomStoryText(prompt) {
        let topic = prompt.toLowerCase()
            .replace(/^(write|create|tell|make).*?(story|about)/i, '')
            .replace(/^(a\s+)?story\s+(about\s+)?/i, '')
            .trim();

        if (!topic) {
            topic = 'something new and exciting';
        }

        const userName = this.userProfile.username;
        const age = this.userProfile.age;
        const favoriteColor = this.userProfile.favoriteColor.toLowerCase();
        const favoriteAnimal = this.userProfile.favoriteAnimal.toLowerCase();
        const favoriteFood = this.userProfile.favoriteFood.toLowerCase();

        return `Hi! My name is ${userName}, and I'm ${age} years old. This is my special story about ${topic}.

Today is an important day because I'm learning about ${topic}. Sometimes new experiences can feel exciting and maybe a little nervous too, and that's perfectly okay! Everyone feels this way when experiencing new things.

I remember that I am brave and capable. When I need to feel calm, I can take deep breaths and think about my favorite things. I love the color ${favoriteColor} because it makes me feel peaceful and happy.

I also love ${favoriteAnimal}s - they remind me to be gentle and kind to others. When I'm hungry, I enjoy eating ${favoriteFood}, which always makes me smile.

During this experience with ${topic}, I will try my best and be patient with myself. It's okay if things don't go perfectly the first time. Learning and growing takes practice, and I am always learning new things.

I have people who care about me and want to help me succeed. My family, teachers, and friends are always there to support me when I need them. If I need help or have questions, I can ask them.

At the end of the day, I will feel proud of myself for being brave and trying something new. My family and friends will be proud of me too, because they love me just the way I am.

This is my story about ${topic}, and I am the hero of my own adventure! Every day I learn and grow, and that makes me special and wonderful.`;
    }

    generateFallbackStory(title) {
        const userName = this.userProfile.username;
        const age = this.userProfile.age;

        return `Hello! My name is ${userName}, and I'm ${age} years old. Today I want to share a story with you about ${title.toLowerCase()}.

This is an important part of life that many children experience. Sometimes it might feel new or different, but that's okay! Everyone learns at their own pace.

When I encounter new situations, I remember that it's normal to have different feelings. I can feel excited, nervous, curious, or even a little worried - all of these feelings are okay.

I have people who care about me and want to help me succeed. My family, teachers, and friends are always there to support me when I need them.

By practicing and being patient with myself, I can learn and grow. Every experience teaches me something new and helps me become more confident.

I am proud of myself for being brave and trying new things. This is how I learn and become the best version of myself!`;
    }

    displayStory(title, text) {
        document.getElementById('storyTitle').textContent = title;
        document.getElementById('storyText').textContent = text;
        document.getElementById('storyDisplay').classList.remove('d-none');
        
        // Smooth scroll to story display
        document.getElementById('storyDisplay').scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
        });
    }

    closeStoryDisplay() {
        document.getElementById('storyDisplay').classList.add('d-none');
        document.getElementById('customPrompt').value = '';
        this.validateCustomPrompt();
    }

    showLoadingModal() {
        this.loadingModal.show();
    }

    hideLoadingModal() {
        this.loadingModal.hide();
    }

    showErrorModal(message) {
        document.getElementById('errorMessage').textContent = message;
        this.errorModal.show();
    }

    printStory() {
        const storyTitle = document.getElementById('storyTitle').textContent;
        const storyText = document.getElementById('storyText').textContent;
        
        const printWindow = window.open('', '_blank');
        printWindow.document.write(`
            <!DOCTYPE html>
            <html>
            <head>
                <title>${storyTitle}</title>
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
                <h1>${storyTitle}</h1>
                <div class="story-text">${storyText}</div>
                <div class="footer">
                    <p>🌟 Created with NeuraLearn Social Story Generator 🌟</p>
                    <p>Personalized for ${this.userProfile.username}</p>
                </div>
            </body>
            </html>
        `);
        printWindow.document.close();
        
        // Wait for fonts to load before printing
        setTimeout(() => {
            printWindow.print();
        }, 500);
    }
}

// Initialize the application when DOM and Bootstrap are loaded
document.addEventListener('DOMContentLoaded', () => {
    // Wait for Bootstrap to be fully loaded
    if (typeof bootstrap !== 'undefined') {
        new SocialStoryGenerator();
    } else {
        // Fallback if Bootstrap isn't loaded yet
        setTimeout(() => {
            new SocialStoryGenerator();
        }, 100);
    }
});

// Enhanced accessibility and interactions
document.addEventListener('DOMContentLoaded', () => {
    // Keyboard navigation support
    document.addEventListener('keydown', (e) => {
        // Escape key functionality
        if (e.key === 'Escape') {
            const storyDisplay = document.getElementById('storyDisplay');
            if (!storyDisplay.classList.contains('d-none')) {
                storyDisplay.classList.add('d-none');
            }
        }
    });

    // Enhanced focus management
    const focusableSelector = 'button:not(:disabled), [href], input:not(:disabled), select:not(:disabled), textarea:not(:disabled), [tabindex]:not([tabindex="-1"])';
    
    // Trap focus in modals
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Tab') {
            const activeModal = document.querySelector('.modal.show');
            if (activeModal) {
                const focusableElements = activeModal.querySelectorAll(focusableSelector);
                const firstFocusable = focusableElements[0];
                const lastFocusable = focusableElements[focusableElements.length - 1];

                if (e.shiftKey) {
                    if (document.activeElement === firstFocusable) {
                        lastFocusable.focus();
                        e.preventDefault();
                    }
                } else {
                    if (document.activeElement === lastFocusable) {
                        firstFocusable.focus();
                        e.preventDefault();
                    }
                }
            }
        }
    });

    // Add gentle hover effects for cards
    document.addEventListener('mouseover', (e) => {
        if (e.target.closest('.story-card')) {
            e.target.closest('.story-card').style.transform = 'translateY(-5px) scale(1.02)';
        }
    });

    document.addEventListener('mouseout', (e) => {
        if (e.target.closest('.story-card')) {
            e.target.closest('.story-card').style.transform = '';
        }
    });

    // Add click sound effect simulation (visual feedback)
    document.addEventListener('click', (e) => {
        if (e.target.matches('.btn') || e.target.closest('.btn')) {
            const button = e.target.matches('.btn') ? e.target : e.target.closest('.btn');
            
            // Add ripple effect
            const ripple = document.createElement('span');
            ripple.style.cssText = `
                position: absolute;
                border-radius: 50%;
                background: rgba(255,255,255,0.6);
                transform: scale(0);
                animation: ripple 0.6s linear;
                pointer-events: none;
            `;
            
            const rect = button.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = (e.clientX - rect.left - size / 2) + 'px';
            ripple.style.top = (e.clientY - rect.top - size / 2) + 'px';
            
            button.style.position = 'relative';
            button.style.overflow = 'hidden';
            button.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        }
    });
});

// Add CSS for ripple animation
const rippleStyle = document.createElement('style');
rippleStyle.textContent = `
@keyframes ripple {
    to {
        transform: scale(4);
        opacity: 0;
    }
}
`;
document.head.appendChild(rippleStyle);