# VeloChat — Premium Real-Time Messaging Platform

VeloChat is a modern, full-stack real-time chat application built using the MERN stack (MongoDB, Express.js, React 19, Node.js), TypeScript, Socket.IO, and Docker. It features a sleek glassmorphic UI, secure email authentication, granular chat controls, and an integrated AI streaming chatbot.

---

## 🔥 Key Features

* **Secure Authentication & OTP:** Login with secure credentials or use instant time-limited email OTPs via Nodemailer. Unverified profiles are safely gated at `/verify-email`.
* **Granular Message Management:** Hard delete messages for yourself (`Delete for Me`) or trigger a global soft-delete tombstone (`Delete for Everyone`).
* **Contextual Rich Layouts:** Features quote-nested conversation replies, custom chat pinning configurations, user blocking, and starred message bookmark spaces.
* **Streaming Gemini AI Companion:** Every workspace receives an autonomous personal chatbot conversation powered by `Google Gemini` that streams text responses chunk-by-chunk in real time.
* **Offline Email Dispatch:** Automatically formats and routes branded HTML notification emails asynchronously if an inbound message arrives while the recipient is completely offline.
* **Smart Multi-Tab Presence:** Keeps tabs on active, multi-device socket instances. Users are only marked offline when their *last* active application tab closes down.

---

## 🛠️ Quickstart Installation

Ensure you have **Docker** and **Docker Compose** installed locally.

### 1. Clone & Enter Workspace
```bash
git clone [https://github.com/Deekshith-80/VeloChat.git](https://github.com/Deekshith-80/VeloChat.git)
cd VeloChat