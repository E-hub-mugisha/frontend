import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import api from '../../../api';

const StoryCreateEditForm = () => {
    const { id } = useParams(); // `id` is undefined in create, defined in edit
    const navigate = useNavigate();

    const [form, setForm] = useState({
        title: '', content: '', tags: '', media: '', status: 'draft',
        category_id: '', talent_id: ''
    });
    const [categories, setCategories] = useState([]);
    const [talents, setTalents] = useState([]);

    useEffect(() => {
        fetchTalents();
        fetchCategories();
        if (id) fetchStory();
    }, [id]);

    const fetchStory = async () => {
        const res = await api.get(`/stories/${id}`);
        setForm(res.data);
    };

    const fetchTalents = async () => {
        try {
            const res = await api.get('/talents');
            setTalents(res.data.talents); // ✅ access the nested talents array
        } catch (err) {
            console.error('Failed to fetch talents', err);
        }
    };

    const fetchCategories = async () => {
        try {
            const response = await api.get('/categories'); // Adjust the endpoint as necessary
            setCategories(response.data);
        } catch (error) {
            console.error('Error fetching categories:', error);
        }
    };

    const handleChange = e => {
        const { name, value } = e.target;
        setForm(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async e => {
        e.preventDefault();
        if (id) {
            await api.put(`/stories/${id}`, form);
        } else {
            await api.post('/stories', form);
        }
        navigate('/admin/stories');
    };
    return (
        <div>
            <div className="container mt-4">
                <h2>{id ? 'Edit' : 'Add'} Story</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label>Title</label>
                        <input name="title" className="form-control" value={form.title} onChange={handleChange} required />
                    </div>
                    <div className="mb-3">
                        <label>Talent</label>
                        <select name="talent_id" className="form-select" value={form.talent_id} onChange={handleChange} required>
                            <option value="">Select Talent</option>
                            {talents.map(t => <option key={t.id} value={t.id}>{t.name}</option>)}
                        </select>
                    </div>
                    <div className="mb-3">
                        <label>Category</label>
                        <select name="category_id" className="form-select" value={form.category_id} onChange={handleChange} required>
                            <option value="">Select Category</option>
                            {categories.map(c => <option key={c.id} value={c.id}>{c.name}</option>)}
                        </select>
                    </div>
                    <div className="mb-3">
                        <label>Content</label>
                        <textarea name="content" className="form-control" value={form.content} onChange={handleChange} rows="4" required />
                    </div>
                    <div className="mb-3">
                        <label>Media URL</label>
                        <input name="media" className="form-control" value={form.media} onChange={handleChange} />
                    </div>
                    <div className="mb-3">
                        <label>Tags</label>
                        <input name="tags" className="form-control" value={form.tags} onChange={handleChange} />
                    </div>
                    <div className="mb-3">
                        <label>Status</label>
                        <select name="status" className="form-select" value={form.status} onChange={handleChange}>
                            <option value="draft">Draft</option>
                            <option value="published">Published</option>
                        </select>
                    </div>
                    <button type="submit" className="btn btn-success">{id ? 'Update' : 'Create'} Story</button>
                </form>
            </div>
        </div>
    )
}

export default StoryCreateEditForm