const HASHNODE_API = 'https://gql.hashnode.com'

// Add your Hashnode API token here
const HASHNODE_TOKEN = process.env.NEXT_PUBLIC_HASHNODE_TOKEN

const POSTS_QUERY = `
  query Publication {
    publication(host: "stt.hashnode.dev") {
      posts(first: 3) {
        edges {
          node {
            title
            brief
            publishedAt
            slug
            author {
              name
              username
            }
            tags {
              name
            }
            coverImage {
              url
            }
            url
          }
        }
      }
    }
  }
`

export interface HashnodePost {
  title: string
  description: string
  date: string
  author: string
  readTime?: string
  tags: string[]
  url: string
  coverImage?: string
}

interface HashnodeEdge {
  node: {
    title: string
    brief: string
    publishedAt: string
    slug: string
    author: { 
      name: string 
      username: string
    }
    tags: Array<{ name: string }>
    coverImage: {
      url: string
    }
    url: string
  }
}

export const hashnodeService = {
  async getBlogPosts(): Promise<HashnodePost[]> {
    try {
      const res = await fetch(HASHNODE_API, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': HASHNODE_TOKEN || '',
        },
        body: JSON.stringify({ query: POSTS_QUERY }),
        next: { revalidate: 3600 }
      })

      const json = await res.json()
      console.log('Full API Response:', json) // Log the full response including errors

      if (!json?.data?.publication?.posts?.edges) {
        console.error('Invalid API response structure:', json)
        return []
      }

      const posts = json.data.publication.posts.edges || []
      console.log('Processed posts:', posts)

      return posts.map((edge: HashnodeEdge) => {
        const post = edge.node
        const processed = {
          title: post.title,
          description: post.brief,
          date: post.publishedAt,
          author: post.author.name,
          tags: post.tags?.map((tag) => tag.name) || [],
          url: post.url || `https://stt.hashnode.dev/${post.slug}`,
          coverImage: post.coverImage?.url
        }
        console.log('Processed post:', processed)
        return processed
      })
    } catch (error) {
      console.error('Failed to fetch Hashnode posts:', error)
      return []
    }
  }
} 