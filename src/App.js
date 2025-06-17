// frontend/src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import TalentManagement from './pages/admin/talents/TalentManagement';
import UserManagement from './pages/admin/users/UserManagement';
import AdminLayout from './components/admin/AdminLayout';

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
        <Route path="/" element={<Navigate to="/admin/talents" replace />} />
      </Routes>
    </Router>
  );
}

export default App;