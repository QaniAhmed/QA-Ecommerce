# 🛒 Modern Full-Stack E-commerce Platform

A secure, high-performance e-commerce solution with a professional user dashboard, built with React, Node.js, and Supabase.

## 🌐 Live Demo

🔗 Live Website: https://qa-ecommerce-2ikh.onrender.com/

## 🛠 Tech Stack

- **Frontend**: React.js (Vite), Context API, Axios, Material UI.
- **Backend**: Node.js, Express.js.
- **Database/Auth**: Supabase .
- **Security**: HTTP-Only Cookies, CORS, and JWT.

## ✨ Key Features

- **Real-Time Shopping Cart**: Integrated cart system that updates instantly when adding or removing products, providing a seamless user experience.
- **Live Auth Sync**: UI automatically updates to "Welcome, [Name]" upon login without page refreshes.
- **Secure Authentication**: Persistent sessions and HTTP-Only cookies to mitigate XSS attacks.
- **Smart Checkout Summary**: Dedicated checkout page that automatically calculates the subtotal and grand total of all items added to the cart.

## 🚀 Quick Setup

### 1- Backend

```bash
cd server
npm install
# Add SUPABASE_URL and SUPABASE_KEY to .env
node index.js

```

### 2- Frontend

```bash
cd QA_Ecommerce
npm install
npm run dev
```
