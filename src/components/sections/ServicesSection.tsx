import { motion } from 'framer-motion';
import { GlassCard, SectionHeading } from '../ui/UIComponents';
import type { ReactNode } from 'react';

interface Service {
  icon: ReactNode;
  title: string;
  description: string;
}

const services: Service[] = [
  {
    icon: '📿',
    title: 'Kundli Reading',
    description: 'Detailed birth chart analysis revealing your life path, career, relationships, and more.',
  },
  {
    icon: '♍',
    title: 'Janam Kundli Analysis',
    description: 'In-depth analysis of your birth chart with planetary positions and their influences.',
  },
  {
    icon: '🔮',
    title: 'Horoscope Reading',
    description: 'Monthly and yearly predictions based on your moon sign and planetary transits.',
  },
  {
    icon: '💑',
    title: 'Marriage Compatibility',
    description: 'Gun Milan and compatibility analysis for successful and harmonious marriages.',
  },
  {
    icon: '💕',
    title: 'Kundli Matching',
    description: 'Traditional Vedic matching for ensuring long-lasting and happy relationships.',
  },
  {
    icon: '❤️',
    title: 'Love & Relationship',
    description: 'Guidance for love life, relationships, and resolving personal matters.',
  },
  {
    icon: '💼',
    title: 'Career Astrology',
    description: 'Career guidance based on planetary positions for professional success.',
  },
  {
    icon: '📊',
    title: 'Business Astrology',
    description: 'Business predictions and guidance for entrepreneurs and business owners.',
  },
  {
    icon: '💰',
    title: 'Financial Guidance',
    description: 'Financial predictions and remedies for wealth accumulation and stability.',
  },
  {
    icon: '🖐️',
    title: 'Palm Reading',
    description: 'Palmistry reading to reveal personality traits, future prospects, and life events.',
  },
  {
    icon: '👁️',
    title: 'Face Reading',
    description: 'Face reading analysis revealing character, fortune, and life patterns.',
  },
  {
    icon: '🙏🏻',
    title: 'Online Pooja',
    description: 'Virtual Pooja consultation for spiritual remedies and divine blessings.',
  },
  {
    icon: '🎯',
    title: 'Future Prediction',
    description: 'Accurate predictions about upcoming events and life milestones.',
  },
  {
    icon: '👨‍👩‍👧',
    title: 'Family Guidance',
    description: 'Family astrology consultation for harmony and resolving domestic issues.',
  },
];

function ServiceCard({ service, index }: { service: Service; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
    >
      <GlassCard className="group p-6 h-full">
        <div className="relative overflow-hidden">
          {/* Shine effect on hover */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-gold-400/10 to-transparent"
            initial={{ x: '-100%' }}
            whileHover={{ x: '100%' }}
            transition={{ duration: 0.6 }}
          />

          <div className="relative z-10">
            {/* Icon container */}
            <motion.div
              className="w-14 h-14 flex items-center justify-center rounded-xl bg-gradient-to-br from-gold-100 to-gold-50 text-3xl mb-4 gold-border group-hover:scale-110 transition-transform duration-300"
            >
              {service.icon}
            </motion.div>

            {/* Title */}
            <h3 className="text-lg font-display font-semibold text-gray-900 mb-2 group-hover:text-gold-600 transition-colors duration-300">
              {service.title}
            </h3>

            {/* Description */}
            <p className="text-sm text-gray-600 leading-relaxed">
              {service.description}
            </p>

            {/* Hover indicator */}
            {/* <motion.div
              className="mt-4 flex items-center gap-2 text-gold-500 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            >
              <span>Learn more</span>
              <motion.span
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                →
              </motion.span>
            </motion.div> */}
          </div>

          {/* Corner golden accent */}
          <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden">
            <div className="absolute -top-8 -right-8 w-16 h-16 bg-gradient-to-br from-gold-400/30 to-transparent rotate-45 group-hover:from-gold-400/50 transition-all duration-300" />
          </div>
        </div>
      </GlassCard>
    </motion.div>
  );
}

export function ServicesSection() {
  return (
    <section className="relative py-24 bg-gradient-to-b from-cream-50 to-white" id="services">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden opacity-[0.02]">
        <div className="absolute top-20 left-10 text-8xl text-gold-400">♈</div>
        <div className="absolute top-40 right-20 text-6xl text-gold-400">♌</div>
        <div className="absolute bottom-20 left-1/4 text-7xl text-gold-400">♎</div>
        <div className="absolute bottom-40 right-1/3 text-5xl text-gold-400">♑</div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <SectionHeading
          title="Premium Services"
          subtitle="Comprehensive astrological services tailored to guide you through life's every aspect"
        />

        {/* Services Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>

        {/* CTA */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-600 mb-6">
            Not sure which service is right for you?
          </p>
          <motion.a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-gold-400 to-gold-500 text-white font-semibold rounded-full hover:from-gold-500 hover:to-gold-600 transition-all duration-300 luxury-shadow"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            <span>Book a Free Consultation</span>
            <span>→</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
