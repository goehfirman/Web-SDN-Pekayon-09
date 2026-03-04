import { ArrowDown, Eye, Sparkles, GraduationCap, Brain, Trophy, Leaf, HeartHandshake, Star, Gamepad2, Handshake, Laptop, TreePine, Users, Info, FileText, Building, Phone } from 'lucide-react';

export default function Profil() {
  return (
    <div className="bg-slate-50 text-slate-900">
      {/* Header / Hero */}
      <header className="bg-gradient-to-br from-blue-600 to-blue-700 relative py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img alt="Background Pattern" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBo319L2dtCdRIRmJhwKDyjIfLlmSQkVi7eytlu2bfvWFVsXdl_v8Cf_wzlVLkAtb3IuPaQAx_oPSvgJyRBpI_igbd1yPnxhAW9RyClvLMwUPsS1G40XNuzokVzyt4yWVMCUQ2wvlrOon6WqAGXB_I5LIn-Q0i6qlZwIjwKdOju11iy7E2yz_JbY96DHXNVFBvLh20w7_OgLCWlwxklbpuYcNx-hxQGxwpoAF25HlULZd8j7bFtTqz-KVyCdzcN8zQoROccPPw47t75" referrerPolicy="no-referrer" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="max-w-2xl">
              <span className="inline-block px-4 py-1.5 rounded-full bg-amber-400/20 text-amber-400 font-semibold text-xs uppercase tracking-widest mb-4">Tentang Kami</span>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-6 leading-tight">
                Profil <br />
                <span className="text-amber-400">SDN Pekayon 09</span>
              </h1>
              <p className="text-lg text-blue-50 mb-8 leading-relaxed">
                Mengenal lebih dalam institusi pendidikan yang berkomitmen mencetak generasi cerdas, berkarakter, dan berbudaya lingkungan untuk masa depan yang gemilang.
              </p>
              <div className="flex flex-wrap gap-4">
                <a className="bg-amber-400 text-slate-900 px-8 py-3 rounded-full font-bold hover:bg-yellow-400 transition-all flex items-center gap-2" href="#visi-misi">
                  Visi & Misi <ArrowDown className="w-4 h-4" />
                </a>
                <a className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-3 rounded-full font-bold hover:bg-white/20 transition-all" href="#identitas">
                  Identitas Sekolah
                </a>
              </div>
            </div>
            <div className="relative w-full max-w-lg">
              <div className="absolute -inset-4 bg-amber-400/30 blur-2xl rounded-full"></div>
              <img alt="Gedung SDN Pekayon 09" className="relative rounded-2xl shadow-2xl border-4 border-white/20 object-cover aspect-video md:aspect-[4/3]" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC9XCf6XLBiA2rFfkAHZ5virAfcr60JPXYmL-yxgLfdDDgh8QJFqdYaBdM8LZOMGTk2qMNDalbzPF64I-opz_naSLbdQd84PMBhXlCxHWRbukgyRJD-KgUYT4-MEOy2mgn0c0jgOWWOVy-Ps2lByTNrwrKGugS4zKHZf804GIeNuaweLAnFzvA4zFFbhZJ4NxCYJ0ajzPilgcBT8iwTa4AJFA2Me6sizGpyTSV_fpQmM9P5vM0SypUBw4CFtqikKHfKf8R0XEt48Mma" referrerPolicy="no-referrer" />
            </div>
          </div>
        </div>
      </header>

      <section className="py-24 bg-white" id="visi-misi">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div className="sticky top-32">
              <div className="bg-blue-600 rounded-3xl p-10 text-white relative overflow-hidden shadow-2xl">
                <Eye className="w-32 h-32 absolute -right-4 -bottom-4 opacity-10" />
                <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                  <span className="w-12 h-1 rounded-full bg-amber-400"></span>
                  Visi Sekolah
                </h2>
                <blockquote className="text-2xl font-medium italic leading-relaxed">
                  "Terwujudnya peserta didik yang beriman, bertaqwa kepada Tuhan Yang Maha Esa, berkarakter, unggul dan berprestasi"
                </blockquote>
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-8 text-slate-900 flex items-center gap-3">
                <span className="w-12 h-1 rounded-full bg-blue-600"></span>
                Misi Sekolah
              </h2>
              <div className="space-y-4">
                <div className="flex items-start gap-4 p-5 rounded-2xl bg-slate-50 border border-slate-100 hover:border-blue-600 transition-all">
                  <div className="bg-blue-600/10 p-2 rounded-xl">
                    <Sparkles className="w-6 h-6 text-blue-600" />
                  </div>
                  <p className="text-slate-700">Menanamkan keimanan, ketaqwaan, dan akhlak mulia dalam setiap kegiatan sekolah.</p>
                </div>
                <div className="flex items-start gap-4 p-5 rounded-2xl bg-slate-50 border border-slate-100 hover:border-blue-600 transition-all">
                  <div className="bg-blue-600/10 p-2 rounded-xl">
                    <HeartHandshake className="w-6 h-6 text-blue-600" />
                  </div>
                  <p className="text-slate-700">Meningkatkan keimanan dan ketaqwaan melalui pembelajaran dan pembiasaan di sekolah.</p>
                </div>
                <div className="flex items-start gap-4 p-5 rounded-2xl bg-slate-50 border border-slate-100 hover:border-blue-600 transition-all">
                  <div className="bg-blue-600/10 p-2 rounded-xl">
                    <Users className="w-6 h-6 text-blue-600" />
                  </div>
                  <p className="text-slate-700">Membentuk peserta didik yang berkarakter sesuai profil pelajar Pancasila.</p>
                </div>
                <div className="flex items-start gap-4 p-5 rounded-2xl bg-slate-50 border border-slate-100 hover:border-blue-600 transition-all">
                  <div className="bg-blue-600/10 p-2 rounded-xl">
                    <Handshake className="w-6 h-6 text-blue-600" />
                  </div>
                  <p className="text-slate-700">Menanamkan budaya mutu, tepat waktu, disiplin, dan kerjasama team bagi setiap warga sekolah.</p>
                </div>
                <div className="flex items-start gap-4 p-5 rounded-2xl bg-slate-50 border border-slate-100 hover:border-blue-600 transition-all">
                  <div className="bg-blue-600/10 p-2 rounded-xl">
                    <Star className="w-6 h-6 text-blue-600" />
                  </div>
                  <p className="text-slate-700">Membudayakan 7 S (Senyum, Salam, Sapa, Sopan, Santun, Sigap, dan Semangat).</p>
                </div>
                <div className="flex items-start gap-4 p-5 rounded-2xl bg-slate-50 border border-slate-100 hover:border-blue-600 transition-all">
                  <div className="bg-blue-600/10 p-2 rounded-xl">
                    <Laptop className="w-6 h-6 text-blue-600" />
                  </div>
                  <p className="text-slate-700">Mengembangkan pembelajaran yang kreatif, inovatif, menyenangkan, dan berpusat pada peserta didik dengan mengintegrasikan IPTEK.</p>
                </div>
                <div className="flex items-start gap-4 p-5 rounded-2xl bg-slate-50 border border-slate-100 hover:border-blue-600 transition-all">
                  <div className="bg-blue-600/10 p-2 rounded-xl">
                    <Trophy className="w-6 h-6 text-blue-600" />
                  </div>
                  <p className="text-slate-700">Meningkatkan prestasi akademik, dan non akademik.</p>
                </div>
                <div className="flex items-start gap-4 p-5 rounded-2xl bg-slate-50 border border-slate-100 hover:border-blue-600 transition-all">
                  <div className="bg-blue-600/10 p-2 rounded-xl">
                    <GraduationCap className="w-6 h-6 text-blue-600" />
                  </div>
                  <p className="text-slate-700">Memberdayakan tenaga pendidik dan kependidikan dalam memberikan pelayanan peserta didik.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4 text-slate-900">Tujuan Sekolah</h2>
            <div className="w-20 h-1 bg-amber-400 mx-auto mb-6"></div>
            <p className="text-slate-600">
              Tujuan pendidikan dasar adalah meletakkan dasar kecerdasan, pengetahuan, kepribadian, akhlak mulia, serta keterampilan untuk hidup mandiri dan mengikuti pendidikan lebih lanjut. Merujuk pada tujuan pendidikan dasar tersebut, maka tujuan Sekolah Dasar Negeri SDN Pekayon 09 adalah sebagai berikut:
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-8 rounded-3xl border border-slate-100 hover:shadow-xl transition-all group">
              <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors">
                <Sparkles className="w-6 h-6 text-blue-600 group-hover:text-white" />
              </div>
              <p className="text-sm text-slate-600 leading-relaxed">Dapat mengamalkan ajaran agama hasil proses pembelajaran dan kegiatan melalui pembiasaan.</p>
            </div>
            <div className="bg-white p-8 rounded-3xl border border-slate-100 hover:shadow-xl transition-all group">
              <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors">
                <GraduationCap className="w-6 h-6 text-blue-600 group-hover:text-white" />
              </div>
              <p className="text-sm text-slate-600 leading-relaxed">Meraih ketercapaian standar lulusan.</p>
            </div>
            <div className="bg-white p-8 rounded-3xl border border-slate-100 hover:shadow-xl transition-all group">
              <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors">
                <Brain className="w-6 h-6 text-blue-600 group-hover:text-white" />
              </div>
              <p className="text-sm text-slate-600 leading-relaxed">Terbentuknya budaya karakter, religius, inovatif, kreatif, dan mandiri.</p>
            </div>
            <div className="bg-white p-8 rounded-3xl border border-slate-100 hover:shadow-xl transition-all group">
              <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors">
                <Laptop className="w-6 h-6 text-blue-600 group-hover:text-white" />
              </div>
              <p className="text-sm text-slate-600 leading-relaxed">Pemanfaatan IT dan Multimedia.</p>
            </div>
            <div className="bg-white p-8 rounded-3xl border border-slate-100 hover:shadow-xl transition-all group">
              <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors">
                <Trophy className="w-6 h-6 text-blue-600 group-hover:text-white" />
              </div>
              <p className="text-sm text-slate-600 leading-relaxed">Meningkatkan prestasi non akademik dalam bidang agama, kesenian, olahraga dan kecakapan hidup, untuk mengembangkan minat dan bakat.</p>
            </div>
            <div className="bg-white p-8 rounded-3xl border border-slate-100 hover:shadow-xl transition-all group">
              <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors">
                <FileText className="w-6 h-6 text-blue-600 group-hover:text-white" />
              </div>
              <p className="text-sm text-slate-600 leading-relaxed">Peserta didik memiliki dasar-dasar pengetahuan, kemampuan, dan keterampilan untuk melanjutkan pendidikan pada jenjang yang lebih tinggi.</p>
            </div>
            <div className="bg-white p-8 rounded-3xl border border-slate-100 hover:shadow-xl transition-all group">
              <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors">
                <Star className="w-6 h-6 text-blue-600 group-hover:text-white" />
              </div>
              <p className="text-sm text-slate-600 leading-relaxed">Terciptanya pelajar yang mampu bersaing di tingkat provinsi dan nasional.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white" id="identitas">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center mb-12">
            <div className="bg-blue-600/10 text-blue-600 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-4">Data Pokok</div>
            <h2 className="text-3xl font-bold text-slate-900">Identitas Sekolah</h2>
          </div>
          <div className="bg-white rounded-[32px] p-1 shadow-2xl shadow-slate-200/50 border border-slate-100 overflow-hidden">
            <div className="grid lg:grid-cols-5 h-full">
              <div className="lg:col-span-1 bg-slate-50 p-6 flex lg:flex-col gap-2 overflow-x-auto">
                <button className="flex items-center gap-3 px-4 py-3 bg-white rounded-xl text-blue-600 font-bold shadow-sm whitespace-nowrap">
                  <Info className="w-4 h-4" /> Satuan Pendidikan
                </button>
                <button className="flex items-center gap-3 px-4 py-3 text-slate-500 hover:bg-white/50 rounded-xl transition-all whitespace-nowrap">
                  <FileText className="w-4 h-4" /> Dokumen & Izin
                </button>
                <button className="flex items-center gap-3 px-4 py-3 text-slate-500 hover:bg-white/50 rounded-xl transition-all whitespace-nowrap">
                  <Building className="w-4 h-4" /> Sarana Prasarana
                </button>
                <button className="flex items-center gap-3 px-4 py-3 text-slate-500 hover:bg-white/50 rounded-xl transition-all whitespace-nowrap">
                  <Phone className="w-4 h-4" /> Kontak
                </button>
              </div>
              <div className="lg:col-span-4 p-8 md:p-12">
                <div className="flex items-center justify-between mb-10 pb-6 border-b border-slate-100">
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900">SDN PEKAYON 09</h3>
                    <p className="text-slate-500 text-sm">Kecamatan Pasar Rebo, Jakarta Timur</p>
                  </div>
                  <img alt="Logo" className="h-12 opacity-50" src="https://lh3.googleusercontent.com/d/1YONdbm4C4cYaegmOmNzPShMzkgj0e5o0" referrerPolicy="no-referrer" />
                </div>
                <div className="grid md:grid-cols-2 gap-x-12 gap-y-6">
                  <div className="flex flex-col gap-1">
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-tighter">Nama Sekolah</span>
                    <span className="text-slate-700 font-medium">SDN Pekayon 09</span>
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-tighter">NPSN</span>
                    <span className="text-blue-600 font-bold">20108981</span>
                  </div>
                  <div className="flex flex-col gap-1 md:col-span-2">
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-tighter">Alamat</span>
                    <span className="text-slate-700">Jl. Pendidikan RT.004 RW.009 No.4, Pekayon, Kec. Pasar Rebo, Kota Jakarta Timur, DKI Jakarta</span>
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-tighter">Telepon</span>
                    <span className="text-slate-700">(021) 8706842</span>
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-tighter">Email</span>
                    <span className="text-slate-700">sdnegeripekayon09@gmail.com</span>
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-tighter">Kelurahan</span>
                    <span className="text-slate-700">PEKAYON</span>
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-tighter">Kecamatan</span>
                    <span className="text-slate-700">PASAR REBO</span>
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-tighter">Status Sekolah</span>
                    <span className="text-slate-700 font-semibold">NEGERI</span>
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-tighter">Bentuk Pendidikan</span>
                    <span className="text-slate-700">SD</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
