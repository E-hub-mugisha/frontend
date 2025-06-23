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
import DashboardManagement from './pages/admin/dashboard/DashboardManagement';
import TalentProfile from './front-end/TalentProfile';
import StoryManagement from './pages/admin/story/StoryManagement';
import StoryCreateEditForm from './pages/admin/story/StoryCreateEditForm';
import StoryDetail from './pages/admin/story/StoryDetail';
import SkillManagement from './pages/admin/skills/SkillManagement';
import SkillDetail from './pages/admin/skills/SkillDetail';
import TalentSkillDetail from './front-end/TalentSkillDetail';
import RegisterAsTalent from './front-end/RegisterAsTalent';
import Announcement from './front-end/Announcement';
import AnnouncementManagement from './pages/admin/announcement/AnnouncementManagement';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/admin/dashboard" element={<AdminLayout><DashboardManagement /></AdminLayout>} />
        <Route path="/admin/talents" element={<AdminLayout><TalentManagement /></AdminLayout>} />
        <Route path="/admin/stories" element={<AdminLayout><StoryManagement /></AdminLayout>} />
        <Route path="/admin/stories/create" element={<AdminLayout><StoryCreateEditForm /></AdminLayout>} />
        <Route path="/admin/stories/:id/edit" element={<AdminLayout><StoryCreateEditForm /></AdminLayout>} />
        <Route path="/admin/stories/:id" element={<AdminLayout><StoryDetail /></AdminLayout>} />
        <Route path="/admin/skills" element={<AdminLayout><SkillManagement /></AdminLayout>} />
        <Route path="/admin/announcements" element={<AdminLayout><AnnouncementManagement/></AdminLayout>} />
        <Route
          path="/admin/skills/:id"
          element={
            <AdminLayout>
              <SkillDetail />
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
        <Route path="/about" element={<UserLayout><About /></UserLayout>} />
        <Route path="/talents" element={<UserLayout><Talents /></UserLayout>} />
        <Route path="/talent/:id" element={<UserLayout><TalentProfile /></UserLayout>} />
        <Route path="/talent/skills/:id" element={<UserLayout><TalentSkillDetail /></UserLayout>} />
        <Route path="/register_as_talent" element={<UserLayout><RegisterAsTalent/></UserLayout>} />
        <Route path="/announcements" element={<UserLayout><Announcement/></UserLayout>} />
      </Routes>
    </Router>
  );
}

export default App;