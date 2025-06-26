import { motion, HTMLMotionProps } from 'framer-motion';
import { FaJava, FaJs, FaHtml5, FaCss3Alt, FaPhp, FaGitAlt, FaLinux } from 'react-icons/fa';
import { SiC, SiBootstrap, SiShell } from 'react-icons/si';

type SkillsSectionProps = HTMLMotionProps<"section">;

const skills = [
  { name: 'C', icon: <SiC className="text-4xl text-blue-600" /> },
  { name: 'Java', icon: <FaJava className="text-4xl text-red-500" /> },
  { name: 'JavaScript', icon: <FaJs className="text-4xl text-yellow-500" /> },
  { name: 'PHP', icon: <FaPhp className="text-4xl text-indigo-500" /> },
  { name: 'HTML', icon: <FaHtml5 className="text-4xl text-orange-600" /> },
  { name: 'CSS', icon: <FaCss3Alt className="text-4xl text-blue-400" /> },
  { name: 'Bootstrap', icon: <SiBootstrap className="text-4xl text-purple-600" /> },
  { name: 'Git', icon: <FaGitAlt className="text-4xl text-orange-500" /> },
  { name: 'Linux', icon: <FaLinux className="text-4xl text-black dark:text-white" /> },
  { name: 'Shell Scripting', icon: <SiShell className="text-4xl text-green-500" /> },
];

export const Skills = () => (
  <motion.section
    {...{
      id: "skills",
      initial: { opacity: 0, y: 50 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: true },
      transition: { duration: 0.8 },
      className: "max-w-6xl mx-auto px-4 py-20"
    } as SkillsSectionProps}
  >
    <h2 className="text-4xl font-bold text-center text-blue-600 mb-10">Habilidades Técnicas</h2>
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
      {skills.map((skill) => (
        <div
          key={skill.name}
          className="flex flex-col items-center justify-center bg-white dark:bg-gray-900 rounded-xl shadow-lg p-4 hover:scale-105 transition-transform hover:shadow-2xl"
        >
          {skill.icon}
          <p className="mt-2 font-medium text-lg text-center text-gray-800 dark:text-gray-200">{skill.name}</p>
        </div>
      ))}
    </div>
  </motion.section>
);
