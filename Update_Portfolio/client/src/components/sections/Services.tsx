import { SectionTitle } from "@/components/ui/section-title";
import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import AI from '../../../public/ai.png';
interface Service {
  title: string;
  description: string;
  image: string;
  features: string[];
}

export function Services() {
  const services: Service[] = [
    {
      title: "MERN Stack Development",
      description: "Full-stack web application development using MongoDB, Express.js, React, and Node.js. Building responsive, fast, and scalable web solutions.",
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=200",
      features: [
        "Frontend & Backend Integration",
        "RESTful API Development",
        "MongoDB Database Design"
      ]
    },
    {
      title: "Next.js Applications",
      description: "Modern web applications with server-side rendering, static site generation, and API routes using Next.js framework.",
      image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=200",
      features: [
        "Server-Side Rendering",
        "Static Site Generation",
        "API Routes & Middleware"
      ]
    },
    {
      title: "UI/UX Design",
      description: "User-centered design with Figma, focusing on usability, accessibility, and modern aesthetics to create intuitive user experiences.",
      image: "https://images.unsplash.com/photo-1559028012-481c04fa702d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=200",
      features: [
        "Wireframing & Prototyping",
        "Responsive Design",
        "Design System Creation"
      ]
    },
    {
      title: "AI Integration",
      description: "Implementing AI models and third-party AI APIs into web applications to enhance functionality and user experience.",
      image: AI,
      features: [
        "AI Model Integration",
        "Recommendation Systems",
        "Natural Language Processing"
      ]
    },
    {
      title: "Database Solutions",
      description: "Database design and implementation for web applications using MongoDB, PostgreSQL, Firebase, and Supabase.",
      image: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=200",
      features: [
        "NoSQL & SQL Database Design",
        "Data Modeling & Optimization",
        "Database Migration"
      ]
    },
    {
      title: "Code Review & Optimization",
      description: "Improving code quality, performance, and maintainability through comprehensive code reviews and optimization techniques.",
      image: "https://images.unsplash.com/photo-1527689368864-3a821dbccc34?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=200",
      features: [
        "Code Quality Assessment",
        "Performance Optimization",
        "Refactoring & Best Practices"
      ]
    }
  ];

  return (
    <section id="services" className="py-20 lg:py-32 bg-light-darker dark:bg-[#181A20] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="My Services"
          description="Professional services I offer to my clients"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="bg-white dark:bg-[#23272F] rounded-xl shadow-lg dark:shadow-none p-8 hover:shadow-xl dark:hover:shadow-lg transition-all duration-300 hover:translate-y-[-5px] border border-transparent dark:border-[#23272F]"
            >
              <img
                src={service.image}
                alt={`${service.title} Service`}
                className="w-full h-48 object-cover rounded-lg mb-6 bg-gray-100 dark:bg-[#181A20]"
              />
              <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">{service.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                {service.description}
              </p>
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-gray-600 dark:text-gray-300">
                    <Check className="text-primary h-4 w-4 mr-2 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <a
                href="https://www.upwork.com/freelancers/~011fe6ce84d3da23e7"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-primary/80 font-medium inline-flex items-center transition-colors duration-200"
              >
                <span>Get Started</span>
                <ArrowRight className="ml-1 h-4 w-4" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
