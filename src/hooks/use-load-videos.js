import { useEffect, useState } from "react"

import { fetchYoutubeVideos } from "../services/youtube";

// A custom hook to load videos and manage data states
export const useLoadVideos = () => {
  const [videoData, setVideoData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    const fetchData = async () => {
      const response = await fetchYoutubeVideos();

      if (response.success) {
        setVideoData(response.data);
      }

      setIsLoading(false);
    }

    fetchData();
  }, []);



  return { videoData, isLoading };
}