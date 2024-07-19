import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "30d200246b1c4780a892dafbd64ec879",
  },
});
