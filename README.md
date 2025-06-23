---

🍲 Paaji's Restaurant Website

A sleek, modern, and fully responsive web application for a restaurant, built with Next.js and styled using Tailwind CSS. Designed for performance, image optimization, and seamless user experience.


---

📌 Table of Contents

🌐 Demo

✨ Features

🛠️ Tech Stack

🚀 Getting Started

🧪 Development

🏗️ Production Build

🌍 Deployment

📁 Project Structure

🖼️ Image Management

🎨 UI Highlights

🤝 Contributing

📄 License



---

🌐 Demo

🔗 Live Site: https://paajis.onrender.com


---

✨ Features

Sticky header & navigation

Fully responsive UI powered by Tailwind CSS

Optimized images using Next/Image

Integrated favicon and logo

SEO-friendly markup and metadata

Fast static asset delivery from /public



---

🛠️ Tech Stack

Technology	Description

Next.js	React framework for production-ready web apps
Tailwind CSS	Utility-first CSS framework
Next/Image	Automatic image optimization
Render / Vercel	Cloud deployment platforms
ESLint + Prettier	Code linting and formatting tools



---

🚀 Getting Started

1. Clone the Repository

git clone https://github.com/your-org/paajis-website.git
cd paajis-website

2. Install Dependencies

npm install
# or
yarn install

3. Setup Environment Variables

Copy the .env.example to .env.local and update it as needed:

NEXT_PUBLIC_API_URL=https://api.yoursite.com


---

🧪 Development

To run the development server:

npm run dev
# or
yarn dev

Navigate to: http://localhost:3000


---

🏗️ Production Build

To build and run the project in production mode:

npm run build
npm run start
# or
yarn build
yarn start


---

🌍 Deployment

Supported Platforms: Vercel and Render

Ensure correct root directory setup.

Set environment variables via platform dashboard.

Use the default build command: npm run build

Serve with: npm start



---

📁 Project Structure

/
├── public/                 
│   ├── favicon.ico         
│   ├── logo.jpeg           
│   └── img/                
│       └── Honey_Garlic_Chicken.jpg
├── src/                    
│   ├── components/         
│   ├── pages/              ← (or app/ for App Router)
│   └── styles/             
├── .eslintrc.js            
├── next.config.js          
├── postcss.config.js       
├── tailwind.config.js      
└── package.json


---

🖼️ Image Management

Store all images inside the /public directory (not src/).

Use Next/Image for optimized rendering.


import Image from 'next/image';

<Image 
  src="/img/Honey_Garlic_Chicken.jpg" 
  alt="Honey Garlic Chicken" 
  width={500} 
  height={300} 
/>

🔁 Rename files to avoid spaces (e.g., Honey_Garlic_Chicken.jpg), and reference them without the /public prefix.


---

🎨 UI Highlights

✨ Animated Logo — Hover-pulse effect on the brand logo

📸 Optimized Images — Faster page loads with lightweight assets

🔍 Sticky Navbar — Persistent top navigation

🎯 Tailwind Styling — Utility classes for scalable components

🖼️ Favicon Support — Clean browser tab branding



---

🤝 Contributing

Love food and frontend? You’re welcome to contribute!

1. Fork the repo


2. Create your feature branch


3. Make changes & commit


4. Submit a pull request 🚀



git checkout -b feature/my-new-feature
git commit -m "Add: Awesome new feature"
git push origin feature/my-new-feature


