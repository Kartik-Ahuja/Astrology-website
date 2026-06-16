import { useState } from 'react';
import { motion } from 'framer-motion';
import { SectionHeading, GlassCard, Button } from '../ui/UIComponents';
// import { Instagram, Youtube, MessageCircle } from 'lucide-react'; 
import { FaInstagram, FaYoutube, FaWhatsapp } from "react-icons/fa";

const socialLinks = [
  { name: 'Instagram', icon: FaInstagram , url: 'https://www.instagram.com/astrology_shilpa/'},
 { name: 'YouTube',
    icon: FaYoutube,
    url: 'https://youtube.com/@Astrologer_Shilpa',
  },
  { name: 'WhatsApp', icon: FaWhatsapp, url: 'https://wa.me/919769571305' },
];

interface FormData {
  name: string;
  phone: string;
  email: string;
  service: string;
  message: string;
}

export function ContactSection() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    email: '',
    service: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch(`${import.meta.env.VITE_SUPABASE_URL}/rest/v1/contact_submissions`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'apikey': import.meta.env.VITE_SUPABASE_ANON_KEY,
          'Prefer': 'return=minimal',
        },
        body: JSON.stringify({
          ...formData,
          created_at: new Date().toISOString(),
        }),
      });

      if (response.ok) {
        setIsSuccess(true);
        setFormData({ name: '', phone: '', email: '', service: '', message: '' });
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="relative py-24 overflow-hidden" id="contact">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute top-10 left-10 text-6xl text-gold-400">♈</div>
        <div className="absolute bottom-20 right-10 text-6xl text-gold-400">♌</div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <SectionHeading
          title="Book Your Consultation"
          subtitle="Connect with Astrologer Shilpa for personalized guidance and remedies"
        />

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="space-y-8">
              {/* Contact Details Card */}
              <GlassCard className="p-8">
                <h3 className="text-2xl font-display font-bold text-gray-900 mb-6">Contact Details</h3>

                <div className="space-y-6">
                  {/* Phone */}
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-gold-100 to-cream-200 flex items-center justify-center text-xl">
                      📞
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Phone</p>
                      <a href="tel:+919769571305" className="text-lg font-semibold text-gray-900 hover:text-gold-600 transition-colors">
                        +91 97695 71305
                      </a>
                    </div>
                  </div>

                  {/* Address */}
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-gold-100 to-cream-200 flex items-center justify-center text-xl">
                      📍
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Address</p>
                      <p className="text-gray-900">
                        B Block 302, Manglam Garden City,<br />
                        Near Manglam Tarang, Near Muhana Gaav,<br />
                        Muhana, Jaipur, Rajasthan 302029
                      </p>
                    </div>
                  </div>

                  {/* Hours */}
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-gold-100 to-cream-200 flex items-center justify-center text-xl">
                      🕐
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Consultation Hours</p>
                      <p className="text-gray-900">Mon - Sun: 10:00 AM - 8:00 PM</p>
                    </div>
                  </div>
                </div>

                {/* Social Links */}
                <div className="mt-8 pt-6 border-t border-gold-200">
                  <p className="text-sm text-gray-500 mb-4">Follow Us</p>
                  <div className="flex gap-4">
                    {socialLinks.map((social) => {
  const Icon = social.icon;

  return (
    <motion.a
      key={social.name}
      href={social.url}
      target="_blank"
      rel="noopener noreferrer"
      className="w-12 h-12 rounded-xl bg-gradient-to-br from-gold-100 to-cream-200 flex items-center justify-center hover:from-gold-200 hover:to-gold-100 transition-all duration-300 gold-border"
      whileHover={{ scale: 1.1, y: -3 }}
      whileTap={{ scale: 0.95 }}
    >
      <Icon className="w-6 h-6 text-[#D4AF37] stroke-[2.2]" />
    </motion.a>
  );
})}
                  </div>
                </div>
              </GlassCard>

              {/* Map */}
              <div className="glass-card rounded-2xl overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56980.80649208004!2d75.65953731536864!3d26.79856177849045!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db56be08fd499%3A0xeebd2c34c3114360!2sAstrologer%20Shilpa%20-%20Best%20Astrologer%20In%20Jaipur!5e0!3m2!1sen!2sin!4v1781606783510!5m2!1sen!2sin"
                  width="100%"
                  height="200"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full"
                  title="Astrologer Shilpa Location"
                />
              </div>
            </div>
          </motion.div>

          {/* Right - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <GlassCard className="p-8">
              {isSuccess ? (
                <motion.div
                  className="text-center py-12"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                >
                  <div className="text-6xl mb-4">✨</div>
                  <h3 className="text-2xl font-display font-bold gold-gradient-text mb-4">
                    Thank You!
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Your consultation request has been received. We will contact you shortly.
                  </p>
                  <Button onClick={() => setIsSuccess(false)} variant="outline">
                    Submit Another Request
                  </Button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <h3 className="text-2xl font-display font-bold text-gray-900 mb-6">
                    Book Your Session
                  </h3>

                  {/* Name */}
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-gold-200 focus:border-gold-400 focus:ring-2 focus:ring-gold-100 transition-all duration-300 bg-white/50"
                      placeholder="Enter your full name"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-gold-200 focus:border-gold-400 focus:ring-2 focus:ring-gold-100 transition-all duration-300 bg-white/50"
                      placeholder="+91 XXXXX XXXXX"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-gold-200 focus:border-gold-400 focus:ring-2 focus:ring-gold-100 transition-all duration-300 bg-white/50"
                      placeholder="your@email.com"
                    />
                  </div>

                  {/* Service Selection */}
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                      Select Service
                    </label>
                    <select
                      id="service"
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-gold-200 focus:border-gold-400 focus:ring-2 focus:ring-gold-100 transition-all duration-300 bg-white/50"
                    >
                      <option value="">Choose a service...</option>
                      <option value="kundli-reading">Kundli Reading</option>
                      <option value="kundli-matching">Kundli Matching</option>
                      <option value="career-astrology">Career Astrology</option>
                      <option value="marriage-compatibility">Marriage Compatibility</option>
                      <option value="palm-reading">Palm Reading</option>
                      <option value="face-reading">Face Reading</option>
                      <option value="numerology">Numerology</option>
                      <option value="vastu-consultation">Vastu Consultation</option>
                      <option value="online-pooja">Online Pooja</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-gold-200 focus:border-gold-400 focus:ring-2 focus:ring-gold-100 transition-all duration-300 bg-white/50 resize-none"
                      placeholder="Tell us about your query..."
                    />
                  </div>

                  {/* Submit Button */}
                  <Button
                    variant="primary"
                    size="lg"
                    className="w-full"
                    onClick={() => handleSubmit}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <span className="animate-spin">⏳</span>
                        <span>Submitting...</span>
                      </span>
                    ) : (
                      <span className="flex items-center gap-2">
                        <span>✨</span>
                        <span>Book Free Consultation</span>
                      </span>
                    )}
                  </Button>

                  <p className="text-xs text-gray-500 text-center">
                    By submitting, you agree to receive communications via phone or WhatsApp.
                  </p>
                </form>
              )}
            </GlassCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
