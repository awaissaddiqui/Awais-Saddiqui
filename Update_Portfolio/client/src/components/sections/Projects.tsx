import { SectionTitle } from "@/components/ui/section-title";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useState } from "react";
import { Github, ExternalLink } from "lucide-react";
import AI from '../../../public/ai.png';
import smartCity from "../../../../attached_assets/smart_city.png"
import figmaSmart from "../../../../attached_assets/figmaSmart.png"
import figmaFraud from "../../../../attached_assets/figmaFraud.png"
import ELearning from "../../../../attached_assets/e-learning.png"
import stripe from "../../../../attached_assets/stripe.png"
type ProjectCategory = 'all' | 'web' | 'mobile' | 'ui';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  categories: ProjectCategory[];
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  dribbbleUrl?: string;
}

export function Projects() {
  const [activeFilter, setActiveFilter] = useState<ProjectCategory>('all');

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

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(project => project.categories.includes(activeFilter));

  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: custom * 0.1,
        duration: 0.6,
        ease: "easeOut"
      }
    })
  };

  return (
    <section id="projects" className="py-20 lg:py-32 bg-light-darker dark:bg-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="My Projects"
          description="Showcasing my recent work and achievements"
        />

        {/* Filter tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {(['all', 'web', 'ui'] as const).map((filter) => (
            <Button
              key={filter}
              variant={activeFilter === filter ? "default" : "outline"}
              onClick={() => setActiveFilter(filter)}
              className="capitalize px-5"
            >
              {filter === 'all' ? 'All' : filter === 'web' ? 'Web Apps' : filter === 'ui' ? 'UI/UX Design' : null}
            </Button>
          ))}
        </div>

        {/* Projects grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          layout
        >
          {filteredProjects.slice(0, 6).map((project, index) => (
            <motion.div
              key={project.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              custom={index % 3}
              variants={fadeInUpVariants}
              layout
              className="group"
            >
              <div className="relative overflow-hidden rounded-xl shadow-lg project-card">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="project-overlay absolute inset-0 bg-gradient-to-t from-dark/90 to-dark/40 opacity-0 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-blue-600 font-bold text-sm mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 bg-primary/20 text-primary text-xs rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-3 mt-4">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:text-primary transition-colors duration-200"
                        aria-label={`View ${project.title} on GitHub`}
                      >
                        <Github className="h-5 w-5" />
                      </a>
                    )}
                    {project.dribbbleUrl && (
                      <a
                        href={project.dribbbleUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:text-primary transition-colors duration-200"
                        aria-label={`View ${project.title} on Dribbble`}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          className="h-5 w-5 fill-current"
                        >
                          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5.23 5.97a8.474 8.474 0 0 1 1.92 5.34c-.28-.06-3.1-.62-5.94-.28-.06-.15-.12-.29-.18-.43-.18-.44-.38-.88-.58-1.3 3.2-1.31 4.66-3.19 4.78-3.33zm-1.8-1.49c-.14.2-1.33 1.88-4.29 2.98-1.34-2.46-2.82-4.52-3.04-4.82 2.31-1.01 4.68-.16 7.33 1.84zm-9.8.5c.2.28 1.67 2.34 3.02 4.77-3.82 1.02-7.2.98-7.53.97.53-2.53 2.22-4.65 4.51-5.74zM4.13 12.03c0-.08 0-.17.01-.25.31.01 4.24.05 8.29-1.15.23.45.45.91.65 1.37-3.35.87-5.29 3.4-5.64 3.84-2.05-1.51-3.26-3.48-3.31-5.81zm5.8 7.02c.15-.25 2.05-2.69 5.57-3.69 1.55 4.1 2.2 7.25 2.27 7.83-2.28.91-4.96.53-7.84-4.14zm8.9 3.02c-.04-.44-.67-3.46-2.07-7.48 2.68-.43 5.02.29 5.34.37a8.5 8.5 0 0 1-3.27 7.11z" />
                        </svg>
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:text-primary transition-colors duration-200"
                        aria-label={`Visit ${project.title} live site`}
                      >
                        <ExternalLink className="h-5 w-5" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="text-center mt-12">
          <a href="/projects">
            <Button size="lg" className="gap-2">
              View All Projects
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-4 w-4"
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}
