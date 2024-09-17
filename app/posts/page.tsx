import path from 'path';
import { promises as fs } from 'fs';

type Post = {
  id: number;
  title: string;
  date: string;
  linkedin_post_url: string;
  description: string;
  image_url: string;
};

export default async function PostsPage() {
  const filePath = path.join(process.cwd(), 'database', 'posts.json'); // Fetch from 'database' folder
  const fileContents = await fs.readFile(filePath, 'utf8');
  const posts: Post[] = JSON.parse(fileContents);

  return (
    <main className="max-w-7xl mx-auto py-20 px-6 text-white">
      <h1 className="text-5xl font-bold mb-12 text-center">Articles & Posts</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post) => (
          <div key={post.id} className="relative bg-gray-800 rounded-lg shadow-lg p-6 hover:bg-gray-700 transition duration-300 group">
            {/* Image */}
            <img
              src={post.image_url || 'https://via.placeholder.com/400'} // Placeholder if no image URL
              alt={post.title}
              className="w-full h-48 object-cover rounded-lg mb-4"
            />

            {/* Title and Date */}
            <h2 className="text-2xl font-semibold text-indigo-400 mb-2">
              {post.title}
            </h2>
            <p className="text-sm text-gray-400 mb-4">{post.date}</p>

            {/* Description */}
            <p className="text-md text-gray-200 mb-2">{post.description}</p>

            {/* Link to LinkedIn Post */}
            <a
              href={post.linkedin_post_url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-400 hover:underline"
            >
              View Full Post on LinkedIn
            </a>
          </div>
        ))}
      </div>
    </main>
  );
}
