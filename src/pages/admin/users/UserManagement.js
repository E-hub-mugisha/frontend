import React, { useEffect, useState } from 'react';
import api from '../../../api';

const UserManagement = () => {
  const [users, setUsers] = useState([]);
  const [form, setForm] = useState({ id: null, name: '', email: '', password: '', role: 'user', active: true });
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    const res = await api.get('/users');
    setUsers(res.data);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isEditing) {
      await api.put(`/users/${form.id}`, form);
    } else {
      await api.post('/users', form);
    }
    setForm({ id: null, name: '', email: '', password: '', role: 'user', active: true });
    setIsEditing(false);
    fetchUsers();
    window.bootstrap.Modal.getInstance(document.getElementById('userModal')).hide();
  };

  const openEditModal = (user) => {
    setForm(user);
    setIsEditing(true);
    new window.bootstrap.Modal(document.getElementById('userModal')).show();
  };

  const openCreateModal = () => {
    setForm({ id: null, name: '', email: '', password: '', role: 'user', active: true });
    setIsEditing(false);
    new window.bootstrap.Modal(document.getElementById('userModal')).show();
  };

  const deleteUser = async (id) => {
    if (window.confirm('Are you sure you want to delete this user?')) {
      await api.delete(`/users/${id}`);
      fetchUsers();
    }
  };

  return (
    <div className="container mt-4">
      <h2>User Management</h2>
      <button className="btn btn-primary mb-3" onClick={openCreateModal}>Add User</button>

      <table className="table table-bordered">
        <thead>
          <tr>
            <th>ID</th><th>Name</th><th>Email</th><th>Role</th><th>Status</th><th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td>{user.id}</td><td>{user.name}</td><td>{user.email}</td>
              <td>{user.role}</td><td>{user.active ? 'Active' : 'Inactive'}</td>
              <td>
                <button className="btn btn-info btn-sm me-2" onClick={() => openEditModal(user)}>Edit</button>
                <button className="btn btn-danger btn-sm" onClick={() => deleteUser(user.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Modal */}
      <div className="modal fade" id="userModal" tabIndex="-1">
        <div className="modal-dialog">
          <form className="modal-content" onSubmit={handleSubmit}>
            <div className="modal-header">
              <h5 className="modal-title">{isEditing ? 'Edit User' : 'Add User'}</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" />
            </div>
            <div className="modal-body">
              <div className="mb-3">
                <label>Name</label>
                <input type="text" className="form-control" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required />
              </div>
              <div className="mb-3">
                <label>Email</label>
                <input type="email" className="form-control" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} required />
              </div>
              <div className="mb-3">
                <label>Password</label>
                <input type="password" className="form-control" value={form.password} onChange={(e) => setForm({ ...form, password: e.target.value })} required />
              </div>
              <div className="mb-3">
                <label>Role</label>
                <select className="form-select" value={form.role} onChange={(e) => setForm({ ...form, role: e.target.value })}>
                  <option value="admin">Admin</option>
                  <option value="user">User</option>
                </select>
              </div>
              <div className="mb-3">
                <label>Status</label>
                <select className="form-select" value={form.active} onChange={(e) => setForm({ ...form, active: e.target.value === 'true' })}>
                  <option value="true">Active</option>
                  <option value="false">Inactive</option>
                </select>
              </div>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
              <button type="submit" className="btn btn-primary">{isEditing ? 'Update' : 'Create'}</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UserManagement;
