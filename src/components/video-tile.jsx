import { calcDays, generateVideoLink } from "../utils/video";
import { ArrowUpRight } from "./icons/arrow-link";
import { Eye } from "./icons/eye";
import { LikeIcon } from "./icons/like";
import { PublishedTime } from "./icons/published-time";

export const VideoTile = ({ video }) => {
  const { statistics, snippet, id } = video.items;

  const { viewCount, likeCount } = statistics;
  const { thumbnails, title, publishedAt } = snippet;

  return (
    <article className="col-span-4 mt-10">
      <a href={generateVideoLink(id)} target="_blank" className="h-full">
        <div>
          <img className="h-full object-contain w-full rounded-lg overflow-hidden" src={thumbnails.high.url} />
        </div>
        <div className="mt-4">
          <div className="flex flex-row items-center gap-3">
            <h3 className="text-lg">{title}</h3>
            <ArrowUpRight size={25} />
          </div>
          <div className="mt-4 flex gap-4">
            <p className="text-xs flex items-center gap-1">
              <PublishedTime size={15} />
              {calcDays(publishedAt)} days back
            </p>
            <p className="text-xs flex items-center gap-1">
              <LikeIcon size={15} />
              {viewCount}</p>
            <p className="text-xs flex items-center gap-1">
              <Eye size={15} />
              {likeCount}
            </p>
          </div>
        </div>
      </a>
    </article>
  );
}