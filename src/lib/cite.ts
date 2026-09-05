import type { Publication } from "~/data/publications";

/**
 * Citation formatting.
 *
 * IEEE style, because every venue on the list is IEEE except two. Nothing is
 * invented: the CV carries no volume, issue or page numbers, so the output
 * carries none either. A citation with a fabricated page range is worse than
 * one without, because it looks authoritative and sends the reader nowhere.
 */

/** "Ashutosh Mishra" -> "A. Mishra". Honours an explicit surname when the
 *  last-token heuristic would split a two-word family name. */
export function initialise(name: string, surname?: string): string {
  if (surname) {
    const given = name.slice(0, name.length - surname.length).trim();
    const inits = given
      .split(/\s+/)
      .filter(Boolean)
      .map((p) => `${p[0]}.`)
      .join(" ");
    return inits ? `${inits} ${surname}` : surname;
  }
  const parts = name.trim().split(/\s+/);
  if (parts.length === 1) return parts[0];
  const last = parts[parts.length - 1];
  const inits = parts
    .slice(0, -1)
    .map((p) => (p.endsWith(".") ? p : `${p[0]}.`))
    .join(" ");
  return `${inits} ${last}`;
}

/** IEEE lists up to six authors, then the sixth is followed by "et al." */
function authorList(pub: Publication): string {
  const names = pub.authors.map((a) => initialise(a.name, a.surname));
  if (names.length === 0) return "";
  if (names.length > 6) return `${names.slice(0, 6).join(", ")}, et al.`;
  if (names.length === 1) return names[0];
  return `${names.slice(0, -1).join(", ")}, and ${names[names.length - 1]}`;
}

/** Full IEEE reference string.
 *  Shape: A. Author, B. Author, and C. Author, "Title," Venue, Year. doi: X.
 *  Note the title's closing comma sits inside the quotes and is NOT followed
 *  by another one, which is the detail most hand-rolled formatters get wrong. */
export function ieee(pub: Publication): string {
  const authors = authorList(pub);
  const venue = pub.kind === "conference" ? `in ${pub.venue}` : pub.venue;

  let out = authors ? `${authors}, ` : "";
  out += `"${pub.title}," `;
  out += `${venue}, ${pub.year}.`;

  if (pub.doi) out += ` doi: ${pub.doi}.`;
  if (pub.status === "in-review") out += " (Under review.)";
  if (pub.status === "in-submission") out += " (In submission.)";
  return out;
}

/** Stable BibTeX key: surname + year + first meaningful title word. */
export function bibKey(pub: Publication): string {
  const first = pub.authors[0];
  const last = (first?.surname ?? first?.name.split(/\s+/).pop() ?? "anon")
    .toLowerCase()
    .replace(/[^a-z]/g, "");
  const word =
    pub.title
      .toLowerCase()
      .replace(/[^a-z0-9\s]/g, "")
      .split(/\s+/)
      .find((w) => w.length > 3 && !["with", "from", "that", "this", "towards", "based"].includes(w)) ??
    "work";
  return `${last}${pub.year}${word}`;
}

/** BibTeX entry. Names stay in "First Last" form, which BibTeX parses
 *  correctly, so no surname guessing leaks into the exported record.
 *  The title is brace-protected to stop BibTeX lowercasing MoonBot, GaN,
 *  LiDAR and the rest. */
export function bibtex(pub: Publication): string {
  const type = pub.kind === "conference" ? "inproceedings" : "article";
  const venueField = pub.kind === "conference" ? "booktitle" : "journal";
  const rows: [string, string][] = [
    ["author", pub.authors.map((a) => a.name).join(" and ")],
    ["title", `{${pub.title}}`],
    [venueField, pub.venue],
    ["year", String(pub.year)],
  ];
  if (pub.doi) rows.push(["doi", pub.doi]);

  // BibTeX permits one `note` per entry, so award and status are merged rather
  // than emitted as two fields, which most parsers would silently drop.
  const notes: string[] = [];
  if (pub.award) notes.push(pub.award);
  if (pub.status === "in-review") notes.push("Under review");
  if (pub.status === "in-submission") notes.push("In submission");
  if (!pub.peerReviewed && pub.status === "published") notes.push("Not peer reviewed");
  if (notes.length) rows.push(["note", notes.join(". ")]);
  const width = Math.max(...rows.map(([k]) => k.length));
  const body = rows
    .map(([k, v]) => `  ${k.padEnd(width)} = {${v}}`)
    .join(",\n");
  return `@${type}{${bibKey(pub)},\n${body}\n}`;
}

/** The whole record as one .bib file, newest first. */
export function bibliography(pubs: Publication[]): string {
  const header = [
    "% Publications of Ashutosh Mishra",
    "% https://drmishra.space/publications/",
    `% Generated ${new Date().toISOString().slice(0, 10)}`,
    "",
  ].join("\n");
  return `${header}${pubs.map(bibtex).join("\n\n")}\n`;
}
