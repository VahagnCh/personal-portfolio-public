import ServiceCard from './atoms/ServiceCard'
import { BsDatabase } from 'react-icons/bs'
import { GiTeacher } from 'react-icons/gi'
import { FaCode } from 'react-icons/fa'
const Services = () => {
   {/* Remmember to switch this to your own services*/}
    const services = [
    {
      title: "Software Development",
      description: {
        text: "Developing tailored software solutions to meet specific client needs such as:",
        points: [
          "CRM systems",
          "Ecommerce",
          "ERP tools",
          "Other business applications"
        ]
      },
      Icon: BsDatabase
    },
    {
      title: "Blockchain Development",
      description: {
        text: "Specialized in blockchain solutions including:",
        points: [
          "Developing smart contracts using Ethereum, Solana, or other technologies",
          "Building decentralized applications (dApps)",
          "NFT marketplace development"
        ]
      },
      Icon: FaCode
    },
    {
      title: "Consultation and Training",
      description: {
        text: "Providing consultation for software architecture, tech stack, or project planning.",
        points: [
          "Project planning",
          "Software architecture",
          "Tech stack",
        ]
      },
      Icon: GiTeacher
    }
  ]

  return (
    <section className="py-20 bg-[#DEE2E6]" id="services">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-4">Services</h2>
        <p className="text-gray-600 text-center mb-12">Here are the services that I provide</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              Icon={service.Icon}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services 