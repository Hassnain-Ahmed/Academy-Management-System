# Academy Management System  

The **Academy Management System** is a full-stack web application built using the MERN stack (MongoDB, Express.js, React, Node.js). It is designed to simplify and streamline the management of academic institutions by handling student enrollment, course management, attendance tracking, and more.

---

## Features  
- **Student Management**: Add, update, and manage student records.  
- **Course Management**: Create and assign courses to instructors and students.  
- **Attendance Tracking**: Monitor and update student attendance in real-time.  
- **Performance Evaluation**: Manage and track student grades and progress.  
- **User Roles**: Role-based authentication for administrators, instructors, and students.  

---

## Technologies Used  
- **Frontend**: React.js  
- **Backend**: Node.js with Express.js  
- **Database**: MongoDB  
- **Authentication**: JSON Web Tokens (JWT)  

---

## Installation  

1. Clone the repository:  
   ```bash
   git clone https://github.com/hassnain-ahmed/academy-management-system.git
   ```
2. Navigate to the project directory:  
   ```bash
   cd academy-management-system
   ```
3. Install dependencies for the backend:  
   ```bash
   cd backend  
   npm install
   ```
4. Install dependencies for the frontend:  
   ```bash
   cd ../frontend  
   npm install
   ```
5. Set up environment variables:
   - Create a `.env` file in the `backend` directory.
   - Add the following variables:  
     ```env
     MONGO_URI=your_mongo_database_uri
     JWT_SECRET=your_jwt_secret
     PORT=5000
     ```

---

## Usage  

1. Start the backend server:  
   ```bash
   cd backend  
   npm run start
   ```
2. Start the frontend development server:  
   ```bash
   cd ../frontend  
   npm start dev
   ```
3. Open your browser and visit `http://localhost:5173`.

---

## Folder Structure  

```STRUCTURE
academy-management-system/
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── server.js
│   └── .env
├── frontend/
│   ├── public/
│   ├── src/
│   └── package.json
└── README.md
```

---

## Images
* ![image 1](https://i.imgur.com/PFd5DrN.png)
* ![image 2](https://i.imgur.com/Lw7eZ3T.png)
* ![image 3](https://i.imgur.com/Tl60Svq.png)
* ![image 4](https://i.imgur.com/Zd7zugy.png)
* ![image 5](https://i.imgur.com/Ld6g4GE.png)
* ![image 6](https://i.imgur.com/Xbxn16n.png)

## Contributing  

Contributions are welcome! To contribute:  
1. Fork this repository.  
2. Create a new branch: `git checkout -b feature-name`.  
3. Make your changes and commit: `git commit -m 'Add feature'`.  
4. Push to the branch: `git push origin feature-name`.  
5. Open a pull request.  

---

## License  

This project is licensed under the [MIT License](LICENSE).  

---

## Contact  

For any queries, feel free to contact:  
- Name: Hassnain Ahmed
- Email: dev.hassnain77@gmail.com  
- GitHub: [Hassnain Ahmed](https://github.com/hassnain-ahmed)