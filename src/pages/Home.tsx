import React, { useState } from 'react';
import { ArrowRight, Calendar, PlayCircle, X, Share2, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import Hero from '../components/Hero';

const heroImages = [
  "https://lh3.googleusercontent.com/d/1wWNEZx6oXvznThFOSK3GEP9lFipLEOU0",
  "https://lh3.googleusercontent.com/d/1RHsuJDKxdfB8mjCAH4DhnFw2Zj_H6V79",
  "https://lh3.googleusercontent.com/d/1-pZRuUDVUzLPyQEglLNj35aQjIGkvgqK",
  "https://lh3.googleusercontent.com/d/1ry8eMksV8766AyTrmJ6n-jqNAHJlo8pY",
  "https://lh3.googleusercontent.com/d/1-mSlGfyuRQWIdqyj1iq3aPWTvsGAL_i8",
  "https://lh3.googleusercontent.com/d/1i87iipR-lY4QW9w1EU0Iqznr5gVz3yap",
  "https://lh3.googleusercontent.com/d/1YaM3voFuO4rkJ6awTD1Bxw4JEizihIKo",
  "https://lh3.googleusercontent.com/d/1mjQ40Vf2dxaNtzYZxITuq4uWP66TkeA0",
  "https://lh3.googleusercontent.com/d/1Brs3tnnfAUNdWoprELGoZ74ADdMjnEwP",
  "https://lh3.googleusercontent.com/d/1z7nlWnad5CSqgahSV65YJpX42aBzoReH",
  "https://lh3.googleusercontent.com/d/18j9MX94Fr2n-fdlqwTp75xWVMUAHhUOh"
];

const homeNews = [
  {
    id: 4,
    title: "Menjelajahi Imajinasi: Siswa Kelas 6 SDN Pekayon 09 Menulis Cerita Fiksi Ilmiah",
    date: "04 Maret 2026",
    excerpt: "Pembelajaran Bahasa Indonesia di SDN Pekayon 09 kini semakin menyenangkan. Siswa-siswi kelas 6 diajak menjelajahi batas imajinasi melalui materi penulisan Cerita Fiksi Ilmiah.",
    content: `JAKARTA – Pembelajaran Bahasa Indonesia di SDN Pekayon 09 kini semakin menyenangkan dan penuh warna. Di bawah bimbingan Bapak Teguh Firmansyah Apriliana, siswa-siswi kelas 6 diajak untuk menjelajahi batas imajinasi mereka melalui materi penulisan Cerita Fiksi Ilmiah (Science Fiction).

Dalam proyek pembelajaran kali ini, anak-anak tidak hanya dituntut untuk mahir merangkai kata dan memahami struktur cerita, tetapi juga berani mengeksplorasi ide-ide futuristik dan teknologi masa depan. Mereka dibagi menjadi beberapa kelompok dan diberikan kebebasan untuk menentukan tema cerita fiksi ilmiah mereka sendiri.

Hasilnya sungguh di luar dugaan! Berbagai karya kreatif dengan visual yang menarik lahir dari tangan siswa-siswi kelas 6. Beberapa karya yang menonjol di antaranya adalah cerita petualangan luar angkasa berjudul "Petualangan Planet Merah", kisah futuristik penyelamatan lingkungan lewat "Smart Recyclebot", hingga kisah kepahlawanan epik dalam "Menyelamatkan Bumi dari Wabah Parasit" dan "Astra Kota Harapan".

Proses pembelajaran tidak berhenti pada tahap penulisan dan pembuatan poster. Untuk melatih kemampuan berbicara (public speaking) dan rasa percaya diri, setiap kelompok juga mempresentasikan hasil karya mereka di depan kelas. Dengan antusias, mereka menceritakan alur cerita, memperkenalkan tokoh-tokoh ciptaan mereka, dan menjelaskan teknologi fiksi yang ada di dalam cerita tersebut.

Sebagai bentuk apresiasi atas kerja keras dan kreativitas siswa, Bapak Teguh Firmansyah Apriliana memajang seluruh hasil karya tersebut di Majalah Dinding (Mading) sekolah. Kini, jajaran poster film fiksi ilmiah dan lembar cerita karya anak-anak kelas 6 menghiasi mading dan menjadi pusat perhatian seluruh warga sekolah.

Langkah ini tidak hanya menumbuhkan rasa bangga pada diri siswa yang karyanya dipajang, tetapi juga diharapkan mampu menginspirasi adik-adik kelas untuk ikut berkarya. Melalui pembelajaran yang interaktif and apresiatif seperti ini, SDN Pekayon 09 terus berkomitmen mencetak generasi yang tidak hanya cerdas secara akademik, tetapi juga kaya akan literasi dan imajinasi.

Siapa tahu, dari kelas 6 ini kelak akan lahir penulis-penulis hebat atau ilmuwan masa depan yang terinspirasi dari karya fiksi ilmiah mereka sendiri!`,
    image: "https://lh3.googleusercontent.com/d/1i_3DsKAbjnFR6nu2YuoMG6nRZsnJjd6Z",
    gallery: [
      "https://lh3.googleusercontent.com/d/1i_3DsKAbjnFR6nu2YuoMG6nRZsnJjd6Z",
      "https://lh3.googleusercontent.com/d/1zSbUzZ4SFzPfrxXOMIWUs75e3RTQbWxe",
      "https://lh3.googleusercontent.com/d/1SRX9fOIBTpXtjoFgADQFUkPEDqprPGTj"
    ],
    link: "#",
    category: "Kegiatan"
  },
  {
    id: 1,
    title: "✨ CAHAYA RAMADHAN 1447 H ✨ - Episode 1: Berbakti Kepada Orangtua",
    date: "04 Maret 2026",
    excerpt: "Ramadhan bukan hanya tentang menahan lapar dan haus, tetapi juga tentang menghadirkan cahaya kebaikan dalam hati 💛. Di episode pertama ini, mari belajar bersama bagaimana cara berbakti kepada orangtua sebagai jalan menuju ridha Allah SWT.",
    content: `Ramadhan bukan hanya tentang menahan lapar dan haus, tetapi juga tentang menghadirkan cahaya kebaikan dalam hati 💛

Di episode pertama ini, mari belajar bersama bagaimana cara berbakti kepada orangtua sebagai jalan menuju ridha Allah SWT. Karena surga pun terletak di bawah telapak kaki ibu, dan doa ayah adalah kekuatan bagi langkah kita 🌙🤲

Yuk, saksikan dan ambil hikmahnya bersama keluarga tercinta!

Semoga Ramadhan kali ini menjadikan kita anak yang lebih taat, lebih santun, dan lebih penuh cinta 💕`,
    image: "https://lh3.googleusercontent.com/d/11CZ2U1azcZOoCROBFrJkkUxHs4_pxSgk",
    link: "https://www.instagram.com/p/DVJeILNCRUW/",
    videoUrl: "https://www.youtube.com/watch?v=u9CrSg6GS9w",
    category: "Religi",
    isExternal: true
  }
];

export default function Home() {
  const [selectedNews, setSelectedNews] = useState<typeof homeNews[0] | null>(null);

  const handleShare = async (e: React.MouseEvent, news: typeof homeNews[0]) => {
    e.stopPropagation();
    const shareData = {
      title: news.title,
      text: news.excerpt,
      url: window.location.origin + '/berita',
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch (err) {
        if ((err as Error).name !== 'AbortError') {
          console.error('Error sharing:', err);
        }
      }
    } else {
      navigator.clipboard.writeText(window.location.origin + '/berita');
      alert('Link berita telah disalin!');
    }
  };

  return (
    <div className="bg-gray-50 pb-20">
      <Hero />

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
                <div className="mb-4">
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
                {homeNews.map((news) => (
                  <div 
                    key={news.id} 
                    className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden group cursor-pointer flex flex-col"
                    onClick={() => setSelectedNews(news)}
                  >
                    <div className="h-48 overflow-hidden relative">
                      <img 
                        src={news.image} 
                        alt={news.title} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                        referrerPolicy="no-referrer" 
                      />
                      {news.isExternal && (
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                          <PlayCircle className="w-12 h-12 text-white" />
                        </div>
                      )}
                    </div>
                    <div className="p-6 flex-grow flex flex-col">
                      <div className="flex items-center gap-2 text-gray-500 text-xs mb-3">
                        <Calendar className="w-4 h-4" />
                        <span>{news.date}</span>
                      </div>
                      <h3 className="font-bold text-lg text-gray-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
                        {news.title}
                      </h3>
                      <p className="text-gray-600 text-sm line-clamp-2 mb-4 flex-grow">
                        {news.excerpt}
                      </p>
                      <div className="flex items-center justify-between mt-auto">
                        <button 
                          className="inline-flex items-center gap-2 text-blue-600 font-bold hover:text-blue-700 transition-colors text-sm"
                          onClick={(e) => {
                            e.stopPropagation();
                            setSelectedNews(news);
                          }}
                        >
                          Selengkapnya <ArrowRight className="w-4 h-4" />
                        </button>
                        <button 
                          onClick={(e) => handleShare(e, news)}
                          className="p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-full transition-all"
                          title="Bagikan"
                        >
                          <Share2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
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
                <a 
                  href="http://103.130.165.123:5774/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl border border-gray-100 hover:border-blue-200 hover:bg-blue-50 transition-all group"
                >
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-sm">Aplikasi Dapodik</h4>
                    <p className="text-xs text-gray-500">Data Pokok Pendidikan</p>
                  </div>
                </a>
                <a 
                  href="http://103.130.165.123:8535/login" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl border border-gray-100 hover:border-emerald-200 hover:bg-emerald-50 transition-all group"
                >
                  <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-sm">e-Rapor SD</h4>
                    <p className="text-xs text-gray-500">Sistem Penilaian Siswa</p>
                  </div>
                </a>
                <a 
                  href="https://spmb.jakarta.go.id/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl border border-gray-100 hover:border-yellow-200 hover:bg-yellow-50 transition-all group"
                >
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

      {/* News Modal */}
      <AnimatePresence>
        {selectedNews && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedNews(null)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-3xl bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
            >
              <div className="absolute top-4 right-4 z-10 flex gap-2">
                <button
                  onClick={(e) => handleShare(e, selectedNews)}
                  className="p-2 bg-black/20 hover:bg-black/40 text-white rounded-full transition-colors"
                  title="Bagikan"
                >
                  <Share2 className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setSelectedNews(null)}
                  className="p-2 bg-black/20 hover:bg-black/40 text-white rounded-full transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="overflow-y-auto">
                <div className="relative h-64 sm:h-80">
                  <img
                    src={selectedNews.image}
                    alt={selectedNews.title}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <span className="bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full mb-3 inline-block">
                      {selectedNews.category}
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-bold text-white leading-tight">
                      {selectedNews.title}
                    </h2>
                  </div>
                </div>

                <div className="p-6 sm:p-10">
                  <div className="flex items-center gap-4 text-gray-500 text-sm mb-8 pb-6 border-bottom border-gray-100">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>{selectedNews.date}</span>
                    </div>
                    <div className="w-1 h-1 bg-gray-300 rounded-full" />
                    <span>Oleh Admin Sekolah</span>
                  </div>

                  <div className="prose prose-blue max-w-none">
                    <p className="text-gray-700 leading-relaxed text-lg whitespace-pre-line">
                      {selectedNews.content}
                    </p>
                  </div>

                  {/* Gallery Section */}
                  {'gallery' in selectedNews && selectedNews.gallery && (
                    <div className="mt-10">
                      <h4 className="font-bold text-gray-900 mb-4">Galeri Foto</h4>
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                        {selectedNews.gallery.map((img, idx) => (
                          <div key={idx} className="aspect-square rounded-xl overflow-hidden border border-gray-100 shadow-sm">
                            <img 
                              src={img} 
                              alt={`Gallery ${idx + 1}`} 
                              className="w-full h-full object-cover hover:scale-110 transition-transform duration-500 cursor-pointer"
                              referrerPolicy="no-referrer"
                              onClick={() => window.open(img, '_blank')}
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {selectedNews.isExternal && (
                    <div className="mt-10 p-6 bg-blue-50 rounded-2xl border border-blue-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                      <div>
                        <h4 className="font-bold text-blue-900 mb-1">Lihat Konten Lengkap</h4>
                        <p className="text-sm text-blue-700">Saksikan video ceramah selengkapnya di media sosial kami.</p>
                      </div>
                      <div className="flex gap-3">
                        {selectedNews.videoUrl && (
                          <a
                            href={selectedNews.videoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-xl font-bold transition-colors flex items-center gap-2"
                          >
                            <PlayCircle className="w-5 h-5" /> YouTube
                          </a>
                        )}
                        <a
                          href={selectedNews.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-600 hover:opacity-90 text-white px-6 py-2 rounded-xl font-bold transition-all flex items-center gap-2 shadow-lg"
                        >
                          <ExternalLink className="w-5 h-5" /> Instagram
                        </a>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
