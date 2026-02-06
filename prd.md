Morsalin Islam Alvee - Portfolio Website
1. Overview
1.1 Product Vision
A modern, visually stunning portfolio website that showcases Morsalin Islam Alvee's skills, projects, and professional identity as a Full-Stack Developer & AI Specialist. The website serves as a digital resume and professional hub.

1.2 Target Audience
Recruiters & Hiring Managers: Looking for talented developers
Potential Clients: Seeking freelance or contract work
Peers & Collaborators: Developers and tech professionals
Open Source Community: Contributors and followers
1.3 Core Value Proposition
Professional Branding: Establishes credibility and expertise
Project Showcase: Demonstrates real work and capabilities
AI-Powered Interaction: Unique chatbot for visitor engagement
Performance: Fast, responsive, SEO-optimized
2. Technical Architecture
2.1 Tech Stack
Category	Technology	Version
Framework	Next.js	14.2.15
UI Library	React	18.3.1
Language	TypeScript	5.x
Styling	Tailwind CSS	3.4.1
Animation	Framer Motion	12.23.26
Icons	Lucide React, React Icons	Latest
AI SDK	Groq SDK	0.37.0
Deployment	Firebase Hosting	-
2.2 Project Structure
portfolio/
├── app/                    # Next.js App Router
│   ├── api/chat/          # AI Chatbot API endpoint
│   ├── globals.css        # Global styles & design system
│   ├── layout.tsx         # Root layout with metadata
│   ├── page.tsx           # Homepage
│   └── not-found.tsx      # Custom 404 page
├── components/            # React components
│   ├── Hero.tsx           # Hero section with profile
│   ├── Navbar.tsx         # Navigation bar
│   ├── Projects.tsx       # Project showcase
│   ├── Skills.tsx         # Skills section with filtering
│   ├── TechStack.tsx      # Technology marquee
│   ├── Contact.tsx        # Contact form
│   ├── Chatbot.tsx        # AI assistant widget
│   ├── Preloader.tsx      # Loading animation
│   ├── ParticleField.tsx  # Background particles
│   ├── CursorTrail.tsx    # Custom cursor effects
│   └── AnimatedIcons.tsx  # Animated skill icons
├── lib/                   # Utilities & data
│   └── data.ts            # Profile data & configuration
├── public/                # Static assets
│   ├── images/            # Profile images
│   ├── projects.json      # GitHub projects data
│   └── resume.pdf         # Downloadable CV
└── Configuration files
    ├── tailwind.config.js
    ├── next.config.mjs
    └── firebase.json
3. Features & Components
3.1 Hero Section
Component: 
Hero.tsx

Feature	Description
Profile Display	Name, role, bio with gradient text
Photo Frame	3D card with parallax mouse tracking
Social Links	GitHub, LinkedIn, Email icons
CTA Buttons	"View Selected Work" + "Download CV"
Animations	Staggered text reveal, floating elements
Data Source: 
lib/data.ts
 PROFILE_DATA

3.2 Navigation
Component: 
Navbar.tsx

Feature	Description
Sticky Header	Fixed position with glassmorphism
Smooth Scroll	React Scroll integration
Mobile Menu	Hamburger with slide-in animation
Active States	Highlight current section
3.3 Skills Section
Component: 
Skills.tsx

Feature	Description
Category Filtering	Frontend, Backend, Mobile, AI/ML, DevOps
Skill Cards	Icon, name, proficiency level
Animations	AnimatePresence for filter transitions
Icons	React Icons (Si* icons for tech logos)
Categories:

Frontend: React, Next.js, TypeScript, Tailwind
Backend: Node.js, NestJS, PostgreSQL, MongoDB
Mobile: Flutter, React Native, Kotlin
AI/ML: TensorFlow, PyTorch, OpenCV
DevOps: Docker, Git, Linux, AWS
3.4 Tech Stack Marquee
Component: 
TechStack.tsx

Feature	Description
Auto-scrolling	Infinite CSS marquee
Technology Icons	DevIcons CDN integration
Grouped Display	By category (Languages, Frontend, etc.)
3.5 Projects Section
Component: 
Projects.tsx

Feature	Description
Project Cards	Name, description, language, stars
GitHub Integration	Links to repositories
Language Colors	Color-coded language badges
Hover Effects	Neon glow, scale animations
Star Count	GitHub stars display
Data Source: 
/public/projects.json
 (fetched from GitHub)

3.6 Contact Section
Component: 
Contact.tsx

Feature	Description
Contact Form	Name, email, message fields
Social Links	GitHub, LinkedIn, Facebook, Email
Location Info	Bangladesh timezone
Glassmorphism	Frosted glass card design
3.7 AI Chatbot
Component: 
Chatbot.tsx

API: 
route.ts

Feature	Description
Floating Widget	Bottom-right position
Minimize/Maximize	Window state controls
Chat History	Message persistence during session
Markdown Support	React Markdown rendering
AI Model	Groq API (openai/gpt-oss-120b)
Context	Profile data injected as system prompt
API Configuration:

Temperature: 1.0
Max Tokens: 8192
Reasoning Effort: Medium
3.8 Visual Effects
Component	Purpose
ParticleField.tsx	Animated background particles
CursorTrail.tsx	Custom cursor with trail effect
AnimatedIcons.tsx	Floating tech icons animation
Preloader.tsx	Initial page loading animation
4. Design System
4.1 Color Palette
Name	Hex	Usage
Neon Teal	#00FFF2	Primary accent
Teal 500	#14B8A6	Secondary accent
Dark BG	#030808	Page background
Card BG	#061010	Component backgrounds
White	#FFFFFF	Text primary
White/60	rgba(255,255,255,0.6)	Text secondary
4.2 Typography
Element	Font	Weight
Primary	Space Grotesk	300-700
Monospace	Fira Code	400-600
4.3 Effects
Effect	Implementation
Glassmorphism	backdrop-blur + semi-transparent bg
Neon Glow	Multi-layer box-shadow
Text Glow	text-shadow with teal
Gradient Text	bg-clip-text + gradient
5. Data Layer
5.1 Profile Data (
data.ts
)
PROFILE_DATA = {
    name: "Morsalin Islam Alvee",
    username: "Alvee0033",
    bio: "Fullstack Developer & AI Specialist",
    about: "...",
    goals: [...],
    links: { github, linkedin, facebook, email },
    skills: [...],
    techStack: { Languages, Frontend, Backend, Mobile, AI/ML, DevOps },
    projects: [...] // from projects.json
}
5.2 Projects Data
Source: GitHub API → projects.json
Fields: name, description, url, language, stars, topics
6. API Endpoints
6.1 Chat API
Endpoint	Method	Purpose
/api/chat	POST	AI chatbot conversations
Request Body:

{
    "message": "string",
    "history": [{ "role": "user|assistant", "content": "string" }]
}
Response:

{ "response": "AI generated response" }
7. Deployment
7.1 Hosting
Service	Configuration
Firebase Hosting	
firebase.json
Domain	alvee-portfolio.web.app
7.2 Build Process
npm run build        # Next.js static export
firebase deploy      # Deploy to hosting
7.3 Environment Variables
Variable	Purpose
GROQ_API_KEY	AI Chatbot API authentication
8. Performance Requirements
Metric	Target
First Contentful Paint	< 1.5s
Largest Contentful Paint	< 2.5s
Cumulative Layout Shift	< 0.1
Time to Interactive	< 3s
9. SEO & Accessibility
9.1 SEO
Meta tags in 
layout.tsx
Semantic HTML structure
Google verification file
Optimized images with Next/Image
9.2 Accessibility
Keyboard navigation support
ARIA labels on interactive elements
Color contrast compliance
Screen reader friendly
10. Future Enhancements
Feature	Priority	Status
Blog Section	Medium	Planned
Dark/Light Theme Toggle	Low	Backlog
Project Filtering	Medium	Backlog
Analytics Dashboard	Low	Backlog
Resume Builder	Low	Backlog
Contact Form Backend	High	Pending
11. Version History
Version	Date	Changes
1.0.0	2026-01	Initial release
1.1.0	2026-01	Added teal theme, Skills filtering
1.2.0	2026-01	Hero redesign, 3D photo frame
12. Links & Resources
Live Site: alvee-portfolio.web.app
GitHub: github.com/Alvee0033
Repository: /home/alvee/Desktop/portfolio
Document generated: 2026-01-27


Comment
Ctrl+Alt+M
