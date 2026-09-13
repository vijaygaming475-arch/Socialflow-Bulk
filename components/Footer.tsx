import Link from "next/link";
import Image from "next/image";
import { ShieldCheck, HardDrive, Lock } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.08] bg-[#05070C] text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 lg:gap-12 pb-12 border-b border-white/[0.06]">
          {/* Brand Info */}
          <div className="md:col-span-2 space-y-4">
            <Link href="/" className="inline-flex items-center gap-3 group">
              <Image
                src="/logo-mark.svg"
                alt="SocialFlow Bulk"
                width={36}
                height={36}
                className="w-9 h-9"
              />
              <span className="text-xl font-bold tracking-tight text-white group-hover:text-cyan-400 transition-colors">
                SocialFlow <span className="text-cyan-400">Bulk</span>
              </span>
            </Link>
            <p className="text-sm leading-relaxed text-slate-400 max-w-md">
              A Windows desktop application engineered for content creators to import, organize,
              schedule, and publish creator-owned videos to TikTok, Facebook Pages, and YouTube
              using supported official platform APIs.
            </p>
            <div className="flex flex-wrap items-center gap-4 pt-2 text-xs text-slate-400">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/[0.03] border border-white/[0.06]">
                <HardDrive className="w-3.5 h-3.5 text-cyan-400" />
                Local-First Processing
              </span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/[0.03] border border-white/[0.06]">
                <Lock className="w-3.5 h-3.5 text-cyan-400" />
                OAuth Authentication
              </span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/[0.03] border border-white/[0.06]">
                <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
                No Passwords Collected
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-200">
              Navigation
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link
                  href="/"
                  className="hover:text-cyan-400 transition-colors duration-150"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/#features"
                  className="hover:text-cyan-400 transition-colors duration-150"
                >
                  Features
                </Link>
              </li>
              <li>
                <Link
                  href="/#platforms"
                  className="hover:text-cyan-400 transition-colors duration-150"
                >
                  Platforms
                </Link>
              </li>
              <li>
                <Link
                  href="/#how-it-works"
                  className="hover:text-cyan-400 transition-colors duration-150"
                >
                  How It Works
                </Link>
              </li>
              <li>
                <Link
                  href="/#security"
                  className="hover:text-cyan-400 transition-colors duration-150"
                >
                  Security
                </Link>
              </li>
              <li>
                <Link
                  href="/#faq"
                  className="hover:text-cyan-400 transition-colors duration-150"
                >
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal & Support */}
          <div className="space-y-3">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-200">
              Trust & Legal
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link
                  href="/privacy"
                  className="hover:text-cyan-400 transition-colors duration-150"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="hover:text-cyan-400 transition-colors duration-150"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy#data-deletion"
                  className="hover:text-cyan-400 transition-colors duration-150"
                >
                  Data Deletion Requests
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-cyan-400 transition-colors duration-150"
                >
                  Contact Support
                </Link>
              </li>
              <li className="pt-2">
                <span className="text-xs text-slate-500 block">Support Inquiries:</span>
                <a
                  href="mailto:socialflowbulk@gmail.com"
                  className="text-cyan-400 hover:text-cyan-300 font-mono text-xs break-all"
                >
                  socialflowbulk@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Disclaimer and Copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-slate-500">
          <p className="leading-relaxed max-w-2xl text-center md:text-left">
            <strong className="text-slate-400">Disclaimer: </strong>
            SocialFlow Bulk is an independent desktop application and is not affiliated with, sponsored by, or officially endorsed by TikTok, Meta, Facebook, Google, or YouTube. TikTok, Facebook, and YouTube are trademarks of their respective owners. Official platform APIs and authorized scopes are used in compliance with each platform&apos;s developer terms and user authorization.
          </p>
          <p className="shrink-0 text-center md:text-right text-slate-400 font-medium">
            &copy; 2026 SocialFlow Bulk. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

