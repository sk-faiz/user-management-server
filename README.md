User Management Backend with Node.js, Prisma, and PostgreSQL

Live API Endpoint: https://user-management-server-iejx.onrender.com/api/user

This is a simple yet scalable CRUD application designed for managing users. The backend is built using Node.js, Prisma ORM, and a PostgreSQL database, with a free PostgreSQL instance provided by Aiven for cloud-based database management. It follows best practices for a modular, extensible, and secure system.

Key Features:

  Dynamic API Routing: Utilizes a folder-based structure for flexible API routing, allowing easy addition of new resources and endpoints.

  Modular Architecture: Scalable and maintainable design, ideal for future extensions and features, with clear separation of concerns.

  PostgreSQL Integration with Prisma ORM: Provides seamless interaction with a PostgreSQL database using Prisma for simplified query handling and schema management.

  Secure Password Handling: Implements bcrypt for hashing and securely storing user passwords, ensuring sensitive data protection.

  API Validation Middleware: Uses the express-validator package for input validation and sanitation, preventing common API vulnerabilities.

Setup Instructions: 
  
  Prerequisites: Node.js (Recommended version: 18.x or higher), Prisma ORM, Git

  Step: 1) Clone the repository (if not already done)
        2) Install dependencies (npm i)
        3) Start the development server (npm start)

Deployment: 
The application is deployed on Render, providing a fast and reliable hosting solution for your Node.js server.

Live API Endpoint: https://user-management-server-iejx.onrender.com/api/user
