import { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://syntesys.com.br",
      lastModified: new Date(),
    },
    {
      url: "https://syntesys.com.br/pt/services",
      lastModified: new Date(),
    },
    {
        url: "https://syntesys.com.br/en/services",
        lastModified: new Date(),
      },
    {
      url: "https://syntesys.com.br/contact",
      lastModified: new Date(),
    },
    {
        url: "https://syntesys.com.br/pt",
        lastModified: new Date(),
      },
      {
        url: "https://syntesys.com.br/en",
        lastModified: new Date(),
      },
  ]
}
