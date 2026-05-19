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
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 text-white py-32 px-4 md:px-0">
        <div className="container mx-auto max-w-7xl">
          <div className="grid md:grid-cols-2 gap-20 items-center">
            <div>
              <h1 className="text-6xl md:text-7xl font-bold mb-8 leading-tight">
                Master Your Career Path
              </h1>
              <p className="text-2xl text-gray-300 mb-12 leading-relaxed">
                Get expert guidance through interviews, personalized mentoring, and professional coaching. Access premium tools designed for career excellence.
              </p>
              <div className="flex flex-col sm:flex-row gap-6">
                <Link href="/interviews" className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-4 px-10 rounded-lg text-center transition text-lg">
                  Start Interviewing
                </Link>
                <Link href="/mentoring" className="bg-white text-purple-900 hover:bg-gray-100 font-bold py-4 px-10 rounded-lg text-center transition text-lg">
                  Get Mentoring
                </Link>
              </div>
            </div>
            <div className="relative h-96 hidden md:block">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 rounded-lg opacity-20 blur-2xl"></div>
              <div className="relative bg-gradient-to-br from-purple-400 to-pink-400 rounded-lg h-full flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-4">🚀</div>
                  <p className="text-white font-bold">Career Growth Starts Here</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Overview */}
      <section className="py-32 px-4 bg-white">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-5xl font-bold text-center mb-24 text-slate-900">Our Services</h2>
          <div className="grid md:grid-cols-3 gap-12">
            {/* Interviews Card */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-12 hover:shadow-2xl transition transform hover:scale-105 duration-300">
              <div className="text-7xl mb-6">💼</div>
              <h3 className="text-3xl font-bold mb-6 text-slate-900">Interview Prep</h3>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Prepare for technical and behavioral interviews with real-world scenarios, expert feedback, and personalized coaching.
              </p>
              <ul className="text-base text-gray-600 space-y-3">
                <li>✓ Mock interviews</li>
                <li>✓ Technical assessments</li>
                <li>✓ Behavioral coaching</li>
                <li>✓ Resume review</li>
              </ul>
            </div>

            {/* Mentoring Card */}
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-12 hover:shadow-2xl transition transform hover:scale-105 duration-300">
              <div className="text-7xl mb-6">🎓</div>
              <h3 className="text-3xl font-bold mb-6 text-slate-900">Mentoring</h3>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Connect with experienced professionals who guide your career growth, share insights, and help you navigate challenges.
              </p>
              <ul className="text-base text-gray-600 space-y-3">
                <li>✓ 1-on-1 mentorship</li>
                <li>✓ Career guidance</li>
                <li>✓ Skill development</li>
                <li>✓ Networking opportunities</li>
              </ul>
            </div>

            {/* Coaching Card */}
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-12 hover:shadow-2xl transition transform hover:scale-105 duration-300">
              <div className="text-7xl mb-6">🏆</div>
              <h3 className="text-3xl font-bold mb-6 text-slate-900">Professional Coaching</h3>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Accelerate your success with intensive coaching programs covering leadership, communication, and career strategy.
              </p>
              <ul className="text-base text-gray-600 space-y-3">
                <li>✓ Leadership coaching</li>
                <li>✓ Communication skills</li>
                <li>✓ Career strategy</li>
                <li>✓ Performance optimization</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-32 px-4 bg-slate-50">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-5xl font-bold text-center mb-24 text-slate-900">Why Choose CareerMentor?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
            <div className="text-center p-10 bg-white rounded-2xl border-2 border-gray-100 hover:border-purple-300 transition">
              <div className="text-6xl mb-6">👥</div>
              <h4 className="font-bold text-2xl mb-4 text-slate-900">Expert Mentors</h4>
              <p className="text-lg text-gray-600">Industry professionals with 10+ years of experience</p>
            </div>
            <div className="text-center p-10 bg-white rounded-2xl border-2 border-gray-100 hover:border-purple-300 transition">
              <div className="text-6xl mb-6">📊</div>
              <h4 className="font-bold text-2xl mb-4 text-slate-900">Proven Results</h4>
              <p className="text-lg text-gray-600">95% success rate in interview preparation</p>
            </div>
            <div className="text-center p-10 bg-white rounded-2xl border-2 border-gray-100 hover:border-purple-300 transition">
              <div className="text-6xl mb-6">🛠️</div>
              <h4 className="font-bold text-2xl mb-4 text-slate-900">Premium Tools</h4>
              <p className="text-lg text-gray-600">Access exclusive tools in our marketplace</p>
            </div>
            <div className="text-center p-10 bg-white rounded-2xl border-2 border-gray-100 hover:border-purple-300 transition">
              <div className="text-6xl mb-6">⏱️</div>
              <h4 className="font-bold text-2xl mb-4 text-slate-900">24/7 Support</h4>
              <p className="text-lg text-gray-600">Round-the-clock assistance and resources</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-32 px-4 bg-white">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-5xl font-bold text-center mb-24 text-slate-900">What Our Users Say</h2>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                name: "Sarah Johnson",
                role: "Software Engineer at Google",
                text: "CareerMentor helped me land my dream job at Google. The interview prep was invaluable!",
                rating: 5
              },
              {
                name: "Michael Chen",
                role: "Product Manager at Microsoft",
                text: "The mentoring sessions accelerated my career growth by 2 years. Highly recommended!",
                rating: 5
              },
              {
                name: "Emily Rodriguez",
                role: "UX Designer at Apple",
                text: "Professional coaching transformed my leadership skills and communication abilities.",
                rating: 5
              }
            ].map((testimonial, idx) => (
              <div key={idx} className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl p-12 border-2 border-gray-200 hover:border-purple-400 transition">
                <div className="mb-6 text-2xl">{'⭐'.repeat(testimonial.rating)}</div>
                <p className="text-lg text-gray-700 mb-8 italic leading-relaxed">&ldquo;{testimonial.text}&rdquo;</p>
                <div className="border-t pt-6">
                  <p className="font-bold text-lg text-slate-900">{testimonial.name}</p>
                  <p className="text-base text-gray-600 mt-2">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-20 px-4">
        <div className="container mx-auto max-w-7xl text-center">
          <h2 className="text-5xl font-bold mb-8">Ready to Transform Your Career?</h2>
          <p className="text-2xl mb-12 text-gray-100">Join thousands of professionals who&apos;ve advanced their careers with CareerMentor</p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link href="/marketplace" className="bg-white text-purple-600 hover:bg-gray-100 font-bold py-4 px-10 rounded-lg transition text-lg">
              Explore Tools
            </Link>
            <Link href="/dashboard" className="bg-purple-700 hover:bg-purple-800 font-bold py-4 px-10 rounded-lg transition border-2 border-white text-lg">
              Get Started
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-32 px-4 bg-slate-900 text-white">
        <div className="container mx-auto max-w-2xl">
          <h2 className="text-5xl font-bold text-center mb-8">Stay Updated</h2>
          <p className="text-center text-gray-300 mb-12 text-lg">Get career tips, job opportunities, and exclusive offers delivered to your inbox</p>
          <form onSubmit={handleNewsletterSignup} className="flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1 px-6 py-4 rounded-lg text-slate-900 text-lg"
            />
            <button type="submit" className="bg-purple-600 hover:bg-purple-700 font-bold px-10 py-4 rounded-lg transition text-lg">
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
