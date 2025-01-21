import ProjectCard from '@/components/atoms/ProjectCard'
import BlogCard from '@/components/BlogCard'
import { projects } from '@/components/Projects'
import { hashnodeService } from '@/services/hashnodeService'

export default async function ProjectsPage() {
  const posts = await hashnodeService.getBlogPosts()

  return (
    <main className="pt-20">
      {/* Projects Section */}
      <section className="py-20 bg-[#F8F9FA]">
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="text-4xl font-bold text-center mb-4">My Projects</h1>
          <p className="text-gray-600 text-center mb-12">Check out some of my recent work</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <ProjectCard
                key={project.title}
                {...project}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-4">Latest Articles</h2>
          <p className="text-gray-600 text-center mb-12">Read my latest blog posts</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <BlogCard
                key={post.title}
                {...post}
              />
            ))}
          </div>

          <div className="text-center mt-12">
            <a 
              href="https://stt.hashnode.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#212529] text-white px-6 py-2 rounded hover:bg-gray-800 transition-colors"
            >
              View All Posts
            </a>
          </div>
        </div>
      </section>
    </main>
  )
} 