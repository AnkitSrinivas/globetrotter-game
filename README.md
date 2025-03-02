🌍 Globetrotter - Travel Guessing Game (Backend)
This is the backend for Globetrotter, a travel guessing game where users receive cryptic clues about famous places and must guess the destination. The backend handles API requests, user scores, and stores game data in MongoDB.

🚀 Tech Stack
- Node.js - JavaScript runtime for backend
- Express.js - Fast and lightweight API framework
- MongoDB Atlas - Cloud database
- Mongoose - MongoDB Object Modeling tool
- Cors & dotenv - Middleware for handling cross-origin requests & environment variables
- Render - Free hosting for backend deployment

  🔧 Setup Instructions

  1️⃣ Clone the Repository
    -  git clone https://github.com/YOUR_USERNAME/globetrotter-backend.git
    -  cd globetrotter-backend
    -  npm install
    -  PORT = 5000  # setup PORT in .env
    -  MONGO_URI = your mongo db url # setup your MONGO_URI in .env
    -  npm start or npm run dev ( for dev env)


  📌 API Endpoints
    - GET --> /api/destination/random --> Get a random travel clue
    - POST --> /api/score --> Save user score 

  
