"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Calendar,
  Clock,
  CheckCircle2,
  AlertCircle,
  UploadCloud,
  FileVideo,
  ArrowRight,
  Shield,
  Layers,
  Sparkles,
  RefreshCw,
} from "lucide-react";

export default function Hero() {
  const [activeTab, setActiveTab] = useState<"all" | "scheduled" | "uploading" | "published" | "failed">("all");

  const mockVideos = [
    {
      id: "VID-0941",
      title: "How I Setup My Content Batch Workflow 2026",
      platforms: ["TikTok", "YouTube"],
      scheduledFor: "Today, 18:30",
      status: "Published",
      size: "42.8 MB",
    },
    {
      id: "VID-0942",
      title: "Top 5 Creative Editing Secrets for Short Form",
      platforms: ["TikTok", "Facebook"],
      scheduledFor: "Tomorrow, 09:00",
      status: "Scheduled",
      size: "68.2 MB",
    },
    {
      id: "VID-0943",
      title: "Episode 14 - Creator Studio Behind The Scenes",
      platforms: ["YouTube"],
      scheduledFor: "Tomorrow, 14:15",
      status: "Uploading",
      size: "112.5 MB",
    },
    {
      id: "VID-0944",
      title: "Weekly Motivation & Design Breakdowns",
      platforms: ["TikTok", "Facebook", "YouTube"],
      scheduledFor: "Pending Retry",
      status: "Failed",
      size: "35.1 MB",
    },
  ];

  const filteredVideos =
    activeTab === "all"
      ? mockVideos
      : mockVideos.filter((v) => v.status.toLowerCase() === activeTab);

  return (
    <section className="relative pt-12 pb-24 lg:pt-20 lg:pb-32 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[550px] bg-hero-glow pointer-events-none -z-10" />
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none -z-10 animate-pulse-subtle" />
      <div className="absolute top-1/4 right-1/4 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto space-y-6">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-cyan-300 text-xs font-semibold tracking-wide shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>Windows Desktop Application for Video Creators</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.1]">
            Bulk Video Scheduling.{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-500 bg-clip-text text-transparent">
              Simplified.
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto font-normal leading-relaxed">
            Organize, schedule and publish creator-owned videos to TikTok, Facebook Pages and YouTube from one streamlined desktop application.
          </p>

          {/* CTAs */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="#features"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 text-base font-semibold text-slate-950 bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 hover:from-cyan-300 hover:to-blue-400 rounded-xl transition-all duration-200 shadow-xl shadow-cyan-500/25 hover:shadow-cyan-500/35 hover:-translate-y-0.5"
            >
              Explore Features
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="#how-it-works"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 text-base font-medium text-slate-200 bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.1] rounded-xl transition-all duration-200 hover:text-white"
            >
              How It Works
            </Link>
          </div>

          {/* Trust points */}
          <div className="pt-6 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400">
            <span className="flex items-center gap-1.5">
              <Shield className="w-4 h-4 text-cyan-400" />
              Official Platform OAuth
            </span>
            <span className="flex items-center gap-1.5">
              <Layers className="w-4 h-4 text-cyan-400" />
              Local-First Windows Storage
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-cyan-400" />
              No Social Media Passwords Required
            </span>
          </div>
        </div>

        {/* Animated Desktop Mockup */}
        <div id="dashboard-preview" className="mt-14 lg:mt-20 max-w-5xl mx-auto">
          {/* Label banner */}
          <div className="flex items-center justify-between px-4 py-2 bg-slate-900/80 border-t border-x border-cyan-500/20 rounded-t-2xl text-xs text-slate-400 backdrop-blur-md">
            <div className="flex items-center gap-2">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
              </div>
              <span className="font-mono text-slate-300 ml-2">SocialFlow Bulk Desktop v1.4.2</span>
            </div>
            <span className="hidden sm:inline-flex items-center gap-1 text-cyan-400 font-medium text-[11px] bg-cyan-950/60 px-2 py-0.5 rounded border border-cyan-500/20">
              Product UI Preview • Local Simulation
            </span>
          </div>

          {/* Main Dashboard Window */}
          <div className="glass-panel-glow rounded-b-2xl border-t border-white/[0.08] p-5 sm:p-7 space-y-6">
            {/* Top Stat Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
              <div className="p-3.5 sm:p-4 rounded-xl bg-slate-900/70 border border-white/[0.06] flex items-center justify-between">
                <div>
                  <div className="text-xs text-slate-400 font-medium">Batch Queue</div>
                  <div className="text-2xl font-bold text-white tracking-tight mt-0.5">
                    250 <span className="text-xs font-normal text-cyan-400">Imported</span>
                  </div>
                </div>
                <div className="p-2.5 rounded-lg bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
                  <FileVideo className="w-5 h-5" />
                </div>
              </div>

              <div className="p-3.5 sm:p-4 rounded-xl bg-slate-900/70 border border-white/[0.06] flex items-center justify-between">
                <div>
                  <div className="text-xs text-slate-400 font-medium">Scheduled</div>
                  <div className="text-2xl font-bold text-sky-400 tracking-tight mt-0.5">186</div>
                </div>
                <div className="p-2.5 rounded-lg bg-sky-500/10 border border-sky-500/20 text-sky-400">
                  <Calendar className="w-5 h-5" />
                </div>
              </div>

              <div className="p-3.5 sm:p-4 rounded-xl bg-slate-900/70 border border-white/[0.06] flex items-center justify-between">
                <div>
                  <div className="text-xs text-slate-400 font-medium">Published</div>
                  <div className="text-2xl font-bold text-emerald-400 tracking-tight mt-0.5">58</div>
                </div>
                <div className="p-2.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
              </div>

              <div className="p-3.5 sm:p-4 rounded-xl bg-slate-900/70 border border-white/[0.06] flex items-center justify-between">
                <div>
                  <div className="text-xs text-slate-400 font-medium">Active / Failed</div>
                  <div className="text-2xl font-bold text-slate-200 tracking-tight mt-0.5">
                    1 / <span className="text-rose-400">5</span>
                  </div>
                </div>
                <div className="p-2.5 rounded-lg bg-rose-500/10 border border-rose-500/20 text-rose-400">
                  <AlertCircle className="w-5 h-5" />
                </div>
              </div>
            </div>

            {/* Platform Distribution Bar */}
            <div className="p-4 rounded-xl bg-slate-900/40 border border-white/[0.04] flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-2 text-xs text-slate-400">
                <span>Configured Targets:</span>
                <div className="flex items-center gap-1.5 font-medium">
                  <span className="px-2.5 py-1 rounded bg-white/[0.06] text-white border border-white/[0.08]">
                    TikTok (Authorized API)
                  </span>
                  <span className="px-2.5 py-1 rounded bg-blue-950/60 text-blue-300 border border-blue-500/30">
                    Facebook Pages
                  </span>
                  <span className="px-2.5 py-1 rounded bg-red-950/50 text-red-300 border border-red-500/30">
                    YouTube Channel
                  </span>
                </div>
              </div>
              <div className="text-xs text-slate-400 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Scheduler Engine Idle • Next trigger in 42m</span>
              </div>
            </div>

            {/* Queue Filters and Table */}
            <div className="space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/[0.06] pb-3">
                <div className="flex items-center gap-1 bg-slate-950/70 p-1 rounded-lg border border-white/[0.06]">
                  {(["all", "scheduled", "uploading", "published", "failed"] as const).map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={`px-3 py-1 text-xs font-medium rounded-md capitalize transition-colors ${
                        activeTab === tab
                          ? "bg-cyan-500/20 text-cyan-300 border border-cyan-500/40"
                          : "text-slate-400 hover:text-white"
                      }`}
                    >
                      {tab}
                    </button>
                  ))}
                </div>
                <div className="text-xs text-slate-400">
                  Showing sample queue items from 250 imported local files
                </div>
              </div>

              {/* Items List */}
              <div className="space-y-2.5">
                {filteredVideos.map((video) => (
                  <div
                    key={video.id}
                    className="p-3.5 rounded-xl bg-slate-900/60 border border-white/[0.06] hover:border-cyan-500/30 transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-3"
                  >
                    <div className="flex items-start sm:items-center gap-3">
                      <div className="p-2 rounded-lg bg-white/[0.04] text-cyan-400 shrink-0">
                        <FileVideo className="w-5 h-5" />
                      </div>
                      <div className="space-y-0.5">
                        <div className="text-sm font-medium text-white line-clamp-1">
                          {video.title}
                        </div>
                        <div className="flex flex-wrap items-center gap-2 text-xs text-slate-400 font-mono">
                          <span>{video.id}</span>
                          <span>•</span>
                          <span>{video.size}</span>
                          <span>•</span>
                          <div className="flex items-center gap-1">
                            {video.platforms.map((p) => (
                              <span
                                key={p}
                                className="px-1.5 py-0.5 rounded bg-white/[0.05] text-[10px] text-slate-300"
                              >
                                {p}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between sm:justify-end gap-4 shrink-0 pt-2 sm:pt-0 border-t sm:border-t-0 border-white/[0.04]">
                      <div className="flex items-center gap-1.5 text-xs text-slate-400">
                        <Clock className="w-3.5 h-3.5 text-slate-400" />
                        <span>{video.scheduledFor}</span>
                      </div>

                      <div>
                        {video.status === "Published" && (
                          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium bg-emerald-950/70 text-emerald-300 border border-emerald-500/30">
                            <CheckCircle2 className="w-3 h-3" />
                            Published
                          </span>
                        )}
                        {video.status === "Scheduled" && (
                          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium bg-sky-950/70 text-sky-300 border border-sky-500/30">
                            <Calendar className="w-3 h-3" />
                            Scheduled
                          </span>
                        )}
                        {video.status === "Uploading" && (
                          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium bg-amber-950/70 text-amber-300 border border-amber-500/30">
                            <UploadCloud className="w-3 h-3 animate-bounce" />
                            Uploading
                          </span>
                        )}
                        {video.status === "Failed" && (
                          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium bg-rose-950/70 text-rose-300 border border-rose-500/30">
                            <RefreshCw className="w-3 h-3" />
                            Failed (Retry)
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom info disclaimer */}
            <div className="pt-2 text-[11px] text-slate-400 text-center">
              * Video files remain stored securely on the creator&apos;s local computer. Publishing requests are executed via official platform APIs upon user schedule and authorization.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

