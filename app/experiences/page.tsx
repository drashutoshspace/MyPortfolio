import fs from 'fs';
import path from 'path';
import { BriefcaseIcon } from '@heroicons/react/24/outline'; // Importing the Briefcase Icon for experiences

type Experience = {
  id: number;
  position: string;
  company: string;
  duration: string;
  location: string;
  description?: string;
};

export default async function ExperiencesPage() {
  const filePath = path.join(process.cwd(), 'database', 'experiences.json'); // Fetch from 'database' folder
  const fileContents = fs.readFileSync(filePath, 'utf8');
  const experiences: Experience[] = JSON.parse(fileContents);

  return (
    <main className="max-w-5xl mx-auto py-20 px-6 text-white">
      <h1 className="text-5xl font-bold mb-12 text-center">My Professional Experiences</h1>
      <ul className="space-y-8">
        
        {experiences.map((exp) => (
            
          <div className='flex'> <BriefcaseIcon className="h-12 w-12 text-indigo-400 mr-4" /> <li key={exp.id} className="flex items-start mb-4">
            
          <div>
           
            <h2 className="text-2xl font-semibold text-indigo-400">{exp.position}</h2>
            <p className="text-lg text-gray-300">{exp.company}, {exp.location}</p>
            <p className="text-sm text-gray-400">{exp.duration}</p>
            {exp.description && (
              <p className="text-md text-gray-300 mt-2">{exp.description}</p>
            )}
          </div>
        </li></div>
          
        ))}
      </ul>
    </main>
  );
}
