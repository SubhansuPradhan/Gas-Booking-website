'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Logo } from '@/components/logo';
import { CheckCircle2 } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function Home() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);


  const features = [
    'Intuitive online booking for gas cylinders.',
    'Separate portals for users and administrators.',
    'Track your booking history and annual cylinder usage.',
    'Secure registration and account management.',
    'Instant notifications for important updates.',
  ];

  const line1 = "Effortless Gas Cylinder Booking,";
  const line2 = "Right at Your Fingertips.";

  return (
    <div className="flex flex-col min-h-screen items-center">
       <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <Logo className="ml-4" />
          <div className="flex items-center gap-4">
            <Button variant="ghost" asChild>
              <Link href="/login">Login</Link>
            </Button>
            <Button asChild>
              <Link href="/register">Register</Link>
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1 flex flex-col items-center w-full">
        <section className="container py-12 md:py-24 lg:py-32 flex justify-center">
          <div className="flex flex-col items-center justify-center gap-12 text-center">
            <div className="space-y-6 max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-headline font-bold tracking-tighter">
                {line1.split("").map((char, index) => (
                  <span
                    key={`line1-${index}`}
                    className="inline-block animate-wave"
                    style={{ animationDelay: `${index * 0.07}s` }}
                  >
                    {char === " " ? "\u00A0" : char}
                  </span>
                ))}
                <br />
                <span className="text-primary">
                  {line2.split("").map((char, index) => (
                    <span
                      key={`line2-${index}`}
                      className="inline-block animate-wave"
                      style={{
                        animationDelay: `${(line1.length + index) * 0.07}s`,
                      }}
                    >
                      {char === " " ? "\u00A0" : char}
                    </span>
                  ))}
                </span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
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
                src="https://wpblogassets.paytm.com/paytmblog/uploads/2022/02/row243_How-to-Book-Gas-Cylinder-Step-by-Step-Process.png"
                alt="Gas cylinder illustration"
                width={800}
                height={533}
                className="rounded-xl shadow-2xl"
                data-ai-hint="gas cylinder kitchen"
              />
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 bg-muted flex justify-center">
          <div className="container flex flex-col items-center px-4 md:px-6">
            <div className="text-center space-y-4 mb-12">
              <h2 className="text-3xl font-bold font-headline">Why Choose GasGo?</h2>
              <p className="text-muted-foreground md:w-2/3 mx-auto">
                We are committed to providing a seamless and efficient experience for all your gas booking needs.
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader className="text-center">
                  <CardTitle>Easy Online Booking</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-center">Book your cylinder anytime, anywhere with just a few clicks.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="text-center">
                  <CardTitle>Track Your History</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-center">Keep a detailed record of all your past bookings and payments.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="text-center">
                  <CardTitle>Secure & Reliable</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-center">Built with modern technology to ensure your data is always safe.</p>
                </CardContent>
              </Card>
            </div>
            <div className="mt-12 w-full max-w-5xl">
              <Card className="p-8">
                <div className="flex justify-center">
                    <div className="flex flex-col items-center">
                        <h3 className="text-2xl font-bold font-headline mb-4 text-center">All The Features You Need</h3>
                        <ul className="space-y-4 inline-block text-left">
                        {features.map((feature, index) => (
                            <li key={index} className="flex items-start">
                            <CheckCircle2 className="h-6 w-6 text-primary mr-3 mt-1 flex-shrink-0" />
                            <span className="text-muted-foreground">{feature}</span>
                            </li>
                        ))}
                        </ul>
                    </div>
                </div>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t w-full">
        <div className="container py-6 flex flex-col sm:flex-row justify-center items-center gap-4">
          <Logo />
           {isClient && (
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} GasGo. All rights reserved.
            </p>
          )}
        </div>
      </footer>
    </div>
  );
}
