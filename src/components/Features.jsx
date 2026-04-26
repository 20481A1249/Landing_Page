import { motion } from 'framer-motion';
import { Users, Infinity, Award, Clock } from 'lucide-react';

const features = [
  {
    icon: Users,
    title: 'Expert Instructors',
    description:
      'Learn from industry professionals with years of real-world experience in their respective fields.',
    color: 'bg-blue-50 text-blue-600',
  },
  {
    icon: Infinity,
    title: 'Lifetime Access',
    description:
      'Enroll once and get unlimited access to your courses. Learn at your own pace, forever.',
    color: 'bg-purple-50 text-purple-600',
  },
  {
    icon: Award,
    title: 'Certification',
    description:
      'Earn recognized certificates upon completion to showcase your skills to employers.',
    color: 'bg-amber-50 text-amber-600',
  },
  {
    icon: Clock,
    title: 'Flexible Learning',
    description:
      'Study on your schedule with 24/7 access to course materials from any device, anywhere.',
    color: 'bg-rose-50 text-rose-600',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

export default function Features() {
  return (
    <section id="features" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Why Choose Our Platform
          </h2>
          <p className="text-lg text-gray-600">
            We provide everything you need to achieve your learning goals and
            advance your career.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              variants={itemVariants}
              className="group relative p-6 lg:p-8 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-xl hover:shadow-gray-900/5 hover:-translate-y-1 transition-all duration-300"
            >
              <div
                className={`w-12 h-12 rounded-xl ${feature.color} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}
              >
                <feature.icon size={24} strokeWidth={2} />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

