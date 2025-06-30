# Paaji's Restaurant Website 🍲

A modern, responsive web application built with **Next.js**, featuring optimized images, Tailwind CSS styling, and user-friendly navigation.

## 📌 Table of Contents

- [Demo](##🌐Demo)  
- [Features](#features)  
- [Tech Stack](#tech-stack)  
- [Project Setup](#project-setup)  
- [Development](#development)  
- [Production Build](#production-build)  
- [Deployment](#deployment)  
- [Project Architecture](#folder-structure)  
- [Image Management](#image-management)  
- [Contributing](#contributing)  
- [License](#license)  

---

## 🌐 Demo

🔗 Live Site: https://paajis.onrender.com

---

## ✨ Features

- **Header & Navigation** with sticky behavior  
- **Optimized static assets** served from `/public`  
- **Responsive design** powered by Tailwind CSS  
- **Favicon and logo integration**  
- SEO-friendly markup and metadata

---

## 🛠️ Tech Stack

- **Framework**: Next.js (React)  
- **Styling**: Tailwind CSS  
- **Image Optimization**: Next/Image  
- **Deployment**: Vercel / Render  
- **Linting & Formatting**: ESLint, Prettier  

---

## 🚀 Project Setup

### 1. Clone the repo
```bash
git clone https://github.com/your-org/paajis-website.git
cd paajis-website
```
### 2. Install dependencies
```bash
npm install
# or
yarn install
```
### 3. Environment Variables
If needed, copy .env.example to .env.local and configure required variables:
```init
NEXT_PUBLIC_API_URL=https://api.yoursite.com
```
## 🧪 Development
Run the dev server:
```bash
npm run dev
# or
yarn dev
```
Visit http://localhost:3000 to view the site.

## 🏗️ Production Build
Build and start:

```bash
npm run build
npm run start
# or
yarn build
yarn start
```
## 🌍 Deployment
If deploying on Render or Vercel:

- Ensure the root directory is pointed correctly.

- Set environment variables as needed.

- Builds run npm run build and serve with npm start.

## 📁 Project Architecture
/
├── public/            
│   ├── favicon.ico     
│   ├── logo.jpeg       
│   └── img/            
│       └── Honey_Garlic_Chicken.jpg
├── src/
│   ├── components/     
│   ├── pages/          <-- or app/ for Next.js App Router
│   └── styles/         
├── .eslintrc.js        
├── next.config.js      
├── postcss.config.js   
├── tailwind.config.js  
└── package.json        

## 🖼️ Image Management
Always store images in /public, not in src/.

Example usage:
<Image 
  src="/img/Honey Garlic Chicken.jpg" 
  alt="Honey Garlic Chicken" 
  width={500} 
  height={300} 
/>
Rename files to avoid . (Honey Garlic Chicken.jpg), and reference via root path only (no /public/ prefix).

## 🎨 UI Features
✨ Animated Logo — Header logo with hover animation (pulse effect).

📸 Optimized Images — Fast loading with /public assets.

🔍 Sticky Navbar — Remains accessible while scrolling.

🎯 Tailwind Styled Components — Clean, scalable, and maintainable.

🖼️ Favicon Integration — Appears on browser tabs.


## 🤝 Contributing
Love food & code? Fork this repo, create new features (like online ordering 👨‍🍳), and submit a pull request:
```
git checkout -b feature/my-new-feature
git commit -m 'Add cool feature'
git push origin feature/my-new-feature
```

