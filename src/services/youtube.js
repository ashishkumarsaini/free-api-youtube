import { apiClient } from './api-client.js';

export const fetchYoutubeVideos = async () => {
  const response = await apiClient('/public/youtube/videos', { method: 'GET' });

  return response.data;
}