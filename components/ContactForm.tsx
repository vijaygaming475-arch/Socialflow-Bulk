"use client";

import { useState } from "react";
import { Mail, Send, Check, Copy, AlertCircle, MessageSquare } from "lucide-react";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("Support Inquiry - SocialFlow Bulk");
  const [message, setMessage] = useState("");
  const [copied, setCopied] = useState(false);

  const supportEmail = "socialflowbulk@gmail.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(supportEmail);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Construct clear mailto link with encoded parameters
    const bodyContent = `Name: ${name}\nUser Email: ${email}\n\nMessage:\n${message}`;
    const mailtoUrl = `mailto:${supportEmail}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(bodyContent)}`;

    // Open default mail client directly
    window.location.href = mailtoUrl;
  };

  return (
    <div className="glass-panel rounded-3xl p-6 sm:p-10 border border-white/[0.08] shadow-xl">
      <div className="space-y-6">
        <div>
          <h3 className="text-xl sm:text-2xl font-bold text-white">
            Send an Inquiry or Data Request
          </h3>
          <p className="text-sm text-slate-300 mt-1.5 leading-relaxed">
            Fill in the details below to launch your email client, or copy our direct support email.
          </p>
        </div>

        {/* Support Email Card */}
        <div className="p-4 rounded-xl bg-slate-900/70 border border-cyan-500/20 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-cyan-950/60 border border-cyan-500/30 flex items-center justify-center text-cyan-400 shrink-0">
              <Mail className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs text-slate-400 font-medium">Official Support Email</div>
              <div className="text-sm sm:text-base font-mono font-semibold text-white">
                {supportEmail}
              </div>
            </div>
          </div>
          <button
            type="button"
            onClick={handleCopyEmail}
            className="inline-flex items-center justify-center gap-2 px-3.5 py-2 text-xs font-semibold rounded-lg bg-white/[0.06] hover:bg-white/[0.1] text-slate-200 border border-white/[0.08] transition-colors"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-400" />
                <span>Copied!</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5 text-cyan-400" />
                <span>Copy Email</span>
              </>
            )}
          </button>
        </div>

        {/* Client-side Mailto Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label htmlFor="name" className="block text-xs font-medium text-slate-300">
                Your Name <span className="text-cyan-400">*</span>
              </label>
              <input
                type="text"
                id="name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Alex Morgan"
                className="w-full px-4 py-2.5 rounded-xl bg-slate-900/60 border border-white/[0.1] text-white placeholder-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all"
              />
            </div>

            <div className="space-y-1.5">
              <label htmlFor="email" className="block text-xs font-medium text-slate-300">
                Your Email Address <span className="text-cyan-400">*</span>
              </label>
              <input
                type="email"
                id="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="alex@creator.com"
                className="w-full px-4 py-2.5 rounded-xl bg-slate-900/60 border border-white/[0.1] text-white placeholder-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all"
              />
            </div>
          </div>

          <div className="space-y-1.5">
            <label htmlFor="subject" className="block text-xs font-medium text-slate-300">
              Subject <span className="text-cyan-400">*</span>
            </label>
            <select
              id="subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              className="w-full px-4 py-2.5 rounded-xl bg-slate-900/90 border border-white/[0.1] text-white text-sm focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all"
            >
              <option value="General Support - SocialFlow Bulk">General Support & Feedback</option>
              <option value="Data Deletion Request - SocialFlow Bulk">
                Data Deletion Request (Right to be Forgotten)
              </option>
              <option value="TikTok Developer Review Inquiry">TikTok Developer Review Inquiry</option>
              <option value="Bug Report / Windows Technical Issue">Bug Report / Technical Issue</option>
              <option value="Feature Suggestion">Feature Suggestion</option>
            </select>
          </div>

          <div className="space-y-1.5">
            <label htmlFor="message" className="block text-xs font-medium text-slate-300">
              Message <span className="text-cyan-400">*</span>
            </label>
            <textarea
              id="message"
              required
              rows={5}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Describe your question, issue, or deletion request in detail..."
              className="w-full px-4 py-2.5 rounded-xl bg-slate-900/60 border border-white/[0.1] text-white placeholder-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all resize-none"
            />
          </div>

          {/* Safe client-side explanation */}
          <div className="p-3.5 rounded-xl bg-slate-900/40 border border-white/[0.04] text-xs text-slate-400 flex items-start gap-2.5">
            <AlertCircle className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
            <p>
              Submitting this form prepares and launches a direct email from your device&apos;s default mail application to <strong className="text-slate-200">socialflowbulk@gmail.com</strong>.
            </p>
          </div>

          <button
            type="submit"
            className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-slate-950 bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 hover:from-cyan-300 hover:to-blue-400 rounded-xl transition-all duration-200 shadow-lg shadow-cyan-500/20"
          >
            <Send className="w-4 h-4" />
            <span>Open in Email Client to Send</span>
          </button>
        </form>
      </div>
    </div>
  );
}

