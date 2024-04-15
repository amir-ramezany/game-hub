import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "a7aa66f6a2e245289c8b017c8cd1321b",
  },
});
