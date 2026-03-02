"use client";

import { motion } from "framer-motion";

const technologies = [
  {
    name: "Next.js",
    icon: (
      <svg viewBox="0 0 180 180" fill="none" className="w-8 h-8">
        <mask
          id="a"
          width="180"
          height="180"
          x="0"
          y="0"
          maskUnits="userSpaceOnUse"
        >
          <circle cx="90" cy="90" r="90" fill="#000" />
        </mask>
        <g mask="url(#a)">
          <circle cx="90" cy="90" r="90" fill="currentColor" />
          <path
            d="M149.508 157.52L69.142 54H54v71.97h12.114V69.384l73.885 95.461a90.304 90.304 0 009.509-7.325z"
            fill="url(#b)"
          />
          <rect width="12" height="72" x="115" y="54" fill="url(#c)" />
        </g>
        <defs>
          <linearGradient
            id="b"
            x1="109"
            x2="144.5"
            y1="116.5"
            y2="160.5"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#fff" />
            <stop offset="1" stopColor="#fff" stopOpacity="0" />
          </linearGradient>
          <linearGradient
            id="c"
            x1="121"
            x2="120.799"
            y1="54"
            y2="106.875"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#fff" />
            <stop offset="1" stopColor="#fff" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    ),
  },
  {
    name: "Stacks",
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor">
        <path d="M12 2L3.5 7v10L12 22l8.5-5V7L12 2zm0 2.18L18.18 8 12 11.82 5.82 8 12 4.18zM5.5 9.32l6 3.5v6.86l-6-3.5V9.32zm13 0v6.86l-6 3.5v-6.86l6-3.5z" />
      </svg>
    ),
  },
  {
    name: "Clarinet",
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
      </svg>
    ),
  },
  {
    name: "TypeScript",
    icon: (
      <svg viewBox="0 0 400 400" className="w-8 h-8" fill="none">
        <rect width="400" height="400" rx="40" fill="#3178C6" />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M231.8 313.4V348.7c6.4 3.3 14 5.8 22.8 7.4 8.8 1.6 18 2.5 27.6 2.5 9.4 0 18.2-1.1 26.4-3.2 8.2-2.2 15.3-5.6 21.3-10.3 6-4.7 10.7-10.8 14.1-18.2 3.4-7.4 5.1-16.3 5.1-26.5 0-7.3-1.2-13.8-3.6-19.5-2.4-5.7-5.7-10.8-9.9-15.3-4.2-4.5-9.2-8.6-14.8-12.1-5.7-3.5-11.8-6.8-18.5-9.8-4.8-2.2-9.2-4.3-13.1-6.4-3.9-2.1-7.2-4.2-10-6.4-2.8-2.2-4.9-4.5-6.5-7-1.5-2.5-2.3-5.3-2.3-8.6 0-3 .7-5.7 2-8 1.3-2.4 3.2-4.4 5.6-6.1 2.4-1.7 5.3-3 8.6-3.8 3.3-.9 7-.1 11.1-.1 2.8 0 5.8.2 8.9.7 3.1.5 6.2 1.2 9.3 2.2 3 1 5.9 2.2 8.6 3.7 2.7 1.5 5.1 3.2 7.1 5.2V182c-5.5-2.7-11.7-4.8-18.6-6.3-6.9-1.5-14.6-2.2-23.2-2.2-9.3 0-17.9 1.2-25.8 3.5-7.9 2.3-14.8 5.7-20.6 10.2-5.8 4.5-10.3 10.1-13.5 16.8-3.2 6.7-4.9 14.4-4.9 23 0 12.1 3.4 22.5 10.3 31 6.8 8.5 17 15.7 30.6 21.4 4.9 2.1 9.5 4.2 13.7 6.2 4.2 2.1 7.9 4.2 10.9 6.4 3.1 2.2 5.5 4.6 7.2 7.2 1.7 2.6 2.5 5.6 2.5 9.1 0 2.8-.6 5.3-1.8 7.6-1.2 2.3-3 4.2-5.4 5.8-2.4 1.6-5.3 2.8-8.8 3.6-3.5.8-7.5 1.2-12 1.2-8.4 0-16.6-1.8-24.7-5.3-8.1-3.6-15.2-8.8-21.3-15.8zm-73.3-136.5h50.8V148H113v28.9h45.5V348h0z"
          fill="#fff"
        />
      </svg>
    ),
  },
  {
    name: "Tailwind CSS",
    icon: (
      <svg viewBox="0 0 54 33" className="w-8 h-8" fill="currentColor">
        <path
          d="M27 0c-7.2 0-11.7 3.6-13.5 10.8 2.7-3.6 5.85-4.95 9.45-4.05 2.054.514 3.522 2.004 5.147 3.653C30.744 13.09 33.808 16.2 40.5 16.2c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.514-3.522-2.004-5.147-3.653C36.756 3.11 33.692 0 27 0zM13.5 16.2C6.3 16.2 1.8 19.8 0 27c2.7-3.6 5.85-4.95 9.45-4.05 2.054.514 3.522 2.004 5.147 3.653C17.244 29.29 20.308 32.4 27 32.4c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.514-3.522-2.004-5.147-3.653C23.256 19.31 20.192 16.2 13.5 16.2z"
          fill="#06B6D4"
        />
      </svg>
    ),
  },
  {
    name: "React",
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8" fill="#61DAFB">
        <path d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.31 0-.592.066-.856.19a.75.75 0 0 0-.088.06C4.2 2.477 3.79 4.893 4.454 8.165c-3.073 1.01-5.091 2.592-5.091 4.326 0 1.735 2.018 3.318 5.091 4.327-.664 3.27-.254 5.687 1.104 6.582.264.16.556.228.856.228 1.346 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.31 0 .592-.066.856-.19a.75.75 0 0 0 .088-.06c1.358-.894 1.768-3.31 1.104-6.58 3.073-1.01 5.091-2.592 5.091-4.328s-2.018-3.317-5.091-4.326c.664-3.27.254-5.687-1.104-6.582A1.636 1.636 0 0 0 16.878 1.314zM12 16.878a4.878 4.878 0 1 1 0-9.756 4.878 4.878 0 0 1 0 9.756z" />
      </svg>
    ),
  },
];

export function TechStack() {
  return (
    <section className="py-16 border-t border-white/5 overflow-hidden bg-black">
      <div className="container mx-auto px-4">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-xs font-bold uppercase tracking-[0.3em] text-gray-600 mb-12"
        >
          Built with the modern stack you already love
        </motion.p>

        <div className="flex flex-wrap justify-center items-center gap-10 lg:gap-16">
          {technologies.map((tech, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="flex items-center gap-3 text-gray-500 hover:text-white transition-colors duration-300 group"
            >
              <div className="opacity-40 group-hover:opacity-100 transition-opacity duration-300">
                {tech.icon}
              </div>
              <span className="font-semibold text-sm hidden sm:block opacity-60 group-hover:opacity-100 transition-opacity duration-300">
                {tech.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
