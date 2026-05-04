import { VideoTile } from "./video-tile";

export const GalleryGrid = ({ videos = [] }) => {
  return (
    <section>
      <div className="flex items-end justify-between gap-5 mt-10 mb-[18px] max-[700px]:flex-col max-[700px]:items-stretch w-[min(1420px,100%)] mx-auto">
        <div>
          <p className="text-[#ff3948] text-xs font-extrabold m-0 mb-[9px] uppercase tracking-normal">Creator board</p>
          <h2 className="text-[clamp(28px,4vw,52px)] leading-none m-0">Videos gallery</h2>
        </div>
        <div className="flex gap-[10px] flex-wrap justify-end max-[700px]:justify-start" aria-label="Filters">
          <button className="border border-white/10 bg-[#ff2738] text-white min-h-[38px] px-5 rounded-lg text-[13px] font-black cursor-pointer">All</button>
          <button className="border border-white/10 bg-white/5 text-white min-h-[38px] px-[14px] rounded-lg text-[13px] font-extrabold">Fetched</button>
          <button className="border border-white/10 bg-white/5 text-white min-h-[38px] px-[14px] rounded-lg text-[13px] font-extrabold">Shorts</button>
        </div>
      </div>

      <div className="w-[min(1420px,100%)] mx-auto mb-12 grid grid-cols-4 md:grid-cols-12 gap-[18px] max-[1100px]:grid-cols-2 max-[700px]:grid-cols-1 md:mt-10" aria-label="Video thumbnails">
        {videos.map((video) => (
          <VideoTile key={video.id} video={video} />
        ))}
      </div>
    </section>
  )
}