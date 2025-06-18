// frontend/src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TalentManagement from './pages/admin/talents/TalentManagement';
import UserManagement from './pages/admin/users/UserManagement';
import AdminLayout from './components/admin/AdminLayout';
import UserLayout from './components/user/UserLayout';
import Home from './front-end/Home';
import Contact from './front-end/Contact';

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
        {/* Default route redirect */}
        <Route path="/" element={<UserLayout><Home /></UserLayout>} />
        <Route path="/contact" element={<UserLayout><Contact /></UserLayout>} />
      </Routes>
    </Router>
  );
}

export default App;