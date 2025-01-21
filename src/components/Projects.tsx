import ProjectCard from './atoms/ProjectCard'

export const projects = [
  // Update this with your own projects or change the functionality so you can POST and GET them from the DB 
  {
    title: "Weather Analytics Dashboard",
    description: "A real-time weather monitoring dashboard built with React and D3.js. Features interactive data visualization and historical weather pattern analysis.",
    technologies: ["React", "D3.js", "Node.js", "Express"],
    githubUrl: "https://github.com"
  },
  {
    title: "Task Management API",
    description: "RESTful API service for task management with authentication, real-time notifications, and team collaboration features.",
    technologies: ["Node.js", "Express", "MongoDB", "Socket.io"],
    githubUrl: "https://github.com"
  },
  {
    title: "Recipe Finder App",
    description: "Mobile-first web application for discovering and sharing recipes. Includes ingredient-based search, meal planning, and social sharing features.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Firebase"],
    githubUrl: "https://github.com"
  },
  {
    title: "Budget Tracker",
    description: "Personal finance management tool with expense categorization, budget planning, and visualization of spending patterns.",
    technologies: ["React", "Redux", "Chart.js", "Firebase"],
    githubUrl: "https://github.com"
  },
  // Add more projects as needed
]

const Projects = () => {
  return (
    <section className="py-20 bg-[#F8F9FA]" id="projects">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-4">Projects</h2>
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
  )
}

export default Projects 