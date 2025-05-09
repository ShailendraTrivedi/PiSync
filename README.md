# How to Run the Project
### 1. Clone the Repository:
* git clone https://github.com/ShailendraTrivedi/PiSync
* cd PiSync

### 2. Start the Backend (Node.js + Express):
* cd backend
* npm install
* npm start

### 3. Start the Frontend (React + Vite):
* cd frontend
* npm install
* npm run dev

# Scaling Plan: For 50,000+ Devices

### 1. Backend Upgrades
* Use Redis (a caching system) to quickly load frequently accessed data like sync errors.
* Add real-time updates using WebSockets or Server-Sent Events (SSE) so sync status updates appear instantly.
* Update /devices endpoint to support pagination, filters:
GET /api/devices?page=2&status=Failed&search=device-102

### 2. Frontend Upgrades
* Filter by syncStatus, lastSyncTime, location, etc.
* Add loading spinners and debounce inputs.