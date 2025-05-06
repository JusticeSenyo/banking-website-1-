import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield, CreditCard, Smartphone, Wallet, PiggyBank, LineChart, Clock, Globe } from "lucide-react"
import Link from "next/link"

export default function FeaturesPage() {
  const features = [
    {
      icon: <Shield className="h-10 w-10 text-primary" />,
      title: "Secure Banking",
      description: "State-of-the-art encryption and multi-factor authentication to keep your money safe.",
    },
    {
      icon: <CreditCard className="h-10 w-10 text-primary" />,
      title: "Premium Cards",
      description: "Access exclusive benefits with our premium credit and debit cards.",
    },
    {
      icon: <Smartphone className="h-10 w-10 text-primary" />,
      title: "Mobile Banking",
      description: "Manage your finances anytime, anywhere with our award-winning mobile app.",
    },
    {
      icon: <Wallet className="h-10 w-10 text-primary" />,
      title: "Digital Wallet",
      description: "Seamlessly integrate with Apple Pay, Google Pay, and other digital payment solutions.",
    },
    {
      icon: <PiggyBank className="h-10 w-10 text-primary" />,
      title: "Savings Goals",
      description: "Set and track your savings goals with automated tools and insights.",
    },
    {
      icon: <LineChart className="h-10 w-10 text-primary" />,
      title: "Investment Options",
      description: "Grow your wealth with our diverse investment portfolios and expert guidance.",
    },
    {
      icon: <Clock className="h-10 w-10 text-primary" />,
      title: "24/7 Support",
      description: "Our customer service team is available around the clock to assist you.",
    },
    {
      icon: <Globe className="h-10 w-10 text-primary" />,
      title: "Global Access",
      description: "Access your funds worldwide with no foreign transaction fees.",
    },
  ]

  return (
    <div className="container py-12 md:py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight mb-4">Our Features</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Discover the innovative features that make NexaBank the leading choice for modern banking.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <Card key={index} className="border border-border">
            <CardHeader>
              <div className="mb-4">{feature.icon}</div>
              <CardTitle>{feature.title}</CardTitle>
              <CardDescription>{feature.description}</CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>

      <div className="mt-16 text-center">
        <h2 className="text-3xl font-bold mb-6">Ready to experience better banking?</h2>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/signup">
            <Button size="lg">Open an Account</Button>
          </Link>
          <Link href="/contact">
            <Button size="lg" variant="outline">
              Contact Us
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
