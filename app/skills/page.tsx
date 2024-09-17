import fs from 'fs';
import path from 'path';

export default async function SkillsPage() {
  const filePath = path.join(process.cwd(), 'database', 'skills.json'); // Fetch from 'database' folder
  const fileContents = fs.readFileSync(filePath, 'utf8');
  const skills = JSON.parse(fileContents);

  return (
    <main className="max-w-5xl mx-auto py-20 px-6 text-white">
      <h1 className="text-5xl font-bold mb-12 text-center">My Skills</h1>

      {/* Languages */}
      <div className="mb-8">
        <h2 className="text-3xl font-semibold text-indigo-400 mb-4">Languages</h2>
        <ul className="list-disc list-inside space-y-2">
          {skills.languages.map((language, index) => (
            <li key={index} className="text-lg text-gray-300">{language}</li>
          ))}
        </ul>
      </div>

      {/* Frameworks */}
      <div className="mb-8">
        <h2 className="text-3xl font-semibold text-indigo-400 mb-4">Frameworks</h2>
        <ul className="list-disc list-inside space-y-2">
          {skills.frameworks_and_libraries.map((framework, index) => (
            <li key={index} className="text-lg text-gray-300">{framework}</li>
          ))}
        </ul>
      </div>

      {/* Tools */}
      <div className="mb-8">
        <h2 className="text-3xl font-semibold text-indigo-400 mb-4">Tools & Technologies</h2>
        <ul className="list-disc list-inside space-y-2">
          {skills.tools_and_technologies.map((tool, index) => (
            <li key={index} className="text-lg text-gray-300">{tool}</li>
          ))}
        </ul>
      </div>

      {/* Databases */}
      <div className="mb-8">
        <h2 className="text-3xl font-semibold text-indigo-400 mb-4">Hardware & Embedded Systems</h2>
        <ul className="list-disc list-inside space-y-2">
          {skills.hardware_and_embedded_systems.map((database, index) => (
            <li key={index} className="text-lg text-gray-300">{database}</li>
          ))}
        </ul>
      </div>

      {/* Miscellaneous */}
      <div className="mb-8">
        <h2 className="text-3xl font-semibold text-indigo-400 mb-4">Miscellaneous</h2>
        <ul className="list-disc list-inside space-y-2">
          {skills.miscellaneous.map((misc, index) => (
            <li key={index} className="text-lg text-gray-300">{misc}</li>
          ))}
        </ul>
      </div>
    </main>
  );
}
