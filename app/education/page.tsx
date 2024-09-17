import fs from 'fs';
import path from 'path';

type Education = {
  id: number;
  institution: string;
  degree: string;
  duration: string;
  location: string;
  additional_info?: string;
  gpa?: string;
};

export default async function EducationPage() {
  const filePath = path.join(process.cwd(), 'database', 'education.json');
  const fileContents = fs.readFileSync(filePath, 'utf8');
  const education: Education[] = JSON.parse(fileContents);

  return (
    <main className="max-w-5xl mx-auto py-20 px-6 text-white">
      <h1 className="text-5xl font-bold mb-12 text-center">My Education</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        {education.map((edu) => (
          <div key={edu.id} className="bg-gray-800 rounded-lg shadow-lg p-6 hover:bg-gray-700 transition duration-300">
            <h2 className="text-3xl font-semibold text-indigo-400 mb-4">{edu.degree}</h2>
            <p className="text-xl text-gray-300 mb-2">{edu.institution}</p>
            <p className="text-sm text-gray-400 italic mb-4">{edu.location}</p>
            <p className="text-md text-gray-200 mb-2">{edu.duration}</p>
            {edu.gpa && (
              <p className="text-sm text-gray-400 mb-2">
                <span className="font-semibold">GPA:</span> {edu.gpa}
              </p>
            )}
            {edu.additional_info && (
              <p className="text-sm text-gray-400">
                <span className="font-semibold">Additional Info:</span> {edu.additional_info}
              </p>
            )}
          </div>
        ))}
      </div>
    </main>
  );
}
