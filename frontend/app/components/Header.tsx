'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hasShadow, setHasShadow] = useState(false);

  // Detect scroll to add shadow
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 5) {
        setHasShadow(true);
      } else {
        setHasShadow(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About us', href: '/about' },
    { name: 'Projects', href: '/projects' },
  ];

  return (
    <header
      className={`sticky top-0 z-50 w-full bg-white transition-shadow duration-300 ${
        hasShadow ? 'shadow-md' : 'shadow-none'
      }`}
    >
      <div className="flex items-center justify-between px-6 md:px-20 py-6 md:py-4">

        {/* Logo */}
        <div className="flex-shrink-0 z-50">
          <Link href="/">
            <Image
              src="/images/kazantaru.png"
              alt="Kazantaru Logo"
              width={180}
              height={60}
              className="h-12 md:h-14 w-auto object-contain"
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-12">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-base font-semibold uppercase tracking-wider text-slate-800 hover:text-blue-900 transition-colors"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Desktop Button */}
        <div className="hidden md:block flex-shrink-0">
          <Link
            href="/contact"
            className="group flex items-center gap-2 px-8 py-3 bg-blue-900 text-white hover:bg-blue-800 transition-all duration-300 rounded-xl text-sm font-bold uppercase tracking-wider shadow-md"
          >
            Contact Us
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden z-50 p-2 text-slate-800"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 bg-white z-40 flex flex-col items-center justify-center gap-8 md:hidden"
          >
            <nav className="flex flex-col items-center gap-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-2xl font-bold uppercase tracking-wider text-slate-800 hover:text-blue-900 transition-colors"
                >
                  {item.name}
                </Link>
              ))}

              <Link
                href="/contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="mt-4 flex items-center gap-2 px-8 py-3 bg-blue-900 text-white hover:bg-blue-800 transition-all duration-300 rounded-xl text-lg font-bold uppercase tracking-wider shadow-md"
              >
                Contact Us
                <ArrowRight size={20} />
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}