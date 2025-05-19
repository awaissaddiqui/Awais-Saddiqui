import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { SectionTitle } from "@/components/ui/section-title";
import { Eye, Github, ExternalLink, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import smartCity from "../../../attached_assets/smart_city.png"
import AI from "../../public/ai.png";
import figmaSmart from "../../../attached_assets/figmaSmart.png";
import figmaFraud from "../../../attached_assets/figmaFraud.png";
import ELearning from "../../../attached_assets/e-learning.png";
import stripe from "../../../attached_assets/stripe.png";
type ProjectCategory = 'all' | 'web' | 'ui';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  categories: ProjectCategory[];
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
}

export default function ProjectsPage() {
  const [filter, setFilter] = useState<ProjectCategory>('all');

  const projects: Project[] = [
    {
      id: 1,
      title: "Smart City Surveillance SaaS App",
      description: "A comprehensive solution for smart city surveillance, integrating real-time data analytics and AI-driven insights.",
      image: smartCity,
      categories: ['web'],
      technologies: ["React.js", "Flask", "AI Integration", "Supabase", "PostgreSql"],
      githubUrl: "https://github.com/awaissaddiqui/smart-city-surveillance",
      liveUrl: "https://smart-city-surveillance-uetp.netlify.app/"
    },
    {
      id: 2,
      title: "AI-Powered Fraud-Detection",
      description: "A platform designed to combat fraud by allowing users to report suspicious activities and analyze data to identify patterns.",
      image: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      categories: ['web'],
      technologies: ["React-Redux", "Express.js", "Firebase", "Eden API"],
      githubUrl: "https://github.com/awaissaddiqui/FraudShield",
      liveUrl: "#"
    },
    {
      id: 3,
      title: "AI-Based e-learning Platform",
      description: "Learning platform with RESTful API for data communication, course management with admin panel, and AI-based recommendation system.",
      image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      categories: ['web'],
      technologies: ["MERN Stack", "Flask", "AI Recommendation"],
      githubUrl: "https://github.com/awaissaddiqui/E-Learning-Site",
      liveUrl: "#"
    },
    {
      id: 4,
      title: "Car Racer Game",
      description: "Immersive 3D racing game with skyboxes, dynamic roads, environment features, checkpoint-based lap timer, and smooth gameplay controls.",
      image: "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      categories: ['ui'],
      technologies: ["Unity", "C#", "3D Modeling", "Game Design"],
      githubUrl: "https://github.com/awaissaddiqui/Game-developement",
      liveUrl: "#"
    },
    {
      id: 5,
      title: "Payment Gateway Integration",
      description: "Professional work for TestSolz developing and integrating RESTful and GraphQL APIs for scalable web applications.",
      image: stripe,
      categories: ['web'],
      technologies: ["React.js", "TypeScript", "Express.js", "Stripe", "REST API"],
      githubUrl: "https://github.com/awaissaddiqui/shopping-cart-stripe-integration",
      liveUrl: "#"
    },

    {
      id: 6,
      title: "Travel Technology Platform (Moventure)",
      description: "A travel technology platform that provides users with personalized travel recommendations and itineraries using AI.",
      image: AI,
      categories: ['web'],
      technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "Figma"],
      githubUrl: "https://github.com/awaissaddiqui/moventure",
      liveUrl: "#"
    },
    {
      id: 7,
      title: "Product Design and Prototyping",
      description: "A UI/UX design project showcasing a smart city surveillance system for urban safety. Includes user flows, wireframes, and high-fidelity prototypes.",
      image: figmaSmart,
      categories: ['ui'],
      technologies: ["Figma", "UI/UX Design", "Prototyping"],
      githubUrl: "https://www.figma.com/design/nXq0GJMVyAPpDbeCGQonqG/Smart-City?node-id=2-2522&t=JTlf4b2PbMiRpMyV-1",
      liveUrl: "https://www.figma.com/design/nXq0GJMVyAPpDbeCGQonqG/Smart-City?node-id=2-2522&t=JTlf4b2PbMiRpMyV-1"
    },
    {
      id: 8,
      title: "Fraud Shield UI Design",
      description: "A UI/UX design project for a fraud detection platform. Includes user flows, wireframes, and high-fidelity prototypes.",
      image: figmaFraud,
      categories: ['ui'],
      technologies: ["Figma", "UI/UX Design", "Prototyping"],
      githubUrl: "https://github.com/awaissaddiqui/FraudShield",
      liveUrl: "https://www.figma.com/proto/nYGETyfok42SopdGvCRXRz/Fraud-Shield-UI-Design?node-id=503-44343&starting-point-node-id=78%3A351&t=wvOF7uknwg1iICbh-1"
    },
    {
      id: 9,
      title: "E-Learning Platform UI Design",
      description: "A UI/UX design project for an e-learning platform. Includes user flows, wireframes, and high-fidelity prototypes.",
      image: ELearning,
      categories: ['ui'],
      technologies: ["Figma", "UI/UX Design", "Prototyping"],
      githubUrl: "https://github.com/awaissaddiqui/E-Learning-Site",
      liveUrl: "https://www.figma.com/design/u1GjST647GJ6bKEEEFdabM/E-Learning-Site?node-id=0-1&t=piUqJY8yVzJM5pbA-1"
    },
  ];

  const filteredProjects = filter === 'all'
    ? projects
    : projects.filter(project => project.categories.includes(filter));

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-2">
          <Link href="/">
            <a className="inline-flex items-center text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Home
            </a>
          </Link>
        </div>

        <SectionTitle
          title="All Projects"
          description="Explore a collection of my web, mobile, and design projects"
        />

        <div className="flex flex-wrap justify-center gap-3 mb-10 mt-6">
          <Button
            onClick={() => setFilter('all')}
            variant={filter === 'all' ? "default" : "outline"}
            className="rounded-full"
          >
            All Projects
          </Button>
          <Button
            onClick={() => setFilter('web')}
            variant={filter === 'web' ? "default" : "outline"}
            className="rounded-full"
          >
            Web Development
          </Button>
          <Button
            onClick={() => setFilter('ui')}
            variant={filter === 'ui' ? "default" : "outline"}
            className="rounded-full"
          >
            UI/UX Design
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * (project.id % 3), duration: 0.5 }}
              className="bg-white dark:bg-dark-lighter rounded-xl overflow-hidden shadow-md dark:shadow-slate-900/30 hover:shadow-lg dark:hover:shadow-slate-900/50 transition-shadow duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute top-2 right-2 flex gap-2">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 rounded-full flex items-center justify-center bg-white/90 hover:bg-white text-gray-800 transition-colors"
                      aria-label="View GitHub Repository"
                    >
                      <Github className="h-4 w-4" />
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 rounded-full flex items-center justify-center bg-white/90 hover:bg-white text-gray-800 transition-colors"
                      aria-label="View Live Demo"
                    >
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  )}
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-bold text-xl mb-2 text-gray-800 dark:text-white">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <Badge key={index} variant="outline" className="bg-gray-100 dark:bg-dark text-gray-800 dark:text-gray-300">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}