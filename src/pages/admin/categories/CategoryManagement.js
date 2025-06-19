import React, { useEffect, useState } from 'react';
import api from '../../../api';

const CategoryManagement = () => {
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);
    const [showAddModal, setShowAddModal] = useState(false);
    const [showEditModal, setShowEditModal] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [form, setForm] = useState({ name: '', description: '', featured: false, image: '' });

    useEffect(() => {
        fetchCategories();
    }, []);

    const fetchCategories = async () => {
        try {
            const res = await api.get('/categories');
            setCategories(res.data);
        } catch (err) {
            console.error('Failed to fetch categories', err);
        } finally {
            setLoading(false);
        }
    };

    const handleInputChange = e => {
        const { name, value, type, checked } = e.target;
        setForm(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value,
        }));
    };

    const handleAdd = async e => {
        e.preventDefault();
        try {
            await api.post('/categories', form);
            setShowAddModal(false);
            fetchCategories();
        } catch (err) {
            console.error('Failed to add category', err);
        }
    };

    const handleEdit = async e => {
        e.preventDefault();
        try {
            await api.put(`/categories/${selectedCategory.id}`, form);
            setShowEditModal(false);
            fetchCategories();
        } catch (err) {
            console.error('Failed to update category', err);
        }
    };

    const handleDelete = async id => {
        if (!window.confirm('Are you sure you want to delete this category?')) return;
        try {
            await api.delete(`/categories/${id}`);
            fetchCategories();
        } catch (err) {
            console.error('Failed to delete category', err);
        }
    };

    const openEditModal = category => {
        setSelectedCategory(category);
        setForm({
            name: category.name,
            description: category.description,
            image: category.image || '',
            featured: category.featured,
        });
        setShowEditModal(true);
    };

    return (
        <div className="container mt-4">
            <h2>Categories</h2>
            <button className="btn btn-primary mb-3" onClick={() => setShowAddModal(true)}>
                Add Category
            </button>

            {loading ? (
                <p>Loading...</p>
            ) : (
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Description</th>
                            <th>Featured</th>
                            <th>Slug</th>
                            <th>Image</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {categories.map(cat => (
                            <tr key={cat.id}>
                                <td>{cat.name}</td>
                                <td>{cat.description}</td>
                                <td>{cat.featured ? 'Yes' : 'No'}</td>
                                <td>{cat.slug}</td>
                                <td><img src={cat.image} alt="" width="50" /></td>
                                <td>
                                    <button className="btn btn-sm btn-warning me-2" onClick={() => openEditModal(cat)}>
                                        Edit
                                    </button>
                                    <button className="btn btn-sm btn-danger" onClick={() => handleDelete(cat.id)}>
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}

            {/* Add Modal */}
            {showAddModal && (
                <div className="modal show d-block" tabIndex="-1">
                    <div className="modal-dialog">
                        <form onSubmit={handleAdd} className="modal-content">
                            <div className="modal-header">
                                <h5>Add Category</h5>
                                <button type="button" className="btn-close" onClick={() => setShowAddModal(false)}></button>
                            </div>
                            <div className="modal-body">
                                <input name="name" value={form.name} onChange={handleInputChange} className="form-control mb-2" placeholder="Name" required />
                                <input name="description" value={form.description} onChange={handleInputChange} className="form-control mb-2" placeholder="Description" required />
                                <input name="image" value={form.image} onChange={handleInputChange} className="form-control mb-2" placeholder="Image URL" />
                                <label><input type="checkbox" name="featured" checked={form.featured} onChange={handleInputChange} /> Featured</label>
                            </div>
                            <div className="modal-footer">
                                <button className="btn btn-success">Save</button>
                                <button type="button" className="btn btn-secondary" onClick={() => setShowAddModal(false)}>Cancel</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}

            {/* Edit Modal */}
            {showEditModal && (
                <div className="modal show d-block" tabIndex="-1">
                    <div className="modal-dialog">
                        <form onSubmit={handleEdit} className="modal-content">
                            <div className="modal-header">
                                <h5>Edit Category</h5>
                                <button type="button" className="btn-close" onClick={() => setShowEditModal(false)}></button>
                            </div>
                            <div className="modal-body">
                                <input name="name" value={form.name} onChange={handleInputChange} className="form-control mb-2" placeholder="Name" required />
                                <input name="description" value={form.description} onChange={handleInputChange} className="form-control mb-2" placeholder="Description" required />
                                <input name="image" value={form.image} onChange={handleInputChange} className="form-control mb-2" placeholder="Image URL" />
                                <label><input type="checkbox" name="featured" checked={form.featured} onChange={handleInputChange} /> Featured</label>
                            </div>
                            <div className="modal-footer">
                                <button className="btn btn-warning">Update</button>
                                <button type="button" className="btn btn-secondary" onClick={() => setShowEditModal(false)}>Cancel</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default CategoryManagement