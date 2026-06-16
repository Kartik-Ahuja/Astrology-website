import { motion } from 'framer-motion';
import { SectionHeading } from '../ui/UIComponents';
import AstroImage from "../images/astro.png";

export function AboutSection() {
  return (
    <section className="relative py-24 overflow-hidden" id="about">
      {/* Mandala watermark background */}
      <div className="absolute inset-0 flex items-center justify-center opacity-[0.02]">
        <motion.div
          className="w-[800px] h-[800px]"
          animate={{ rotate: 360 }}
          transition={{ duration: 100, repeat: Infinity, ease: 'linear' }}
        >
          <svg viewBox="0 0 400 400" className="w-full h-full">
            <circle cx="200" cy="200" r="180" fill="none" stroke="#D4AF37" strokeWidth="0.5" />
            <circle cx="200" cy="200" r="150" fill="none" stroke="#D4AF37" strokeWidth="0.5" />
            <circle cx="200" cy="200" r="120" fill="none" stroke="#D4AF37" strokeWidth="0.5" />
            <circle cx="200" cy="200" r="80" fill="none" stroke="#D4AF37" strokeWidth="0.5" />
            <circle cx="200" cy="200" r="40" fill="none" stroke="#D4AF37" strokeWidth="0.5" />
            {[0, 30, 60, 90, 120, 150].map((angle, i) => (
              <line
                key={i}
                x1={200 + 40 * Math.cos((angle * Math.PI) / 180)}
                y1={200 + 40 * Math.sin((angle * Math.PI) / 180)}
                x2={200 + 180 * Math.cos((angle * Math.PI) / 180)}
                y2={200 + 180 * Math.sin((angle * Math.PI) / 180)}
                stroke="#D4AF37"
                strokeWidth="0.3"
              />
            ))}
          </svg>
        </motion.div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <SectionHeading
          title="About Astrologer Shilpa"
          subtitle="A journey of guiding souls through the ancient wisdom of Vedic Astrology"
        />

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left - Image */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative max-w-md mx-auto">
              {/* Decorative frame */}
              <div className="relative">
                <motion.div
                  className="absolute -inset-4 bg-gradient-to-br from-gold-400/20 to-transparent rounded-3xl"
                  animate={{ opacity: [0.5, 0.8, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />

                {/* Gold frame border */}
                <div className="relative gold-border rounded-3xl p-2 bg-white">
                  <div className="relative overflow-hidden rounded-2xl">
                    <img
                      src={AstroImage}
                      alt="Astrologer Shilpa Tibrewal"
                      className="w-full h-96 object-cover"
                    />

                    {/* Subtle glow overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-gold-400/20 via-transparent to-transparent" />

                    {/* Shine effect */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-6"
                      animate={{ x: ['-200%', '200%'] }}
                      transition={{ duration: 4, repeat: Infinity, repeatDelay: 3 }}
                    />
                  </div>
                </div>

                {/* Floating decorative elements */}
                <motion.div
                  className="absolute -top-6 -right-6 w-12 h-12 text-gold-400"
                  animate={{ rotate: 360, y: [-5, 5, -5] }}
                  transition={{ duration: 8, repeat: Infinity }}
                >
                  <svg viewBox="0 0 50 50" className="w-full h-full">
                    <path d="M25 0 L31 19 L50 25 L31 31 L25 50 L19 31 L0 25 L19 19 Z" fill="#D4AF37" strokeWidth="2" />
                  </svg>
                </motion.div>

                <motion.div
                  className="absolute -bottom-4 -left-4 w-8 h-8 text-gold-300"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  ✦
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-gold-500 font-latin text-sm tracking-widest uppercase">
                Your Trusted Guide
              </span>
            </motion.div>

            <motion.h3
              className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              Hi, I am <span className="gold-gradient-text">Shilpa Tibrewal</span>
            </motion.h3>

            <motion.div
              className="space-y-4 text-gray-600 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <p>
                A trusted Astrologer in Jaipur offering Vedic Astrology, Kundli Reading, Janam Kundli Analysis, Horoscope Reading, Palm Reading, Face Reading, Numerology, Vastu Consultation, and Online Pooja Consultation.
              </p>
              <p>
                My mission is to help people gain clarity, confidence, and direction through personalized astrological guidance. With over 20 years of experience and 5000+ successful consultations, I bring both spiritual wisdom and practical solutions to every reading.
              </p>
            </motion.div>

            {/* Specializations */}
            <motion.div
              className="mt-8 flex flex-wrap gap-3"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              {[
                'Vedic Astrology',
                'Kundli Expert',
                'Palm Reader',
                'Numerologist',
                'Vastu Consultant',
              ].map((tag) => (
                <span
                  key={tag}
                  className="px-4 py-2 bg-gold-50 text-gold-700 rounded-full text-sm font-medium border border-gold-200"
                >
                  {tag}
                </span>
              ))}
            </motion.div>

            {/* Quote */}
            <motion.div
              className="mt-10 relative"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <div className="absolute left-0 top-0 text-6xl text-gold-200 font-serif leading-none">"</div>
              <p className="pl-8 italic text-gray-500 text-lg">
                Stars don't just tell your future—they guide you to create it.
              </p>
              <p className="pl-8 mt-2 text-gold-500 font-semibold">— Shilpa Tibrewal</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
