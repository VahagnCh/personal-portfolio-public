import ServiceCard from './atoms/ServiceCard'
import { BsDatabase } from 'react-icons/bs'
import { GiTeacher } from 'react-icons/gi'
import { FaCode } from 'react-icons/fa'
const Services = () => {
   {/* Remmember to switch this to your own services*/}
    const services = [
    {
      title: "Web Development",
      description: {
        text: "Full-stack web development services including:",
        points: [
          "Responsive web applications",
          "Progressive Web Apps (PWA)",
          "E-commerce solutions",
          "Custom web portals"
        ]
      },
      Icon: FaCode
    },
    {
      title: "Cloud Solutions",
      description: {
        text: "Cloud infrastructure and deployment services including:",
        points: [
          "Cloud architecture design",
          "Serverless applications",
          "Microservices deployment",
          "DevOps automation"
        ]
      },
      Icon: BsDatabase
    },
    {
      title: "Mobile Development",
      description: {
        text: "Cross-platform mobile application development including:",
        points: [
          "iOS and Android apps",
          "React Native development",
          "Mobile UI/UX design",
          "App maintenance & updates"
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