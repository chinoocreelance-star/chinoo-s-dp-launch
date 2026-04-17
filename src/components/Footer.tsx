import { Phone, Mail } from "lucide-react";

const Footer = () => (
  <footer className="py-12 px-4 border-t border-border">
    <div className="max-w-5xl mx-auto text-center space-y-3">
      <span className="font-display text-lg font-bold gradient-text">Chinoo's DP</span>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 text-muted-foreground text-sm">
        <a href="tel:+923401670436" className="flex items-center gap-2 hover:text-foreground transition-colors">
          <Phone className="w-4 h-4" /> +92 340 1670436
        </a>
        <a href="mailto:tminspira@gmail.com" className="flex items-center gap-2 hover:text-foreground transition-colors">
          <Mail className="w-4 h-4" /> tminspira@gmail.com
        </a>
      </div>
      <p className="text-xs text-muted-foreground">© {new Date().getFullYear()} Chinoo's DP. All rights reserved.</p>
    </div>
  </footer>
);

export default Footer;
