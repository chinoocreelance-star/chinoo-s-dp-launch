import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

const WHATSAPP_LINK = "https://wa.me/923298646906?text=Hi%20Chinoo's%20DP!%20I%20want%20Canva%20Pro%20access.";

const Navbar = () => (
  <motion.nav
    initial={{ y: -20, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.5 }}
    className="fixed top-0 left-0 right-0 z-50 glass-strong border-b border-border/40"
  >
    <div className="max-w-6xl mx-auto flex items-center justify-between px-4 sm:px-6 py-3">
      <a href="#" className="flex items-center gap-2 group">
        <div className="relative w-8 h-8 rounded-lg gradient-bg flex items-center justify-center shadow-md group-hover:scale-105 transition-transform">
          <Sparkles className="w-4 h-4 text-primary-foreground" />
        </div>
        <span className="font-display text-lg sm:text-xl font-bold tracking-tight">
          Chinoo's<span className="gradient-text">DP</span>
        </span>
      </a>

      <div className="hidden md:flex items-center gap-7 text-sm text-muted-foreground font-medium">
        <a href="#status" className="hover:text-foreground transition-colors">Status</a>
        <a href="#features" className="hover:text-foreground transition-colors">Features</a>
        <a href="#bonus" className="hover:text-foreground transition-colors">Bonus</a>
        <a href="#pricing" className="hover:text-foreground transition-colors">Pricing</a>
      </div>

      <a
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className="gradient-bg text-primary-foreground font-semibold px-3.5 sm:px-5 py-2 rounded-lg text-sm flex items-center gap-1.5 sm:gap-2 hover:opacity-90 transition-opacity glow-primary"
      >
        Get Started <ArrowRight className="w-3.5 h-3.5" />
      </a>
    </div>
  </motion.nav>
);

export default Navbar;
