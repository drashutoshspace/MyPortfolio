import path from 'path';
import { promises as fs } from 'fs';

type Award = {
  id: number;
  title: string;
  year: string;
  description: string;
};

export default async function AwardsPage() {
  const filePath = path.join(process.cwd(), 'database', 'awards.json'); // Fetch from 'database' folder
  const fileContents = await fs.readFile(filePath, 'utf8');
  const awards: Award[] = JSON.parse(fileContents);

  return (
    <main className="max-w-7xl mx-auto py-20 px-6 text-white">
      <h1 className="text-5xl font-bold mb-12 text-center">Awards & Honors</h1>

      {/* Add a wrapper to control the width of the list */}
      <div className="max-w-3xl mx-auto">
        <ul className="space-y-8">
          {awards.map((award) => (
            <li key={award.id} className="bg-gray-800 rounded-lg shadow-lg p-6 hover:bg-gray-700 transition duration-300 flex items-start">
              {/* Smaller Default Icon */}
              <span className="text-indigo-400 mr-4 text-2xl">
                &#x1F3C6; {/* Trophy Icon using Unicode */}
              </span>

              <div>
                {/* Award Title and Year */}
                <h2 className="text-3xl font-semibold text-indigo-400 mb-2">{award.title}</h2>
                <p className="text-sm text-gray-400 mb-2">{award.year}</p>

                {/* Award Description */}
                <p className="text-md text-gray-300">{award.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
