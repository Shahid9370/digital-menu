# 🍽️ Digital Menu Card

A **MERN Stack** based digital restaurant menu application. Customers can browse menu items online by category, image, and price, while admins manage the menu via a secure panel.

<img width="1365" height="647" alt="{243409A0-CAFE-489D-8D46-5CB948C16E40}" src="https://github.com/user-attachments/assets/f688275c-771c-4802-a6e9-698610db5ae5" />

---

## 📌 Features

### Customer Side
- 🏠 **Home Page** – Restaurant name, tagline, welcome image, "View Menu" button.
- 📋 **Menu Page** –  
  - Menu categories (Starters, Main Course, Dessert, Drinks, etc.)
  - Each item includes a photo, name, description, and price.
  - Search bar and filter option.
- ℹ️ **About Us Page** – Restaurant story, chef details, ambience images.
- 📞 **Contact Page** – Address, phone, email, and Google Map embed.

### Admin Side(!Under development)
- Add new menu items.
- Edit existing menu items.
- Delete menu items.
- Manage categories.

---

## 🛠️ Tech Stack

**Frontend:**  
- React.js  
- HTML5, CSS3  
- JavaScript (ES6+)  

**Backend:**  
- Node.js  
- Express.js  

**Database:**  
- MongoDB (Mongoose ORM)  

**Tools & Libraries:**  
- Axios (API requests)  
- React Router DOM (Routing)  
- Multer (Image upload handling)  
- Bootstrap (Styling)

---

## 📂 Project Structure

```plaintext
digital-menu-card/
│
!Under development ├── backend/
│   ├── models/
│   ├── routes/
│   ├── controllers/
│   └── server.js
│
├── frontend/
│   ├── public/
│   │   └── /icon
|   |   |____img
│   ├── src/
│   │   ├── components/
│   │   │   ├── Header.jsx
│   │   │   ├── Footer.jsx
│   │   │   ├── MenuCard.jsx
│   │   │   └── SearchBar.jsx
│   │   ├── pages/
│   │   │   ├── Home.jsx
│   │   │   ├── Menu.jsx
│   │   │   ├── About.jsx
│   │   │   ├── Contact.jsx
│   │   │   └── Admin.jsx
│   │   ├── App.jsx
│   │   └── App.css
│
├── README.md
├── package.json
```

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/your-username/digital-menu-card.git
cd digital-menu-card
```

### 2. Install dependencies

#### Backend
```bash
cd backend
npm install
```

#### Frontend
```bash
cd ../frontend
npm install
```

### 3. Configure environment variables

Create a `.env` file in `backend/` for database and server configuration.

### 4. Run the application

#### Start the backend server
```bash
cd backend
npm start
```

#### Start the frontend
```bash
cd frontend
npm run dev
```

### 5. Open in browser

Visit [http://localhost:5173](http://localhost:5173) to view the app.

---

## 📸 Screenshots

**Menu Page**

[Menu Screenshot]<img width="1366" height="650" alt="Screenshot 2025-08-16 152902" src="https://github.com/user-attachments/assets/1cdd8d71-9bd7-4021-abed-6157e99cba6b" />


---

## ✨ Live Demo

> **Live site:** [https://digital-qr-menu.com](https://digital-qr-menu.netlify.app/)  

---

## 🤝 Contribution

Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

---

## 📄 License

MIT
