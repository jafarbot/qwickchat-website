'use client';

import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Menu, X, Check, ChevronDown, MessageSquare, Zap, Shield, Clock, Brain, Mail, Search, Calendar, Star, Server } from 'lucide-react';

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  const { scrollY } = useScroll();
  const heroOpacity = useTransform(scrollY, [0, 300], [1, 0]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const faqs = [
    {
      question: "What is this exactly?",
      answer: "It's a personal AI assistant that lives on Telegram. Message it anytime — it can manage tasks, research topics, draft emails, set reminders, and more. It runs on your own cloud server 24/7."
    },
    {
      question: "Do I need technical skills?",
      answer: "None. We set up everything. You'll receive full access to your server, but you never need to touch it."
    },
    {
      question: "What's included in the $149.99?",
      answer: "One year of cloud hosting on DigitalOcean, full OpenClaw installation, Telegram bot configuration, and your agent ready to use. After year 1, hosting renewal is $49/year."
    },
    {
      question: "What AI model does it use?",
      answer: "You choose during setup. Options include Claude Sonnet, GPT-4.1, Gemini Flash, and more. You bring your own OpenRouter API key ($5-10/month typical usage)."
    },
    {
      question: "Can I customize my agent?",
      answer: "Absolutely. You can change its name, personality, capabilities, and add new skills anytime. It's fully yours."
    },
    {
      question: "What happens after 1 year?",
      answer: "Your agent keeps running. Hosting renewal is $49/year. Or you can migrate to your own server — we'll help."
    },
    {
      question: "Is my data private?",
      answer: "Yes. Your agent runs on YOUR dedicated server. No shared infrastructure. You have full SSH access."
    }
  ];

  const steps = [
    {
      number: "01",
      title: "You Pay",
      description: "$149.99 one-time. Includes 1 year of hosting.",
      icon: Zap
    },
    {
      number: "02",
      title: "We Set Up Everything",
      description: "We provision your own cloud server, install your AI agent, configure Telegram. Takes ~5 minutes.",
      icon: Server
    },
    {
      number: "03",
      title: "You Customize",
      description: "Name your agent, set its personality, teach it about you. It's YOUR assistant.",
      icon: Star
    },
    {
      number: "04",
      title: "It Runs 24/7",
      description: "Your agent is always on. Manages tasks, answers questions, sets reminders — even while you sleep.",
      icon: Clock
    }
  ];

  const features = [
    {
      icon: MessageSquare,
      title: "Telegram Integration",
      description: "Always reachable — message your agent anytime, anywhere"
    },
    {
      icon: Calendar,
      title: "Task & Reminder Management",
      description: "Never forget anything — your agent keeps track for you"
    },
    {
      icon: Search,
      title: "Web Research & Summarization",
      description: "Get instant insights on any topic without the manual work"
    },
    {
      icon: Mail,
      title: "Email Drafting & Triage",
      description: "Your agent helps you stay on top of your inbox"
    },
    {
      icon: Brain,
      title: "Memory That Persists",
      description: "Remembers your preferences, context, and conversations"
    },
    {
      icon: Clock,
      title: "Proactive Check-ins",
      description: "Heartbeat system — your agent reaches out when needed"
    },
    {
      icon: Zap,
      title: "Expandable with Skills",
      description: "Add weather, GitHub, calendar, and more capabilities over time"
    },
    {
      icon: Shield,
      title: "Runs on YOUR Server",
      description: "Privacy first — you own the data and the infrastructure"
    }
  ];

  const stats = [
    { value: "$149.99", label: "One-Time Price" },
    { value: "5 min", label: "Setup Time" },
    { value: "24/7", label: "Always Running" },
    { value: "100%", label: "You Own It" }
  ];

  return (
    <main className="relative bg-background text-text-primary">
      {/* Navigation */}
      <motion.nav 
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled 
            ? 'bg-background/90 backdrop-blur-[12px] border-b border-white/10' 
            : 'bg-transparent'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <a href="#" className="flex items-center gap-2 group">
              <div className="w-10 h-10 border border-accent rounded-lg flex items-center justify-center group-hover:bg-accent transition-all duration-200">
                <span className="text-accent group-hover:text-background text-lg font-bold transition-colors duration-200">Q</span>
              </div>
              <span className="text-lg font-medium tracking-tight hidden sm:block">QwickChat</span>
            </a>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-8">
              <a href="#how-it-works" className="text-sm text-text-muted hover:text-text-primary transition-colors duration-200">
                How It Works
              </a>
              <a href="#features" className="text-sm text-text-muted hover:text-text-primary transition-colors duration-200">
                Features
              </a>
              <a href="#pricing" className="text-sm text-text-muted hover:text-text-primary transition-colors duration-200">
                Pricing
              </a>
              <a 
                href="#pricing" 
                className="px-6 py-2.5 bg-accent text-background rounded-full text-sm font-medium hover:scale-[1.02] transition-transform duration-200"
              >
                Get Started
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 text-text-primary"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Drawer */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-surface border-t border-white/10"
          >
            <div className="px-6 py-8 space-y-6">
              <a 
                href="#how-it-works" 
                className="block text-lg text-text-muted hover:text-text-primary transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                How It Works
              </a>
              <a 
                href="#features" 
                className="block text-lg text-text-muted hover:text-text-primary transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Features
              </a>
              <a 
                href="#pricing" 
                className="block text-lg text-text-muted hover:text-text-primary transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Pricing
              </a>
              <a 
                href="#pricing"
                className="block w-full px-6 py-3 bg-accent text-background rounded-full text-center font-medium"
              >
                Get Started
              </a>
            </div>
          </motion.div>
        )}
      </motion.nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Hero gradient glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-accent/10 rounded-full blur-[150px] pointer-events-none" />
        
        <motion.div 
          className="relative z-10 max-w-[1200px] mx-auto px-6 text-center pt-32 pb-20"
          style={{ opacity: heroOpacity }}
        >
          <motion.h1 
            className="text-[40px] md:text-[56px] lg:text-[72px] font-bold leading-[1.1] tracking-[-0.02em] max-w-[800px] mx-auto mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            Your Own AI Agent —
            <br />
            <span className="text-accent">Running 24/7</span>
          </motion.h1>

          <motion.p 
            className="text-lg text-text-muted leading-[1.7] max-w-[600px] mx-auto mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            Personal AI assistant on Telegram. We handle everything — server, setup, configuration. One payment. Runs forever.
          </motion.p>

          <motion.div 
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            <a 
              href="#pricing"
              className="px-8 py-4 bg-accent text-background rounded-lg font-medium hover:scale-[1.02] transition-transform duration-200"
            >
              Get Started — $149.99
            </a>
            <a 
              href="#how-it-works"
              className="px-8 py-4 border border-white/20 rounded-lg font-medium hover:border-white/40 transition-colors duration-200"
            >
              See How It Works
            </a>
          </motion.div>
        </motion.div>

        {/* Divider */}
        <div className="absolute bottom-0 w-full h-px bg-white/10" />
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="relative py-32">
        <div className="max-w-[1200px] mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <p className="text-xs tracking-[0.15em] uppercase text-accent mb-4">HOW IT WORKS</p>
            <h2 className="text-4xl md:text-5xl font-bold">From payment to live agent in 5 minutes</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1, ease: 'easeOut' }}
                  className="group p-6 bg-surface border border-border rounded-2xl hover:border-border-hover hover:-translate-y-0.5 transition-all duration-200"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center flex-shrink-0">
                      <Icon size={24} className="text-accent" />
                    </div>
                    <div className="flex-1">
                      <span className="font-mono text-sm text-accent/60 mb-2 block">{step.number}</span>
                      <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                      <p className="text-text-muted leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="relative py-32 border-t border-white/10">
        <div className="max-w-[1200px] mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <p className="text-xs tracking-[0.15em] uppercase text-accent mb-4">CAPABILITIES</p>
            <h2 className="text-4xl md:text-5xl font-bold">What Your Agent Can Do</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05, ease: 'easeOut' }}
                  className="group p-6 bg-surface border border-border rounded-2xl hover:border-border-hover hover:-translate-y-0.5 transition-all duration-200"
                >
                  <div className="w-10 h-10 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center mb-4">
                    <Icon size={20} className="text-accent" />
                  </div>
                  <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
                  <p className="text-sm text-text-muted leading-relaxed">{feature.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative py-20 border-y border-white/10">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="font-mono text-5xl font-bold mb-2">{stat.value}</div>
                <div className="text-sm text-text-muted">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="relative py-32">
        <div className="max-w-[1200px] mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <p className="text-xs tracking-[0.15em] uppercase text-accent mb-4">PRICING</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">One Price, Everything Included</h2>
            <p className="text-text-muted max-w-xl mx-auto">
              Your own AI assistant, running 24/7 on your own server. No subscriptions, no surprises.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-[500px] mx-auto"
          >
            <div className="relative p-8 bg-surface border border-accent rounded-2xl">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-accent text-background text-xs font-semibold rounded-full">
                Complete Setup
              </div>
              
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-2">Your AI Agent</h3>
                <div className="text-5xl font-bold my-6">$149.99</div>
                <p className="text-sm text-text-muted">
                  One-time payment · Hosting included for 1 year
                </p>
              </div>

              <ul className="space-y-4 mb-8">
                {[
                  "1 year cloud hosting (DigitalOcean)",
                  "Full OpenClaw installation",
                  "Telegram bot setup",
                  "Agent personality configuration",
                  "Systemd auto-restart",
                  "Full server access (SSH)",
                  "Optional: $49/year renewal after year 1"
                ].map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check size={20} className="text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-text-muted">{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href="https://buy.stripe.com/3cI28t2KNgp19WU95ugIo03"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full py-4 bg-accent text-background text-center font-semibold rounded-lg hover:scale-[1.02] transition-transform duration-200 mb-3"
              >
                Get Your AI Agent
              </a>
              
              <p className="text-xs text-center text-text-muted">
                Setup takes ~5 minutes. No technical skills needed.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="relative py-32 border-t border-white/10">
        <div className="max-w-[800px] mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <p className="text-xs tracking-[0.15em] uppercase text-accent mb-4">FAQ</p>
            <h2 className="text-4xl md:text-5xl font-bold">Common Questions</h2>
          </motion.div>

          <div className="space-y-px">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="border-b border-white/10"
              >
                <button
                  onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
                  className="w-full py-6 flex items-center justify-between text-left hover:text-accent transition-colors duration-200"
                >
                  <span className="text-lg font-medium pr-8">{faq.question}</span>
                  <ChevronDown 
                    size={20} 
                    className={`flex-shrink-0 transition-transform duration-300 ${
                      openFaqIndex === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                <motion.div
                  initial={false}
                  animate={{ 
                    height: openFaqIndex === index ? 'auto' : 0,
                    opacity: openFaqIndex === index ? 1 : 0
                  }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                  className="overflow-hidden"
                >
                  <p className="pb-6 text-text-muted leading-relaxed">
                    {faq.answer}
                  </p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="relative py-32 border-t border-white/10 overflow-hidden">
        {/* Subtle glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[120px] pointer-events-none" />
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative z-10 max-w-[800px] mx-auto px-6 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Stop doing everything yourself.
          </h2>
          <p className="text-lg text-text-muted mb-10 max-w-xl mx-auto">
            Your AI agent is one click away.
          </p>
          <a
            href="#pricing"
            className="inline-block px-10 py-5 bg-accent text-background font-semibold rounded-lg hover:scale-[1.02] transition-transform duration-200"
          >
            Get Started — $149.99
          </a>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-12">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 border border-accent/50 rounded-lg flex items-center justify-center">
                <span className="text-accent text-sm font-bold">Q</span>
              </div>
              <span className="font-medium">QwickChat</span>
            </div>
            <div className="flex flex-col md:flex-row items-center gap-6 text-sm text-text-muted">
              <a href="mailto:hello@qwickchat.xyz" className="hover:text-accent transition-colors">
                hello@qwickchat.xyz
              </a>
              <span>© 2026 QwickChat</span>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
