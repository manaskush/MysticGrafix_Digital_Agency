"use client"

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Code, Smartphone, Search, ShoppingCart, Palette, BarChart, 
  ChevronRight, ArrowRight, Star, Trophy, Users, Clock, Shield, 
  Zap, Globe, CheckCircle, Play, Award, TrendingUp, Heart,
  Monitor, Megaphone, PenTool, Camera, Target, Lightbulb
} from 'lucide-react';
import Link from 'next/link';
import ServicesDropdown from '@/components/dropdown';
import Image from 'next/image';
import Footer from '../footer';

// Animation variants
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { 
      delay: i * 0.1, 
      duration: 0.8,
      ease: [0.25, 0.4, 0.25, 1]
    },
  }),
};

const slideIn = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }
  }
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }
  }
};

const stagger = {
  visible: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const ServicesPage = () => {
  const [activeService, setActiveService] = useState(0);

  const services = [
    {
      id: 'design',
      icon: Palette,
      title: 'Design',
      subtitle: 'Creative Visual Solutions',
      shortDesc: 'Stunning designs that capture attention and communicate your brand story',
      longDesc: 'Transform your brand with our comprehensive design services. From concept to execution, we create visually striking designs that resonate with your audience and elevate your brand presence across all platforms.',
      features: ['Brand Identity', 'Print Design', 'Digital Graphics', 'UI/UX Design'],
      pricing: { starter: '₹5,000', business: '₹15,000', enterprise: '₹35,000' },
      gradient: 'from-pink-500 to-rose-500',
      bgGradient: 'from-pink-500/10 to-rose-500/10',
      stats: { designs: '1000+', brands: '300+', satisfaction: '99%' }
    },
    {
      id: 'web-development',
      icon: Code,
      title: 'Web Development',
      subtitle: 'Custom Web Solutions',
      shortDesc: 'High-performance websites that drive results and engage users',
      longDesc: 'Create your digital presence with our cutting-edge web development services. We build responsive, fast-loading websites that not only look amazing but also deliver exceptional user experiences and drive business growth.',
      features: ['Custom Development', 'Responsive Design', 'Performance Optimization', 'SEO Ready'],
      pricing: { starter: '₹8,000', business: '₹20,000', enterprise: '₹50,000' },
      gradient: 'from-blue-500 to-cyan-500',
      bgGradient: 'from-blue-500/10 to-cyan-500/10',
      stats: { projects: '500+', satisfaction: '98%', speed: '3s avg' }
    },
    {
      id: '3d-motion',
      icon: Monitor,
      title: '3D & Motion Graphics',
      subtitle: 'Dynamic Visual Experiences',
      shortDesc: 'Captivating 3D animations and motion graphics that bring ideas to life',
      longDesc: 'Elevate your content with our professional 3D and motion graphics services. From product visualizations to animated explainers, we create stunning visual experiences that engage audiences and communicate complex ideas effectively.',
      features: ['3D Modeling', 'Motion Graphics', 'Visual Effects', 'Animation'],
      pricing: { starter: '₹10,000', business: '₹25,000', enterprise: '₹60,000' },
      gradient: 'from-purple-500 to-indigo-500',
      bgGradient: 'from-purple-500/10 to-indigo-500/10',
      stats: { animations: '300+', views: '5M+', awards: '15+' }
    },
    {
      id: 'social-media-marketing',
      icon: Megaphone,
      title: 'Social Media Marketing',
      subtitle: 'Strategic Social Growth',
      shortDesc: 'Data-driven social media strategies that build communities and drive engagement',
      longDesc: 'Amplify your brand voice with our comprehensive social media marketing services. We create engaging content, build loyal communities, and drive meaningful interactions that translate into business growth.',
      features: ['Content Strategy', 'Community Management', 'Paid Advertising', 'Analytics & Reporting'],
      pricing: { starter: '₹15,000', business: '₹30,000', enterprise: '₹75,000' },
      gradient: 'from-green-500 to-emerald-500',
      bgGradient: 'from-green-500/10 to-emerald-500/10',
      stats: { followers: '1M+', engagement: '8.5%', campaigns: '400+' }
    },
    {
      id: 'logo-design',
      icon: PenTool,
      title: 'Logo Design',
      subtitle: 'Memorable Brand Marks',
      shortDesc: 'Iconic logos that represent your brand identity and values perfectly',
      longDesc: 'Create a lasting first impression with our professional logo design services. We craft unique, memorable logos that capture your brand essence and work seamlessly across all applications and platforms.',
      features: ['Custom Logo Design', 'Brand Guidelines', 'Multiple Variations', 'File Formats'],
      pricing: { starter: '₹3,000', business: '₹8,000', enterprise: '₹20,000' },
      gradient: 'from-yellow-500 to-orange-500',
      bgGradient: 'from-yellow-500/10 to-orange-500/10',
      stats: { logos: '800+', revisions: '3 free', delivery: '3-5 days' }
    },
    {
      id: 'brand-shoots',
      icon: Camera,
      title: 'Brand Shoots',
      subtitle: 'Professional Photography',
      shortDesc: 'High-quality brand photography that showcases your products and services',
      longDesc: 'Capture your brand story with our professional photography services. From product shots to lifestyle photography, we create compelling visual content that enhances your brand image and marketing efforts.',
      features: ['Product Photography', 'Lifestyle Shoots', 'Commercial Photography', 'Retouching'],
      pricing: { starter: '₹12,000', business: '₹25,000', enterprise: '₹50,000' },
      gradient: 'from-indigo-500 to-purple-500',
      bgGradient: 'from-indigo-500/10 to-purple-500/10',
      stats: { shoots: '200+', clients: '150+', quality: 'HD 4K' }
    }
  ];

  const testimonials = [
    {
      name: "Rajesh Kumar",
      company: "TechStart Solutions",
      image: "RK",
      text: "Mysticgrafix design work transformed our brand identity completely. The logo and brand materials are absolutely stunning!",
      service: "Design",
      rating: 5
    },
    {
      name: "Priya Sharma",
      company: "Fashion Forward",
      image: "PS",
      text: "The website they developed for us is fast, beautiful, and converts visitors into customers. Outstanding work!",
      service: "Web Development",
      rating: 5
    },
    {
      name: "Amit Patel",
      company: "Local Business Hub",
      image: "AP",
      text: "Our social media engagement increased by 400% with their marketing strategies. Highly professional team!",
      service: "Social Media Marketing",
      rating: 5
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Discovery & Planning",
      description: "We analyze your requirements and create a comprehensive project roadmap.",
      icon: Lightbulb
    },
    {
      step: "02",
      title: "Design & Strategy",
      description: "Our team crafts the perfect design and strategy tailored to your goals.",
      icon: PenTool
    },
    {
      step: "03",
      title: "Development & Implementation",
      description: "We bring your project to life with cutting-edge technology and best practices.",
      icon: Code
    },
    {
      step: "04",
      title: "Testing & Launch",
      description: "Rigorous testing ensures everything works perfectly before going live.",
      icon: Target
    },
    {
      step: "05",
      title: "Support & Growth",
      description: "Ongoing support and optimization to ensure continued success.",
      icon: TrendingUp
    }
  ];

  return (
    <div className="bg-black text-white overflow-hidden">
      {/* Enhanced Header */}
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

      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          {/* Animated Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-black via-blue-950/20 to-purple-950/20">
            {[...Array(80)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-blue-400/20 rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [-30, 30, -30],
                  opacity: [0.2, 0.8, 0.2],
                  scale: [1, 1.5, 1],
                }}
                transition={{
                  duration: 4 + Math.random() * 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            ))}
          </div>

          <div className="relative z-10 text-center max-w-6xl mx-auto px-6">
            <motion.div
              className="flex items-center justify-center gap-4 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <div className="flex gap-2">
                {[Palette, Code, Monitor, Megaphone, PenTool, Camera].map((Icon, i) => (
                  <motion.div
                    key={i}
                    className="p-2 bg-white/10 rounded-lg backdrop-blur-sm"
                    animate={{
                      y: [0, -10, 0],
                      rotate: [0, 5, -5, 0]
                    }}
                    transition={{
                      duration: 3,
                      delay: i * 0.2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    <Icon className="w-6 h-6 text-blue-400" />
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.h1
              className="text-6xl md:text-8xl font-bold mb-8 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              Our
              <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                {" "}Services
              </span>
            </motion.h1>

            <motion.p
              className="text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              Comprehensive digital solutions that transform businesses and create exceptional experiences. 
              From concept to execution, we deliver excellence in every project.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              <button className="group bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 px-10 py-4 rounded-full text-white font-bold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center gap-3">
                Explore Services
                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="group px-10 py-4 border border-white/20 hover:border-white/40 rounded-full text-white font-bold text-lg backdrop-blur-sm hover:bg-white/10 transition-all duration-300 flex items-center gap-3">
                <Play className="w-5 h-5" />
                Watch Demo
              </button>
            </motion.div>

            {/* Enhanced Stats */}
            <motion.div
              className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
              variants={stagger}
              initial="hidden"
              animate="visible"
            >
              {[
                { icon: Trophy, number: "500+", label: "Projects Completed", color: "text-yellow-400" },
                { icon: Users, number: "300+", label: "Happy Clients", color: "text-blue-400" },
                { icon: Award, number: "50+", label: "Awards Won", color: "text-purple-400" },
                { icon: Heart, number: "98%", label: "Client Satisfaction", color: "text-red-400" }
              ].map((stat, i) => (
                <motion.div key={i} variants={fadeUp} className="text-center">
                  <stat.icon className={`w-10 h-10 ${stat.color} mx-auto mb-3`} />
                  <div className="text-3xl font-bold text-white mb-1">{stat.number}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Enhanced Scroll Indicator */}
          <motion.div
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <span className="text-white/60 text-sm">Scroll to explore</span>
            <ChevronRight className="w-6 h-6 text-white/60 rotate-90" />
          </motion.div>
        </section>

        {/* Services Showcase */}
        <section className="py-24 bg-gradient-to-b from-black to-gray-900">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              className="text-center mb-20"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              <h2 className="text-5xl font-bold mb-6">
                What We <span className="text-blue-400">Offer</span>
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Comprehensive digital solutions designed to elevate your business and create lasting impact
              </p>
            </motion.div>

            {/* Interactive Service Cards */}
            <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
              {services.map((service, i) => (
                <motion.div
                  key={service.id}
                  className={`group relative bg-gradient-to-br ${service.bgGradient} backdrop-blur-sm border border-gray-700/50 rounded-3xl p-8 hover:border-blue-500/50 transition-all duration-500 hover:transform hover:scale-105 cursor-pointer`}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  custom={i}
                  onClick={() => setActiveService(i)}
                >
                  {/* Service Icon */}
                  <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${service.gradient} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-blue-400 text-sm font-semibold mb-4">{service.subtitle}</p>
                  <p className="text-gray-300 mb-6 leading-relaxed group-hover:text-white transition-colors">
                    {service.shortDesc}
                  </p>

                  {/* Features */}
                  <ul className="space-y-2 mb-6">
                    {service.features.slice(0, 3).map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-3 text-gray-400 group-hover:text-gray-200 transition-colors">
                        <CheckCircle className="w-4 h-4 text-green-400" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Pricing */}
                  <div className="flex items-center justify-between mb-6 pt-4 border-t border-gray-600/50">
                    <div>
                      <span className="text-gray-400 text-xs">Starting from</span>
                      <div className="text-2xl font-bold text-white">{service.pricing.starter}</div>
                    </div>
                    <button className={`bg-gradient-to-r ${service.gradient} px-6 py-2 rounded-full text-white font-semibold hover:shadow-lg transition-all duration-300`}>
                      Learn More
                    </button>
                  </div>

                  {/* Stats */}
                  <div className="flex justify-between text-center">
                    {Object.entries(service.stats).map(([key, value], idx) => (
                      <div key={key} className="text-center">
                        <div className="text-lg font-bold text-white">{value}</div>
                        <div className="text-xs text-gray-400 capitalize">{key}</div>
                      </div>
                    ))}
                  </div>

                  {/* Hover Effect Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Service Detail */}
        <section className="py-24 bg-gray-900">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              className="grid lg:grid-cols-2 gap-16 items-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
            >
              <motion.div variants={slideIn}>
                <h2 className="text-4xl font-bold mb-6">
                  <span className="text-blue-400">Featured:</span> {services[activeService].title}
                </h2>
                <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                  {services[activeService].longDesc}
                </p>
                
                {/* Enhanced Features List */}
                <div className="grid grid-cols-2 gap-4 mb-8">
                  {services[activeService].features.map((feature, i) => (
                    <motion.div
                      key={feature}
                      className="flex items-center gap-3 p-3 bg-gray-800/50 rounded-lg hover:bg-gray-800 transition-colors"
                      variants={fadeUp}
                      custom={i}
                    >
                      <CheckCircle className="w-5 h-5 text-green-400" />
                      <span className="text-gray-200">{feature}</span>
                    </motion.div>
                  ))}
                </div>

                {/* Pricing Tiers */}
                <div className="grid grid-cols-3 gap-4 mb-8">
                  {Object.entries(services[activeService].pricing).map(([tier, price]) => (
                    <div key={tier} className="text-center p-4 bg-gray-800/30 rounded-lg border border-gray-700">
                      <div className="text-sm text-gray-400 capitalize mb-1">{tier}</div>
                      <div className="text-xl font-bold text-white">{price}</div>
                    </div>
                  ))}
                </div>

                <button className={`bg-gradient-to-r ${services[activeService].gradient} px-8 py-4 rounded-full text-white font-bold hover:shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center gap-2`}>
                  Get Started Today
                  <ArrowRight className="w-5 h-5" />
                </button>
              </motion.div>

              <motion.div
                className="relative"
                variants={scaleIn}
              >
                <div className={`bg-gradient-to-br ${services[activeService].bgGradient} rounded-3xl p-8 backdrop-blur-sm border border-white/10`}>
                  {/* Visual Representation */}
                  <div className="bg-gray-800 rounded-2xl p-8 mb-6">
                    {/* <div className="flex items-center justify-center mb-6">
                      <services[activeService].icon className="w-24 h-24 text-blue-400" />
                    </div> */}
                    <div className="space-y-3">
                      <div className="h-3 bg-blue-400 rounded-full w-3/4 mx-auto"></div>
                      <div className="h-3 bg-purple-400 rounded-full w-1/2 mx-auto"></div>
                      <div className="h-3 bg-pink-400 rounded-full w-2/3 mx-auto"></div>
                    </div>
                  </div>
                  
                  {/* Service Navigation */}
                  <div className="flex gap-2 justify-center">
                    {services.map((_, i) => (
                      <button
                        key={i}
                        className={`w-3 h-3 rounded-full transition-colors ${
                          activeService === i ? 'bg-blue-400' : 'bg-gray-600 hover:bg-gray-500'
                        }`}
                        onClick={() => setActiveService(i)}
                      />
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-24 bg-black">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              className="text-center mb-20"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              <h2 className="text-5xl font-bold mb-6">
                Our <span className="text-blue-400">Process</span>
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                A proven methodology that ensures exceptional results every time
              </p>
            </motion.div>

            <div className="relative">
              {/* Process Timeline */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-blue-500 to-purple-500 h-full rounded-full"></div>
              
              <div className="space-y-16">
               {processSteps.map((step, i) => (
                  <motion.div
                    key={step.step}
                    className="grid lg:grid-cols-2 gap-8 items-center"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeUp}
                    custom={i}
                  >
                    {/* Step Number - Always on the timeline */}
                    <div className={`relative ${i % 2 === 0 ? 'lg:order-1 lg:text-right' : 'lg:order-2'}`}>
                      <div className={`inline-flex items-center gap-4 ${i % 2 === 0 ? 'lg:flex-row-reverse' : ''}`}>
                        <div className="bg-gradient-to-r from-blue-500 to-purple-500 w-16 h-16 rounded-full flex items-center justify-center text-white font-bold text-xl relative z-10">
                          {step.step}
                        </div>
                      </div>
                    </div>
                    
                    {/* Content Card - Alternates left and right */}
                    <div className={`${i % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}`}>
                      <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-blue-500/50 transition-colors">
                        <step.icon className="w-12 h-12 text-blue-400 mb-4" />
                        <h3 className="text-2xl font-bold text-white mb-4">{step.title}</h3>
                        <p className="text-gray-300 leading-relaxed">{step.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-24 bg-gradient-to-b from-gray-900 to-black">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              className="text-center mb-20"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              <h2 className="text-5xl font-bold mb-6">
                What Our <span className="text-blue-400">Clients Say</span>
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Real stories from businesses that have transformed with our services
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-3 gap-8">
              {testimonials.map((testimonial, i) => (
                <motion.div
                  key={testimonial.name}
                  className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  custom={i}
                >
                  {/* Rating */}
                  <div className="flex gap-1 mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  
                  {/* Testimonial Text */}
                  <p className="text-gray-300 mb-6 leading-relaxed italic">
                    {testimonial.text}
                  </p>
                  
                  {/* Author */}
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold">
                      {testimonial.image}
                    </div>
                    <div>
                      <div className="text-white font-semibold">{testimonial.name}</div>
                      <div className="text-gray-400 text-sm">{testimonial.company}</div>
                      <div className="text-blue-400 text-xs">{testimonial.service}</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-24 bg-black">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              className="text-center mb-20"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              <h2 className="text-5xl font-bold mb-6">
                Why Choose <span className="text-blue-400">Mystic</span>?
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                We combine expertise, innovation, and dedication to deliver exceptional results
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
              {[
                {
                  icon: Shield,
                  title: "Trusted Expertise",
                  desc: "5+ years of proven experience across all digital domains",
                  stat: "500+ Projects"
                },
                {
                  icon: Zap,
                  title: "Lightning Fast Delivery",
                  desc: "Quick turnaround times without compromising on quality",
                  stat: "On-Time Delivery"
                },
                {
                  icon: Clock,
                  title: "24/7 Support",
                  desc: "Round-the-clock support and maintenance for all projects",
                  stat: "Always Available"
                },
                {
                  icon: TrendingUp,
                  title: "Proven Results",
                  desc: "Track record of delivering measurable business growth",
                  stat: "300% Avg ROI"
                }
              ].map((benefit, i) => (
                <motion.div
                  key={benefit.title}
                  className="group text-center p-8 bg-gray-900/50 rounded-2xl border border-gray-700/50 hover:border-blue-500/50 hover:bg-gray-800/50 transition-all duration-300"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  custom={i}
                >
                  <div className="bg-gradient-to-r from-blue-500 to-purple-500 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <benefit.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-400 mb-4 leading-relaxed group-hover:text-gray-300 transition-colors">
                    {benefit.desc}
                  </p>
                  <div className="text-blue-400 font-semibold text-sm">{benefit.stat}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Technology Stack */}
        <section className="py-24 bg-gradient-to-b from-black to-gray-900">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              className="text-center mb-20"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              <h2 className="text-5xl font-bold mb-6">
                Our <span className="text-blue-400">Tech Stack</span>
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Cutting-edge technologies and frameworks that power our solutions
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-6 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-6">
              {[
                { name: "Figma", category: "Design" },
                { name: "Adobe CC", category: "Creative" },
                { name: "React", category: "Frontend" },
                { name: "Next.js", category: "Framework" },
                { name: "Blender", category: "3D" },
                { name: "After Effects", category: "Motion" },
                { name: "Instagram", category: "Social" },
                { name: "Facebook Ads", category: "Marketing" },
                { name: "Illustrator", category: "Logo" },
                { name: "Photoshop", category: "Graphics" },
                { name: "Canon", category: "Photography" },
                { name: "Lightroom", category: "Editing" }
              ].map((tech, i) => (
                <motion.div
                  key={tech.name}
                  className="group bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 border border-gray-700/30 hover:border-blue-500/50 hover:bg-gray-800/50 transition-all duration-300 text-center"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  custom={i * 0.05}
                  whileHover={{ y: -5 }}
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                    <Code className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-white font-semibold mb-1 group-hover:text-blue-300 transition-colors">
                    {tech.name}
                  </h3>
                  <p className="text-gray-400 text-xs">{tech.category}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20"></div>
          
          {/* Enhanced Background Animation */}
          <div className="absolute inset-0">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-blue-400/20 rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  scale: [1, 2, 1],
                  opacity: [0.2, 0.8, 0.2],
                  rotate: [0, 180, 360],
                }}
                transition={{
                  duration: 5 + Math.random() * 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            ))}
          </div>

          <motion.div
            className="relative z-10 max-w-6xl mx-auto px-6 text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={scaleIn}
          >
            <div className="bg-white/5 backdrop-blur-xl border border-white/20 rounded-3xl p-16 shadow-2xl">
              {/* Trust Indicators */}
              <motion.div
                className="flex items-center justify-center gap-8 mb-8"
                variants={fadeUp}
              >
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                  ))}
                </div>
                <div className="text-white/80">Rated 4.9/5 by 500+ clients</div>
              </motion.div>

              <motion.h3
                className="text-5xl font-bold mb-6"
                variants={fadeUp}
                custom={1}
              >
                Ready to Transform Your 
                <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"> Business?</span>
              </motion.h3>

              <motion.p
                className="text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed"
                variants={fadeUp}
                custom={2}
              >
                Join hundreds of successful businesses who have transformed their digital presence 
                with our expert services. Let&apos;s create something amazing together.
              </motion.p>

              <motion.div
                className="flex flex-col lg:flex-row gap-6 justify-center items-center mb-12"
                variants={fadeUp}
                custom={3}
              >
                <button className="group bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 px-12 py-5 rounded-full text-white font-bold text-xl shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300 flex items-center gap-3">
                  Get Free Consultation
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="px-12 py-5 border-2 border-white/30 hover:border-white/50 rounded-full text-white font-bold text-xl backdrop-blur-sm hover:bg-white/10 transition-all duration-300 flex items-center gap-3">
                  <Camera className="w-6 h-6" />
                  Schedule a Call
                </button>
              </motion.div>

              {/* Enhanced Guarantees */}
              <motion.div
                className="grid md:grid-cols-4 gap-8 pt-8 border-t border-white/20"
                variants={stagger}
                custom={4}
              >
                {[
                  { icon: Shield, title: "100% Satisfaction", subtitle: "Guaranteed" },
                  { icon: Clock, title: "Free Support", subtitle: "For 6 Months" },
                  { icon: TrendingUp, title: "ROI Guarantee", subtitle: "Or Money Back" },
                  { icon: Award, title: "Award Winning", subtitle: "Team & Service" }
                ].map((guarantee, i) => (
                  <motion.div
                    key={guarantee.title}
                    className="text-center"
                    variants={fadeUp}
                    custom={i}
                  >
                    <guarantee.icon className="w-8 h-8 text-blue-400 mx-auto mb-2" />
                    <div className="text-lg font-bold text-white">{guarantee.title}</div>
                    <div className="text-sm text-gray-400">{guarantee.subtitle}</div>
                  </motion.div>
                ))}
              </motion.div>

              {/* Contact Options */}
              <motion.div
                className="mt-12 pt-8 border-t border-white/20"
                variants={fadeUp}
                custom={5}
              >
                <p className="text-gray-400 mb-4">Or reach out directly:</p>
                <div className="flex justify-center gap-8 text-white">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <span>+91 9876543210</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                    <span>hello@mystic.com</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ServicesPage;