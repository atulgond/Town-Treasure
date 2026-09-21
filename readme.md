# 🏙️ Town Treasure

> A full-stack city exploration and travel platform that brings city discovery, travel services, and booking functionality together in one place.

## 📌 Overview

**Town Treasure** is a collaborative full-stack web application designed to make city exploration and travel planning easier and more convenient.

The platform allows users to explore city attractions and services, access booking facilities, and interact with different travel-related features through a modern and responsive web interface.

The application follows a **React-based frontend and Spring Boot backend architecture**, with **JWT-based authentication** for secure user access.

---

## ✨ Key Features

- 🏠 **Interactive Home Page** — Centralized entry point for exploring the platform.
- 🗺️ **City Exploration** — Discover attractions, landmarks, and available city services.
- 🏨 **Booking Services** — Explore and access available travel and booking services.
- 🔐 **User Authentication** — Login and signup functionality with JWT-based authentication.
- 🧭 **Responsive Navigation** — Easy navigation across different sections of the application.
- 📞 **Contact Us** — Dedicated section for user communication and contact information.
- ℹ️ **About Us** — Information about the platform and its purpose.
- 📱 **Responsive UI** — Designed to provide a consistent experience across different screen sizes.

---

## 👨‍💻 My Contribution — Atul Gond

I contributed to the **frontend development and user experience** of Town Treasure, with a primary focus on navigation, informational pages, responsive UI, and integration with the overall application.

### 🧭 Navbar & Navigation

- Designed and developed the application's main **Navbar** using React.
- Implemented navigation between major sections of the application.
- Integrated the Navbar across different pages and modules.
- Developed a responsive navigation experience for different screen sizes.
- Worked on maintaining consistent navigation throughout the application.

### 📞 Contact Us

- Designed and developed the **Contact Us** section.
- Created the page structure and reusable React components.
- Implemented responsive styling using Tailwind CSS.
- Integrated the section into the application's navigation flow.

### ℹ️ About Us

- Designed and developed the **About Us** section.
- Structured and presented information about the Town Treasure platform.
- Built reusable frontend components using React.
- Implemented responsive layouts using Tailwind CSS.

### 🎨 Frontend & UI Integration

- Developed reusable and maintainable React components.
- Used **Tailwind CSS** for responsive and consistent styling.
- Integrated my modules with the components developed by other team members.
- Worked on UI consistency across different sections of the application.
- Tested navigation and frontend integration during development.
- Collaborated with the team to integrate different application modules into a unified interface.

---

## 🏗️ Application Architecture

```text
                    ┌──────────────────┐
                    │       User       │
                    └────────┬─────────┘
                             │
                             ▼
                  ┌──────────────────────┐
                  │    React Frontend    │
                  │                      │
                  │  Home               │
                  │  Explore Services   │
                  │  Booking Services   │
                  │  About Us           │
                  │  Contact Us         │
                  │  Login / Signup     │
                  └──────────┬───────────┘
                             │
                          REST APIs
                             │
                             ▼
                  ┌──────────────────────┐
                  │    Spring Boot      │
                  │      Backend        │
                  │                      │
                  │  Business Logic     │
                  │  Authentication     │
                  │  APIs               │
                  └──────────┬───────────┘
                             │
                             ▼
                  ┌──────────────────────┐
                  │  JWT Authentication │
                  └──────────────────────┘
