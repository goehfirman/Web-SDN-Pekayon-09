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
