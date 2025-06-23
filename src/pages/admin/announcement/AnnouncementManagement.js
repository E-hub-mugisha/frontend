import React, { useEffect, useState } from 'react';
import api from '../../../api';

const AnnouncementManagement = () => {
    const [announcements, setAnnouncements] = useState([]);
    const [form, setForm] = useState({
        title: '',
        content: '',
        image: '',
        link: '',
        category_id: '',
    });
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetchAnnouncements();
        fetchCategories();
    }, []);

    const fetchAnnouncements = async () => {
        const res = await api.get('/admin/announcements');
        setAnnouncements(res.data);
    };

    const fetchCategories = async () => {
        const res = await api.get('/categories');
        setCategories(res.data.categories || []);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await api.post('/admin/announcements', form);
        setForm({ title: '', content: '', image: '', link: '', category_id: '' });
        fetchAnnouncements();
    };
  return (
    <div>
        <div className="container mt-4">
            <h3>Create Announcement</h3>
            <form onSubmit={handleSubmit} className="mb-4">
                <input type="text" placeholder="Title" className="form-control mb-2"
                    value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} required />
                
                <textarea placeholder="Content" className="form-control mb-2"
                    value={form.content} onChange={(e) => setForm({ ...form, content: e.target.value })} required />

                <input type="text" placeholder="Image URL" className="form-control mb-2"
                    value={form.image} onChange={(e) => setForm({ ...form, image: e.target.value })} />

                <input type="text" placeholder="Link (optional)" className="form-control mb-2"
                    value={form.link} onChange={(e) => setForm({ ...form, link: e.target.value })} />

                <select className="form-select mb-2"
                    value={form.category_id} onChange={(e) => setForm({ ...form, category_id: e.target.value })} required>
                    <option value="">Select Category</option>
                    {categories.map(cat => (
                        <option key={cat.id} value={cat.id}>{cat.name}</option>
                    ))}
                </select>

                <button className="btn btn-primary">Save Announcement</button>
            </form>

            <h4>Announcements</h4>
            <ul className="list-group">
                {announcements.map(ann => (
                    <li key={ann.id} className="list-group-item">
                        <strong>{ann.title}</strong> - {ann.category?.name} 
                        <p>{ann.content}</p>
                        {ann.link && <a href={ann.link} target="_blank" rel="noreferrer">View Link</a>}
                    </li>
                ))}
            </ul>
        </div>
    </div>
  )
}

export default AnnouncementManagement