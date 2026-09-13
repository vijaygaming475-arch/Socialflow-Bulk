# TikTok Developer Application Review Information

This document contains standardized application details, product descriptions, and configuration notes for submitting **SocialFlow Bulk** to the TikTok Developer Portal for API review (Login Kit & Content Posting API).

---

## 1. Official App Description (<= 120 Characters)

```text
Desktop tool for organizing, scheduling and publishing creator-owned videos to authorized social accounts.
```
*(Exact character count: 104 characters)*

---

## 2. App Profile & Configuration Details

| Field | Value |
| :--- | :--- |
| **App Name** | SocialFlow Bulk |
| **Platform** | Desktop (Windows application) |
| **Category** | Productivity / Creator Content Management |
| **Official Website** | `https://socialflow-bulk.vercel.app/` *(or your production Vercel domain)* |
| **Terms of Service URL** | `https://socialflow-bulk.vercel.app/terms` |
| **Privacy Policy URL** | `https://socialflow-bulk.vercel.app/privacy` |
| **Support / Contact URL** | `https://socialflow-bulk.vercel.app/contact` |
| **Support Email** | `socialflowbulk@gmail.com` |
| **App Icon Asset** | `public/app-icon-1024.png` (1024×1024, square, PNG, < 5 MB, no text) |

---

## 3. Products Intended & API Scopes

### Intended Products
1. **Login Kit**: Authenticate creator accounts using official TikTok OAuth 2.0.
2. **Content Posting API**: Enable creators to schedule and publish their own video files directly to their TikTok profile.

### Requested Scopes
- `user.info.basic`: To retrieve creator open ID and display name to identify connected account in the desktop UI.
- `video.upload`: To initiate and complete video file upload chunk streams to the user's account.
- `video.publish`: To submit metadata (caption, hashtags, privacy preferences) and finalize video post publishing upon creator scheduling.

---

## 4. Purpose & Functional Demonstration

### User Workflow
1. **Local Video Import**: The creator imports their own produced video files from their Windows computer into the desktop application queue.
2. **Account Authorization**: The creator initiates TikTok authentication. A secure OAuth 2.0 consent screen is presented by TikTok.
3. **Queue & Scheduling**: The creator assigns captions, hashtags, and future publication dates/times.
4. **Publishing Execution**: At the scheduled time, SocialFlow Bulk initiates the official upload sequence using the TikTok Content Posting API. Video files are streamed directly from the user's computer to TikTok's upload endpoints.

### Safety & Compliance Guarantees
- **No Passwords**: SocialFlow Bulk never requests, accesses, or stores TikTok passwords.
- **No Scraping or Automation**: All actions operate strictly through documented, official TikTok REST APIs. No headless browsers, cookies, or automated session hijackings are used.
- **Creator Ownership**: Creators retain full ownership of their media. The application does not store copies of creator video files on central servers.
- **User Revocation**: Users can disconnect at any time from within the app or by revoking permissions via TikTok's *Manage App Permissions* settings.

---

## 5. Reviewer Notes & Demonstrations

> **Note for TikTok Reviewers**: SocialFlow Bulk operates as a local Windows desktop application. Upload requests and status queries are performed via official endpoints. The public website fulfills all transparency requirements, displays clear disclaimers regarding independent operation, provides accessible Privacy and Terms documents, and offers a dedicated Data Deletion process.

