import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import { blogPosts } from "@/data/blogPosts";

const Blog = () => (
  <div className="dark min-h-screen bg-background text-foreground">
    <Navbar />

    <main className="pt-32 pb-24 px-4 relative overflow-hidden">
      <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-primary/15 blur-[140px] -z-10" />

      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 mb-6">
            <span className="text-xs font-semibold tracking-wider uppercase gradient-text">
              The Chinoo's Journal
            </span>
          </div>
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
            Insights from the <span className="gradient-text">Chinoo's DP</span> Blog
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Tutorials, tips, and honest guides on Canva Pro, AI design tools, and growing your creative work in Pakistan.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post, i) => (
            <motion.article
              key={post.slug}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass glass-border-glow rounded-2xl overflow-hidden hover-lift hover:border-primary/50 group"
            >
              <Link to={`/blog/${post.slug}`} className="block">
                <div className={`relative h-44 bg-gradient-to-br ${post.cover} overflow-hidden`}>
                  <div className="absolute inset-0 bg-background/10 backdrop-blur-[1px]" />
                  <span className="absolute top-4 left-4 glass text-[11px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-md">
                    {post.category}
                  </span>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 text-[11px] text-muted-foreground uppercase tracking-wider mb-3">
                    <span className="flex items-center gap-1.5"><Calendar className="w-3 h-3" />{post.date}</span>
                    <span className="flex items-center gap-1.5"><Clock className="w-3 h-3" />{post.readTime}</span>
                  </div>
                  <h2 className="font-display text-lg font-bold leading-tight mb-2 group-hover:gradient-text transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3 mb-4">
                    {post.excerpt}
                  </p>
                  <span className="inline-flex items-center gap-1.5 text-sm font-semibold gradient-text">
                    Read article <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </main>

    <Footer />
    <FloatingWhatsApp />
  </div>
);

export default Blog;
