import { ShieldCheck, Check, KeyRound, ExternalLink, HelpCircle } from "lucide-react";

export default function Platforms() {
  const platforms = [
    {
      name: "TikTok",
      badge: "Official API Flow",
      badgeColor: "text-cyan-300 bg-cyan-950/60 border-cyan-500/30",
      description:
        "Designed to integrate with TikTok's official developer Content Posting API and Login Kit. Content publishing functionality operates strictly under official user authorization, developer app review, and granted platform permissions.",
      capabilities: [
        "Official OAuth 2.0 user authorization",
        "Direct post publishing upon platform approval",
        "Creator caption & hashtag distribution",
        "Publishing status tracking via official webhooks/endpoints",
      ],
      disclaimer:
        "Publishing features depend on API availability, granted scopes, TikTok developer app approval, and platform policies. No browser automation or unauthorized cookies are used.",
    },
    {
      name: "Facebook Pages",
      badge: "Meta Graph API",
      badgeColor: "text-blue-300 bg-blue-950/60 border-blue-500/30",
      description:
        "Engineered to publish creator-owned video reels and posts to authorized Facebook Pages using official Meta Graph APIs. Perfect for page managers and cross-platform creators.",
      capabilities: [
        "Meta OAuth token management",
        "Page-level publishing permissions",
        "Video description, title & thumbnail assignment",
        "Separate publishing queue for page audiences",
      ],
      disclaimer:
        "SocialFlow Bulk is strictly designed for authorized Facebook Pages. It does NOT support personal Facebook profile automation or unofficial account access.",
    },
    {
      name: "YouTube",
      badge: "Google OAuth & Data API",
      badgeColor: "text-red-300 bg-red-950/60 border-red-500/30",
      description:
        "Utilizes Google OAuth 2.0 and the official YouTube Data API v3 for uploading and scheduling creator videos and Shorts directly to the user's authorized YouTube channel.",
      capabilities: [
        "Google OAuth verification & channel binding",
        "YouTube Shorts & standard video uploads",
        "Custom title, description, tags & privacy status",
        "Chunked resumable uploads for large video files",
      ],
      disclaimer:
        "Creators remain solely responsible for uploaded content adhering to YouTube Community Guidelines and Google API Terms of Service.",
    },
  ];

  return (
    <section id="platforms" className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <h2 className="text-xs uppercase tracking-widest text-cyan-400 font-semibold">
            Multi-Platform Ecosystem
          </h2>
          <p className="text-3xl sm:text-5xl font-bold tracking-tight text-white">
            Publish Across Your Creator Channels
          </p>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            All integrations communicate exclusively through official platform APIs and OAuth flows where access and permissions are granted.
          </p>
        </div>

        {/* Platform Cards Grid */}
        <div className="mt-14 grid grid-cols-1 lg:grid-cols-3 gap-8">
          {platforms.map((platform) => (
            <div
              key={platform.name}
              className="glass-panel rounded-2xl p-7 lg:p-8 flex flex-col justify-between hover:border-cyan-500/30 transition-all duration-300 hover:shadow-card-hover group"
            >
              <div className="space-y-6">
                {/* Platform Header */}
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <span className="text-xs text-slate-400 font-medium">Platform</span>
                    <h3 className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                      {platform.name}
                    </h3>
                  </div>
                  <span
                    className={`text-xs px-2.5 py-1 font-semibold rounded-full border ${platform.badgeColor}`}
                  >
                    {platform.badge}
                  </span>
                </div>

                {/* Description */}
                <p className="text-sm text-slate-300 leading-relaxed">
                  {platform.description}
                </p>

                {/* Capabilities List */}
                <div className="space-y-2.5 pt-2">
                  <div className="text-xs font-semibold text-slate-200 uppercase tracking-wider">
                    Key Functionality:
                  </div>
                  <ul className="space-y-2">
                    {platform.capabilities.map((cap, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-xs text-slate-300">
                        <Check className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                        <span>{cap}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Card Bottom Compliance Note */}
              <div className="mt-8 pt-5 border-t border-white/[0.06] text-xs text-slate-400 space-y-2">
                <div className="flex items-center gap-1.5 text-slate-400 font-medium">
                  <KeyRound className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Integration Transparency</span>
                </div>
                <p className="text-[11px] leading-relaxed text-slate-400">
                  {platform.disclaimer}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Official Disclaimer Box */}
        <div className="mt-12 p-4 sm:p-5 rounded-xl bg-slate-900/60 border border-white/[0.08] text-center max-w-4xl mx-auto">
          <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
            <span className="font-semibold text-slate-200">Legal Notice: </span>
            TikTok, Facebook and YouTube are trademarks of their respective owners. SocialFlow Bulk is an independent application and is not affiliated with, sponsored by, or officially endorsed by ByteDance/TikTok, Meta Platforms, or Google/Alphabet.
          </p>
        </div>
      </div>
    </section>
  );
}

