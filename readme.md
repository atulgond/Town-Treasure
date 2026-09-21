# 🏙️ Town Treasure

> **Town Treasure** is a full-stack city exploration and travel platform designed to help users discover cities, explore attractions and local services, and access travel-related booking facilities through a single web application.

---

## 📖 About the Project

**Town Treasure** is a collaborative full-stack web application developed to provide users with a convenient way to explore a town or city and discover the services and experiences available around them.

The platform brings different travel and city-exploration functionalities together into one application. Users can navigate through the platform, explore city-related services, access booking functionality, and use authentication features to interact with the application.

The frontend is developed using **React.js** and **Tailwind CSS**, providing a responsive and component-based user interface. The backend is built using **Java and Spring Boot**, which provides the application's backend APIs and business logic. **JWT (JSON Web Token)** is used as part of the authentication system.

The project was developed collaboratively, with different team members responsible for different modules of the application.

---

## 🎯 Problem Statement

When planning a visit to a new city or exploring their own city, users often need to search across multiple platforms for information about attractions, services, and travel-related facilities.

Town Treasure aims to bring these different functionalities together into a centralized platform where users can:

- Explore cities and available services
- Discover attractions and landmarks
- Access travel and booking services
- Create an account and securely log in
- Navigate between different city-related features
- Access information through a simple and responsive interface

---

## 💡 Project Objectives

The main objectives of Town Treasure are:

- Build a centralized city exploration platform.
- Provide an easy-to-use interface for discovering city services.
- Provide access to travel and booking-related functionality.
- Implement secure user authentication.
- Build a responsive and modern frontend.
- Develop a structured full-stack application using React and Spring Boot.
- Enable multiple application modules to work together through a unified interface.

---

# ✨ Features

## 🏠 Home Page

The home page acts as the primary entry point to the application.

It provides users with access to the major features of Town Treasure and allows them to navigate to different sections of the platform.

---

## 🗺️ Explore City Services

The city exploration module allows users to discover different services and places available in a city.

Users can explore:

- Attractions
- Landmarks
- City services
- Travel-related information
- Places of interest

The goal is to make discovering a city easier from a single platform.

---

## 🏨 Booking Services

Town Treasure includes a booking-services module that allows users to explore available travel-related services.

The module is designed to provide users with a convenient way to access available services through the platform.

---

## 🔐 Authentication

The application includes user authentication functionality.

### Authentication features include:

- User Signup
- User Login
- JWT-based authentication
- Secure authentication flow
- Protected application functionality

JWT allows the application to securely manage authenticated users between the frontend and backend.

---

## 🧭 Navigation

The application includes a centralized and responsive navigation system.

The Navbar provides access to important sections such as:

- Home
- Explore
- Booking Services
- About Us
- Contact Us
- Authentication

---

## ℹ️ About Us

The About Us section provides information about the Town Treasure platform, its purpose, and the idea behind the project.

---

## 📞 Contact Us

The Contact Us section provides users with an accessible interface for contacting or reaching the platform.

The page was designed with a responsive layout and integrated into the overall navigation structure.

---

# 👨‍💻 My Contribution — Atul Gond

I worked primarily on the **frontend development, navigation, informational pages, responsive UI, and module integration** of Town Treasure.

## 🧭 Navbar & Navigation

I designed and developed the main navigation system of the application.

My work included:

- Designing the main Navbar.
- Implementing navigation links between application sections.
- Integrating the Navbar across different pages.
- Creating a responsive navigation experience.
- Maintaining consistent navigation throughout the application.
- Integrating navigation with modules developed by other team members.

---

## 📞 Contact Us Module

I developed the Contact Us section of the application.

My contribution included:

- Designing the Contact Us page layout.
- Developing the required React components.
- Structuring the page content.
- Implementing responsive styling.
- Using Tailwind CSS for UI development.
- Integrating the page with the application's navigation.

---

## ℹ️ About Us Module

I designed and developed the About Us section.

My contribution included:

- Creating the page structure.
- Developing reusable React components.
- Organizing the project information.
- Implementing responsive UI.
- Styling the page using Tailwind CSS.
- Integrating the section with the overall application.

---

## 🎨 Frontend Development & UI Integration

In addition to my individual modules, I worked on integrating my frontend components with the rest of the application.

My work included:

- Developing reusable React components.
- Implementing responsive layouts.
- Using Tailwind CSS for styling.
- Maintaining UI consistency.
- Integrating different frontend modules.
- Testing navigation between application sections.
- Fixing frontend and UI integration issues.
- Coordinating with team members during development.

---

# 👥 Team Contributions

| Team Member | Contribution |
|-------------|--------------|
| **Atul Gond** | Navbar, Contact Us, About Us, Frontend UI & Integration |
| **Ashwini Kumar Singh** | Home Page & JWT Authentication |
| **Pratush Shyam Gupta** | Login & Signup |
| **Akshay Kumar** | Booking Services |
| **Shrishti Dubey** | Exploring City Services |

---

# 🏗️ System Architecture

Town Treasure follows a frontend-backend architecture where the React frontend communicates with the Spring Boot backend through APIs.

```text
                         ┌─────────────────┐
                         │      User       │
                         └────────┬────────┘
                                  │
                                  ▼
                    ┌─────────────────────────┐
                    │     React Frontend      │
                    │                         │
                    │  Home                   │
                    │  Explore Services       │
                    │  Booking Services       │
                    │  About Us               │
                    │  Contact Us             │
                    │  Login / Signup         │
                    │  Navbar                 │
                    └────────────┬────────────┘
                                 │
                              REST APIs
                                 │
                                 ▼
                    ┌─────────────────────────┐
                    │     Spring Boot        │
                    │        Backend          │
                    │                         │
                    │  API Layer              │
                    │  Business Logic         │
                    │  Authentication         │
                    └────────────┬────────────┘
                                 │
                                 ▼
                    ┌─────────────────────────┐
                    │   JWT Authentication    │
                    └─────────────────────────┘
