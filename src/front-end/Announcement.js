import React, { useEffect, useState } from 'react';
import api from '../publicApi'; // ✅ correct import
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

dayjs.extend(relativeTime);

const Announcement = () => {
    const [announcements, setAnnouncements] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchAnnouncements();
    }, []);

    const fetchAnnouncements = async () => {
        try {
            const res = await api.get('/announcements');
            setAnnouncements(res.data.announcements || []);
        } catch (err) {
            console.error('Failed to fetch Announcements:', err);
        }
    };
    return (
        <div>

            <div class="breadcrumb-bar breadcrumb-bar-info">
                <div class="breadcrumb-img">
                    <div class="breadcrumb-left">
                        <img src="/assets/img/bg/banner-bg-03.png" alt="img" />
                    </div>
                </div>
                <div class="container">
                    <div class="row">
                        <div class="col-md-12 col-12">
                            <nav aria-label="breadcrumb" class="page-breadcrumb">
                                <ol class="breadcrumb">
                                    <li class="breadcrumb-item">
                                        <a href="/">Home</a>
                                    </li>
                                    <li class="breadcrumb-item active" aria-current="page">Announcements</li>
                                </ol>
                            </nav>
                            <h2 class="breadcrumb-title mb-0">
                                Announcements <span class="text-primary"></span>
                            </h2>
                        </div>
                    </div>
                </div>
            </div>


            <div class="page-content content">
                <div class="container">
                    <div class="row">
                        {announcements.map((ann) => (
                            <div class="col-xl-4 col-lg-6 col-md-6">
                                <div class="testimonial-slider-card">
                                    <div class="testimonial-item">
                                        <div class="testimonial-icon"><i class="ti ti-bell"></i></div>
                                        <h5 class="mb-2">{ann.title}</h5>
                                        <p class="mb-3">{ann.content.length > 100 ? `${ann.content.slice(0, 100)}...` : ann.content}</p>
                                        <div class="testimonial-review d-flex align-items-center justify-content-between">
                                            <div class="testimonial-user p-0">
                                                <img src="/assets/img/user/admin.jpg" alt="img" />
                                                <div class="testimonial-info">
                                                    <h6>Product Team</h6>
                                                    <p>Platform Update</p>
                                                </div>
                                            </div>
                                            <div class="star-rate m-0 bg-light"><span class="text-muted">{dayjs(ann.created_at).fromNow()}</span></div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        ))}
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Announcement