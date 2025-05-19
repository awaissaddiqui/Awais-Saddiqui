import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, Dribbble } from "lucide-react";

export function Hero() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: custom * 0.1,
        duration: 0.8,
        ease: [0.215, 0.61, 0.355, 1]
      }
    })
  };

  return (
    <section id="home" className="pt-28 lg:pt-36 pb-20 lg:pb-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent dark:from-primary/10 -z-10"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-6"
          >
            <motion.div
              custom={1}
              variants={fadeIn}
              className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium"
            >
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse mr-2"></span>
              Available for freelance work
            </motion.div>

            <motion.h1
              custom={2}
              variants={fadeIn}
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
            >
              {/* <span>Hi, I'm </span> */}
              <span className="bg-gradient-text">Awais Saddiqui</span>
            </motion.h1>

            <motion.h2
              custom={3}
              variants={fadeIn}
              className="text-2xl md:text-3xl font-medium text-gray-700 dark:text-gray-300"
            >
              Full Stack Developer | MERN Specialist
            </motion.h2>

            <motion.p
              custom={4}
              variants={fadeIn}
              className="text-lg text-gray-600 dark:text-gray-400 max-w-lg"
            >
              I build modern web applications with React, Next.js, and MERN stack, integrating AI models and third-party APIs to enhance user experiences.
            </motion.p>

            <motion.div
              custom={5}
              variants={fadeIn}
              className="flex flex-wrap gap-4"
            >
              {/* <a href="https://www.upwork.com/freelancers/~011fe6ce84d3da23e7" target="_blank" rel="noopener noreferrer">
              </a> */}
              <Button
                size="lg"
                asChild
              >
                <a href="https://www.upwork.com/freelancers/~011fe6ce84d3da23e7" target="_blank" rel="noopener noreferrer">Hire Me</a>
              </Button>

              <Button
                variant="outline"
                size="lg"
                asChild
              >
                <a href="#projects">View Projects</a>
              </Button>
            </motion.div>

            <motion.div
              custom={6}
              variants={fadeIn}
              className="flex items-center space-x-4 mt-4"
            >
              <a href="https://github.com/awaissaddiqui" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors duration-200">
                <Github className="h-5 w-5" />
              </a>
              <a href="https://linkedin.com/in/awais-saddiqui" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors duration-200">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="https://www.upwork.com/freelancers/~011fe6ce84d3da23e7" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors duration-200">
                {/* Upwork SVG */}
                <svg className="h-6 w-6" viewBox="0 0 32 32" fill="currentColor" aria-hidden="true">
                  <path d="M27.6 16.1c-1.1 0-2.1.3-3 .8-.2-.3-.5-.7-.7-1-1.1-1.7-2.1-3.3-2.9-4.7-.2-.3-.4-.7-.6-1.1-.2-.4-.4-.7-.6-1.1l-1.2 2.1c.2.3.4.7.6 1.1.2.4.4.7.6 1.1.8 1.4 1.8 3 2.9 4.7.2.3.5.7.7 1-1.1.8-1.8 2.1-1.8 3.5 0 2.4 2 4.4 4.4 4.4s4.4-2 4.4-4.4-2-4.4-4.4-4.4zm0 7.1c-1.5 0-2.7-1.2-2.7-2.7s1.2-2.7 2.7-2.7 2.7 1.2 2.7 2.7-1.2 2.7-2.7 2.7zM13.7 13.2c-.2-.4-.4-.7-.6-1.1-.2-.4-.4-.7-.6-1.1l-1.2 2.1c.2.3.4.7.6 1.1.2.4.4.7.6 1.1.8 1.4 1.8 3 2.9 4.7.2.3.5.7.7 1-1.1.8-1.8 2.1-1.8 3.5 0 2.4 2 4.4 4.4 4.4s4.4-2 4.4-4.4-2-4.4-4.4-4.4c-1.1 0-2.1.3-3 .8-.2-.3-.5-.7-.7-1-1.1-1.7-2.1-3.3-2.9-4.7zm4.4 7.1c-1.5 0-2.7-1.2-2.7-2.7s1.2-2.7 2.7-2.7 2.7 1.2 2.7 2.7-1.2 2.7-2.7 2.7z" />
                </svg>
              </a>
              <a href="https://www.fiverr.com/s/yvYp48A" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors duration-200">
                {/* Fiverr SVG */}
                <svg className="h-5 w-5" viewBox="0 0 32 32" fill="currentColor" aria-hidden="true">
                  <circle cx="16" cy="16" r="16" fill="" />
                  <text x="16" y="21" textAnchor="middle" fontSize="12" fill="#fff" fontFamily="Arial, sans-serif" fontWeight="bold">fi</text>
                </svg>
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="relative"
          >
            <img
              src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=800"
              alt="Professional developer workspace"
              className="w-full h-auto rounded-2xl shadow-xl"
            />
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-[#10B981] rounded-2xl -z-10"></div>
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-accent rounded-2xl -z-10"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
