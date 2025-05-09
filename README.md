# 🏏 Activity Booking App Backend

A RESTful API built with Node.js, Express, and MongoDB for booking activities like cricket matches, movie nights, and more. This project is part of the Backend Developer Internship assignment at MeetX.

---

## 🚀 Live API URL

👉 [https://activity-booking-app-wnu2.onrender.com](https://activity-booking-app-wnu2.onrender.com)

---

## 📮 Postman Collection

👉 [Download Postman Collection](./Activity_Booking_App.postman_collection.json)

---

## 🛠 Tech Stack

- **Backend:** Node.js, Express.js
- **Database:** MongoDB (via MongoDB Atlas)
- **Authentication:** JWT (JSON Web Tokens)
- **Password Encryption:** bcrypt
- **Validation:** express-validator (optional)
- **Hosting:** Render.com

---

## 📦 Features

- 🔐 User Registration & Login with JWT
- 📋 Public listing of available activities
- ✅ Authenticated activity booking
- 🧾 View all your personal bookings
- 💾 MongoDB integration using Mongoose
- 🧼 Clean project structure (routes/controllers/models)

---

## 🧪 API Endpoints

| Method | Endpoint                        | Description                     | Auth Required |
|--------|----------------------------------|----------------------------------|----------------|
| POST   | `/api/users/register`           | Register a new user             | ❌             |
| POST   | `/api/users/login`              | Login user & get JWT token      | ❌             |
| GET    | `/api/activities`               | List all activities             | ❌             |
| POST   | `/api/bookings/:activityId`     | Book an activity                | ✅             |
| GET    | `/api/bookings/me`              | View user's booked activities   | ✅             |

---

## 📁 Project Structure
    activity-booking-app/
    ├── controllers/
    ├── models/
    ├── routes/
    ├── middlewares/
    ├── config/
    ├── .env.example
    ├── app.js
    ├── server.js
    └── README.md

## 🔧 Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/prakashwaddar628/activity-booking-app.git
   cd activity-booking-app

2. **Install dependencies**
    npm install

3. **Create .env file**
    PORT=5000
    MONGO_URI=your_mongodb_connection_string
    JWT_SECRET=your_jwt_secret

4. **Start the server**
    npx nodemon server.js

✅ Sample MongoDB Activity Document
    {
      "title": "Cricket Match",
      "description": "Local cricket league final",
      "location": "Stadium A",
      "datetime": "2025-05-15T18:00:00Z"
    }

🧠 Notes
    Keep your .env file secret and never commit it to GitHub.

    The app uses JWT Bearer Token in headers for authenticated routes:

    Authorization: Bearer <token>

🏁 Submission Checklist
    ✅ GitHub repo with clean code

    ✅ .env.example provided

    ✅ Postman collection included

    ✅ Optional: Deployed live on Render

    ✅ README with all necessary documentation

👨‍💻 Developed By
    Prakash L Waddar
    Let me know if you'd like help customizing the links (e.g., GitHub repo or Render URL) or   converting this