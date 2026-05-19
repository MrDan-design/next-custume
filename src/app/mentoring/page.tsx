'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function MentoringPage() {
  const [selectedSpecialty, setSelectedSpecialty] = useState('all');

  const mentors = [
    {
      id: 1,
      name: 'Dr. Sarah Chen',
      title: 'Senior Tech Lead at Google',
      specialty: 'tech',
      experience: '12+ years',
      bio: 'Expert in system design and career progression in tech',
      students: 500,
      rating: 4.9,
      price: '$150/hour',
      image: '👩‍💻'
    },
    {
      id: 2,
      name: 'James Mitchell',
      title: 'VP Product at Microsoft',
      specialty: 'product',
      experience: '15+ years',
      bio: 'Product strategy and leadership development specialist',
      students: 320,
      rating: 4.8,
      price: '$200/hour',
      image: '👨‍💼'
    },
    {
      id: 3,
      name: 'Lisa Rodriguez',
      title: 'Design Director at Apple',
      specialty: 'design',
      experience: '10+ years',
      bio: 'UX/UI design mentoring and creative leadership',
      students: 280,
      rating: 4.9,
      price: '$180/hour',
      image: '👩‍🎨'
    },
    {
      id: 4,
      name: 'Michael Johnson',
      title: 'CEO of TechStartup',
      specialty: 'startup',
      experience: '20+ years',
      bio: 'Entrepreneurship and startup growth mentoring',
      students: 150,
      rating: 4.7,
      price: '$250/hour',
      image: '👨‍🚀'
    },
    {
      id: 5,
      name: 'Emma Thompson',
      title: 'Data Science Manager at Amazon',
      specialty: 'data',
      experience: '8+ years',
      bio: 'Data science and machine learning career guidance',
      students: 420,
      rating: 4.8,
      price: '$140/hour',
      image: '👩‍🔬'
    },
    {
      id: 6,
      name: 'David Lee',
      title: 'Engineering Manager at Meta',
      specialty: 'tech',
      experience: '11+ years',
      bio: 'Engineering management and team leadership',
      students: 380,
      rating: 4.9,
      price: '$160/hour',
      image: '👨‍💻'
    }
  ];

  const filteredMentors = selectedSpecialty === 'all'
    ? mentors
    : mentors.filter(mentor => mentor.specialty === selectedSpecialty);

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-emerald-600 text-white py-16 px-4">
        <div className="container mx-auto max-w-7xl">
          <h1 className="text-5xl font-bold mb-6">Professional Mentoring</h1>
          <p className="text-xl text-gray-100 max-w-2xl">Get paired with industry experts who are invested in your success. Accelerate your career growth through personalized mentorship.</p>
        </div>
      </section>

      {/* Why Mentoring Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-4xl font-bold text-center mb-16 text-slate-900">Why Choose Mentoring?</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl mb-4">🎯</div>
              <h3 className="font-bold text-lg mb-2 text-slate-900">Clear Direction</h3>
              <p className="text-gray-600">Get clarity on your career path and next steps</p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">💡</div>
              <h3 className="font-bold text-lg mb-2 text-slate-900">Industry Insights</h3>
              <p className="text-gray-600">Learn insider knowledge from experts in your field</p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">🤝</div>
              <h3 className="font-bold text-lg mb-2 text-slate-900">Network Building</h3>
              <p className="text-gray-600">Expand your professional network with top leaders</p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">📈</div>
              <h3 className="font-bold text-lg mb-2 text-slate-900">Faster Growth</h3>
              <p className="text-gray-600">Accelerate your career progression significantly</p>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-2xl font-bold mb-8 text-slate-900">Find Your Mentor by Specialty</h2>
          <div className="flex flex-wrap gap-4">
            {['all', 'tech', 'product', 'design', 'startup', 'data'].map(specialty => (
              <button
                key={specialty}
                onClick={() => setSelectedSpecialty(specialty)}
                className={`px-6 py-2 rounded-lg font-semibold transition capitalize ${
                  selectedSpecialty === specialty
                    ? 'bg-green-600 text-white'
                    : 'bg-white text-slate-900 border-2 border-gray-300 hover:border-green-600'
                }`}
              >
                {specialty}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Mentors Grid */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredMentors.map(mentor => (
              <div key={mentor.id} className="bg-white rounded-lg border-2 border-gray-200 hover:border-green-500 hover:shadow-lg transition overflow-hidden">
                <div className="bg-gradient-to-r from-green-100 to-emerald-100 p-8 text-center">
                  <div className="text-7xl mb-4">{mentor.image}</div>
                </div>
                
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-slate-900 mb-1">{mentor.name}</h3>
                  <p className="text-green-600 font-semibold mb-2">{mentor.title}</p>
                  <p className="text-gray-600 text-sm mb-4">{mentor.bio}</p>

                  <div className="grid grid-cols-2 gap-4 mb-6 py-4 border-y">
                    <div>
                      <p className="text-xs text-gray-600">Experience</p>
                      <p className="font-bold text-slate-900">{mentor.experience}</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-600">Students</p>
                      <p className="font-bold text-slate-900">{mentor.students}+</p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <p className="text-sm font-semibold text-slate-900">Rating</p>
                      <p className="text-yellow-500">⭐ {mentor.rating}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-semibold text-slate-900">Rate</p>
                      <p className="text-2xl font-bold text-green-600">{mentor.price}</p>
                    </div>
                  </div>

                  <Link href="/dashboard" className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 rounded-lg text-center transition block">
                    Book Mentor
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-4 bg-slate-50">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-4xl font-bold text-center mb-16 text-slate-900">How Mentoring Works</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: '1', title: 'Browse Mentors', desc: 'Find mentors in your field or area of interest' },
              { step: '2', title: 'Schedule Session', desc: 'Book a time that works for both of you' },
              { step: '3', title: 'Have Conversation', desc: 'Get guidance and advice from experienced experts' },
              { step: '4', title: 'Track Progress', desc: 'Monitor your growth with regular check-ins' }
            ].map((item, idx) => (
              <div key={idx} className="text-center">
                <div className="bg-green-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  {item.step}
                </div>
                <h3 className="font-bold text-lg mb-2 text-slate-900">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-green-600 text-white py-16 px-4">
        <div className="container mx-auto max-w-7xl text-center">
          <h2 className="text-4xl font-bold mb-6">Start Your Mentoring Journey</h2>
          <p className="text-xl mb-8 text-gray-100">Get paired with the right mentor in minutes</p>
          <Link href="/dashboard" className="bg-white text-green-600 hover:bg-gray-100 font-bold py-3 px-8 rounded-lg inline-block transition">
            Find Your Mentor
          </Link>
        </div>
      </section>
    </div>
  );
}
