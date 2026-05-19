import { Metadata } from "next";

export const metadata: Metadata = {
  title: "SEO Tools",
  description: "SEO-optimized image processing tools for better web performance",
};

export default function SEOToolsPage() {
  return (
    <div className="container py-12">
      <div className="max-w-3xl">
        <h1 className="text-4xl font-bold mb-4">SEO Image Tools</h1>
        <p className="text-muted-foreground text-lg mb-8">
          Optimize your images for search engines and web performance. 
          Faster loading images lead to better SEO rankings.
        </p>
        
        <div className="prose max-w-none">
          <h2>Why Image Optimization Matters for SEO</h2>
          <ul>
            <li>Faster page load times improve Core Web Vitals</li>
            <li>Proper image formats reduce bandwidth usage</li>
            <li>Optimized images rank better in image search</li>
            <li>Better user experience leads to lower bounce rates</li>
          </ul>
          
          <h2>Coming Soon</h2>
          <p>
            We&apos;re building specialized SEO tools including:
          </p>
          <ul>
            <li>Automatic alt text generation</li>
            <li>Schema markup for images</li>
            <li>Sitemap image optimization</li>
            <li>Lazy loading optimization</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
