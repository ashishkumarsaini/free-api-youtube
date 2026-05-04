import { GalleryGrid } from "./gallery-grid";
import { HeroSection } from "./hero-section";

export const GalleryPage = ({ videos }) => {
  if (!videos.length) {
    return (
      <div>
        <section className="mt-4 min-h-[400px] border border-white/10 rounded-lg bg-[linear-gradient(135deg,rgba(255,255,255,0.1),rgba(255,255,255,0.03)),#151720] shadow-[0_30px_90px_rgba(0,0,0,0.35)] grid grid-cols-12 gap-[18px] p-[18px] max-[1100px]:grid-cols-1">
          <div className="col-span-6 p-[clamp(22px,4vw,46px)] flex flex-col justify-center">
            <p className="text-[#ff3948] text-xs font-extrabold m-0 mb-[9px] uppercase tracking-normal">Creator cockpit</p>
            <h2 className="text-[clamp(28px,4vw,52px)] leading-none m-0">Hitesh Chaudhary.</h2>
            <p className="text-[#b5bac8] max-w-[520px] mt-[18px]">
              Hey there everyone, Hitesh here back again with another video!
            </p>
          </div>
        </section>
        <p className="mt-8 text-xl">No vidoes found!</p>
      </div>
    );
  }

  const [firstVideo, ...remaining] = videos;
  return (
    <>
      <HeroSection videoData={firstVideo} />
      <GalleryGrid videos={remaining} />
    </>
  )
}