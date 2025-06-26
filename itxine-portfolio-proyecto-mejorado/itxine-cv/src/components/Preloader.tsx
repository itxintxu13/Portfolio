
import React, { useState } from "react";
import { motion, AnimatePresence, HTMLMotionProps } from "framer-motion";

type PreloaderProps = {
  children: React.ReactNode;
};

type MotionDivProps = HTMLMotionProps<"div">;
type MotionButtonProps = HTMLMotionProps<"button">;

export const Preloader = ({ children }: PreloaderProps) => {
  const [showIntro, setShowIntro] = useState(true);
  const handleStart = () => setShowIntro(false);

  return (
    <AnimatePresence>
      {showIntro ? (
        <motion.div
          {...{
            key: "intro",
            initial: { opacity: 1 },
            animate: { opacity: 1 },
            exit: { opacity: 0, transition: { duration: 0.8 } },
            className: "fixed inset-0 z-50 flex flex-col items-center justify-center bg-gradient-to-br from-purple-800 via-purple-700 to-fuchsia-700"
          } as MotionDivProps}
        >
          <motion.h1
            {...{
              initial: { scale: 0.8, opacity: 0 },
              animate: { scale: 1, opacity: 1 },
              transition: { duration: 1 },
              className: "text-5xl md:text-6xl font-extrabold text-white drop-shadow-lg mb-8 tracking-tight flex flex-col items-center"
            } as MotionDivProps}
          >
            <span className="block animate-gradient bg-gradient-to-r from-fuchsia-300 via-purple-200 to-fuchsia-400 bg-clip-text text-transparent">Bienvenido/a</span>
            <span className="block text-xl md:text-2xl font-semibold text-fuchsia-200 mt-2 tracking-widest animate-pulse">¡A mi portfolio!</span>
          </motion.h1>
          <motion.div
            {...{
              initial: { x: -120, rotate: -10 },
              animate: { 
                x: [ -120, 0, 120, 0, -120 ], 
                rotate: [ -10, 0, 10, 0, -10 ], 
                scale: [1, 1.1, 1, 0.95, 1] 
              },
              transition: { repeat: Infinity, duration: 6, ease: "linear" },
              className: "w-32 h-32 mb-8",
              "aria-label": "Muñequito animado"
            } as MotionDivProps}
          >
            <svg viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="64" cy="64" r="60" fill="#fff" className="drop-shadow-lg"/>
              <ellipse cx="64" cy="90" rx="32" ry="12" fill="#E9D5FF"/>
              <circle cx="64" cy="56" r="32" fill="#A78BFA"/>
              <ellipse cx="52" cy="54" rx="5" ry="8" fill="#fff"/>
              <ellipse cx="76" cy="54" rx="5" ry="8" fill="#fff"/>
              <circle cx="52" cy="56" r="2.5" fill="#333"/>
              <circle cx="76" cy="56" r="2.5" fill="#333"/>
              <path d="M56 68 Q64 74 72 68" stroke="#333" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
              <rect x="44" y="80" width="8" height="18" rx="4" fill="#A78BFA">
                <animate attributeName="y" values="80;85;80" dur="1.2s" repeatCount="indefinite"/>
              </rect>
              <rect x="76" y="80" width="8" height="18" rx="4" fill="#A78BFA">
                <animate attributeName="y" values="80;75;80" dur="1.2s" repeatCount="indefinite"/>
              </rect>
              <rect x="36" y="100" width="8" height="16" rx="4" fill="#A78BFA">
                <animate attributeName="y" values="100;110;100" dur="1.2s" repeatCount="indefinite"/>
              </rect>
              <rect x="84" y="100" width="8" height="16" rx="4" fill="#A78BFA">
                <animate attributeName="y" values="100;90;100" dur="1.2s" repeatCount="indefinite"/>
              </rect>
            </svg>
          </motion.div>
          <motion.button
            {...{
              whileHover: { scale: 1.1, boxShadow: "0 0 30px #fff" },
              whileTap: { scale: 0.95 },
              onClick: handleStart,
              className: "relative px-14 py-5 text-3xl font-black text-white bg-gradient-to-r from-fuchsia-500 via-purple-500 to-fuchsia-400 rounded-full shadow-2xl focus:outline-none focus:ring-4 focus:ring-fuchsia-300 animate-bounce tracking-widest border-4 border-white/30 hover:from-purple-400 hover:to-fuchsia-500 transition-all duration-300",
              style: { letterSpacing: 4 }
            } as MotionButtonProps}
          >
            <span className="relative z-10 drop-shadow-lg">START</span>
            <span className="absolute inset-0 rounded-full bg-white opacity-10 blur-lg animate-pulse" />
          </motion.button>
          <motion.p
            {...{
              initial: { opacity: 0 },
              animate: { opacity: 0.7 },
              transition: { delay: 1.2, duration: 1 },
              className: "mt-8 text-lg text-white/80 font-medium"
            } as MotionDivProps}
          >
            Haz clic en <span className="font-bold text-fuchsia-200">Start</span> para acceder al portfolio
          </motion.p>
        </motion.div>
      ) : (
        <>{children}</>
      )}
    </AnimatePresence>
  );
};
