import fs from 'fs';
import path from 'path';
import { AcademicCapIcon } from '@heroicons/react/24/outline'; // Correct import for Heroicons v2

type Publication = {
  id: number;
  title: string;
  year: string;
  journal: string;
  doi?: string;
  link?: string;
};

export default async function PublicationsPage() {
  const filePath = path.join(process.cwd(), 'database', 'publications.json'); // Updated to 'database'
  const fileContents = fs.readFileSync(filePath, 'utf8');
  const publications: Publication[] = JSON.parse(fileContents);

  return (
    <main className="max-w-5xl mx-auto py-20 px-6 text-white">
      <h1 className="text-5xl font-bold mb-12 text-center">My Publications</h1>
      <ul className="space-y-8">
        {publications.map((pub) => (
          <li key={pub.id} className="flex items-start mb-4">
            <AcademicCapIcon className="h-6 w-6 text-indigo-400 mr-4" /> {/* Icon in place of bullet point */}
            <div>
              <h2 className="text-2xl font-semibold text-indigo-400">{pub.title}</h2>
              <p className="text-lg text-gray-300">{pub.journal}, {pub.year}</p>
              {pub.doi && (
                <p className="text-sm text-gray-400">
                  DOI: <a href={`https://doi.org/${pub.doi}`} className="text-indigo-400" target="_blank" rel="noopener noreferrer">{pub.doi}</a>
                </p>
              )}
              {pub.link && (
                <p className="text-sm text-gray-400">
                  Link: <a href={pub.link} className="text-indigo-400" target="_blank" rel="noopener noreferrer">{pub.link}</a>
                </p>
              )}
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
}
