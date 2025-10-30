#  CarbonTrack

A responsive React application built with **Vite**, **Tailwind CSS**, and **React Router**.  
It demonstrates component-based architecture, state management with hooks, theme toggling (light/dark mode), and API integration with loading/error handling.

---

## Project Overview

**CarbonTrack** is designed to showcase modern front-end development practices in React:
- Component reusability and props management
- State management with React Hooks (`useState`, `useEffect`, `useContext`)
- Custom hook (`useLocalStorage`) for data persistence
- API integration (JSONPlaceholder)
- Responsive design with Tailwind CSS
- Theme switching between light and dark modes

---

##  Features

###  Component Architecture
- **Navbar** – site navigation and theme toggle  
- **Footer** – copyright and links  
- **Button** – reusable button component with variants (Primary, Secondary, Danger)  
- **Card** – displays API data and custom content  
- **Layout** – wraps all pages with Navbar and Footer  
- **TaskManager** – add, delete, and filter tasks with local persistence  

###  State Management & Hooks
- `useState` – manage tasks, filters, and API data  
- `useEffect` – fetch posts and load saved tasks  
- `useContext` – manage light/dark theme  
- `useLocalStorage` – persist user tasks and theme preference  

###  API Integration
- Fetches posts from `https://jsonplaceholder.typicode.com/posts`
- Displays fetched data in a responsive grid
- Handles loading and error states gracefully
- Supports search and pagination (if added)

###  Styling with Tailwind CSS
- Fully responsive (mobile, tablet, desktop)
- Dark mode using Tailwind’s `dark:` classes
- Clean UI with spacing, hover effects, and transitions

---

## Project Structure

CarbonTrack/
│
├── src/
│ ├── components/
│ │ ├── Button.jsx
│ │ ├── Card.jsx
│ │ ├── Navbar.jsx
│ │ ├── Footer.jsx
│ │ ├── Layout.jsx
│ │ └── TaskManager.jsx
│ │
│ ├── context/
│ │ └── ThemeContext.jsx
│ │
│ ├── hooks/
│ │ └── useLocalStorage.js
│ │
│ ├── pages/
│ │ ├── Home.jsx
│ │ └── Posts.jsx
│ │
│ ├── App.jsx
│ ├── main.jsx
│ ├── index.css
│ └── tailwind.css
│
├── package.json
├── postcss.config.js
├── tailwind.config.js
└── vite.config.js


---

##  How It Works

1. The app starts with **light theme** (default) but remembers your preference.  
2. The **Navbar** has a theme toggle switch for light/dark mode.  
3. The **TaskManager** component lets users add and manage tasks saved in localStorage.  
4. The **PostsPage** fetches posts from the JSONPlaceholder API and displays them in cards.  

---

##  Setup Instructions

### 1️⃣ Install Dependencies
```bash
npm install

2️⃣ Run Development Server
npm run dev

3️⃣ Build for Production
npm run build

4️⃣ Preview Build
npm run preview

🌐 Deployment

Deployed using Netlify ✅
🔗 Live Demo: https://carbontrackk.netlify.app/

Technologies Used

React 18

Vite

Tailwind CSS 3

React Router DOM

JSONPlaceholder API

👨‍💻 Author

Samuel Ojima Idakwo
Process Engineer | MERN Developer
🚀 Passionate about sustainability and carbon management

📜 License

This project is licensed under the MIT License.
