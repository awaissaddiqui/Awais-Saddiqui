import { SectionTitle } from "@/components/ui/section-title";
import { motion } from "framer-motion";
import {
  Code, Server, Database,
  Layers, GitBranch, Cloud
} from "lucide-react";

interface Skill {
  name: string;
  percentage: number;
}

interface SkillCategory {
  title: string;
  icon: JSX.Element;
  iconColor: string;
  skills: Skill[];
}

export function Skills() {
  const skillCategories: SkillCategory[] = [
    {
      title: "Frontend Development",
      icon: <Code className="text-primary text-2xl" />,
      iconColor: "bg-primary/10",
      skills: [
        { name: "JavaScript ", percentage: 92 },
        { name: "React / Next.js", percentage: 90 },
        { name: "Tailwind CSS", percentage: 88 },
        { name: "UI/UX Design (Figma)", percentage: 75 },
      ]
    },
    {
      title: "Backend Development",
      icon: <Server className="text-[#10B981] text-2xl" />,
      iconColor: "bg-[#10B981]/10",
      skills: [
        { name: "Node.js / Express", percentage: 90 },
        { name: "Python / Flask", percentage: 80 },
        { name: "RESTful APIs", percentage: 90 },
        { name: "GraphQL", percentage: 75 },
      ]
    },
    {
      title: "Database & Tools",
      icon: <Database className="text-accent text-2xl" />,
      iconColor: "bg-accent/10",
      skills: [
        { name: "MongoDB / Mongoose", percentage: 90 },
        { name: "PostgreSQL / MySQL", percentage: 85 },
        { name: "Firebase / Supabase", percentage: 88 },
        { name: "Git / GitHub / GitLab", percentage: 92 },
        { name: "Stripe Payment Integration", percentage: 85 },
      ]
    }
  ];

  const technologies = [
    { name: "React", icon: <Layers className="text-primary text-2xl" /> },
    { name: "Next.js", icon: <Server className="text-black dark:text-white text-2xl" /> },
    { name: "Node.js", icon: <Server className="text-green-600 text-2xl" /> },
    { name: "Express.js", icon: <Server className="text-gray-800 dark:text-white text-2xl" /> },
    { name: "Python", icon: <Code className="text-blue-500 text-2xl" /> },
    { name: "Flask", icon: <Server className="text-gray-800 dark:text-white text-2xl" /> },
    { name: "Firebase", icon: <Database className="text-yellow-600 text-2xl" /> },
    { name: "MongoDB", icon: <Database className="text-green-600 text-2xl" /> },
    { name: "PostgreSQL", icon: <Database className="text-blue-600 text-2xl" /> },
    { name: "Tailwind CSS", icon: <Code className="text-teal-500 text-2xl" /> },
    { name: "Figma", icon: <Layers className="text-pink-500 text-2xl" /> },
    { name: "Git/GitHub", icon: <GitBranch className="text-gray-800 dark:text-white text-2xl" /> },
  ];

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
    <section id="skills" className="py-20 lg:py-32 bg-light-darker dark:bg-[#181A20] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="My Skills"
          description="Technical abilities I've developed over the years"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              custom={catIndex}
              variants={fadeInUpVariants}
              className="bg-white dark:bg-[#23272F] rounded-xl shadow-lg dark:shadow-none p-8 hover:shadow-xl dark:hover:shadow-lg transition-shadow duration-300 border border-transparent dark:border-[#23272F]"
            >
              <div className={`w-16 h-16 ${category.iconColor} dark:bg-opacity-30 rounded-lg flex items-center justify-center mb-6`}>
                {category.icon}
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">{category.title}</h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{skill.name}</span>
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{skill.percentage}%</span>
                    </div>
                    <div className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                      <motion.div
                        className="h-2 rounded-full"
                        style={{
                          width: `${skill.percentage}%`,
                          backgroundColor: catIndex === 0 ? "hsl(207, 90%, 54%)" : catIndex === 1 ? "#10B981" : "hsl(262, 83%, 58%)"
                        }}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.percentage}%` }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 + (skillIndex * 0.1), duration: 1, ease: "easeOut" }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center mb-8 text-gray-900 dark:text-white">Technologies I Work With</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="flex flex-col items-center"
              >
                <div className="w-16 h-16 bg-gray-100 dark:bg-[#23272F] rounded-full flex items-center justify-center hover:shadow-lg transition-shadow duration-300 hover:bg-accent/10 hover:dark:bg-gray-700">
                  {tech.icon}
                </div>
                <span className="mt-2 text-sm text-gray-600 dark:text-gray-400">{tech.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
