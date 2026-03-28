# Node Email Transporter Service (Monorepo) 🚀

This project is a professional-grade email transporter service that integrates a **Clean Architecture backend** with a **premium React + Vite frontend**.

## 🌟 Features

- **Clean Architecture Backend**: Decoupled layers (Domain, Application, Infrastructure) for high maintainability.
- **Microservice Ready**: Exposes a robust REST API for sending emails.
- **Premium UI**: Modern frontend built with React, Vite, and glassmorphic designs.
- **Security**: Environment variable management and Gmail App Password support.
- **Developer Experience**: Watch mode for both backend and frontend development.

---

## 🏗️ Project Structure

```text
.
├── backend/            # Clean Architecture Node.js service
│   ├── src/
│   │   ├── domain/     # Logic and Interfaces
│   │   ├── application/# Use Cases
│   │   ├── infrastructure/ # External integrations (Nodemailer, Express)
│   │   └── interfaces/ # Controllers
├── frontend/           # React + Vite application
└── package.json        # Monorepo management
```

---

## 🚀 Getting Started

### 1. Prerequisites
- **Node.js** (v18 or higher)
- **Gmail Account** (with 2FA enabled)

### 2. Configuration
Create/Update `backend/.env` with your Gmail credentials:
```env
EMAIL_USER=your_email@gmail.com
EMAIL_PASSWORD=your_16_character_app_password
PORT=3005
```
> [!IMPORTANT]
> To get the `EMAIL_PASSWORD`, you must generate a **Google App Password**. Go to Security > 2-Step Verification > App Passwords.

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

## 🛠️ Tech Stack

- **Backend**: Node.js, Express, Nodemailer, Babel.
- **Frontend**: React, Vite, CSS Vanilla (Premium Glassmorphism).
- **Architecture**: Clean Architecture principles.

---

## 📜 License
MIT