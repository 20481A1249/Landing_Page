import { motion } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-linear-to-br from-primary-50 via-white to-purple-50 -z-10" />
      <div className="absolute top-0 right-0 w-1/2 h-full bg-linear-to-bl from-primary-100/40 to-transparent -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-100 text-primary-700 text-xs font-semibold tracking-wide uppercase mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-primary-600 animate-pulse" />
              New courses available
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-[1.1] tracking-tight mb-6">
              Upgrade Your Skills with{' '}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-primary-600 to-purple-600">
                Expert-Led
              </span>{' '}
              Courses
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed mb-8 max-w-lg">
              Learn anytime, anywhere with our flexible online courses. Join
              millions of learners worldwide and start your journey to success
              today.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="group px-7 py-3.5 bg-primary-600 text-white font-semibold rounded-full hover:bg-primary-700 transition-all hover:shadow-xl hover:shadow-primary-500/25 active:scale-95 flex items-center gap-2">
                Get Started
                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </button>
              <button className="group px-7 py-3.5 bg-white text-gray-700 font-semibold rounded-full border border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition-all active:scale-95 flex items-center gap-2">
                <Play size={18} className="text-primary-600" />
                Browse Courses
              </button>
            </div>

            <div className="mt-10 flex items-center gap-6 text-sm text-gray-500">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <img
                    key={i}
                    src={`https://i.pravatar.cc/100?img=${i + 10}`}
                    alt="Student"
                    className="w-10 h-10 rounded-full border-2 border-white object-cover"
                  />
                ))}
              </div>
              <p>
                <span className="font-semibold text-gray-900">12,000+</span>{' '}
                students enrolled
              </p>
            </div>
          </motion.div>

          {/* Illustration */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-primary-900/10">
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1000&auto=format&fit=crop&q=80"
                alt="Students learning"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent" />
            </div>

            {/* Floating card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl shadow-gray-900/10 p-4 flex items-center gap-3"
            >
              <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-green-600"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-900">
                  Course Completed
                </p>
                <p className="text-xs text-gray-500">Web Development</p>
              </div>
            </motion.div>

            {/* Floating stat card */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="absolute -top-4 -right-4 bg-white rounded-2xl shadow-xl shadow-gray-900/10 p-4"
            >
              <div className="flex items-center gap-2 mb-1">
                <div className="flex text-yellow-400">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg
                      key={star}
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  ))}
                </div>
                <span className="text-xs font-bold text-gray-900">4.9</span>
              </div>
              <p className="text-xs text-gray-500">2,400+ reviews</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

