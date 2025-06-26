import { motion, HTMLMotionProps, MotionProps } from "framer-motion";

interface TimelineEvent {
  year: string;
  title: string;
  description: string;
}

type TimelineItemProps = HTMLMotionProps<"li"> & {
  event: TimelineEvent;
  index: number;
};

const events: TimelineEvent[] = [
  {
    year: "2025",
    title: "Certificación Microsoft (pendiente)",
    description: "Formaciones avanzadas en tecnologías Microsoft Learn."
  },
  {
    year: "2023",
    title: "42 Urduliz",
    description: "Formación intensiva basada en proyectos de programación avanzada."
  },
  {
    year: "2022",
    title: "IFCD0210 / IFCD0112",
    description: "Certificados de profesionalidad en desarrollo web y sistemas."
  },
  {
    year: "2020",
    title: "Técnico en Sistemas Microinformáticos y Redes",
    description: "Formación profesional en redes y soporte técnico."
  }
];

const TimelineItem = ({ event, index, ...props }: TimelineItemProps) => (
  <motion.li
    as="li"
    className="relative"
    initial={{ opacity: 0, x: -50 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ delay: index * 0.2 }}
    {...props}
  >
    <div className="absolute w-4 h-4 bg-purple-500 rounded-full -left-2 top-1.5" />
    <h3 className="text-xl font-semibold pl-6">{event.year} - {event.title}</h3>
    <p className="text-gray-600 dark:text-gray-300 pl-6">{event.description}</p>
  </motion.li>
);

export const Timeline = () => (
  <motion.section
    as="section"
    id="timeline"
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8 }}
    className="max-w-4xl mx-auto px-4 py-16"
  >
    <h2 className="text-3xl font-bold text-center text-purple-600 mb-12">Mi Trayectoria</h2>
    <ol className="border-l-4 border-purple-400 pl-6 space-y-8">
      {events.map((event, index) => (
        <TimelineItem key={index} event={event} index={index} />
      ))}
    </ol>
  </motion.section>
);
