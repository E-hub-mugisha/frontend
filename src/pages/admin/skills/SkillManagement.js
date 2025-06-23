import React, { useEffect, useState } from 'react';
import api from '../../../api';
import { Link } from 'react-router-dom';

const initialForm = {
  name: '',
  description: '',
  image: '',
  talent_id: '',
  category_id: '',
  tags: '',
  status: 'draft',
  level: 'beginner'
};

const SkillManagement = () => {
  const [skills, setSkills] = useState([]);
  const [form, setForm] = useState(initialForm);
  const [editingId, setEditingId] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [talents, setTalents] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetchSkills();
    fetchTalents();
    fetchCategories();
  }, []);

  const fetchSkills = async () => {
    const res = await api.get('/skills');
    setSkills(res.data.skills || []); // Ensure skills is an array
  };

  const fetchTalents = async () => {
    const res = await api.get('/talents');
    setTalents(res.data.talents || []); // Ensure talents is an array
  };

  const fetchCategories = async () => {
    const res = await api.get('/categories');
    setCategories(res.data); // Ensure categories is an array
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const openModal = (skill = null) => {
    if (skill) {
      setForm(skill);
      setEditingId(skill.id);
    } else {
      setForm(initialForm);
      setEditingId(null);
    }
    setShowModal(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editingId) {
        await api.put(`/skills/${editingId}`, form);
      } else {
        await api.post('/skills', form);
      }
      fetchSkills();
      setShowModal(false);
      setForm(initialForm);
      setEditingId(null);
    } catch (err) {
      alert('Validation failed: ' + err.response?.data?.message || err.message);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure to delete this skill?")) {
      await api.delete(`/skills/${id}`);
      fetchSkills();
    }
  };

  return (
    <div className="container mt-5">
      <h2>Skill Management</h2>
      <button className="btn btn-primary mb-3" onClick={() => openModal()}>Add Skill</button>

      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Name</th><th>Talent</th><th>Category</th><th>Status</th><th>Level</th><th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {skills.map(skill => (
            <tr key={skill.id}>
              <td>{skill.name}</td>
              <td>{skill.talent_id}</td>
              <td>{skill.category_id}</td>
              <td>{skill.status}</td>
              <td>{skill.level}</td>
              <td>
                <Link to={`/admin/skills/${skill.id}`} className="btn btn-sm btn-success me-2">View</Link>
                <button className="btn btn-sm btn-info me-2" onClick={() => openModal(skill)}>Edit</button>
                <button className="btn btn-sm btn-danger" onClick={() => handleDelete(skill.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Modal */}
      {showModal && (
        <div className="modal show d-block" tabIndex="-1" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
          <div className="modal-dialog modal-lg">
            <form className="modal-content" onSubmit={handleSubmit}>
              <div className="modal-header">
                <h5 className="modal-title">{editingId ? 'Edit Skill' : 'Add Skill'}</h5>
                <button type="button" className="btn-close" onClick={() => setShowModal(false)}></button>
              </div>
              <div className="modal-body row g-3">
                <div className="col-md-6">
                  <label className="form-label">Name</label>
                  <input name="name" value={form.name} onChange={handleChange} className="form-control" required />
                </div>
                <div className="col-md-6">
                  <label className="form-label">Image URL</label>
                  <input name="image" value={form.image} onChange={handleChange} className="form-control" />
                </div>
                <div className="col-md-6">
                  <label className="form-label">Talent</label>
                  <select name="talent_id" value={form.talent_id} onChange={handleChange} className="form-select" required>
                    <option value="">Select Talent</option>
                    {talents.map(t => (
                      <option key={t.id} value={t.id}>{t.name}</option>
                    ))}
                  </select>
                </div>
                <div className="col-md-6">
                  <label className="form-label">Category</label>
                  <select name="category_id" value={form.category_id} onChange={handleChange} className="form-select" required>
                    <option value="">Select Category</option>
                    {categories.map(c => (
                      <option key={c.id} value={c.id}>{c.name}</option>
                    ))}
                  </select>
                </div>
                <div className="col-md-6">
                  <label className="form-label">Status</label>
                  <select name="status" value={form.status} onChange={handleChange} className="form-select" required>
                    <option value="draft">Draft</option>
                    <option value="published">Published</option>
                  </select>
                </div>
                <div className="col-md-6">
                  <label className="form-label">Level</label>
                  <select name="level" value={form.level} onChange={handleChange} className="form-select" required>
                    <option value="beginner">Beginner</option>
                    <option value="intermediate">Intermediate</option>
                    <option value="advanced">Advanced</option>
                  </select>
                </div>
                <div className="col-12">
                  <label className="form-label">Description</label>
                  <textarea name="description" value={form.description} onChange={handleChange} className="form-control" rows={2} />
                </div>
                <div className="col-12">
                  <label className="form-label">Tags</label>
                  <input name="tags" value={form.tags} onChange={handleChange} className="form-control" placeholder="Comma-separated" />
                </div>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={() => setShowModal(false)}>Cancel</button>
                <button type="submit" className="btn btn-primary">{editingId ? 'Update' : 'Create'}</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default SkillManagement;
