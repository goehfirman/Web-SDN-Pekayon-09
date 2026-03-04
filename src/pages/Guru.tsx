import { Search, Mail, Info, ChevronLeft, ChevronRight } from 'lucide-react';

const teachers = [
  {
    name: 'Veria Wulandari, M.Pd',
    role: 'Kepala Sekolah',
    image: 'https://lh3.googleusercontent.com/d/1Gz5YjWKIPhVLepZaTxMQkBhfHHq5daRU',
    bgColor: 'bg-emerald-100',
  },
  {
    name: 'Suparja, S.Pd',
    role: 'Wakil Kepala Sekolah Guru Kelas 6B',
    image: 'https://lh3.googleusercontent.com/d/1_4CvNwIZWeSJUKyZBAr5FRFgkbQInDzC',
    bgColor: 'bg-lime-100',
  },
  {
    name: 'Teguh Firmansyah Apriliana, S.Pd',
    role: 'Guru Kelas 6A',
    image: 'https://lh3.googleusercontent.com/d/1F48sEZDGtkqGAC6QXuKzo4cTZctpvFUX',
    bgColor: 'bg-amber-100',
  },
  {
    name: 'Ristriyono Ahmad Nugroho, S.Pd',
    role: 'Guru Kelas 5A',
    image: 'https://lh3.googleusercontent.com/d/1c6Z54EkMet6qAvcVHm-K9131dl9dOD1K',
    bgColor: 'bg-green-200',
  },
  {
    name: 'Yuni Sulistyati, S.Pd',
    role: 'Guru Kelas 5B',
    image: 'https://lh3.googleusercontent.com/d/15uarRfasN74SqmKRiJcByMHUfEkwecB4',
    bgColor: 'bg-red-100',
  },
  {
    name: 'Winda Indri Hastuti, S.Pd',
    role: 'Guru Kelas 5C',
    image: 'https://lh3.googleusercontent.com/d/1m5YgM5ycHVSIvgRqVxbC13eISp2OUaTE',
    bgColor: 'bg-rose-100',
  },
  {
    name: 'Tina Violenta, S.Pd',
    role: 'Guru Kelas 4A',
    image: 'https://lh3.googleusercontent.com/d/1EXZxvm7yUJfX0rQfk4GYASa5z_At3yVe',
    bgColor: 'bg-indigo-100',
  },
  {
    name: 'Iqbal Nurzeha, S.Pd',
    role: 'Guru Kelas 4B',
    image: 'https://lh3.googleusercontent.com/d/1Cy0_Fmjy9K_1n-YxeE6DGyEYbjkYGeE0',
    bgColor: 'bg-blue-200',
  },
  {
    name: 'Sri Jayati, S.Pd',
    role: 'Guru Kelas 3',
    image: 'https://lh3.googleusercontent.com/d/1PwZtnTAlrvDF1Sai9craubmsY3472Dbh',
    bgColor: 'bg-yellow-100',
  },
  {
    name: 'Riri Dzikrianti, S.Pd',
    role: 'Guru Kelas 2A',
    image: 'https://lh3.googleusercontent.com/d/1ee03biGJQnAIJ4PLPTA_Rkae8TK061K1',
    bgColor: 'bg-purple-100',
  },
  {
    name: 'Ista Annisa, S.Pd',
    role: 'Guru Kelas 2B',
    image: 'https://lh3.googleusercontent.com/d/13-OZ2zUOR9LbvAIfvq2EeXXgQa17Ug22',
    bgColor: 'bg-fuchsia-100',
  },
  {
    name: 'Yayah Munyati, S.Pd',
    role: 'Guru Kelas 1A',
    image: 'https://lh3.googleusercontent.com/d/1N9pULxzbYWDN-jiYdTeknixYUB4Vl_Uw',
    bgColor: 'bg-yellow-200',
  },
  {
    name: 'Nararya Piardini, S.Pd',
    role: 'Guru Kelas 1B',
    image: 'https://lh3.googleusercontent.com/d/1clq9nEMjXTvHJQeuuItnVGQL8GT1PeF2',
    bgColor: 'bg-pink-100',
  },
  {
    name: 'Desy Ratnasari, S.Pd',
    role: 'Guru Kelas 1C',
    image: 'https://lh3.googleusercontent.com/d/16p6k_1lRv9ZmzKHl0kWdhTPAslTOvPhr',
    bgColor: 'bg-orange-100',
  },
  {
    name: 'Prabowo Setya Nugroho, S.Pd',
    role: 'Guru PJOK',
    image: 'https://lh3.googleusercontent.com/d/1kyd0jQNX8MPeTrVbYmy5mdwRMFTtW1WA',
    bgColor: 'bg-blue-100',
  },
  {
    name: 'Muchari Tri Widodo, S.Ag',
    role: 'Guru PAI',
    image: 'https://lh3.googleusercontent.com/d/1ArfSKLsjLS8hXtWxUhKN3p_EptnYPQK8',
    bgColor: 'bg-green-100',
  },
  {
    name: 'Abdurohim Boymau, S.Pd',
    role: 'Guru PAI',
    image: 'https://lh3.googleusercontent.com/d/19pCiyfCXMz8mV06thayDwqtxvPX1jYCy',
    bgColor: 'bg-teal-100',
  },
  {
    name: 'Tri Hadi',
    role: 'Operator',
    image: 'https://lh3.googleusercontent.com/d/1aApRGfMWbdy_doSsaSoq4M5ADToRX2Qy',
    bgColor: 'bg-cyan-100',
  },
  {
    name: 'Muhammad Hasbi',
    role: 'Penjaga Sekolah',
    image: 'https://lh3.googleusercontent.com/d/15tFcNXNAS5BusvvpFYWq48EraEHc62pl',
    bgColor: 'bg-gray-200',
  },
  {
    name: 'Erwin',
    role: 'Penjaga Sekolah',
    image: 'https://lh3.googleusercontent.com/d/1UtsARhfgLdBDsbeKBxQgd6RUSC_c0YDf',
    bgColor: 'bg-slate-200',
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

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {teachers.map((teacher, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden group hover:shadow-md transition-shadow">
              <div className={`aspect-square ${teacher.bgColor} relative overflow-hidden`}>
                <img 
                  src={teacher.image} 
                  alt={teacher.name} 
                  className="w-full h-full object-cover object-top grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500 mix-blend-multiply"
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
      </div>
    </div>
  );
}
