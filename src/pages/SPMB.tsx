export default function SPMB() {
  return (
    <div className="py-20 text-center">
      <h1 className="text-4xl font-bold mb-4">SPMB</h1>
      <p className="text-gray-600 mb-8">Halaman ini sedang dalam pengembangan.</p>
      <div className="flex justify-center">
        <iframe 
          width="560" 
          height="315" 
          src="https://www.youtube.com/embed/c_2xlqBMxP4?si=itLijhScR26yPbd-" 
          title="YouTube video player" 
          frameBorder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
          referrerPolicy="strict-origin-when-cross-origin" 
          allowFullScreen
          className="rounded-xl shadow-lg"
        ></iframe>
      </div>
    </div>
  );
}
