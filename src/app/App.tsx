import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { ImageWithFallback } from './components/figma/ImageWithFallback';
import chipImage from 'figma:asset/cc6da6f9629a7aa8e3deb01c6060b815ada9d34d.png';

export default function App() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Parallax effects for smooth scrolling
  const heroY = useTransform(scrollYProgress, [0, 0.25], [0, -150]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const chipScale = useTransform(scrollYProgress, [0.15, 0.35], [0.85, 1]);
  const chipOpacity = useTransform(scrollYProgress, [0.15, 0.3], [0, 1]);
  const hologramY = useTransform(scrollYProgress, [0.4, 0.7], [100, 0]);
  const hologramOpacity = useTransform(scrollYProgress, [0.4, 0.55], [0, 1]);

  return (
    <div ref={containerRef} className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* 1. Hero Section */}
      <motion.section
        style={{ y: heroY, opacity: heroOpacity }}
        className="relative h-screen flex items-center justify-center overflow-hidden"
      >
        {/* Background Image with Layered Gradients */}
        <div className="absolute inset-0 z-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1621797187495-8d5c3e45f595?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob2xvZ3JhbSUyMGZ1dHVyaXN0aWMlMjBoYW5kfGVufDF8fHx8MTc2NzcyNTM2Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Human hand interacting with holographic Earth"
            className="w-full h-full object-cover"
          />
          {/* Multi-layer gradient for depth and cinematic look */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-black/30"></div>
        </div>

        {/* Volumetric Lighting Effects */}
        <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden">
          <motion.div
            animate={{
              opacity: [0.15, 0.25, 0.15],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-cyan-400/10 rounded-full blur-[180px]"
          ></motion.div>
          <motion.div
            animate={{
              opacity: [0.1, 0.2, 0.1],
              scale: [1, 1.15, 1],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/15 rounded-full blur-[140px]"
          ></motion.div>
        </div>

        {/* Hero Typography */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-20 text-center px-8 max-w-6xl"
        >
          <motion.h1
            className="text-7xl md:text-9xl lg:text-[10rem] tracking-tight mb-8"
            style={{ fontWeight: 100, letterSpacing: '-0.04em' }}
          >
            HOLO-GATEWAY
          </motion.h1>
          <motion.p
            className="text-4xl md:text-6xl lg:text-7xl tracking-tight text-white/95"
            style={{ fontWeight: 100, letterSpacing: '-0.025em' }}
          >
            Touch the Light.
          </motion.p>
        </motion.div>

        {/* Elegant Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5, duration: 1.5 }}
          className="absolute bottom-16 left-1/2 -translate-x-1/2 z-20"
        >
          <motion.div
            animate={{ y: [0, 14, 0] }}
            transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
            className="w-7 h-12 border border-white/20 rounded-full flex items-start justify-center p-2"
          >
            <motion.div className="w-1.5 h-2.5 bg-white/50 rounded-full"></motion.div>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* 2. Core Technology Showcase - HOLO-Chip 1 */}
      <motion.section
        style={{ scale: chipScale, opacity: chipOpacity }}
        className="relative min-h-screen flex items-center justify-center py-40 px-8"
      >
        {/* Ambient Background Glow */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            animate={{
              opacity: [0.03, 0.08, 0.03],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] bg-cyan-500/5 rounded-full blur-[250px]"
          ></motion.div>
        </div>

        <div className="relative z-10 max-w-7xl w-full">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.2 }}
            viewport={{ once: true, amount: 0.3 }}
            className="grid lg:grid-cols-2 gap-20 items-center"
          >
            {/* HOLO-Chip Image */}
            <motion.div
              className="relative order-2 lg:order-1"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="relative rounded-[2rem] overflow-hidden bg-gradient-to-br from-zinc-900 to-black p-1">
                <div className="rounded-[1.9rem] overflow-hidden bg-black">
                  <div className="relative w-full overflow-hidden" style={{ paddingBottom: '95%' }}>
                    <ImageWithFallback
                      src={chipImage}
                      alt="HOLO-Chip 1 HPU - Silicon Nitride Core"
                      className="absolute inset-0 w-full h-full object-cover"
                      style={{ objectPosition: 'center 45%', transform: 'scale(1.15)' }}
                    />
                  </div>
                  {/* Pulsing Cyan Vein Overlay */}
                  <motion.div
                    animate={{
                      opacity: [0.2, 0.5, 0.2],
                    }}
                    transition={{
                      duration: 3.5,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    className="absolute inset-0 bg-gradient-to-br from-cyan-500/15 via-transparent to-transparent"
                  ></motion.div>
                  
                  {/* Central Pulsing Light Vein */}
                  <motion.div
                    animate={{
                      opacity: [0.4, 0.9, 0.4],
                      scaleY: [1, 1.08, 1],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-0.5 h-4/5 bg-gradient-to-b from-transparent via-cyan-400 to-transparent blur-[2px]"
                  ></motion.div>
                </div>
              </div>

              {/* Floating Aura Effect */}
              <motion.div
                animate={{
                  opacity: [0.15, 0.35, 0.15],
                  scale: [1, 1.15, 1],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute inset-0 -z-10 bg-cyan-400/15 rounded-[2rem] blur-[100px]"
              ></motion.div>
            </motion.div>

            {/* Chip Description */}
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true, amount: 0.5 }}
              className="space-y-10 order-1 lg:order-2"
            >
              <div className="space-y-6">
                <motion.p
                  className="text-cyan-400/90 text-xs md:text-sm tracking-[0.35em] uppercase"
                  style={{ fontWeight: 400 }}
                >
                  Silicon Nitride Core
                </motion.p>
                <h2
                  className="text-6xl md:text-8xl lg:text-[7rem] tracking-tight leading-none"
                  style={{ fontWeight: 100, letterSpacing: '-0.04em' }}
                >
                  HOLO-Chip 1
                </h2>
                <p
                  className="text-2xl md:text-3xl text-white/50 tracking-tight"
                  style={{ fontWeight: 100, letterSpacing: '-0.01em' }}
                >
                  HPU
                </p>
              </div>

              <div className="space-y-6">
                <p
                  className="text-3xl md:text-4xl lg:text-5xl tracking-tight text-white/90 leading-tight"
                  style={{ fontWeight: 100, letterSpacing: '-0.025em' }}
                >
                  Unleash the Unseen.
                </p>
              </div>

              <div className="space-y-5 text-white/60 max-w-lg">
                <p className="text-lg md:text-xl leading-relaxed" style={{ fontWeight: 300 }}>
                  A monolithic artifact of optical precision. Where ceramic refinement meets quantum processing.
                </p>
                <p className="text-lg md:text-xl leading-relaxed" style={{ fontWeight: 300 }}>
                  One luminous vein. Infinite computational horizons.
                </p>
              </div>

              {/* Glassmorphic Specification Card */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.4 }}
                className="relative p-8 rounded-3xl backdrop-blur-2xl bg-white/[0.03] border border-white/10 hover:border-cyan-500/20 transition-all duration-500"
              >
                <div className="grid grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <p className="text-cyan-400/90 text-4xl" style={{ fontWeight: 200 }}>∞</p>
                    <p className="text-xs text-white/40 uppercase tracking-widest" style={{ fontWeight: 400 }}>
                      Optical Bandwidth
                    </p>
                  </div>
                  <div className="space-y-2">
                    <p className="text-cyan-400/90 text-4xl" style={{ fontWeight: 200 }}>0.1nm</p>
                    <p className="text-xs text-white/40 uppercase tracking-widest" style={{ fontWeight: 400 }}>
                      Light Precision
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* 3. Hologram Experience Section */}
      <motion.section
        style={{ y: hologramY, opacity: hologramOpacity }}
        className="relative min-h-screen flex items-center justify-center py-40 px-8"
      >
        {/* Soft Deep Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-950 to-black"></div>
        
        {/* Volumetric Ambient Light */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <motion.div
            animate={{
              opacity: [0.05, 0.12, 0.05],
              x: [-100, 100, -100],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute top-1/4 left-1/3 w-[800px] h-[800px] bg-blue-500/10 rounded-full blur-[200px]"
          ></motion.div>
          <motion.div
            animate={{
              opacity: [0.04, 0.1, 0.04],
              x: [100, -100, 100],
            }}
            transition={{
              duration: 18,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2
            }}
            className="absolute top-2/3 right-1/3 w-[700px] h-[700px] bg-cyan-500/8 rounded-full blur-[180px]"
          ></motion.div>
        </div>

        <div className="relative z-10 max-w-7xl w-full space-y-20">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true, amount: 0.3 }}
            className="text-center space-y-8 max-w-4xl mx-auto"
          >
            <motion.p
              className="text-cyan-400/80 text-xs md:text-sm tracking-[0.35em] uppercase"
              style={{ fontWeight: 400 }}
            >
              Volumetric Display Technology
            </motion.p>
            <h2
              className="text-5xl md:text-7xl lg:text-8xl tracking-tight leading-tight"
              style={{ fontWeight: 100, letterSpacing: '-0.035em' }}
            >
              Dimensions Redefined.
              <br />
              <span className="text-white/70">Interact Beyond Limits.</span>
            </h2>
          </motion.div>

          {/* Hologram Application Showcase Grid */}
          <div className="grid md:grid-cols-3 gap-8 lg:gap-10">
            {/* Application 1: Design & Engineering */}
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true, amount: 0.2 }}
              className="group relative"
            >
              <motion.div
                whileHover={{ scale: 1.03, y: -10 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="relative aspect-[3/4] rounded-3xl overflow-hidden backdrop-blur-xl bg-gradient-to-br from-white/[0.05] to-white/[0.02] border border-white/10 p-6"
              >
                {/* Image Container */}
                <div className="relative h-3/5 rounded-2xl overflow-hidden mb-6">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1752253604157-65fb42c30816?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob2xvZ3JhcGhpYyUyMGludGVyZmFjZSUyMGZ1dHVyaXN0aWN8ZW58MXx8fHwxNzY3NzI3MTY2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Holographic design and engineering interface"
                    className="w-full h-full object-cover opacity-70 group-hover:opacity-90 transition-opacity duration-700"
                  />
                  <motion.div
                    animate={{
                      opacity: [0.2, 0.4, 0.2],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    className="absolute inset-0 bg-gradient-to-t from-cyan-500/20 to-transparent"
                  ></motion.div>
                  
                  {/* Floating light particles effect */}
                  <motion.div
                    animate={{
                      y: [0, -20, 0],
                      opacity: [0.3, 0.6, 0.3],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    className="absolute bottom-4 left-1/2 -translate-x-1/2 w-16 h-16 bg-cyan-400/30 rounded-full blur-xl"
                  ></motion.div>
                </div>

                {/* Description */}
                <div className="space-y-3">
                  <h3 className="text-2xl tracking-tight text-white" style={{ fontWeight: 200 }}>
                    Design & Engineering
                  </h3>
                  <p className="text-sm text-white/50 leading-relaxed" style={{ fontWeight: 300 }}>
                    Manipulate CAD models in real-time. Rotate, scale, and refine complex structures with natural gestures.
                  </p>
                </div>

                {/* Glow effect on hover */}
                <div className="absolute inset-0 -z-10 rounded-3xl bg-gradient-to-br from-cyan-500/0 to-blue-500/0 group-hover:from-cyan-500/10 group-hover:to-blue-500/5 transition-all duration-700"></div>
              </motion.div>
            </motion.div>

            {/* Application 2: Medical Imaging */}
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true, amount: 0.2 }}
              className="group relative"
            >
              <motion.div
                whileHover={{ scale: 1.03, y: -10 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="relative aspect-[3/4] rounded-3xl overflow-hidden backdrop-blur-xl bg-gradient-to-br from-white/[0.05] to-white/[0.02] border border-white/10 p-6"
              >
                {/* Image Container */}
                <div className="relative h-3/5 rounded-2xl overflow-hidden mb-6">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1612888077748-00e3a1bd7aad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHwzRCUyMG1lZGljYWwlMjBzY2FufGVufDF8fHx8MTc2NzcyNzE2Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="3D medical holographic visualization"
                    className="w-full h-full object-cover opacity-70 group-hover:opacity-90 transition-opacity duration-700"
                  />
                  <motion.div
                    animate={{
                      opacity: [0.2, 0.4, 0.2],
                    }}
                    transition={{
                      duration: 4.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 0.5
                    }}
                    className="absolute inset-0 bg-gradient-to-t from-blue-500/20 to-transparent"
                  ></motion.div>

                  {/* Pulsing light core */}
                  <motion.div
                    animate={{
                      scale: [1, 1.3, 1],
                      opacity: [0.4, 0.7, 0.4],
                    }}
                    transition={{
                      duration: 3.5,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-blue-400/30 rounded-full blur-2xl"
                  ></motion.div>
                </div>

                {/* Description */}
                <div className="space-y-3">
                  <h3 className="text-2xl tracking-tight text-white" style={{ fontWeight: 200 }}>
                    Medical Imaging
                  </h3>
                  <p className="text-sm text-white/50 leading-relaxed" style={{ fontWeight: 300 }}>
                    Explore CT and MRI scans in volumetric 3D. Examine anatomy from every angle with unprecedented detail.
                  </p>
                </div>

                {/* Glow effect on hover */}
                <div className="absolute inset-0 -z-10 rounded-3xl bg-gradient-to-br from-blue-500/0 to-cyan-500/0 group-hover:from-blue-500/10 group-hover:to-cyan-500/5 transition-all duration-700"></div>
              </motion.div>
            </motion.div>

            {/* Application 3: Data Analytics */}
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true, amount: 0.2 }}
              className="group relative"
            >
              <motion.div
                whileHover={{ scale: 1.03, y: -10 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="relative aspect-[3/4] rounded-3xl overflow-hidden backdrop-blur-xl bg-gradient-to-br from-white/[0.05] to-white/[0.02] border border-white/10 p-6"
              >
                {/* Image Container */}
                <div className="relative h-3/5 rounded-2xl overflow-hidden mb-6">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1765046255479-669cf07a0230?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwZGF0YSUyMHZpc3VhbGl6YXRpb258ZW58MXx8fHwxNzY3NzE0OTk5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Holographic data analytics visualization"
                    className="w-full h-full object-cover opacity-70 group-hover:opacity-90 transition-opacity duration-700"
                  />
                  <motion.div
                    animate={{
                      opacity: [0.2, 0.4, 0.2],
                    }}
                    transition={{
                      duration: 5,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 1
                    }}
                    className="absolute inset-0 bg-gradient-to-t from-cyan-500/20 via-blue-500/10 to-transparent"
                  ></motion.div>

                  {/* Grid light effect */}
                  <motion.div
                    animate={{
                      opacity: [0.2, 0.5, 0.2],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 0.3
                    }}
                    className="absolute inset-0 bg-[linear-gradient(to_right,rgba(6,182,212,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(6,182,212,0.1)_1px,transparent_1px)] bg-[size:40px_40px]"
                  ></motion.div>
                </div>

                {/* Description */}
                <div className="space-y-3">
                  <h3 className="text-2xl tracking-tight text-white" style={{ fontWeight: 200 }}>
                    Data Analytics
                  </h3>
                  <p className="text-sm text-white/50 leading-relaxed" style={{ fontWeight: 300 }}>
                    Transform complex datasets into interactive 3D visualizations. Discover patterns in multidimensional space.
                  </p>
                </div>

                {/* Glow effect on hover */}
                <div className="absolute inset-0 -z-10 rounded-3xl bg-gradient-to-br from-cyan-500/0 to-blue-500/0 group-hover:from-cyan-500/10 group-hover:to-blue-500/5 transition-all duration-700"></div>
              </motion.div>
            </motion.div>

            {/* Application 4: Scientific Research */}
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true, amount: 0.2 }}
              className="group relative"
            >
              <motion.div
                whileHover={{ scale: 1.03, y: -10 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="relative aspect-[3/4] rounded-3xl overflow-hidden backdrop-blur-xl bg-gradient-to-br from-white/[0.05] to-white/[0.02] border border-white/10 p-6"
              >
                {/* Image Container */}
                <div className="relative h-3/5 rounded-2xl overflow-hidden mb-6">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1670367248901-752d21705db7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHwzRCUyMG1vbGVjdWxlJTIwc3RydWN0dXJlfGVufDF8fHx8MTc2NzcyNzE2OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Molecular structure holographic display"
                    className="w-full h-full object-cover opacity-70 group-hover:opacity-90 transition-opacity duration-700"
                  />
                  <motion.div
                    animate={{
                      opacity: [0.2, 0.4, 0.2],
                    }}
                    transition={{
                      duration: 4.2,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 0.7
                    }}
                    className="absolute inset-0 bg-gradient-to-t from-purple-500/20 to-transparent"
                  ></motion.div>

                  {/* Orbiting particles effect */}
                  <motion.div
                    animate={{
                      rotate: [0, 360],
                      opacity: [0.4, 0.7, 0.4],
                    }}
                    transition={{
                      rotate: { duration: 8, repeat: Infinity, ease: "linear" },
                      opacity: { duration: 3, repeat: Infinity, ease: "easeInOut" }
                    }}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 border border-purple-400/30 rounded-full"
                  ></motion.div>
                </div>

                {/* Description */}
                <div className="space-y-3">
                  <h3 className="text-2xl tracking-tight text-white" style={{ fontWeight: 200 }}>
                    Scientific Research
                  </h3>
                  <p className="text-sm text-white/50 leading-relaxed" style={{ fontWeight: 300 }}>
                    Visualize molecular structures and quantum phenomena. Manipulate atoms and bonds in real-time simulation.
                  </p>
                </div>

                {/* Glow effect on hover */}
                <div className="absolute inset-0 -z-10 rounded-3xl bg-gradient-to-br from-purple-500/0 to-blue-500/0 group-hover:from-purple-500/10 group-hover:to-blue-500/5 transition-all duration-700"></div>
              </motion.div>
            </motion.div>

            {/* Application 5: Education & Training */}
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true, amount: 0.2 }}
              className="group relative"
            >
              <motion.div
                whileHover={{ scale: 1.03, y: -10 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="relative aspect-[3/4] rounded-3xl overflow-hidden backdrop-blur-xl bg-gradient-to-br from-white/[0.05] to-white/[0.02] border border-white/10 p-6"
              >
                {/* Image Container */}
                <div className="relative h-3/5 rounded-2xl overflow-hidden mb-6">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1756908992154-c8a89f5e517f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmdXR1cmlzdGljJTIwaG9sb2dyYW0lMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc2NzY1Mzc5Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Holographic education and training interface"
                    className="w-full h-full object-cover opacity-70 group-hover:opacity-90 transition-opacity duration-700"
                  />
                  <motion.div
                    animate={{
                      opacity: [0.2, 0.4, 0.2],
                    }}
                    transition={{
                      duration: 4.7,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 0.4
                    }}
                    className="absolute inset-0 bg-gradient-to-t from-blue-500/20 via-cyan-500/10 to-transparent"
                  ></motion.div>

                  {/* Ripple effect */}
                  <motion.div
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [0.5, 0, 0.5],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeOut"
                    }}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 border-2 border-blue-400/40 rounded-full"
                  ></motion.div>
                </div>

                {/* Description */}
                <div className="space-y-3">
                  <h3 className="text-2xl tracking-tight text-white" style={{ fontWeight: 200 }}>
                    Education & Training
                  </h3>
                  <p className="text-sm text-white/50 leading-relaxed" style={{ fontWeight: 300 }}>
                    Interactive learning experiences that transcend traditional boundaries. Step inside knowledge itself.
                  </p>
                </div>

                {/* Glow effect on hover */}
                <div className="absolute inset-0 -z-10 rounded-3xl bg-gradient-to-br from-blue-500/0 to-cyan-500/0 group-hover:from-blue-500/10 group-hover:to-cyan-500/5 transition-all duration-700"></div>
              </motion.div>
            </motion.div>

            {/* Application 6: Collaboration */}
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true, amount: 0.2 }}
              className="group relative"
            >
              <motion.div
                whileHover={{ scale: 1.03, y: -10 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="relative aspect-[3/4] rounded-3xl overflow-hidden backdrop-blur-xl bg-gradient-to-br from-white/[0.05] to-white/[0.02] border border-white/10 p-6"
              >
                {/* Image Container */}
                <div className="relative h-3/5 rounded-2xl overflow-hidden mb-6">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1525459715390-11a3e77bc887?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aXJ0dWFsJTIwcmVhbGl0eSUyMGludGVyZmFjZXxlbnwxfHx8fDE3Njc3MjcxNjh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Holographic collaboration interface"
                    className="w-full h-full object-cover opacity-70 group-hover:opacity-90 transition-opacity duration-700"
                  />
                  <motion.div
                    animate={{
                      opacity: [0.2, 0.4, 0.2],
                    }}
                    transition={{
                      duration: 5.2,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 0.9
                    }}
                    className="absolute inset-0 bg-gradient-to-t from-cyan-500/20 to-transparent"
                  ></motion.div>

                  {/* Multiple pulsing points */}
                  <motion.div
                    animate={{
                      opacity: [0.3, 0.7, 0.3],
                      scale: [1, 1.2, 1],
                    }}
                    transition={{
                      duration: 2.5,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    className="absolute top-1/3 left-1/3 w-8 h-8 bg-cyan-400/40 rounded-full blur-md"
                  ></motion.div>
                  <motion.div
                    animate={{
                      opacity: [0.3, 0.7, 0.3],
                      scale: [1, 1.2, 1],
                    }}
                    transition={{
                      duration: 2.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 0.8
                    }}
                    className="absolute bottom-1/3 right-1/3 w-8 h-8 bg-blue-400/40 rounded-full blur-md"
                  ></motion.div>
                </div>

                {/* Description */}
                <div className="space-y-3">
                  <h3 className="text-2xl tracking-tight text-white" style={{ fontWeight: 200 }}>
                    Collaboration
                  </h3>
                  <p className="text-sm text-white/50 leading-relaxed" style={{ fontWeight: 300 }}>
                    Share holographic workspaces across distances. Collaborate as if you're in the same room, anywhere.
                  </p>
                </div>

                {/* Glow effect on hover */}
                <div className="absolute inset-0 -z-10 rounded-3xl bg-gradient-to-br from-cyan-500/0 to-blue-500/0 group-hover:from-cyan-500/10 group-hover:to-blue-500/5 transition-all duration-700"></div>
              </motion.div>
            </motion.div>
          </div>

          {/* Bottom Statement */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center pt-16 space-y-8"
          >
            <p
              className="text-2xl md:text-4xl lg:text-5xl tracking-tight text-white/70 leading-relaxed max-w-4xl mx-auto"
              style={{ fontWeight: 100, letterSpacing: '-0.025em' }}
            >
              Not projected onto surfaces.
              <br />
              <span className="text-white/90">Materialized in space.</span>
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* 4. Minimalist Footer */}
      <footer className="relative py-20 px-8">
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black to-transparent"></div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          viewport={{ once: true }}
          className="relative max-w-7xl mx-auto text-center"
        >
          <p
            className="text-sm text-white/30 tracking-wide"
            style={{ fontWeight: 300 }}
          >
            © 2024 HOLO-GATEWAY. All Rights Reserved.
          </p>
        </motion.div>
      </footer>
    </div>
  );
}