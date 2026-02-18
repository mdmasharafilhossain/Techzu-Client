# Real-Time High-Traffic Inventory System — Frontend

This repository contains the frontend application for the **Limited Edition Sneaker Drop System**.

The UI provides real-time stock updates, reservation countdown timers, and a seamless purchase experience.

The frontend communicates with the backend API and listens to WebSocket events to synchronize stock across all connected clients instantly.

---

# Related Links

Frontend Repository:  
https://github.com/mdmasharafilhossain/Techzu-Client

Backend Repository:  
https://github.com/mdmasharafilhossain/Techzu-Server

Live Application (Backend):  
https://techzu-server.onrender.com

Live Application (Frontend):  
https://techzu-client.vercel.app

---

# 🛠️ Tech Stack

- React
- TypeScript
- Tailwind CSS
- React Hook Form
- Zod Validation
- Socket.io Client
- SweetAlert2
- Axios
- Vite

---

# Features

✅ Real-time stock updates across all browser tabs  
✅ Reserve button with loading and validation feedback  
✅ 60-second reservation countdown timer  
✅ Purchase flow with validation  
✅ Activity feed showing recent buyers  
✅ User-friendly alerts and notifications  
✅ Responsive clean UI  

---

# How to Run the Frontend

## 1️⃣ Clone Repository

```bash
git clone https://github.com/mdmasharafilhossain/Techzu-Client
cd Techzu-Client
```
## 2️⃣ Install Dependencies

```bash
npm install
```
## 3️⃣ Environment Variables
Create a .env.local file:
```bash
VITE_API = http://localhost:5000/api
VITE_BASE_API = http://localhost:5000
```
## 4️⃣ Start Development Server

```bash
npm run dev
```
