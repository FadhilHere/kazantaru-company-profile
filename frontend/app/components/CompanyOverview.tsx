'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Target, Eye } from 'lucide-react';

export default function CompanyOverview() {
  return (
    <section className="w-full">
      {/* Company Overview Section */}
      <div className="bg-white py-16 md:py-24 px-6 md:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-3xl md:text-5xl font-bold text-slate-900 leading-tight mb-4">
                Kazantaru — General Contractor & Engineering Partner
              </h2>
              <p className="text-lg md:text-xl text-slate-600 font-medium leading-relaxed">
                Kazantaru adalah perusahaan yang bergerak di bidang general contractor, engineering, dan material supply dengan pengalaman menangani berbagai proyek konstruksi dan infrastruktur.
              </p>
            </div>

            <div className="space-y-6 text-slate-600 leading-relaxed">
              <p>
                Sejarah dan perjalanan <strong>Kazantaru Energi Internasional (KEI)</strong> berawal dari General trading (2017). Dengan bisnis utamanya (2023-Sekarang) yang bergerak di bidang Usaha Konstruksi secara Umum khususnya di Proyek Pekerjaan Jalan, perusahaan mencoba memenuhi kebutuhan dalam penyediaan material proyek dan pekerjaan tanah di Lokasi proyek.
              </p>
              <p>
                Tahun 2024 adalah awal mula dari usaha supply bahan material, tanah merah dan beberapa jenis batu. Proyek ini diinisiasi dengan memasok material ke Proyek Jalan Tol di Patimban, Subang, Jawa Barat, yang memiliki Proyek Konstruksi dari Perusahaan Milik Pemerintah dimulai pada tahun 2023.
              </p>
              
              <div className="pt-4">
                <h3 className="text-xl font-bold text-slate-900 mb-2">Human Resources</h3>
                <p>
                  KEI didukung oleh sumber daya manusia yang ahli dibidangnya, khususnya Teknik dan Konstruksi yang dapat memberikan kontribusi positif untuk bisnis konstruksi secara umum khususnya di bidang supply bahan material konstruksi dan pekerjaan tanah.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Image */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative h-[400px] md:h-[600px] w-full rounded-2xl overflow-hidden shadow-2xl"
          >
            <Image
              src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1000&auto=format&fit=crop"
              alt="Construction Site Project"
              fill
              className="object-cover hover:scale-105 transition-transform duration-700"
            />
          </motion.div>
        </div>
      </div>

      {/* Vision & Mission Section */}
      <div className="bg-blue-900 py-20 px-6 md:px-20 text-white">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Visi & Misi</h2>
            <div className="w-24 h-1 bg-white mx-auto rounded-full"/>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Vision Card */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-blue-800/50 p-8 md:p-12 rounded-3xl border border-blue-700/50 hover:bg-blue-800 transition-colors"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-4 bg-white/10 rounded-2xl">
                  <Eye size={32} className="text-blue-200" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold">Visi</h3>
              </div>
              <p className="text-lg leading-relaxed text-blue-100">
                Menjadi Perusahaan Konstruksi secara Umum yang terkemuka dan terpercaya dengan menyediakan produk-produk dan jasa yang berkualitas dan menciptakan nilai yang optimal bagi pelanggan, pemegang saham, karyawan dan masyarakat.
              </p>
            </motion.div>

            {/* Mission Card */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-blue-800/50 p-8 md:p-12 rounded-3xl border border-blue-700/50 hover:bg-blue-800 transition-colors"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-4 bg-white/10 rounded-2xl">
                  <Target size={32} className="text-blue-200" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold">Misi</h3>
              </div>
              <p className="text-lg leading-relaxed text-blue-100">
                Mendukung kemajuan perekonomian dan infrastruktur Indonesia sebagai pelaku bisnis riil dalam sector konstruksi secara umum, dan memberikan kepuasan pelanggan melalui ketepatan dalam segi kualitas produk, waktu penyelesaian proyek, dan biaya dengan didukung oleh kehandalan Sumber Daya Manusia.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
