'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function InterviewsPage() {
  const [selectedLevel, setSelectedLevel] = useState('all');

  const interviewTypes = [
    {
      id: 1,
      title: 'Technical Interview Prep',
      description: 'Master coding problems, system design, and technical concepts',
      level: 'advanced',
      price: '$99',
      duration: '8 weeks',
      includes: ['Live coding sessions', 'Algorithm practice', 'System design', 'Mock interviews'],
      icon: '💻'
    },
    {
      id: 2,
      title: 'Behavioral Interview Mastery',
      description: 'Learn to tell compelling stories and ace behavioral questions',
      level: 'intermediate',
      price: '$49',
      duration: '4 weeks',
      includes: ['STAR method training', 'Story crafting', 'Real scenarios', 'Q&A preparation'],
      icon: '🎭'
    },
    {
      id: 3,
      title: 'HR Interview Preparation',
      description: 'Get ready for initial HR screening and assessment',
      level: 'beginner',
      price: '$29',
      duration: '2 weeks',
      includes: ['Common questions', 'Salary negotiation', 'Company research', 'Follow-up tips'],
      icon: '📋'
    },
    {
      id: 4,
      title: 'Executive Interview Coaching',
      description: 'Prepare for leadership and executive level positions',
      level: 'advanced',
      price: '$199',
      duration: '12 weeks',
      includes: ['1-on-1 coaching', 'Leadership questions', 'Negotiation skills', 'Board-level prep'],
      icon: '👔'
    },
    {
      id: 5,
      title: 'Product Manager Interview',
      description: 'Crack PM interviews with product thinking frameworks',
      level: 'intermediate',
      price: '$79',
      duration: '6 weeks',
      includes: ['Product strategy', 'Metrics & analytics', 'Mock interviews', 'Case studies'],
      icon: '📊'
    },
    {
      id: 6,
      title: 'Design Interview Workshop',
      description: 'Showcase your design skills and creative thinking',
      level: 'intermediate',
      price: '$69',
      duration: '5 weeks',
      includes: ['Portfolio review', 'Design challenges', 'Presentation skills', 'Feedback sessions'],
      icon: '🎨'
    }
  ];

  const filteredInterviews = selectedLevel === 'all' 
    ? interviewTypes 
    : interviewTypes.filter(interview => interview.level === selectedLevel);

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16 px-4">
        <div className="container mx-auto max-w-7xl">
          <h1 className="text-5xl font-bold mb-6">Interview Preparation</h1>
          <p className="text-xl text-gray-100 max-w-2xl">Master every type of interview with our expert-led preparation programs. Get hired at top tech companies.</p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-2xl font-bold mb-8 text-slate-900">Choose Your Interview Type</h2>
          <div className="flex flex-wrap gap-4">
            {['all', 'beginner', 'intermediate', 'advanced'].map(level => (
              <button
                key={level}
                onClick={() => setSelectedLevel(level)}
                className={`px-6 py-2 rounded-lg font-semibold transition ${
                  selectedLevel === level
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-slate-900 border-2 border-gray-300 hover:border-blue-600'
                }`}
              >
                {level.charAt(0).toUpperCase() + level.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Interview Programs Grid */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredInterviews.map(program => (
              <div key={program.id} className="bg-white rounded-lg border-2 border-gray-200 hover:border-blue-500 hover:shadow-lg transition p-8">
                <div className="text-5xl mb-4">{program.icon}</div>
                <h3 className="text-2xl font-bold mb-2 text-slate-900">{program.title}</h3>
                <p className="text-gray-600 mb-4">{program.description}</p>
                
                <div className="flex justify-between items-center mb-6 py-4 border-y">
                  <div>
                    <p className="text-sm text-gray-600">Duration</p>
                    <p className="font-bold text-slate-900">{program.duration}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-gray-600">Price</p>
                    <p className="text-3xl font-bold text-blue-600">{program.price}</p>
                  </div>
                </div>

                <div className="mb-6">
                  <p className="font-semibold text-slate-900 mb-3">Includes:</p>
                  <ul className="space-y-2">
                    {program.includes.map((item, idx) => (
                      <li key={idx} className="flex items-center text-gray-600">
                        <span className="text-green-500 mr-2">✓</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <Link href="/dashboard" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg text-center transition block">
                  Enroll Now
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 px-4 bg-slate-50">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-4xl font-bold text-center mb-16 text-slate-900">Success Stories</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { company: 'Google', role: 'Software Engineer', user: 'Alex P.', improvement: '3 months to offer' },
              { company: 'Microsoft', role: 'Product Manager', user: 'Jamie L.', improvement: '5 weeks to offer' },
              { company: 'Apple', role: 'Senior Engineer', user: 'Morgan T.', improvement: '2 months to offer' }
            ].map((story, idx) => (
              <div key={idx} className="bg-white rounded-lg p-8 border border-gray-200">
                <p className="text-2xl font-bold text-blue-600 mb-2">{story.company}</p>
                <p className="text-gray-600 mb-4">{story.role}</p>
                <p className="font-semibold text-slate-900 mb-2">{story.user}</p>
                <p className="text-sm text-green-600 font-semibold">{story.improvement}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 text-white py-16 px-4">
        <div className="container mx-auto max-w-7xl text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Ace Your Interviews?</h2>
          <p className="text-xl mb-8 text-gray-100">Start with a free consultation with one of our expert coaches</p>
          <Link href="/dashboard" className="bg-white text-blue-600 hover:bg-gray-100 font-bold py-3 px-8 rounded-lg inline-block transition">
            Book Free Session
          </Link>
        </div>
      </section>
    </div>
  );
}
