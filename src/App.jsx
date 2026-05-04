import { GalleryPage } from "./components/gallery-page";
import { Header } from "./components/header";
import { Sidebar } from "./components/sidebar";
import { useLoadVideos } from "./hooks/use-load-videos"

function App() {
  const { videoData, isLoading } = useLoadVideos();

  return (
    <main className="min-h-screen text-white md:grid grid-cols-[88px_minmax(0,1fr)] overflow-hidden bg-[radial-gradient(circle_at_top_left,rgba(255,34,69,0.18),transparent_26rem),linear-gradient(135deg,#0f1117_0%,#171821_48%,#101219_100%)]">
      <Sidebar />
      <section className="min-h-0 h-screen overflow-y-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
        <div className="m-auto max-w-[1500px] p-4 md:p-9">
          <Header />
          {!isLoading && <GalleryPage videos={videoData} />}
        </div>
      </section>
    </main>
  )
}

export default App;