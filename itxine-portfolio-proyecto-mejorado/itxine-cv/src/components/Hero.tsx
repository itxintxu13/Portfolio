
import { motion, HTMLMotionProps } from "framer-motion";

type HeroSectionProps = HTMLMotionProps<"section">;
type MotionHeadingProps = HTMLMotionProps<"h1">;
type MotionParagraphProps = HTMLMotionProps<"p">;

export const Hero = () => {
  return (
    <motion.section
      {...{
        className: "relative flex flex-col items-center justify-center min-h-[70vh] text-center px-6 pt-20 md:pt-32 pb-4",
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        transition: { duration: 0.8 }
      } as HeroSectionProps}>
      <div className="z-10 flex flex-col items-center">
        <motion.h1
          {...{
            initial: { opacity: 0, y: -50 },
            animate: { opacity: 1, y: 0 },
            transition: { duration: 1 },
            className: "text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500"
          } as MotionHeadingProps}
        >
          Itxine López Galdeano
        </motion.h1>
        <div className="flex justify-center mt-4 mb-2">
          <img
            src="./images/projects/itxine.jpeg"
            alt="Itxine López Galdeano"
            className="w-48 h-48 md:w-64 md:h-64 rounded-full border-4 border-purple-400 shadow-lg object-cover bg-white"
            style={{backgroundColor:'#fff'}}
          />
        </div>
        <motion.p
          {...{
            initial: { opacity: 0, y: 50 },
            animate: { opacity: 1, y: 0 },
            transition: { delay: 0.5, duration: 1 },
            className: "mt-2 text-xl md:text-2xl text-gray-700 dark:text-gray-300"
          } as MotionParagraphProps}
        >
          Desarrolladora Full Stack | Creatividad & Código
        </motion.p>
      </div>
      <div className="absolute bottom-0 right-0 w-2/3 max-w-md opacity-30 pointer-events-none">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full animate-spin-slow">
          <path fill="#C084FC" d="M56.6,-63.2C70.8,-48.3,78.6,-24.1,77.5,-1.6C76.3,21,66.1,42,51.9,56.2C37.7,70.4,18.8,77.8,-3.2,80C-25.2,82.2,-50.3,79.2,-65.8,64.6C-81.4,49.9,-87.5,24.9,-84.6,2.6C-81.7,-19.7,-69.9,-39.3,-54.3,-54.1C-38.6,-68.9,-19.3,-79,2.3,-81.3C23.9,-83.5,47.9,-77.9,56.6,-63.2Z" transform="translate(100 100)" />
        </svg>
      </div>
    </motion.section>
  );
};
