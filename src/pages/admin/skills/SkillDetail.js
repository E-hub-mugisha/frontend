// frontend/src/pages/admin/skills/SkillDetail.js
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import api from '../../../api';

const SkillDetail = () => {
    const { id } = useParams();
    const [skill, setSkill] = useState(null);

    useEffect(() => {
        api.get(`/skills/${id}`).then(res => setSkill(res.data));
    }, [id]);

    if (!skill) return <p className="text-center mt-4">Loading...</p>;


    return (
        <div className="container mt-5">
            <h3>Skill Detail</h3>
            <table className="table table-bordered mt-4">
                <tbody>
                    <tr>
                        <th>Name</th>
                        <td>{skill.name}</td>
                    </tr>
                    <tr>
                        <th>Description</th>
                        <td>{skill.description}</td>
                    </tr>
                    <tr>
                        <th>Talent ID</th>
                        <td>{skill.talent_id}</td>
                    </tr>
                    <tr>
                        <th>Category ID</th>
                        <td>{skill.category_id}</td>
                    </tr>
                    <tr>
                        <th>Status</th>
                        <td>{skill.status}</td>
                    </tr>
                    <tr>
                        <th>Level</th>
                        <td>{skill.level}</td>
                    </tr>
                    <tr>
                        <th>Tags</th>
                        <td>{skill.tags}</td>
                    </tr>
                    <tr>
                        <th>Image</th>
                        <td>
                            {skill.image ? (
                                <img src={skill.image} alt="Skill" style={{ width: '150px' }} />
                            ) : (
                                'No image'
                            )}
                        </td>
                    </tr>
                </tbody>
            </table>

            <Link to="/admin/skills" className="btn btn-secondary">Back to List</Link>
        </div>
    );
};

export default SkillDetail;
