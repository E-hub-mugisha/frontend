import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import api from '../../../api';

const StoryDetail = () => {
    const { id } = useParams();
    const [story, setStory] = useState(null);

    useEffect(() => {
        api.get(`/stories/${id}`).then(res => setStory(res.data));
    }, [id]);

    if (!story) return <p className="text-center mt-4">Loading...</p>;

    return (
        <div className="container mt-4">
            <h2>{story.title}</h2>
            <p><strong>Talent:</strong> {story.talent?.name}</p>
            <p><strong>Category:</strong> {story.category?.name}</p>
            <p><strong>Status:</strong> {story.status}</p>
            <p><strong>Tags:</strong> {story.tags}</p>
            {story.media && <img src={story.media} alt="Story" style={{ maxWidth: '300px' }} />}
            <div className="mt-3">
                <h4>Story</h4>
                <p>{story.content}</p>
            </div>
            <Link to="/admin/stories" className="btn btn-secondary mt-3">Back</Link>
        </div>
    );
};

export default StoryDetail;
