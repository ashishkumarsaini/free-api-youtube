import { calcDays, generateVideoLink } from "../utils/video";
import { ArrowUpRight } from "./icons/arrow-link";
import { Eye } from "./icons/eye";
import { LikeIcon } from "./icons/like";
import { PublishedTime } from "./icons/published-time";

export const HeroSection = ({ videoData }) => {
  const { statistics, snippet, id } = videoData.items;

  const { viewCount, likeCount } = statistics;
  const { thumbnails, title, publishedAt } = snippet;

  return (
    <section className="mt-4 min-h-[400px] border border-white/10 rounded-lg bg-[linear-gradient(135deg,rgba(255,255,255,0.1),rgba(255,255,255,0.03)),#151720] shadow-[0_30px_90px_rgba(0,0,0,0.35)] grid grid-cols-12 gap-[18px] p-[18px] max-[1100px]:grid-cols-1">
      <div className="col-span-6 p-0 md:p-10 flex flex-col justify-center">
        <p className="text-[#ff3948] text-xs font-extrabold m-0 mb-[9px] uppercase tracking-normal">Creator cockpit</p>
        <h2 className="text-[clamp(28px,4vw,52px)] leading-none m-0">Hitesh Chaudhary.</h2>
        <p className="text-[#b5bac8] max-w-[520px] mt-[18px]">
          Hey there everyone, Hitesh here back again with another video!
        </p>
      </div>
      <article className="grow col-span-6 md:pb-8">
        <a href={generateVideoLink(id)} target="_blank" className="h-full">
          <div>
            <img className="h-full object-contain w-full rounded-lg overflow-hidden" src={thumbnails.high.url} />
          </div>
          <div className="mt-4">
            <div className="flex flex-row items-center gap-3">
              <h3 className="text-xl md:text-3xl">{title}</h3>
              <ArrowUpRight size={25} />
            </div>
            <div className="mt-4 flex gap-4">
              <p className="text-md flex items-center gap-1">
                <PublishedTime size={15} />
                {calcDays(publishedAt)} days back
              </p>
              <p className="text-md flex items-center gap-1">
                <LikeIcon size={15} />
                {viewCount}</p>
              <p className="text-md flex items-center gap-1">
                <Eye size={15} />
                {likeCount}
              </p>
            </div>
          </div>
        </a>
      </article>
    </section>
  )
}