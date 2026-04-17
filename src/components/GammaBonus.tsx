import { motion } from "framer-motion";
import { Sparkles, Gift, Wand2, FileText, Globe } from "lucide-react";

const WHATSAPP_LINK = "https://wa.me/923401670436?text=Hi%20Chinoo's%20DP!%20I%20want%20Canva%20Pro%20%2B%20Gamma%20AI%20bonus.";

const GammaBonus = () => (
  <section id="bonus" className="py-24 px-4 relative overflow-hidden">
    <div className="max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 mb-6">
          <Gift className="w-4 h-4 text-secondary" />
          <span className="text-xs font-semibold uppercase tracking-wider text-secondary">
            Exclusive Bonus
          </span>
        </div>
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
          The Chinoo's <span className="gradient-text">Advantage</span>
        </h2>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="glass-strong rounded-3xl p-8 sm:p-12 relative overflow-hidden glow-primary"
      >
        <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-secondary/20 blur-[100px]" />
        <div className="absolute -bottom-20 -left-20 w-72 h-72 rounded-full bg-primary/20 blur-[100px]" />

        <div className="relative grid md:grid-cols-[auto,1fr] gap-8 items-center">
          {/* Glowing Gamma icon */}
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="relative mx-auto md:mx-0"
          >
            <div className="absolute inset-0 gradient-bg rounded-3xl blur-2xl opacity-60" />
            <div className="relative w-28 h-28 rounded-3xl gradient-bg flex items-center justify-center shadow-2xl">
              <Wand2 className="w-14 h-14 text-primary-foreground" strokeWidth={1.8} />
              <Sparkles className="absolute top-3 right-3 w-4 h-4 text-white animate-pulse" />
              <Sparkles className="absolute bottom-4 left-4 w-3 h-3 text-white animate-pulse" />
            </div>
          </motion.div>

          <div className="text-center md:text-left">
            <div className="flex items-center gap-2 justify-center md:justify-start mb-3">
              <span className="text-xs font-bold uppercase tracking-widest text-primary">
                Free with every purchase
              </span>
            </div>
            <h3 className="font-display text-2xl sm:text-3xl font-bold mb-3">
              <span className="gradient-text">400 FREE AI Credits</span> on Gamma.app
            </h3>
            <p className="text-muted-foreground text-base sm:text-lg leading-relaxed mb-6">
              Every Canva Pro purchase includes a <strong className="text-foreground">VIP invite link</strong> for
              {" "}400 free AI credits on Gamma.app. Create stunning presentations, documents, and
              websites in seconds — powered by AI.
            </p>

            <div className="flex flex-wrap gap-3 justify-center md:justify-start">
              {[
                { icon: FileText, label: "AI Presentations" },
                { icon: Wand2, label: "AI Documents" },
                { icon: Globe, label: "AI Websites" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="glass flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium"
                >
                  <item.icon className="w-3.5 h-3.5 text-secondary" />
                  {item.label}
                </div>
              ))}
            </div>

            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex mt-7 gradient-bg text-primary-foreground font-display font-semibold px-7 py-3 rounded-xl items-center gap-2 hover:opacity-90 transition-opacity"
            >
              <Gift className="w-5 h-5" /> Claim Your Bonus
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

export default GammaBonus;
