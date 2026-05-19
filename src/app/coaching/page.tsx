'use client';

import Link from 'next/link';

export default function CoachingPage() {
  const coachingPrograms = [
    {
      id: 1,
      title: 'Leadership Excellence',
      description: 'Develop executive presence and leadership skills',
      duration: '12 weeks',
      price: '$2,500',
      image: '👑',
      features: [
        'Weekly 1-on-1 coaching sessions',
        'Leadership assessment and feedback',
        'Strategic thinking workshops',
        'Team dynamics training',
        'Executive communication skills',
        'Personal development plan'
      ]
    },
    {
      id: 2,
      title: 'Communication Mastery',
      description: 'Master public speaking and professional communication',
      duration: '8 weeks',
      price: '$1,800',
      image: '🗣️',
      features: [
        'Presentation skills training',
        'Storytelling techniques',
        'Difficult conversation coaching',
        'Negotiation skills',
        'Recorded feedback sessions',
        'Practice opportunities'
      ]
    },
    {
      id: 3,
      title: 'Career Transition Coach',
      description: 'Successfully navigate career changes and pivots',
      duration: '10 weeks',
      price: '$2,200',
      image: '🔄',
      features: [
        'Career assessment and planning',
        'Resume and LinkedIn optimization',
        'Industry research support',
        'Network building strategies',
        'Interview preparation',
        'Success tracking'
      ]
    },
    {
      id: 4,
      title: 'Executive Presence',
      description: 'Build confidence and authority in your role',
      duration: '6 weeks',
      price: '$1,500',
      image: '💼',
      features: [
        'Personal brand development',
        'Confidence building exercises',
        'Presence coaching',
        'Emotional intelligence training',
        'Impact assessment',
        'Action planning'
      ]
    },
    {
      id: 5,
      title: 'Work-Life Balance Coach',
      description: 'Achieve success without burnout',
      duration: '8 weeks',
      price: '$1,600',
      image: '⚖️',
      features: [
        'Stress management techniques',
        'Boundary setting strategies',
        'Time management optimization',
        'Wellness planning',
        'Energy management',
        'Long-term sustainability'
      ]
    },
    {
      id: 6,
      title: 'Startup Founder Coach',
      description: 'Build and scale your startup successfully',
      duration: '16 weeks',
      price: '$3,500',
      image: '🚀',
      features: [
        'Business strategy coaching',
        'Team building guidance',
        'Fundraising preparation',
        'Growth strategies',
        'Decision-making framework',
        'Investor pitch coaching'
      ]
    }
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-600 to-red-600 text-white py-16 px-4">
        <div className="container mx-auto max-w-7xl">
          <h1 className="text-5xl font-bold mb-6">Professional Coaching</h1>
          <p className="text-xl text-gray-100 max-w-2xl">Transform your career and life with intensive coaching programs designed for lasting change and measurable results.</p>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-4xl font-bold text-center mb-16 text-slate-900">Why Professional Coaching?</h2>
          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <div className="text-5xl mb-4">🎓</div>
              <h3 className="text-2xl font-bold mb-4 text-slate-900">Accelerated Growth</h3>
              <p className="text-gray-600">Achieve in months what might take years on your own. Get focused guidance and accountability.</p>
            </div>
            <div>
              <div className="text-5xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold mb-4 text-slate-900">Self-Discovery</h3>
              <p className="text-gray-600">Uncover blind spots and unlock your full potential through expert coaching and feedback.</p>
            </div>
            <div>
              <div className="text-5xl mb-4">📊</div>
              <h3 className="text-2xl font-bold mb-4 text-slate-900">Measurable Results</h3>
              <p className="text-gray-600">Track progress with clear metrics and see tangible improvements in all areas of your career.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Coaching Programs */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-4xl font-bold text-center mb-16 text-slate-900">Our Coaching Programs</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coachingPrograms.map(program => (
              <div key={program.id} className="bg-white rounded-lg border-2 border-gray-200 hover:border-orange-500 hover:shadow-lg transition overflow-hidden">
                <div className="bg-gradient-to-r from-orange-100 to-red-100 p-8 text-center">
                  <div className="text-6xl">{program.image}</div>
                </div>

                <div className="p-8">
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">{program.title}</h3>
                  <p className="text-gray-600 mb-6">{program.description}</p>

                  <div className="flex justify-between items-center mb-6 py-4 border-y">
                    <div>
                      <p className="text-sm text-gray-600">Duration</p>
                      <p className="font-bold text-slate-900">{program.duration}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-gray-600">Investment</p>
                      <p className="text-2xl font-bold text-orange-600">{program.price}</p>
                    </div>
                  </div>

                  <div className="mb-6">
                    <p className="font-semibold text-slate-900 mb-3">Program Includes:</p>
                    <ul className="space-y-2">
                      {program.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start text-sm text-gray-600">
                          <span className="text-orange-500 mr-2 mt-1">✓</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link href="/dashboard" className="w-full bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 rounded-lg text-center transition block">
                    Enroll Now
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Coaching Process */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-4xl font-bold text-center mb-16 text-slate-900">The Coaching Process</h2>
          <div className="max-w-4xl mx-auto">
            {[
              {
                phase: 'Assessment',
                description: 'We start by understanding your goals, challenges, and current situation through in-depth discovery conversations.'
              },
              {
                phase: 'Planning',
                description: 'Together, we create a detailed action plan with clear milestones and strategies tailored to your unique needs.'
              },
              {
                phase: 'Implementation',
                description: 'You implement the strategies with regular support, accountability, and real-time feedback from your coach.'
              },
              {
                phase: 'Evaluation',
                description: 'We track progress, celebrate wins, and adjust strategies as needed to ensure continuous improvement.'
              }
            ].map((item, idx) => (
              <div key={idx} className="mb-8 flex gap-6">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-orange-600 text-white font-bold text-lg">
                    {idx + 1}
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{item.phase}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Coaches Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-4xl font-bold text-center mb-16 text-slate-900">Our Expert Coaches</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                name: 'Victoria Hayes',
                title: 'Executive Coach & Leadership Expert',
                certs: 'ICF Certified | MBA | 15+ years experience',
                specialties: 'Leadership, Executive Presence, Teams'
              },
              {
                name: 'Robert Chen',
                title: 'Career & Communication Coach',
                certs: 'Certified Coach | Former Fortune 500 Executive',
                specialties: 'Career Transitions, Communication, Negotiation'
              },
              {
                name: 'Priya Sharma',
                title: 'Life & Work-Life Balance Coach',
                certs: 'Wellness Coach Certification | Psychology Background',
                specialties: 'Burnout Prevention, Work-Life Balance, Wellness'
              },
              {
                name: 'Marcus Johnson',
                title: 'Business & Startup Coach',
                certs: 'Startup Advisor | Serial Entrepreneur',
                specialties: 'Startup Growth, Fundraising, Business Strategy'
              }
            ].map((coach, idx) => (
              <div key={idx} className="bg-white rounded-lg p-8 border border-orange-200">
                <h3 className="text-xl font-bold text-slate-900 mb-1">{coach.name}</h3>
                <p className="text-orange-600 font-semibold mb-2">{coach.title}</p>
                <p className="text-sm text-gray-600 mb-4">{coach.certs}</p>
                <p className="text-gray-700"><span className="font-semibold">Specialties:</span> {coach.specialties}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-orange-600 to-red-600 text-white py-16 px-4">
        <div className="container mx-auto max-w-7xl text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Career?</h2>
          <p className="text-xl mb-8 text-gray-100">Start your coaching journey with a free consultation</p>
          <Link href="/dashboard" className="bg-white text-orange-600 hover:bg-gray-100 font-bold py-3 px-8 rounded-lg inline-block transition">
            Schedule Consultation
          </Link>
        </div>
      </section>
    </div>
  );
}
