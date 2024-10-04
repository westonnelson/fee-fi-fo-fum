import Image from 'next/image'

export default function Team() {
  const teamMembers = [
    { name: 'Jack', role: 'Founder & CEO', image: '/placeholder.svg?height=100&width=100' },
    { name: 'Giant', role: 'CTO', image: '/placeholder.svg?height=100&width=100' },
    { name: 'Beanstalk', role: 'Community Manager', image: '/placeholder.svg?height=100&width=100' },
    { name: 'Golden Egg', role: 'Marketing Director', image: '/placeholder.svg?height=100&width=100' },
  ]

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">FeeFiFoFum (FFF) Team</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {teamMembers.map((member, index) => (
          <div key={index} className="bg-white shadow-md rounded px-8 pt-6 pb-8 text-center">
            <Image src={member.image} alt={member.name} width={100} height={100} className="mx-auto rounded-full mb-4" />
            <h2 className="text-xl font-semibold mb-2">{member.name}</h2>
            <p>{member.role}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
