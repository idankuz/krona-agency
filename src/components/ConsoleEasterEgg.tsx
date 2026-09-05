"use client";

import { useEffect, useRef } from "react";

export const ConsoleEasterEgg = () => {
  const logged = useRef(false);

  useEffect(() => {
    if (logged.current) return;
    logged.current = true;

    const banner = `
   ██╗  ██╗██████╗  ██████╗ ███╗   ██╗ █████╗ 
   ██║ ██╔╝██╔══██╗██╔═══██╗████╗  ██║██╔══██╗
   █████═╝ ██████╔╝██║   ██║██╔██╗ ██║███████║
   ██╔═██╗ ██╔══██╗██║   ██║██║╚██╗██║██╔══██║
   ██║ ╚██╗██║  ██║╚██████╔╝██║ ╚████║██║  ██║
   ╚═╝  ╚═╝╚═╝  ╚═╝ ╚═════╝ ╚═╝  ╚═══╝╚═╝  ╚═╝
`;

    console.log(`%c${banner}`, "color: #38bdf8; font-weight: bold; font-family: monospace;");
    
    console.log(
      "%c👋 Ah, hello curious developer! Peeking under the hood with F12, are we?",
      "font-size: 14px; font-weight: bold; color: #f43f5e; padding: 4px 0;"
    );

    console.log(
      "%c✦ Welcome! This entire website is 100% open-source and crafted with precision by @idankuz.",
      "font-size: 12px; color: #e4e4e7; font-weight: 500;"
    );

    console.log(
      "%c✦ Official GitHub: %chttps://github.com/idankuz",
      "font-size: 12px; color: #a1a1aa;",
      "font-size: 12px; color: #38bdf8; font-weight: bold; text-decoration: underline;"
    );

    console.log(
      "%c✦ Tech Stack: Next.js 14 App Router, TypeScript, Tailwind CSS, Lucide Icons, and zero bloat.",
      "font-size: 12px; color: #a1a1aa;"
    );

    console.log(
      "%c✦ Found a bug? It's not a bug, it's an undocumented ambient feature 😉🕶️",
      "font-size: 12px; color: #facc15; font-style: italic;"
    );

    console.log(
      "%c✦ Fuel consumed during development: ☕ 14 Espressos, 🍕 2 Pizzas, and 0 regrets.",
      "font-size: 12px; color: #c084fc;"
    );

    console.log(
      "%c✦ Want to hire or collaborate with Idan? Check out: https://github.com/idankuz 🚀",
      "font-size: 12px; font-weight: bold; color: #34d399; padding: 4px 0;"
    );
  }, []);

  return null;
};
