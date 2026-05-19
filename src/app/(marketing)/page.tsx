import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Sparkles, 
  Shield, 
  Zap, 
  Layers, 
  CheckCircle2, 
  ArrowRight,
  Image as ImageIcon,
  Scissors,
  Minimize2,
  FileType
} from "lucide-react";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="container py-24 md:py-32 space-y-8">
        <div className="text-center space-y-4 max-w-4xl mx-auto">
          <Badge variant="secondary" className="mb-4">
            ✨ Privacy-First Image Processing
          </Badge>
          
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            Professional AI Image Tools
            <br />
            Right in Your Browser
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Your images stay private and secure. Most processing happens in your browser—
            no uploads, no waiting, no compromises.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button size="lg" className="text-base px-8" asChild>
              <Link href="/tools">
                Get Started Free
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="text-base px-8" asChild>
              <Link href="#pricing">View Pricing</Link>
            </Button>
          </div>
        </div>

        {/* Trust Messaging */}
        <div className="flex flex-wrap justify-center gap-6 pt-8 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <Shield className="h-4 w-4 text-primary" />
            <span>No server uploads</span>
          </div>
          <div className="flex items-center gap-2">
            <Zap className="h-4 w-4 text-primary" />
            <span>Instant processing</span>
          </div>
          <div className="flex items-center gap-2">
            <Layers className="h-4 w-4 text-primary" />
            <span>Batch processing</span>
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="bg-muted/30 py-24">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Everything You Need for Image Processing
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A complete toolkit of professional image editing tools, all powered by AI and running locally in your browser.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="border-0 shadow-subtle">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mb-4">
                  <Minimize2 className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle>Compress</CardTitle>
                <CardDescription>
                  Reduce file size up to 90% without visible quality loss. Perfect for web optimization.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-subtle">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center mb-4">
                  <Scissors className="h-6 w-6 text-purple-600" />
                </div>
                <CardTitle>Remove Background</CardTitle>
                <CardDescription>
                  AI-powered background removal with precise edge detection. One-click results.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-subtle">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-green-100 dark:bg-green-900/30 flex items-center justify-center mb-4">
                  <ImageIcon className="h-6 w-6 text-green-600" />
                </div>
                <CardTitle>Resize</CardTitle>
                <CardDescription>
                  Smart resizing with aspect ratio presets. Bulk process multiple images at once.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-subtle">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center mb-4">
                  <FileType className="h-6 w-6 text-orange-600" />
                </div>
                <CardTitle>Convert</CardTitle>
                <CardDescription>
                  Convert between PNG, JPG, WebP, and more. Maintain quality across formats.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Preview */}
      <section id="pricing" className="py-24">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Start free, upgrade when you need more power. No hidden fees.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Free Plan */}
            <Card className="border-0 shadow-subtle">
              <CardHeader>
                <CardTitle>Free</CardTitle>
                <CardDescription>Perfect for occasional use</CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold">$0</span>
                  <span className="text-muted-foreground">/month</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600" />
                    <span>10 images/day</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600" />
                    <span>Basic compression</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600" />
                    <span>Standard support</span>
                  </li>
                </ul>
                <Button className="w-full" variant="outline" asChild>
                  <Link href="/(auth)/sign-up">Get Started</Link>
                </Button>
              </CardContent>
            </Card>

            {/* Pro Plan */}
            <Card className="border-2 border-primary shadow-elevated relative">
              <Badge className="absolute -top-3 left-1/2 -translate-x-1/2">Most Popular</Badge>
              <CardHeader>
                <CardTitle>Pro</CardTitle>
                <CardDescription>For professionals</CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold">$12</span>
                  <span className="text-muted-foreground">/month</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600" />
                    <span>Unlimited images</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600" />
                    <span>All AI tools</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600" />
                    <span>Batch processing</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600" />
                    <span>Priority support</span>
                  </li>
                </ul>
                <Button className="w-full" asChild>
                  <Link href="/(auth)/sign-up">Start Free Trial</Link>
                </Button>
              </CardContent>
            </Card>

            {/* Team Plan */}
            <Card className="border-0 shadow-subtle">
              <CardHeader>
                <CardTitle>Team</CardTitle>
                <CardDescription>For growing teams</CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold">$49</span>
                  <span className="text-muted-foreground">/month</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600" />
                    <span>Everything in Pro</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600" />
                    <span>5 team members</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600" />
                    <span>API access</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600" />
                    <span>Dedicated support</span>
                  </li>
                </ul>
                <Button className="w-full" variant="outline" asChild>
                  <Link href="/(auth)/sign-up">Contact Sales</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Placeholder */}
      <section className="bg-muted/30 py-24">
        <div className="container max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Frequently Asked Questions
            </h2>
          </div>
          
          <div className="space-y-4">
            {[
              { q: "Are my images uploaded to a server?", a: "No! Most processing happens directly in your browser. Your images never leave your device." },
              { q: "What file formats are supported?", a: "We support PNG, JPG, WebP, GIF, and BMP formats for most tools." },
              { q: "Is there a file size limit?", a: "Free users can process images up to 10MB. Pro users can handle files up to 50MB." },
              { q: "Can I cancel anytime?", a: "Yes, you can cancel your subscription at any time. No questions asked." },
            ].map((faq, i) => (
              <Card key={i} className="border-0 shadow-subtle">
                <CardHeader>
                  <CardTitle className="text-lg">{faq.q}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{faq.a}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24">
        <div className="container">
          <Card className="gradient-primary border-0 text-white">
            <CardContent className="py-16 text-center space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                Ready to Transform Your Images?
              </h2>
              <p className="text-white/80 max-w-xl mx-auto">
                Join thousands of users who trust AI Image Toolkit for their image processing needs.
              </p>
              <Button size="lg" variant="secondary" className="text-base px-8" asChild>
                <Link href="/(auth)/sign-up">
                  Start Free Today
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
