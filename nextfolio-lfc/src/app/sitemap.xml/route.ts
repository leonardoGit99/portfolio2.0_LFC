import { NextResponse } from 'next/server';

const baseUrl = "https://leonardo-fuentes-claros.vercel.app";
const locales = ["en", "es"];

export async function GET() {
  const urls = locales.map((locale) => {
    const url = `${baseUrl}/${locale}`;
    const links = locales
      .map(
        (altLocale) =>
          `<xhtml:link rel="alternate" hreflang="${altLocale}" href="${baseUrl}/${altLocale}" />`
      )
      .join("\n");

    return `
      <url>
        <loc>${url}</loc>
        ${links}
        <changefreq>weekly</changefreq>
        <priority>1.0</priority>
      </url>
    `;
  });

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset
    xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
    xmlns:xhtml="http://www.w3.org/1999/xhtml"
  >
    ${urls.join("\n")}
  </urlset>`;

  return new NextResponse(sitemap, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
