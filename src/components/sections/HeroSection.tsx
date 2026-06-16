import { motion } from 'framer-motion';
import { Button, Counter } from '../ui/UIComponents';
import HeroImage from "../images/hero.jpg";


const counters = [
  { value: 5000, suffix: '+', label: 'Consultations' },
  { value: 20, suffix: '+', label: 'Years Experience' },
  { value: 100, suffix: '%', label: 'Client Satisfaction' },
];

export function HeroSection() {
  return (
    <section className="relative min-h-screen   pt-30 pb-10 overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Side - Content */}
          <motion.div
            className="order-2 lg:order-1 text-center lg:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mb-4"
            >
              <span className="inline-block px-4 py-2 rounded-full bg-gold-100 text-gold-700 text-sm font-semibold tracking-wide">
                Trusted  Astrologer
              </span>
            </motion.div>

            <motion.h1
              className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-gray-900 mb-6 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              <span className="block">Best Astrologer</span>
              <span className="block gold-gradient-text">in Jaipur</span>
            </motion.h1>

            <motion.p
              className="text-lg md:text-xl text-gray-600 mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              Get personalized guidance for career, marriage, relationships, business, finances, family matters, and life purpose through authentic  Astrology.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="CTA flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              <Button
                href="#contact"
                variant="primary"
                size="lg"
                icon={<span className="text-lg">✨</span>}
              >
                Book Consultation
              </Button>
              <Button
                href="tel:+919769571305"
                variant="outline"
                size="lg"
                icon={<span className="text-lg">📞</span>}
              >
                Call Now
              </Button>
              <Button
                href="https://wa.me/919769571305"
                variant="secondary"
                size="lg"
                icon={<span className="text-lg">💬</span>}
              >
                WhatsApp
              </Button>
            </motion.div>

            {/* Trust Indicators */}
            {/* <motion.div
              className="flex items-center gap-6 justify-center lg:justify-start text-sm text-gray-500"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span>Available Now</span>
              </div>
              <div className="flex items-center gap-2">
                <span>🌟</span>
                <span>4.9/5 Rating</span>
              </div>
              <div className="flex items-center gap-2">
                <span>📍</span>
                <span>Jaipur, Rajasthan</span>
              </div>
            </motion.div> */}
          </motion.div>

          {/* Right Side - Animated Portrait Frame */}
          <motion.div
            className="order-1 lg:order-2 flex justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative">
              {/* Outer glow ring */}
              <motion.div
                className="absolute -inset-4 bg-gradient-to-r from-gold-400/40 via-gold-200/20 to-gold-400/40 rounded-full blur-2xl"
                animate={{
                  opacity: [0.5, 0.8, 0.5],
                  scale: [1, 1.02, 1],
                }}
                transition={{ duration: 3, repeat: Infinity }}
              />

              {/* Animated golden frame */}
              <div className="relative">
                {/* Rotating outer ring */}
                <motion.div
                  className="absolute -inset-3 rounded-full"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
                >
                  <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 400">
                    <defs>
                      <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#D4AF37" />
                        <stop offset="50%" stopColor="#F7E7CE" />
                        <stop offset="100%" stopColor="#D4AF37" />
                      </linearGradient>
                    </defs>
                    <circle
                      cx="200"
                      cy="200"
                      r="195"
                      fill="none"
                      stroke="url(#goldGrad)"
                      strokeWidth="1.5"
                      strokeDasharray="30 20"
                    />
                  </svg>
                </motion.div>

                {/* Static elegant frame */}
                <div className="relative p-3 rounded-full gold-border luxury-shadow">
                  {/* Inner decorative ring */}
                  <motion.div
                    className="absolute -inset-1 rounded-full"
                    animate={{ rotate: -360 }}
                    transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
                  >
                    <svg className="absolute inset-0 w-full h-full opacity-30" viewBox="0 0 400 400">
                      {/* Zodiac symbols around the circle */}
                      {['♈', '♉', '♊', '♋', '♌', '♍', '♎', '♏', '♐', '♑', '♒', '♓'].map((symbol, i) => {
                        const angle = (i * 30 - 90) * (Math.PI / 180);
                        const x = 200 + 175 * Math.cos(angle);
                        const y = 200 + 175 * Math.sin(angle);
                        return (
                          <text
                            key={i}
                            x={x}
                            y={y}
                            textAnchor="middle"
                            alignmentBaseline="middle"
                            fill="#D4AF37"
                            fontSize="14"
                          >
                            {symbol}
                          </text>
                        );
                      })}
                    </svg>
                  </motion.div>

                  {/* Profile Image Container */}
                  <div className="relative w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden bg-gradient-to-br from-gold-100 to-cream-200">
                    {/* Decorative inner border */}
                    <div className="absolute inset-2 rounded-full border border-gold-300/50" />

                    {/* Image */}
                    <img
                      src={HeroImage}
                      alt="Astrologer Shilpa - Best Astrologer in Jaipur"
                      className="w-full h-full object-cover object-top"
                    />

                    {/* Overlay gradient for elegant effect */}
                    <div className="absolute inset-0 bg-gradient-to-t from-gold-400/10 via-transparent to-transparent" />

                    {/* Shine effect */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                      animate={{ x: ['-100%', '100%'] }}
                      transition={{ duration: 3, repeat: Infinity, repeatDelay: 5 }}
                    />
                  </div>

                  {/* Corner decorative elements */}
                  {[
                    { top: '5%', left: '5%' },
                    { top: '5%', right: '5%' },
                    { bottom: '5%', left: '5%' },
                    { bottom: '5%', right: '5%' },
                  ].map((style, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-8 h-8 text-gold-400 opacity-60"
                      style={style}
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                    >
                      <svg viewBox="0 0 30 30" className="w-full h-full">
                        <path
                          d="M15 5 L20 10 L15 15 L10 10 Z"
                          fill="currentColor"
                        />
                      </svg>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Floating elements around the frame */}
              {[...Array(6)].map((_, i) => {
                const angle = (i * 60 - 90) * (Math.PI / 180);
                const radius = 240;
                return (
                  <motion.div
                    key={i}
                    className="absolute w-6 h-6 text-gold-400"
                    style={{
                      top: `calc(50% + ${Math.sin(angle) * radius}px - 12px)`,
                      left: `calc(50% + ${Math.cos(angle) * radius}px - 12px)`,
                    }}
                    animate={{
                      y: [-5, 5, -5],
                      opacity: [0.4, 0.8, 0.4],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: i * 0.5,
                    }}
                  >
                    ✦
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Trust Bar - Counters */}
      <motion.div
        className="relative mt-[50px] bottom-10 left-0 right-0"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.6 }}
      >
        <div className="container mx-auto px-4">
          <div className="glass-card rounded-2xl p-6 md:p-8">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8 ">
              {counters.map((counter, i) => (
                <motion.div
                  key={counter.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9 + i * 0.1 }}
                >
                  <Counter {...counter} />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
