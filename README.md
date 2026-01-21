# 🔐 Auth System: Node.js + PostgreSQL

## 📋 Assignment Overview
**Assignment 3:** Creating a Registration and Login System.
This project implements a secure, backend-focused authentication system using **Node.js** and **PostgreSQL**. It features a RESTful API, secure password hashing, server-side validation, and a clean MVC architecture.

---

## 🚀 Features & Requirements Met
This solution addresses all core requirements of the assignment:
* **Backend Framework:** Node.js with Express.
* **Database:** PostgreSQL (Relational DB for structured user data).
* **Security:** Passwords are hashed using `bcrypt` (never stored in plain text).
* **Validation:** Dedicated middleware (`validateAuth`) checks input presence, format, and password length.
* **Architecture:** Code is organized into `routes`, `controllers`, and `middleware`.
* **Frontend:** A responsive HTML/CSS/JS client to demonstrate functionality.

---

## 🛠 Project Structure
The project follows the **MVC (Model-View-Controller)** pattern to ensure clean code and separation of concerns:

```text
my-app/
├── config/         # Database connection logic
├── controllers/    # Business logic (handle requests, talk to DB)
├── middleware/     # Request validation & error handling
├── routes/         # API route definitions
├── public/         # Client-side files (HTML, CSS, JS)
├── .env            # Environment variables (Ignored by Git)
└── server.js       # Entry point

```

---

## ⚙️ Installation & Setup

Since `node_modules` and `.env` are excluded from the repository, please follow these steps to run the project locally.

### 1. Clone & Install Dependencies

Download the project and install the required packages:

```bash
npm install

```

### 2. Database Setup (PostgreSQL)

Ensure PostgreSQL is running. Open your SQL tool (pgAdmin or psql) and run this command to create the required table:

```sql
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL
);

```

### 3. Environment Configuration

Create a file named `.env` in the root directory. Copy and paste the following configuration (replace with your actual DB credentials):

```env
DB_USER=postgres
DB_PASSWORD=your_password
DB_HOST=localhost
DB_PORT=5432
DB_NAME=postgres
PORT=3000

```

### 4. Run the Server

Start the application:

```bash
node server.js

```

> The server will start on **http://localhost:3000**

---

## 📡 API Documentation

### 1. Register User

* **Endpoint:** `POST /api/register`
* **Description:** Creates a new user account.
* **Body:**
```json
{
  "email": "student@example.com",
  "password": "securePassword123"
}

```


* **Responses:**
* `201 Created`: Registration successful.
* `400 Bad Request`: Validation error (e.g., weak password) or email already exists.



### 2. Login User

* **Endpoint:** `POST /api/login`
* **Description:** Authenticates a user and returns their ID.
* **Body:**
```json
{
  "email": "student@example.com",
  "password": "securePassword123"
}

```


* **Responses:**
* `200 OK`: Login successful.
* `401 Unauthorized`: Incorrect email or password.



---

## 💡 Key Design Decisions

*(Required for Defense)*

1. **Why PostgreSQL over MongoDB?**
* Since user data (credentials) is highly structured and requires strict consistency, a Relational Database (SQL) like PostgreSQL is the industry standard for authentication systems.


2. **Middleware Strategy**
* A centralized `validateAuth` middleware was implemented to follow the **DRY (Don't Repeat Yourself)** principle. This keeps the controller logic clean and focused solely on business operations.


3. **Security Measures**
* **Bcrypt:** Used with salt rounds (10) to prevent rainbow table attacks.
* **Environment Variables:** Sensitive data (DB passwords) are stored in `.env` and never hardcoded.
