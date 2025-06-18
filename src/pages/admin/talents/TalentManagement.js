import React, { useEffect, useState } from 'react';
import api from '../../../api';

const TalentManagement = () => {
    const [talents, setTalents] = useState([]);
    const [selectedTalent, setSelectedTalent] = useState(null);
    const [showStatusModal, setShowStatusModal] = useState(false);
    const [form, setForm] = useState({ name: '', skill: '', story: '', rating: 0, status: 'pending', featured: false, id: null });
    const [isEditing, setIsEditing] = useState(false);

    useEffect(() => {
        fetchTalents();
    }, []);

    const fetchTalents = async () => {
        const res = await api.get('/talents');
        setTalents(res.data);
    };

    const openStatusModal = (talent) => {
        setSelectedTalent(talent);
        setShowStatusModal(true);
    };

    const handleStatusUpdate = async () => {
        await api.put(`/talents/${selectedTalent.id}/status`, { status: selectedTalent.status });
        setShowStatusModal(false);
        fetchTalents();
    };

    const featureTalent = async (id, featured) => {
        await api.put(`/talents/${id}/feature`, { featured });
        fetchTalents();
    };

    const deleteTalent = async (id) => {
        if (window.confirm("Are you sure you want to delete this talent?")) {
            await api.delete(`/talents/${id}`);
            fetchTalents();
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { name, skill, story, rating } = form;

        if (!name || !skill || rating < 0 || rating > 5) {
            alert("Please provide valid inputs.");
            return;
        }

        if (isEditing) {
            await api.put(`/talents/${form.id}`, { name, skill, story, rating });
        } else {
            await api.post('/talents', { name, skill, story, rating });
        }
        fetchTalents();
        setForm({ name: '', skill: '', story: '', rating: 0, status: 'pending', featured: false, id: null });
        setIsEditing(false);
        window.bootstrap.Modal.getInstance(document.getElementById('talentModal')).hide();
    };

    const openEditModal = (talent) => {
        setForm({ ...talent });
        setIsEditing(true);
        new window.bootstrap.Modal(document.getElementById('talentModal')).show();
    };

    const openCreateModal = () => {
        setForm({ name: '', skill: '', story: '', rating: 0, status: 'pending', featured: false, id: null });
        setIsEditing(false);
        new window.bootstrap.Modal(document.getElementById('talentModal')).show();
    };

    return (
        <div className="container mt-4">
            <h2>Talent Management</h2>
            <button className="btn btn-primary mb-3" onClick={openCreateModal}>Add Talent</button>

            <table className="table table-bordered mt-3">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Skill</th>
                        <th>Rating</th>
                        <th>Status</th>
                        <th>Featured</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {talents.map(talent => (
                        <tr key={talent.id}>
                            <td>{talent.id}</td>
                            <td>{talent.name}</td>
                            <td>{talent.skill}</td>
                            <td>{talent.rating}</td>
                            <td>{talent.status}</td>
                            <td>{talent.featured ? 'Yes' : 'No'}</td>
                            <td>
                                <button className="btn btn-info btn-sm me-2" onClick={() => openEditModal(talent)}>Edit</button>
                                <button className="btn btn-primary btn-sm me-2" onClick={() => openStatusModal(talent)}>Update Status</button>
                                <button className="btn btn-warning btn-sm me-2" onClick={() => featureTalent(talent.id, !talent.featured)}>{talent.featured ? 'Unfeature' : 'Feature'}</button>
                                <button className="btn btn-danger btn-sm" onClick={() => deleteTalent(talent.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {/* Create/Edit Modal */}
            <div className="modal fade" id="talentModal" tabIndex="-1" aria-labelledby="talentModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <form className="modal-content" onSubmit={handleSubmit}>
                        <div className="modal-header">
                            <h5 className="modal-title" id="talentModalLabel">{isEditing ? 'Edit Talent' : 'Add Talent'}</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                        </div>
                        <div className="modal-body">
                            <div className="mb-3">
                                <label className="form-label">Name</label>
                                <input type="text" className="form-control" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Skill</label>
                                <input type="text" className="form-control" value={form.skill} onChange={(e) => setForm({ ...form, skill: e.target.value })} required />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Story</label>
                                <textarea className="form-control" rows="3" value={form.story} onChange={(e) => setForm({ ...form, story: e.target.value })}></textarea>
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Rating (0–5)</label>
                                <input type="number" min="0" max="5" className="form-control" value={form.rating} onChange={(e) => setForm({ ...form, rating: parseInt(e.target.value) })} required />
                            </div>
                            <div className="form-check">
                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    checked={form.featured}
                                    onChange={(e) => setForm({ ...form, featured: e.target.checked })}
                                />
                                <label className="form-check-label">Featured</label>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                            <button type="submit" className="btn btn-primary">{isEditing ? 'Update' : 'Create'}</button>
                        </div>
                    </form>
                </div>
            </div>

            {/* Status Modal */}
            {showStatusModal && (
                <div className="modal show d-block" tabIndex="-1">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Update Status</h5>
                                <button type="button" className="btn-close" onClick={() => setShowStatusModal(false)}></button>
                            </div>
                            <div className="modal-body">
                                <select className="form-select" value={selectedTalent.status} onChange={(e) => setSelectedTalent({ ...selectedTalent, status: e.target.value })}>
                                    <option value="pending">Pending</option>
                                    <option value="approved">Approved</option>
                                    <option value="rejected">Rejected</option>
                                </select>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" onClick={() => setShowStatusModal(false)}>Close</button>
                                <button type="button" className="btn btn-primary" onClick={handleStatusUpdate}>Save Changes</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default TalentManagement;
