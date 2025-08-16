import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import ErrorBoundary from './components/ErrorBoundary.jsx';
import HomePage from './Pages/HomePage.jsx';
import MenuPage from './pages/MenuPage.jsx';
import AboutPage from './Pages/AboutPage.jsx';
import ContactPage from './pages/ContactPage.jsx';
import Login from './Pages/Admin/Login.jsx';
import Dashboard from './Pages/Admin/Dashboard.jsx';
import Categories from './Pages/Admin/Categories.jsx';
import Items from './Pages/Admin/Items.jsx';
import Footer from './components/Footer.jsx';
import AdminWarningToast from './pages/Admin/AdminWarningToast.jsx';
import './styles/globals.css';

// helper: list of admin routes
const ADMIN_ROUTES = [
  '/admin/login',
  '/admin/dashboard',
  '/admin/categories',
  '/admin/items',
];

// Simulate admin check, replace with real logic
const isAdmin = false;

function AppContent() {
  const location = useLocation();
  const [showToast, setShowToast] = useState(false);

  React.useEffect(() => {
    // Show toast if on an admin route and not admin
    if (ADMIN_ROUTES.includes(location.pathname) && !isAdmin) {
      setShowToast(true);
    } else {
      setShowToast(false);
    }
  }, [location]);

  return (
    <>
      <ErrorBoundary>
        <main style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/menu" element={<MenuPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/admin/login" element={<Login />} />
            <Route path="/admin/dashboard" element={<Dashboard />} />
            <Route path="/admin/categories" element={<Categories />} />
            <Route path="/admin/items" element={<Items />} />
          </Routes>
        </main>
      </ErrorBoundary>
      <AdminWarningToast show={showToast} onClose={() => setShowToast(false)} />
      <Footer />
    </>
  );
}

function App() {
  return (
    <Router>
      <div
        style={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          background: '#fff',
        }}
      >
        <AppContent />
      </div>
    </Router>
  );
}

export default App;