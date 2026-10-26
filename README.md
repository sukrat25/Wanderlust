# 🌍 Wanderlust — Discover Places to Stay

A full-stack travel listing web application inspired by Airbnb, where users can explore destinations, discover places to stay, create property listings, upload images, and share reviews and ratings.

🔗 **Live Website:** [Wanderlust](https://travelling-project.onrender.com/listings)  
💻 **GitHub Repository:** [sukrat25/Wanderlust](https://github.com/sukrat25/Wanderlust)

---

## ✨ Features

### 🏡 Listing Management
- Browse available travel and accommodation listings.
- View detailed information, including title, description, price, location, country, and images.
- Create new property listings.
- Edit and delete listings with ownership-based authorization.

### 🔐 User Authentication & Authorization
- User registration, login, and logout using Passport.js.
- Secure password authentication using Passport Local and Passport Local Mongoose.
- Session-based authentication with sessions stored in MongoDB.
- Protected routes to restrict actions to authenticated users.
- Ownership verification to control listing modifications.

### ⭐ Reviews & Ratings
- Add reviews and ratings from 1 to 5 stars.
- Display reviews on individual listing pages.
- Delete reviews with author-based authorization.

### ☁️ Image Uploads
- Upload listing images using Multer.
- Store and serve images through Cloudinary.
- Display listing images dynamically.

### 🗺️ Interactive Maps
- Display listing locations using Mapbox GL JS.
- Visualize geographic coordinates on listing detail pages.
- Provide a map-based view to help users understand where a property is located.

### 🛡️ Validation & Error Handling
- Server-side data validation using Joi.
- Centralized error handling with a custom Express error class.
- Asynchronous error handling utilities.
- Flash messages for success and error notifications.
- Session-based user state management.

---

## 🛠️ Tech Stack

| Category | Technologies |
|---|---|
| Frontend | HTML, CSS, JavaScript, Bootstrap |
| Templating | EJS, EJS-Mate |
| Backend | Node.js, Express.js |
| Database | MongoDB, Mongoose |
| Authentication | Passport.js, Passport Local Mongoose |
| Session Management | Express Session, Connect Mongo |
| Image Storage | Cloudinary, Multer |
| Maps | Mapbox GL JS, Mapbox SDK |
| Validation | Joi |
| Deployment | Render |

---

## 🚀 Getting Started

Follow these steps to run Wanderlust locally.

### Prerequisites

- Node.js (the project specifies version `24.18.0`)
- npm
- A MongoDB Atlas database or compatible MongoDB connection
- A Cloudinary account for image uploads
- A Mapbox access token for interactive maps

### 1. Clone the repository

```bash
git clone https://github.com/sukrat25/Wanderlust.git
cd Wanderlust
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure environment variables

Create a `.env` file in the project's root directory and add your own credentials:

```env
ATLASDB_URL=your_mongodb_connection_string
SECRET=your_session_secret

CLOUD_NAME=your_cloudinary_cloud_name
CLOUD_API_KEY=your_cloudinary_api_key
CLOUD_API_SECRET=your_cloudinary_api_secret

MAP_TOKEN=your_mapbox_access_token
```

Replace each placeholder with the corresponding value from your service provider.

**Important:** Never commit your `.env` file or expose database credentials, API secrets, or access tokens in your public repository.

### 4. Start the application

```bash
node app.js
```

The application runs locally at:

```text
http://localhost:8080/listings
```

---

## 📂 Project Structure

```text
Wanderlust/
├── controllers/       # Application logic
├── init/              # Database initialization and sample data
├── models/            # Mongoose data models
├── public/            # CSS, JavaScript, and static assets
├── routes/            # Listing, review, and user routes
├── utils/             # Error handling utilities
├── views/             # EJS templates and layouts
├── app.js             # Application entry point
├── cloudConfig.js     # Cloudinary configuration
├── middleware.js      # Authentication and authorization middleware
├── schema.js          # Joi validation schemas
├── package.json       # Project dependencies
└── README.md
```

---

## 🧠 Key Learning Outcomes

- Developed a full-stack web application using the MVC architectural pattern.
- Implemented authentication, authorization, and persistent session management.
- Designed CRUD workflows and relational references between MongoDB documents.
- Integrated third-party services for cloud image storage and interactive maps.
- Applied server-side validation, middleware, and centralized error handling.
- Deployed a Node.js application on Render.

---

## 🚧 Currently Working On

- **Advanced Listing Filters:** Implementing filters to help users narrow down accommodation listings based on relevant criteria and find suitable places more efficiently.
- **Search Bar Optimization:** Improving search functionality to deliver more relevant listing results and provide a smoother, more intuitive discovery experience.

## 🔮 Future Improvements

Potential enhancements include:

- Advanced search, filtering, and sorting of listings.
- Booking and availability management.
- User profiles and saved/favourite listings.
- Improved listing discovery and pagination.

---

## 👨‍💻 Author

**Sukrat Srivastava**

- GitHub: [@sukrat25](https://github.com/sukrat25)
- Project: [Wanderlust — Live Demo](https://travelling-project.onrender.com/listings)

---

⭐ If you find this project interesting, consider starring the repository!
