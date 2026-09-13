import { FileText, ShieldAlert, CheckCircle, ExternalLink } from "lucide-react";

export default function TikTokTransparency() {
  return (
    <section className="py-16 lg:py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-panel-glow rounded-3xl p-8 sm:p-10 lg:p-12 border border-cyan-500/30">
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="flex items-center gap-2.5 text-cyan-400 text-xs font-semibold uppercase tracking-wider">
              <FileText className="w-4 h-4" />
              <span>TikTok Developer Platform Transparency</span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight">
              TikTok API Integration & Developer Standards
            </h2>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              SocialFlow Bulk is designed to interface with TikTok&apos;s official developer APIs (such as Login Kit and Content Posting API) for user-authorized video publishing workflows.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-slate-900/80 border border-white/[0.06] space-y-2">
                <div className="text-xs font-semibold text-cyan-300 uppercase tracking-wide">
                  Publishing Availability Depends On:
                </div>
                <ul className="text-xs text-slate-300 space-y-1.5 list-disc list-inside">
                  <li>Active TikTok Developer API availability and uptime</li>
                  <li>Explicit creator OAuth consent and authorization</li>
                  <li>Specifically granted platform scopes (e.g., video.upload)</li>
                  <li>Formal TikTok developer app review & platform approval</li>
                  <li>Ongoing compliance with TikTok Developer Terms of Service</li>
                </ul>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/80 border border-white/[0.06] space-y-2">
                <div className="text-xs font-semibold text-emerald-300 uppercase tracking-wide">
                  Our Engineering Commitments:
                </div>
                <ul className="text-xs text-slate-300 space-y-1.5 list-disc list-inside">
                  <li>Strict adherence to official TikTok API protocols</li>
                  <li>Zero scraping, browser automation, or simulated clicks</li>
                  <li>No collection or harvesting of session cookies</li>
                  <li>Zero storage of user TikTok account passwords</li>
                  <li>Direct creator control over each video scheduled</li>
                </ul>
              </div>
            </div>

            <div className="pt-2 text-xs text-slate-400 leading-relaxed border-t border-white/[0.06]">
              <span className="font-semibold text-slate-300">Notice for Reviewers & Users: </span>
              SocialFlow Bulk does not state or imply that public direct posting permissions are unconditionally approved prior to completion of the official TikTok Developer application review process. Feature availability is dynamically adjusted according to granted platform permissions.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

