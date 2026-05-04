export const generateVideoLink = (videoId) => {
  return `https://www.youtube.com/watch?v=${videoId}`;
}

export const calcDays = (date) => {
  const date1 = new Date(date);
  const date2 = new Date();

  // 1. Calculate difference in milliseconds
  const diffTime = Math.abs(date2 - date1);

  // 2. Convert to days (ms / (ms * sec * min * hr))
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

  return diffDays;
}