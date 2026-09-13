"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown, HelpCircle } from "lucide-react";

interface FaqItem {
  question: string;
  answer: React.ReactNode;
}

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs: FaqItem[] = [
    {
      question: "What is SocialFlow Bulk?",
      answer: (
        <p>
          SocialFlow Bulk is a Windows desktop application engineered for video content creators. It streamlines the process of importing multiple video files from your computer, organizing post queues, configuring platform-specific metadata, scheduling distribution times, and publishing to supported social platforms via official developer APIs.
        </p>
      ),
    },
    {
      question: "Which platforms are supported?",
      answer: (
        <p>
          SocialFlow Bulk is built to support TikTok, Facebook Pages, and YouTube. All platform integrations rely on official platform developer APIs and OAuth authorization where access and granted permissions are available.
        </p>
      ),
    },
    {
      question: "Does SocialFlow Bulk need my social media passwords?",
      answer: (
        <p>
          <strong>No, absolutely not.</strong> Supported account connections operate exclusively via official OAuth 2.0 authentication. You log in securely on the platform&apos;s official authorization page (e.g., TikTok, Meta, Google), and SocialFlow Bulk receives an authorized token. SocialFlow Bulk never prompts for, accesses, or stores your social account passwords.
        </p>
      ),
    },
    {
      question: "Where are my videos stored?",
      answer: (
        <p>
          Your video files are stored locally on your own computer. SocialFlow Bulk is a local-first desktop application. Videos are read from your local storage and transmitted directly to the platform&apos;s official upload endpoints only when a scheduled publishing event occurs.
        </p>
      ),
    },
    {
      question: "Can SocialFlow Bulk publish automatically?",
      answer: (
        <p>
          Publishing capabilities depend on the specific permissions and official APIs available for each connected platform. When a platform provides official automated publishing endpoints (such as TikTok Content Posting API, Meta Graph API for Facebook Pages, or YouTube Data API) and our developer application has received appropriate approval and user authorization scopes, SocialFlow Bulk can process scheduled uploads automatically.
        </p>
      ),
    },
    {
      question: "Does SocialFlow Bulk own my uploaded content?",
      answer: (
        <p>
          <strong>No.</strong> You retain 100% ownership and intellectual property rights over all of your video content, audio, images, captions, and creative materials. SocialFlow Bulk is simply a desktop workflow tool to assist you with scheduling and organizing your own media.
        </p>
      ),
    },
    {
      question: "Can I disconnect my account?",
      answer: (
        <p>
          Yes, at any time. You can disconnect accounts directly inside the desktop application settings. Additionally, you can revoke access independently at any time through your account security or authorized apps settings on TikTok, Google Account Security, or Facebook Business Integrations.
        </p>
      ),
    },
    {
      question: "Is SocialFlow Bulk affiliated with TikTok, Meta or Google?",
      answer: (
        <p>
          No. SocialFlow Bulk is an independent application. It is not affiliated with, endorsed by, sponsored by, or partner-certified by TikTok, ByteDance, Meta Platforms, Facebook, Google, or YouTube. All trademarks belong to their respective owners.
        </p>
      ),
    },
    {
      question: "How can I request data deletion?",
      answer: (
        <div>
          <p className="mb-2">
            You have full control over your data:
          </p>
          <ol className="list-decimal list-inside space-y-1 text-slate-300">
            <li>You can revoke SocialFlow Bulk&apos;s authorization directly from your TikTok, Google, or Meta security settings.</li>
            <li>You can clear local application cache and configuration files directly from your Windows computer.</li>
            <li>You can send a formal data deletion request to our support email at{" "}
              <a href="mailto:socialflowbulk@gmail.com" className="text-cyan-400 hover:underline font-mono">
                socialflowbulk@gmail.com
              </a>{" "}
              or via our{" "}
              <Link href="/contact" className="text-cyan-400 hover:underline">
                Contact page
              </Link>
              .
            </li>
          </ol>
        </div>
      ),
    },
  ];

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 lg:py-28 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-cyan-300 text-xs font-semibold">
            <HelpCircle className="w-3.5 h-3.5 text-cyan-400" />
            <span>Got Questions?</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white">
            Frequently Asked Questions
          </h2>
          <p className="text-base sm:text-lg text-slate-300">
            Clear, honest answers about our desktop application, API usage, and security policies.
          </p>
        </div>

        {/* Accordions */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="glass-panel rounded-xl overflow-hidden border border-white/[0.08] transition-colors"
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(index)}
                  className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg font-semibold text-white">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-cyan-400 shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-sm text-slate-300 leading-relaxed border-t border-white/[0.04] animate-in fade-in duration-200">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

