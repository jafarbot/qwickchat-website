'use client';

import { Calendar, Users, Globe, MessageSquare, Sparkles, ArrowRight, Phone, Mail, MapPin } from 'lucide-react';

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-gray-100 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Sparkles className="h-6 w-6 text-primary-600 mr-2" />
              <span className="font-bold text-xl text-gray-900">QuickChat</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#services" className="text-gray-600 hover:text-primary-600 transition">Services</a>
              <a href="#pricing" className="text-gray-600 hover:text-primary-600 transition">Pricing</a>
              <a href="#contact" className="text-gray-600 hover:text-primary-600 transition">Contact</a>
              <a href="#contact" className="bg-primary-600 text-white px-5 py-2 rounded-full font-medium hover:bg-primary-700 transition">
                Get Started
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary-50 text-primary-700 text-sm font-medium mb-6">
            <MapPin className="h-4 w-4 mr-2" />
            Serving Manalapan, NJ & 50-mile radius
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            AI That Runs Your{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-primary-400">
              Business Operations
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-10">
            We install and customize AI agents that handle appointments, generate leads, fix websites, 
            and automate your business — so you can focus on what you do best.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#contact" className="bg-primary-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-primary-700 transition flex items-center justify-center">
              Get Your AI Agent
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
            <a href="#services" className="bg-white text-gray-700 border border-gray-200 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-50 transition">
              See How It Works
            </a>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What Your AI Agent Can Do</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Custom-built for your business needs. Bookings, leads, support — all automated.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ServiceCard 
              icon={<Calendar className="h-8 w-8 text-primary-600" />}
              title="Appointments"
              description="Book, reschedule, and cancel appointments 24/7. Syncs with your calendar automatically."
            />
            <ServiceCard 
              icon={<Users className="h-8 w-8 text-primary-600" />}
              title="Lead Generation"
              description="Capture leads from your website, qualify prospects, and follow up automatically."
            />
            <ServiceCard 
              icon={<Globe className="h-8 w-8 text-primary-600" />}
              title="Website Fixes"
              description="Monitor your site, fix issues, update content, and keep everything running smoothly."
            />
            <ServiceCard 
              icon={<MessageSquare className="h-8 w-8 text-primary-600" />}
              title="Customer Support"
              description="Answer questions, handle inquiries, and provide instant support to your customers."
            />
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">How It Works</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">From discovery to go-live in days, not weeks.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <StepCard 
              number="1"
              title="Discovery"
              description="We learn your business — your workflows, pain points, and what takes up your time."
            />
            <StepCard 
              number="2"
              title="Setup"
              description="We build and customize your AI agent, integrate with your tools, and train it on your business."
            />
            <StepCard 
              number="3"
              title="Go Live"
              description="Your AI starts working. We monitor, optimize, and handle any tweaks you need."
            />
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Simple Pricing</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">No setup fees. Cancel anytime. Local support included.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <PricingCard 
              name="Starter"
              price="$299"
              description="Perfect for solopreneurs and small shops"
              features={[
                "Appointment booking & cancellation",
                "Basic FAQ responses",
                "Email notifications",
                "1 calendar integration",
                "Business hours support"
              ]}
              cta="Get Started"
            />
            <PricingCard 
              name="Growth"
              price="$599"
              description="For growing businesses with more needs"
              featured={true}
              features={[
                "Everything in Starter",
                "Lead capture & qualification",
                "Website monitoring & fixes",
                "SMS + Email notifications",
                "3 calendar integrations",
                "Priority support"
              ]}
              cta="Get Started"
            />
            <PricingCard 
              name="Full Service"
              price="$999"
              description="White-glove service for demanding businesses"
              features={[
                "Everything in Growth",
                "Custom integrations",
                "Advanced automation workflows",
                "Dedicated phone line",
                "Unlimited calendar sync",
                "24/7 priority support"
              ]}
              cta="Contact Us"
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-primary-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Automate Your Business?</h2>
          <p className="text-primary-100 mb-10 text-lg">
            Let's talk about what AI can do for you. Free consultation for Manalapan area businesses.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a href="tel:+1-732-555-0123" className="flex items-center bg-white text-primary-700 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition">
              <Phone className="mr-2 h-5 w-5" />
              Call Now
            </a>
            <a href="mailto:hello@qwickchat.xyz" className="flex items-center bg-primary-700 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-primary-800 transition border border-primary-500">
              <Mail className="mr-2 h-5 w-5" />
              Email Us
            </a>
          </div>
          <p className="text-primary-200 mt-8 text-sm">
            hello@qwickchat.xyz · Manalapan, NJ · Serving 50-mile radius
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <Sparkles className="h-6 w-6 text-primary-500 mr-2" />
              <span className="font-bold text-xl text-white">QuickChat</span>
            </div>
            <p className="text-sm">© 2025 QuickChat. Local AI automation for Manalapan businesses.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}

function ServiceCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
  return (
    <div className="p-6 rounded-2xl bg-gray-50 hover:bg-white hover:shadow-lg transition border border-gray-100">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

function StepCard({ number, title, description }: { number: string, title: string, description: string }) {
  return (
    <div className="text-center p-6">
      <div className="w-16 h-16 rounded-full bg-primary-100 text-primary-700 flex items-center justify-center text-2xl font-bold mx-auto mb-4">
        {number}
      </div>
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

function PricingCard({ name, price, description, features, featured, cta }: { name: string, price: string, description: string, features: string[], featured?: boolean, cta: string }) {
  return (
    <div className={`rounded-2xl p-8 ${featured ? 'bg-primary-600 text-white ring-4 ring-primary-200' : 'bg-white border border-gray-200'}`}>
      {featured && (
        <div className="inline-block px-3 py-1 rounded-full bg-primary-500 text-white text-xs font-semibold mb-4">
          Most Popular
        </div>
      )}
      <h3 className={`text-xl font-bold mb-2 ${featured ? 'text-white' : 'text-gray-900'}`}>{name}</h3>
      <div className="mb-4">
        <span className={`text-4xl font-bold ${featured ? 'text-white' : 'text-gray-900'}`}>{price}</span>
        <span className={`text-sm ${featured ? 'text-primary-200' : 'text-gray-500'}`}>/month</span>
      </div>
      <p className={`text-sm mb-6 ${featured ? 'text-primary-100' : 'text-gray-600'}`}>{description}</p>
      <ul className="space-y-3 mb-8">
        {features.map((feature, i) => (
          <li key={i} className="flex items-start">
            <svg className={`h-5 w-5 mr-2 flex-shrink-0 ${featured ? 'text-primary-300' : 'text-green-500'}`} fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            <span className={featured ? 'text-white' : 'text-gray-600'}>{feature}</span>
          </li>
        ))}
      </ul>
      <button className={`w-full py-3 rounded-full font-semibold transition ${featured ? 'bg-white text-primary-700 hover:bg-gray-100' : 'bg-primary-600 text-white hover:bg-primary-700'}`}>
        {cta}
      </button>
    </div>
  );
}
