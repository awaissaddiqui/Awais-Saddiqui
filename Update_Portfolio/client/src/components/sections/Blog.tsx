import { SectionTitle } from "@/components/ui/section-title";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { formatDate, calculateReadingTime } from "@/lib/utils";

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  image: string;
  date: Date;
  content: string;
}

export function Blog() {
  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: "Integrating AI Models in Web Applications: A Practical Guide",
      excerpt: "Learn how to effectively integrate AI models into your web applications to enhance user experience and automate processes using modern frameworks.",
      image: "https://images.unsplash.com/photo-1677442135129-0311c92e51b9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      date: new Date("2024-03-15"),
      content: "Artificial Intelligence is transforming the way we build and interact with web applications. In this article, I explore practical approaches to integrating AI models into your web projects, covering everything from API integration to performance optimization and ethical considerations. Drawing from my experience working with AI-powered applications, I share best practices and common pitfalls to avoid when implementing these powerful technologies."
    },
    {
      id: 2,
      title: "Building Modern Web Applications with Next.js and TypeScript",
      excerpt: "A comprehensive guide to leveraging Next.js and TypeScript for creating scalable, type-safe, and performant web applications.",
      image: "https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      date: new Date("2024-02-20"),
      content: "Next.js has emerged as a powerful framework for building modern web applications, offering features like server-side rendering, static site generation, and API routes. Combined with TypeScript's robust type system, developers can create reliable, maintainable applications. In this article, I dive into setting up a Next.js project with TypeScript, implementing key features, optimizing performance, and deploying your application. I also share insights from my experience with real-world projects built using this technology stack."
    },
    {
      id: 3,
      title: "MERN Stack Development: Best Practices and Architecture Patterns",
      excerpt: "Exploring effective architecture patterns and best practices for building scalable applications with MongoDB, Express.js, React, and Node.js.",
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      date: new Date("2024-01-10"),
      content: "The MERN stack (MongoDB, Express.js, React, Node.js) continues to be a popular choice for full-stack JavaScript development. Based on my experience working with this technology stack, I present key architecture patterns that help create maintainable, scalable applications. This article covers setting up a robust project structure, implementing authentication and authorization, handling data with MongoDB and Mongoose, creating clean RESTful APIs, and optimizing performance for both frontend and backend components."
    }
  ];

  return (
    <section id="blog" className="py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle 
          title="Latest Articles"
          description="Insights and thoughts on development, design, and technology"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.div 
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="bg-white dark:bg-dark-lighter rounded-xl shadow-lg overflow-hidden"
            >
              <img 
                src={post.image} 
                alt={post.title} 
                className="w-full h-48 object-cover" 
              />
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-2">
                  <Calendar className="mr-2 h-4 w-4" />
                  <span>{formatDate(post.date)}</span>
                  <span className="mx-2">•</span>
                  <Clock className="mr-2 h-4 w-4" />
                  <span>{calculateReadingTime(post.content)} min read</span>
                </div>
                <h3 className="text-xl font-bold mb-2 hover:text-primary transition-colors duration-200">
                  <a href="#">{post.title}</a>
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                <a href="#" className="text-primary hover:text-primary/80 font-medium inline-flex items-center transition-colors duration-200">
                  <span>Read More</span>
                  <ArrowRight className="ml-1 h-4 w-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="gap-2">
            View All Articles
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}
