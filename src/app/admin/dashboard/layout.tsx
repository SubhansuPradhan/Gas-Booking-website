import { Logo } from '@/components/logo';
import { UserNav } from '@/components/user-nav';
import { LayoutDashboard, Users, Fuel, Bell } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { PanelLeft } from 'lucide-react';

export default function AdminDashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="grid min-h-screen w-full lg:grid-cols-[280px_1fr]">
      <div className="hidden border-r bg-card lg:block">
        <div className="flex h-full max-h-screen flex-col gap-2">
          <div className="flex h-16 items-center border-b px-6">
            <Logo />
          </div>
          <div className="flex-1 overflow-auto py-2">
            <nav className="grid items-start px-4 text-sm font-medium">
              <Link
                className="flex items-center gap-3 rounded-lg bg-accent px-3 py-2 text-primary transition-all hover:text-primary"
                href="/admin/dashboard"
              >
                <LayoutDashboard className="h-4 w-4" />
                Dashboard
              </Link>
              <Link
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
                href="/admin/dashboard"
              >
                <Users className="h-4 w-4" />
                User Management
              </Link>
              <Link
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
                href="/admin/dashboard"
              >
                <Fuel className="h-4 w-4" />
                Bookings
              </Link>
               <Link
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
                href="/admin/dashboard"
              >
                <Bell className="h-4 w-4" />
                Notifications
              </Link>
            </nav>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <header className="flex h-16 items-center gap-4 border-b bg-card px-6 sticky top-0 z-30">
        <Sheet>
              <SheetTrigger asChild>
                <Button size="icon" variant="outline" className="lg:hidden">
                  <PanelLeft className="h-5 w-5" />
                  <span className="sr-only">Toggle Menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="lg:hidden w-[280px] p-0">
                <div className="flex h-16 items-center border-b px-6">
                    <Logo />
                </div>
                 <nav className="grid items-start p-4 text-sm font-medium">
                    <Link
                        className="flex items-center gap-3 rounded-lg bg-accent px-3 py-2 text-primary transition-all hover:text-primary"
                        href="/admin/dashboard"
                    >
                        <LayoutDashboard className="h-4 w-4" />
                        Dashboard
                    </Link>
                    <Link
                        className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
                        href="/admin/dashboard"
                    >
                        <Users className="h-4 w-4" />
                        User Management
                    </Link>
                    <Link
                        className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
                        href="/admin/dashboard"
                    >
                        <Fuel className="h-4 w-4" />
                        Bookings
                    </Link>
                    <Link
                        className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
                        href="/admin/dashboard"
                    >
                        <Bell className="h-4 w-4" />
                        Notifications
                    </Link>
                </nav>
              </SheetContent>
            </Sheet>
          <div className="flex-1">
            <h1 className="text-lg font-semibold hidden md:block">Admin Dashboard</h1>
          </div>
          <UserNav />
        </header>
        <main className="flex-1 p-4 md:p-6">{children}</main>
      </div>
    </div>
  );
}
