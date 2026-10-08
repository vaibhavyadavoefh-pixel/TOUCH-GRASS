# 🌱 Campus Grass Challenge

> **The goal isn't to use this app more. The goal is to use it less.**

Campus Grass Challenge is a simple gamified web app designed to encourage students to spend less time on screens and more time interacting with the real world.

Instead of trying to track everything automatically, the app uses **honest self-reporting, daily challenges, XP, streaks, and a campus leaderboard** to turn going outside into a small competition.

---

## 🎯 The Problem

College students spend a significant amount of time on their phones and laptops.

Most digital wellness apps respond by giving users **another app to look at**.

Campus Grass Challenge takes a different approach:

**Use the screen briefly → complete a real-world challenge → close the app → go outside.**

The browser also cannot reliably access a user's device-level screen-time data, so instead of requesting invasive permissions, the user simply logs their screen time manually.

> **Privacy over surveillance.**

---

## 💡 Our Solution

Campus Grass Challenge gives students **7 simple daily challenges** designed around real-world activities.

Examples:

* 🚶 Walk outside for 15 minutes
* 🍱 Eat one meal without your phone
* 🗣️ Talk to someone face-to-face
* 🌳 Spend 20 minutes in an open area
* 🛣️ Take a different route to class
* 👀 Find something you've never noticed before
* 📵 Spend 30 minutes completely screen-free

Each completed challenge gives XP.

Complete all seven and increase your streak.

Compete with other students on the campus leaderboard.

---

## ✨ Features

### 🌱 Daily Grass Challenges

Seven simple challenges encourage students to step away from their screens and interact with their surroundings.

### 🏆 XP & Gamification

Every challenge rewards XP.

Completing the entire day gives a larger XP bonus.

### 🔥 Streak System

Students can maintain a daily streak by completing their challenges.

### 📊 Campus Leaderboard

Students can compare their Grass XP and compete with friends.

### 📱 Manual Screen-Time Logging

Users enter their daily screen time themselves.

No device-level surveillance or invasive permissions are required.

### 🎨 Minimal Dark UI

The interface uses a dark outdoor-tech aesthetic with neon green accents to create a modern hackathon-style experience.

### 📱 Responsive

The interface works on desktop and mobile screens.

---

## 🧠 Why Manual Screen-Time?

A normal browser cannot simply read a user's Android Digital Wellbeing or iOS Screen Time data.

Instead of trying to bypass platform privacy restrictions, Campus Grass Challenge uses:

**Self-reporting → Trust → Privacy**

The user decides what to report.

This keeps the prototype simple while avoiding unnecessary access to personal device data.

---

## 🛠️ Tech Stack

| Technology   | Purpose                            |
| ------------ | ---------------------------------- |
| HTML5        | Application structure              |
| CSS3         | UI, layout and animations          |
| JavaScript   | Interactions and application logic |
| Google Fonts | Typography                         |

No frameworks are required.

No backend is required for the current prototype.

---

## 📁 Project Structure

```text
Campus-Grass-Challenge/
│
├── index.html
├── style.css
├── script.js
└── README.md
```

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/YOUR-USERNAME/campus-grass-challenge.git
```

### 2. Open the project

```bash
cd campus-grass-challenge
```

### 3. Run the application

Simply open:

```text
index.html
```

in a browser.

Alternatively, use the **Live Server** extension in VS Code.

---

## 🎮 How It Works

```text
        OPEN APP
           ↓
   VIEW DAILY CHALLENGES
           ↓
   COMPLETE REAL-WORLD TASKS
           ↓
        EARN XP
           ↓
     UPDATE STREAK
           ↓
   COMPETE ON LEADERBOARD
           ↓
       CLOSE APP
           ↓
      🌱 TOUCH GRASS
```

The app intentionally keeps the digital interaction short.

---

## 🌍 The "Touch Grass" Philosophy

Most apps try to maximize:

**Screen Time → Engagement → More Screen Time**

Campus Grass Challenge tries to create:

**Short Interaction → Real-World Action → Close App**

The success of the product is therefore **not measured by how long someone stays inside the app.**

It's measured by whether they actually leave it.

> **The best session is the one where you don't use our app.**

---

## 🔐 Privacy

Campus Grass Challenge follows a privacy-first approach.

The current prototype:

* Does not access device screen-time APIs
* Does not track GPS location
* Does not require camera permissions
* Does not require user accounts
* Does not send personal activity data to a server

Screen time is entered manually by the user.

---

## 🔮 Future Scope

The prototype can be expanded into a full campus platform.

### 🤖 Local Open-Source AI

Integrate an open-weight model running locally to generate personalized challenges.

For example:

```text
User preferences
      ↓
Local AI model
      ↓
Personalized outdoor challenge
      ↓
Real-world activity
```

This would allow the system to generate different challenges depending on:

* Available time
* Weather
* Campus environment
* User interests
* Previous challenges
* Difficulty level

### 🗺️ Campus Exploration

Generate challenges based on different areas of campus.

### 👥 Friends & Teams

Allow students to create groups and compete together.

### 🏅 Campus Events

Universities could run weekly:

**"Touch Grass Week"**

with campus-wide rankings and rewards.

### 📈 Analytics

Show users trends such as:

* Screen-time changes
* Outdoor activity
* Challenge completion
* Streak history
* Weekly XP

---

## 🧪 Current Prototype

This project is currently a **frontend proof-of-concept**.

The following functionality is implemented:

* Challenge checklist
* Dynamic progress tracking
* XP system
* Streak system
* Manual screen-time logging
* Leaderboard UI
* Completion notifications
* Responsive interface

Backend authentication, persistent databases, real campus users and real-time leaderboards can be added in future versions.

---

## 🤝 Contributing

Contributions are welcome.

If you have an idea for a better challenge, UI improvement, or new gamification mechanic:

1. Fork the repository
2. Create a new branch
3. Make your changes
4. Commit your changes
5. Open a Pull Request

---

## 📜 License

This project is open source and can be modified and extended for educational and hackathon purposes.

---

## 👨‍💻 Built For

**Touch Grass Challenge**

Built with one simple idea:

> **Put the phone down.
> Step outside.
> Touch grass. 🌱**
