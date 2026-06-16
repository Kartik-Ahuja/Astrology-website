import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  onClick?: () => void;
  href?: string;
  icon?: ReactNode;
}

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  onClick,
  href,
  icon,
}: ButtonProps) {
  const baseStyles = 'relative inline-flex items-center justify-center font-semibold rounded-full overflow-hidden transition-all duration-300 focus:outline-none focus-gold';

  const variants = {
    primary: 'btn-gold text-white luxury-shadow hover:scale-105',
    secondary: 'bg-white text-gold-600 border-2 border-gold-400 hover:bg-gold-50 hover:border-gold-500 hover:scale-105',
    outline: 'btn-outline-gold hover:scale-105',
    ghost: 'text-gold-600 hover:bg-gold-50 hover:text-gold-700',
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm gap-1.5',
    md: 'px-6 py-3 text-base gap-2',
    lg: 'px-8 py-4 text-lg gap-2.5',
  };

  const content = (
    <>
      {variant === 'primary' && (
        <span className="absolute inset-0 shimmer-effect opacity-50" />
      )}
      {icon && <span className="relative z-10">{icon}</span>}
      <span className="relative z-10">{children}</span>
    </>
  );

  if (href) {
    return (
      <motion.a
        href={href}
        className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
        whileHover={{ y: -2 }}
        whileTap={{ scale: 0.98 }}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.98 }}
    >
      {content}
    </motion.button>
  );
}

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export function GlassCard({ children, className = '', hover = true }: GlassCardProps) {
  return (
    <motion.div
      className={`glass-card rounded-2xl ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={hover ? { y: -5, transition: { duration: 0.2 } } : undefined}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
}

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
}

export function SectionHeading({ title, subtitle, centered = true }: SectionHeadingProps) {
  return (
    <motion.div
      className={`mb-12 ${centered ? 'text-center' : ''}`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-4xl md:text-5xl font-display font-bold gold-gradient-text mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}

interface CounterProps {
  value: number;
  suffix?: string;
  label: string;
}

export function Counter({ value, suffix = '', label }: CounterProps) {
  return (
    <motion.div
      className="text-center"
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-center justify-center gap-1">
        <motion.span
          className="text-4xl md:text-5xl font-display font-bold text-gold-500"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          {value}
        </motion.span>
        <motion.span
          className="text-3xl md:text-4xl font-display font-bold text-gold-400"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          {suffix}
        </motion.span>
      </div>
      <p className="text-gray-600 mt-2 font-medium">{label}</p>
    </motion.div>
  );
}

interface GoldDividerProps {
  className?: string;
}

export function GoldDivider({ className = '' }: GoldDividerProps) {
  return (
    <div className={`flex items-center justify-center gap-4 ${className}`}>
      <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gold-300 to-transparent" />
      <motion.div
        className="text-gold-400 text-2xl"
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
      >
        ✦
      </motion.div>
      <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gold-300 to-transparent" />
    </div>
  );
}

interface BadgeProps {
  children: ReactNode;
  variant?: 'gold' | 'outline';
}

export function Badge({ children, variant = 'gold' }: BadgeProps) {
  const variants = {
    gold: 'bg-gradient-to-r from-gold-400 to-gold-500 text-white',
    outline: 'border border-gold-400 text-gold-600',
  };

  return (
    <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider ${variants[variant]}`}>
      {children}
    </span>
  );
}

export function ScrollProgress() {
  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-gold-400/20 z-50"
    >
      <motion.div
        className="h-full bg-gradient-to-r from-gold-400 via-gold-300 to-gold-400"
        style={{ scaleX: 0 }}
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 0 }}
      />
    </motion.div>
  );
}

export function StarRating({ rating = 5 }: { rating?: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: rating }).map((_, i) => (
        <motion.span
          key={i}
          className="text-gold-400"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: i * 0.1 }}
        >
          ★
        </motion.span>
      ))}
    </div>
  );
}
