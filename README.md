# Vastra - E-Commerce Platform

Vastra is a modern e-commerce platform built with TypeScript, featuring a React frontend and Express.js backend.

## 🚀 Features

- **Modern Tech Stack**: Built entirely with TypeScript for type safety
- **React Frontend**: Beautiful, responsive UI with Tailwind CSS
- **Express Backend**: RESTful API with in-memory storage
- **Product Catalog**: Browse sarees, dress materials, and t-shirts
- **Responsive Design**: Mobile-first approach for all devices

## 📁 Project Structure

```
vastra/
├── backend/          # Express.js TypeScript backend
│   ├── src/
│   │   ├── server.ts
│   │   └── types.ts
│   ├── package.json
│   └── tsconfig.json
├── frontend/         # React TypeScript frontend
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── data/
│   │   ├── hooks/
│   │   ├── lib/
│   │   └── styles/
│   ├── package.json
│   └── tsconfig.json
└── README.md
```

## 🛠️ Installation

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Backend Setup

```bash
cd backend
npm install
npm run dev
```

The backend will start on `http://localhost:8000`

### Frontend Setup

```bash
cd frontend
npm install
npm start
```

The frontend will start on `http://localhost:3000`

## 🌐 API Endpoints

- `GET /api/` - Health check
- `GET /api/status` - Get all status checks
- `POST /api/status` - Create a new status check

## 🎨 Frontend Components

- **Header** - Navigation and branding
- **HeroSection** - Featured content and offers
- **CategoriesSection** - Product categories
- **FeaturedProducts** - Highlighted products
- **NewArrivals** - Latest products
- **TestimonialsSection** - Customer reviews
- **NewsletterSection** - Email subscription
- **Footer** - Site information and links

## 🔧 Environment Variables

### Backend (.env)

```
MONGO_URL=mongodb://localhost:27017
DB_NAME=vastra_db
CORS_ORIGINS=http://localhost:3000
PORT=8000
```

### Frontend (.env)

```
REACT_APP_BACKEND_URL=http://localhost:8000
```

## 📦 Build for Production

### Backend

```bash
cd backend
npm run build
npm start
```

### Frontend

```bash
cd frontend
npm run build
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is open source and available under the MIT License.

## 🙏 Acknowledgments

- React and the React community
- Express.js
- Tailwind CSS
- All open-source contributors
