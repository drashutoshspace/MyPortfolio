import type { APIRoute } from "astro";
import { publications } from "~/data/publications";
import { bibliography } from "~/lib/cite";

export const GET: APIRoute = () =>
  new Response(bibliography(publications), {
    headers: {
      "content-type": "application/x-bibtex; charset=utf-8",
      "content-disposition": 'inline; filename="mishra-publications.bib"',
      "cache-control": "public, max-age=3600, must-revalidate",
    },
  });
