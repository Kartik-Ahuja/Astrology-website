import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { AnimatedBackground } from './components/effects/AnimatedBackground';
import { Header } from './components/layout/Header';
import { HeroSection } from './components/sections/HeroSection';
import { AboutSection } from './components/sections/AboutSection';
import { ServicesSection } from './components/sections/ServicesSection';
import { ZodiacWheelSection } from './components/sections/ZodiacWheelSection';
import { WhyChooseUsSection } from './components/sections/WhyChooseUsSection';
import { ConsultationProcessSection } from './components/sections/ConsultationProcessSection';
import { OnlineConsultationSection } from './components/sections/OnlineConsultationSection';
import { TestimonialsSection } from './components/sections/TestimonialsSection';
import { FAQSection } from './components/sections/FAQSection';
import { ContactSection } from './components/sections/ContactSection';
import { Footer } from './components/layout/Footer';
import {
  FloatingWhatsApp,
  StickyCTA,
  ScrollProgressBar,
  MobileCallButton,
  ExitIntentPopup,
} from './components/layout/FloatingElements';

function App() {
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLAnchorElement;
      if (target.tagName === 'A' && target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        const id = target.getAttribute('href')?.slice(1);
        if (id) {
          const element = document.getElementById(id);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, []);

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <AnimatedBackground />
      <ScrollProgressBar />
      <Header />

      <main className="relative z-10">
        <HeroSection />

        <motion.div
          className="h-1 bg-gradient-to-r from-transparent via-gold-300 to-transparent"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
        />

        <AboutSection />
        <ServicesSection />
        <ZodiacWheelSection />
        <WhyChooseUsSection />
        <ConsultationProcessSection />
        <OnlineConsultationSection />
        <TestimonialsSection />
        <FAQSection />
        <ContactSection />
      </main>

      <Footer />

      <FloatingWhatsApp />
      <StickyCTA />
      <MobileCallButton />
      <ExitIntentPopup />

      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {['♈', '♉', '♊', '♌', '♍', '♎', '♐', '♑', '♒'].map((symbol, i) => (
          <motion.div
            key={i}
            className="absolute text-gold-300/10 text-6xl"
            style={{
              top: `${10 + (i % 3) * 30}%`,
              left: `${5 + (i % 4) * 25}%`,
            }}
            animate={{
              y: [-20, 20, -20],
              opacity: [0.05, 0.15, 0.05],
            }}
            transition={{
              duration: 8 + i,
              repeat: Infinity,
              delay: i * 0.5,
            }}
          >
            {symbol}
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default App;
