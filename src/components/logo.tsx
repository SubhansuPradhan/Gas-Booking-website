import { Flame } from 'lucide-react';
import { cn } from '@/lib/utils';
import Link from 'next/link';

export function Logo({ className }: { className?: string }) {
  return (
    <Link href="/" className={cn("flex items-center gap-2", className)} aria-label="GasGo Home">
      <Flame className="h-7 w-7 text-primary" />
      <span className="text-2xl font-bold font-headline text-foreground">GasGo</span>
    </Link>
  );
}
