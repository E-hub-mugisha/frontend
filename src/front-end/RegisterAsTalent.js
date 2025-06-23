import React, { useEffect, useState } from 'react';
import api from '../api';

const RegisterAsTalent = () => {
    const [categories, setCategories] = useState([]);
    const [form, setForm] = useState({
        name: '',
        skill: '',
        story: '',
        rating: 0,
        status: 'pending',
        featured: false,
        id: null,
        description: '',
        phone: '',
        email: '',
        language: '',
        address: '',
        image: '',
        category_id: ''
    });

    useEffect(() => {
        fetchCategories();
    }, []);

    const fetchCategories = async () => {
        try {
            const response = await api.get('/categories');
            setCategories(response.data);
        } catch (error) {
            console.error('Error fetching categories:', error);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { name, skill, rating, category_id } = form;

        if (!name || !skill || rating < 0 || rating > 5 || !category_id) {
            alert("Please provide valid inputs.");
            return;
        }

        try {
            await api.post('/talents', form);
            alert("Talent registered successfully!");
            resetForm();
        } catch (error) {
            console.error('Error registering talent:', error);
            alert("Failed to register talent.");
        }
    };

    const resetForm = () => {
        setForm({
            name: '',
            skill: '',
            story: '',
            rating: 0,
            status: 'pending',
            featured: false,
            id: null,
            description: '',
            phone: '',
            email: '',
            language: '',
            address: '',
            image: '',
            category_id: ''
        });
    };

    return (
        <div>
            {/* Breadcrumb */}
            <div className="breadcrumb-bar breadcrumb-bar-info">
                <div className="breadcrumb-img">
                    <div className="breadcrumb-left">
                        <img src="assets/img/bg/breadcrump-bg-01.png" alt="breadcrumb" />
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <nav aria-label="breadcrumb" className="page-breadcrumb">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item">
                                        <a href="index.html">Home</a>
                                    </li>
                                    <li className="breadcrumb-item active" aria-current="page">Talent Registration</li>
                                </ol>
                            </nav>
                            <h2 className="breadcrumb-title mb-0">Register as Talent</h2>
                        </div>
                    </div>
                </div>
                <div className="breadcrumb-img">
                    <div className="breadcrumb-right">
                        <img src="assets/img/bg/breadcrump-bg-02.png" alt="breadcrumb" />
                    </div>
                </div>
            </div>

            {/* Form Section */}
            <div className="page-content">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-10">
                            <div className="add-property-wrap shadow-sm p-4 rounded bg-white">
                                <div className="property-info mb-4">
                                    <h5 className="mb-1">Talent Details</h5>
                                    <p className="text-muted">Share your talent details to get featured on Future Connect.</p>
                                </div>

                                <form onSubmit={handleSubmit} className="row g-3">
                                    <div className="col-md-6">
                                        <label className="form-label">Full Name <span className="text-danger">*</span></label>
                                        <input type="text" name="name" className="form-control" value={form.name} onChange={handleChange} required />
                                    </div>

                                    <div className="col-md-6">
                                        <label className="form-label">Phone Number</label>
                                        <input type="text" name="phone" className="form-control" value={form.phone} onChange={handleChange} />
                                    </div>

                                    <div className="col-md-6">
                                        <label className="form-label">Email <span className="text-danger">*</span></label>
                                        <input type="email" name="email" className="form-control" value={form.email} onChange={handleChange} required />
                                    </div>

                                    <div className="col-md-6">
                                        <label className="form-label">Address <span className="text-danger">*</span></label>
                                        <input type="text" name="address" className="form-control" value={form.address} onChange={handleChange} required />
                                    </div>

                                    <div className="col-md-6">
                                        <label className="form-label">Skill <span className="text-danger">*</span></label>
                                        <input type="text" name="skill" className="form-control" value={form.skill} onChange={handleChange} required />
                                    </div>

                                    <div className="col-md-6">
                                        <label className="form-label">Talent Category <span className="text-danger">*</span></label>
                                        <select name="category_id" className="form-select" value={form.category_id} onChange={handleChange} required>
                                            <option value="">Select Category</option>
                                            {categories.map(cat => (
                                                <option key={cat.id} value={cat.id}>{cat.name}</option>
                                            ))}
                                        </select>
                                    </div>

                                    <div className="col-md-12">
                                        <label className="form-label">Description</label>
                                        <textarea name="description" className="form-control" rows="3" value={form.description} onChange={handleChange}></textarea>
                                    </div>

                                    <div className="col-md-12">
                                        <label className="form-label">Upload Photo (URL)</label>
                                        <input type="text" name="image" className="form-control" value={form.image} onChange={handleChange} />
                                    </div>

                                    <div className="col-md-12">
                                        <button type="submit" className="btn btn-primary w-100">Save Talent</button>
                                    </div>
                                </form>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RegisterAsTalent;
