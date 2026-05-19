'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="gradient-primary w-10 h-10 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">CM</span>
            </div>
            <span className="text-xl font-bold text-gray-900">CareerMentor</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/interviews" className="text-gray-700 hover:text-blue-600 transition">
              Interviews
            </Link>
            <Link href="/mentoring" className="text-gray-700 hover:text-blue-600 transition">
              Mentoring
            </Link>
            <Link href="/coaching" className="text-gray-700 hover:text-blue-600 transition">
              Coaching
            </Link>
            <Link href="/marketplace" className="text-gray-700 hover:text-blue-600 transition">
              Marketplace
            </Link>
            <Link href="/dashboard" className="text-gray-700 hover:text-blue-600 transition">
              Dashboard
            </Link>
          </div>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <Link href="/login" className="text-gray-700 hover:text-blue-600 transition">
              Login
            </Link>
            <Link href="/signup" className="btn-primary">
              Sign Up
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden pb-4 border-t">
            <Link href="/interviews" className="block py-2 text-gray-700 hover:text-blue-600">
              Interviews
            </Link>
            <Link href="/mentoring" className="block py-2 text-gray-700 hover:text-blue-600">
              Mentoring
            </Link>
            <Link href="/coaching" className="block py-2 text-gray-700 hover:text-blue-600">
              Coaching
            </Link>
            <Link href="/marketplace" className="block py-2 text-gray-700 hover:text-blue-600">
              Marketplace
            </Link>
            <Link href="/dashboard" className="block py-2 text-gray-700 hover:text-blue-600">
              Dashboard
            </Link>
            <div className="pt-4 border-t flex flex-col gap-2">
              <Link href="/login" className="text-center text-gray-700 hover:text-blue-600">
                Login
              </Link>
              <Link href="/signup" className="btn-primary text-center">
                Sign Up
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
