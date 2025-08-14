'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  ChevronRight,
  PenTool,
  Layout,
  Palette,
  Type,
  ArrowRight,
  Star,
  Clock,
  Zap,
  Headphones,
  Shield,
} from 'lucide-react';
import Link from 'next/link';
import ServicesDropdown from '@/components/dropdown';
import Image from 'next/image';
import Footer from '@/app/footer';

// Animations
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: 'easeOut' },
  }),
};

const slideIn = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

export default function LogoAndBrandPage() {
  return (
    <div className="bg-neutral-900 text-white min-h-screen">
      {/* Header */}
      <header className="w-full px-4 py-6 z-[100] bg-black/[0.96]">
        <nav className="flex items-center justify-center gap-8 text-sm font-medium">
          <Link href="/projects" className="text-white hover:text-gray-300">Projects</Link>
          <ServicesDropdown />
          <Link href="/" className="text-3xl font-bold text-white">
            <Image
              priority
              src="/logo/Mysticlogo.png"
              alt="Logo"
              width={50000}
              height={50000}
              className="w-60 h-30 md:w-45 md:h-25"
            />
          </Link>
          <Link href="/about" className="text-white hover:text-gray-300">About</Link>
          <Link href="/contact" className="text-white hover:text-gray-300">Contact</Link>
        </nav>
      </header>

      <main>
        {/* Breadcrumb */}
        <section className="bg-gradient-to-r from-blue-600 to-blue-700 py-12">
          <div className="max-w-6xl mx-auto px-4">
            <motion.div
              className="flex items-center gap-2 text-blue-100 text-sm mb-4"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
            >
              <span>Home</span>
              <ChevronRight className="w-4 h-4" />
              <span>Services</span>
              <ChevronRight className="w-4 h-4" />
              <span className="text-white">Logo & Brand Identity</span>
            </motion.div>

            <motion.h1
              className="text-4xl md:text-5xl font-bold text-white mb-4"
              initial="hidden"
              animate="visible"
              variants={fadeUp}
            >
              Logo & Brand Identity Design
            </motion.h1>

            <motion.p
              className="text-xl text-blue-100 max-w-3xl"
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              transition={{ delay: 0.2 }}
            >
              Shape a memorable brand with custom logos, color palettes, typography, and visual guidelines that define who you are.
            </motion.p>
          </div>
        </section>

        {/* Overview */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={slideIn}>
              <h2 className="text-3xl font-bold mb-6 text-white">
                Make a Bold, Lasting Impression
              </h2>
              <p className="text-gray-300 mb-6 leading-relaxed text-lg">
                Our team creates timeless logos and cohesive brand systems that reflect your values, stand out in your industry, and resonate with your audience — whether you&apos;re a startup or scaling up.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-8">
                {[
                  { icon: PenTool, text: 'Custom Logo Design' },
                  { icon: Palette, text: 'Color Strategy' },
                  { icon: Type, text: 'Typography Systems' },
                  { icon: Layout, text: 'Brand Guidelines' },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    className="flex items-center gap-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <item.icon className="w-5 h-5 text-blue-400" />
                    <span className="text-gray-300">{item.text}</span>
                  </motion.div>
                ))}
              </div>

              <motion.button
                className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-lg text-white font-semibold flex items-center gap-2 group"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Get Free Quote
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </motion.div>

            {/* Visual Box */}
            <motion.div
              className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 p-8 rounded-2xl border border-white/10 backdrop-blur-sm"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-gray-800 rounded-lg p-6 mb-4">
                <div className="space-y-2">
                  <div className="h-2 bg-purple-400 rounded w-3/4"></div>
                  <div className="h-2 bg-blue-600 rounded w-1/2"></div>
                  <div className="h-2 bg-gray-500 rounded w-2/3"></div>
                </div>
              </div>
              <p className="text-center text-gray-300 text-sm">Visual Consistency Across Every Touchpoint</p>
            </motion.div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-16 bg-neutral-800">
          <div className="max-w-6xl mx-auto px-4">
            <motion.div className="text-center mb-12" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <h2 className="text-3xl font-bold mb-4 text-white">Why Choose Our Branding Services?</h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                We go beyond design to build recognizable, lasting brands that connect with people.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: Zap, title: 'Creative Impact', desc: 'Unique brand visuals that turn heads' },
                { icon: Shield, title: 'Strategic Foundation', desc: 'Design rooted in purpose, not trends' },
                { icon: Clock, title: 'Fast Turnarounds', desc: 'Efficient process, premium outcomes' },
                { icon: Headphones, title: 'Personalized Support', desc: 'We collaborate with you every step' },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  className="bg-neutral-800 rounded-lg p-6 text-center hover:bg-neutral-700 transition-colors"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  custom={i}
                >
                  <item.icon className="w-8 h-8 text-blue-400 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                  <p className="text-gray-400 text-sm">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600">
          <motion.div className="max-w-4xl mx-auto px-4 text-center" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h3 className="text-3xl font-bold mb-4 text-white">Let&apos;s Design a Brand That Sticks</h3>
            <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
              Book a free consultation and discover how a strong identity can position your business for success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button className="bg-white text-blue-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Get Free Quote
              </motion.button>
              <motion.button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors">
                View Portfolio
              </motion.button>
            </div>

            <div className="flex items-center justify-center gap-8 mt-8 pt-8 border-t border-white/20">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
                <span className="text-white ml-2">100+ Brand Identities Successfully Launched</span>
              </div>
            </div>
          </motion.div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
