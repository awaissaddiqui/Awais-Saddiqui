import { Link } from "wouter";
import { Github, Linkedin, Twitter, Dribbble, MapPin, Mail, Phone } from "lucide-react";

interface SocialLink {
  href: string;
  icon: React.ReactNode;
  label: string;
}

const socialLinks: SocialLink[] = [
  {
    href: "https://github.com/awaissaddiqui",
    icon: <Github className="h-5 w-5" />,
    label: "GitHub",
  },
  {
    href: "https://linkedin.com/in/awais-saddiqui",
    icon: <Linkedin className="h-5 w-5" />,
    label: "LinkedIn",
  },
  {
    href: "https://twitter.com/awaissaddiqui",
    icon: <Twitter className="h-5 w-5" />,
    label: "Twitter",
  },
  {
    href: "https://dribbble.com/awaissaddiqui",
    icon: <Dribbble className="h-5 w-5" />,
    label: "Dribbble",
  },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white dark:bg-[#181A20] py-12 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="md:col-span-2">
            <div className="flex items-center mb-4">
              <span className="text-2xl font-bold bg-gradient-text">
                AS<span className="text-foreground">.</span>
              </span>
            </div>
            <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-md">
              Building innovative web applications with modern technologies. Full stack developer specializing in MERN stack, Next.js, and AI integration.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors duration-200 bg-transparent dark:bg-[#23272F] rounded-full p-2"
                  aria-label={link.label}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4 text-gray-900 dark:text-white">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { name: "Home", href: "#home" },
                { name: "About", href: "#about" },
                { name: "Services", href: "#services" },
                { name: "Projects", href: "#projects" },
                { name: "Blog", href: "#blog" },
                { name: "Contact", href: "#contact" },
              ].map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors duration-200"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4 text-gray-900 dark:text-white">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="text-primary h-5 w-5 mr-3 mt-0.5" />
                <span className="text-gray-600 dark:text-gray-400">
                  Peshawar, Pakistan
                </span>
              </li>
              <li className="flex items-start">
                <Mail className="text-primary h-5 w-5 mr-3 mt-0.5" />
                <a
                  href="mailto:awaissaddiqui143@gmail.com"
                  className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors duration-200"
                >
                  awaissaddiqui143@gmail.com
                </a>
              </li>
              <li className="flex items-start">
                <Phone className="text-primary h-5 w-5 mr-3 mt-0.5" />
                <a
                  href="tel:+923439856501"
                  className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors duration-200"
                >
                  +923-439856501
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            &copy; {currentYear} Awais Saddiqui. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0">
            <span className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors duration-200 mr-4 cursor-pointer">
              Privacy Policy
            </span>
            <span className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors duration-200 cursor-pointer">
              Terms of Service
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
