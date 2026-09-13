import Link from "next/link";
import {
  Shield,
  KeyRound,
  HardDrive,
  Trash2,
  Lock,
  FileCheck2,
  UserCheck,
  CheckCircle,
} from "lucide-react";

export default function SecuritySection() {
  const securityPillars = [
    {
      icon: KeyRound,
      title: "No Social Passwords Requested",
      description:
        "SocialFlow Bulk never asks for, receives, or stores your TikTok, Facebook, or Google account passwords. All logins occur through official platform OAuth consent dialogs.",
    },
    {
      icon: Lock,
      title: "Strict OAuth Token Scope",
      description:
        "Access tokens granted by platforms are used solely for the specific publishing and channel management actions you authorize in the app.",
    },
    {
      icon: HardDrive,
      title: "Local-First Architecture",
      description:
        "Video files, schedules, and application configurations are saved locally on your Windows PC. Videos are only uploaded to platforms you explicitly target.",
    },
    {
      icon: UserCheck,
      title: "Zero Selling of Personal Data",
      description:
        "We do not sell, rent, monetize, or broker creator data or user information. Your channels and your content belong solely to you.",
    },
    {
      icon: Trash2,
      title: "Instant Access Revocation",
      description:
        "You can revoke SocialFlow Bulk's API permissions at any moment directly from your TikTok, Google, or Facebook account security dashboards.",
    },
    {
      icon: FileCheck2,
      title: "Transparent Deletion Requests",
      description:
        "Users can easily purge all local application data or contact our support team at socialflowbulk@gmail.com to request deletion of any associated service records.",
    },
  ];

  return (
    <section id="security" className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/40 border border-blue-500/30 text-blue-300 text-xs font-semibold">
            <Shield className="w-3.5 h-3.5 text-cyan-400" />
            <span>Security & Privacy First</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white">
            Built With Account Security in Mind
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            We prioritize creator autonomy, official API protocols, and transparent data boundaries. We believe in defense-in-depth and honest security practices.
          </p>
        </div>

        {/* Pillars Grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {securityPillars.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="glass-panel rounded-2xl p-6 lg:p-7 hover:border-cyan-500/30 transition-all duration-300"
              >
                <div className="w-11 h-11 rounded-xl bg-cyan-950/50 border border-cyan-500/20 flex items-center justify-center text-cyan-400 mb-5">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2.5">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Realistic Security Commitment Notice */}
        <div className="mt-12 p-6 rounded-2xl bg-slate-900/60 border border-white/[0.08] max-w-4xl mx-auto space-y-3 text-center sm:text-left sm:flex sm:items-center sm:justify-between sm:space-y-0 gap-6">
          <div className="space-y-1">
            <div className="text-sm font-semibold text-white flex items-center justify-center sm:justify-start gap-2">
              <CheckCircle className="w-4 h-4 text-cyan-400" />
              <span>Full Privacy & Policy Documentation</span>
            </div>
            <p className="text-xs text-slate-400">
              Review our complete data practices, retention periods, and technical boundaries in our official documentation.
            </p>
          </div>
          <div className="flex items-center justify-center sm:justify-end gap-3 shrink-0">
            <Link
              href="/privacy"
              className="px-4 py-2 text-xs font-semibold text-cyan-300 bg-cyan-950/50 border border-cyan-500/30 hover:bg-cyan-900/40 rounded-lg transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/privacy#data-deletion"
              className="px-4 py-2 text-xs font-semibold text-slate-300 bg-white/[0.05] border border-white/[0.1] hover:bg-white/[0.1] rounded-lg transition-colors"
            >
              Data Deletion
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

