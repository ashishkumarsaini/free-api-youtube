export const VideoTile = ({ video }) => {
  return (
    <div className="video-tile">
      <img src={video.thumbnail} alt={video.title} />
      <h3>{video.title}</h3>
      <p>{video.channel}</p>
      <p>{video.views}</p>
    </div>
  );
}