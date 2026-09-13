import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import Link from "next/link";
import { Mail, Clock, ShieldCheck, Trash2, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact & Support",
  description:
    "Get in touch with SocialFlow Bulk support for product inquiries, technical support, data deletion requests, or developer partnerships.",
};

export default function ContactPage() {
  return (
    <div className="py-16 lg:py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-cyan-300 text-xs font-semibold">
            <Mail className="w-3.5 h-3.5 text-cyan-400" />
            <span>Official Support Channel</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Contact Support & Developer Inquiries
          </h1>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Have questions regarding SocialFlow Bulk desktop, platform API integrations, or need to submit a data deletion request? We are here to assist.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Direct Info & Data Deletion */}
          <div className="lg:col-span-5 space-y-6">
            {/* Direct Support Card */}
            <div className="glass-panel rounded-3xl p-6 sm:p-8 space-y-6">
              <h2 className="text-xl font-bold text-white">Direct Support</h2>

              <div className="space-y-4">
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-cyan-950/60 border border-cyan-500/30 flex items-center justify-center text-cyan-400 shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <div className="text-xs text-slate-400 font-medium">Primary Email</div>
                    <a
                      href="mailto:socialflowbulk@gmail.com"
                      className="text-white hover:text-cyan-400 font-mono text-sm font-semibold transition-colors break-all"
                    >
                      socialflowbulk@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-cyan-950/60 border border-cyan-500/30 flex items-center justify-center text-cyan-400 shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <div className="text-xs text-slate-400 font-medium">Response Time</div>
                    <div className="text-sm font-medium text-slate-200">
                      Typically within 24–48 business hours
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-cyan-950/60 border border-cyan-500/30 flex items-center justify-center text-cyan-400 shrink-0">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <div className="text-xs text-slate-400 font-medium">Application Verification</div>
                    <div className="text-sm font-medium text-slate-200">
                      Official contact for TikTok, Meta & Google Developer reviews
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Data Deletion Guidance Box */}
            <div className="glass-panel rounded-3xl p-6 sm:p-8 space-y-4 border-l-4 border-l-cyan-400">
              <div className="flex items-center gap-2 text-cyan-400 font-bold text-base">
                <Trash2 className="w-4 h-4" />
                <span>Data Deletion Instructions</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                If you wish to delete all service data associated with SocialFlow Bulk, you can:
              </p>
              <ul className="text-xs text-slate-400 space-y-2 list-disc list-inside">
                <li>Revoke access through your TikTok or Google Account Security settings.</li>
                <li>Submit a deletion request to <strong className="text-slate-300">socialflowbulk@gmail.com</strong> with subject &quot;Data Deletion Request&quot;.</li>
                <li>Clear local app storage from your Windows computer.</li>
              </ul>
              <div className="pt-2">
                <Link
                  href="/privacy#data-deletion"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-400 hover:text-cyan-300"
                >
                  Read full Data Deletion section in Privacy Policy
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}

