'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Mail, Phone, MapPin, Instagram, Linkedin, Facebook } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 md:px-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Column 1: Logo & About */}
          <div className="space-y-6">
            <Link href="/">
              <Image 
                src="/images/kazantaru.png" 
                alt="Kazantaru Logo" 
                width={180} 
                height={60} 
                className="h-12 w-auto object-contain brightness-0 invert"
              />
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed">
              Kazantaru is a leading general contractor and engineering partner, committed to delivering excellence in construction and infrastructure projects across Indonesia.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6 uppercase tracking-wider">Quick Links</h3>
            <ul className="space-y-4">
              <li>
                <Link href="/" className="text-slate-400 hover:text-white transition-colors">Home</Link>
              </li>
              <li>
                <Link href="/about" className="text-slate-400 hover:text-white transition-colors">About Us</Link>
              </li>
              <li>
                <Link href="/projects" className="text-slate-400 hover:text-white transition-colors">Projects</Link>
              </li>
              <li>
                <Link href="/contact" className="text-slate-400 hover:text-white transition-colors">Contact Us</Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-6 uppercase tracking-wider">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-slate-400">
                <MapPin size={20} className="mt-1 flex-shrink-0" />
                <span>
                  Jl. Jend. Sudirman No. Kav 52-53,<br />
                  Jakarta Selatan, 12190,<br />
                  Indonesia
                </span>
              </li>
              <li className="flex items-center gap-3 text-slate-400">
                <Phone size={20} />
                <span>+62 21 1234 5678</span>
              </li>
              <li className="flex items-center gap-3 text-slate-400">
                <Mail size={20} />
                <span>info@kazantaru.co.id</span>
              </li>
            </ul>
          </div>

          {/* Column 4: Social Media */}
          <div>
            <h3 className="text-lg font-bold mb-6 uppercase tracking-wider">Follow Us</h3>
            <div className="flex gap-4">
              <a href="#" className="p-2 bg-slate-800 rounded-full hover:bg-blue-600 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="p-2 bg-slate-800 rounded-full hover:bg-blue-700 transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="p-2 bg-slate-800 rounded-full hover:bg-blue-800 transition-colors">
                <Facebook size={20} />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
          <p>&copy; {new Date().getFullYear()} Kazantaru Energi Internasional. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
