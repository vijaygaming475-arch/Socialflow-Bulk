import type { Metadata } from "next";
import Link from "next/link";
import { FileText, ShieldAlert, Scale, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Official Terms of Service for SocialFlow Bulk desktop application and website. Clear terms regarding content ownership, acceptable use, and platform API compliance.",
};

export default function TermsPage() {
  return (
    <div className="py-16 lg:py-24 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="space-y-4 pb-10 border-b border-white/[0.08]">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/50 border border-cyan-500/30 text-cyan-300 text-xs font-semibold">
            <Scale className="w-3.5 h-3.5 text-cyan-400" />
            <span>Legal Agreement</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Terms of Service
          </h1>
          <p className="text-sm font-medium text-cyan-400">
            Last Updated: September 2026
          </p>
          <p className="text-base text-slate-300 leading-relaxed">
            Please read these Terms of Service (&quot;Terms&quot;) carefully before using the SocialFlow Bulk desktop software application or accessing our website. By accessing or using our application, you agree to be bound by these Terms and all applicable laws and regulations.
          </p>
        </div>

        {/* Ownership Guarantee Box */}
        <div className="my-8 p-5 rounded-2xl bg-cyan-950/30 border border-cyan-500/30 space-y-2">
          <div className="flex items-center gap-2 text-cyan-300 font-bold text-sm">
            <CheckCircle2 className="w-4 h-4" />
            Creator Content Ownership Guarantee
          </div>
          <p className="text-xs sm:text-sm text-slate-200">
            You retain 100% intellectual property ownership of all videos, audio, images, captions, and creative media you import or schedule. SocialFlow Bulk claims no ownership or proprietary rights over your content.
          </p>
        </div>

        {/* Table of Contents */}
        <div className="my-8 p-6 rounded-2xl glass-panel border border-white/[0.06]">
          <h2 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3">
            Terms Sections
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-cyan-400">
            <a href="#term-1" className="hover:underline">1. Acceptance of Terms</a>
            <a href="#term-2" className="hover:underline">2. Description of Service</a>
            <a href="#term-3" className="hover:underline">3. Eligibility</a>
            <a href="#term-4" className="hover:underline">4. User Accounts</a>
            <a href="#term-5" className="hover:underline">5. Platform Authorization</a>
            <a href="#term-6" className="hover:underline">6. User Content</a>
            <a href="#term-7" className="hover:underline">7. Content Ownership</a>
            <a href="#term-8" className="hover:underline">8. Acceptable Use</a>
            <a href="#term-9" className="hover:underline text-rose-300 font-semibold">9. Prohibited Use</a>
            <a href="#term-10" className="hover:underline">10. Platform Rules</a>
            <a href="#term-11" className="hover:underline">11. API Availability</a>
            <a href="#term-12" className="hover:underline">12. Third-Party Services</a>
            <a href="#term-13" className="hover:underline">13. Intellectual Property</a>
            <a href="#term-14" className="hover:underline">14. Service Changes</a>
            <a href="#term-15" className="hover:underline">15. Termination</a>
            <a href="#term-16" className="hover:underline">16. Disclaimer</a>
            <a href="#term-17" className="hover:underline">17. Limitation of Liability</a>
            <a href="#term-18" className="hover:underline">18. Indemnification</a>
            <a href="#term-19" className="hover:underline">19. Changes to Terms</a>
            <a href="#term-20" className="hover:underline">20. Contact</a>
          </div>
        </div>

        {/* Terms Body */}
        <div className="space-y-12 text-slate-300 text-sm leading-relaxed">
          {/* 1 */}
          <section id="term-1" className="space-y-3">
            <h2 className="text-xl font-bold text-white">1. Acceptance of Terms</h2>
            <p>
              By downloading, installing, or using the SocialFlow Bulk application, you signify that you have read, understood, and agreed to be legally bound by these Terms of Service and our Privacy Policy. If you do not agree to all terms, do not install or use the software.
            </p>
          </section>

          {/* 2 */}
          <section id="term-2" className="space-y-3">
            <h2 className="text-xl font-bold text-white">2. Description of Service</h2>
            <p>
              SocialFlow Bulk is a Windows desktop productivity tool designed to help creators import, organize, schedule, and publish video content to supported social platforms (such as TikTok, Facebook Pages, and YouTube) via official platform APIs.
            </p>
          </section>

          {/* 3 */}
          <section id="term-3" className="space-y-3">
            <h2 className="text-xl font-bold text-white">3. Eligibility</h2>
            <p>
              You must be at least 13 years of age (or the minimum legal age required in your country to maintain accounts on connected social media services) to use SocialFlow Bulk. If you are using the software on behalf of a legal entity, you represent and warrant that you have authority to bind that entity.
            </p>
          </section>

          {/* 4 */}
          <section id="term-4" className="space-y-3">
            <h2 className="text-xl font-bold text-white">4. User Accounts</h2>
            <p>
              You are solely responsible for safeguarding the credentials and local security of the device where SocialFlow Bulk is installed. You agree to immediately notify support if you discover any unauthorized access to your system or tokens.
            </p>
          </section>

          {/* 5 */}
          <section id="term-5" className="space-y-3">
            <h2 className="text-xl font-bold text-white">5. Platform Authorization</h2>
            <p>
              To connect SocialFlow Bulk with supported platforms, you must grant permissions using official platform OAuth 2.0 authorization dialogs. You acknowledge that access tokens granted are used strictly to perform requested scheduling and publishing tasks on your authorized channels.
            </p>
          </section>

          {/* 6 */}
          <section id="term-6" className="space-y-3">
            <h2 className="text-xl font-bold text-white">6. User Content</h2>
            <p>
              You represent and warrant that you own or have obtained all necessary licenses, copyrights, permissions, and rights to all video files, audio tracks, and textual metadata you import, schedule, or publish using SocialFlow Bulk.
            </p>
          </section>

          {/* 7 */}
          <section id="term-7" className="space-y-3">
            <h2 className="text-xl font-bold text-white">7. Content Ownership</h2>
            <p>
              <strong>You retain complete ownership:</strong> SocialFlow Bulk does not acquire any ownership rights, copyright, or licensing title in your creative media. All rights to your content remain exclusively with you.
            </p>
          </section>

          {/* 8 */}
          <section id="term-8" className="space-y-3">
            <h2 className="text-xl font-bold text-white">8. Acceptable Use</h2>
            <p>
              You agree to use SocialFlow Bulk exclusively for legitimate creator workflow management and in strict compliance with applicable local, state, national, and international laws, as well as third-party platform terms.
            </p>
          </section>

          {/* 9 - PROHIBITED USE */}
          <section id="term-9" className="space-y-3 p-6 rounded-2xl bg-rose-950/20 border border-rose-500/30">
            <h2 className="text-xl font-bold text-rose-300">9. Prohibited Use</h2>
            <p className="text-slate-200">
              You expressly agree that you will NOT use SocialFlow Bulk to:
            </p>
            <ul className="list-disc list-inside space-y-1.5 pl-2 text-xs sm:text-sm text-slate-300">
              <li>Upload, schedule, or distribute spam, unsolicited bulk promotions, or fraudulent content;</li>
              <li>Publish illegal, infringing, defamatory, harassing, or sexually explicit material;</li>
              <li>Violate any third-party copyrights, trademark rights, or proprietary interests;</li>
              <li>Engage in deceptive automation, artificial engagement generation, or coordinated inauthentic behavior;</li>
              <li>Abuse, overwhelm, or attempt to circumvent rate limits of third-party platform APIs;</li>
              <li>Reverse engineer, decompile, or attempt to bypass security protections or licensing restrictions;</li>
              <li>Attempt unauthorized account access, credential harvesting, or token theft.</li>
            </ul>
          </section>

          {/* 10 */}
          <section id="term-10" className="space-y-3">
            <h2 className="text-xl font-bold text-white">10. Platform Rules</h2>
            <p>
              You must at all times comply with the terms and guidelines of the platforms you target, including:
            </p>
            <ul className="list-disc list-inside space-y-1 pl-2">
              <li>TikTok Community Guidelines and Developer Terms</li>
              <li>Meta Community Standards and Platform Terms</li>
              <li>YouTube Community Guidelines and Terms of Service</li>
            </ul>
          </section>

          {/* 11 */}
          <section id="term-11" className="space-y-3">
            <h2 className="text-xl font-bold text-white">11. API Availability</h2>
            <p>
              Publishing features depend entirely upon the uptime, rate limits, developer review approvals, and API specifications maintained by third-party platforms. SocialFlow Bulk cannot guarantee uninterrupted API availability or that third-party platforms will not alter their developer policies, scopes, or endpoints.
            </p>
          </section>

          {/* 12 */}
          <section id="term-12" className="space-y-3">
            <h2 className="text-xl font-bold text-white">12. Third-Party Services</h2>
            <p>
              SocialFlow Bulk interfaces with services managed by independent entities. We are not responsible for account suspensions, shadowbans, content takedowns, or enforcement actions taken by TikTok, Meta, or Google on your accounts.
            </p>
          </section>

          {/* 13 */}
          <section id="term-13" className="space-y-3">
            <h2 className="text-xl font-bold text-white">13. Intellectual Property</h2>
            <p>
              The SocialFlow Bulk name, branding, logo, desktop software binaries, UI designs, and website code are the intellectual property of SocialFlow Bulk. You may not copy, modify, distribute, or reverse engineer our software without explicit prior written consent.
            </p>
          </section>

          {/* 14 */}
          <section id="term-14" className="space-y-3">
            <h2 className="text-xl font-bold text-white">14. Service Changes</h2>
            <p>
              We reserve the right to modify, update, suspend, or discontinue any aspect of the software or website at any time to preserve security, maintain platform API compliance, or enhance functionality.
            </p>
          </section>

          {/* 15 */}
          <section id="term-15" className="space-y-3">
            <h2 className="text-xl font-bold text-white">15. Termination</h2>
            <p>
              We may terminate or suspend your access to SocialFlow Bulk immediately, without prior notice, if you breach any provision of these Terms or engage in activities that compromise our platform integrations or harm other users.
            </p>
          </section>

          {/* 16 */}
          <section id="term-16" className="space-y-3">
            <h2 className="text-xl font-bold text-white">16. Disclaimer</h2>
            <p>
              THE APPLICATION AND SERVICES ARE PROVIDED ON AN &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; BASIS WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
            </p>
          </section>

          {/* 17 */}
          <section id="term-17" className="space-y-3">
            <h2 className="text-xl font-bold text-white">17. Limitation of Liability</h2>
            <p>
              TO THE MAXIMUM EXTENT PERMITTED BY LAW, IN NO EVENT SHALL SOCIALFLOW BULK, ITS DEVELOPERS, OR AFFILIATES BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING LOSS OF PROFITS, DATA, OR USE, ARISING FROM OR RELATED TO YOUR USE OF THE APPLICATION.
            </p>
          </section>

          {/* 18 */}
          <section id="term-18" className="space-y-3">
            <h2 className="text-xl font-bold text-white">18. Indemnification</h2>
            <p>
              You agree to defend, indemnify, and hold harmless SocialFlow Bulk from and against any claims, liabilities, damages, losses, and expenses arising out of or in any way connected with your content or your violation of these Terms or third-party platform policies.
            </p>
          </section>

          {/* 19 */}
          <section id="term-19" className="space-y-3">
            <h2 className="text-xl font-bold text-white">19. Changes to Terms</h2>
            <p>
              We reserve the right to revise these Terms at any time. We will publish the updated Terms on this website and adjust the &quot;Last Updated&quot; date accordingly. Continued use of the application constitutes acceptance of the modified Terms.
            </p>
          </section>

          {/* 20 */}
          <section id="term-20" className="space-y-3 pb-8">
            <h2 className="text-xl font-bold text-white">20. Contact</h2>
            <p>
              For legal questions, licensing inquiries, or clarifications concerning these Terms of Service, please contact:
            </p>
            <div className="p-4 rounded-xl bg-slate-900/60 border border-white/[0.08] inline-block space-y-1">
              <div className="text-white font-semibold">SocialFlow Bulk Legal & Support</div>
              <div className="text-slate-400 text-xs">Email:{" "}
                <a href="mailto:socialflowbulk@gmail.com" className="text-cyan-400 hover:underline font-mono">
                  socialflowbulk@gmail.com
                </a>
              </div>
              <div className="text-slate-400 text-xs">
                Web:{" "}
                <Link href="/contact" className="text-cyan-400 hover:underline">
                  https://socialflow-bulk.vercel.app/contact
                </Link>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

