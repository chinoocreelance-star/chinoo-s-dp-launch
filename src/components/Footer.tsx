import { Phone, Mail, ShieldCheck, BadgeCheck, Lock, MessageCircle } from "lucide-react";
import logo from "@/assets/chinoos-logo.png";

const WHATSAPP_LINK = "https://wa.me/923298646906?text=Hi%20Chinoo's%20DP!%20I%20want%20Canva%20Pro%20access.";

const Footer = () => (
  <footer className="relative pt-20 pb-10 px-4 border-t border-border/60 overflow-hidden">
    <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full bg-primary/10 blur-[120px] -z-10" />

    <div className="max-w-6xl mx-auto">
      <div className="grid gap-10 md:gap-8 md:grid-cols-12 mb-12">
        {/* Brand */}
        <div className="md:col-span-5">
          <a href="#" className="inline-flex items-center gap-2.5 mb-4">
            <div className="relative w-10 h-10 flex items-center justify-center">
              <div className="absolute inset-0 rounded-full bg-primary/30 blur-xl" aria-hidden />
              <img
                src={logo}
                alt="Chinoo's DP logo"
                width={40}
                height={40}
                loading="lazy"
                className="relative w-10 h-10 object-contain drop-shadow-[0_0_12px_hsl(var(--primary)/0.6)]"
              />
            </div>
            <span className="font-display text-xl font-bold">
              Chinoo's <span className="gradient-text">DP</span>
            </span>
          </a>
          <p className="text-sm text-muted-foreground leading-relaxed max-w-sm mb-5">
            Premium, verified Canva Business access for designers, agencies and creators across Pakistan — at an unbeatable price.
          </p>
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 gradient-bg text-primary-foreground text-sm font-semibold px-4 py-2.5 rounded-lg hover:opacity-90 transition-opacity"
          >
            <MessageCircle className="w-4 h-4" /> Chat on WhatsApp
          </a>
        </div>

        {/* Quick Links */}
        <div className="md:col-span-3">
          <h4 className="font-display text-sm font-semibold uppercase tracking-wider mb-4 text-foreground">
            Quick Links
          </h4>
          <ul className="space-y-2.5 text-sm text-muted-foreground">
            <li><a href="/#features" className="hover:text-foreground transition-colors">Features</a></li>
            <li><a href="/#pricing" className="hover:text-foreground transition-colors">Pricing</a></li>
            <li><a href="/#bonus" className="hover:text-foreground transition-colors">Gamma Bonus</a></li>
            <li><a href="/blog" className="hover:text-foreground transition-colors">Blog</a></li>
            <li><a href="#" className="hover:text-foreground transition-colors">FAQ</a></li>
            <li><a href="#" className="hover:text-foreground transition-colors">Terms of Service</a></li>
            <li><a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div className="md:col-span-4">
          <h4 className="font-display text-sm font-semibold uppercase tracking-wider mb-4 text-foreground">
            Contact
          </h4>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li>
              <a href="tel:+923298646906" className="flex items-center gap-2.5 hover:text-foreground transition-colors">
                <Phone className="w-4 h-4 text-primary" /> +92 329 8646906
              </a>
            </li>
            <li>
              <a href="mailto:tminspira@gmail.com" className="flex items-center gap-2.5 hover:text-foreground transition-colors">
                <Mail className="w-4 h-4 text-primary" /> tminspira@gmail.com
              </a>
            </li>
            <li className="flex items-center gap-2.5">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75" style={{ backgroundColor: "hsl(var(--status-online))" }} />
                <span className="relative inline-flex rounded-full h-2 w-2" style={{ backgroundColor: "hsl(var(--status-online))" }} />
              </span>
              <span style={{ color: "hsl(var(--status-online))" }} className="font-medium">Active 24/7</span>
            </li>
          </ul>

          <div className="flex flex-wrap gap-2 mt-5">
            {[
              { icon: ShieldCheck, label: "Secure Payment" },
              { icon: BadgeCheck, label: "Verified Partner" },
              { icon: Lock, label: "100% Safe" },
            ].map((b) => (
              <div key={b.label} className="glass flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-[11px] font-medium">
                <b.icon className="w-3.5 h-3.5 text-primary" />
                {b.label}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="pt-6 border-t border-border/60 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
        <p>© {new Date().getFullYear()} Chinoo's DP. All rights reserved.</p>
        <p>Crafted with care · Authentic Canva Business team</p>
      </div>
    </div>
  </footer>
);

export default Footer;
