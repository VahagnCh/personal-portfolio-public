import Image from 'next/image'

interface ProjectCardProps {
  title: string
  description: string
  technologies: string[]
  imageUrl?: string
  githubUrl?: string
  liveUrl?: string
}

const ProjectCard = ({ title, description, technologies, imageUrl, githubUrl, liveUrl }: ProjectCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col h-full">
      {imageUrl && (
        <div className="relative h-48 w-full">
          <Image 
            src={imageUrl} 
            alt={title} 
            fill
            className="object-cover"
          />
        </div>
      )}
      
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold mb-2 h-14 line-clamp-2">{title}</h3>
        <p className="text-gray-600 mb-4 h-24 line-clamp-4">{description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4 min-h-[2rem]">
          {technologies.map((tech) => (
            <span 
              key={tech}
              className="bg-[#212529] text-white text-sm px-2 py-1 rounded"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-auto flex gap-4">
          {githubUrl && (
            <a 
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900"
            >
              GitHub
            </a>
          )}
          {liveUrl && (
            <a 
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900"
            >
              Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

export default ProjectCard 