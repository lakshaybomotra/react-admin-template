# 🧠 React Admin Panel Template (Vite + AntD + Redux Saga)

A modern, responsive, and highly customizable admin dashboard template built with **Vite**, **React**, **Ant Design**, and **Redux Toolkit + Saga**. Fully themeable, API-ready, and scalable — perfect for internal tools, admin panels, or SaaS dashboards.

---

## 🚀 Features

- ⚡ Vite-powered for lightning-fast development
- 🎨 Centralized theme system (light/dark)
- 📱 Responsive sidebar with mobile drawer
- 🔐 Auth flow with protected routes (login/logout)
- 🧠 Redux Toolkit + Redux Saga integration
- 🔌 Axios instance with interceptors & error handling
- 🗃️ Modular folder structure for scalability
- 🌐 i18n-ready (with auto language detection)
- 🧼 Ant Design Form + validation
- 💬 Toast + Notification utility wrapper

---

## 🧱 Tech Stack

- React (JavaScript)
- Vite
- Ant Design
- React Router DOM
- Redux Toolkit
- Redux Saga
- Axios
- i18next (multi-language support)

---

## 📁 Folder Structure

```
src/
├── assets/             # Images, icons
├── components/         # Shared UI (ThemeToggle, etc.)
├── features/           # Feature modules (users, dashboard, etc.)
├── hooks/              # Custom React hooks
├── layouts/            # FullLayout, BlankLayout
├── pages/              # Login, Dashboard
├── routes/             # AppRoutes, ProtectedRoute
├── services/           # Axios instance
├── store/              # Redux setup (slices + sagas)
├── theme/              # Light/dark theme tokens
├── translations/       # i18n language files
├── utils/              # Helpers like toast.js
├── App.jsx
├── main.jsx
└── i18n.js
```

---

## 🛠️ Getting Started

### 1. Clone the template

```bash
npx degit your-username/react-admin-template my-app
cd my-app
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run the app

```bash
npm run dev
```

---

## 🧪 Default Login (Mock)

```txt
Username: admin
Password: admin
```

No real backend needed — replace `loginApi` inside `authSlice.js` when ready.

---

## 🔄 Customize

- Update `theme/theme.js` for custom branding
- Add pages inside `pages/` and routes inside `AppRoutes.jsx`
- Translate strings via `translations/en/translation.json`
- Add your API base URL in `.env` file:
  ```env
  VITE_API_BASE_URL=https://your-api.com
  ```

---

## 📦 Build for Production

```bash
npm run build
```

---

## 📘 License

MIT

---

> Made with ❤️ for clean frontend dev workflows
