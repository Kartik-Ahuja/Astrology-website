import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionHeading } from '../ui/UIComponents';

const faqs = [
  {
    question: 'Who is the best astrologer in Jaipur?',
    answer: 'Astrologer Shilpa Tibrewal is one of the most trusted and experienced astrologers in Jaipur, with over 20 years of experience in Vedic Astrology, Kundli Reading, Kundli Matching, Palm Reading, Face Reading, Numerology, and Vastu Consultation. She has guided over 5000+ clients with accurate predictions and practical remedies.',
  },
  {
    question: 'How does kundli reading work?',
    answer: 'Kundli reading, also known as birth chart analysis, uses your exact birth date, time, and place to create a detailed map of planetary positions at your birth. This reveals insights about your personality, career, relationships, health, finances, and life path. Astrologer Shilpa provides personalized guidance based on ancient Vedic principles.',
  },
  {
    question: 'Can I book an online astrology consultation?',
    answer: 'Yes! Astrologer Shilpa offers online consultations via WhatsApp, phone call, and video call. You can receive guidance on Kundli Reading, Palm Reading, Face Reading, Vastu, and Online Pooja from anywhere in the world. Simply book through our website or contact via WhatsApp.',
  },
  {
    question: 'Do you offer online pooja consultation?',
    answer: 'Yes, we offer Online Pooja Consultation. You can book a virtual pooja session where Astrologer Shilpa guides you through traditional Vedic rituals and remedies from the comfort of your home. This includes detailed instructions for proper pooja performance and spiritual remedies.',
  },
  {
    question: 'What details are needed for horoscope reading?',
    answer: 'For accurate horoscope reading, you need to provide: your birth date, exact birth time (as accurate as possible), and birth place (city/state/country). More accurate details lead to more precise predictions and guidance.',
  },
  {
    question: 'Do you provide vastu consultation for homes and offices?',
    answer: 'Yes, Astrologer Shilpa provides comprehensive Vastu Consultation for both homes and commercial spaces. She analyzes your property layout and provides practical remedies for better energy flow, prosperity, and harmony without requiring major structural changes.',
  },
  {
    question: 'What is the cost of astrology consultation?',
    answer: 'Consultation fees vary based on the type of service and complexity. We offer affordable and transparent pricing. Contact us via WhatsApp or call for specific pricing details. All consultations include detailed analysis and practical remedies.',
  },
  {
    question: 'How accurate are the predictions?',
    answer: 'With over 20 years of experience and 5000+ successful consultations, our predictions are highly accurate. However, astrology is a guidance tool—the outcome also depends on your actions and life choices. We aim to empower you with knowledge to make informed decisions.',
  },
];

function FAQItem({ faq, isOpen, onToggle }: { faq: typeof faqs[0]; isOpen: boolean; onToggle: () => void }) {
  return (
    <motion.div
      className="border-b border-gold-200 last:border-0"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <button
        onClick={onToggle}
        className="w-full py-6 flex items-center justify-between text-left group"
      >
        <span className="text-lg font-medium text-gray-900 group-hover:text-gold-600 transition-colors pr-4">
          {faq.question}
        </span>
        <motion.span
          className="text-gold-500 text-2xl flex-shrink-0"
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.3 }}
        >
          +
        </motion.span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="text-gray-600 pb-6 leading-relaxed">
              {faq.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="relative py-24 bg-gradient-to-b from-white to-cream-50" id="faq">
      <div className="container mx-auto px-4 lg:px-8">
        <SectionHeading
          title="Frequently Asked Questions"
          subtitle="Find answers to common questions about our astrology services"
        />

        <div className="max-w-3xl mx-auto">
          <div className="glass-card rounded-2xl p-6 md:p-8">
            {faqs.map((faq, index) => (
              <FAQItem
                key={faq.question}
                faq={faq}
                isOpen={openIndex === index}
                onToggle={() => setOpenIndex(openIndex === index ? null : index)}
              />
            ))}
          </div>
        </div>

        {/* Additional CTA */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-600 mb-4">Still have questions?</p>
          <motion.a
            href="https://wa.me/919769571305"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-gold-600 hover:text-gold-700 font-semibold"
            whileHover={{ x: 5 }}
          >
            <span>Chat with us on WhatsApp</span>
            <span>→</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
