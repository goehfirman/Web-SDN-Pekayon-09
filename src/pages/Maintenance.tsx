import React from 'react';
import { motion } from 'motion/react';
import { AlertCircle } from 'lucide-react';

const maintenanceImg = '/src/assets/images/website_maintenance_1782016518520.jpg';

export default function Maintenance() {
  return (
    <div className="min-h-screen bg-[#e8f4fd] flex items-center justify-center p-4 md:p-12 font-sans relative overflow-hidden select-none">
      {/* Decorative fluid soft backdrops to mimic the screenshot's light aesthetic */}
      <div className="absolute top-0 right-0 w-[45vw] h-[45vw] rounded-bl-[100px] bg-gradient-to-tr from-[#d6ecfc] to-[#e4f3fe] opacity-80 pointer-events-none -z-10" />
      <div className="absolute bottom-0 left-0 w-[30vh] h-[30vh] rounded-tr-full bg-gradient-to-br from-[#d4ebfc] to-[#e8f4fd] opacity-60 pointer-events-none -z-10" />

      <div className="max-w-6xl w-full bg-white/70 backdrop-blur-md rounded-3xl p-6 md:p-12 shadow-2xl border border-white/50 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Premium Isometric Maintenance Illustration */}
          <div className="lg:col-span-6 flex justify-center items-center">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative w-full max-w-lg aspect-[4/3] rounded-2xl overflow-hidden shadow-xl border-4 border-white bg-white group"
            >
              <img 
                src={maintenanceImg} 
                alt="Website is under maintenance isometric illustration" 
                className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-blue-600/5 mix-blend-multiply pointer-events-none" />
              
              {/* Subtle tech grid pattern overlay */}
              <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />
            </motion.div>
          </div>

          {/* Right Column: Clean, Elegant Typography & Call to Action */}
          <div className="lg:col-span-6 flex flex-col justify-center text-left">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
            >
              {/* Info pill */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-100/80 border border-blue-200 text-blue-700 text-xs font-bold uppercase tracking-wider mb-6">
                <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                <span>Sistem Sedang Diperbarui</span>
              </div>

              {/* Main Heading styled precisely like the "Website is under MAINTENANCE" header */}
              <h1 className="text-xl md:text-2xl font-semibold text-[#3a5d85] tracking-wide mb-1">
                Website is under
              </h1>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#1c3c63] tracking-tight mb-6 uppercase">
                MAINTENANCE
              </h2>

              {/* Balanced, friendly description in Indonesian without mentioning any school identity */}
              <p className="text-slate-500 text-base md:text-lg leading-relaxed mb-8 max-w-xl">
                Situs web kami sedang dalam pemeliharaan terjadwal untuk meningkatkan fitur, keamanan, dan kualitas layanan sistem secara berkala. Kami akan segera kembali online secepatnya.
              </p>


            </motion.div>
          </div>

        </div>
      </div>

      {/* Modern, neutral footer with absolutely no school references */}
      <div className="absolute bottom-6 left-0 w-full text-center text-xs text-slate-400 font-medium tracking-wide z-10 px-4">
        <p>© {new Date().getFullYear()} Hak Cipta Dilindungi - Sistem Administrasi Pembelajaran.</p>
      </div>
    </div>
  );
}
