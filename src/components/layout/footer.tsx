import Link from "next/link";
import { Sparkles, Shield, Lock, Globe } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t bg-muted/30">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <Sparkles className="h-5 w-5 text-primary" />
              <span className="font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                AI Image Toolkit
              </span>
            </Link>
            <p className="text-sm text-muted-foreground mb-4">
              Professional image processing tools powered by AI. Your privacy is our priority.
            </p>
            
            {/* Trust Badges */}
            <div className="flex items-center gap-3 text-xs text-muted-foreground">
              <div className="flex items-center gap-1">
                <Shield className="h-4 w-4" />
                <span>Secure</span>
              </div>
              <div className="flex items-center gap-1">
                <Lock className="h-4 w-4" />
                <span>Private</span>
              </div>
              <div className="flex items-center gap-1">
                <Globe className="h-4 w-4" />
                <span>Browser-based</span>
              </div>
            </div>
          </div>

          {/* Products Column */}
          <div>
            <h4 className="font-semibold mb-4">Products</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/tools/compress" className="hover:text-foreground transition-colors">Image Compressor</Link></li>
              <li><Link href="/tools/background-remove" className="hover:text-foreground transition-colors">Background Remover</Link></li>
              <li><Link href="/tools/resize" className="hover:text-foreground transition-colors">Image Resizer</Link></li>
              <li><Link href="/tools/convert" className="hover:text-foreground transition-colors">Format Converter</Link></li>
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/about" className="hover:text-foreground transition-colors">About</Link></li>
              <li><Link href="/blog" className="hover:text-foreground transition-colors">Blog</Link></li>
              <li><Link href="/careers" className="hover:text-foreground transition-colors">Careers</Link></li>
              <li><Link href="/contact" className="hover:text-foreground transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Legal Column */}
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/privacy" className="hover:text-foreground transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-foreground transition-colors">Terms of Service</Link></li>
              <li><Link href="/cookies" className="hover:text-foreground transition-colors">Cookie Policy</Link></li>
              <li><Link href="/gdpr" className="hover:text-foreground transition-colors">GDPR</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} AI Image Toolkit. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground text-center md:text-right max-w-md">
            Your images stay private and secure. Most processing happens in your browser.
          </p>
        </div>
      </div>
    </footer>
  );
}
