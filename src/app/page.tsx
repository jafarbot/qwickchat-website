'use client';

import { useState, useEffect } from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <main className="min-h-screen bg-[#0A0A0B] text-[#FAFAFA] overflow-x-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-[#C9A962]/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-[800px] h-[800px] bg-[#1A1A2E]/50 rounded-full blur-[150px]" />
      </div>

      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? 'bg-[#0A0A0B]/90 backdrop-blur-xl border-b border-white/5' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <a href="#" className="flex items-center gap-2 group">
              <div className="w-8 h-8 border border-[#C9A962] rounded-sm flex items-center justify-center group-hover:bg-[#C9A962] transition-all duration-300">
                <span className="text-[#C9A962] group-hover:text-[#0A0A0B] text-sm font-bold">Q</span>
              </div>
              <span className="text-lg tracking-tight">QuickChat</span>
            </a>
            <div className="hidden md:flex items-center gap-8">
              <a href="#services" className="text-sm text-white/60 hover:text-white transition-colors">Services</a>
              <a href="#pricing" className="text-sm text-white/60 hover:text-white transition-colors">Pricing</a>
              <a href="https://calendly.com/sino-hexprove/30min" target="_blank" rel="noopener noreferrer" 
                 className="px-6 py-2.5 border border-[#C9A962] text-[#C9A962] text-sm hover:bg-[#C9A962] hover:text-[#0A0A0B] transition-all duration-300">
                Book Consultation
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <div className={`transition-all duration-1000 delay-300 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <span className="inline-block px-4 py-1.5 border border-[#C9A962]/30 text-[#C9A962] text-xs tracking-widest uppercase mb-8">
              AI Operations for Modern Business
            </span>
          </div>
          
          <h1 className={`text-5xl md:text-7xl lg:text-8xl leading-[1.1] mb-8 transition-all duration-1000 delay-500 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Your business,
            <br />
            <span className="text-[#C9A962]">elevated.</span>
          </h1>
          
          <p className={`max-w-2xl mx-auto text-lg md:text-xl text-white/50 leading-relaxed mb-12 transition-all duration-1000 delay-700 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            We build intelligent agents that handle the work you&apos;d rather not.
            Scheduling, communications, and operations —
            <span className="text-white"> all running in the background.</span>
          </p>
          
          <div className={`flex flex-col sm:flex-row items-center justify-center gap-6 transition-all duration-1000 delay-900 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <a href="https://calendly.com/sino-hexprove/30min" target="_blank" rel="noopener noreferrer"
               className="group flex items-center gap-3 px-8 py-4 bg-[#C9A962] text-[#0A0A0B] font-medium hover:bg-[#D4B76A] transition-all duration-300">
              Schedule Consultation
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#services" className="text-white/50 hover:text-white text-sm underline underline-offset-4 transition-colors">
              Explore Services
            </a>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="relative py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-20 items-start">
            <div>
              <span className="text-[#C9A962] text-xs tracking-widest uppercase">What We Do</span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl mt-4 mb-6">
                Intelligent
                <br />
                Operations
              </h2>
              <p className="text-white/40 text-lg leading-relaxed max-w-md">
                Every business has repetitive work. We automate it — beautifully.
              </p>
            </div>

            <div className="space-y-1">
              {[
                { num: '01', title: 'Scheduling', desc: 'Calendar management, rescheduling, confirmations — never miss an appointment' },
                { num: '02', title: 'Lead Management', desc: 'Capture, qualify, and nurture leads through your entire pipeline' },
                { num: '03', title: 'Client Communications', desc: 'Professional inbound and outbound that maintains your voice' },
                { num: '04', title: 'Digital Presence', desc: 'Website monitoring, updates, and technical maintenance handled silently' },
              ].map((service, i) => (
                <div key={i} className="group border-t border-white/10 py-8 hover:bg-white/[0.02] transition-all duration-500 cursor-pointer">
                  <div className="flex items-start gap-8">
                    <span className="text-[#C9A962]/30 text-sm font-mono group-hover:text-[#C9A962] transition-colors">
                      {service.num}
                    </span>
                    <div>
                      <h3 className="text-2xl mb-2 group-hover:text-[#C9A962] transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-white/40 group-hover:text-white/60 transition-colors max-w-md">
                        {service.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="relative py-32 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <span className="text-[#C9A962] text-xs tracking-widest uppercase">Investment</span>
            <h2 className="text-4xl md:text-5xl mt-4">Simple Pricing</h2>
            <p className="text-white/40 mt-4 max-w-xl mx-auto">The cost of a part-time assistant. The output of a full-time team.</p>
          </div>

          <div className="max-w-lg mx-auto">
            <div className="relative p-10 border border-[#C9A962] bg-[#C9A962]/5 rounded-2xl">
              <span className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#C9A962] text-[#0A0A0B] text-xs px-4 py-1.5 font-semibold">Simple Pricing</span>
              <h3 className="text-2xl mb-2 text-center">AI Agent Setup</h3>
              <p className="text-white/40 text-sm mb-8 text-center">Everything you need. Nothing you don't.</p>
              <div className="mb-1 text-center"><span className="text-sm text-white/40">One-time setup:</span></div>
              <div className="text-6xl font-bold text-center mb-2">$2,000</div>
              <div className="text-sm text-[#C9A962] mb-8 text-center">+ $250/month support (completely optional)</div>
              <ul className="space-y-4 mb-10">
                <li className="flex items-center gap-3 text-white/80"><span className="w-2 h-2 bg-[#C9A962] rounded-full"></span>AI agent trained on your business</li>
                <li className="flex items-center gap-3 text-white/80"><span className="w-2 h-2 bg-[#C9A962] rounded-full"></span>Scheduling & calendar management</li>
                <li className="flex items-center gap-3 text-white/80"><span className="w-2 h-2 bg-[#C9A962] rounded-full"></span>Lead capture & nurture</li>
                <li className="flex items-center gap-3 text-white/80"><span className="w-2 h-2 bg-[#C9A962] rounded-full"></span>Email & communication handling</li>
                <li className="flex items-center gap-3 text-white/80"><span className="w-2 h-2 bg-[#C9A962] rounded-full"></span>Own your agent forever (no lock-in)</li>
              </ul>
              <a href="https://calendly.com/sino-hexprove/30min" target="_blank" rel="noopener noreferrer"
                 className="block text-center py-4 bg-[#C9A962] text-[#0A0A0B] font-semibold hover:bg-[#D4B76A] transition-all duration-300">
                Book Free Consultation
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="relative py-32 border-t border-white/5">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <span className="text-[#C9A962] text-xs tracking-widest uppercase">Ready?</span>
          <h2 className="text-4xl md:text-6xl mt-4 mb-6">Let&apos;s discuss your operations</h2>
          <p className="text-white/40 text-lg mb-12 max-w-xl mx-auto">
            Schedule a free 30-minute consultation. We&apos;ll audit your current workflows and show you what&apos;s possible.
          </p>
          <a href="https://calendly.com/sino-hexprove/30min" target="_blank" rel="noopener noreferrer"
             className="inline-flex items-center gap-3 px-10 py-5 bg-[#C9A962] text-[#0A0A0B] font-medium hover:bg-[#D4B76A] transition-all duration-300">
            Book Free Consultation
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5 py-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-6 h-6 border border-[#C9A962]/50 rounded-sm flex items-center justify-center">
              <span className="text-[#C9A962] text-xs font-bold">Q</span>
            </div>
            <span>QuickChat</span>
          </div>
          <p className="text-white/30 text-sm">&copy; 2025 QuickChat. Built for businesses that value their time.</p>
        </div>
      </footer>
    </main>
  );
}