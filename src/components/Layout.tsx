import { Link, Outlet, useLocation } from 'react-router-dom';
import { MapPin, Phone, Mail, Facebook, Instagram, Youtube, Sun } from 'lucide-react';

const navLinks = [
  { name: 'Beranda', path: '/' },
  { name: 'Profil', path: '/profil' },
  { name: 'Guru & Tendik', path: '/guru' },
  { name: 'Fasilitas & Ekskul', path: '/fasilitas' },
  { name: 'Berita', path: '/berita' },
  { name: 'PPDB', path: '/ppdb' },
];

export default function Layout() {
  const location = useLocation();

  return (
    <div className="min-h-screen flex flex-col font-sans text-gray-800 bg-gray-50">
      {/* Navbar */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <img src="https://lh3.googleusercontent.com/d/1YONdbm4C4cYaegmOmNzPShMzkgj0e5o0" alt="Logo SDN Pekayon 09" className="w-10 h-10 rounded-full object-cover" referrerPolicy="no-referrer" />
              <div>
                <h1 className="font-bold text-lg leading-tight text-gray-900">SDN Pekayon 09</h1>
                <p className="text-xs text-gray-500">Aktif, Kreatif, Berprestasi</p>
              </div>
            </div>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
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
          </div>
        </div>
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
                <a href="#" className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-pink-600 hover:text-white transition-colors">
                  <Instagram className="w-4 h-4" />
                </a>
                <a href="#" className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-red-600 hover:text-white transition-colors">
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
                  <span className="text-gray-400 text-sm">(021) 12345678</span>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-blue-500 shrink-0" />
                  <span className="text-gray-400 text-sm">info@sdnpekayon09.sch.id</span>
                </li>
              </ul>
            </div>

            {/* Location Map */}
            <div>
              <h3 className="font-bold text-white mb-6">Lokasi Sekolah</h3>
              <div className="relative rounded-xl overflow-hidden h-32 bg-gray-800 group cursor-pointer">
                <img src="https://picsum.photos/seed/map/400/200" alt="Map" className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-opacity" referrerPolicy="no-referrer" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-full text-xs font-medium flex items-center gap-2 shadow-lg transition-colors">
                    <MapPin className="w-3 h-3" />
                    Buka di Maps
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="bg-yellow-400 py-4 text-center">
          <p className="text-gray-900 text-sm font-medium">Pusdatin © Kemendikdasmen 2026</p>
        </div>
      </footer>
    </div>
  );
}
