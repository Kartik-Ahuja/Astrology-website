import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionHeading } from '../ui/UIComponents';

const zodiacSigns = [
  { symbol: '♈', name: 'Aries', sanskrit: 'Mesha', element: 'Fire', trait: 'Courageous & Dynamic', dates: 'Mar 21 - Apr 19' },
  { symbol: '♉', name: 'Taurus', sanskrit: 'Vrishabha', element: 'Earth', trait: 'Reliable & Patient', dates: 'Apr 20 - May 20' },
  { symbol: '♊', name: 'Gemini', sanskrit: 'Mithuna', element: 'Air', trait: 'Adaptable & Intellectual', dates: 'May 21 - Jun 20' },
  { symbol: '♋', name: 'Cancer', sanskrit: 'Karka', element: 'Water', trait: 'Intuitive & Nurturing', dates: 'Jun 21 - Jul 22' },
  { symbol: '♌', name: 'Leo', sanskrit: 'Simha', element: 'Fire', trait: 'Confident & Charismatic', dates: 'Jul 23 - Aug 22' },
  { symbol: '♍', name: 'Virgo', sanskrit: 'Kanya', element: 'Earth', trait: 'Analytical & Practical', dates: 'Aug 23 - Sep 22' },
  { symbol: '♎', name: 'Libra', sanskrit: 'Tula', element: 'Air', trait: 'Harmonious & Diplomatic', dates: 'Sep 23 - Oct 22' },
  { symbol: '♏', name: 'Scorpio', sanskrit: 'Vrishchika', element: 'Water', trait: 'Passionate & Resourceful', dates: 'Oct 23 - Nov 21' },
  { symbol: '♐', name: 'Sagittarius', sanskrit: 'Dhanu', element: 'Fire', trait: 'Optimistic & Adventurous', dates: 'Nov 22 - Dec 21' },
  { symbol: '♑', name: 'Capricorn', sanskrit: 'Makara', element: 'Earth', trait: 'Disciplined & Ambitious', dates: 'Dec 22 - Jan 19' },
  { symbol: '♒', name: 'Aquarius', sanskrit: 'Kumbha', element: 'Air', trait: 'Innovative & Independent', dates: 'Jan 20 - Feb 18' },
  { symbol: '♓', name: 'Pisces', sanskrit: 'Meena', element: 'Water', trait: 'Compassionate & Artistic', dates: 'Feb 19 - Mar 20' },
];

function ZodiacWheel() {
  const [selectedSign, setSelectedSign] = useState<string | null>(null);

  const selected = zodiacSigns.find(s => s.name === selectedSign);

  return (
    <div className="relative flex items-center justify-center">
      {/* Outer rotating ring */}
      <motion.div
        className="absolute w-[500px] h-[500px] md:w-[600px] md:h-[600px]"
        animate={{ rotate: 360 }}
        transition={{ duration: 120, repeat: Infinity, ease: 'linear' }}
      >
        <svg viewBox="0 0 400 400" className="w-full h-full">
          <circle cx="200" cy="200" r="195" fill="none" stroke="#D4AF37" strokeWidth="0.5" strokeDasharray="5 10" opacity="0.3" />
        </svg>
      </motion.div>

      {/* Main Zodiac Wheel */}
      <div className="relative w-[400px] h-[400px] md:w-[500px] md:h-[500px]">
        {/* Background circles */}
        <motion.div
          className="absolute inset-0"
          animate={{ rotate: -360 }}
          transition={{ duration: 90, repeat: Infinity, ease: 'linear' }}
        >
          <svg viewBox="0 0 400 400" className="w-full h-full">
            <circle cx="200" cy="200" r="180" fill="none" stroke="#D4AF37" strokeWidth="1" opacity="0.4" />
            <circle cx="200" cy="200" r="140" fill="none" stroke="#D4AF37" strokeWidth="0.5" opacity="0.3" />
            <circle cx="200" cy="200" r="100" fill="none" stroke="#D4AF37" strokeWidth="0.5" opacity="0.2" />
            <circle cx="200" cy="200" r="60" fill="none" stroke="#D4AF37" strokeWidth="0.5" opacity="0.2" />
          </svg>
        </motion.div>

        {/* Center glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full bg-gradient-to-br from-gold-400/30 to-gold-100/10 blur-xl" />

        {/* Zodiac symbols arranged in a circle */}
        {zodiacSigns.map((sign, i) => {
          const angle = (i * 30 - 90) * (Math.PI / 180);
          const radius = 160;
          const x = Math.cos(angle) * radius;
          const y = Math.sin(angle) * radius;

          return (
            <motion.button
              key={sign.name}
              className={`absolute w-12 h-12 md:w-14 md:h-14 flex items-center justify-center rounded-full cursor-pointer transition-all duration-300 ${
                selectedSign === sign.name
                  ? 'bg-gradient-to-br from-gold-400 to-gold-500 text-white scale-125 gold-glow'
                  : 'bg-white/80 text-gold-500 hover:bg-gold-50 hover:scale-110 border border-gold-200'
              }`}
              style={{
                top: `calc(50% + ${y}px - 28px)`,
                left: `calc(50% + ${x}px - 28px)`,
              }}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.05, duration: 0.3 }}
              whileHover={{ scale: selectedSign === sign.name ? 1.25 : 1.15 }}
              onClick={() => setSelectedSign(selectedSign === sign.name ? null : sign.name)}
            >
              <span className="text-xl md:text-2xl">{sign.symbol}</span>
            </motion.button>
          );
        })}

        {/* Center content */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-28 h-28 md:w-32 md:h-32 rounded-full bg-white/90 flex items-center justify-center border border-gold-200 shadow-lg">
          <div className="text-center">
            <span className="text-3xl md:text-4xl">✧</span>
            <p className="text-xs text-gold-600 font-medium mt-1">Select Sign</p>
          </div>
        </div>
      </div>

      {/* Selected Sign Info Card */}
      <AnimatePresence>
        {selected && (
          <motion.div
            className="absolute top-full mt-8 w-full max-w-sm mx-auto"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <div className="glass-card p-6 rounded-2xl">
              <div className="text-center">
                <span className="text-5xl">{selected.symbol}</span>
                <h4 className="text-2xl font-display font-bold text-gray-900 mt-2">{selected.name}</h4>
                <p className="text-gold-500 font-latin text-sm">{selected.sanskrit}</p>
                <div className="flex justify-center gap-4 mt-4 text-sm">
                  <span className="px-3 py-1 bg-gold-100 text-gold-700 rounded-full">{selected.element}</span>
                  <span className="px-3 py-1 bg-cream-200 text-gray-700 rounded-full">{selected.dates}</span>
                </div>
                <p className="mt-4 text-gray-600">{selected.trait}</p>
                <motion.a
                  href="#contact"
                  className="inline-block mt-4 px-6 py-2 bg-gold-400 text-white rounded-full text-sm font-medium hover:bg-gold-500 transition-colors"
                  whileHover={{ scale: 1.05 }}
                >
                  Get {selected.name} Reading
                </motion.a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function ZodiacWheelSection() {
  return (
    <section className="relative py-24 overflow-hidden" id="zodiac-wheel">
      {/* Background stars */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-gold-400 rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0.2, 0.8, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 2 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <SectionHeading
          title="Explore Your Zodiac"
          subtitle="Click on your zodiac sign to discover your cosmic personality and get a personalized reading"
        />

        <div className="flex justify-center mb-12">
          <ZodiacWheel />
        </div>
      </div>
    </section>
  );
}
