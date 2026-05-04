export const Header = () => {
  return (
    <header className="flex items-center justify-between gap-6">
      <div>
        <p className="text-[#ff3948] text-xs font-extrabold m-0 mb-[9px] uppercase tracking-normal">Youtube Thumbnails</p>
        <h1 className="text-2xl">Display YouTube thumbnails into a cinematic grid wall.</h1>
      </div>
      <div className="hidden md:flex gap-[10px] flex-wrap justify-end" aria-label="Channel status">
        <span className="border border-white/10 bg-white/5 text-white min-h-[38px] px-[14px] rounded-lg text-[13px] font-extrabold flex items-center">4K</span>
        <span className="border border-white/10 bg-white/5 text-white min-h-[38px] px-[14px] rounded-lg text-[13px] font-extrabold flex items-center">HD</span>
        <span className="border border-white/10 bg-white/5 text-white min-h-[38px] px-[14px] rounded-lg text-[13px] font-extrabold flex items-center">Live</span>
      </div>
    </header>
  )
}