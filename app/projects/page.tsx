import path from 'path';
import { promises as fs } from 'fs';

type Project = {
  id: number;
  title: string;
  duration: string;
  technologies: string[];
  description: string;
  project_link?: string;
  image_url?: string;
};

export default async function ProjectsPage() {
  const filePath = path.join(process.cwd(), 'database', 'projects.json'); // Fetch from 'database' folder
  const fileContents = await fs.readFile(filePath, 'utf8');
  const projects: Project[] = JSON.parse(fileContents);

  return (
    <main className="max-w-7xl mx-auto py-20 px-6 text-white">
      <h1 className="text-5xl font-bold mb-12 text-center">My Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div key={project.id} className="relative border-[1px] border-gray-600 rounded-xl p-6 hover:bg-gray-900 transition duration-300 group">
            {/* Project Image always visible */}
            {project.project_link && (
              <a href={project.project_link} target="_blank" rel="noopener noreferrer">
                <img
                  src={project.image_url || 'https://via.placeholder.com/400'} // Placeholder image if none
                  alt={project.title}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
              </a>
            )}

            {/* Title and Date */}
            <h2 className="text-2xl font-semibold mb-2">
              {project.title}
            </h2>
            <p className="text-sm text-gray-400 mb-4">{project.duration}</p>

            {/* Expandable Section */}
            <details className="group">
              <summary className="cursor-pointer hover:underline">
                More Details
              </summary>
              <div className="mt-4">
                <p className="text-md text-gray-200 mb-2">{project.description}</p>
                <p className="text-sm text-gray-400 mb-4">
                  <span className="font-semibold">Technologies:</span> {project.technologies.join(', ')}
                </p>

                {project.project_link && (
                  <a href={project.project_link} target="_blank" rel="noopener noreferrer" className="hover:underline">
                    View Project
                  </a>
                )}
              </div>
            </details>
          </div>
        ))}
      </div>
    </main>
  );
}
