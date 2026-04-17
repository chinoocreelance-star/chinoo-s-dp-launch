import { motion } from "framer-motion";
import { BadgeCheck, ArrowRight, Star } from "lucide-react";

const WHATSAPP_LINK = "https://wa.me/923298646906?text=Hi%20Chinoo's%20DP!%20I%20want%20Canva%20Pro%20access.";

const perks = [
  "Full Canva Pro Features",
  "Canva Business Team Access",
  "Unlimited Templates & Assets",
  "Priority 24/7 Support",
  "Instant Team Addition",
  "100% Secure & Verified",
];

const PricingSection = () => (
  <section id="pricing" className="py-24 px-4">
    <div className="max-w-lg mx-auto text-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">
          Simple <span className="gradient-text">Pricing</span>
        </h2>
        <p className="text-muted-foreground text-lg mb-10">One plan. Everything included. No hidden fees.</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.15 }}
        className="glass glass-border-glow rounded-3xl p-8 sm:p-10 relative overflow-hidden glow-primary hover-lift"
      >
        {/* Glow accent */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-1 gradient-bg rounded-b-full" />

        <div className="flex items-center justify-center gap-2 mb-6">
          <BadgeCheck className="w-5 h-5 text-primary" />
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">Verified Plan</span>
        </div>

        <div className="mb-8">
          <span className="font-display text-6xl font-bold gradient-text">100</span>
          <span className="text-2xl font-display font-semibold text-muted-foreground ml-1">PKR</span>
          <span className="text-muted-foreground"> / month</span>
        </div>

        <ul className="text-left space-y-3 mb-8">
          {perks.map((p) => (
            <li key={p} className="flex items-center gap-3 text-sm">
              <Star className="w-4 h-4 text-secondary flex-shrink-0" />
              <span className="text-foreground">{p}</span>
            </li>
          ))}
        </ul>

        <a
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="gradient-bg text-primary-foreground font-display font-semibold px-8 py-4 rounded-xl text-lg flex items-center justify-center gap-2 hover:opacity-90 transition-opacity w-full"
        >
          Get Access Now <ArrowRight className="w-5 h-5" />
        </a>

        <p className="text-xs text-muted-foreground mt-4">Cancel anytime. No contracts.</p>
      </motion.div>
    </div>
  </section>
);

export default PricingSection;
