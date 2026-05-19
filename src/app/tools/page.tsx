import { Metadata } from "next";
import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Minimize2, Scissors, Image as ImageIcon, FileType, Wand2, Crop } from "lucide-react";

export const metadata: Metadata = {
  title: "Tools",
  description: "Professional AI-powered image processing tools. Compress, resize, convert, and more.",
};

const tools = [
  {
    name: "Image Compressor",
    description: "Reduce file size up to 90% without visible quality loss",
    icon: Minimize2,
    href: "/tools/compress",
    badge: "Popular",
  },
  {
    name: "Background Remover",
    description: "AI-powered background removal with precise edge detection",
    icon: Scissors,
    href: "/tools/background-remove",
    badge: "AI",
  },
  {
    name: "Image Resizer",
    description: "Smart resizing with aspect ratio presets and bulk processing",
    icon: ImageIcon,
    href: "/tools/resize",
    badge: null,
  },
  {
    name: "Format Converter",
    description: "Convert between PNG, JPG, WebP, GIF, and more",
    icon: FileType,
    href: "/tools/convert",
    badge: null,
  },
  {
    name: "Image Enhancer",
    description: "Upscale and enhance image quality using AI",
    icon: Wand2,
    href: "/tools/enhance",
    badge: "AI",
  },
  {
    name: "Image Cropper",
    description: "Precise cropping with preset aspect ratios",
    icon: Crop,
    href: "/tools/crop",
    badge: null,
  },
];

export default function ToolsPage() {
  return (
    <div className="container py-12">
      <div className="max-w-3xl mb-12">
        <h1 className="text-4xl font-bold mb-4">All Tools</h1>
        <p className="text-muted-foreground text-lg">
          Professional image processing tools powered by AI. 
          Most processing happens in your browser—your images stay private.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tools.map((tool) => (
          <Card key={tool.name} className="group hover:shadow-elevated transition-shadow">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <tool.icon className="h-6 w-6 text-primary" />
                </div>
                {tool.badge && (
                  <Badge variant={tool.badge === "AI" ? "default" : "secondary"}>
                    {tool.badge}
                  </Badge>
                )}
              </div>
              <CardTitle className="mt-4">{tool.name}</CardTitle>
              <CardDescription>{tool.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <Link
                href={tool.href}
                className="text-sm font-medium text-primary hover:underline inline-flex items-center"
              >
                Try it now →
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
