# Node Email Transporter Service (Monorepo) 🚀

This project is a professional-grade email transporter service that integrates a **Clean Architecture backend** with a **premium React + Vite frontend**.

## 🌟 Features

- **Clean Architecture Backend**: Decoupled layers (Domain, Application, Infrastructure) for high maintainability.
- **Microservice Ready**: Exposes a robust REST API for sending emails.
- **Premium UI**: Modern frontend built with React, Vite, and glassmorphic designs.
- **Resend SDK Integration**: Industry-standard email delivery using the official Resend API.
- **Microservice Ready**: Exposes a robust REST API for sending emails.
- **Premium UI**: Modern frontend built with React, Vite, and glassmorphic designs.
- **Security**: Environment variable management and API Key support.
- **Developer Experience**: Watch mode for both backend and frontend development.

---

## 🏗️ Project Structure

```text
.
├── backend/            # Clean Architecture Node.js service
│   ├── src/
│   │   ├── domain/     # Logic and Interfaces
│   │   ├── application/# Use Cases
│   │   ├── infrastructure/ # External integrations (Resend, Express)
│   │   └── interfaces/ # Controllers
├── frontend/           # React + Vite application
└── package.json        # Monorepo management
```

---

## 🚀 Getting Started

### 1. Prerequisites
- **Node.js** (v18 or higher)
- **Resend Account**: Sign up at [resend.com](https://resend.com).

### 2. Configuration
Create/Update `backend/.env` with your Resend API Key:
```env
RESEND_API_KEY=re_your_api_key_here
PORT=3005
```
> [!IMPORTANT]
> To get the `RESEND_API_KEY`, log in to Resend and go to **API Keys**.

### 3. Installation
From the root directory, run:
```bash
# This will install dependencies for root, backend, and frontend
npm run install:all
```

### 4. Running the Project
To start both the backend and frontend simultaneously:
```bash
npm run dev
```

---

## 🚀 Deployment (Render)

This project is ready to be deployed on **Render** using the included `render.yaml` Blueprint.

### Steps:
1.  **Connect Repo**: Open your Render Dashboard and click **New > Blueprint**.
2.  **Select Repo**: Connect this GitHub repository.
3.  **Configure**: Render will automatically detect the `render.yaml`.
4.  **Environment Variables**:
    - In the Render Dashboard, go to the **email-transporter-backend** service.
    - Add `RESEND_API_KEY`.
5.  **Enjoy**: The frontend will automatically link to the backend URL.

---

## 🛠️ Tech Stack


- **Backend**: Node.js, Express, Resend SDK, Babel.
- **Frontend**: React, Vite, CSS Vanilla (Premium Glassmorphism).
- **Architecture**: Clean Architecture principles.

---

## 📜 License
MIT