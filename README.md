# Blog Application – MERN Stack

A full-featured blog application built using **Node.js**, **Express.js**, **MongoDB**, and **React.js**. This platform allows users to create and interact with blog posts, including commenting and liking features.

---

## 🔧 Tech Stack

- **Frontend:** React.js (handled in a separate repository)
- **Backend:** Node.js, Express.js
- **Database:** MongoDB with Mongoose
- **Validation:** express-validator
- **Image Hosting:** Cloudinary
- **HTTP Requests:** Axios (frontend ↔ backend)
- **Security:** JWT authentication & role-based authorization

---

## 🚀 Features

- ✅ **CRUD Operations**
  - Users can create, edit, view, and delete blog posts.

- 💬 **Commenting System**
  - Users can add comments to blog posts.

- ❤️ **Likes Functionality**
  - Like/unlike posts with a simple click.

- 🔐 **Authentication & Authorization**
  - JWT-based login for users.
  - Role-based access control (admin vs. user).

- ☁️ **Image Uploads via Cloudinary**
  - Blog posts support featured images.

- 📦 **Robust RESTful APIs**
  - APIs for posts, comments, likes, and user management.

---

## 📁 Project Structure

```bash
backend/
├── controllers/        # Logic for posts, comments, likes, auth
├── models/             # Mongoose schemas
├── routes/             # API routes
├── middlewares/        # Auth, error handlers, validation
├── utils/              # Cloudinary config, token helpers
├── .env                # DB and environment setup
└── server.js           # App entry point

##  Installation & Running

git clone https://github.com/moyoussef11/blogClient.git
cd blogClient
npm install
npm run dev

