import fs from 'fs';
import path from 'path';

type Experience = {
  id: number;
  position: string;
  company: string;
  duration: string;
  location: string;
  description: string;
};

export default async function ExperiencePage() {
  const filePath = path.join(process.cwd(), 'database', 'experiences.json'); // Updated to 'database'
  const fileContents = fs.readFileSync(filePath, 'utf8');
  const experience: Experience[] = JSON.parse(fileContents);

  return (
    <main className="max-w-5xl mx-auto py-20 px-6 text-white">
      <h1 className="text-5xl font-bold mb-12 text-center">My Professional Experience</h1>
      <ul className="list-disc list-inside space-y-8">
        {experience.map((exp) => (
          <li key={exp.id} className="mb-4">
            <h2 className="text-2xl font-semibold text-indigo-400">{exp.position}</h2>
            <p className="text-lg text-gray-300">{exp.company}, {exp.location}</p>
            <p className="text-sm text-gray-400 mb-2">{exp.duration}</p>
            <p className="text-md text-gray-200">{exp.description}</p>
          </li>
        ))}
      </ul>
    </main>
  );
}
