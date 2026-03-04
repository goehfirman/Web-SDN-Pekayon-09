import { BookOpen, Monitor, Trophy, Users, Music, Activity, Image as ImageIcon } from 'lucide-react';

const facilities = [
  {
    title: 'Perpustakaan Cendekia',
    description: 'Koleksi buku lengkap, ruang baca yang nyaman dan ber-AC, serta area digital untuk mendukung literasi siswa-siswi SDN Pekayon 09.',
    image: 'https://picsum.photos/seed/library/600/400',
    icon: <BookOpen className="w-5 h-5" />,
    iconBg: 'bg-blue-100 text-blue-600',
  },
  {
    title: 'Laboratorium Komputer',
    description: 'Dilengkapi 40 unit komputer spesifikasi terkini dengan akses internet cepat untuk menunjang pembelajaran TIK dan ujian berbasis komputer.',
    image: 'https://picsum.photos/seed/computer/600/400',
    icon: <Monitor className="w-5 h-5" />,
    iconBg: 'bg-blue-100 text-blue-600',
  },
  {
    title: 'Lapangan Multifungsi',
    description: 'Area luas untuk upacara bendera dan fasilitas olahraga terpadu meliputi lapangan futsal, basket, dan bola voli dengan standar yang baik.',
    image: 'https://picsum.photos/seed/field/600/400',
    icon: <Trophy className="w-5 h-5" />,
    iconBg: 'bg-blue-100 text-blue-600',
  },
];

const ekskuls = [
  {
    title: 'Pramuka',
    description: 'Membentuk karakter disiplin, mandiri, dan jiwa kepemimpinan.',
    icon: <Users className="w-8 h-8" />,
    iconBg: 'bg-yellow-100 text-yellow-600',
  },
  {
    title: 'Tari Tradisional',
    description: 'Melestarikan budaya bangsa melalui seni gerak nusantara.',
    icon: <Activity className="w-8 h-8" />,
    iconBg: 'bg-red-100 text-red-600',
  },
  {
    title: 'Pencak Silat',
    description: 'Seni bela diri untuk ketahanan fisik dan mental siswa.',
    icon: <Activity className="w-8 h-8" />,
    iconBg: 'bg-emerald-100 text-emerald-600',
  },
  {
    title: 'Paduan Suara',
    description: 'Mengembangkan bakat vokal dan kerja sama dalam bernyanyi.',
    icon: <Music className="w-8 h-8" />,
    iconBg: 'bg-blue-100 text-blue-600',
  },
];

export default function Fasilitas() {
  return (
    <div className="bg-gray-50 min-h-screen pb-20">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 py-20 text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Fasilitas & Ekstrakurikuler</h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            Kami menyediakan lingkungan belajar yang nyaman dan beragam kegiatan untuk mendukung minat serta bakat setiap siswa SDN Pekayon 09.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        
        {/* Fasilitas Section */}
        <section className="mb-24">
          <div className="flex items-center gap-3 mb-10">
            <div className="w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center text-yellow-600">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-gray-900">Fasilitas Sekolah</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {facilities.map((item, index) => (
              <div key={index} className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden group hover:shadow-md transition-all">
                <div className="h-56 overflow-hidden relative">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-8 relative">
                  <div className={`absolute -top-6 right-8 w-12 h-12 rounded-2xl ${item.iconBg} flex items-center justify-center shadow-lg border-4 border-white`}>
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 pr-8">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed text-sm">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Divider */}
        <div className="w-full h-px bg-gray-200 mb-24"></div>

        {/* Ekstrakurikuler Section */}
        <section>
          <div className="flex items-center gap-3 mb-10">
            <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600">
              <Trophy className="w-6 h-6" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900">Ekstrakurikuler (Ekskul)</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {ekskuls.map((item, index) => (
              <div key={index} className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8 text-center hover:shadow-md transition-all group hover:-translate-y-1">
                <div className={`w-20 h-20 mx-auto rounded-full ${item.iconBg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">{item.description}</p>
                <a href="#" className="text-blue-600 font-medium text-sm hover:text-blue-700 flex items-center justify-center gap-2 group-hover:gap-3 transition-all">
                  Pelajari Lebih Lanjut <span aria-hidden="true">&rarr;</span>
                </a>
              </div>
            ))}
          </div>

          <div className="flex justify-center">
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-full font-bold transition-colors shadow-lg flex items-center gap-3">
              <ImageIcon className="w-5 h-5" />
              Lihat Galeri Kegiatan
            </button>
          </div>
        </section>

      </div>
    </div>
  );
}
