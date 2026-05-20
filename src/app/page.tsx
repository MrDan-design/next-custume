'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Home() {
  const [email, setEmail] = useState('');

  const handleNewsletterSignup = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Thanks for subscribing with: ${email}`);
    setEmail('');
  };

  return (
    <div className="w-full bg-white overflow-hidden">
      {/* Hero Section - Modern Gradient Background */}
      <section className="relative min-h-screen bg-gradient-to-br from-slate-950 via-purple-900 to-slate-950 text-white overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        </div>

        <div className="container mx-auto max-w-7xl px-4 pt-32 pb-20 relative z-10">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <span className="inline-block text-purple-300 text-sm font-semibold uppercase tracking-wider">Welcome to CareerMentor</span>
                <h1 className="text-6xl md:text-7xl font-black leading-tight bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
                  Accelerate Your Career Growth
                </h1>
              </div>
              <p className="text-xl text-gray-300 leading-relaxed max-w-lg">
                Transform your career with expert interviews prep, personalized mentoring, professional coaching, and premium tools. Join thousands of successful professionals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link 
                  href="/interviews" 
                  className="inline-flex items-center justify-center px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white font-bold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  Start Free Trial
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
                <Link 
                  href="/mentoring" 
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-bold rounded-xl hover:bg-white hover:text-purple-900 transition-all duration-300"
                >
                  Explore Services
                </Link>
              </div>
              <div className="flex items-center gap-4 pt-8">
                <div className="flex -space-x-3">
                  {['👨‍💼', '👩‍💻', '👨‍🎓'].map((emoji, i) => (
                    <div key={i} className="w-10 h-10 rounded-full bg-purple-500 flex items-center justify-center text-xl border-2 border-slate-950">
                      {emoji}
                    </div>
                  ))}
                </div>
                <div className="text-sm">
                  <p className="font-semibold">5,000+</p>
                  <p className="text-gray-400">Career Transformations</p>
                </div>
              </div>
            </div>

            {/* Hero Image Section */}
            <div className="relative hidden md:block h-96">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-400 via-pink-400 to-purple-600 rounded-3xl opacity-90"></div>
              <div className="absolute inset-0 rounded-3xl overflow-hidden">
                <div className="w-full h-full flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-8xl mb-4">🚀</div>
                    <h3 className="text-3xl font-bold text-white">Career Success</h3>
                    <p className="text-gray-100 mt-2">Transform your future today</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-32 px-4 bg-gray-50">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-24">
            <h2 className="text-5xl md:text-6xl font-black text-slate-900 mb-6">
              Everything You Need to Succeed
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive tools and expert guidance to accelerate your career progression
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: '💼',
                title: 'Interview Mastery',
                desc: 'Master technical, behavioral, and HR interviews with real scenarios and expert feedback.',
                color: 'from-blue-500 to-cyan-500',
                items: ['Mock Interviews', 'Technical Assessments', 'Resume Review', 'Salary Negotiation']
              },
              {
                icon: '🎓',
                title: 'Expert Mentoring',
                desc: 'Connect with industry leaders who provide guidance and accelerate your career growth.',
                color: 'from-green-500 to-emerald-500',
                items: ['1-on-1 Sessions', 'Career Guidance', 'Networking', 'Skill Development']
              },
              {
                icon: '🏆',
                title: 'Professional Coaching',
                desc: 'Intensive coaching for leadership, communication, and strategic career planning.',
                color: 'from-orange-500 to-red-500',
                items: ['Leadership Training', 'Executive Coaching', 'Team Building', 'Career Transitions']
              }
            ].map((feature, idx) => (
              <div key={idx} className="group relative">
                <div className={`absolute inset-0 bg-gradient-to-r ${feature.color} rounded-2xl opacity-0 group-hover:opacity-10 transition duration-300`}></div>
                <div className="relative bg-white rounded-2xl p-8 border-2 border-gray-200 hover:border-purple-300 transition duration-300 h-full">
                  <div className="text-6xl mb-4">{feature.icon}</div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{feature.desc}</p>
                  <div className="space-y-2 mb-6">
                    {feature.items.map((item, i) => (
                      <div key={i} className="flex items-center text-sm text-gray-700">
                        <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${feature.color} mr-3`}></div>
                        {item}
                      </div>
                    ))}
                  </div>
                  <Link 
                    href={`/${feature.title.toLowerCase().split(' ')[0]}s`}
                    className="inline-block text-purple-600 font-semibold hover:text-purple-700 transition"
                  >
                    Explore →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: '5,000+', label: 'Successful Placements' },
              { value: '95%', label: 'Success Rate' },
              { value: '50+', label: 'Expert Mentors' },
              { value: '24/7', label: 'Support Available' }
            ].map((stat, idx) => (
              <div key={idx} className="text-center p-6 hover:bg-gray-50 rounded-xl transition">
                <div className="text-4xl md:text-5xl font-black text-purple-600 mb-2">{stat.value}</div>
                <p className="text-gray-600 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-32 px-4 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-24">
            <h2 className="text-5xl md:text-6xl font-black mb-6">Success Stories</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Join thousands of professionals who transformed their careers
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'Sarah Johnson',
                role: 'Software Engineer @ Google',
                text: 'CareerMentor helped me land my dream role. The interview prep was invaluable!',
                rating: 5
              },
              {
                name: 'Michael Chen',
                role: 'Product Manager @ Microsoft',
                text: 'The mentoring accelerated my growth by 2 years. Highly recommended!',
                rating: 5
              },
              {
                name: 'Emily Rodriguez',
                role: 'UX Designer @ Apple',
                text: 'Professional coaching transformed my leadership abilities.',
                rating: 5
              }
            ].map((testimonial, idx) => (
              <div key={idx} className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl opacity-0 group-hover:opacity-20 transition"></div>
                <div className="relative bg-slate-700 rounded-2xl p-8 border border-slate-600 hover:border-purple-500 transition">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i} className="text-yellow-400 text-lg">★</span>
                    ))}
                  </div>
                  <p className="text-gray-200 mb-6 leading-relaxed italic">&ldquo;{testimonial.text}&rdquo;</p>
                  <div className="border-t border-slate-600 pt-4">
                    <p className="font-bold">{testimonial.name}</p>
                    <p className="text-sm text-purple-300">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <div className="container mx-auto max-w-7xl text-center">
          <h2 className="text-5xl font-black mb-6">Ready to Transform Your Career?</h2>
          <p className="text-xl mb-10 text-gray-100 max-w-2xl mx-auto">
            Start your journey to success today. Join thousands of professionals who&apos;ve achieved their career goals.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              href="/dashboard" 
              className="px-10 py-4 bg-white text-purple-600 font-bold rounded-xl hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg"
            >
              Get Started Free
            </Link>
            <Link 
              href="/marketplace" 
              className="px-10 py-4 border-2 border-white text-white font-bold rounded-xl hover:bg-white hover:text-purple-600 transition-all"
            >
              Explore Tools
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-2xl">
          <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-3xl p-12 border-2 border-purple-200">
            <h2 className="text-4xl font-black text-slate-900 mb-4 text-center">Get Weekly Tips</h2>
            <p className="text-center text-gray-600 mb-8">
              Career insights, job opportunities, and exclusive offers delivered to your inbox
            </p>
            <form onSubmit={handleNewsletterSignup} className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 px-6 py-4 rounded-xl border-2 border-gray-300 focus:border-purple-500 focus:outline-none text-slate-900"
              />
              <button 
                type="submit" 
                className="px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white font-bold rounded-xl transition transform hover:scale-105"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
