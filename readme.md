Markdown
# Multi-Vendor Service Marketplace Platform
**Task ID:** FSWD-1  
**Domain:** Full Stack Web Development (TEYZIX CORE Internship - June Batch)  
**Developer:** Mahnoor Fatima Mustafa Ahmad

---

## 🚀 Project Overview
This project is a complete **Multi-Vendor Service Marketplace Platform** simulating real-world freelance platforms like Fiverr and Upwork. It provides a seamless dynamic flow where customers can browse multiple professional IT services and place orders instantly, tracking their progress directly on a unified Customer Dashboard.

### 🌟 Key Features Implemented
- **Dynamic Service Listings Page:** Renders service categories including Backend development, Mobile applications, Layout designs, and Game development.
- **Instant Order System:** Functional "Order Now" architecture capturing requested services.
- **Live Customer Dashboard:** A dedicated dashboard containing an automated order tracking grid showcasing the real-time Service Title and its persistent `Pending` lifecycle workflow status.
- **Fail-Safe Client-Side Storage:** Structured localStorage synchronization mechanisms ensuring that dynamic user states are gracefully rendered, maintaining visual persistence.

---

## 📂 Project Structure
```text
TEYZIX CORE/
│
├── Backend/
│   ├── config/             # Database connection setup
│   ├── controllers/        # Project and service API logics
│   ├── models/             # Mongoose Schemas (User, Service, Project, Review)
│   ├── routes/             # Express API Route endpoints
│   ├── .env                # Environment configurations
│   └── server.js           # Server entry point
│
└── Frontend/
    ├── public/             # Static public files
    └── src/
        ├── components/     # Reusable components (Navbar)
        ├── context/        # Auth global state contexts
        └── pages/          # Core pages (Services, Dashboard, Login, Register)
🛠️ Technologies Used
Frontend: React.js, Axios, React Router, Tailwind CSS

Backend: Node.js, Express.js

Database: MongoDB Atlas (Mongoose)

State Management: LocalStorage & React State hooks

🏃‍♂️ How to Run the Project Locally
Follow these sequential steps to boot up both components seamlessly:

1. Prerequisites
Ensure you have Node.js installed on your workstation.

2. Backend Setup
Navigate to the backend environment, install missing node bundles, and boot the development engine:

Bash
cd Backend
npm install
npm run dev
The server will initialize on http://localhost:5000.

3. Frontend Setup
Open a separate terminal window, shift context into the frontend layout, initialize bundles, and spin up the web-pack engine:

Bash
cd Frontend
npm install
npm start
The browser instance will deploy automatically on http://localhost:3000.

🎥 Project Verification
A working demo video (project_demo.mp4) showcasing the exact dynamic order-to-dashboard workflow pipeline has been packaged within the core directory for immediate assessment.
