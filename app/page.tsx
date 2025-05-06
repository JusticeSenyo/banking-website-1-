import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, Shield, Zap, LineChart } from "lucide-react"

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-background to-muted">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Banking Made Simple for Everyone
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  NexaBank offers secure, innovative banking solutions designed for the modern world. Experience banking
                  that works for you.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/login">
                  <Button size="lg" className="bg-primary text-primary-foreground">
                    Login to Your Account <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Button size="lg" variant="outline">
                  Learn More
                </Button>
              </div>
            </div>
            <div className="flex justify-center lg:justify-end">
              <div className="relative w-full max-w-[500px] aspect-square rounded-full bg-muted p-4 shadow-lg">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 backdrop-blur-sm"></div>
                <div className="relative h-full w-full rounded-full bg-background flex items-center justify-center">
                  <div className="text-4xl md:text-6xl font-bold text-primary">NexaBank</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Why Choose NexaBank?</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Experience banking that puts you first with innovative features and unmatched security.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3 lg:gap-12 mt-12">
            <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
              <Shield className="h-12 w-12 text-primary" />
              <h3 className="text-xl font-bold">Secure Banking</h3>
              <p className="text-center text-muted-foreground">
                State-of-the-art security protocols to keep your money and data safe.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
              <Zap className="h-12 w-12 text-primary" />
              <h3 className="text-xl font-bold">Fast Transfers</h3>
              <p className="text-center text-muted-foreground">
                Send and receive money instantly, anytime and anywhere.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
              <LineChart className="h-12 w-12 text-primary" />
              <h3 className="text-xl font-bold">Smart Insights</h3>
              <p className="text-center text-muted-foreground">
                Personalized financial insights to help you manage your money better.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Ready to Experience Modern Banking?
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Join thousands of satisfied customers who have made the switch to NexaBank.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link href="/login">
                <Button size="lg" className="bg-primary text-primary-foreground">
                  Get Started Today
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
