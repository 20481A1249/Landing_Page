import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function CTASection() {
  return (
    <section className="py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7 }}
          className="relative overflow-hidden rounded-3xl bg-linear-to-br from-primary-600 via-primary-700 to-purple-700 px-6 py-16 lg:px-16 lg:py-20 text-center"
        >
          {/* Decorative elements */}
          <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full translate-x-1/3 translate-y-1/3" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-150 bg-white/5 rounded-full" />

          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              Start Learning Today
            </h2>
            <p className="text-primary-100 text-lg mb-10 leading-relaxed">
              Join over 12,000 students already learning on our platform. Get
              unlimited access to 500+ courses taught by industry experts.
            </p>
            <button className="group inline-flex items-center gap-2 px-8 py-4 bg-white text-primary-700 font-bold rounded-full hover:bg-primary-50 transition-all hover:shadow-xl active:scale-95">
              Join Now
              <ArrowRight
                size={20}
                className="group-hover:translate-x-1 transition-transform"
              />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

