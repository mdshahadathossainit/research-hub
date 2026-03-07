
# 🔬 Research Hub - Full-Stack Research Management System

Research Hub is a modern **Full-Stack Web Application** designed for researchers and students to publish, archive, and manage research papers. The project features a robust **Django REST Framework** backend integrated with a highly responsive **React** frontend.

🚀 **Live Demo:** * **Frontend:** [research-hub-kappa.vercel.app](https://research-hub-kappa.vercel.app/)
* **Backend API:** [research-hub-d9pz.onrender.com/api/papers/](https://research-hub-d9pz.onrender.com/api/papers/)

---

<p align="center">
  <img src="https://i.imgur.com/DqxC9J7.png" width="850" alt="Research Hub Dashboard"/>
  <br><br>
  <img src="https://i.imgur.com/cHYz2v0.png" width="850" alt="Research Hub Submission Interface"/>
</p>

## ✨ Features

* **Smart Paper Submission:** Users can submit research titles, authors, and abstracts via a secure, real-time interface.
* **AI-Powered Auto-Categorization:** The backend automatically classifies papers into categories like *Machine Learning*, *Cybersecurity*, or *Cloud Computing* based on keywords in the abstract.
* **Dynamic Dashboard:** A real-time, glassmorphic UI that allows users to browse, search, and filter indexed publications instantly.
* **Decoupled Architecture:** Follows a modern microservices approach with a separated frontend (React) and backend (Django REST).
* **Mobile-First Design:** Fully responsive UI built with Tailwind CSS, ensuring a premium experience on all devices.

---

## 🛠️ Tech Stack

### **Frontend:**
* **React.js** (Vite-powered for performance)
* **Tailwind CSS** (Custom Glassmorphism & Animations)
* **Axios** (Efficient asynchronous API handling)
* **Lucide React** (Modern vector iconography)

### **Backend:**
* **Django & Django REST Framework** (DRF)
* **SQLite** (Development database)
* **WhiteNoise** (Static file management for production)
* **Gunicorn** (Production-grade WSGI Server)

---

## 🏗️ Project Structure

```text
research-hub/
├── backend/            # Django REST API (Backend)
│   ├── api/            # App managing models, views & serializers
│   ├── core/           # Main configuration and settings
│   ├── manage.py       # Django administrative script
│   └── requirements.txt # Python dependencies
├── frontend/           # React Application (Frontend)
│   ├── src/
│   │   ├── components/ # Reusable UI (Navbar, Footer, etc.)
│   │   ├── pages/      # Main logic (Dashboard.jsx)
│   │   └── assets/     # Styling & Global CSS
│   └── index.html      # SPA entry point
├── build.sh            # Deployment & Migration script
└── README.md           # Project Documentation

```

---

## ⚙️ Deployment & Infrastructure

* **Backend:** Deployed on **Render** with a custom `build.sh` to automate database migrations and static file collection.
* **Frontend:** Hosted on **Vercel** with a CI/CD pipeline linked to GitHub for automated deployments.
* **API Communication:** Secured with **CORS** headers to allow safe cross-origin data exchange between Vercel and Render.

---

## 👨‍💻 Author

**Md Shahadat Hossain** 

🔗 **GitHub:** [@mdshahadathossainit](https://github.com/mdshahadathossainit)

🌐 **Portfolio:** [mdshahadathossainit.github.io](https://mdshahadathossainit.github.io/)

📧 **Email:** m.shahadat.hossain.it@gmail.com

---

*Developed with ❤️ for the research community.*

```

