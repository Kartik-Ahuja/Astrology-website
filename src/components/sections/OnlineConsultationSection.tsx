import { motion } from 'framer-motion';
import { GlassCard, SectionHeading } from '../ui/UIComponents';

const onlineServices = [
  { icon: '💬', title: 'WhatsApp Consultation', desc: 'Chat-based guidance at your convenience' },
  { icon: '📞', title: 'Phone Consultation', desc: 'Personal phone session with detailed discussion' },
  { icon: '📹', title: 'Video Call Consultation', desc: 'Face-to-face virtual consultation worldwide' },
  { icon: '📿', title: 'Online Kundli Reading', desc: 'Comprehensive birth chart analysis online' },
  { icon: '🖐️', title: 'Online Palm Reading', desc: 'Send photos for detailed palmistry reading' },
  { icon: '👁️', title: 'Online Face Reading', desc: 'Virtual face reading for insights' },
  { icon: '🙏', title: 'Online Pooja Consultation', desc: 'Virtual pooja guidance and rituals' },
];

export function OnlineConsultationSection() {
  return (
    <section className="relative py-24 overflow-hidden bg-gradient-to-b from-cream-50 to-white" id="online">
      {/* World map background */}
      <div className="absolute inset-0 opacity-[0.03]">
        <svg viewBox="0 0 1000 500" className="w-full h-full" preserveAspectRatio="xMidYMid slice">
          {/* Simplified world map paths */}
          <g fill="#D4AF37">
            {/* Americas */}
            <ellipse cx="200" cy="200" rx="80" ry="120" fillOpacity="0.3" />
            {/* Europe/Africa */}
            <ellipse cx="500" cy="220" rx="100" ry="140" fillOpacity="0.3" />
            {/* Asia */}
            <ellipse cx="750" cy="180" rx="150" ry="120" fillOpacity="0.3" />
            {/* Australia */}
            <ellipse cx="850" cy="350" rx="50" ry="40" fillOpacity="0.3" />
          </g>
          {/* Connecting lines */}
          <g stroke="#D4AF37" strokeWidth="0.5" fill="none" opacity="0.5">
            <path d="M200,180 Q300,100 500,200" />
            <path d="M500,220 Q600,150 750,180" />
            <path d="M200,250 Q400,300 500,280" />
            <path d="M750,200 Q800,250 850,350" />
          </g>
        </svg>
      </div>

      {/* Animated connection lines */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-gold-400 rounded-full"
            style={{
              top: `${30 + i * 10}%`,
              left: `${20 + i * 15}%`,
            }}
            animate={{
              scale: [0, 1, 0],
              opacity: [0, 0.8, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: i * 0.5,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <SectionHeading
          title="Consult From Anywhere"
          subtitle="Connect with Astrologer Shilpa from the comfort of your home, anywhere in the world"
        />

        {/* Online Services Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mt-12">
          {onlineServices.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <GlassCard className="p-5 text-center group cursor-pointer hover:border-gold-400">
                <motion.div
                  className="text-3xl mb-3 group-hover:scale-110 transition-transform"
                >
                  {service.icon}
                </motion.div>
                <h3 className="text-sm font-semibold text-gray-900 mb-1 group-hover:text-gold-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-xs text-gray-600">
                  {service.desc}
                </p>
              </GlassCard>
            </motion.div>
          ))}
        </div>

        {/* Stats and CTA */}
        <motion.div
          className="mt-16 glass-card p-8 md:p-12 rounded-3xl text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <span className="text-4xl font-display font-bold gold-gradient-text">10+</span>
              <p className="text-gray-600 mt-1">Countries Served</p>
            </div>
            <div>
              <span className="text-4xl font-display font-bold gold-gradient-text">24/7</span>
              <p className="text-gray-600 mt-1">Support Available</p>
            </div>
            <div>
              <span className="text-4xl font-display font-bold gold-gradient-text">100%</span>
              <p className="text-gray-600 mt-1">Confidential</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              href="https://wa.me/919769571305?text=Hi%2C%20I%20want%20to%20book%20an%20online%20consultation"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-gold-400 to-gold-500 text-white font-semibold rounded-full luxury-shadow"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="text-xl">💬</span>
              <span>Chat on WhatsApp</span>
            </motion.a>
            <motion.a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-gold-400 text-gold-600 font-semibold rounded-full hover:bg-gold-50 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <span>Book Online Session</span>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
