import { Search, Mail, Info, ChevronLeft, ChevronRight } from 'lucide-react';

const teachers = [
  {
    name: 'Veria Wulandari, M.Pd',
    role: 'Kepala Sekolah',
    image: 'https://lh3.googleusercontent.com/d/1rnhBqlCjwZ3ZgQWikjDMslKCXRyodV2o',
    bgColor: 'bg-emerald-100',
  },
  {
    name: 'Siti Aminah, S.Pd',
    role: 'Guru Kelas 1A',
    image: 'https://picsum.photos/seed/siti/300/300',
    bgColor: 'bg-orange-100',
  },
  {
    name: 'Rahmat Hidayat, S.Pd',
    role: 'Guru Penjasorkes',
    image: 'https://picsum.photos/seed/rahmat/300/300',
    bgColor: 'bg-yellow-100',
  },
  {
    name: 'Nisa Utami, S.PdI',
    role: 'Guru Pend. Agama Islam',
    image: 'https://picsum.photos/seed/nisa/300/300',
    bgColor: 'bg-red-100',
  },
  {
    name: 'Dewi Lestari, S.Pd',
    role: 'Guru Kelas 6B',
    image: 'https://picsum.photos/seed/dewi/300/300',
    bgColor: 'bg-orange-200',
  },
  {
    name: 'Ahmad Fauzi',
    role: 'Tenaga Administrasi (TU)',
    image: 'https://picsum.photos/seed/ahmad/300/300',
    bgColor: 'bg-orange-300',
  },
  {
    name: 'Fitri Handayani',
    role: 'Pustakawan',
    image: 'https://picsum.photos/seed/fitri/300/300',
    bgColor: 'bg-orange-100',
  },
  {
    name: 'Joko Supriyanto',
    role: 'Petugas Keamanan',
    image: 'https://picsum.photos/seed/joko/300/300',
    bgColor: 'bg-gray-200',
  },
];

export default function Guru() {
  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div className="max-w-2xl">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Guru & Tendik</h1>
            <p className="text-gray-600 text-lg">
              Kenali pahlawan tanpa tanda jasa yang berdedikasi membimbing dan mendidik siswa-siswi SDN Pekayon 09.
            </p>
          </div>
          <div className="relative w-full md:w-80 shrink-0">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              className="block w-full pl-10 pr-3 py-3 border border-gray-200 rounded-xl leading-5 bg-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all shadow-sm"
              placeholder="Cari nama atau posisi..."
            />
          </div>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-3 mb-10">
          <button className="px-5 py-2 rounded-full bg-blue-500 text-white text-sm font-medium shadow-sm">
            Semua
          </button>
          <button className="px-5 py-2 rounded-full bg-white border border-gray-200 text-gray-600 hover:bg-gray-50 text-sm font-medium transition-colors">
            Kepala Sekolah
          </button>
          <button className="px-5 py-2 rounded-full bg-white border border-gray-200 text-gray-600 hover:bg-gray-50 text-sm font-medium transition-colors">
            Guru Kelas
          </button>
          <button className="px-5 py-2 rounded-full bg-white border border-gray-200 text-gray-600 hover:bg-gray-50 text-sm font-medium transition-colors">
            Guru Mapel
          </button>
          <button className="px-5 py-2 rounded-full bg-white border border-gray-200 text-gray-600 hover:bg-gray-50 text-sm font-medium transition-colors">
            Tenaga Kependidikan
          </button>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {teachers.map((teacher, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden group hover:shadow-md transition-shadow">
              <div className={`aspect-square ${teacher.bgColor} relative overflow-hidden`}>
                <img 
                  src={teacher.image} 
                  alt={teacher.name} 
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500 mix-blend-multiply"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="font-bold text-gray-900 mb-1">{teacher.name}</h3>
                <p className="text-sm text-blue-600 font-medium mb-4">{teacher.role}</p>
                <div className="flex justify-center gap-3">
                  <button className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 hover:bg-blue-100 hover:text-blue-600 transition-colors">
                    <Mail className="w-4 h-4" />
                  </button>
                  <button className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 hover:bg-blue-100 hover:text-blue-600 transition-colors">
                    <Info className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center items-center gap-2">
          <button className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-400 hover:bg-gray-50 transition-colors disabled:opacity-50">
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button className="w-10 h-10 rounded-full bg-blue-500 text-white font-medium flex items-center justify-center shadow-sm">
            1
          </button>
          <button className="w-10 h-10 rounded-full bg-white border border-gray-200 text-gray-600 hover:bg-gray-50 font-medium flex items-center justify-center transition-colors">
            2
          </button>
          <button className="w-10 h-10 rounded-full bg-white border border-gray-200 text-gray-600 hover:bg-gray-50 font-medium flex items-center justify-center transition-colors">
            3
          </button>
          <button className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-gray-50 transition-colors">
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
