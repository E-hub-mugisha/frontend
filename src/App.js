// frontend/src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TalentManagement from './pages/admin/talents/TalentManagement';
import UserManagement from './pages/admin/users/UserManagement';
import AdminLayout from './components/admin/AdminLayout';
import UserLayout from './components/user/UserLayout';
import Home from './front-end/Home';
import Contact from './front-end/Contact';
import About from './front-end/About';
import Talents from './front-end/Talents';
import CategoryManagement from './pages/admin/categories/CategoryManagement';
import TalentProfile from './front-end/TalentProfile';

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/admin/talents"
          element={
            <AdminLayout>
              <TalentManagement />
            </AdminLayout>
          }
        />
        <Route
          path="/admin/users"
          element={
            <AdminLayout>
              <UserManagement />
            </AdminLayout>
          }
        />
        <Route
          path="/admin/categories"
          element={
            <AdminLayout>
              <CategoryManagement />
            </AdminLayout>
          }
        />
        {/* Default route redirect */}
        <Route path="/" element={<UserLayout><Home /></UserLayout>} />
        <Route path="/contact" element={<UserLayout><Contact /></UserLayout>} />
        <Route path="/about" element={<UserLayout><About/></UserLayout>} />
        <Route path="/talents" element={<UserLayout><Talents /></UserLayout>} />
        <Route path="/talent/:id" element={<UserLayout><TalentProfile /></UserLayout>} />
      </Routes>
    </Router>
  );
}

export default App;