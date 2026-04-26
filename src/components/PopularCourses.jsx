import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { courses } from '../data';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
};

export default function PopularCourses() {
  return (
    <section id="courses" className="py-20 lg:py-28 bg-gray-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Popular Courses
          </h2>
          <p className="text-lg text-gray-600">
            Explore our highest-rated courses and start learning skills that
            matter.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {courses.map((course) => (
            <motion.div
              key={course.id}
              variants={itemVariants}
              className="group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl hover:shadow-gray-900/5 hover:-translate-y-1 transition-all duration-300 cursor-pointer"
            >
              <div className="relative overflow-hidden">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3">
                  <span className="px-3 py-1 text-xs font-semibold text-primary-700 bg-white/90 backdrop-blur-sm rounded-full">
                    {course.category}
                  </span>
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-primary-600 transition-colors">
                  {course.title}
                </h3>
                <p className="text-sm text-gray-500 mb-3">{course.instructor}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <span className="text-sm font-bold text-gray-900">
                      {course.rating}
                    </span>
                    <div className="flex text-yellow-400">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star
                          key={star}
                          size={14}
                          fill={
                            star <= Math.round(course.rating)
                              ? 'currentColor'
                              : 'none'
                          }
                          strokeWidth={2}
                          className={
                            star <= Math.round(course.rating)
                              ? ''
                              : 'text-gray-300'
                          }
                        />
                      ))}
                    </div>
                  </div>
                  <span className="text-lg font-bold text-primary-600">
                    ${course.price}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

