import { Phone } from "lucide-react";

const Footer = () => (
  <footer className="py-12 px-4 border-t border-border">
    <div className="max-w-5xl mx-auto text-center space-y-3">
      <span className="font-display text-lg font-bold gradient-text">Chinoo's DP</span>
      <div className="flex items-center justify-center gap-2 text-muted-foreground text-sm">
        <Phone className="w-4 h-4" />
        <a href="tel:+923401670436" className="hover:text-foreground transition-colors">+92 340 1670436</a>
      </div>
      <p className="text-xs text-muted-foreground">© {new Date().getFullYear()} Chinoo's DP. All rights reserved.</p>
    </div>
  </footer>
);

export default Footer;
