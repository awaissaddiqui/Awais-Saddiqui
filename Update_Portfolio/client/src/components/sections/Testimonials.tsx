import { SectionTitle } from "@/components/ui/section-title";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Star, StarHalf, Quote } from "lucide-react";

interface Testimonial {
  name: string;
  position: string;
  company: string;
  content: string;
  rating: number;
  initial: string;
}

export function Testimonials() {
  const testimonials: Testimonial[] = [
    {
      name: "Fawad Shahzada",
      position: "Founder TestSolz",
      company: "TestSolz",
      content: "Awais demonstrated exceptional skills during his time with us. His ability to integrate complex APIs and AI models into our web applications significantly enhanced their functionality and user experience.",
      rating: 5,
      initial: "F"
    },
    {
      name: "Oni Ade",
      position: "Senior Developer",
      company: "Audit Tech",
      content: "Collaborating with Awais was a pleasure. His proficiency with the MERN stack and attention to detail resulted in clean, efficient code that was easy to maintain and scale.",
      rating: 5,
      initial: "O"
    },
    {
      name: "Mary Mash",
      position: "Product Owner",
      company: "EduTech Solutions",
      content: "Awais's work on our e-learning platform exceeded expectations. The AI recommendation system he implemented has significantly improved user engagement and course completion rates.",
      rating: 4.5,
      initial: "M"
    }
  ];

  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<Star key={`star-${i}`} className="fill-yellow-400 text-yellow-400 h-4 w-4" />);
    }

    if (hasHalfStar) {
      stars.push(<StarHalf key="half-star" className="fill-yellow-400 text-yellow-400 h-4 w-4" />);
    }

    return stars;
  };

  return (
    <section id="testimonials" className="py-20 lg:py-32 bg-light-darker dark:bg-[#181A20] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Client Testimonials"
          description="What my clients say about working with me"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="bg-white dark:bg-[#23272F] rounded-xl shadow-lg dark:shadow-none p-8 border border-transparent dark:border-[#23272F] transition-colors duration-300"
            >
              <div className="flex justify-between items-center mb-6">
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-gray-200 dark:bg-[#181A20] flex items-center justify-center overflow-hidden mr-4">
                    <span className="text-xl font-bold text-primary">{testimonial.initial}</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 dark:text-white">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{testimonial.position}, {testimonial.company}</p>
                  </div>
                </div>
                <div className="text-primary">
                  <Quote className="h-7 w-7 opacity-20" />
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                "{testimonial.content}"
              </p>
              <div className="flex">
                {renderStars(testimonial.rating)}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg" asChild>
            <a href="#contact" className="text-gray-900 dark:text-white">
              Become a Happy Client
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
                className="ml-2 h-4 w-4"
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
