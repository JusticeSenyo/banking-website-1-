import { Card } from "@/components/ui/card"
import Image from "next/image"

export default function AboutPage() {
  const teamMembers = [
    {
      name: "Sarah Johnson",
      role: "CEO",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Michael Chen",
      role: "CTO",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Aisha Patel",
      role: "CFO",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "David Rodriguez",
      role: "COO",
      image: "/placeholder.svg?height=300&width=300",
    },
  ]

  return (
    <div className="container py-12 md:py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight mb-4">About NexaBank</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Building the future of banking with innovation, security, and customer-first approach.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
        <div>
          <h2 className="text-3xl font-bold mb-4">Our Story</h2>
          <p className="text-muted-foreground mb-4">
            Founded in 2015, NexaBank was created with a simple mission: to revolutionize the banking industry by
            combining cutting-edge technology with exceptional customer service.
          </p>
          <p className="text-muted-foreground mb-4">
            What started as a small fintech startup has grown into one of the most trusted digital banks, serving over 2
            million customers worldwide. Our journey has been defined by our commitment to innovation, security, and
            putting our customers first.
          </p>
          <p className="text-muted-foreground">
            Today, we continue to push the boundaries of what's possible in banking, developing new solutions that make
            managing your finances simpler, smarter, and more secure.
          </p>
        </div>
        <div className="bg-muted rounded-lg overflow-hidden">
          <Image
            src="/placeholder.svg?height=600&width=800"
            alt="NexaBank headquarters"
            width={800}
            height={600}
            className="w-full h-auto"
          />
        </div>
      </div>

      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Our Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="text-center p-6">
            <h3 className="text-xl font-bold mb-2">Innovation</h3>
            <p className="text-muted-foreground">
              We constantly explore new technologies and ideas to improve our services and stay ahead of the curve.
            </p>
          </Card>
          <Card className="text-center p-6">
            <h3 className="text-xl font-bold mb-2">Security</h3>
            <p className="text-muted-foreground">
              We prioritize the protection of our customers' data and funds with industry-leading security measures.
            </p>
          </Card>
          <Card className="text-center p-6">
            <h3 className="text-xl font-bold mb-2">Transparency</h3>
            <p className="text-muted-foreground">
              We believe in clear communication and no hidden fees, ensuring our customers always know what to expect.
            </p>
          </Card>
        </div>
      </div>

      <div>
        <h2 className="text-3xl font-bold mb-8 text-center">Leadership Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((member, index) => (
            <div key={index} className="text-center">
              <div className="rounded-full overflow-hidden w-48 h-48 mx-auto mb-4">
                <Image
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  width={200}
                  height={200}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold">{member.name}</h3>
              <p className="text-muted-foreground">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
