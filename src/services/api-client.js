const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'https://api.freeapi.app/api/v1';

export const apiClient = async (url, options) => {
  try {
    const response = await fetch(`${API_BASE_URL}${url}`, {
      method: options.method,
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response.json();

  } catch (error) {
    console.error(error);
    throw error;
  }
};
