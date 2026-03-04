import { ArrowRight, Info, ExternalLink, Calendar, MapPin, Phone, Mail, PlayCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="bg-gray-50 pb-20">
      {/* Hero Section */}
      <section className="relative bg-blue-500 text-white overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path d="M0 100 C 20 0 50 0 100 100 Z" fill="currentColor" />
          </svg>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-20 pb-32 md:pt-32 md:pb-48 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-12 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              Selamat Datang di <br />
              <span className="text-yellow-400">SDN Pekayon 09</span>
            </h1>
            <p className="text-lg md:text-xl text-blue-100 mb-8 max-w-lg leading-relaxed">
              Membangun generasi cerdas, berkarakter, dan berbudaya lingkungan untuk masa depan yang gemilang.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 px-8 py-3 rounded-full font-bold transition-colors shadow-lg">
                Info PPDB
              </button>
              <button className="bg-white/20 hover:bg-white/30 backdrop-blur-sm border border-white/30 text-white px-8 py-3 rounded-full font-medium transition-colors">
                Hubungi Kami
              </button>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center md:justify-end relative">
             {/* Decorative elements */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-yellow-300 rounded-full blur-3xl opacity-20"></div>
             <img 
               src="https://lh3.googleusercontent.com/d/16B0KWfT3Z3al_ABpgdl3flUSBxntQ3BP" 
               alt="Student Illustration" 
               className="relative z-10 w-full max-w-md rounded-2xl shadow-2xl object-cover border-4 border-white/20"
               referrerPolicy="no-referrer"
             />
          </div>
        </div>
        
        {/* Wave divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" className="w-full h-auto fill-gray-50" preserveAspectRatio="none">
            <path d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"></path>
          </svg>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Main Column */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* Sambutan Kepala Sekolah */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 flex flex-col sm:flex-row gap-8 items-start">
              <div className="flex flex-col items-center shrink-0">
                <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-emerald-100 mb-4">
                  <img src="https://lh3.googleusercontent.com/d/1rnhBqlCjwZ3ZgQWikjDMslKCXRyodV2o" alt="Kepala Sekolah" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </div>
                <h3 className="font-bold text-gray-900 text-center">Veria Wulandari, M.Pd</h3>
                <p className="text-sm text-gray-500 text-center">Kepala Sekolah</p>
              </div>
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-4xl text-blue-500 font-serif leading-none">"</span>
                  <h2 className="text-2xl font-bold text-blue-600">Sambutan Kepala Sekolah</h2>
                </div>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Puji syukur kita panjatkan ke hadirat Tuhan Yang Maha Esa. Kami menyambut baik kehadiran website SDN Pekayon 09 ini sebagai sarana komunikasi dan informasi bagi seluruh warga sekolah, orang tua siswa, dan masyarakat luas. Mari bersama-sama wujudkan pendidikan yang berkualitas.
                </p>
                <Link to="/profil" className="text-blue-600 font-medium hover:text-blue-700 flex items-center gap-2">
                  Baca selengkapnya <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Identitas Sekolah */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                  <Info className="w-5 h-5" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Identitas Sekolah</h2>
              </div>
              
              {/* Tabs */}
              <div className="flex overflow-x-auto border-b border-gray-200 mb-6 pb-px">
                <button className="px-6 py-3 text-sm font-medium text-blue-600 border-b-2 border-blue-600 whitespace-nowrap">
                  Identitas Satuan Pendidikan
                </button>
                <button className="px-6 py-3 text-sm font-medium text-gray-500 hover:text-gray-700 whitespace-nowrap">
                  Dokumen dan Perijinan
                </button>
                <button className="px-6 py-3 text-sm font-medium text-gray-500 hover:text-gray-700 whitespace-nowrap">
                  Sarana dan Prasarana
                </button>
                <button className="px-6 py-3 text-sm font-medium text-gray-500 hover:text-gray-700 whitespace-nowrap">
                  Kontak
                </button>
                <button className="px-6 py-3 text-sm font-medium text-gray-500 hover:text-gray-700 whitespace-nowrap">
                  Peta
                </button>
              </div>

              <h3 className="font-bold text-lg text-center mb-6 py-3 border-b border-gray-100">SDN PEKAYON 09</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 text-sm">
                <div className="grid grid-cols-3 gap-4 py-2 border-b border-gray-50">
                  <span className="text-gray-500 col-span-1">Nama</span>
                  <span className="font-medium text-gray-900 col-span-2">: SDN Pekayon 09</span>
                </div>
                <div className="grid grid-cols-3 gap-4 py-2 border-b border-gray-50">
                  <span className="text-gray-500 col-span-1">NPSN</span>
                  <span className="font-medium text-blue-600 col-span-2">: 20108981</span>
                </div>
                <div className="grid grid-cols-3 gap-4 py-2 border-b border-gray-50">
                  <span className="text-gray-500 col-span-1">Alamat</span>
                  <span className="font-medium text-gray-900 col-span-2">: Jl. Pendidikan RT.004 RW.009 No.4</span>
                </div>
                <div className="grid grid-cols-3 gap-4 py-2 border-b border-gray-50">
                  <span className="text-gray-500 col-span-1">Desa/Kelurahan</span>
                  <span className="font-medium text-gray-900 col-span-2">: PEKAYON</span>
                </div>
                <div className="grid grid-cols-3 gap-4 py-2 border-b border-gray-50">
                  <span className="text-gray-500 col-span-1">Kecamatan/Kota (LN)</span>
                  <span className="font-medium text-gray-900 col-span-2">: KEC. PASAR REBO</span>
                </div>
                <div className="grid grid-cols-3 gap-4 py-2 border-b border-gray-50">
                  <span className="text-gray-500 col-span-1">Kab.-Kota/Negara (LN)</span>
                  <span className="font-medium text-gray-900 col-span-2">: KOTA ADM. JAKARTA TIMUR</span>
                </div>
                <div className="grid grid-cols-3 gap-4 py-2 border-b border-gray-50">
                  <span className="text-gray-500 col-span-1">Propinsi/Luar Negeri (LN)</span>
                  <span className="font-medium text-gray-900 col-span-2">: PROV. D.K.I. JAKARTA</span>
                </div>
                <div className="grid grid-cols-3 gap-4 py-2 border-b border-gray-50">
                  <span className="text-gray-500 col-span-1">Status Sekolah</span>
                  <span className="font-medium text-gray-900 col-span-2">: NEGERI</span>
                </div>
                <div className="grid grid-cols-3 gap-4 py-2 border-b border-gray-50">
                  <span className="text-gray-500 col-span-1">Bentuk Pendidikan</span>
                  <span className="font-medium text-gray-900 col-span-2">: SD</span>
                </div>
                <div className="grid grid-cols-3 gap-4 py-2 border-b border-gray-50">
                  <span className="text-gray-500 col-span-1">Jenjang Pendidikan</span>
                  <span className="font-medium text-gray-900 col-span-2">: DIKDAS</span>
                </div>
              </div>
            </div>

            {/* Berita Terbaru */}
            <div className="pt-8">
              <div className="flex justify-between items-end mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9.5a2.5 2.5 0 00-2.5-2.5H14" />
                    </svg>
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">Berita Terbaru</h2>
                </div>
                <Link to="/berita" className="text-blue-600 text-sm font-medium hover:text-blue-700">Lihat Semua Berita</Link>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* News Card 1 */}
                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden group cursor-pointer">
                  <div className="h-48 overflow-hidden relative">
                    <img src="https://picsum.photos/seed/scout/600/400" alt="Pramuka" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" referrerPolicy="no-referrer" />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 text-gray-500 text-xs mb-3">
                      <Calendar className="w-4 h-4" />
                      <span>12 Oktober 2023</span>
                    </div>
                    <h3 className="font-bold text-lg text-gray-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">Kegiatan Perkemahan Jumat Sabtu (Perjusa)</h3>
                    <p className="text-gray-600 text-sm line-clamp-2">Siswa-siswi kelas 5 dan 6 antusias mengikuti kegiatan Perjusa untuk melatih kemandirian dan kedisiplinan.</p>
                  </div>
                </div>

                {/* News Card 2 */}
                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden group cursor-pointer">
                  <div className="h-48 overflow-hidden relative">
                    <img src="https://picsum.photos/seed/drawing/600/400" alt="Lomba Menggambar" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" referrerPolicy="no-referrer" />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 text-gray-500 text-xs mb-3">
                      <Calendar className="w-4 h-4" />
                      <span>05 Oktober 2023</span>
                    </div>
                    <h3 className="font-bold text-lg text-gray-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">Siswa SDN Pekayon 09 Juara 1 Lomba Menggambar</h3>
                    <p className="text-gray-600 text-sm line-clamp-2">Prestasi membanggakan kembali diraih oleh ananda Rina dari kelas 4A dalam lomba menggambar tingkat kecamatan.</p>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            
            {/* Tautan Penting */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
              <div className="flex items-center gap-3 mb-6">
                <ExternalLink className="w-5 h-5 text-emerald-600" />
                <h3 className="font-bold text-gray-900">Tautan Penting</h3>
              </div>
              <div className="space-y-4">
                <a href="#" className="flex items-center gap-4 p-4 rounded-xl border border-gray-100 hover:border-blue-200 hover:bg-blue-50 transition-all group">
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-sm">Aplikasi Dapodik</h4>
                    <p className="text-xs text-gray-500">Data Pokok Pendidikan</p>
                  </div>
                </a>
                <a href="#" className="flex items-center gap-4 p-4 rounded-xl border border-gray-100 hover:border-emerald-200 hover:bg-emerald-50 transition-all group">
                  <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-sm">e-Rapor SD</h4>
                    <p className="text-xs text-gray-500">Sistem Penilaian Siswa</p>
                  </div>
                </a>
                <a href="#" className="flex items-center gap-4 p-4 rounded-xl border border-gray-100 hover:border-yellow-200 hover:bg-yellow-50 transition-all group">
                  <div className="w-10 h-10 rounded-full bg-yellow-100 flex items-center justify-center text-yellow-600 group-hover:bg-yellow-500 group-hover:text-white transition-colors">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" /></svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-sm">Portal PPDB</h4>
                    <p className="text-xs text-gray-500">Penerimaan Siswa Baru</p>
                  </div>
                </a>
              </div>
            </div>

            {/* Pengumuman */}
            <div className="bg-blue-600 rounded-2xl shadow-sm p-6 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-10">
                <svg className="w-24 h-24" fill="currentColor" viewBox="0 0 24 24"><path d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" /></svg>
              </div>
              <div className="flex items-center gap-3 mb-6 relative z-10">
                <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" /></svg>
                </div>
                <h3 className="font-bold text-lg">Pengumuman</h3>
              </div>
              
              <div className="space-y-4 relative z-10">
                <div className="bg-white/10 rounded-xl p-4 border border-white/20 backdrop-blur-sm">
                  <div className="text-blue-200 text-xs mb-2">Berlaku s/d 30 Nov 2023</div>
                  <h4 className="font-bold mb-2 leading-tight">Jadwal Penilaian Akhir Semester (PAS) Ganjil</h4>
                  <p className="text-sm text-blue-50 leading-relaxed">Pelaksanaan PAS akan dimulai pada tanggal 4 Desember 2023. Mohon persiapkan diri dengan baik.</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
