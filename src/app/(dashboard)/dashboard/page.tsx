import { Metadata } from "next";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Image as ImageIcon, Clock, Star, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Manage your AI Image Toolkit account",
};

export default function DashboardPage() {
  return (
    <div className="container py-12 space-y-8">
      <div>
        <h1 className="text-3xl font-bold mb-2">Dashboard</h1>
        <p className="text-muted-foreground">Welcome back! Here&apos;s an overview of your account.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid md:grid-cols-3 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Images Processed</CardTitle>
            <ImageIcon className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">0</div>
            <p className="text-xs text-muted-foreground">Start processing to see stats</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Recent Activity</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">-</div>
            <p className="text-xs text-muted-foreground">No recent activity</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Plan</CardTitle>
            <Star className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">Free</div>
            <Link href="/pricing" className="text-xs text-primary hover:underline">
              Upgrade →
            </Link>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <div>
        <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { name: "Compress Image", href: "/tools/compress" },
            { name: "Remove Background", href: "/tools/background-remove" },
            { name: "Resize Image", href: "/tools/resize" },
            { name: "Convert Format", href: "/tools/convert" },
          ].map((action) => (
            <Card key={action.name} className="hover:shadow-elevated transition-shadow cursor-pointer">
              <CardContent className="p-4">
                <Link href={action.href} className="flex items-center justify-between">
                  <span className="font-medium">{action.name}</span>
                  <ArrowRight className="h-4 w-4 text-muted-foreground" />
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Getting Started */}
      <Card>
        <CardHeader>
          <CardTitle>Getting Started</CardTitle>
          <CardDescription>
            New to AI Image Toolkit? Here&apos;s how to get started.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <ol className="list-decimal list-inside space-y-2 text-sm text-muted-foreground">
            <li>Choose a tool from the Tools page</li>
            <li>Upload your image(s)</li>
            <li>Adjust settings as needed</li>
            <li>Download your processed images</li>
          </ol>
          <Button asChild>
            <Link href="/tools">Browse All Tools</Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
