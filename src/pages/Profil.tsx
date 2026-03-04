export default function Profil() {
  return (
    <div className="bg-gray-50 min-h-screen pb-20">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center gap-4">
          <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center border border-gray-200">
            <svg className="w-6 h-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0v7" />
            </svg>
          </div>
          <div>
            <div className="text-xs font-medium text-gray-500 uppercase tracking-wider">Kementerian Pendidikan Dasar dan Menengah</div>
            <h1 className="text-2xl font-bold text-blue-600 tracking-tight">DATA REFERENSI</h1>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-10">SDN PEKAYON 09</h2>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          {/* Tabs */}
          <div className="flex overflow-x-auto bg-gray-100 border-b border-gray-200">
            <button className="px-6 py-4 text-sm font-medium text-gray-900 bg-white border-t-2 border-blue-500 whitespace-nowrap">
              Identitas Satuan Pendidikan
            </button>
            <button className="px-6 py-4 text-sm font-medium text-gray-500 hover:text-gray-700 whitespace-nowrap">
              Dokumen dan Perijinan
            </button>
            <button className="px-6 py-4 text-sm font-medium text-gray-500 hover:text-gray-700 whitespace-nowrap">
              Sarana dan Prasarana
            </button>
            <button className="px-6 py-4 text-sm font-medium text-gray-500 hover:text-gray-700 whitespace-nowrap">
              Kontak
            </button>
            <button className="px-6 py-4 text-sm font-medium text-gray-500 hover:text-gray-700 whitespace-nowrap">
              Peta
            </button>
          </div>

          {/* Content */}
          <div className="p-8 bg-gray-50/50">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-y-6 text-sm">
              <div className="md:col-span-3 text-gray-500">Nama</div>
              <div className="md:col-span-9 font-medium text-gray-900">: SDN Pekayon 09</div>

              <div className="md:col-span-3 text-gray-500">NPSN</div>
              <div className="md:col-span-9 font-medium text-blue-500">: 20108981</div>

              <div className="md:col-span-3 text-gray-500">Alamat</div>
              <div className="md:col-span-9 font-medium text-gray-900">: Jl. Pendidikan RT.004 RW.009 No.4</div>

              <div className="md:col-span-3 text-gray-500">Desa/Kelurahan</div>
              <div className="md:col-span-9 font-medium text-gray-900">: PEKAYON</div>

              <div className="md:col-span-3 text-gray-500">Kecamatan/Kota (LN)</div>
              <div className="md:col-span-9 font-medium text-gray-900">: KEC. PASAR REBO</div>

              <div className="md:col-span-3 text-gray-500">Kab.-Kota/Negara (LN)</div>
              <div className="md:col-span-9 font-medium text-gray-900">: KOTA ADM. JAKARTA TIMUR</div>

              <div className="md:col-span-3 text-gray-500">Propinsi/Luar Negeri (LN)</div>
              <div className="md:col-span-9 font-medium text-gray-900">: PROV. D.K.I. JAKARTA</div>

              <div className="md:col-span-3 text-gray-500">Status Sekolah</div>
              <div className="md:col-span-9 font-medium text-gray-900">: NEGERI</div>

              <div className="md:col-span-3 text-gray-500">Bentuk Pendidikan</div>
              <div className="md:col-span-9 font-medium text-gray-900">: SD</div>

              <div className="md:col-span-3 text-gray-500">Jenjang Pendidikan</div>
              <div className="md:col-span-9 font-medium text-gray-900">: DIKDAS</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
