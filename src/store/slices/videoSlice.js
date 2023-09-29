import axios from "axios";
import { produce } from "immer";

const config = {
  headers: {
    ["x-api-key"]: import.meta.env.VITE_API_KEY,
  },
};

const createVideoSlice = (set, get) => ({
  video: {
    isLoading: false,
    data: null,
    error: null,
  },

  toggleLoading: () => {
    set(
      produce((state) => {
        state.video.isLoading = true;
      })
    );
  },

  fetchVideo: async (videoUrl) => {
    try {
      const response = await axios.get(import.meta.env.VITE_API_URL, {
        ...config,
        params: {
          video_url: videoUrl,
        },
      });
      console.log(response);
      set(
        produce((state) => {
          state.video.isLoading = false;
          state.video.error = null;
          state.video.data = response.data;
        })
      );
    } catch (e) {
      set(
        produce((state) => {
          state.video.isLoading = false;
          state.video.error = e?.response?.data?.message;
          state.video.data = null;
        })
      );
    }
  },
});

export default createVideoSlice;
