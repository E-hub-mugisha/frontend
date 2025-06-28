import React, { useEffect, useState, useCallback } from "react";
import { useParams } from "react-router-dom";
import api from "../publicApi";

const CategoryTalents = () => {
    const { slug } = useParams();
    const [talents, setTalents] = useState([]);
    const [categoryName, setCategoryName] = useState("");
    const [loading, setLoading] = useState(true);

    const fetchTalentsByCategory = useCallback(async () => {
        try {
            const res = await api.get(`/talents/category/${slug}`);
            setTalents(res.data.talents || []);
            setCategoryName(res.data.categoryName || "");
        } catch (err) {
            console.error("Failed to fetch talents:", err);
        } finally {
            setLoading(false);
        }
    }, [slug]);

    useEffect(() => {
        fetchTalentsByCategory();
    }, [fetchTalentsByCategory]);

    if (loading) return <div className="text-center my-5">Loading...</div>;
    return (
        <div>
            <div className="next-gen-section">
                <div className="container">
                    <div className="section-header-two text-center" data-aos="fade-up">
                        <h2 className="mb-2">
                            <span className="title-bg"></span>
                            Meet the {categoryName} talents
                            <span className="title-bg2"></span>
                        </h2>
                        <p>Connect with the next wave of talents, guiding you with fresh perspectives</p>
                    </div>

                    <div className="row seller-list">
                        {talents.length > 0 ? (
                            talents.map((talent) => (
                                <div className="col-xl-3 col-lg-4 col-md-6" key={talent.id}>
                                    <div className="card" data-aos="flip-left">
                                        <div className="card-body text-center">
                                            <span className="avatar">
                                                <a href={`/talent/${talent.id}`}>
                                                    <img
                                                        className="rounded-pill"
                                                        src="/assets/img/user/profile.jpg"
                                                        alt="img"
                                                        height="50"
                                                        width="50"
                                                    />
                                                </a>
                                                <i className="ti ti-discount-check-filled verify-icon"></i>
                                            </span>
                                            <h6 className="mb-1">
                                                <a href={`/talent/${talent.id}`}>{talent.name}</a>
                                            </h6>
                                            <p>{talent.category?.name || 'Uncategorized'}</p>
                                            <p className="mb-0 location-text d-inline-flex align-items-center">
                                                <img
                                                    src="/assets/img/flags/flag-for-rwanda.svg"
                                                    alt="flag"
                                                    className="me-1"
                                                />
                                                Rwanda <i className="ti ti-point-filled mx-1"></i> Total Gigs: 45
                                            </p>
                                            <div className="d-flex gap-2 align-items-center flex-wrap mt-3 justify-content-center">
                                                <a href={`/talent/${talent.id}`} className="badge bg-light">
                                                    {talent.skill}
                                                </a>
                                                <a href={`/talent/${talent.id}`} className="badge bg-light">
                                                    {talent.language}
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <p className="text-center mt-4">No Talent found for {categoryName}.</p>
                        )}
                    </div>

                    <div className="text-center mt-3" data-aos="fade-up">
                        <a href="/talents" className="btn btn-lg btn-dark">
                            View All Talents
                        </a>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default CategoryTalents