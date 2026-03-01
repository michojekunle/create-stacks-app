"use client";

import { motion } from "framer-motion";

const technologies = [
  {
    name: "Next.js",
    logo: "https://cdn.worldvectorlogo.com/logos/next-js.svg",
  },
  {
    name: "Stacks",
    logo: "https://cryptologos.cc/logos/stacks-stx-logo.svg?v=032",
  },
  {
    name: "Clarinet",
    logo: "https://www.hiro.so/images/hiro-logo-orange-icon.svg",
  },
  {
    name: "TypeScript",
    logo: "https://cdn.worldvectorlogo.com/logos/typescript.svg",
  },
  {
    name: "Tailwind",
    logo: "https://cdn.worldvectorlogo.com/logos/tailwind-css-2.svg",
  },
  { name: "React", logo: "https://cdn.worldvectorlogo.com/logos/react-2.svg" },
  { name: "Vue", logo: "https://cdn.worldvectorlogo.com/logos/vue-9.svg" },
  { name: "Vite", logo: "https://cdn.worldvectorlogo.com/logos/vitejs.svg" },
];

export function TechStack() {
  return (
    <section className="py-24 border-t border-gray-900 overflow-hidden bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-2xl font-bold mb-4 tracking-tight uppercase text-gray-500 text-sm">
            Powered By Modern Tech
          </h2>
        </div>

        <div className="relative">
          <div className="flex flex-wrap justify-center items-center gap-12 lg:gap-20 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
            {technologies.map((tech, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-center gap-3"
              >
                <img
                  src={tech.logo}
                  alt={tech.name}
                  className="w-8 h-8 object-contain"
                />
                <span className="text-white font-medium text-lg hidden md:block">
                  {tech.name}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
