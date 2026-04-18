export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  date: string;
  author: string;
  cover: string; // gradient class
  content: { heading?: string; body: string }[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "canva-pro-benefits",
    title: "10 Reasons Why Canva Pro is a Game-Changer for Designers in Pakistan",
    excerpt:
      "From premium templates and Magic Studio AI to a 1TB cloud library — here's why Canva Pro is the single best upgrade you can make to your creative workflow.",
    category: "Canva Pro",
    readTime: "6 min read",
    date: "Apr 18, 2026",
    author: "Chinoo's DP Team",
    cover: "from-primary via-accent to-primary-glow",
    content: [
      {
        body: "Canva has quietly become the design language of modern Pakistan — used by freelancers in Lahore, agencies in Karachi, and content creators in Islamabad. But the free version barely scratches the surface. Upgrading to Canva Pro (Business) unlocks a creative toolkit that genuinely changes how you work. Here's what you actually get.",
      },
      {
        heading: "1. 100M+ Premium Templates & Assets",
        body: "The Pro library opens up over 100 million premium photos, videos, audio tracks, graphics, and templates. No more dodging the little crown icon — every asset is yours to use commercially, instantly.",
      },
      {
        heading: "2. Magic Studio — Canva's full AI suite",
        body: "Magic Write, Magic Edit, Magic Eraser, Magic Switch, and Magic Resize are Pro-only. Generate copy, remove backgrounds in one click, swap formats, and reshape entire designs without restarting from scratch.",
      },
      {
        heading: "3. One-click Background Remover",
        body: "Cut out a person, product, or logo with a single click. Clean edges, transparent PNG, ready for thumbnails, ads, or product mockups.",
      },
      {
        heading: "4. Brand Kit — your identity, locked in",
        body: "Save unlimited brand colours, fonts, logos, and voice guidelines. Apply your full brand to any design in seconds — perfect for agencies juggling multiple clients.",
      },
      {
        heading: "5. Resize designs instantly",
        body: "Built one Instagram post? Resize it into a Story, Reel cover, Facebook ad, YouTube thumbnail, and A4 flyer in a single click. This alone saves hours every week.",
      },
      {
        heading: "6. 1TB of cloud storage",
        body: "Stop juggling Drive folders. Pro gives you 1TB to store every project, asset, and version in one place — accessible from any device.",
      },
      {
        heading: "7. Schedule content directly to social",
        body: "Plan and publish posts to Instagram, Facebook, LinkedIn, TikTok, and Pinterest from inside Canva. Built-in content planner means no more tab-juggling.",
      },
      {
        heading: "8. Premium fonts & font uploads",
        body: "Access thousands of premium typefaces or upload your own brand fonts. Your typography finally matches your standards.",
      },
      {
        heading: "9. Transparent backgrounds & high-res exports",
        body: "Export PNGs with transparency, PDFs for print, and SVGs for the web — all in the highest quality, with no watermarks, ever.",
      },
      {
        heading: "10. Real value for Pakistani creators",
        body: "Buying Canva Pro directly costs around 4,000–5,000 PKR per month. With Chinoo's DP, you get a verified Canva Business seat — every Pro feature, real account, no tricks — for a fraction of the price. That's the difference between a tool you occasionally open and a tool you build a business on.",
      },
      {
        heading: "Ready to upgrade?",
        body: "If you're a designer, content creator, small business, or agency in Pakistan, Canva Pro pays for itself in the first week. Message us on WhatsApp at +92 329 8646906 and we'll activate your verified Business seat the same day.",
      },
    ],
  },
];

export const getPostBySlug = (slug: string) =>
  blogPosts.find((p) => p.slug === slug);
