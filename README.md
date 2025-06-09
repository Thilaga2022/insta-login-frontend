# Instagram Login Clone 🔐

A responsive **Instagram login page clone** built with **React** (frontend) and a simple **Node.js + Express** backend for login verification. This clone supports login using **username, mobile number, or email address**.

---

## 🚀 Features

- Clean Instagram-style UI
- Responsive layout
- Login using:
  - Username (e.g. `thilaga123`)
  - Email (e.g. `user@example.com`)
  - Mobile number (e.g. `9876543210`)
- Axios-based request to backend
- Navigation on login success/failure
- Stores logged-in username in `localStorage`
- Facebook login link & "Forgot password?" feature
- Footer and asset styling

---

## 📸 Preview

> _Add your own screenshot here if available_

---

## 🛠️ Tech Stack

**Frontend**
- React
- React Router DOM
- Axios
- React Icons
- CSS / Tailwind


---

## 📁 Folder Structure

insta-login-clone/
├── src/ # React frontend
│ ├── assets/
│ ├── component/
    ├── Footer.jsx
│ ├── App.jsx
  ├── Success.jsx
  ├── Fail.jsx
│ ├── App.css
│ └── main.jsx
├── public/
├── package.json
└── README.md

git clone https://github.com/Thilaga2022/insta-login-frontend.git
cd insta-login-clone

## Install Dependencies
npm install
npm run dev

## 🧠 Logic Flow
User enters username and password

React calls http://localhost:3000/login?username=xxx&password=yyy via Axios

Backend checks against a hardcoded array of users

If valid, frontend redirects to /success; else, to /fail

Username is stored in localStorage

## 📄 License
This project is licensed under the MIT License.

## 🙋‍♀️ Author
Made with ❤️ by Thilaga
Inspired by Instagram. For educational and practice purposes only.
