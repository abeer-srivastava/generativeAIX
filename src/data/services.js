import { FileText, User, Languages, Image, MessageSquare, Code, Database, Zap } from 'lucide-react';

export const services = [
  {
    id: 1,
    title: "Auto Blog Generator",
    description: "AI-powered content creation tool that generates high-quality blog posts automatically based on your topics and preferences.",
    icon: FileText,
    category: "GENERATOR"
  },
  {
    id: 2,
    title: "Resume Builder",
    description: "Create professional resumes with AI assistance. Smart formatting and content suggestions for maximum impact.",
    icon: User,
    category: "TOOL"
  },
  {
    id: 3,
    title: "Language Translator",
    description: "Advanced AI translation service supporting 100+ languages with context-aware translations and cultural nuances.",
    icon: Languages,
    category: "AI"
  },
  {
    id: 4,
    title: "Image Generator",
    description: "Generate stunning images from text descriptions using state-of-the-art AI models and creative algorithms.",
    icon: Image,
    category: "GENERATOR"
  },
  {
    id: 5,
    title: "Chat Bot",
    description: "Intelligent conversational AI that can handle customer queries, provide support, and engage users naturally.",
    icon: MessageSquare,
    category: "AI"
  },
  {
    id: 6,
    title: "Code Generator",
    description: "AI-powered code generation tool that creates clean, efficient code in multiple programming languages.",
    icon: Code,
    category: "GENERATOR"
  },
  {
    id: 7,
    title: "Data Analyzer",
    description: "Advanced data analysis tool that provides insights, patterns, and predictions from your datasets.",
    icon: Database,
    category: "TOOL"
  },
  {
    id: 8,
    title: "Process Automator",
    description: "Streamline your workflows with intelligent automation solutions that save time and reduce manual effort.",
    icon: Zap,
    category: "TOOL"
  }
];