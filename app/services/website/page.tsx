"use client"

import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Code, Smartphone, Zap, Globe, Check, ArrowRight, Star, Shield, Clock, Headphones } from 'lucide-react';
import Link from 'next/link';
import ServicesDropdown from '@/components/dropdown';
import Image from 'next/image';
import Footer from '@/app/footer';

// Simple animation variants for subpage
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { 
      delay: i * 0.1, 
      duration: 0.6,
      ease: "easeOut"
    },
  }),
};

const slideIn = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const WebsiteDevelopment = () => {
  return (
    <div className="bg-neutral-900 text-white min-h-screen">
      {/* Header - matches your original */}
     <header className=" w-full px-4 py-6 z-[100] bg-black/[0.96]">
        <nav className="flex items-center justify-center gap-8 text-sm font-medium">
          <Link href="/projects" className="text-white hover:text-gray-300">
            Projects 
          </Link>
          <ServicesDropdown />
          <Link href="/" className="text-3xl font-bold text-white">
            <Image priority
              src="/logo/Mysticlogo.png"
              alt="Logo"
              width={50000}
              height={50000}
              className="w-60 h-30 md:w-45 md:h-25"/>
          </Link>
          <Link href="/about" className="text-white hover:text-gray-300">
            About
          </Link>
          <Link href="/contact" className="text-white hover:text-gray-300">
            Contact
          </Link>
        </nav>
      </header>

      <main>
        {/* Breadcrumb Header - Simple subpage style */}
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
              <span className="text-white">Website Development</span>
            </motion.div>
            
            <motion.h1
              className="text-4xl md:text-5xl font-bold text-white mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Website Development
            </motion.h1>
            
            <motion.p
              className="text-xl text-blue-100 max-w-3xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              Professional web development services that bring your digital vision to life
            </motion.p>
          </div>
        </section>

        {/* Service Overview */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={slideIn}
            >
              <h2 className="text-3xl font-bold mb-6 text-white">
                Professional Website Development Services
              </h2>
              <p className="text-gray-300 mb-6 leading-relaxed text-lg">
                We create high-performance, responsive websites that drive results. Our team combines 
                technical expertise with creative design to deliver websites that not only look great 
                but perform exceptionally.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                {[
                  { icon: Code, text: "Custom Development" },
                  { icon: Smartphone, text: "Mobile Responsive" },
                  { icon: Zap, text: "Fast Performance" },
                  { icon: Globe, text: "SEO Optimized" }
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
                className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-lg text-white font-semibold transition-all duration-300 flex items-center gap-2 group"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Get Free Quote
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl p-8 backdrop-blur-sm border border-white/10">
                <div className="bg-gray-800 rounded-lg p-6 mb-4">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <div className="space-y-2">
                    <div className="h-2 bg-blue-400 rounded w-3/4"></div>
                    <div className="h-2 bg-gray-600 rounded w-1/2"></div>
                    <div className="h-2 bg-purple-400 rounded w-2/3"></div>
                  </div>
                </div>
                <p className="text-center text-gray-300 text-sm">Clean, Modern Web Development</p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Pricing Packages - Simplified */}
        <section className="py-16 bg-neutral-800">
          <div className="max-w-6xl mx-auto px-4">
            <motion.div
              className="text-center mb-12"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              <h2 className="text-3xl font-bold mb-4 text-white">Our Development Packages</h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Choose the perfect package for your project needs and budget
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: 'STARTUP WEBSITE',
                  price: '₹8,000',
                  usdPrice: '$100',
                  desc: 'Perfect for portfolios and small businesses',
                  features: [
                    'Up to 5 Pages',
                    'Responsive Design',
                    'Basic SEO Setup',
                    'Contact Forms',
                    '1 Month Support'
                  ],
                  color: 'blue'
                },
                {
                  title: 'BUSINESS WEBSITE',
                  price: '₹20,000',
                  usdPrice: '$250',
                  desc: 'Ideal for growing businesses',
                  features: [
                    'Up to 10 Pages',
                    'Advanced Design',
                    'SEO Optimization',
                    'CMS Integration',
                    'Analytics Setup',
                    '3 Months Support'
                  ],
                  color: 'purple',
                  popular: true
                },
                {
                  title: 'ECOMMERCE WEBSITE',
                  price: '₹30,000',
                  usdPrice: '$400',
                  desc: 'Complete online store solution',
                  features: [
                    'Unlimited Products',
                    'Payment Gateway',
                    'Inventory Management',
                    'Order Tracking',
                    'Customer Dashboard',
                    '6 Months Support'
                  ],
                  color: 'green'
                }
              ].map((pkg, i) => (
                <motion.div
                  key={i}
                  className={`relative bg-neutral-700 rounded-xl p-6 hover:bg-neutral-600 transition-all duration-300 border ${
                    pkg.popular ? 'border-purple-500 ring-1 ring-purple-500/50' : 'border-gray-600 hover:border-gray-500'
                  }`}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  custom={i}
                  whileHover={{ y: -5 }}
                >
                  {pkg.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-purple-500 text-white px-4 py-1 rounded-full text-xs font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}

                  <div className="text-center mb-6">
                    <h3 className="text-xl font-bold text-white mb-2">{pkg.title}</h3>
                    <div className="flex items-baseline justify-center gap-2 mb-2">
                      <span className="text-3xl font-bold text-white">{pkg.price}</span>
                      <span className="text-gray-400 text-sm">({pkg.usdPrice})</span>
                    </div>
                    <p className="text-gray-400 text-sm">{pkg.desc}</p>
                  </div>

                  <ul className="space-y-3 mb-6">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-3">
                        <Check className="w-4 h-4 text-green-400 flex-shrink-0" />
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 ${
                    pkg.color === 'blue' ? 'bg-blue-600 hover:bg-blue-700' :
                    pkg.color === 'purple' ? 'bg-purple-600 hover:bg-purple-700' :
                    'bg-green-600 hover:bg-green-700'
                  } text-white`}>
                    Choose Plan
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Features & Benefits */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-4">
            <motion.div
              className="text-center mb-12"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              <h2 className="text-3xl font-bold mb-4 text-white">Why Choose Our Development Services?</h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                We deliver quality websites that help your business grow online
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: Shield,
                  title: "Secure & Reliable",
                  desc: "Built with security best practices and reliable hosting"
                },
                {
                  icon: Zap,
                  title: "Lightning Fast",
                  desc: "Optimized for speed and performance across all devices"
                },
                {
                  icon: Headphones,
                  title: "Ongoing Support",
                  desc: "Dedicated support team for maintenance and updates"
                },
                {
                  icon: Clock,
                  title: "Timely Delivery",
                  desc: "Projects completed on time without compromising quality"
                }
              ].map((feature, i) => (
                <motion.div
                  key={i}
                  className="bg-neutral-800 rounded-lg p-6 text-center hover:bg-neutral-700 transition-colors"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  custom={i}
                >
                  <feature.icon className="w-8 h-8 text-blue-400 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                  <p className="text-gray-400 text-sm">{feature.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section - Simplified */}
        <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600">
          <motion.div
            className="max-w-4xl mx-auto px-4 text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <h3 className="text-3xl font-bold mb-4 text-white">
              Ready to Start Your Project?
            </h3>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Get a free consultation and quote for your website development project
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Free Quote
              </motion.button>
              <motion.button
                className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Portfolio
              </motion.button>
            </div>

            {/* Trust indicators */}
            <div className="flex items-center justify-center gap-8 mt-8 pt-8 border-t border-white/20">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
                <span className="text-white ml-2">500+ Happy Clients</span>
              </div>
            </div>
          </motion.div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default WebsiteDevelopment;