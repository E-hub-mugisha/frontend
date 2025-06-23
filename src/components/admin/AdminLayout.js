import React from 'react';
import AdminSidebar from './AdminSidebar';

const AdminLayout = ({ children }) => {
    return (
        <div class="main-wrapper">
            <AdminSidebar />
            <div className="page-wrapper">
                {children}
            </div>
        </div>
    );
};

export default AdminLayout;
