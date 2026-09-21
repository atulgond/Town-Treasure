# 🏙️ Town Treasure

### Your Ultimate Town Travel Companion

**Town Treasure** is a full-stack travel and city-exploration platform designed to make discovering, planning, and experiencing a town easier from one place.

The platform brings together **attractions, landmarks, local events, dining, accommodation, transportation, tour packages, interactive maps, itinerary planning, reviews, and travel guides** into a unified travel experience.

---

## 🌟 Overview

Planning a trip often requires switching between multiple platforms to discover places, compare services, plan activities, and manage bookings.

**Town Treasure solves this problem by providing a centralized platform where users can:**

* Discover attractions and landmarks
* Explore local events and experiences
* Find restaurants, cafes, and nightlife
* Explore accommodation and transportation options
* Browse tour packages
* Plan personalized itineraries
* Navigate destinations using interactive maps
* Read and share reviews
* Access travel blogs and destination guides

The goal is to provide a **seamless and convenient digital companion for exploring a town.**

---

## ✨ Key Features

### 🗺️ City Exploration

Discover interesting places and experiences around a town, including:

* Historical landmarks
* Museums
* Parks
* Tourist attractions
* Local experiences
* Popular destinations

Each destination can provide relevant information to help users decide where to go.

---

### 🎉 Local Events

Stay updated with events and activities happening around the town.

Users can discover:

* Festivals
* Concerts
* Cultural events
* Local activities
* Community experiences

---

### 🍽️ Dining & Nightlife

Discover places to eat, relax, and enjoy the local nightlife.

Users can explore:

* Restaurants
* Cafes
* Bars
* Clubs
* Different cuisines
* Various price ranges

---

### 🏨 Accommodation

Explore different accommodation options for a trip.

The platform is designed to support:

* Hotels
* Bed & Breakfasts
* Vacation rentals
* Reviews
* Price comparison
* Booking

---

### 🚕 Transportation

Explore transportation options available within the town.

The platform supports the concept of finding:

* Taxis
* Rental cars
* Bicycles
* Availability information
* Estimated transportation costs

---

### 🎫 Tour Packages

Users can explore curated tour packages based on their interests and available time.

Packages can include:

* Half-day tours
* Full-day tours
* Multi-day tours
* Guided experiences

---

### 🧭 Itinerary Planner

Plan an entire trip from one place.

Users can:

```text
Select Places
      ↓
Organize Activities
      ↓
Schedule Visits
      ↓
Manage Bookings
      ↓
Create Trip Itinerary
```

This helps users organize their travel plans efficiently.

---

### 📍 Interactive Maps

Interactive maps make it easier to discover and navigate destinations.

Users can locate:

* Attractions
* Restaurants
* Services
* Points of interest
* Transportation routes

---

### ⭐ Reviews & Ratings

Users can share their experiences through reviews and ratings.

This creates a community-driven layer that helps travelers make more informed decisions.

---

### 📰 Travel Blogs & Guides

The platform provides travel information through blogs and guides covering:

* Hidden destinations
* Local customs
* Travel tips
* Destination information
* Local experiences

---

### 💬 Customer Support

Users can access support for travel-related questions and booking-related issues.

---

## 🔐 Authentication

Town Treasure includes user authentication functionality for accessing personalized and protected features.

The authentication flow is designed around JWT-based authentication:

```text
             User
               │
               ▼
        Login / Signup
               │
               ▼
        Authentication
               │
               ▼
           JWT Token
               │
               ▼
      Authenticated Requests
               │
               ▼
       Protected Features
```

---

## 🏗️ Architecture

```text
┌─────────────────────────────────────────┐
│               User                      │
└──────────────────┬──────────────────────┘
                   │
                   ▼
┌─────────────────────────────────────────┐
│            React Frontend               │
│                                         │
│  Pages • Components • Navigation        │
│  Exploration • Services • Booking       │
└──────────────────┬──────────────────────┘
                   │
                REST API
                   │
                   ▼
┌─────────────────────────────────────────┐
│           Spring Boot Backend           │
│                                         │
│  Authentication • Business Logic        │
│  Travel Services • Booking Services     │
└──────────────────┬──────────────────────┘
                   │
                   ▼
┌─────────────────────────────────────────┐
│             Data Layer                  │
│                                         │
│ Users • Places • Services • Bookings    │
└─────────────────────────────────────────┘
```

---

## 🛠️ Technology Stack

### Frontend

* **React.js**
* **JavaScript**
* **HTML5**
* **CSS3**
* **Tailwind CSS**

### Backend

* **Java**
* **Spring Boot**
* **REST APIs**
* **JWT Authentication**

### Development Tools

* **Git**
* **GitHub**
* **npm**
* **Maven**

---

## 📂 Project Structure

```text
Town-Treasure/
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── assets/
│   │   └── services/
│   │
│   └── package.json
│
├── backend/
│   ├── src/
│   │   └── main/
│   │       ├── java/
│   │       └── resources/
│   │
│   └── pom.xml
│
├── README.md
└── .gitignore
```

---

## 🚀 Getting Started

### Prerequisites

Make sure the following are installed:

* Node.js
* npm
* Java JDK
* Maven
* Git

### Clone the Repository

```bash
git clone https://github.com/atulgond/Town-Treasure.git

cd Town-Treasure
```

---

### Backend Setup

Navigate to the backend directory:

```bash
cd backend
```

Build the project:

```bash
mvn clean install
```

Start the Spring Boot application:

```bash
mvn spring-boot:run
```

---

### Frontend Setup

Open another terminal and navigate to the frontend:

```bash
cd frontend
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open the URL displayed by the development server in your browser.

---

## 🔄 Application Flow

```text
        ┌───────────────┐
        │     User      │
        └───────┬───────┘
                │
                ▼
        ┌───────────────┐
        │ Login / Signup│
        └───────┬───────┘
                │
                ▼
        ┌───────────────┐
        │ Explore Town  │
        └───────┬───────┘
                │
       ┌────────┼────────┐
       ▼        ▼        ▼
   Attractions Events  Dining
       │        │        │
       └────────┼────────┘
                ▼
        ┌───────────────┐
        │ Plan Itinerary│
        └───────┬───────┘
                │
                ▼
        ┌───────────────┐
        │ Book Services │
        └───────┬───────┘
                │
                ▼
        ┌───────────────┐
        │ Review & Rate │
        └───────────────┘
```

---

## 💡 Problem Statement

Travelers typically rely on multiple applications to:

* Find attractions
* Discover local events
* Search restaurants
* Find accommodation
* Arrange transportation
* Plan itineraries
* Read reviews
* Access travel information

This fragmented experience can make trip planning time-consuming.

### Town Treasure brings these capabilities together into one platform.

The application focuses on creating a **centralized, user-friendly travel ecosystem** where users can discover destinations, plan experiences, and access travel services.

---

## 🎯 Project Goals

* Build a centralized platform for town exploration.
* Simplify travel planning.
* Make destination discovery easier.
* Integrate travel-related services.
* Provide personalized travel experiences.
* Support itinerary planning.
* Create a community-driven review system.
* Provide a scalable full-stack application architecture.

---

## 🔮 Future Enhancements

The platform can be extended with advanced capabilities such as:

* 🤖 AI-powered travel assistant
* 🧠 AI-generated personalized itineraries
* 💳 Online payment integration
* 🌦️ Real-time weather integration
* 📍 Real-time GPS tracking
* 🏨 Live accommodation availability
* 🚕 Real-time transportation tracking
* 🔔 Push notifications
* 💬 AI-powered customer support
* 📱 Dedicated mobile application
* 🌐 Multi-language support

---

## 📚 Key Learning Areas

Town Treasure provides practical experience with:

* Full-stack web development
* React.js
* Component-based architecture
* Responsive UI development
* Tailwind CSS
* Spring Boot
* REST API development
* JWT authentication
* Frontend-backend integration
* Travel and booking workflows
* Application architecture
* Git and GitHub

---

## 👨‍💻 Author

### Atul Gond

**B.Tech — Computer Science & Business**
**IIIT Lucknow**

Interests:

* Software Development
* Full-Stack Development
* Backend Engineering
* Artificial Intelligence
* System Design
* Competitive Programming

---

## ⭐ Project

**Town Treasure**

> **Discover. Explore. Plan. Experience.**

A unified platform designed to make discovering and experiencing a town **simpler, smarter, and more convenient.**
