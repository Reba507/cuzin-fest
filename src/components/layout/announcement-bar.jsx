const AnnouncementBar = () => {
  return (
    <aside 
      role="banner" 
      className="mb-0 py-3 bg-lime-500 text-white text-center font-medium shadow-md"
    >
      <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-6 flex-wrap">
        <span className="text-xl md:text-2xl font-bold tracking-tight">
           CuzinFest 2026 – 16 June | Mhk
        </span>
        
        <span className="text-lg">
          Family • Business • Vibes • Good Food
        </span>

        <span className="text-base md:text-lg font-semibold">
          ~147 days to go – Don't sleep on this!
        </span>

        <a 
          href="/tickets" 
          className="inline-block bg-white text-lime-700 font-bold px-8 py-3 rounded-full hover:bg-lime-50 transition shadow-lg transform hover:scale-105"
        >
          Grab Early Bird Tickets →
        </a>
      </div>
    </aside>
  );
};

export default AnnouncementBar;