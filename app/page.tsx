import Hero from "@/components/Hero";
import Platforms from "@/components/Platforms";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import SecuritySection from "@/components/SecuritySection";
import TikTokTransparency from "@/components/TikTokTransparency";
import FaqSection from "@/components/FaqSection";
import Link from "next/link";
import { ArrowUpRight, Sparkles, CheckCircle2 } from "lucide-react";

export default function HomePage() {
  return (
    <div className="relative">
      {/* 1. Hero Section with Mockup */}
      <Hero />

      {/* 2. Supported Platforms */}
      <Platforms />

      {/* 3. Features Grid */}
      <Features />

      {/* 4. Operational Workflow */}
      <HowItWorks />

      {/* 5. Security & Privacy Architecture */}
      <SecuritySection />

      {/* 6. TikTok Developer API Transparency */}
      <TikTokTransparency />

      {/* 7. Frequently Asked Questions */}
      <FaqSection />

      {/* 8. Call To Action Banner */}
      <section className="py-20 lg:py-24 relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-3xl p-8 sm:p-12 lg:p-16 bg-gradient-to-b from-slate-900 via-[#0C1527] to-[#080D1A] border border-cyan-500/30 text-center space-y-6 shadow-2xl shadow-cyan-950/40">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 text-xs font-semibold">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
              <span>Ready for Modern Creator Workflows</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              Streamline Your Video Distribution Today
            </h2>

            <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
              Experience local-first scheduling for your creator-owned content. Official OAuth authorization, zero password collection, and multi-channel reach.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/#dashboard-preview"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 text-base font-semibold text-slate-950 bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 hover:from-cyan-300 hover:to-blue-400 rounded-xl transition-all shadow-lg shadow-cyan-500/20"
              >
                View Product Preview
                <ArrowUpRight className="w-4 h-4" />
              </Link>
              <Link
                href="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 text-base font-medium text-slate-200 bg-white/[0.05] hover:bg-white/[0.08] border border-white/[0.1] rounded-xl transition-colors"
              >
                Contact Support
              </Link>
            </div>

            <div className="pt-6 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400 border-t border-white/[0.06]">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                Windows 10 / 11 Compatible
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                Official Developer API Architecture
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                Creator Content Ownership
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

