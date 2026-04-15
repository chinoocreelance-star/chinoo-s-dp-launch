import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

const WHATSAPP_LINK = "https://wa.me/923401670436?text=Hi%20Chinoo's%20DP!%20I%20want%20Canva%20Pro%20access.";

const Navbar = () => (
  <motion.nav
    initial={{ y: -20, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.5 }}
    className="fixed top-0 left-0 right-0 z-50 glass-strong"
  >
    <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3">
      <span className="font-display text-xl font-bold gradient-text">Chinoo's DP</span>
      <div className="hidden sm:flex items-center gap-6 text-sm text-muted-foreground font-medium">
        <a href="#features" className="hover:text-foreground transition-colors">Features</a>
        <a href="#trust" className="hover:text-foreground transition-colors">Trust</a>
        <a href="#pricing" className="hover:text-foreground transition-colors">Pricing</a>
      </div>
      <a
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className="gradient-bg text-primary-foreground font-semibold px-4 py-2 rounded-lg text-sm flex items-center gap-2 hover:opacity-90 transition-opacity"
      >
        <MessageCircle className="w-4 h-4" /> WhatsApp
      </a>
    </div>
  </motion.nav>
);

export default Navbar;
