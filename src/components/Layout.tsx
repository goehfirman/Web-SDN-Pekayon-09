import { useState } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { MapPin, Phone, Mail, Facebook, Instagram, Youtube, Sun, ChevronDown, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const navLinks = [
  { name: 'Beranda', path: '/' },
  { 
    name: 'Tentang Sekolah', 
    dropdown: [
      { name: 'Profil', path: '/profil' },
      { name: 'Fasilitas dan Ekstrakurikuler', path: '/fasilitas' },
      { name: 'Program Unggulan', path: '/program-unggulan' },
      { name: 'SPMB', path: '/spmb' },
      { name: 'Kontak', path: '/kontak' },
    ]
  },
  { name: 'Guru & Tendik', path: '/guru' },
  { name: 'Berita', path: '/berita' },
  { name: 'Bahan Ajar', path: '/bahan-ajar' },
];

export default function Layout() {
  const location = useLocation();
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileAboutOpen, setIsMobileAboutOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col font-sans text-gray-800 bg-gray-50">
      {/* Navbar */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3">
              <img src="https://lh3.googleusercontent.com/d/1YONdbm4C4cYaegmOmNzPShMzkgj0e5o0" alt="Logo SDN Pekayon 09" className="w-10 h-10 rounded-full object-cover" referrerPolicy="no-referrer" />
              <div>
                <h1 className="font-bold text-lg leading-tight text-gray-900">SDN Pekayon 09</h1>
                <p className="text-xs text-gray-500">Aktif, Kreatif, Berprestasi</p>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                link.dropdown ? (
                  <div 
                    key={link.name}
                    className="relative group"
                    onMouseEnter={() => setIsAboutOpen(true)}
                    onMouseLeave={() => setIsAboutOpen(false)}
                  >
                    <button
                      className={`flex items-center gap-1 text-sm font-medium transition-colors py-7 ${
                        link.dropdown.some(item => location.pathname === item.path)
                          ? 'text-blue-600'
                          : 'text-gray-600 hover:text-blue-600'
                      }`}
                    >
                      {link.name}
                      <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isAboutOpen ? 'rotate-180' : ''}`} />
                    </button>
                    
                    <AnimatePresence>
                      {isAboutOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full left-0 w-64 bg-white shadow-xl rounded-b-xl border-t-2 border-blue-600 py-2 overflow-hidden"
                        >
                          {link.dropdown.map((subItem) => (
                            <Link
                              key={subItem.name}
                              to={subItem.path}
                              onClick={() => setIsAboutOpen(false)}
                              className={`block px-6 py-3 text-sm transition-colors ${
                                location.pathname === subItem.path
                                  ? 'bg-blue-50 text-blue-600 font-semibold'
                                  : 'text-gray-600 hover:bg-gray-50 hover:text-blue-600'
                              }`}
                            >
                              {subItem.name}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    key={link.name}
                    to={link.path}
                    className={`text-sm font-medium transition-colors ${
                      location.pathname === link.path
                        ? 'text-blue-600 border-b-2 border-blue-600 py-7'
                        : 'text-gray-600 hover:text-blue-600 py-7'
                    }`}
                  >
                    {link.name}
                  </Link>
                )
              ))}
            </nav>

            {/* Actions */}
            <div className="hidden md:flex items-center gap-4">
              <button className="p-2 text-gray-500 hover:text-gray-700 rounded-full hover:bg-gray-100">
                <Sun className="w-5 h-5" />
              </button>
              <button className="bg-blue-500 hover:bg-blue-600 text-white px-5 py-2 rounded-full text-sm font-medium transition-colors">
                Portal Siswa
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center gap-2">
              <button className="p-2 text-gray-500 rounded-full hover:bg-gray-100">
                <Sun className="w-5 h-5" />
              </button>
              <button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 text-gray-600 hover:text-blue-600 transition-colors"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white border-t border-gray-100 overflow-hidden"
            >
              <div className="px-4 py-6 space-y-4">
                {navLinks.map((link) => (
                  link.dropdown ? (
                    <div key={link.name} className="space-y-2">
                      <button
                        onClick={() => setIsMobileAboutOpen(!isMobileAboutOpen)}
                        className={`flex items-center justify-between w-full text-left font-medium py-2 ${
                          link.dropdown.some(item => location.pathname === item.path)
                            ? 'text-blue-600'
                            : 'text-gray-600'
                        }`}
                      >
                        {link.name}
                        <ChevronDown className={`w-4 h-4 transition-transform ${isMobileAboutOpen ? 'rotate-180' : ''}`} />
                      </button>
                      <AnimatePresence>
                        {isMobileAboutOpen && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="pl-4 space-y-2 overflow-hidden border-l-2 border-blue-100 ml-1"
                          >
                            {link.dropdown.map((subItem) => (
                              <Link
                                key={subItem.name}
                                to={subItem.path}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className={`block py-2 text-sm ${
                                  location.pathname === subItem.path
                                    ? 'text-blue-600 font-semibold'
                                    : 'text-gray-500'
                                }`}
                              >
                                {subItem.name}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link
                      key={link.name}
                      to={link.path}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`block font-medium py-2 ${
                        location.pathname === link.path
                          ? 'text-blue-600'
                          : 'text-gray-600'
                      }`}
                    >
                      {link.name}
                    </Link>
                  )
                ))}
                <div className="pt-4 border-t border-gray-100">
                  <button className="w-full bg-blue-500 text-white py-3 rounded-xl font-medium">
                    Portal Siswa
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-[#111827] text-gray-300 pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <img src="https://lh3.googleusercontent.com/d/1YONdbm4C4cYaegmOmNzPShMzkgj0e5o0" alt="Logo SDN Pekayon 09" className="w-10 h-10 rounded-full object-cover" referrerPolicy="no-referrer" />
                <h2 className="font-bold text-xl text-white">SDN Pekayon 09</h2>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                Mewujudkan insan yang bertaqwa, cerdas, terampil, dan berwawasan lingkungan serta mampu bersaing di era globalisasi.
              </p>
              <div className="flex gap-3">
                <a href="#" className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-blue-600 hover:text-white transition-colors">
                  <Facebook className="w-4 h-4" />
                </a>
                <a href="https://www.instagram.com/sdnpekayon09/?hl=en" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-pink-600 hover:text-white transition-colors">
                  <Instagram className="w-4 h-4" />
                </a>
                <a href="https://www.youtube.com/@sdnegeripekayon09" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-red-600 hover:text-white transition-colors">
                  <Youtube className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Contact */}
            <div>
              <h3 className="font-bold text-white mb-6">Hubungi Kami</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                  <span className="text-gray-400 text-sm leading-relaxed">Jl. Pendidikan RT.004 RW.009 No.4, Pekayon, Kec. Pasar Rebo, Kota Jakarta Timur, DKI Jakarta</span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-blue-500 shrink-0" />
                  <span className="text-gray-400 text-sm">(021) 8706842</span>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-blue-500 shrink-0" />
                  <span className="text-gray-400 text-sm">sdnegeripekayon09@gmail.com</span>
                </li>
              </ul>
            </div>

            {/* Location Map */}
            <div>
              <h3 className="font-bold text-white mb-6">Lokasi Sekolah</h3>
              <div className="relative rounded-xl overflow-hidden h-48 bg-gray-800">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m26!1m12!1m3!1d1241.828773940841!2d106.86028425675264!3d-6.342117313584588!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m11!3e6!4m3!3m2!1d-6.341923599999999!2d106.8608739!4m5!1s0x2e69ec543baa8619%3A0x2dd17b6762583a9f!2sSDN%20Pekayon%2009%20Pagi%2C%20No.76G%2C%20Jl.%20Pendidikan%20No.4%2C%20RT.4%2FRW.9%2C%20Pekayon%2C%20Kec.%20Ps.%20Rebo%2C%20Kota%20Jakarta%20Timur%2C%20Daerah%20Khusus%20Ibukota%20Jakarta%2013710!3m2!1d-6.3420333!2d106.8609505!5e0!3m2!1sid!2sid!4v1772639938095!5m2!1sid!2sid" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen={true} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Peta Lokasi SDN Pekayon 09"
                  className="absolute inset-0"
                ></iframe>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="bg-yellow-400 py-4 text-center">
          <p className="text-gray-900 text-sm font-medium">Dikembangkan oleh Teguh Firmansyah Apriliana @goehfirmaan</p>
        </div>
      </footer>
    </div>
  );
}
