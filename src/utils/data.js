// Importations d'icônes
import {
    Code2,
    GraduationCap,
    Briefcase,
    Award,
    Rocket,
    Heart,
    Coffee,
    BookOpen,
    Zap,
    Database,
    Server,
    Cloud,
    Mail,
    MapPin,
    Phone,
} from 'lucide-react';

import {
    FiGithub,
    FiLinkedin,
    FiTwitter
} from 'react-icons/fi';

// Importations d'images de projet
import PROJECT_IMG_1 from "../assets/images/project-1.png";
import PROJECT_IMG_2 from "../assets/images/project-2.png";
import PROJECT_IMG_3 from "../assets/images/project-3.png";
import PROJECT_IMG_4 from "../assets/images/project-4.png";
import PROJECT_IMG_5 from "../assets/images/project-5.png";
import PROJECT_IMG_6 from "../assets/images/project-6.png";
import PROJECT_IMG_7 from "../assets/images/project-7.png";

// Catégories de compétences
export const SKILLS_CATEGORY = [
    {
        title: "Frontend",
        icon: Code2,
        description: "Crafting beautiful, responsive user interfaces",
        skills: [{
            name: "React",
            level: 95,
            color: "bg-blue-500"
        }, {
            name: "TypeScript",
            level: 90,
            color: "bg-blue-600"
        }, {
            name: "Next.js",
            level: 80,
            color: "bg-gray-800"
        }, {
            name: "Tailwind CSS",
            level: 92,
            color: "bg-gray-500"
        }, {
            name: "Framer Motion",
            level: 85,
            color: "bg-pink-500"
        },],
    },
    {
        title: "Backend",
        icon: Server,
        description: "Building robust server-side solutions",
        skills: [{
            name: "Node.js",
            level: 90,
            color: "bg-green-500"
        }, {
            name: "Express.js",
            level: 88,
            color: "bg-gray-700"
        }, {
            name: "Python",
            level: 85,
            color: "bg-yellow-500"
        }, {
            name: "GraphQL",
            level: 80,
            color: "bg-pink-600"
        }, {
            name: "REST APIs",
            level: 92,
            color: "bg-orange-500"
        },],
    }, {
        title: "Database",
        icon: Database,
        description: "Managing and optimizing data storage",
        skills: [{
            name: "MongoDB",
            level: 88,
            color: "bg-green-600"
        }, {
            name: "MongoDb",
            level: 85,
            color: "bg-blue-700"
        }, {
            name: "Redis",
            level: 80,
            color: "bg-red-500"
        }, {
            name: "Prisma",
            level: 82,
            color: "bg-indigo-600"
        }, {
            name: "Firebase",
            level: 78,
            color: "bg-yellow-600"
        },],
    }, {
        title: "DevOps",
        icon: Cloud,
        description: "Deploying and scaling applications",
        skills: [{
            name: "Docker",
            level: 82,
            color: "bg-blue-600"
        }, {
            name: "AWS",
            level: 78,
            color: "bg-orange-600"
        }, {
            name: "Vercel",
            level: 90,
            color: "bg-gray-900"
        }, {
            name: "Git",
            level: 95,
            color: "bg-orange-700"
        }, {
            name: "CI/CD",
            level: 75,
            color: "bg-purple-600"
        },],
    },];

// Pile technologique
export const TECH_STACK = [
    "JavaScript",
    "HTML5",
    "CSS3",
    "Sass",
    "Webpack",
    "Vite",
    "Jest",
    "Cypress",
    "Figma",
    "Adobe XD",
    "Notion",
    "Slack",
];

// Statistiques
export const STATS = [{
    number: "50+",
    label: "Projects Completed"
}, {
    number: "3+",
    label: "Years of Experience"
}, {
    number: "20K+",
    label: "Technologies"
},{
    number: "100%",
    label: "Client Satisfaction"
},];

// Projets
export const PROJECTS = [{
    id: 1,
    title: "E-Commerce Platform",
    description: "A full-stack E-commerce solution with advanced filtering, payment integration, and real-time inventory management.",
    image: PROJECT_IMG_1,
    tags: ["React", "Tailwind", "Framer motion"],
    liveUrl: "#", // Remplacez par le vrai lien
    githubUrl: "#",
    featured: false,
    category: "Full Stack",
}, {
    id: 2,
    title: "Blog App With AI Post Generator",
    description: "A full-stack blog app using the MERN stack - with full Markdown support, tag filtering, and an integrated AI post generator.",
    image: PROJECT_IMG_2,
    tags: ["React", "Node.js", "MongoDB", "Tailwind"],
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
    category: "Full Stack",
}, {
    id: 3,
    title: "AI Chatbot for Customer Support",
    description: "An intelligent AI chatbot designed to handle customer inquiries, provide instant support, and streamline communication for businesses.",
    image: PROJECT_IMG_3,
    tags: ["Next.js", "TypeScript", "Node.js", "OpenAI API"],
    liveUrl: "#", // Remplacez par le vrai lien
    githubUrl: "#",
    featured: false,
    category: "AI/ML",
}, {
    id: 4,
    title: "AI-Powered Interview Prep App",
    description: "A smart AI-powered Interview Preparation App using the MERN stack - along with the Gemini API for intelligent feedback and practice.",
    image: PROJECT_IMG_4,
    tags: ["Next.js", "TypeScript", "Node.js", "MongoDB"],
    liveUrl: "#",
    githubUrl: "#",
    featured: false,
    category: "Web App",
}, {
    id: 5,
    title: "Resume Builder App",
    description: "A fully functional Resume Builder App using the MERN stack along with Tailwind CSS for a clean, modern UI.",
    image: PROJECT_IMG_5,
    tags: ["Next.js", "TypeScript", "Node.js", "MongoDB"],
    liveUrl: "#",
    githubUrl: "#",
    featured: false,
    category: "Web App",
}, {
    id: 6,
    title: "Expense Tracker App",
    description: "An intuitive Expense Tracker App to help users manage their finances, track expenditures, and visualize spending habits with interactive charts.",
    image: PROJECT_IMG_6,
    tags: ["React", "Firebase", "Chart.js"],
    liveUrl: "#",
    githubUrl: "#",
    featured: false,
    category: "Web App",
}, {
    id: 7,
    title: "Real-time Chat Application",
    description: "A real-time chat application with user authentication, group chats, and direct messaging, built with WebSockets for instant communication.",
    image: PROJECT_IMG_7,
    tags: ["React", "Node.js", "Socket.io", "MongoDB"],
    liveUrl: "#",
    githubUrl: "#",
    featured: false,
    category: "Web App",
},];