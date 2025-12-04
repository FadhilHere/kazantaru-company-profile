'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { X, MapPin, Calendar, Building2, Briefcase } from 'lucide-react';

interface Project {
  id: number;
  project_name: string;
  client_name: string;
  vendor_status: string;
  amount_label: string;
  period_start_year: string;
  period_end_year: string;
  status_group: string;
  progress_label: string;
  category: string;
  location: string;
  description_short: string;
  image: string;
}

const projects: Project[] = [
  {
    id: 1,
    project_name: "BNPB – EMERGENCY ITEM PARTNERSHIP",
    client_name: "BNPB",
    vendor_status: "Main-Con",
    amount_label: "IDR 33.5 Bio",
    period_start_year: "2025",
    period_end_year: "2026",
    status_group: "Projected",
    progress_label: "Projected",
    category: "Emergency Response",
    location: "Indonesia",
    description_short: "Kemitraan pengadaan item darurat untuk kebutuhan tanggap bencana.",
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: 2,
    project_name: "TOLL ROAD MAINTENANCE - JAVA SECTION",
    client_name: "Jasa Marga",
    vendor_status: "Sub-Con",
    amount_label: "IDR 15.2 Bio",
    period_start_year: "2024",
    period_end_year: "2025",
    status_group: "Completed",
    progress_label: "Completed",
    category: "Infrastructure",
    location: "West Java, Indonesia",
    description_short: "Pemeliharaan rutin dan perbaikan struktur jalan tol seksi Jawa Barat.",
    image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: 3,
    project_name: "INDUSTRIAL PARK LAND CLEARING",
    client_name: "Private Sector",
    vendor_status: "Main-Con",
    amount_label: "IDR 42.8 Bio",
    period_start_year: "2024",
    period_end_year: "2025",
    status_group: "Projected",
    progress_label: "Projected",
    category: "Land Development",
    location: "Cikarang, Indonesia",
    description_short: "Pekerjaan pembersihan lahan dan persiapan tanah untuk kawasan industri baru.",
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1000&auto=format&fit=crop"
  }
];

export default function ExperienceSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const getStatusColor = (status: string) => {
    return status === 'Completed' ? 'bg-green-500 text-white' : 'bg-yellow-500 text-blue-900';
  };

  const getStatusBadgeColor = (status: string) => {
    return status === 'Completed' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800';
  };

  return (
    <section className="relative bg-blue-900 py-20 px-6 md:px-20 overflow-hidden min-h-[800px]">
      {/* Background Map */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <Image
          src="/images/petaindonesia_no_bg.png"
          alt="Indonesia Map"
          fill
          className="object-contain object-center scale-150 md:scale-100"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 uppercase tracking-wider">
            Latest Projects
          </h2>
          <div className="w-24 h-1 bg-yellow-500 mx-auto rounded-full"/>
        </motion.div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              onClick={() => setSelectedProject(project)}
              className="group bg-white rounded-2xl overflow-hidden cursor-pointer shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
            >
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.project_name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className={`absolute top-4 right-4 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider ${getStatusColor(project.progress_label)}`}>
                  {project.progress_label}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-blue-900 mb-2 line-clamp-2 min-h-[3.5rem]">
                  {project.project_name}
                </h3>
                <div className="flex items-center gap-2 text-slate-500 text-sm">
                  <MapPin size={16} />
                  <span>{project.location}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />
            
            <motion.div
              layoutId={`project-${selectedProject.id}`}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative bg-white rounded-3xl shadow-2xl w-full max-w-3xl overflow-hidden z-10 max-h-[90vh] overflow-y-auto"
            >
              <button 
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 p-2 bg-black/10 hover:bg-black/20 rounded-full transition-colors z-20"
              >
                <X size={24} />
              </button>

              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="relative h-64 md:h-auto">
                  <Image
                    src={selectedProject.image}
                    alt={selectedProject.project_name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6 md:hidden">
                    <h3 className="text-xl font-bold text-white">{selectedProject.project_name}</h3>
                  </div>
                </div>

                <div className="p-8 space-y-6">
                  <div className="hidden md:block">
                    <h3 className="text-2xl font-bold text-blue-900 mb-2">{selectedProject.project_name}</h3>
                    <div className="flex items-center gap-2 text-slate-500 text-sm mb-4">
                      <MapPin size={16} />
                      <span>{selectedProject.location}</span>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-slate-50 p-3 rounded-xl">
                        <p className="text-xs text-slate-500 uppercase tracking-wider mb-1">Client</p>
                        <p className="font-semibold text-blue-900">{selectedProject.client_name}</p>
                      </div>
                      <div className="bg-slate-50 p-3 rounded-xl">
                        <p className="text-xs text-slate-500 uppercase tracking-wider mb-1">Role</p>
                        <p className="font-semibold text-blue-900">{selectedProject.vendor_status}</p>
                      </div>
                      <div className="bg-slate-50 p-3 rounded-xl">
                        <p className="text-xs text-slate-500 uppercase tracking-wider mb-1">Value</p>
                        <p className="font-semibold text-green-600">{selectedProject.amount_label}</p>
                      </div>
                      <div className="bg-slate-50 p-3 rounded-xl">
                        <p className="text-xs text-slate-500 uppercase tracking-wider mb-1">Period</p>
                        <p className="font-semibold text-blue-900">{selectedProject.period_start_year} - {selectedProject.period_end_year}</p>
                      </div>
                    </div>

                    <div>
                      <p className="text-xs text-slate-500 uppercase tracking-wider mb-2">Description</p>
                      <p className="text-slate-600 leading-relaxed text-sm">
                        {selectedProject.description_short}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-2 pt-2">
                      <span className="px-3 py-1 bg-blue-100 text-blue-800 text-xs font-bold rounded-full">
                        {selectedProject.category}
                      </span>
                      <span className={`px-3 py-1 text-xs font-bold rounded-full ${getStatusBadgeColor(selectedProject.status_group)}`}>
                        {selectedProject.status_group}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
