'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="gradient-primary w-10 h-10 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">CM</span>
              </div>
              <span className="text-xl font-bold">CareerMentor</span>
            </div>
            <p className="text-gray-400">
              Professional platform for career development, interviews, mentoring, and coaching.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-4">Services</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="/interviews" className="hover:text-white transition">
                  Interview Prep
                </Link>
              </li>
              <li>
                <Link href="/mentoring" className="hover:text-white transition">
                  Mentoring
                </Link>
              </li>
              <li>
                <Link href="/coaching" className="hover:text-white transition">
                  Coaching
                </Link>
              </li>
              <li>
                <Link href="/marketplace" className="hover:text-white transition">
                  Tools & Resources
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-bold mb-4">Resources</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="#" className="hover:text-white transition">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition">
                  Guide
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition">
                  Community
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contact</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Email: info@careermentor.com</li>
              <li>Phone: +1 (555) 123-4567</li>
              <li className="pt-4">
                <div className="flex gap-4">
                  <a href="#" className="hover:text-white transition">
                    LinkedIn
                  </a>
                  <a href="#" className="hover:text-white transition">
                    Twitter
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>&copy; 2026 CareerMentor. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
