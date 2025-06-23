import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../../../api';

const StoryManagement = () => {
    const [stories, setStories] = useState([]);

    useEffect(() => {
        fetchStories();
    }, []);

    const fetchStories = async () => {
        try {
            const res = await api.get('/stories');
            setStories(res.data.stories);
        } catch (err) {
            console.error('Failed to fetch stories', err);
        }
    };

    const handleDelete = async (id) => {
        if (window.confirm('Are you sure?')) {
            await api.delete(`/stories/${id}`);
            fetchStories();
        }
    };

    return (
        <div className="container mt-4">
            <div className="d-flex justify-content-between align-items-center mb-3">
                <h2>Stories</h2>
                <Link to="/admin/stories/create" className="btn btn-primary">Add Story</Link>
            </div>
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Talent</th>
                        <th>Category</th>
                        <th>Status</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {stories.map(story => (
                        <tr key={story.id}>
                            <td>{story.title}</td>
                            <td>{story.talent?.name || 'N/A'}</td>
                            <td>{story.category?.name || 'N/A'}</td>
                            <td>{story.status}</td>
                            <td>
                                <Link to={`/admin/stories/${story.id}`} className="btn btn-sm btn-info me-2">View</Link>
                                <Link to={`/admin/stories/${story.id}/edit`} className="btn btn-sm btn-warning me-2">Edit</Link>
                                <button className="btn btn-sm btn-danger" onClick={() => handleDelete(story.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default StoryManagement;
