import ProjectCard from './atoms/ProjectCard'

export const projects = [
  {
    title: "Testers Academy",
    description: "A web app for ISTQB certification prep with interactive sample tests, answer explanations, and instant feedback.",
    technologies: ["Next.js", "React", "Tailwind CSS", "MongoDB"],
    liveUrl: "https://www.testersacademy.com/"
  },
  {
    title: "Foundry Smart Contract Loterry",
    description: "A decentralized and automated raffle system built with Foundry that uses Chainlink VRF and Chainlink Automation for trustless execution.",
    technologies: ["Foundry", "Solidity", "React"],
    githubUrl: "https://github.com/VahagnCh/Foundry-Smart-Contract-Lottery"
  },
  {
    title: "Personal Portfolio",
    description: "A modern portfolio website built with Next.js and Tailwind CSS. Features blog integration with Hashnode API and contact form with email notifications.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "MongoDB"],
    githubUrl: "https://github.com/VahagnCh/personal-portfolio",
  },
  {
    title: "Discord Bot",
    description: "Discord bot built with Python to send real-time alerts when in-game bosses spawn, keeping players informed and ready.",
    technologies: ["Python", "Discord.py", "MongoDB"],
    githubUrl: "https://github.com/VahagnCh/DiscordBot"
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