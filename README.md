# 📍 MatzipApp

**MatzipApp** is a full-stack mobile application that helps users create and manage their own restaurant map. This project covers frontend and backend development, providing a structured and scalable solution.

## 🚀 Tech Stack

### **Frontend**
The mobile application is built with **React Native** and **TypeScript**, utilizing the following key libraries:
- **Navigation**: `@react-navigation/native`, `@react-navigation/stack`, `@react-navigation/drawer`
- **State Management**: `zustand`
- **Data Fetching & Caching**: `@tanstack/react-query`
- **Networking**: `axios`
- **Storage**: `react-native-encrypted-storage`
- **Animations & Gestures**: `react-native-reanimated`, `react-native-gesture-handler`
- **UI Optimizations**: `react-native-safe-area-context`, `react-native-screens`

### **Backend**
The backend is developed using **NestJS**, following a modular and scalable architecture. Key dependencies include:
- **Database**: `PostgreSQL` with `TypeORM`
- **Authentication**: `@nestjs/jwt`, `passport`, `passport-jwt`
- **File Storage**: `@aws-sdk/client-s3`
- **Validation & Transformation**: `class-validator`, `class-transformer`
- **Networking**: `axios`
- **Process Management**: `pm2`
- **Environment Handling**: `cross-env`, `@nestjs/config`

## 📂 Project Structure

### **Frontend (`MatzipApp/`)**
- `src/`
  - `components/` – Reusable UI components
  - `screens/` – App screens
  - `navigation/` – Navigation setup
  - `hooks/` – Custom React hooks
  - `services/` – API and async functions
  - `store/` – Zustand state management
  - `utils/` – Helper functions

### **Backend (`matzip-server/`)**
- `src/`
  - `modules/` – Feature-based modules
  - `controllers/` – Handles incoming requests
  - `services/` – Business logic
  - `entities/` – Database models
  - `middleware/` – Custom middleware
  - `config/` – Configuration files

## 🛠️ Setup & Installation

### **Frontend Setup**
1. Clone the repository:
   ```bash
   git clone https://github.com/your-repo/MatzipApp.git
   cd front
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the project:
   - For Android:
     ```bash
     npm run android
     ```
   - For iOS:
     ```bash
     npm run ios
     ```
4. Start the Metro bundler:
   ```bash
   npm start
   ```

### **Backend Setup**
1. Clone the backend repository:
   ```bash
   git clone https://github.com/your-repo/MatzipApp.git
   cd server
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Configure environment variables:
   ```bash
   cp .env.example .env
   ```
4. Run the development server:
   ```bash
   npm run start:dev
   ```

## ✅ Features
- 📍 **Interactive Restaurant Map** – Users can mark and categorize restaurants
- 🔍 **Search & Filter** – Find restaurants easily based on categories and tags
- 🗂️ **User Authentication** – Secure login with JWT
- 💾 **Persistent Storage** – Save user preferences securely
- 🔄 **Offline Support** – Cached data for seamless experience

## 📝 Contributing
We welcome contributions! Please follow these steps:
1. Fork the repository
2. Create a feature branch (`git checkout -b feature-name`)
3. Commit your changes (`git commit -m "Add new feature"`)
4. Push to your branch (`git push origin feature-name`)
5. Create a pull request

## 📜 License
This project is licensed under the **UNLICENSED** license.

---

이제 깃허브에 올려서 프로젝트를 알릴 준비가 되었어! 추가 수정이 필요하면 말해줘 😊
