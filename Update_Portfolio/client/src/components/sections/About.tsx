import { SectionTitle } from "@/components/ui/section-title";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Download } from "lucide-react";

export function About() {
  const stats = [
    { value: "3+", label: "Years of Experience" },
    { value: "10+", label: "Projects Completed" },
    { value: "5+", label: "Certifications" },
    { value: "15+", label: "Technologies" },
  ];

  return (
    <section id="about" className="py-20 lg:py-32 bg-light-darker dark:bg-[#181A20] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="About Me"
          description="My journey, experience, and philosophy as a developer"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <img
              src="https://images.unsplash.com/photo-1552308995-2baac1ad5490?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=900"
              alt="Professional developer at work"
              className="w-full h-auto rounded-2xl shadow-lg dark:shadow-none"
            />
            <div className="absolute -z-10 w-full h-full bg-primary/10 dark:bg-primary/20 rounded-2xl top-4 left-4"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white">Who I Am</h3>
            <p className="text-gray-600 dark:text-gray-300">
              I'm a passionate Full Stack Developer pursuing a Bachelor's degree in Computer Systems Engineering at the University of Engineering & Technology, Peshawar. I specialize in JavaScript, Node.js, and modern web technologies like React and Next.js.
            </p>

            <h3 className="text-2xl font-bold text-gray-800 dark:text-white">My Journey</h3>
            <p className="text-gray-600 dark:text-gray-300">
              My journey began with formal education in Computer Systems Engineering, which I've complemented with professional experience as a MERN Stack Developer at TestSolz and several certifications in web development and AI integration. I've worked on innovative projects integrating AI models and third-party APIs.
            </p>

            <div className="grid grid-cols-2 gap-6 mt-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="bg-white dark:bg-[#23272F] p-5 rounded-lg shadow-sm dark:shadow-none border border-transparent dark:border-[#23272F] transition-colors duration-300"
                >
                  <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                  <p className="text-gray-600 dark:text-gray-400">{stat.label}</p>
                </motion.div>
              ))}
            </div>

            <div className="mt-8">
              <Button className="gap-2" size="lg" asChild>
                <a href="/AWAISSADDIQUI_resume.pdf" download rel="noopener noreferrer">
                  <Download className="h-4 w-4" />
                  Download CV
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
