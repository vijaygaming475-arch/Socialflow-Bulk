import { ShieldCheck, HardDriveUpload, CalendarDays, Rocket } from "lucide-react";

export default function HowItWorks() {
  const steps = [
    {
      step: "01",
      name: "Connect",
      icon: ShieldCheck,
      title: "Authorize Platform Access",
      description:
        "Authenticate your TikTok account, Facebook Pages, or YouTube channel directly through official platform OAuth 2.0 authorization windows. Your credentials remain safe and private.",
      detail: "Official OAuth 2.0 Scopes • No passwords entered into the app",
    },
    {
      step: "02",
      name: "Import",
      icon: HardDriveUpload,
      title: "Add Creator Videos",
      description:
        "Select single video files or entire folders from your local Windows PC. The desktop app validates format specifications, dimensions, and file readiness immediately.",
      detail: "MP4 / MOV support • Local-first storage on your hardware",
    },
    {
      step: "03",
      name: "Schedule",
      icon: CalendarDays,
      title: "Set Times & Metadata",
      description:
        "Define your distribution calendar, posting cadence, and custom titles, captions, hashtags, and privacy settings tailored for each target platform.",
      detail: "Interval distributor • Platform-specific hashtags & captions",
    },
    {
      step: "04",
      name: "Publish",
      icon: Rocket,
      title: "Automated API Delivery",
      description:
        "SocialFlow Bulk processes scheduled items via supported official platform APIs, monitoring progress and logging status updates directly to your local queue.",
      detail: "Official API endpoints • Real-time status logs & retry logic",
    },
  ];

  return (
    <section id="how-it-works" className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <h2 className="text-xs uppercase tracking-widest text-cyan-400 font-semibold">
            Operational Workflow
          </h2>
          <p className="text-3xl sm:text-5xl font-bold tracking-tight text-white">
            How It Works
          </p>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            From local desktop storage to multi-channel social distribution in four transparent, creator-controlled steps.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="relative glass-panel rounded-2xl p-7 flex flex-col justify-between hover:border-cyan-500/40 transition-all duration-300 group"
              >
                {/* Step indicator */}
                <div className="flex items-center justify-between pb-6">
                  <span className="font-mono text-3xl font-extrabold text-cyan-400/80 group-hover:text-cyan-300 transition-colors">
                    {item.step}
                  </span>
                  <div className="w-11 h-11 rounded-xl bg-cyan-950/50 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
                    <Icon className="w-5 h-5" />
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-3">
                  <div className="text-xs font-semibold uppercase tracking-wider text-cyan-400">
                    Step {item.name}
                  </div>
                  <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Bottom detail pill */}
                <div className="mt-6 pt-4 border-t border-white/[0.06] text-[11px] text-slate-400 font-medium">
                  {item.detail}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

