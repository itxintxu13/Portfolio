
import { motion, HTMLMotionProps } from "framer-motion";

interface Testimonial {
  name: string;
  quote: string;
  role: string;
}

type TestimonialCardProps = HTMLMotionProps<"div"> & {
  testimonial: Testimonial;
  index: number;
};

type TestimonialSectionProps = HTMLMotionProps<"section">;

const testimonials: Testimonial[] = [
  {
    name: "Mentor en 42Urduliz",
    quote: "Itxine demuestra gran determinación y una increíble capacidad de aprendizaje autónomo.",
    role: "Formador"
  },
  {
    name: "Compañero de Bootcamp",
    quote: "Trabajar con Itxine fue una experiencia enriquecedora. Siempre aporta soluciones creativas.",
    role: "Desarrollador"
  }
];

const TestimonialCard = ({ testimonial, index, ...props }: TestimonialCardProps) => (
  <motion.div
    {...{
      className: "bg-white dark:bg-gray-800 shadow-md rounded-xl p-6",
      initial: { opacity: 0, y: 50 },
      whileInView: { opacity: 1, y: 0 },
      transition: { delay: index * 0.2 }
    } as HTMLMotionProps<"div">}
    {...props}
  >
    <p className="text-gray-700 dark:text-gray-200 italic">"{testimonial.quote}"</p>
    <p className="mt-4 font-semibold text-purple-500">{testimonial.name}</p>
    <p className="text-sm text-gray-500">{testimonial.role}</p>
  </motion.div>
);

export const Testimonials = () => (
  <motion.section
    {...{
      id: "testimonials",
      className: "max-w-4xl mx-auto px-4 py-16",
      initial: { opacity: 0, y: 50 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: true },
      transition: { duration: 0.8 }
    } as TestimonialSectionProps}
  >
    <h2 className="text-3xl font-bold text-center text-purple-600 mb-12">Testimonios</h2>
    <div className="grid md:grid-cols-2 gap-8">
      {testimonials.map((testimonial, index) => (
        <TestimonialCard
          key={index}
          testimonial={testimonial}
          index={index}
        />
      ))}
    </div>
  </motion.section>
);
