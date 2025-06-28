# 🎧 Radio Player App

## Overview

- This is a simple radio player application developed as a personal project. The main goal was to explore how [Capacitor](https://capacitorjs.com/) works. Inspired by the old FM radio apps that came pre-installed on phones, I decided to recreate a similar experience as a practical way to test modern web-to-native tools.

- **Demo for the web app** and **demo for the mobile app** can be downloaded [here](https://github.com/MilenaM06/Radio-Player-App/tree/main/app-demo/final-look-demo).

---

## Technologies Used

- HTML
- CSS
- Vanilla JavaScript
- [Tailwind CSS](https://tailwindcss.com/)
- [Capacitor](https://capacitorjs.com/)

---

## Final Look

### Web App

![radio-player-web](https://github.com/MilenaM06/Radio-Player-App/blob/main/app-demo/final-look-img/radio-player-web.jpg)

### Mobile App

![radio-player-phone](https://github.com/MilenaM06/Radio-Player-App/blob/main/app-demo/final-look-img/radio-player-phone.jpg)

---

## Build and Run

- You can run the Radio Player App either as a **web application** or a **native mobile application** (Android/iOS).

- Start by cloning the repository:

```bash
   git clone https://github.com/MilenaM06/Radio-Player-App.git
```

- ⚠️ Note - Capacitor v7 requires JDK 21 installed for Android builds.

---

### Web App

This app supports running directly in the browser.

**Steps:**

1. Navigate to the project folder

```bash
   cd Radio-Player-App
```

2. Install dependencies

```bash
   npm install
```

3. Build the web app

```bash
   npm run build
```

4. Start the development server

```bash
   npm start
```

---

### Native App (Android/iOS)

You can run the app on Android or iOS using one of two approaches: a quick and user-friendly **IDE method** or a direct **command-line method**.

---

### Option 1: Open in Android Studio or Xcode

**Run on Android using Android Studio:**

1. Open the `android/` folder in Android Studio

2. Wait for Gradle to finish syncing

3. Connect a physical device or start an emulator

4. Click **Run** to build and deploy the app

**Run on iOS using Xcode:**

1. Open the project in Xcode

```bash
   npx cap open ios
```

2. Select a simulator or connected iPhone

3. Press **Run** in Xcode to build and launch the app

---

### Option 2: Run from the Command Line

1. Sync platforms

```bash
npx cap sync
```

2. Run on Android

```bash
npx cap run android
```

3. Run on iOS

```bash
npx cap run ios
```
