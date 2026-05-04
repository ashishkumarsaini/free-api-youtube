export const Sidebar = () => {
  return (
    <aside className="bg-black flex flex-row md:flex-col justify-between md:justify-start items-center gap-5 py-4 md:py-6 px-4 md:px-0" aria-label="Primary">
      <a className="w-[44px] aspect-video py-2 rounded-md bg-[#ff2738] grid place-items-center shadow-[0_18px_42px_rgba(255,39,56,0.32)]" href="/" aria-label="YouTube Bento home">
        <span className="w-0 h-0 border-t-8 border-b-8 border-l-13 border-t-transparent border-b-transparent border-l-white ml-1"></span>
      </a>
      <a href={'https://www.youtube.com/@HiteshCodeLab'} target="_black" alt="Channel Link">
        <div className="md:hidden rounded-full border text-red-500 p-2">
          <span>HC</span>
        </div>
      </a>
      <nav className='hidden md:grid gap-4'>
        {['Explore', 'Live', 'Saved', 'History', 'Liked'].map((item, index) => (
          <a className={`text-white grid place-items-center gap-1 text-sm`} href="/" key={item}>
            <span className={`w-9 aspect-square border rounded-md grid place-items-center text-xs ${index === 0 ? 'border-red-500 text-red-500' : ''}`}>{item.slice(0, 1)}</span>
            <small className={index === 0 ? 'text-red-500' : ''}>{item}</small>
          </a>
        ))}
      </nav>
    </aside>
  )
}