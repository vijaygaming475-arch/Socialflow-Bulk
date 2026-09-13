import Link from "next/link";
import { Home, ArrowLeft, Search } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4 py-20 relative">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-xl mx-auto text-center space-y-6 glass-panel-glow rounded-3xl p-8 sm:p-12 border border-cyan-500/30">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 font-mono text-xs font-semibold">
          Error 404 • Page Not Found
        </div>

        <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight">
          Lost in Space
        </h1>

        <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
          The page you are looking for might have been moved, removed, or is temporarily unavailable. Check the URL or head back to the homepage.
        </p>

        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-slate-950 bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 hover:from-cyan-300 hover:to-blue-400 rounded-xl transition-all shadow-lg shadow-cyan-500/20"
          >
            <Home className="w-4 h-4" />
            Back to Home
          </Link>
          <Link
            href="/contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-medium text-slate-200 bg-white/[0.05] hover:bg-white/[0.08] border border-white/[0.1] rounded-xl transition-colors"
          >
            Contact Support
          </Link>
        </div>

        <div className="pt-6 border-t border-white/[0.06] text-xs text-slate-400">
          Looking for our legal policies? Visit{" "}
          <Link href="/privacy" className="text-cyan-400 hover:underline">
            Privacy Policy
          </Link>{" "}
          or{" "}
          <Link href="/terms" className="text-cyan-400 hover:underline">
            Terms of Service
          </Link>
          .
        </div>
      </div>
    </div>
  );
}

