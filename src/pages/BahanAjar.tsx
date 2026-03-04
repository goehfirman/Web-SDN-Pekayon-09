import { useState } from 'react';
import { Book, Video, Monitor, Gamepad2, Search, ExternalLink, Download, PlayCircle, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const categories = [
  { id: 'library', name: 'Perpustakaan Digital', icon: Book, color: 'bg-blue-500' },
  { id: 'videos', name: 'Video Pembelajaran', icon: Video, color: 'bg-red-500' },
  { id: 'media', name: 'Media Pembelajaran', icon: Monitor, color: 'bg-emerald-500' },
  { id: 'games', name: 'Permainan Edukasi', icon: Gamepad2, color: 'bg-amber-500' },
];

const materials = {
  library: [
    { 
      title: 'Gambar Lucu Mika', 
      type: 'Flipbook', 
      size: 'Interactive', 
      icon: Book, 
      embedUrl: 'https://online.fliphtml5.com/sdnpekayon09/Gambar_Lucu_Mika_Diksus/',
      pdfUrl: 'https://static-sc.cloudapp.web.id/content/pdf/bukuteks/kurikulum21/Gambar_Lucu_Mika_Diksus.pdf',
      thumbnail: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&q=80&w=400'
    },
  ],
  videos: [],
  media: [],
  games: [],
};

export default function BahanAjar() {
  const [activeTab, setActiveTab] = useState('library');
  const [selectedEmbed, setSelectedEmbed] = useState<{ title: string; url: string } | null>(null);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col md:flex-row">
      {/* Sidebar Dashboard */}
      <aside className="w-full md:w-72 bg-white border-r border-gray-200 p-6 shrink-0">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <Book className="w-5 h-5 text-white" />
            </div>
            Bahan Ajar
          </h2>
          <p className="text-sm text-gray-500 mt-1">Pusat sumber belajar siswa</p>
        </div>

        <nav className="space-y-2">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeTab === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold transition-all ${
                  isActive
                    ? `${cat.color} text-white shadow-lg shadow-blue-200 scale-[1.02]`
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                <Icon className={`w-5 h-5 ${isActive ? 'text-white' : 'text-gray-400'}`} />
                {cat.name}
              </button>
            );
          })}
        </nav>

        <div className="mt-12 p-4 bg-blue-50 rounded-2xl border border-blue-100">
          <h4 className="text-xs font-bold text-blue-600 uppercase tracking-wider mb-2">Butuh Bantuan?</h4>
          <p className="text-xs text-blue-700 leading-relaxed">
            Jika kesulitan mengakses materi, hubungi wali kelas masing-masing.
          </p>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-grow p-6 md:p-10">
        <div className="max-w-5xl mx-auto">
          {/* Top Bar */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                {categories.find(c => c.id === activeTab)?.name}
              </h1>
              <p className="text-gray-500">Temukan materi belajar yang menarik untukmu!</p>
            </div>
          </div>

          {/* Content Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {materials[activeTab as keyof typeof materials].map((item: any, idx) => (
                <div
                  key={idx}
                  onClick={() => item.embedUrl ? setSelectedEmbed({ title: item.title, url: item.embedUrl }) : null}
                  className="group bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-xl hover:border-blue-200 transition-all cursor-pointer flex flex-col"
                >
                  {item.thumbnail ? (
                    <div className="aspect-[4/3] w-full overflow-hidden bg-gray-100">
                      <img 
                        src={item.thumbnail} 
                        alt={item.title} 
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                  ) : (
                    <div className="p-6 pb-0">
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-transform group-hover:scale-110 ${
                        activeTab === 'library' ? 'bg-blue-100 text-blue-600' :
                        activeTab === 'videos' ? 'bg-red-100 text-red-600' :
                        activeTab === 'media' ? 'bg-emerald-100 text-emerald-600' :
                        'bg-amber-100 text-amber-600'
                      }`}>
                        <item.icon className="w-6 h-6" />
                      </div>
                    </div>
                  )}
                  
                  <div className="p-6 pt-4 flex-grow">
                    <h3 className="font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                      {item.title}
                    </h3>
                    <div className="flex items-center justify-between mt-4">
                      <span className="text-xs font-medium text-gray-500 px-2 py-1 bg-gray-100 rounded-md">
                        {'type' in item ? item.type : 'duration' in item ? item.duration : 'format' in item ? item.format : item.players}
                      </span>
                      <div className="flex gap-2">
                        {item.pdfUrl && (
                          <a 
                            href={item.pdfUrl} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="p-2 bg-emerald-50 text-emerald-600 rounded-lg hover:bg-emerald-600 hover:text-white transition-all"
                            title="Unduh PDF"
                          >
                            <Download className="w-4 h-4" />
                          </a>
                        )}
                        {item.embedUrl ? (
                          <button 
                            className="p-2 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-600 hover:text-white transition-all"
                            title="Baca Flipbook"
                          >
                            <ExternalLink className="w-4 h-4" />
                          </button>
                        ) : activeTab === 'videos' ? (
                          <button className="p-2 bg-red-50 text-red-600 rounded-lg hover:bg-red-600 hover:text-white transition-all">
                            <PlayCircle className="w-4 h-4" />
                          </button>
                        ) : activeTab === 'games' ? (
                          <button className="p-2 bg-amber-50 text-amber-600 rounded-lg hover:bg-amber-600 hover:text-white transition-all">
                            <ExternalLink className="w-4 h-4" />
                          </button>
                        ) : (
                          <button className="p-2 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-600 hover:text-white transition-all">
                            <Download className="w-4 h-4" />
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Embed Modal */}
          <AnimatePresence>
            {selectedEmbed && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10 bg-black/60 backdrop-blur-sm"
              >
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.9, opacity: 0 }}
                  className="bg-white w-full max-w-6xl h-full max-h-[90vh] rounded-3xl overflow-hidden flex flex-col shadow-2xl"
                >
                  <div className="px-6 py-4 border-b border-gray-100 flex items-center justify-between bg-white">
                    <h3 className="font-bold text-gray-900">{selectedEmbed.title}</h3>
                    <button 
                      onClick={() => setSelectedEmbed(null)}
                      className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                    >
                      <X className="w-6 h-6 text-gray-500" />
                    </button>
                  </div>
                  <div className="flex-grow bg-gray-100 relative">
                    <iframe 
                      src={selectedEmbed.url} 
                      className="absolute inset-0 w-full h-full border-none"
                      title={selectedEmbed.title}
                      allowFullScreen
                    ></iframe>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </main>
    </div>
  );
}
