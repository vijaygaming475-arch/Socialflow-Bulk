import type { Metadata } from "next";
import Link from "next/link";
import { ShieldCheck, Mail, Lock, Trash2, Key, AlertCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Official Privacy Policy for SocialFlow Bulk. Transparent information on data processing, OAuth scopes, local data storage, and deletion requests.",
};

export default function PrivacyPage() {
  return (
    <div className="py-16 lg:py-24 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="space-y-4 pb-10 border-b border-white/[0.08]">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/50 border border-cyan-500/30 text-cyan-300 text-xs font-semibold">
            <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
            <span>Official Policy Document</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Privacy Policy
          </h1>
          <p className="text-sm font-medium text-cyan-400">
            Last Updated: September 2026
          </p>
          <p className="text-base text-slate-300 leading-relaxed">
            SocialFlow Bulk (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting your privacy and ensuring transparency in how our desktop application and website interact with third-party social media platforms. This Privacy Policy details our practices regarding information processing, token management, content security, and user rights.
          </p>
        </div>

        {/* Highlight Statements */}
        <div className="my-8 p-5 rounded-2xl bg-cyan-950/30 border border-cyan-500/30 space-y-2">
          <div className="flex items-center gap-2 text-cyan-300 font-bold text-sm">
            <Lock className="w-4 h-4" />
            Core Privacy Commitments
          </div>
          <ul className="text-xs sm:text-sm text-slate-200 space-y-1.5 list-disc list-inside">
            <li>
              <strong>We do not ask for or store your TikTok, Facebook, or Google account password.</strong>
            </li>
            <li>
              <strong>We do not sell personal information.</strong>
            </li>
            <li>
              Your video files remain on your local computer and are only transmitted to platforms you specifically select and schedule.
            </li>
          </ul>
        </div>

        {/* Table of Contents */}
        <div className="my-8 p-6 rounded-2xl glass-panel border border-white/[0.06]">
          <h2 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3">
            Policy Sections
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-cyan-400">
            <a href="#section-1" className="hover:underline">1. Introduction</a>
            <a href="#section-2" className="hover:underline">2. Information We Process</a>
            <a href="#section-3" className="hover:underline">3. OAuth Account Information</a>
            <a href="#section-4" className="hover:underline">4. TikTok Information</a>
            <a href="#section-5" className="hover:underline">5. Facebook/Meta Information</a>
            <a href="#section-6" className="hover:underline">6. Google/YouTube Information</a>
            <a href="#section-7" className="hover:underline">7. Video and Content Information</a>
            <a href="#section-8" className="hover:underline">8. Local Application Data</a>
            <a href="#section-9" className="hover:underline">9. Authentication Tokens</a>
            <a href="#section-10" className="hover:underline">10. How Information Is Used</a>
            <a href="#section-11" className="hover:underline">11. Sharing of Information</a>
            <a href="#section-12" className="hover:underline">12. Third-Party APIs</a>
            <a href="#section-13" className="hover:underline">13. Data Retention</a>
            <a href="#data-deletion" className="hover:underline font-semibold text-cyan-300">14. Data Deletion Requests</a>
            <a href="#section-15" className="hover:underline">15. Security</a>
            <a href="#section-16" className="hover:underline">16. Children&apos;s Privacy</a>
            <a href="#section-17" className="hover:underline">17. International Users</a>
            <a href="#section-18" className="hover:underline">18. Changes to This Policy</a>
            <a href="#section-19" className="hover:underline">19. Contact</a>
          </div>
        </div>

        {/* Policy Body */}
        <div className="space-y-12 text-slate-300 text-sm leading-relaxed">
          {/* 1 */}
          <section id="section-1" className="space-y-3">
            <h2 className="text-xl font-bold text-white">1. Introduction</h2>
            <p>
              SocialFlow Bulk is a Windows desktop application designed to help creators organize, schedule, and publish their own video content to supported social platforms (including TikTok, Facebook Pages, and YouTube) through official application programming interfaces (APIs). This policy outlines how information is collected, processed, and safeguarded when using our desktop software and public web services.
            </p>
          </section>

          {/* 2 */}
          <section id="section-2" className="space-y-3">
            <h2 className="text-xl font-bold text-white">2. Information We Process</h2>
            <p>
              We adhere strictly to data minimization principles. We only process data that is technically necessary to provide scheduling and publishing services. Depending on the integrations you enable, this may include:
            </p>
            <ul className="list-disc list-inside space-y-1.5 pl-2 text-slate-300">
              <li>Basic platform profile or account identifiers (such as an internal open ID or channel ID)</li>
              <li>Display name or avatar URL for identifying active accounts in the UI</li>
              <li>List of authorized Facebook Pages or YouTube Channels associated with your login</li>
              <li>Granted authorization scopes and token expiration timestamps</li>
              <li>Publishing status indicators and upload progress metadata</li>
            </ul>
          </section>

          {/* 3 */}
          <section id="section-3" className="space-y-3">
            <h2 className="text-xl font-bold text-white">3. OAuth Account Information</h2>
            <p>
              Account authorization occurs via official industry-standard OAuth 2.0 flows. You authenticate directly on the respective platform&apos;s secure web login screen. SocialFlow Bulk never receives, intercepts, logs, or stores your plain-text login passwords for TikTok, Facebook, or Google accounts.
            </p>
          </section>

          {/* 4 */}
          <section id="section-4" className="space-y-3">
            <h2 className="text-xl font-bold text-white">4. TikTok Information</h2>
            <p>
              When you connect SocialFlow Bulk with TikTok using the official TikTok Login Kit and Content Posting API, we receive authorized OAuth tokens and basic user profile identifiers (e.g., open_id, display_name) as permitted by your granted scopes. These credentials are utilized strictly to authenticate publishing requests for videos you have scheduled. We do not access your private messages, browsing history, or feed recommendations.
            </p>
          </section>

          {/* 5 */}
          <section id="section-5" className="space-y-3">
            <h2 className="text-xl font-bold text-white">5. Facebook/Meta Information</h2>
            <p>
              When connecting Meta services, SocialFlow Bulk requests access specifically for Facebook Pages you manage. We process Page names, Page IDs, and page access tokens solely to upload and schedule videos to your authorized Page feeds. We do not access your personal profile timeline, private messages, or friend networks.
            </p>
          </section>

          {/* 6 */}
          <section id="section-6" className="space-y-3">
            <h2 className="text-xl font-bold text-white">6. Google/YouTube Information</h2>
            <p>
              When connecting your YouTube channel via Google OAuth 2.0, SocialFlow Bulk accesses YouTube Data API scopes necessary to manage video uploads on your authorized channel. We process channel titles and video upload endpoints. Our use of Google user data conforms strictly to the Google API Services User Data Policy, including the Limited Use requirements.
            </p>
          </section>

          {/* 7 */}
          <section id="section-7" className="space-y-3">
            <h2 className="text-xl font-bold text-white">7. Video and Content Information</h2>
            <p>
              You maintain 100% intellectual property ownership over all videos, thumbnails, captions, titles, and hashtags imported into SocialFlow Bulk. Video files remain on your local computer hard drive until the moment of scheduled upload, at which point file streams are sent directly over encrypted TLS connections to the destination platform API.
            </p>
          </section>

          {/* 8 */}
          <section id="section-8" className="space-y-3">
            <h2 className="text-xl font-bold text-white">8. Local Application Data</h2>
            <p>
              SocialFlow Bulk is engineered with a local-first philosophy. Your scheduling database, video file references, posting intervals, and activity logs are stored locally on your Windows operating system (e.g., in your local AppData directory). We do not operate cloud database clusters that store copies of your video assets.
            </p>
          </section>

          {/* 9 */}
          <section id="section-9" className="space-y-3">
            <h2 className="text-xl font-bold text-white">9. Authentication Tokens</h2>
            <p>
              OAuth access tokens and refresh tokens received from official platform authorization flows are stored securely within your local system environment or encrypted local storage. These tokens are used solely to sign API requests to the respective platform endpoints on your behalf.
            </p>
          </section>

          {/* 10 */}
          <section id="section-10" className="space-y-3">
            <h2 className="text-xl font-bold text-white">10. How Information Is Used</h2>
            <p>
              Information processed by SocialFlow Bulk is utilized exclusively for the following operational purposes:
            </p>
            <ul className="list-disc list-inside space-y-1 pl-2">
              <li>Displaying connected channels and pages in your desktop application UI</li>
              <li>Executing creator-scheduled video uploads to authorized platform endpoints</li>
              <li>Providing post-status updates, upload percentage feedback, and error logs</li>
              <li>Refreshing expired OAuth access tokens using standard OAuth token exchange protocols</li>
            </ul>
          </section>

          {/* 11 */}
          <section id="section-11" className="space-y-3">
            <h2 className="text-xl font-bold text-white">11. Sharing of Information</h2>
            <p>
              <strong>We do not sell personal information.</strong> We do not monetize, rent, disclose, or trade your personal data, video files, or usage statistics to advertising networks, data brokers, or unauthorized third parties. Information is communicated only to official platform endpoints (TikTok, Meta, Google) as initiated by your explicit publishing instructions.
            </p>
          </section>

          {/* 12 */}
          <section id="section-12" className="space-y-3">
            <h2 className="text-xl font-bold text-white">12. Third-Party APIs</h2>
            <p>
              Our application relies on third-party APIs governed by their respective privacy terms. When utilizing these integrations, you are also subject to:
            </p>
            <ul className="list-disc list-inside space-y-1 pl-2">
              <li>TikTok Terms of Service and Privacy Policy</li>
              <li>Meta Platform Terms and Data Policy</li>
              <li>YouTube Terms of Service and Google Privacy Policy</li>
            </ul>
          </section>

          {/* 13 */}
          <section id="section-13" className="space-y-3">
            <h2 className="text-xl font-bold text-white">13. Data Retention</h2>
            <p>
              Because data is predominantly stored locally on your device, it remains on your computer until you remove the application or clear your local application storage. Temporary token data persists only as long as required to maintain the authorized connection.
            </p>
          </section>

          {/* 14 - DATA DELETION REQUESTS */}
          <section id="data-deletion" className="space-y-4 p-6 sm:p-8 rounded-2xl bg-slate-900/80 border border-cyan-500/40">
            <div className="flex items-center gap-2 text-cyan-400 font-bold text-lg">
              <Trash2 className="w-5 h-5" />
              <span>14. Data Deletion Requests</span>
            </div>
            <p className="text-slate-200">
              We respect your right to be forgotten and provide clear, accessible mechanisms for deleting your data:
            </p>

            <div className="space-y-3 pt-2">
              <div className="p-3.5 rounded-xl bg-slate-950/60 border border-white/[0.06] space-y-1">
                <div className="font-semibold text-white text-xs uppercase tracking-wide">
                  Method 1: Revoke Platform Authorization
                </div>
                <p className="text-xs text-slate-300">
                  You can immediately invalidate tokens and disconnect SocialFlow Bulk by visiting your account security settings on TikTok (&quot;Manage app permissions&quot;), Google Account (&quot;Third-party apps with account access&quot;), or Facebook (&quot;Business Integrations&quot;).
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-950/60 border border-white/[0.06] space-y-1">
                <div className="font-semibold text-white text-xs uppercase tracking-wide">
                  Method 2: Contact Support for Service Data Deletion
                </div>
                <p className="text-xs text-slate-300">
                  To request deletion of any support inquiries, records, or developer configuration identifiers, send an email to{" "}
                  <a href="mailto:socialflowbulk@gmail.com" className="text-cyan-400 hover:underline font-mono">
                    socialflowbulk@gmail.com
                  </a>{" "}
                  with the subject line &quot;Data Deletion Request&quot;. We process verified requests within 30 days.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-950/60 border border-white/[0.06] space-y-1">
                <div className="font-semibold text-white text-xs uppercase tracking-wide">
                  Method 3: Remove Local Application Data
                </div>
                <p className="text-xs text-slate-300">
                  You can erase all local queues, token files, and cached settings by uninstalling SocialFlow Bulk from your Windows PC and deleting the application data directory located in <code className="text-cyan-300 bg-slate-900 px-1 py-0.5 rounded text-[11px]">%LOCALAPPDATA%\SocialFlowBulk</code>.
                </p>
              </div>
            </div>

            <p className="text-xs text-slate-400 pt-2 border-t border-white/[0.06]">
              <em>Note:</em> SocialFlow Bulk cannot delete or modify videos or account information that has already been published to and is controlled independently by TikTok, Meta, or Google. To remove published videos, please use the respective platform&apos;s native tools.
            </p>
          </section>

          {/* 15 */}
          <section id="section-15" className="space-y-3">
            <h2 className="text-xl font-bold text-white">15. Security</h2>
            <p>
              We implement reasonable technical and organizational safeguards designed to protect your data against unauthorized access, loss, or alteration. All API traffic is routed across industry-standard TLS (Transport Layer Security) encryption. While we strive to protect your information, no digital transmission or software environment can be guaranteed as completely invulnerable to security risks.
            </p>
          </section>

          {/* 16 */}
          <section id="section-16" className="space-y-3">
            <h2 className="text-xl font-bold text-white">16. Children&apos;s Privacy</h2>
            <p>
              SocialFlow Bulk is intended exclusively for creators and business operators who meet the age requirements for holding social media creator accounts (generally at least 13 years old, or the applicable age of digital consent in your jurisdiction). We do not knowingly collect personal information from children under 13.
            </p>
          </section>

          {/* 17 */}
          <section id="section-17" className="space-y-3">
            <h2 className="text-xl font-bold text-white">17. International Users</h2>
            <p>
              If you access SocialFlow Bulk outside the United States, please be aware that information may be processed in accordance with the jurisdictional policies of the respective API providers (TikTok, Meta, Google) where their data centers are located.
            </p>
          </section>

          {/* 18 */}
          <section id="section-18" className="space-y-3">
            <h2 className="text-xl font-bold text-white">18. Changes to This Policy</h2>
            <p>
              We may revise this Privacy Policy periodically to reflect changes in our desktop application features, legal requirements, or platform developer policies. Any updates will be posted directly to this URL with an updated revision date.
            </p>
          </section>

          {/* 19 */}
          <section id="section-19" className="space-y-3 pb-8">
            <h2 className="text-xl font-bold text-white">19. Contact</h2>
            <p>
              If you have any questions, concerns, or requests regarding this Privacy Policy or our data handling practices, please contact our privacy and support team:
            </p>
            <div className="p-4 rounded-xl bg-slate-900/60 border border-white/[0.08] inline-block space-y-1">
              <div className="text-white font-semibold">SocialFlow Bulk Support</div>
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

