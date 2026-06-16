import { motion } from 'framer-motion';
import { SectionHeading } from '../ui/UIComponents';

const steps = [
  {
    number: '01',
    icon: '📅',
    title: 'Book Appointment',
    description: 'Schedule your consultation via phone, WhatsApp, or our online form.',
  },
  {
    number: '02',
    icon: '📝',
    title: 'Share Birth Details',
    description: 'Provide your birth date, time, and place for accurate analysis.',
  },
  {
    number: '03',
    icon: '🔍',
    title: 'Detailed Analysis',
    description: 'Receive a comprehensive reading of your kundli and planetary positions.',
  },
  {
    number: '04',
    icon: '✨',
    title: 'Receive Guidance',
    description: 'Get personalized remedies and actionable guidance for your life.',
  },
];

export function ConsultationProcessSection() {
  return (
    <section className="relative py-24 overflow-hidden" id="process">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden opacity-[0.02]">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px]">
          <svg viewBox="0 0 400 400" className="w-full h-full">
            <circle cx="200" cy="200" r="180" fill="none" stroke="#D4AF37" strokeWidth="0.5" />
            <circle cx="200" cy="200" r="150" fill="none" stroke="#D4AF37" strokeWidth="0.5" />
            <circle cx="200" cy="200" r="120" fill="none" stroke="#D4AF37" strokeWidth="0.5" />
          </svg>
        </div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <SectionHeading
          title="Consultation Process"
          subtitle="Simple 4-step process to get your personalized astrological guidance"
        />

        {/* Timeline */}
        <div className="relative mt-16">
          {/* Horizontal line for desktop */}
          <div className="hidden md:block absolute top-20 left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-gold-200 via-gold-400 to-gold-200" />

          {/* Animated progress line */}
          <motion.div
            className="hidden md:block absolute top-20 left-[10%] h-0.5 bg-gradient-to-r from-gold-400 via-gold-300 to-gold-400"
            initial={{ width: '0%' }}
            whileInView={{ width: '80%' }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, delay: 0.5 }}
          />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-4">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                className="relative"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                {/* Step number circle */}
                <div className="flex flex-col items-center">
                  {/* Circle with number */}
                  <motion.div
                    className="relative w-16 h-16 flex items-center justify-center rounded-full bg-white gold-border luxury-shadow z-10"
                    whileHover={{ scale: 1.1 }}
                  >
                    {/* Background gradient */}
                    <div className="absolute inset-1 rounded-full bg-gradient-to-br from-gold-50 to-white" />

                    {/* Number or icon */}
                    <motion.div
                      className="relative z-10 text-2xl"
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                    >
                      {step.icon}
                    </motion.div>

                    {/* Step number badge */}
                    <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-gradient-to-br from-gold-400 to-gold-500 flex items-center justify-center text-white text-xs font-bold">
                      {step.number}
                    </div>
                  </motion.div>

                  {/* Vertical line for mobile */}
                  {index < steps.length - 1 && (
                    <div className="md:hidden w-0.5 h-8 bg-gradient-to-b from-gold-300 to-gold-100" />
                  )}

                  {/* Content */}
                  <div className="mt-6 text-center px-4">
                    <h3 className="text-lg font-display font-semibold text-gray-900 mb-2">
                      {step.title}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {step.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <motion.a
            href="#contact"
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-gold-400 to-gold-500 text-white font-semibold rounded-full luxury-shadow"
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="text-xl">✨</span>
            <span>Start Your Journey</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
