import {
  FolderUp,
  CalendarClock,
  Share2,
  Users2,
  ListOrdered,
  FileText,
  RotateCcw,
  HardDrive,
  Key,
  ScrollText,
} from "lucide-react";

export default function Features() {
  const features = [
    {
      icon: FolderUp,
      title: "1. Bulk Video Import",
      description:
        "Import multiple creator-owned video files simultaneously from your Windows PC. Drag-and-drop support makes queuing dozens or hundreds of clips fast and efficient.",
      tag: "Workflow",
    },
    {
      icon: CalendarClock,
      title: "2. Smart Scheduling",
      description:
        "Automatically distribute videos across selected future dates, custom hourly intervals, and preferred posting time slots with intelligent cadence calculation.",
      tag: "Automation",
    },
    {
      icon: Share2,
      title: "3. Multi-Platform Publishing",
      description:
        "Coordinate your video publishing pipeline across TikTok, Facebook Pages, and YouTube using supported official platform APIs from a single central desktop tool.",
      tag: "Multi-Channel",
    },
    {
      icon: Users2,
      title: "4. Multiple Accounts",
      description:
        "Architecture designed to manage multiple authorized creator channels and brand pages, switching contexts without signing in and out repeatedly.",
      tag: "Management",
    },
    {
      icon: ListOrdered,
      title: "5. Content Queue",
      description:
        "Real-time transparent visibility into content states: Draft, Scheduled, Uploading, Published, and Failed. Keep full control over every asset in transit.",
      tag: "Organization",
    },
    {
      icon: FileText,
      title: "6. Platform-Specific Metadata",
      description:
        "Configure custom titles, descriptions, hashtags, tags, and category settings customized separately for TikTok's caption constraints, Facebook Pages, and YouTube.",
      tag: "Customization",
    },
    {
      icon: RotateCcw,
      title: "7. Automatic Retry",
      description:
        "Intelligently retry temporary upload or network timeouts using exponential backoff without risking duplicate posts on completed videos.",
      tag: "Reliability",
    },
    {
      icon: HardDrive,
      title: "8. Local-First Processing",
      description:
        "Your raw video files remain securely on your computer. Files are read locally and sent directly to target platform API endpoints only when scheduled for upload.",
      tag: "Privacy",
    },
    {
      icon: Key,
      title: "9. OAuth Security",
      description:
        "Connect social accounts using official platform OAuth 2.0 authorization dialogs. SocialFlow Bulk never sees, requests, or stores your social account passwords.",
      tag: "Security",
    },
    {
      icon: ScrollText,
      title: "10. Activity Logs",
      description:
        "Comprehensive local publishing logs provide transparent HTTP response statuses, upload progress, timestamp audits, and actionable error messages.",
      tag: "Observability",
    },
  ];

  return (
    <section id="features" className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <h2 className="text-xs uppercase tracking-widest text-cyan-400 font-semibold">
            Product Features
          </h2>
          <p className="text-3xl sm:text-5xl font-bold tracking-tight text-white">
            Engineered for High-Volume Creators
          </p>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Eliminate repetitive manual uploads with a specialized desktop utility built for creators producing daily and high-volume short and long-form video content.
          </p>
        </div>

        {/* Features Grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="glass-panel rounded-2xl p-6 lg:p-7 hover:border-cyan-500/30 transition-all duration-300 hover:shadow-card-hover group flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-xl bg-cyan-950/40 border border-cyan-500/20 flex items-center justify-center text-cyan-400 group-hover:scale-110 group-hover:border-cyan-500/40 transition-all">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-mono uppercase tracking-wider px-2 py-0.5 rounded bg-white/[0.04] text-slate-400 border border-white/[0.06]">
                      {item.tag}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white group-hover:text-cyan-400 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-sm text-slate-300 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/[0.04] flex items-center text-xs text-slate-400">
                  <span>Desktop Feature</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

