# Job Board App

A simple job listing application built with **Vue 3** for the frontend and **json-server** as a mock backend API.  
The backend serves job data stored in a local JSON file (`jobs.json`) and supports basic CRUD operations during development.

---

## Tech Stack

- **Frontend:** Vue 3 + Vite  
- **Backend:** json-server (mock REST API)  
- **Data Storage:** `jobs.json` file  
- **Development:** Vue dev server proxies API calls to json-server for seamless integration

---


 ## Project Structure 
 
 ``` job-portal-frontend-vue/ ├── src/ │ └── jobs.json # Mock data file for json-server backend ├── package.json # Contains scripts to run frontend & backend ├── vite.config.js # Configured with proxy for API requests └── README.md ``` 


---

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/your-username/job-board.git
cd job-board 
```

### 2.  Install Dependencies 
```bash
npm install
```

### 3. Run the mock backend 
- Open two terminal windows or tabs:

- Start the json-server backend:

```bash
npm run server
```

- This will launch json-server to serve src/jobs.json at http://localhost:5000.

### 4. Start the Vue frontend:

```bash
npm run dev
```
- This will start the Vue dev server (usually at http://localhost:3000). API requests prefixed with /api will be proxied to the json-server backend.

