import Image from "@11ty/eleventy-img";
import { optimize } from "../lib/optimizeImage";

export const load = async () => {
  return {
    stats: optimize(
      "https://unsplash.com/photos/RsRTIofe0HE/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8MjV8fGRlc2VydHxkZXwwfHx8fDE2OTUwNjkxOTB8MA&force=true"
    )
  };
};
