# Assignment 3: Registration and Login System

## 📌 Project Overview
This project is a RESTful authentication system built with **Node.js** and **PostgreSQL**. It implements secure user registration and login functionalities, including input validation, error handling, and password hashing.

## 🛠 Tech Stack
* **Server:** Node.js, Express.js
* **Database:** PostgreSQL (using `pg` library)
* **Security:** `bcrypt` (for password hashing)
* **Environment:** `dotenv` (for secure configuration)
* **Frontend:** HTML5, CSS3, Vanilla JavaScript (Responsive Design)

## 📂 Project Structure
The project follows the **MVC (Model-View-Controller)** pattern to separate concerns:

```text
├── config/         # Database connection logic
├── controllers/    # Business logic (handle requests and responses)
├── middleware/     # Validation and Error handling
├── routes/         # API routes definitions
├── public/         # Client-side files (HTML, CSS, JS)
├── .env            # Environment variables (DB credentials)
├── server.js       # Application entry point
└── README.md       # Project documentation
```
🚀 Setup & Installation
1. Prerequisites
Ensure you have Node.js and PostgreSQL installed.

2. Install Dependencies
Run the following command in the project root:

Bash
npm install
3. Database Configuration
Open your PostgreSQL tool (pgAdmin or terminal) and run this SQL command to create the required table:

SQL
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL
);
4. Environment Variables
Create a .env file in the root directory and add your database configuration:

Фрагмент кода
DB_USER=postgres
DB_PASSWORD=your_password
DB_HOST=localhost
DB_PORT=5432
DB_NAME=postgres
PORT=3000
5. Run the Server
Bash
node server.js
The server will start at http://localhost:3000.

📡 API Endpoints
1. Register User
Endpoint: POST /api/register

Description: Creates a new user account.

Body:

JSON
{
  "email": "user@example.com",
  "password": "password123"
}
Validation: Email must be valid; Password must be at least 6 chars.

2. Login User
Endpoint: POST /api/login

Description: Authenticates a user and returns success status.

Body:

JSON
{
  "email": "user@example.com",
  "password": "password123"
}
💡 Design Decisions (Key Concepts)
Why PostgreSQL? I chose PostgreSQL because user data requires a structured schema and strict data integrity (ACID compliance), which is better handled by a Relational Database than NoSQL for this specific use case.

Security (Bcrypt) Passwords are never stored in plain text. I used bcrypt to hash passwords with salt before saving them to the database. This prevents attackers from reading passwords even if the database is compromised.

Middleware Architecture I implemented a dedicated validateAuth middleware. This ensures that invalid data is rejected before it reaches the controller or database, saving server resources.

Separation of Concerns Business logic is isolated in controllers, routing in routes, and configuration in config. This makes the code modular, readable, and easy to maintain.
