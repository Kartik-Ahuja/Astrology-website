import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  opacity: number;
}

export function GoldenParticles() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const particles: Particle[] = [];
    const particleCount = 50;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Initialize particles
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 3 + 1,
        speedX: (Math.random() - 0.5) * 0.5,
        speedY: (Math.random() - 0.5) * 0.5,
        opacity: Math.random() * 0.5 + 0.2,
      });
    }

    let animationId: number;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle) => {
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(212, 175, 55, ${particle.opacity})`;
        ctx.fill();

        // Add glow effect
        ctx.shadowColor = 'rgba(212, 175, 55, 0.5)';
        ctx.shadowBlur = 10;

        // Update position
        particle.x += particle.speedX;
        particle.y += particle.speedY;

        // Wrap around edges
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;
      });

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ opacity: 0.6 }}
    />
  );
}

export function ConstellationLines() {
  return (
    <svg
      className="fixed inset-0 w-full h-full pointer-events-none z-0 opacity-[0.03]"
      viewBox="0 0 1000 1000"
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <linearGradient id="goldLine" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#D4AF37" />
          <stop offset="100%" stopColor="#F7E7CE" />
        </linearGradient>
      </defs>
      {/* Constellation lines representing zodiac */}
      <g stroke="url(#goldLine)" strokeWidth="0.5" fill="none">
        <path d="M100,200 L150,180 L180,220 L220,200" />
        <path d="M300,150 L350,180 L400,160 L380,200" />
        <path d="M500,100 L540,140 L520,180 L560,200" />
        <path d="M700,150 L750,120 L800,150 L780,180" />
        <path d="M850,250 L880,200 L920,220 L900,260" />
        <path d="M150,400 L200,380 L250,420" />
        <path d="M650,350 L700,380 L750,360" />
        <path d="M50,600 L100,580 L150,620 L120,660" />
      </g>
      {/* Stars at intersections */}
      {[
        [100, 200], [150, 180], [180, 220], [220, 200],
        [300, 150], [350, 180], [400, 160], [380, 200],
        [500, 100], [540, 140], [520, 180], [560, 200],
        [700, 150], [750, 120], [800, 150], [780, 180],
        [850, 250], [880, 200], [920, 220], [900, 260],
      ].map(([x, y], i) => (
        <motion.circle
          key={i}
          cx={x}
          cy={y}
          r={2}
          fill="#D4AF37"
          initial={{ opacity: 0.3 }}
          animate={{ opacity: [0.3, 0.8, 0.3] }}
          transition={{ duration: 2 + Math.random() * 2, repeat: Infinity }}
        />
      ))}
    </svg>
  );
}

export function SacredGeometry() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden opacity-[0.02]">
      {/* Central mandala */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px]"
        animate={{ rotate: 360 }}
        transition={{ duration: 120, repeat: Infinity, ease: 'linear' }}
      >
        <svg viewBox="0 0 400 400" className="w-full h-full">
          <defs>
            <linearGradient id="mandalaGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#D4AF37" />
              <stop offset="50%" stopColor="#E8C962" />
              <stop offset="100%" stopColor="#D4AF37" />
            </linearGradient>
          </defs>
          <circle cx="200" cy="200" r="180" fill="none" stroke="url(#mandalaGrad)" strokeWidth="0.5" />
          <circle cx="200" cy="200" r="150" fill="none" stroke="url(#mandalaGrad)" strokeWidth="0.5" />
          <circle cx="200" cy="200" r="120" fill="none" stroke="url(#mandalaGrad)" strokeWidth="0.5" />
          <circle cx="200" cy="200" r="90" fill="none" stroke="url(#mandalaGrad)" strokeWidth="0.5" />
          <circle cx="200" cy="200" r="60" fill="none" stroke="url(#mandalaGrad)" strokeWidth="0.5" />
          {/* Flower of life pattern */}
          {[0, 60, 120, 180, 240, 300].map((angle, i) => (
            <circle
              key={i}
              cx={200 + 90 * Math.cos((angle * Math.PI) / 180)}
              cy={200 + 90 * Math.sin((angle * Math.PI) / 180)}
              r="60"
              fill="none"
              stroke="url(#mandalaGrad)"
              strokeWidth="0.3"
            />
          ))}
        </svg>
      </motion.div>

      {/* Corner sacred geometry */}
      <motion.div
        className="absolute -top-20 -left-20 w-[300px] h-[300px]"
        animate={{ rotate: -360 }}
        transition={{ duration: 80, repeat: Infinity, ease: 'linear' }}
      >
        <svg viewBox="0 0 200 200" className="w-full h-full">
          <polygon points="100,10 40,198 190,78 10,78 160,198" fill="none" stroke="#D4AF37" strokeWidth="0.5" />
        </svg>
      </motion.div>

      <motion.div
        className="absolute -bottom-20 -right-20 w-[300px] h-[300px]"
        animate={{ rotate: 360 }}
        transition={{ duration: 80, repeat: Infinity, ease: 'linear' }}
      >
        <svg viewBox="0 0 200 200" className="w-full h-full">
          <polygon points="100,10 40,198 190,78 10,78 160,198" fill="none" stroke="#D4AF37" strokeWidth="0.5" />
        </svg>
      </motion.div>
    </div>
  );
}

export function FloatingZodiacSymbols() {
  const symbols = ['♈', '♉', '♊', '♋', '♌', '♍', '♎', '♏', '♐', '♑', '♒', '♓'];

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {symbols.map((symbol, i) => (
        <motion.div
          key={i}
          className="absolute text-gold-400/10 text-4xl font-light"
          initial={{
            x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
            y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 1000),
          }}
          animate={{
            y: [null, -50, 50, -50],
            opacity: [0.05, 0.15, 0.05],
          }}
          transition={{
            duration: 10 + i * 2,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: i * 0.5,
          }}
          style={{
            left: `${(i * 8) + 2}%`,
            top: `${15 + (i % 5) * 18}%`,
          }}
        >
          {symbol}
        </motion.div>
      ))}
    </div>
  );
}

export function AnimatedBackground() {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden bg-gradient-to-b from-white via-cream-200 to-cream-100">
      <GoldenParticles />
      <ConstellationLines />
      <SacredGeometry />
      <FloatingZodiacSymbols />

      {/* Divine glow effect at top */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] opacity-30">
        <div className="w-full h-full bg-radial-gold rounded-full blur-3xl" />
      </div>

      {/* Subtle light rays */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[200px] opacity-10">
        <div className="absolute inset-0 bg-gradient-to-b from-gold-200/50 to-transparent" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1 h-full bg-gradient-to-b from-gold-400/30 to-transparent" />
      </div>
    </div>
  );
}
