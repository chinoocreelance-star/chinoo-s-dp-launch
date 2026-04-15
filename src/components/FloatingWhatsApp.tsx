import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

const WHATSAPP_LINK = "https://wa.me/923401670436?text=Hi%20Chinoo's%20DP!%20I%20want%20Canva%20Pro%20access.";

const FloatingWhatsApp = () => (
  <motion.a
    href={WHATSAPP_LINK}
    target="_blank"
    rel="noopener noreferrer"
    initial={{ scale: 0 }}
    animate={{ scale: 1 }}
    transition={{ delay: 1, type: "spring" }}
    className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full gradient-bg flex items-center justify-center shadow-lg glow-primary hover:opacity-90 transition-opacity sm:hidden"
    aria-label="Contact on WhatsApp"
  >
    <MessageCircle className="w-6 h-6 text-primary-foreground" />
  </motion.a>
);

export default FloatingWhatsApp;
