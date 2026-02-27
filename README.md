# 🔬 Research Hub - Full-Stack Research Management System

Research Hub is a modern **Full-Stack Web Application** designed for researchers and students to publish, archive, and manage research papers. The project features a robust **Django REST Framework** backend integrated with a highly responsive **React** frontend.

🚀 **Live Demo:** (frontend: https://research-hub-kappa.vercel.app/) (Backend: https://research-hub-d9pz.onrender.com/api/papers/)**

---

## ✨ Features

* **Paper Submission:** Users can seamlessly submit research titles, authors, and abstracts via a secure interface.
* **Dynamic Dashboard:** A real-time, card-based UI that displays the latest indexed publications.
* **Decoupled Architecture:** Utilizes a modern microservices-style approach, with the frontend on **Vercel** and the backend on **Render**.
* **RESTful API:** Powered by Django REST Framework (DRF) for efficient data serialization and communication.
* **Professional UI:** Styled with **Tailwind CSS** and enhanced with **Lucide Icons** for a premium user experience.

---

## 🛠️ Tech Stack

### Frontend:
* **React.js** (Vite-powered)
* **Tailwind CSS** (Modern Styling)
* **Axios** (Asynchronous API handling)
* **Lucide React** (Vector Icons)

### Backend:
* **Django** & **Django REST Framework**
* **SQLite** (Relational Database)
* **Gunicorn** (Production-grade WSGI Server)

---

## 🏗️ Project Structure

```text
research-hub/
├── backend/            # Django REST API
│   ├── api/            # App managing research paper models
│   └── core/           # Main configuration and settings
└── frontend/           # React Application
    ├── src/
    │   ├── components/ # Reusable UI components (Navbar, etc.)
    │   └── pages/      # Dashboard and core logic
    └── index.html      # SPA entry point

    ⚙️ Deployment & Infrastructure
Backend: Deployed on Render with custom Build Commands to manage automated database migrations.

Frontend: Deployed on Vercel with a CI/CD pipeline linked directly to GitHub for automated builds.

Database Management: Implemented Django's migration system to ensure schema consistency during deployment.




👨‍💻 Author
Md Shahadat Hossain

Computer Club Member at Port City International University

GitHub: mdshahadathossainit [cite: 2025-08-28]

Portfolio: mdshahadathossainit.github.io [cite: 2025-08-28]

