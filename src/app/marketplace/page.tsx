'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function MarketplacePage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('popular');

  const tools = [
    {
      id: 1,
      name: 'Resume Builder Pro',
      category: 'resume',
      price: '$49.99',
      rating: 4.9,
      reviews: 2500,
      description: 'AI-powered resume builder with ATS optimization. Create professional resumes in minutes.',
      features: ['AI writing', 'ATS optimization', '50+ templates', 'Export options'],
      icon: '📄',
      image: 'Resume templates with AI assistance'
    },
    {
      id: 2,
      name: 'Interview Question Bank',
      category: 'interview',
      price: '$29.99',
      rating: 4.8,
      reviews: 1800,
      description: 'Database of 5000+ interview questions with detailed answers and explanations.',
      features: ['5000+ questions', 'Video solutions', 'Difficulty levels', 'Practice mode'],
      icon: '❓',
      image: 'Comprehensive interview question database'
    },
    {
      id: 3,
      name: 'LinkedIn Optimizer',
      category: 'networking',
      price: '$39.99',
      rating: 4.7,
      reviews: 1200,
      description: 'Optimize your LinkedIn profile to attract recruiters and land more interviews.',
      features: ['Profile audit', 'Keyword optimization', 'Headline suggestions', 'Analytics'],
      icon: '💼',
      image: 'LinkedIn profile optimization tool'
    },
    {
      id: 4,
      name: 'Salary Negotiation Guide',
      category: 'career',
      price: '$24.99',
      rating: 4.9,
      reviews: 890,
      description: 'Complete guide to negotiating your salary package successfully.',
      features: ['Industry data', 'Scripts', 'Negotiation tactics', 'Case studies'],
      icon: '💰',
      image: 'Salary negotiation resource'
    },
    {
      id: 5,
      name: 'Coding Challenge Platform',
      category: 'technical',
      price: '$99.99/month',
      rating: 4.8,
      reviews: 3200,
      description: 'Practice coding problems from top tech companies with real-time feedback.',
      features: ['1000+ problems', 'Company-specific', 'Video tutorials', 'Discussion forums'],
      icon: '💻',
      image: 'Coding practice platform'
    },
    {
      id: 6,
      name: 'Portfolio Builder',
      category: 'portfolio',
      price: '$59.99',
      rating: 4.7,
      reviews: 950,
      description: 'Create stunning portfolios that showcase your best work to potential employers.',
      features: ['Drag & drop editor', 'Responsive design', 'Custom domain', 'Analytics'],
      icon: '🎨',
      image: 'Portfolio creation tool'
    },
    {
      id: 7,
      name: 'Job Search Tracker',
      category: 'career',
      price: '$19.99',
      rating: 4.6,
      reviews: 1100,
      description: 'Organize and track all your job applications in one place.',
      features: ['Application tracking', 'Interview calendar', 'Follow-ups', 'Analytics'],
      icon: '📊',
      image: 'Job application tracking system'
    },
    {
      id: 8,
      name: 'Behavioral Interview Coach',
      category: 'interview',
      price: '$49.99',
      rating: 4.9,
      reviews: 2100,
      description: 'Master STAR method and behavioral interview questions with AI feedback.',
      features: ['STAR training', 'AI feedback', 'Practice sessions', 'Score tracking'],
      icon: '🎭',
      image: 'Behavioral interview preparation'
    },
    {
      id: 9,
      name: 'System Design Master',
      category: 'technical',
      price: '$79.99',
      rating: 4.8,
      reviews: 1600,
      description: 'Complete system design course with real interview scenarios.',
      features: ['Video lectures', '20+ systems', 'Interview prep', 'Code examples'],
      icon: '🏗️',
      image: 'System design learning platform'
    },
    {
      id: 10,
      name: 'Cover Letter Generator',
      category: 'resume',
      price: '$34.99',
      rating: 4.7,
      reviews: 1400,
      description: 'Generate personalized cover letters in seconds using AI.',
      features: ['AI generation', 'Customization', '30+ templates', 'Export options'],
      icon: '✍️',
      image: 'Cover letter generation tool'
    },
    {
      id: 11,
      name: 'Networking Master Class',
      category: 'networking',
      price: '$69.99',
      rating: 4.8,
      reviews: 980,
      description: 'Learn effective networking strategies from industry experts.',
      features: ['Video lessons', 'Templates', 'Email scripts', 'Follow-up systems'],
      icon: '🤝',
      image: 'Networking training course'
    },
    {
      id: 12,
      name: 'Career Path Planner',
      category: 'career',
      price: '$44.99',
      rating: 4.7,
      reviews: 1050,
      description: 'Plan your career trajectory and identify growth opportunities.',
      features: ['Career assessment', 'Path visualization', 'Skill gaps', 'Action plans'],
      icon: '🗺️',
      image: 'Career planning tool'
    }
  ];

  const categories = ['all', 'resume', 'interview', 'technical', 'networking', 'portfolio', 'career'];

  const filteredTools = selectedCategory === 'all'
    ? tools
    : tools.filter(tool => tool.category === selectedCategory);

  const sortedTools = [...filteredTools].sort((a, b) => {
    if (sortBy === 'price-low') return parseFloat(a.price) - parseFloat(b.price);
    if (sortBy === 'price-high') return parseFloat(b.price) - parseFloat(a.price);
    if (sortBy === 'rating') return b.rating - a.rating;
    return b.reviews - a.reviews; // popular
  });

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-pink-600 to-purple-600 text-white py-16 px-4">
        <div className="container mx-auto max-w-7xl">
          <h1 className="text-5xl font-bold mb-6">Career Tools Marketplace</h1>
          <p className="text-xl text-gray-100 max-w-2xl">Access 1000+ premium tools and resources to accelerate your career growth. Curated by industry experts.</p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 px-4 bg-white border-b">
        <div className="container mx-auto max-w-7xl">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Category Filter */}
            <div>
              <h3 className="font-bold text-slate-900 mb-4">Category</h3>
              <div className="flex flex-wrap gap-2">
                {categories.map(category => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-lg font-semibold transition capitalize ${
                      selectedCategory === category
                        ? 'bg-pink-600 text-white'
                        : 'bg-gray-100 text-slate-900 hover:bg-gray-200'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            {/* Sort */}
            <div>
              <h3 className="font-bold text-slate-900 mb-4">Sort By</h3>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-2 rounded-lg border-2 border-gray-300 text-slate-900 font-semibold"
              >
                <option value="popular">Most Popular</option>
                <option value="rating">Highest Rated</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Tools Grid */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-7xl">
          <p className="text-center text-gray-600 mb-12">Showing {sortedTools.length} tools</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sortedTools.map(tool => (
              <div key={tool.id} className="bg-white rounded-lg border-2 border-gray-200 hover:border-pink-500 hover:shadow-lg transition overflow-hidden">
                <div className="bg-gradient-to-r from-pink-100 to-purple-100 p-8 text-center">
                  <div className="text-6xl mb-2">{tool.icon}</div>
                  <p className="text-sm text-gray-600">{tool.image}</p>
                </div>

                <div className="p-8">
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{tool.name}</h3>
                  <p className="text-gray-600 text-sm mb-6">{tool.description}</p>

                  {/* Rating and Reviews */}
                  <div className="flex items-center justify-between mb-6 pb-6 border-b">
                    <div className="flex items-center gap-2">
                      <span className="text-yellow-500">⭐</span>
                      <span className="font-bold text-slate-900">{tool.rating}</span>
                      <span className="text-sm text-gray-600">({tool.reviews.toLocaleString()})</span>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-bold text-pink-600">{tool.price}</p>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="mb-6">
                    <p className="font-semibold text-slate-900 mb-3">Includes:</p>
                    <ul className="space-y-2">
                      {tool.features.slice(0, 3).map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-600">
                          <span className="text-pink-500 mr-2">✓</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link href="/dashboard" className="w-full bg-pink-600 hover:bg-pink-700 text-white font-bold py-3 rounded-lg text-center transition block">
                    Purchase Now
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bundle Offers */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-4xl font-bold text-center mb-16 text-slate-900">Money-Saving Bundles</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'Starter Bundle',
                price: '$99.99',
                value: '$244.95',
                savings: 'Save 59%',
                tools: ['Resume Builder Pro', 'Interview Question Bank', 'Job Search Tracker']
              },
              {
                name: 'Professional Bundle',
                price: '$199.99',
                value: '$534.94',
                savings: 'Save 63%',
                tools: ['All Starter tools', 'System Design Master', 'Behavioral Interview Coach', 'LinkedIn Optimizer'],
                featured: true
              },
              {
                name: 'Ultimate Bundle',
                price: '$399.99',
                value: '$1,299.84',
                savings: 'Save 69%',
                tools: ['All Professional tools', 'Networking Master Class', 'Career Path Planner', 'Portfolio Builder', 'Cover Letter Generator']
              }
            ].map((bundle, idx) => (
              <div key={idx} className={`rounded-lg p-8 border-2 transition ${bundle.featured ? 'border-pink-500 bg-gradient-to-br from-pink-50 to-purple-50 transform scale-105' : 'border-gray-200 bg-white'} hover:shadow-lg`}>
                {bundle.featured && (
                  <div className="bg-pink-600 text-white px-4 py-1 rounded-full inline-block mb-4 text-sm font-bold">
                    MOST POPULAR
                  </div>
                )}
                <h3 className="text-2xl font-bold text-slate-900 mb-2">{bundle.name}</h3>
                <p className="text-sm text-gray-600 mb-6">Limited time offer</p>

                <div className="mb-6">
                  <p className="text-4xl font-bold text-pink-600">{bundle.price}</p>
                  <p className="text-sm text-gray-600 line-through">{bundle.value}</p>
                  <p className="text-sm font-bold text-green-600 mt-2">{bundle.savings}</p>
                </div>

                <ul className="space-y-3 mb-8">
                  {bundle.tools.map((tool, i) => (
                    <li key={i} className="flex items-center text-gray-700">
                      <span className="text-pink-500 mr-2 text-xl">✓</span>
                      {tool}
                    </li>
                  ))}
                </ul>

                <Link href="/dashboard" className={`w-full font-bold py-3 rounded-lg text-center transition block ${bundle.featured ? 'bg-pink-600 hover:bg-pink-700 text-white' : 'bg-gray-100 hover:bg-gray-200 text-slate-900'}`}>
                  Get Bundle
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-pink-600 to-purple-600 text-white py-16 px-4">
        <div className="container mx-auto max-w-7xl text-center">
          <h2 className="text-4xl font-bold mb-6">All Tools Come with 30-Day Money Back Guarantee</h2>
          <p className="text-xl mb-8 text-gray-100">Not satisfied? Full refund, no questions asked.</p>
          <Link href="/dashboard" className="bg-white text-pink-600 hover:bg-gray-100 font-bold py-3 px-8 rounded-lg inline-block transition">
            Browse All Tools
          </Link>
        </div>
      </section>
    </div>
  );
}
