'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function FoundersMessage() {
  return (
    <section className="bg-white py-20 px-6 md:px-20 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 uppercase tracking-wide">
              Message From Founders
            </h2>
            
            <div className="space-y-6 text-slate-600 leading-relaxed text-justify">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              </p>
              <p>
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
              </p>
            </div>

            <button className="text-orange-500 font-bold uppercase tracking-wider text-sm hover:text-orange-600 transition-colors flex items-center gap-2 group">
              Read More
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </button>
          </motion.div>

          {/* Right Image */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative w-[300px] md:w-[400px] aspect-[3/4]">
              {/* Image */}
              <div className="absolute inset-0 rounded-t-full overflow-hidden border-b-4 border-blue-900">
                <Image
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1000&auto=format&fit=crop"
                  alt="Founder"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Nameplate */}
              <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-[120%] bg-blue-900 text-white py-4 px-8 text-center shadow-xl transform -skew-x-12 border-2 border-yellow-500/50">
                <div className="transform skew-x-12">
                  <h3 className="text-xl md:text-2xl font-bold text-yellow-500 font-serif italic">
                    John Doe, MSc.
                  </h3>
                  <p className="text-xs md:text-sm uppercase tracking-widest mt-1 text-blue-200">
                    President Director
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
