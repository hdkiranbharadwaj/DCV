# DCV

### Dynamic CV

## Description
DCV is a web application that allows users to create and manage their dynamic curriculum vitae (CV) online. It provides features for users to upload their resumes, update personal details, and showcase their professional experience and skills and share and maintain it dynamically.

## Features
- User authentication: Sign up and login functionality for users.
- Profile management: Users can feed their personal details such as name, contact information and email.
- Resume upload: Users can upload their resumes in pdf format.
- File management: Ability to view, download, and change uploaded resumes.
- Security: Passwords are hashed for security, and user authentication tokens are used for secure sessions.

## Technologies Used
- Node.js
- Express.js
- PostgreSQL
- React.js (for the frontend, if applicable)
- bcrypt (for password hashing)
- JWT (JSON Web Tokens) for authentication
- Multer (for file uploads)
- Other libraries and frameworks as needed

## Installation
1. Clone the repository: `git clone https://github.com/hdkiranbharadwaj/DCV/tree/main/DCV`
2. Install dependencies: `npm install`
3. Set up environment variables: Create a `.env` file and add your environment variables (e.g., database credentials, secret keys).

## Server SetUp
1. Run the following commands,
2. `cd server`
3. `nodemon server.js`

## Client SetUp
1. Run the following commands,
2. `cd client`
3. `npm start`

## Database SetUp
1. Install and Configure PosgreSQL.
2. Run the queries from server/data.sql in the postgreSQL console.
3. Set the database password in environment variable as `PASSWORD`.
   
## Usage
1. Access the application through a web browser or API testing tool like postman.
2. Sign up for a new account or log in with existing credentials.
3. Explore and use the various features of the application.

## Configuration
- Configure the database connection in `db.js`.
- Update `.env` file with your environment variables for the database password as `PASSWORD`.

## Contributing
Contributions are welcome! Please fork the repository and submit pull requests.



---
---
# Overview (Proposal AS IS)
**1. Executive Summary:**
The proposed project seeks to create a comprehensive and innovative Dynamic CV Platform, allowing users to craft dynamic and personalized CVs to showcase their professional skills and experiences. By offering a range of features such as customizable templates, privacy controls, shareable links, and analytics, the platform aims to redefine the way individuals present themselves in the professional world.

**2. Project Objectives:**
- Develop a user-friendly web application that enables users to create, customize, and host dynamic CVs.
- Provide a seamless user experience across different devices.
- Implement advanced customization options to suit various industries and personal preferences.
- Offer privacy settings to control access to CVs, including public and private modes.
- Deliver a comprehensive analytics dashboard for users to track CV views and engagement.
- Ensure robust data security through reliable authentication and access controls.

**3. Scope:**
The scope of the project includes the design and development of a full-stack web application featuring:
- User registration and authentication system with password recovery mechanisms.
- Dynamic CV creation tools encompassing text, multimedia, and interactive elements.
- Customizable templates, color schemes, fonts, and styling options.
- Public and private CV modes with customizable privacy settings and shareable links.
- An analytics dashboard displaying user engagement metrics, including CV views and interactions.
- User profile management and settings for personalization.

**4. Technology Stack:**
The project will be executed using the following technology stack:
- **Front-End:**
  - React.js for building the interactive user interface.
  - Redux for state management.
  - Material-UI for consistent and appealing UI components.
  
- **Back-End:**
  - Node.js with Express.js for the server-side development.
  - MongoDB for the scalable and flexible database.
  - Passport.js for robust user authentication and authorization.
  
- **Hosting and Deployment:**
  - AWS (Amazon Web Services) for hosting and server deployment.
  - Amazon S3 for efficient media storage and delivery.
  
- **Security:**
  - Secure password hashing using bcrypt.
  - JWT (JSON Web Tokens) for user authentication and session management.
  
- **Analytics:**
  - Integration with Google Analytics for comprehensive user engagement insights.

**5. Deliverables:**
- A fully functional Dynamic CV Platform meeting the specified features and requirements.
- Comprehensive documentation outlining system architecture, API endpoints, and deployment processes.
- Detailed user guides for seamless onboarding and utilization.
- Continuous maintenance, updates, and improvements post-launch.

**6. Project Timeline:**
- **Planning and Design (2 Days)**
  - Detailed requirement gathering and analysis.
  - UI/UX design, including wireframes and mockups.
  
- **Development (7 Days)**
  - Set up development environments and databases.
  - Implement user registration and authentication system.
  - Develop CV creation tools with dynamic editing capabilities.
  - Integrate customizable templates and styling options.
  - Implement public and private CV modes with shareable links.
  - Design and develop the analytics dashboard.
  
- **Testing and Quality Assurance (2 Days)**
  - Rigorous testing, debugging, and performance optimization.
  - Cross-device and cross-browser compatibility testing.
  
- **Deployment and Launch (1 week)**
  - Deploy the application to AWS servers.
  - Conduct final testing and quality assurance.
  - Launch the platform to the public.

**7. Conclusion:**
The Dynamic CV Platform project aims to revolutionize how professionals present themselves by offering an advanced and interactive approach to crafting CVs. By delivering a secure, user-friendly, and feature-rich platform, we aspire to empower users to stand out in their professional endeavors. I am excited to spearhead this project and to contribute to the creation of a cutting-edge platform that transforms the CV creation process.
