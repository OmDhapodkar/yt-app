import axios from "axios";

const KEY = "AIzaSyCZUFysYA_cJmriGNPvQnE_Duajf5PoYtg";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY,
  },
});
