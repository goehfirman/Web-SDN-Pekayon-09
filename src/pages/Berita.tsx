import React, { useState } from 'react';
import { Calendar, ArrowRight, PlayCircle, X, ExternalLink, Share2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const newsItems = [
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

export default function Berita() {
  const [selectedNews, setSelectedNews] = useState<typeof newsItems[0] | null>(null);

  const handleShare = async (e: React.MouseEvent, news: typeof newsItems[0]) => {
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
    <div className="bg-gray-50 min-h-screen pb-20">
      {/* Header */}
      <div className="bg-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">Berita & Artikel</h1>
          <p className="text-blue-100 text-lg">Informasi terbaru seputar kegiatan dan prestasi SDN Pekayon 09</p>
        </div>
      </div>

      {/* News Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsItems.map((news) => (
            <div 
              key={news.id} 
              className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden group flex flex-col cursor-pointer"
              onClick={() => setSelectedNews(news)}
            >
              <div className="h-56 overflow-hidden relative">
                <img 
                  src={news.image} 
                  alt={news.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                    {news.category}
                  </span>
                </div>
                {news.isExternal && (
                  <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <PlayCircle className="w-12 h-12 text-white" />
                  </div>
                )}
              </div>
              <div className="p-6 flex-grow flex flex-col">
                <div className="flex items-center gap-2 text-gray-500 text-xs mb-3">
                  <Calendar className="w-4 h-4" />
                  <span>{news.date}</span>
                </div>
                <h2 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
                  {news.title}
                </h2>
                <p className="text-gray-600 text-sm mb-6 line-clamp-3 flex-grow">
                  {news.excerpt}
                </p>
                <div className="flex items-center justify-between mt-auto">
                  <button 
                    className="inline-flex items-center gap-2 text-blue-600 font-bold hover:text-blue-700 transition-colors"
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
                    <Share2 className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
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
              {/* Close Button */}
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
