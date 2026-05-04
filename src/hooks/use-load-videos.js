import { useEffect, useState } from "react"

import { fetchYoutubeVideos } from "../services/youtube";

// A custom hook to load videos and manage data states
export const useLoadVideos = () => {
  const [videoData, setVideoData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetchYoutubeVideos();

      if (response.data) {
        setVideoData(response.data);
      }

      setIsLoading(false);
    }

    fetchData();
  }, []);



  return { videoData, isLoading };
}