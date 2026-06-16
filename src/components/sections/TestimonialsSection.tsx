import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionHeading, StarRating, GlassCard } from '../ui/UIComponents';

const testimonials = [
  {
    name: 'Renu Pareek',
    role: 'Business Owner',
    content: 'Very accurate kundli reading and helpful guidance for my career. The remedies were simple yet effective. Highly recommended for anyone seeking clarity.',
    rating: 5,
  },
  {
    name: 'Rajesh Agarwal',
    role: 'Software Engineer',
    content: 'Simple remedies and positive results. The guidance I received for my career transition was spot-on. Shilpa ji has a deep understanding of Vedic astrology.',
    rating: 5,
  },
  {
    name: 'Anita Khandelwal',
    role: 'Homemaker',
    content: 'Excellent marriage compatibility consultation. Her insight helped us understand each other better and resolve long-standing issues peacefully.',
    rating: 5,
  },
  {
    name: 'Vikram Singh',
    role: 'Entrepreneur',
    content: 'Professional, genuine, and easy-to-understand advice. She explained complex astrological concepts in simple terms. Highly satisfied with the consultation.',
    rating: 5,
  },
  {
    name: 'Meena Joshi',
    role: 'Teacher',
    content: 'Very insightful vastu suggestions for our home. We saw positive changes within weeks of implementing her recommendations. Truly grateful!',
    rating: 5,
  },
  {
    name: 'Suresh Kumar',
    role: 'Doctor',
    content: 'One of the most trusted astrologers in Jaipur. Her predictions for my business expansion were accurate, and her guidance helped me make the right decisions.',
    rating: 5,
  },
];

export function TestimonialsSection() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <section className="relative py-24 overflow-hidden" id="testimonials">
      {/* Background stars */}
      <div className="absolute inset-0 overflow-hidden opacity-[0.03]">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute text-gold-400 text-2xl"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
          >
            ✦
          </div>
        ))}
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <SectionHeading
          title="Client Testimonials"
          subtitle="Hear from those who found clarity and guidance through our consultations"
        />

        {/* Main testimonial card */}
        <div className="max-w-4xl mx-auto relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
            >
              <GlassCard className="p-8 md:p-12 text-center">
                {/* Quote icon */}
                <div className="text-6xl text-gold-200 mb-4">"</div>

                {/* Stars */}
                <div className="flex justify-center text-4xl">
                <StarRating rating={testimonials[current].rating} />
</div>

                {/* Testimonial content */}
                <p className="text-lg md:text-xl text-gray-700 italic mt-6 mb-8 leading-relaxed">
                  {testimonials[current].content}
                </p>

                {/* Author info */}
                <div className="flex items-center justify-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gold-400 to-gold-500 flex items-center justify-center text-white font-bold text-lg">
                    {testimonials[current].name[0]}
                  </div>
                  <div className="text-left">
                    <p className="font-semibold text-gray-900">{testimonials[current].name}</p>
                    <p className="text-sm text-gray-500">{testimonials[current].role}</p>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          </AnimatePresence>

          {/* Navigation arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 w-10 h-10 rounded-full bg-white gold-border flex items-center justify-center hover:bg-gold-50 transition-colors z-10"
          >
            ←
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 w-10 h-10 rounded-full bg-white gold-border flex items-center justify-center hover:bg-gold-50 transition-colors z-10"
          >
            →
          </button>
        </div>

        {/* Dots navigation */}
        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                i === current ? 'w-8 bg-gold-400' : 'bg-gold-200 hover:bg-gold-300'
              }`}
            />
          ))}
        </div>

        {/* Trust badges */}
        {/* <motion.div
          className="flex flex-wrap justify-center gap-8 mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          {[
            { value: '5000+', label: 'Happy Clients' },
            { value: '4.9★', label: 'Average Rating' },
            { value: '15+', label: 'Years Trust' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-2xl font-display font-bold gold-gradient-text">{stat.value}</p>
              <p className="text-sm text-gray-600">{stat.label}</p>
            </div>
          ))}
        </motion.div> */}
      </div>
    </section>
  );
}
