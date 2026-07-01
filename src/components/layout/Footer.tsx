import { motion } from 'framer-motion';
import { FaInstagram, FaYoutube, FaWhatsapp } from "react-icons/fa";

const footerLinks = {
  services: [
    'Kundli Reading',
    'Kundli Matching',
    'Horoscope Reading',
    'Career Astrology',
    'Palm Reading',
    'Face Reading',
    'Online Pooja',
  ],
  quickLinks: [
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contact', href: '#contact' },
  ],
};

const socialLinks = [
  { name: 'Instagram', icon: FaInstagram , url: 'https://www.instagram.com/astrology_shilpa/'},
 { name: 'YouTube',
    icon: FaYoutube,
    url: 'https://youtube.com/@Astrologer_Shilpa',
  },
  { name: 'WhatsApp', icon: FaWhatsapp, url: 'https://wa.me/919769571305' },
];


export function Footer() {
  return (
    <footer className="relative bg-gradient-to-b from-cream-200 to-cream-300 pt-16 pb-8">
      {/* Decorative top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-300 to-transparent" />

      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <motion.div
              className="flex items-center gap-2 mb-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gold-400 to-gold-500 flex items-center justify-center text-white text-xl">
                ✧
              </div>
              <div>
                <h3 className="text-xl font-display font-bold text-gray-900">
                  Astrologer <span className="gold-gradient-text">Shilpa</span>
                </h3>
                <p className="text-xs text-gray-500">Best Astrologer in Jaipur</p>
              </div>
            </motion.div>
            <p className="text-gray-600 text-sm leading-relaxed mb-4">
              Trusted Vedic Astrologer with 20+ years experience. Guiding thousands through life's journey with accurate predictions and practical remedies.
            </p>
          <div className="flex gap-3">
  {socialLinks.map((social, i) => {
    const Icon = social.icon;

    return (
      <motion.a
        key={i}
        href={social.url}
        target="_blank"
        rel="noopener noreferrer"
        className="w-10 h-10 rounded-full bg-white/80 flex items-center justify-center hover:bg-gold-50 transition-colors border border-gold-200"
        whileHover={{ scale: 1.1, y: -2 }}
      >
        <Icon className="w-5 h-5 text-[#D4AF37]" />
      </motion.a>
    );
  })}
</div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-display font-semibold text-gray-900 mb-4">Services</h4>
            <ul className="space-y-2">
              {footerLinks.services.slice(0, 6).map((service) => (
                <li key={service}>
                  <a
                    href="#services"
                    className="text-gray-600 hover:text-gold-600 text-sm transition-colors"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-display font-semibold text-gray-900 mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {footerLinks.quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-600 hover:text-gold-600 text-sm transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-display font-semibold text-gray-900 mb-4">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <span>📞</span>
                <a href="tel:+919769571305" className="text-gray-600 hover:text-gold-600 transition-colors">
                  +91 97695 71305
                </a>
              </li>
              <li className="flex items-start gap-2">
                <span>📍</span>
                <span className="text-gray-600">
                  B Block 302, Manglam Garden City,<br />
                  Muhana, Jaipur, Rajasthan 302029
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span>🕐</span>
                <span className="text-gray-600">Mon - Sun: 10AM - 8PM</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-gold-200 to-transparent my-8" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-500">
          <p>
            © {new Date().getFullYear()} Astrologer Shilpa. All rights reserved.
          </p>  
          <a
  href="https://www.instagram.com/web.katha"
  target="_blank"
  rel="noopener noreferrer"
  className="gold-gradient-text font-semibold hover:scale-105 transition-all duration-300"
>Made by
  @Web.Katha
</a>
        </div>
      </div>

      {/* Floating decorative elements */}
      <div className="absolute bottom-10 left-10 text-4xl opacity-[0.03] text-gold-400">♈</div>
      <div className="absolute top-20 right-10 text-4xl opacity-[0.03] text-gold-400">♌</div>
    </footer>
  );
}
