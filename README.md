# 🚀 LiveRescue – AI Travel Guardian

![Logo](./assets/logo.png)

## 📖 About the Project
Travel disruptions — flight cancellations, bad weather, or strikes — leave millions stranded every year.  
Sleeping on airport floors, scrambling for overpriced hotels, waiting in endless queues… we’ve all been there.  

**LiveRescue** is an AI-powered travel disruption shield that predicts risks, auto-books rescue hotels, and delivers instant vouchers with QR codes — ensuring travelers are never left stranded.  

---

## ✨ Features
- 🔮 **Predictive AI** – Detects risks of flight delays/cancellations using live flight + weather data.  
- 🏨 **Auto Hotel Booking** – Connects to Nuitee LiteAPI for instant hotel rescue.  
- 📲 **QR Vouchers** – Generates digital check-in codes for seamless hotel access.  
- 🧭 **AI Copilot** – Guides travelers calmly with clear explanations and safe alternatives.  
- 🤝 **Partner Support** – Helps airlines, insurers, and hotels reduce costs and fill vacancies.  

---

## 🛠️ Tech Stack
**Frontend:** Next.js + TailwindCSS (Neumorphism UI for soft, calming design)  
**Backend:** Firebase Functions + Firestore (scalable booking & disruption logic)  
**AI Layer:** Gemini + custom predictive models (flight risk + hotel recommender)  
**APIs:**  
- ✈️ Flight APIs (real-time flight status)  
- 🌦️ Weather APIs (climate disruptions)  
- 🏨 Nuitee LiteAPI (hotel availability & booking)  
**Notifications:** Firebase Cloud Messaging + email confirmations  

---

## ⚙️ Architecture
```mermaid
flowchart TD
    User[Traveler] --> App[Web App: Next.js]
    App --> API[Firebase Functions]
    API --> DB[(Firestore Database)]
    API --> AI[Gemini AI Models]
    API --> Flight[Flight API]
    API --> Weather[Weather API]
    API --> Hotel[Nuitee LiteAPI]
    API --> Notify[Firebase Messaging]
    Notify --> User
