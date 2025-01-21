'use client'

import Link from 'next/link'
import { HashnodePost } from '@/services/hashnodeService'

type BlogCardProps = HashnodePost

const BlogCard: React.FC<BlogCardProps> = ({ title, description, date, author, readTime, tags, url }) => {
  const formattedDate = new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })

  return (
    <Link href={url} className="block h-full" target="_blank" rel="noopener noreferrer">
      <article className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6 flex flex-col h-full">
        <div className="flex flex-wrap gap-2 mb-3">
          {tags.map((tag) => (
            <span 
              key={tag}
              className="bg-[#212529] text-white text-sm px-2 py-1 rounded"
            >
              {tag}
            </span>
          ))}
        </div>
        <h2 className="text-xl font-bold mb-2 line-clamp-2">{title}</h2>
        <p className="text-gray-600 mb-4 flex-grow line-clamp-3">{description}</p>
        <div className="flex items-center justify-between text-sm text-gray-500 mt-auto">
          <div className="flex items-center gap-2">
            <span>{author}</span>
            <span>·</span>
            <span>{readTime}</span>
          </div>
          <time>{formattedDate}</time>
        </div>
      </article>
    </Link>
  )
}

export default BlogCard 