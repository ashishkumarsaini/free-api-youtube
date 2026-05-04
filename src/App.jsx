// import { useMemo, useState } from 'react'
import './App.css'

import { useLoadVideos } from "./hooks/use-load-videos"

// const starterVideos = [
//   {
//     id: 'dQw4w9WgXcQ',
//     title: 'Designing a magnetic thumbnail system',
//     channel: 'Studio Signal',
//     views: '2.8M',
//     age: '4 hours ago',
//     tone: 'Strategy',
//     size: 'hero',
//   },
//   {
//     id: 'ysz5S6PUM-U',
//     title: 'How creators package ideas people click',
//     channel: 'Creator Desk',
//     views: '876K',
//     age: '12 hours ago',
//     tone: 'Research',
//     size: 'wide',
//   },
//   {
//     id: 'ScMzIvxBSi4',
//     title: 'The edit rhythm behind viral openings',
//     channel: 'Frame Lab',
//     views: '418K',
//     age: '1 day ago',
//     tone: 'Editing',
//   },
//   {
//     id: 'jNQXAC9IVRw',
//     title: 'Archive pull: the first spark of YouTube',
//     channel: 'Internet Museum',
//     views: '24M',
//     age: '19 years ago',
//     tone: 'Archive',
//   },
//   {
//     id: 'M7lc1UVf-VE',
//     title: 'Product walkthroughs that feel alive',
//     channel: 'Launch Room',
//     views: '1.3M',
//     age: '2 days ago',
//     tone: 'Product',
//     size: 'tall',
//   },
//   {
//     id: 'aqz-KE-bpKQ',
//     title: 'Sound, silence, and stronger visual hooks',
//     channel: 'Motion Notes',
//     views: '642K',
//     age: '5 days ago',
//     tone: 'Motion',
//   },
// ]

// const thumbnail = (id, quality = 'maxresdefault') =>
//   `https://img.youtube.com/vi/${id}/${quality}.jpg`

// function toMillions(value) {
//   if (value.endsWith('M')) {
//     return Number.parseFloat(value)
//   }

//   if (value.endsWith('K')) {
//     return Number.parseFloat(value) / 1000
//   }

//   return 0
// }

// function getVideoId(value) {
//   const input = value.trim()

//   if (/^[a-zA-Z0-9_-]{11}$/.test(input)) {
//     return input
//   }

//   try {
//     const url = new URL(input)
//     const shortId = url.hostname.includes('youtu.be')
//       ? url.pathname.slice(1).split('/')[0]
//       : null
//     const watchId = url.searchParams.get('v')
//     const embedId = url.pathname.match(/\/(embed|shorts|live)\/([^/?]+)/)?.[2]

//     return [shortId, watchId, embedId].find((id) =>
//       /^[a-zA-Z0-9_-]{11}$/.test(id || ''),
//     )
//   } catch {
//     return null
//   }
// }

// function App() {
//   const [videos, setVideos] = useState(starterVideos)
//   const [videoUrl, setVideoUrl] = useState('')
//   const [error, setError] = useState('')

//   const featured = videos[0]
//   const totalViews = useMemo(
//     () => videos.reduce((total, video) => total + toMillions(video.views), 0),
//     [videos],
//   )

//   function handleSubmit(event) {
//     event.preventDefault()
//     const id = getVideoId(videoUrl)

//     if (!id) {
//       setError('Paste a valid YouTube URL or 11-character video ID.')
//       return
//     }

//     const newVideo = {
//       id,
//       title: 'Freshly fetched thumbnail',
//       channel: 'Imported video',
//       views: 'New',
//       age: 'just now',
//       tone: 'Fetched',
//       size: videos.length % 3 === 0 ? 'wide' : '',
//     }

//     setVideos((current) => [newVideo, ...current.filter((video) => video.id !== id)])
//     setVideoUrl('')
//     setError('')
//   }

//   return (
//     <main className="app-shell">
//       <aside className="rail" aria-label="Primary">
//         <a className="brand-mark" href="/" aria-label="YouTube Bento home">
//           <span></span>
//         </a>
//         <nav>
//           {['Explore', 'Live', 'Saved', 'History', 'Liked'].map((item, index) => (
//             <a className={index === 0 ? 'active' : ''} href="/" key={item}>
//               <span>{item.slice(0, 1)}</span>
//               <small>{item}</small>
//             </a>
//           ))}
//         </nav>
//       </aside>

//       <section className="workspace">
//         <header className="topbar">
//           <div>
//             <p className="eyebrow">Thumbnail Intelligence</p>
//             <h1>Fetch YouTube thumbnails into a cinematic bento wall.</h1>
//           </div>
//           <div className="profile-cluster" aria-label="Channel status">
//             <span>4K</span>
//             <span>HD</span>
//             <span>Live</span>
//           </div>
//         </header>

//         <section className="hero-panel">
//           <div className="hero-copy">
//             <p className="section-kicker">Creator cockpit</p>
//             <h2>Drop a video link. See the thumbnail hierarchy instantly.</h2>
//             <p>
//               Built for scanning titles, formats, and visual weight before a
//               thumbnail lands in your content calendar.
//             </p>

//             <form className="fetch-form" onSubmit={handleSubmit}>
//               <label htmlFor="youtube-url">YouTube URL</label>
//               <div>
//                 <input
//                   id="youtube-url"
//                   onChange={(event) => setVideoUrl(event.target.value)}
//                   placeholder="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
//                   value={videoUrl}
//                 />
//                 <button type="submit">Fetch</button>
//               </div>
//               {error ? <strong>{error}</strong> : null}
//             </form>
//           </div>

//           <article className="spotlight-card">
//             <img src={thumbnail(featured.id)} alt="" />
//             <div className="play-button" aria-hidden="true"></div>
//             <div className="spotlight-meta">
//               <span>{featured.tone}</span>
//               <h3>{featured.title}</h3>
//               <p>
//                 {featured.channel} / {featured.views} views / {featured.age}
//               </p>
//             </div>
//           </article>
//         </section>

//         <section className="stats-strip" aria-label="Library metrics">
//           <div>
//             <strong>{videos.length}</strong>
//             <span>tiles staged</span>
//           </div>
//           <div>
//             <strong>{totalViews.toFixed(1)}M</strong>
//             <span>sample reach</span>
//           </div>
//           <div>
//             <strong>4</strong>
//             <span>thumbnail ratios</span>
//           </div>
//           <div>
//             <strong>Live</strong>
//             <span>URL parser</span>
//           </div>
//         </section>

//         <section className="content-header">
//           <div>
//             <p className="section-kicker">Trending board</p>
//             <h2>Bento thumbnail gallery</h2>
//           </div>
//           <div className="filter-pills" aria-label="Filters">
//             <button className="selected">All</button>
//             <button>Fetched</button>
//             <button>Shorts</button>
//           </div>
//         </section>

//         <section className="bento-grid" aria-label="Video thumbnails">
//           {videos.map((video, index) => (
//             <article className={`video-tile ${video.size || ''}`} key={video.id}>
//               <div className="thumb-frame">
//                 <img
//                   src={thumbnail(video.id, index > 2 ? 'hqdefault' : 'maxresdefault')}
//                   alt={`${video.title} thumbnail`}
//                 />
//                 <span className="tone">{video.tone}</span>
//               </div>
//               <div className="tile-body">
//                 <div>
//                   <h3>{video.title}</h3>
//                   <p>{video.channel}</p>
//                 </div>
//                 <div className="tile-metrics">
//                   <span>{video.views} views</span>
//                   <span>{video.age}</span>
//                 </div>
//               </div>
//             </article>
//           ))}
//         </section>
//       </section>
//     </main>
//   )
// }

// export default App


const App = () => {
  const { videoData, isLoading } = useLoadVideos();

  if (isLoading) {
    return <div>Loading...</div>
  }

  console.log(videoData);


  // if (videoData.data.length === 0) {
  //   return <div>No videos found.</div>
  // }

  // const { data } = videoData;

  return (
    <main className="app-shell">
      <aside className="rail" aria-label="Primary">
        <a className="brand-mark" href="/" aria-label="YouTube Bento home">
          <span></span>
        </a>
        <nav>
          {['Explore', 'Live', 'Saved', 'History', 'Liked'].map((item, index) => (
            <a className={index === 0 ? 'active' : ''} href="/" key={item}>
              <span>{item.slice(0, 1)}</span>
              <small>{item}</small>
            </a>
          ))}
        </nav>
      </aside>
      <div>

      </div>
    </main>
  )
}

export default App;