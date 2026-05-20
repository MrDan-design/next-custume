'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState('overview');
  const [userName] = useState('Daniel');

  const upcomingSessions = [
    { id: 1, type: 'Interview Prep', mentor: 'Sarah Chen', date: '2026-05-25', time: '2:00 PM', status: 'Confirmed' },
    { id: 2, type: 'Mentoring', mentor: 'James Mitchell', date: '2026-05-27', time: '3:30 PM', status: 'Confirmed' },
    { id: 3, type: 'Coaching Session', mentor: 'Victoria Hayes', date: '2026-06-01', time: '10:00 AM', status: 'Pending' },
  ];

  const purchasedTools = [
    { id: 1, name: 'Resume Builder Pro', purchased: '2026-05-10', status: 'Active' },
    { id: 2, name: 'Interview Question Bank', purchased: '2026-05-15', status: 'Active' },
    { id: 3, name: 'LinkedIn Optimizer', purchased: '2026-05-18', status: 'Active' },
  ];

  const learningPath = [
    { week: 'Week 1-2', topic: 'Interview Fundamentals', completed: true },
    { week: 'Week 3-4', topic: 'Technical Deep Dive', completed: true },
    { week: 'Week 5-6', topic: 'Behavioral Mastery', completed: false },
    { week: 'Week 7-8', topic: 'Advanced Strategies', completed: false },
  ];

  const stats = [
    { label: 'Interview Sessions', value: '12', icon: '💼' },
    { label: 'Hours Mentored', value: '24', icon: '⏱️' },
    { label: 'Tools Purchased', value: '3', icon: '🛠️' },
    { label: 'Courses Completed', value: '2', icon: '🎓' },
  ];

  return (
    <div className="w-full">
      {/* Header */}
      <section className="bg-gradient-to-r from-slate-900 to-purple-900 text-white py-12 px-4">
        <div className="container mx-auto max-w-7xl">
          <h1 className="text-4xl font-bold mb-2">Welcome back, {userName}!</h1>
          <p className="text-gray-300">Continue your career development journey</p>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-12 px-4 bg-white border-b">
        <div className="container mx-auto max-w-7xl">
          <div className="grid md:grid-cols-4 gap-6">
            {stats.map((stat, idx) => (
              <div key={idx} className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-lg p-6 border border-gray-200">
                <div className="text-4xl mb-3">{stat.icon}</div>
                <p className="text-gray-600 text-sm">{stat.label}</p>
                <p className="text-3xl font-bold text-slate-900">{stat.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 px-4 bg-gray-50 min-h-screen">
        <div className="container mx-auto max-w-7xl">
          {/* Tabs */}
          <div className="flex gap-4 mb-8 border-b bg-white p-4 rounded-lg">
            {['overview', 'sessions', 'tools', 'progress'].map(tab => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-2 font-semibold capitalize transition ${
                  activeTab === tab
                    ? 'text-purple-600 border-b-2 border-purple-600'
                    : 'text-gray-600 hover:text-slate-900'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Overview Tab */}
          {activeTab === 'overview' && (
            <div className="grid md:grid-cols-3 gap-8">
              {/* Upcoming Sessions */}
              <div className="md:col-span-2">
                <div className="bg-white rounded-lg border border-gray-200 p-8">
                  <h2 className="text-2xl font-bold mb-6 text-slate-900">Upcoming Sessions</h2>
                  <div className="space-y-4">
                    {upcomingSessions.map(session => (
                      <div key={session.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg border border-gray-200 hover:border-purple-500 transition">
                        <div>
                          <p className="font-bold text-slate-900">{session.type}</p>
                          <p className="text-sm text-gray-600">With {session.mentor}</p>
                          <p className="text-sm text-gray-600">{session.date} at {session.time}</p>
                        </div>
                        <div>
                          <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                            session.status === 'Confirmed'
                              ? 'bg-green-100 text-green-800'
                              : 'bg-yellow-100 text-yellow-800'
                          }`}>
                            {session.status}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                  <Link href="/mentoring" className="block mt-6 bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-lg text-center transition">
                    Book More Sessions
                  </Link>
                </div>
              </div>

              {/* Recommendations */}
              <div>
                <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-lg border-2 border-purple-200 p-8">
                  <h2 className="text-xl font-bold mb-6 text-slate-900">Recommended For You</h2>
                  <div className="space-y-4">
                    <Link href="/marketplace" className="block p-4 bg-white rounded-lg border border-gray-200 hover:border-purple-500 transition">
                      <p className="font-semibold text-slate-900">System Design Master</p>
                      <p className="text-sm text-gray-600 mt-1">Based on your interviews</p>
                      <p className="text-purple-600 font-bold text-sm mt-2">$79.99</p>
                    </Link>
                    <Link href="/coaching" className="block p-4 bg-white rounded-lg border border-gray-200 hover:border-purple-500 transition">
                      <p className="font-semibold text-slate-900">Leadership Coaching</p>
                      <p className="text-sm text-gray-600 mt-1">Next growth step</p>
                      <p className="text-purple-600 font-bold text-sm mt-2">$2,500</p>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Sessions Tab */}
          {activeTab === 'sessions' && (
            <div className="bg-white rounded-lg border border-gray-200 p-8">
              <h2 className="text-2xl font-bold mb-8 text-slate-900">Your Sessions</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="font-bold text-lg text-slate-900 mb-4">Completed Sessions</h3>
                  <div className="space-y-3">
                    {[
                      { type: 'Interview Prep', mentor: 'Sarah Chen', date: '2026-05-10', rating: 5 },
                      { type: 'Mentoring', mentor: 'James Mitchell', date: '2026-05-12', rating: 5 },
                      { type: 'Coaching', mentor: 'Victoria Hayes', date: '2026-05-15', rating: 4 },
                    ].map((session, idx) => (
                      <div key={idx} className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                        <div className="flex justify-between items-start">
                          <div>
                            <p className="font-semibold text-slate-900">{session.type}</p>
                            <p className="text-sm text-gray-600">With {session.mentor}</p>
                            <p className="text-sm text-gray-600">Completed on {session.date}</p>
                          </div>
                          <div className="text-yellow-500 text-lg">{'⭐'.repeat(session.rating)}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Tools Tab */}
          {activeTab === 'tools' && (
            <div className="bg-white rounded-lg border border-gray-200 p-8">
              <h2 className="text-2xl font-bold mb-8 text-slate-900">Your Tools</h2>
              <div className="space-y-4">
                {purchasedTools.map(tool => (
                  <div key={tool.id} className="flex items-center justify-between p-6 bg-gray-50 rounded-lg border border-gray-200 hover:border-purple-500 transition">
                    <div>
                      <p className="font-bold text-slate-900">{tool.name}</p>
                      <p className="text-sm text-gray-600">Purchased: {tool.purchased}</p>
                    </div>
                    <div className="flex gap-4">
                      <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
                        {tool.status}
                      </span>
                      <Link href="/marketplace" className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg font-semibold transition">
                        Use Tool
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
              <Link href="/marketplace" className="block mt-8 w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 rounded-lg text-center transition">
                Browse More Tools
              </Link>
            </div>
          )}

          {/* Progress Tab */}
          {activeTab === 'progress' && (
            <div className="bg-white rounded-lg border border-gray-200 p-8">
              <h2 className="text-2xl font-bold mb-8 text-slate-900">Your Learning Path</h2>
              <div className="space-y-6">
                {learningPath.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-6">
                    <div className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg ${
                      item.completed
                        ? 'bg-green-100 text-green-700'
                        : 'bg-gray-200 text-gray-700'
                    }`}>
                      {item.completed ? '✓' : idx + 1}
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold text-slate-900">{item.week}</p>
                      <p className="text-gray-600">{item.topic}</p>
                    </div>
                    {item.completed && (
                      <button className="bg-green-100 text-green-700 px-4 py-2 rounded-lg font-semibold">
                        Completed
                      </button>
                    )}
                  </div>
                ))}
              </div>
              <div className="mt-8 p-6 bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg border-2 border-purple-200">
                <p className="font-bold text-slate-900 mb-2">You&apos;re on track!</p>
                <p className="text-gray-700">Keep up the great progress. You&apos;re 50% through your learning path.</p>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-12 px-4">
        <div className="container mx-auto max-w-7xl text-center">
          <h2 className="text-3xl font-bold mb-4">Need Additional Support?</h2>
          <p className="text-gray-100 mb-6">Connect with a mentor or book a coaching session to accelerate your progress</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/mentoring" className="bg-white text-purple-600 hover:bg-gray-100 font-bold py-3 px-8 rounded-lg transition">
              Find Mentor
            </Link>
            <Link href="/coaching" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-purple-600 font-bold py-3 px-8 rounded-lg transition">
              Book Coach
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
