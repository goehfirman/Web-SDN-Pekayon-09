import React, { useState, useEffect } from 'react';

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

export default function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative bg-blue-600 text-white overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src="https://lh3.googleusercontent.com/d/1c6mppMYsCo_FackQlIBNTiRys6QkUJEz" 
          alt="Background" 
          className="w-full h-full object-cover opacity-20"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-blue-600/80 mix-blend-multiply"></div>
      </div>
      
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path d="M0 100 C 20 0 50 0 100 100 Z" fill="currentColor" />
        </svg>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-20 pb-32 md:pt-32 md:pb-48 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-12 md:mb-0">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6 text-white">
            Selamat Datang di <br />
            <span className="text-yellow-400">SDN Pekayon 09</span> <br />
            Jakarta
          </h1>
          <p className="text-lg md:text-xl text-blue-100 mb-8 max-w-lg leading-relaxed">
            Membangun generasi yang beriman, bertaqwa kepada Tuhan Yang Maha Esa, berkarakter, unggul dan berprestasi.
          </p>
          <div className="flex flex-wrap gap-4">
            <a 
              href="https://spmb.jakarta.go.id/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 px-8 py-3 rounded-full font-bold transition-colors shadow-lg"
            >
              Info PPDB
            </a>
            <a 
              href="/kontak"
              className="bg-white/20 hover:bg-white/30 backdrop-blur-sm border border-white/30 text-white px-8 py-3 rounded-full font-medium transition-colors"
            >
              Hubungi Kami
            </a>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center md:justify-end relative">
           {/* Decorative elements */}
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-yellow-300 rounded-full blur-3xl opacity-20"></div>
           <div className="relative z-10 w-full max-w-md aspect-[4/3] rounded-2xl shadow-2xl border-4 border-white/20 overflow-hidden bg-blue-400/20">
             {heroImages.map((img, index) => (
               <img 
                 key={index}
                 src={img} 
                 alt={`Slideshow ${index + 1}`} 
                 className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
                   index === currentImageIndex ? 'opacity-100' : 'opacity-0'
                 }`}
                 referrerPolicy="no-referrer"
               />
             ))}
           </div>
        </div>
      </div>
      
      {/* Wave divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" className="w-full h-auto fill-gray-50" preserveAspectRatio="none">
          <path d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"></path>
        </svg>
      </div>
    </section>
  );
}
