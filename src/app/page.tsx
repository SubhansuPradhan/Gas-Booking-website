import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Logo } from '@/components/logo';
import { CheckCircle2 } from 'lucide-react';

export default function Home() {
  const features = [
    'Intuitive online booking for gas cylinders.',
    'Separate portals for users and administrators.',
    'Track your booking history and annual cylinder usage.',
    'Secure registration and account management.',
    'Instant notifications for important updates.',
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center">
          <Logo />
          <div className="ml-auto flex items-center gap-4">
            <Button variant="ghost" asChild>
              <Link href="/login">Login</Link>
            </Button>
            <Button asChild>
              <Link href="/register">Register</Link>
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        <section className="container py-12 md:py-24 lg:py-32">
          <div className="grid gap-8 lg:grid-cols-2 items-center">
            <div className="space-y-6 text-center">
              <h1 className="text-4xl md:text-5xl font-headline font-bold tracking-tighter">
                Effortless Gas Cylinder Booking, <br />
                <span className="text-primary">Right at Your Fingertips.</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-lg mx-auto">
                Say goodbye to long waiting times. With GasGo, you can book your gas cylinders online, make payments, and receive instant confirmations.
              </p>
              <div className="flex justify-center">
                <Button size="lg" asChild>
                  <Link href="/register">Get Started Today</Link>
                </Button>
              </div>
            </div>
            <div className="flex justify-center">
              <Image
                src="https://placehold.co/600x400.png"
                alt="Gas cylinder illustration"
                width={600}
                height={400}
                className="rounded-xl shadow-2xl"
                data-ai-hint="gas cylinder kitchen"
              />
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 bg-muted">
          <div className="container">
            <div className="text-center space-y-4 mb-12">
              <h2 className="text-3xl font-bold font-headline">Why Choose GasGo?</h2>
              <p className="text-muted-foreground md:w-2/3 mx-auto">
                We are committed to providing a seamless and efficient experience for all your gas booking needs.
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <CardTitle>Easy Online Booking</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Book your cylinder anytime, anywhere with just a few clicks.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Track Your History</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Keep a detailed record of all your past bookings and payments.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Secure & Reliable</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Built with modern technology to ensure your data is always safe.</p>
                </CardContent>
              </Card>
            </div>
            <div className="mt-12">
              <Card className="p-8">
                <div className="grid gap-8 md:grid-cols-2 items-center">
                    <div className="text-center">
                        <h3 className="text-2xl font-bold font-headline mb-4">All The Features You Need</h3>
                        <ul className="space-y-4 inline-block text-left">
                        {features.map((feature, index) => (
                            <li key={index} className="flex items-start">
                            <CheckCircle2 className="h-6 w-6 text-primary mr-3 mt-1 flex-shrink-0" />
                            <span className="text-muted-foreground">{feature}</span>
                            </li>
                        ))}
                        </ul>
                    </div>
                    <div className="flex justify-center">
                        <Image
                            src="https://placehold.co/500x300.png"
                            alt="GasGo app screenshot"
                            width={500}
                            height={300}
                            className="rounded-lg shadow-lg"
                            data-ai-hint="dashboard application"
                        />
                    </div>
                </div>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t">
        <div className="container py-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <Logo />
          <p className="text-sm text-muted-foreground">&copy; {new Date().getFullYear()} GasGo. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
