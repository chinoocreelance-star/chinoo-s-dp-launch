import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

const WHATSAPP_LINK = "https://wa.me/923298646906?text=Hi%20Chinoo's%20DP!%20I%20want%20Canva%20Pro%20access.";

const HeroSection = () => (
  <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 pt-20">
    {/* Gradient orbs */}
    <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-primary/20 blur-[120px]" />
    <div className="absolute bottom-1/4 -right-32 w-96 h-96 rounded-full bg-secondary/20 blur-[120px]" />
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-accent/10 blur-[150px]" />

    <div className="relative z-10 text-center max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="inline-flex items-center gap-2 glass rounded-full px-5 py-2 mb-8"
      >
        <Sparkles className="w-4 h-4 text-primary" />
        <span className="text-sm font-medium text-muted-foreground">Trusted by 500+ designers across Pakistan</span>
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.1 }}
        className="font-display text-4xl sm:text-5xl md:text-7xl font-bold leading-tight mb-6"
      >
        Design Without Limits at{" "}
        <span className="gradient-text">Chinoo's DP</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.25 }}
        className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10"
      >
        Get authentic Canva Pro access for only <strong className="text-foreground">100 PKR/month</strong>. Join our verified business team today.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.4 }}
        className="flex flex-col sm:flex-row items-center justify-center gap-4"
      >
        <a
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="gradient-bg text-primary-foreground font-display font-semibold px-8 py-4 rounded-xl text-lg flex items-center gap-2 hover:opacity-90 transition-opacity glow-primary"
        >
          Get Access Now <ArrowRight className="w-5 h-5" />
        </a>
        <a href="#pricing" className="glass px-8 py-4 rounded-xl font-display font-medium text-foreground hover:bg-muted/50 transition-colors">
          View Pricing
        </a>
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="mt-6 text-sm text-muted-foreground"
      >
        Call or Message us anytime — we are active 24/7
      </motion.p>
    </div>
  </section>
);

export default HeroSection;
