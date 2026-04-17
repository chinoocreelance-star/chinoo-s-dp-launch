import { motion } from "framer-motion";
import { Sparkles, Gift, Wand2, FileText, Globe, Crown } from "lucide-react";

const WHATSAPP_LINK = "https://wa.me/923298646906?text=Hi%20Chinoo's%20DP!%20I%20want%20Canva%20Pro%20%2B%20Gamma%20AI%20bonus.";

const GammaBonus = () => (
  <section id="bonus" className="py-24 px-4 relative overflow-hidden">
    <div className="absolute top-1/3 left-1/4 w-96 h-96 rounded-full bg-[hsl(var(--gold)/0.12)] blur-[140px] -z-10" />

    <div className="max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 mb-6">
          <Crown className="w-4 h-4" style={{ color: "hsl(var(--gold))" }} />
          <span className="text-xs font-semibold uppercase tracking-widest gradient-gold-text">
            VIP Gold Member Bonus
          </span>
        </div>
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
          The Chinoo's <span className="gradient-text">Advantage</span>
        </h2>
        <p className="text-muted-foreground max-w-xl mx-auto">
          A premium gift, included free with every Canva Pro purchase.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative rounded-3xl p-[1.5px] glow-gold"
        style={{ background: "var(--gradient-gold)" }}
      >
        {/* VIP Card body */}
        <div className="relative rounded-3xl bg-card/80 backdrop-blur-2xl p-8 sm:p-12 overflow-hidden">
          {/* Decorative glows */}
          <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-[hsl(var(--gold)/0.25)] blur-[100px]" />
          <div className="absolute -bottom-24 -left-24 w-72 h-72 rounded-full bg-primary/20 blur-[100px]" />

          {/* Top ribbon */}
          <div className="absolute top-5 right-5 flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest"
               style={{ background: "var(--gradient-gold)", color: "hsl(var(--gold-foreground))" }}>
            <Crown className="w-3 h-3" /> Gold Member
          </div>

          <div className="relative grid md:grid-cols-[auto,1fr] gap-8 items-center">
            {/* Glowing Gamma logo */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
              className="relative mx-auto md:mx-0"
            >
              <div className="absolute inset-0 rounded-3xl blur-3xl opacity-70"
                   style={{ background: "var(--gradient-gold)" }} />
              <div className="relative w-28 h-28 rounded-3xl flex items-center justify-center shadow-2xl"
                   style={{ background: "var(--gradient-gold)" }}>
                <Wand2 className="w-14 h-14" style={{ color: "hsl(var(--gold-foreground))" }} strokeWidth={1.8} />
                <Sparkles className="absolute top-3 right-3 w-4 h-4 animate-pulse" style={{ color: "hsl(var(--gold-foreground))" }} />
                <Sparkles className="absolute bottom-4 left-4 w-3 h-3 animate-pulse" style={{ color: "hsl(var(--gold-foreground))" }} />
              </div>
            </motion.div>

            <div className="text-center md:text-left">
              <div className="flex items-center gap-2 justify-center md:justify-start mb-3">
                <span className="text-xs font-bold uppercase tracking-widest gradient-gold-text">
                  Free with every purchase
                </span>
              </div>
              <h3 className="font-display text-2xl sm:text-3xl font-bold mb-3">
                <span className="gradient-gold-text">400 FREE AI Credits</span> on Gamma.app
              </h3>
              <p className="text-muted-foreground text-base sm:text-lg leading-relaxed mb-6">
                Every Canva Pro purchase includes a <strong className="text-foreground">VIP invite link</strong> for
                {" "}400 free AI credits on Gamma.app. Create stunning presentations, documents and
                websites in seconds — powered by AI.
              </p>

              <div className="flex flex-wrap gap-2.5 justify-center md:justify-start">
                {[
                  { icon: FileText, label: "AI Presentations" },
                  { icon: Wand2, label: "AI Documents" },
                  { icon: Globe, label: "AI Websites" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="glass flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium border border-[hsl(var(--gold)/0.3)]"
                  >
                    <item.icon className="w-3.5 h-3.5" style={{ color: "hsl(var(--gold))" }} />
                    {item.label}
                  </div>
                ))}
              </div>

              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex mt-7 font-display font-semibold px-7 py-3 rounded-xl items-center gap-2 hover:opacity-90 transition-opacity glow-gold"
                style={{ background: "var(--gradient-gold)", color: "hsl(var(--gold-foreground))" }}
              >
                <Gift className="w-5 h-5" /> Claim Your Bonus
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

export default GammaBonus;
