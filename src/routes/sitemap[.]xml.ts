import { createFileRoute } from "@tanstack/react-router";
export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: ({ request }) => {
        const origin = new URL(request.url).origin;
        const urls = ["/", "/menu", "/about", "/gallery", "/reviews", "/contact"];
        const escape = (value: string) =>
          value.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll('"', "&quot;");
        return new Response(
          `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls.map((path) => `<url><loc>${escape(origin + path)}</loc></url>`).join("")}</urlset>`,
          { headers: { "Content-Type": "application/xml; charset=utf-8" } },
        );
      },
    },
  },
});
