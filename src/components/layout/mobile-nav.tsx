"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileNav({ isOpen, onClose }: MobileNavProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 md:hidden">
      {/* Overlay */}
      <div 
        className="fixed inset-0 bg-black/80" 
        onClick={onClose}
        aria-hidden="true"
      />
      
      {/* Nav Panel */}
      <div className="fixed inset-y-0 right-0 w-full max-w-xs bg-background p-6 shadow-lg">
        <div className="flex items-center justify-between mb-8">
          <span className="text-lg font-semibold">Menu</span>
          <button
            onClick={onClose}
            className="p-2 hover:bg-accent rounded-lg"
            aria-label="Close menu"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <nav className="flex flex-col gap-4">
          <Link
            href="/tools"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors py-2"
            onClick={onClose}
          >
            Tools
          </Link>
          <Link
            href="/#pricing"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors py-2"
            onClick={onClose}
          >
            Pricing
          </Link>
          <Link
            href="/docs"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors py-2"
            onClick={onClose}
          >
            Docs
          </Link>
          
          <div className="border-t pt-4 mt-4 flex flex-col gap-3">
            <Button variant="ghost" className="w-full justify-start" asChild>
              <Link href="/(auth)/sign-in" onClick={onClose}>Sign In</Link>
            </Button>
            <Button className="w-full" asChild>
              <Link href="/(auth)/sign-up" onClick={onClose}>Get Started</Link>
            </Button>
          </div>
        </nav>
      </div>
    </div>
  );
}
