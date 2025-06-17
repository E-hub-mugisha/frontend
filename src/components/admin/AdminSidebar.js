import React from 'react';
import { NavLink } from 'react-router-dom';

const AdminSidebar = () => {
    return (
        <div className="bg-dark text-white p-3 vh-100" style={{ width: '250px', overflowY: 'auto' }}>
            <h4>Admin Panel</h4>
            <ul className="nav flex-column" role="navigation">
                <li className="nav-item">
                    <NavLink
                        className={({ isActive }) => "nav-link text-white" + (isActive ? " active" : "")}
                        to="/admin/talents"
                    >
                        Talent Management
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink
                        className={({ isActive }) => "nav-link text-white" + (isActive ? " active" : "")}
                        to="/admin/users"
                    >
                        User Management
                    </NavLink>
                </li>
                {/* Add more links here */}
            </ul>
        </div>
    );
};

export default AdminSidebar;
