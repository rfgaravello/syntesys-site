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
      url: "https://syntesys.com.br/pt/contact",
      lastModified: new Date(),
    },
    {
        url: "https://syntesys.com.br/en/contact",
        lastModified: new Date(),
      },
      {
        url: "https://syntesys.com.br/en/about",
        lastModified: new Date(),
      },
      {
        url: "https://syntesys.com.br/pt/about",
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
