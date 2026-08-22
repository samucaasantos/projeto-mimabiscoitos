import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Mima - Biscoitos Artesanais",
    short_name: "Mima Biscoitos",
    description:
      "Biscoitos artesanais feitos à mão com alma, afeto e ingredientes nobres em Salvador, BA.",
    start_url: "/",
    display: "standalone",
    background_color: "#FDF8F5",
    theme_color: "#840D0F",
    icons: [
      {
        src: "/MIMA-1.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}
