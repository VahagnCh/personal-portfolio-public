import { IconType } from 'react-icons'

interface ServiceCardProps {
  title: string
  description: string | {
    text: string
    points: string[]
  }
  Icon: IconType
}

const ServiceCard = ({ title, description, Icon }: ServiceCardProps) => {
  return (
    <div className="bg-[#212529] text-white p-8 rounded-lg transition-transform hover:-translate-y-1 text-center">
      <div className="mb-4 flex justify-center">
        <Icon size={40} />
      </div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      {typeof description === 'string' ? (
        <p className="text-gray-300">{description}</p>
      ) : (
        <>
          <p className="text-gray-300 mb-2">{description.text}</p>
          <ul className="text-gray-300 text-left list-disc pl-4">
            {description.points.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>
        </>
      )}
    </div>
  )
}

export default ServiceCard 