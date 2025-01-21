import BlogCard from './BlogCard'
import Button from './atoms/Button'
import Link from 'next/link'
import { hashnodeService, HashnodePost } from '@/services/hashnodeService'

export default async function BlogSection() {
  try {
    const posts = await hashnodeService.getBlogPosts()
    console.log('Posts in BlogSection:', posts) // Debug log

    if (!posts.length) {
      console.log('No posts found') // Debug log
      return null
    }

    return (
      <section className="bg-[#F8F9FA] py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-4xl font-bold">Latest Articles</h2>
            <Link href="https://stt.hashnode.dev" target="_blank" rel="noopener noreferrer">
              <Button variant="outline">View All Posts</Button>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post: HashnodePost) => (
              <BlogCard key={post.title} {...post} />
            ))}
          </div>
        </div>
      </section>
    )
  } catch (error) {
    console.error('Error in BlogSection:', error)
    return null
  }
} 