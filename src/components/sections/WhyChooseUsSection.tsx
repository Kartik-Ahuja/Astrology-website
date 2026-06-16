import { motion } from 'framer-motion';
import { GlassCard, SectionHeading } from '../ui/UIComponents';

const features = [
  {
    icon: '👤',
    title: 'Personalized Consultation',
    description: 'Every reading is customized to your unique birth chart and life circumstances.',
  },
  {
    icon: '✨',
    title: 'Practical Remedies',
    description: 'Simple, effective solutions that seamlessly integrate into your daily life.',
  },
  {
    icon: '🤝',
    title: 'Trusted Guidance',
    description: 'Over 20 years of experience guiding thousands to clarity and success.',
  },
  {
    icon: '📱',
    title: 'Online & Offline Sessions',
    description: 'Flexible consultation options—visit in person or connect virtually.',
  },
  {
    icon: '💬',
    title: 'Easy Advice',
    description: 'Complex astrological concepts explained in simple, understandable terms.',
  },
  {
    icon: '🔒',
    title: 'Confidential Consultation',
    description: 'Your personal information and discussions remain completely private.',
  },
  {
    icon: '🙏',
    title: 'Spiritual + Practical',
    description: 'Ancient Vedic wisdom combined with modern practical applications.',
  },
];

function FeatureCard({ feature, index }: { feature: typeof features[0]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <GlassCard className="group p-6 text-center">
        {/* Animated icon */}
        <motion.div
          className="w-16 h-16 mx-auto flex items-center justify-center rounded-2xl bg-gradient-to-br from-gold-100 to-cream-200 text-3xl mb-4 gold-border"
          whileHover={{ scale: 1.1, rotate: 5 }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          {feature.icon}
        </motion.div>

        <h3 className="text-lg font-display font-semibold text-gray-900 mb-2 group-hover:text-gold-600 transition-colors">
          {feature.title}
        </h3>

        <p className="text-sm text-gray-600">
          {feature.description}
        </p>

        {/* Hover glow effect */}
        <motion.div
          className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{
            background: 'radial-gradient(circle at center, rgba(212, 175, 55, 0.1) 0%, transparent 70%)',
          }}
        />
      </GlassCard>
    </motion.div>
  );
}

export function WhyChooseUsSection() {
  return (
    <section className="relative py-24 bg-gradient-to-b from-white to-cream-50" id="why-us">
      <div className="container mx-auto px-4 lg:px-8">
        <SectionHeading
          title="Why Choose Us"
          subtitle="Experience the difference of working with a dedicated astrologer who truly cares about your journey"
        />

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {features.map((feature, index) => (
            <FeatureCard key={feature.title} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
