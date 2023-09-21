import Image from "@11ty/eleventy-img";

export async function optimize(
  url,
  { formats, widths } = {
    formats: ["avif", "webp", "jpeg"],
    widths: [400, 800, 1600, 2000]
  }
) {
  let stats = await Image(url, {
    formats,
    widths,
    urlPath: "/img/",
    outputDir: "./static/img/"
  });

  return stats;
}
