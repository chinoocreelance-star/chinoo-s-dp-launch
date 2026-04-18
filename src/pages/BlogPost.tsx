import { motion } from "framer-motion";
import { Link, useParams, Navigate } from "react-router-dom";
import { ArrowLeft, Calendar, Clock, MessageCircle, User } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import { getPostBySlug } from "@/data/blogPosts";

const WHATSAPP_LINK =
  "https://wa.me/923298646906?text=Hi%20Chinoo's%20DP!%20I%20want%20Canva%20Pro%20access.";

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getPostBySlug(slug) : undefined;

  if (!post) return <Navigate to="/blog" replace />;

  return (
    <div className="dark min-h-screen bg-background text-foreground">
      <Navbar />

      <main className="pt-28 pb-24 px-4 relative overflow-hidden">
        <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[600px] h-[350px] rounded-full bg-primary/15 blur-[140px] -z-10" />

        <article className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link
              to="/blog"
              className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
            >
              <ArrowLeft className="w-3.5 h-3.5" /> Back to blog
            </Link>

            <span className="inline-block glass text-[11px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-md mb-5">
              {post.category}
            </span>

            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-5">
              {post.title}
            </h1>

            <div className="flex flex-wrap items-center gap-4 text-xs text-muted-foreground uppercase tracking-wider mb-10 pb-8 border-b border-border/60">
              <span className="flex items-center gap-1.5"><User className="w-3.5 h-3.5" />{post.author}</span>
              <span className="flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5" />{post.date}</span>
              <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" />{post.readTime}</span>
            </div>

            <div className={`relative h-56 sm:h-72 rounded-2xl bg-gradient-to-br ${post.cover} mb-12 overflow-hidden`}>
              <div className="absolute inset-0 bg-background/10 backdrop-blur-[1px]" />
            </div>

            <div className="space-y-7">
              {post.content.map((block, i) => (
                <div key={i}>
                  {block.heading && (
                    <h2 className="font-display text-xl sm:text-2xl font-bold mb-3">
                      {block.heading}
                    </h2>
                  )}
                  <p className="text-base sm:text-[17px] text-muted-foreground leading-relaxed">
                    {block.body}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-14 glass glass-border-glow rounded-2xl p-7 sm:p-8 text-center">
              <h3 className="font-display text-xl sm:text-2xl font-bold mb-2">
                Ready to unlock <span className="gradient-text">Canva Pro</span>?
              </h3>
              <p className="text-sm text-muted-foreground mb-5">
                Verified Canva Business access — same-day activation on WhatsApp.
              </p>
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 gradient-bg text-primary-foreground font-semibold px-5 py-2.5 rounded-lg text-sm hover:opacity-90 transition-opacity glow-primary"
              >
                <MessageCircle className="w-4 h-4" /> Chat on WhatsApp
              </a>
            </div>
          </motion.div>
        </article>
      </main>

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default BlogPost;
