import React, { useEffect, useState } from 'react';
import api from '../api'; // ✅ correct import

const Home = () => {
    const [talents, setTalents] = useState([]);
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchTalents();
        fetchCategories();
    }, []);

    const fetchTalents = async () => {
        try {
            const res = await api.get('/talents');
            setTalents(res.data);
        } catch (error) {
            console.error('Error fetching talents:', error);
        } finally {
            setLoading(false);
        }
    };

    const fetchCategories = async () => {
        try {
            const res = await api.get('/categories');
            setCategories(res.data);
        } catch (err) {
            console.error('Failed to fetch categories:', err);
        }
    };
    return (
        <div>

            <div id="heroCarousel" className="carousel slide" data-bs-ride="carousel" data-bs-interval="2000">
                <div className="carousel-inner">


                    <div className="carousel-item active">
                        <div className="hero-section-two py-5">
                            <div className="container">
                                <div className="row align-items-center">

                                    <div className="col-lg-7">
                                        <div className="banner-content" data-aos="fade-up">
                                            <img src="assets/img/home/banner-shape-1.svg" alt="decorative shape"
                                                className="img-fluid banner-bg-1 d-none d-lg-flex" />
                                            <span className="d-inline-flex mb-3 align-items-center hero-title">
                                                <i className="ti ti-point-filled me-1"></i>Empowering Young Talents
                                            </span>
                                            <h1 className="mb-2">Share Your <span>Story</span> & Showcase Your
                                                <span>Skills</span>
                                            </h1>
                                            <p className="mb-4">
                                                Future Connect is where creativity meets opportunity. Upload your journey,
                                                highlight your
                                                talents, and connect with a community that celebrates and supports your
                                                growth.
                                            </p>
                                            <a href="talents.html"
                                                className="btn btn-lg btn-primary d-inline-flex align-items-center">
                                                Discover Talents<i className="ti ti-chevron-right ms-1"></i>
                                            </a>
                                        </div>
                                    </div>

                                    <div className="col-lg-5">
                                        <div className="banner-image position-relative">
                                            <img src="assets/img/home/banner-image.svg" alt="Future Connect hero image"
                                                className="img-fluid banner-img" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="carousel-item">
                        <div className="hero-section-two py-5">
                            <div className="container">
                                <div className="row align-items-center">
                                    <div className="col-lg-7">
                                        <div className="banner-content" data-aos="fade-up">
                                            <img src="assets/img/home/banner-shape-1.svg" alt="decorative shape"
                                                className="img-fluid banner-bg-1 d-none d-lg-flex" />
                                            <span className="d-inline-flex mb-3 align-items-center hero-title">
                                                <i className="ti ti-point-filled me-1"></i>Inspire the World
                                            </span>
                                            <h1 className="mb-2">Turn Your <span>Passion</span> into <span>Impact</span></h1>
                                            <p className="mb-4">
                                                Upload your unique journey, find opportunities, and let the world see what
                                                you’re capable of.
                                            </p>
                                            <a href="upload.html"
                                                className="btn btn-lg btn-primary d-inline-flex align-items-center">
                                                Upload Your Story<i className="ti ti-chevron-right ms-1"></i>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="col-lg-5">
                                        <div className="banner-image position-relative">

                                            <img src="assets/img/home/front-view-handsome-male-musician-singing-home-with-microphone.jpg"
                                                alt="Hero image 2" className="img-fluid banner-img" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>


                <button className="carousel-control-prev" type="button" data-bs-target="#heroCarousel" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon"></span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#heroCarousel" data-bs-slide="next">
                    <span className="carousel-control-next-icon"></span>
                </button>
            </div>

            <div className="banner-form banner-form-two" data-aos="fade-up">
                <div className="row justify-content-center">
                    <div className="col-xl-8">
                        <form action="search-results.html">
                            <div className="banner-search-list">
                                <div className="input-block">
                                    <label>Explore</label>
                                    <select className="select">
                                        <option>Select Category</option>
                                        <option>Talent Stories</option>
                                        <option>Skill Courses</option>
                                        <option>Mentorship</option>
                                        <option>Creative Projects</option>
                                    </select>
                                </div>
                                <div className="input-block">
                                    <label>Region</label>
                                    <div className="input-locaion">
                                        <input type="text" className="form-control" placeholder="e.g., Kigali, Nairobi, Lagos" />
                                    </div>
                                </div>
                                <div className="input-block border-0">
                                    <label>Search</label>
                                    <input type="text" className="form-control" placeholder="e.g., photography, coding, music" />
                                </div>
                            </div>
                            <div className="input-block-btn">
                                <button
                                    className="btn btn-lg btn-primary d-inline-flex align-items-center justify-content-center"
                                    type="submit">
                                    <i className="ti ti-search"></i> Search
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>


            <div className="client-slider-sec mt-5">
                <img src="assets/img/bg/shape-09.png" alt="Shape" className="client-slider-img" />
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-header text-center aos aos-init aos-animate" data-aos="fade-up">
                                <h3 className="text-white">Trusted by 300+ Client around globe</h3>
                            </div>
                            <div className="clients-slider owl-carousel owl-loaded owl-drag aos-init aos-animate"
                                data-aos="fade-up">

                                <div className="owl-stage-outer">
                                    <div className="owl-stage"
                                        style={{
                                            transform: 'translate3d(-1920px, 0px, 0px)',
                                            transition: '2s',
                                            width: '3264px'
                                        }}>
                                        <div className="owl-item cloned" style={{
                                            width: '168px',
                                            marginRight: '24px'
                                        }}>
                                            <div className="client-logo">
                                                <img src="assets/img/company/logo.svg" className="w-auto" alt="img" />
                                            </div>
                                        </div>
                                        <div className="owl-item cloned" style={{
                                            width: '168px',
                                            marginRight: '24px'
                                        }}>
                                            <div className="client-logo">
                                                <img src="assets/img/company/logo.svg" className="w-auto" alt="img" />
                                            </div>
                                        </div>
                                        <div className="owl-item cloned" style={{
                                            width: '168px',
                                            marginRight: '24px'
                                        }}>
                                            <div className="client-logo">
                                                <img src="assets/img/company/logo.svg" className="w-auto" alt="img" />
                                            </div>
                                        </div>
                                        <div className="owl-item cloned" style={{
                                            width: '168px',
                                            marginRight: '24px'
                                        }}>
                                            <div className="client-logo">
                                                <img src="assets/img/company/logo.svg" className="w-auto" alt="img" />
                                            </div>
                                        </div>
                                        <div className="owl-item cloned" style={{
                                            width: '168px',
                                            marginRight: '24px'
                                        }}>
                                            <div className="client-logo">
                                                <img src="assets/img/company/logo.svg" className="w-auto" alt="img" />
                                            </div>
                                        </div>
                                        <div className="owl-item" style={{
                                            width: '168px',
                                            marginRight: '24px'
                                        }}>
                                            <div className="client-logo">
                                                <img src="assets/img/company/logo.svg" className="w-auto" alt="img" />
                                            </div>
                                        </div>
                                        <div className="owl-item" style={{
                                            width: '168px',
                                            marginRight: '24px'
                                        }}>
                                            <div className="client-logo">
                                                <img src="assets/img/company/logo.svg" className="w-auto" alt="img" />
                                            </div>
                                        </div>
                                        <div className="owl-item" style={{
                                            width: '168px',
                                            marginRight: '24px'
                                        }}>
                                            <div className="client-logo">
                                                <img src="assets/img/company/logo.svg" className="w-auto" alt="img" />
                                            </div>
                                        </div>
                                        <div className="owl-item" style={{
                                            width: '168px',
                                            marginRight: '24px'
                                        }}>
                                            <div className="client-logo">
                                                <img src="assets/img/company/logo.svg" className="w-auto" alt="img" />
                                            </div>
                                        </div>
                                        <div className="owl-item" style={{
                                            width: '168px',
                                            marginRight: '24px'
                                        }}>
                                            <div className="client-logo">
                                                <img src="assets/img/company/logo.svg" className="w-auto" alt="img" />
                                            </div>
                                        </div>
                                        <div className="owl-item active" style={{
                                            width: '168px',
                                            marginRight: '24px'
                                        }}>
                                            <div className="client-logo">
                                                <img src="assets/img/company/logo.svg" className="w-auto" alt="img" />
                                            </div>
                                        </div>
                                        <div className="owl-item active" style={{
                                            width: '168px',
                                            marginRight: '24px'
                                        }}>
                                            <div className="client-logo">
                                                <img src="assets/img/company/logo.svg" className="w-auto" alt="img" />
                                            </div>
                                        </div>
                                        <div className="owl-item cloned active" style={{
                                            width: '168px',
                                            marginRight: '24px'
                                        }}>
                                            <div className="client-logo">
                                                <img src="assets/img/company/logo.svg" className="w-auto" alt="img" />
                                            </div>
                                        </div>
                                        <div className="owl-item cloned active" style={{
                                            width: '168px',
                                            marginRight: '24px'
                                        }}>
                                            <div className="client-logo">
                                                <img src="assets/img/company/logo.svg" className="w-auto" alt="img" />
                                            </div>
                                        </div>
                                        <div className="owl-item cloned active" style={{
                                            width: '168px',
                                            marginRight: '24px'
                                        }}>
                                            <div className="client-logo">
                                                <img src="assets/img/company/logo.svg" className="w-auto" alt="img" />
                                            </div>
                                        </div>
                                        <div className="owl-item cloned" style={{
                                            width: '168px',
                                            marginRight: '24px'
                                        }}>
                                            <div className="client-logo">
                                                <img src="assets/img/company/logo.svg" className="w-auto" alt="img" />
                                            </div>
                                        </div>
                                        <div className="owl-item cloned" style={{
                                            width: '168px',
                                            marginRight: '24px'
                                        }}>
                                            <div className="client-logo">
                                                <img src="assets/img/company/logo.svg" className="w-auto" alt="img" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="owl-nav disabled"><button type="button" role="presentation" className="owl-prev"><i
                                    className="fa-solid fa-chevron-left"></i></button><button type="button"
                                        role="presentation" className="owl-next"><i
                                            className="fa-solid fa-chevron-right"></i></button></div>
                                <div className="owl-dots disabled"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="popular-section-two">
                <div className="container">
                    <div className="section-header-two text-center" data-aos="fade-up">
                        <h2 className="mb-2"><span className="title-bg"></span>Popular Talent Categories<span
                            className="title-bg2"></span></h2>
                        <p>Discover inspiring stories, impactful skills, and creative talent across Africa</p>
                    </div>
                    <div
                        className="row row-gap-4 row-cols-xl-5 row-cols-lg-4 row-cols-md-3 row-cols-sm-2 row-cols-1 align-items-center">
                        {categories.map((cat) => (
                            <div className="col d-flex">
                                <div className="pop-category flex-fill" data-aos="flip-left">
                                    <span><i className="ti ti-movie"></i></span>
                                    <h6 className="mb-1"><a href="#">{cat.name}</a></h6>
                                    <p>85 Stories</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>


            <div className="next-gen-section">
                <div className="container">
                    <div className="section-header-two text-center" data-aos="fade-up">
                        <h2 className="mb-2">
                            <span className="title-bg"></span>
                            Meet the Next Generation of talents
                            <span className="title-bg2"></span>
                        </h2>
                        <p>Connect with the next wave of talents, guiding you with fresh perspectives</p>
                    </div>

                    {loading ? (
                        <p className="text-center">Loading...</p>
                    ) : (
                        <>
                            <div className="row seller-list">
                                {talents.map((talent) => (
                                    <div className="col-xl-3 col-lg-4 col-md-6" key={talent.id}>
                                        <div className="card" data-aos="flip-left">
                                            <div className="card-body text-center">
                                                <span className="avatar">
                                                    <a href="talent-profile.html">
                                                        <img
                                                            className="rounded-pill"
                                                            src="assets/img/user/profile.jpg"
                                                            alt="img"
                                                            height="50"
                                                            width="50"
                                                        />
                                                    </a>
                                                    <i className="ti ti-discount-check-filled verify-icon"></i>
                                                </span>
                                                <h6 className="mb-1">
                                                    <a href="talent-profile.html">{talent.name}</a>
                                                </h6>
                                                <p>{talent.skill}</p>
                                                <p className="mb-0 location-text d-inline-flex align-items-center">
                                                    <img
                                                        src="assets/img/flags/flag-for-rwanda.svg"
                                                        alt="flag"
                                                        className="me-1"
                                                    />
                                                    Rwanda <i className="ti ti-point-filled mx-1"></i> Total Gigs: 45
                                                </p>
                                                <div className="d-flex gap-2 align-items-center flex-wrap mt-3 justify-content-center">
                                                    <a href="service-details.html" className="badge bg-light">
                                                        Wordpress
                                                    </a>
                                                    <a href="service-details.html" className="badge bg-light">
                                                        Figma
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="text-center mt-3" data-aos="fade-up">
                                <a href="/talents" className="btn btn-lg btn-dark">
                                    View All Talents
                                </a>
                            </div>
                        </>
                    )}
                </div>
            </div>


            <div className="how-it-works">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-12">
                            <div className="how-it-works-content position-relative row">
                                <img src="assets/img/home/shape-1.svg" alt="img" className="img-fluid how-it-works-bg" />
                                <div className="section-header-two" data-aos="fade-up">
                                    <h2 className="mb-2"><span className="title-bg"></span>How It Works<span
                                        className="title-bg2"></span></h2>
                                    <p>Empowering young talents through storytelling, skills sharing, and community support.
                                    </p>
                                </div>
                                <div className="col-md-6 how-it-works-item d-flex align-items-center p-3 bg-white rounded"
                                    data-aos="fade-up">
                                    <span className="count bg-primary-transparent">01</span>
                                    <div>
                                        <h6 className="mb-2">Create Your Talent Profile</h6>
                                        <p className="mb-0">Sign up and showcase your story, skills, and aspirations through
                                            text, images, and videos.</p>
                                    </div>
                                </div>
                                <div className="col-md-6 how-it-works-item d-flex align-items-center p-3 bg-white rounded"
                                    data-aos="fade-up">
                                    <span className="count bg-secondary-transparent">02</span>
                                    <div>
                                        <h6 className="mb-2">Get Discovered & Rated</h6>
                                        <p className="mb-0">Users browse talents by category, like your story, rate your skills,
                                            and share feedback to help you grow.</p>
                                    </div>
                                </div>
                                <div className="col-md-6 how-it-works-item d-flex align-items-center p-3 bg-white rounded"
                                    data-aos="fade-up">
                                    <span className="count bg-pink-transparent">03</span>
                                    <div>
                                        <h6 className="mb-2">Earn Support & Recognition</h6>
                                        <p className="mb-0">Receive donations or course purchases, and gain visibility through
                                            the Future Connect community.</p>
                                    </div>
                                </div>
                                <div className="col-md-6 how-it-works-item d-flex align-items-center p-3 bg-white rounded"
                                    data-aos="fade-up">
                                    <span className="count bg-success-transparent">04</span>
                                    <div>
                                        <h6 className="mb-2">Grow With Us</h6>
                                        <p className="mb-0">Access learning resources, connect with agents and mentors, and keep
                                            your profile evolving.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="service-slider-section">
                <div className="horizontal-slide d-flex" data-direction="right" data-speed="slow">
                    <div className="slide-list d-flex gap-4">
                        <div className="p-3 px-4 d-flex align-items-center service-item">
                            <h4>Storytelling</h4>
                        </div>
                        <div className="p-3 px-4 d-flex align-items-center service-item">
                            <h4>Creative Writing</h4>
                        </div>
                        <div className="p-3 px-4 d-flex align-items-center service-item">
                            <h4>Music & Performance</h4>
                        </div>
                        <div className="p-3 px-4 d-flex align-items-center service-item">
                            <h4>Visual Arts</h4>
                        </div>
                        <div className="p-3 px-4 d-flex align-items-center service-item">
                            <h4>Videography</h4>
                        </div>
                        <div className="p-3 px-4 d-flex align-items-center service-item">
                            <h4>Graphic Design</h4>
                        </div>
                        <div className="p-3 px-4 d-flex align-items-center service-item">
                            <h4>Fashion & Style</h4>
                        </div>
                        <div className="p-3 px-4 d-flex align-items-center service-item">
                            <h4>Tech & Coding</h4>
                        </div>
                        <div className="p-3 px-4 d-flex align-items-center service-item">
                            <h4>Entrepreneurship</h4>
                        </div>
                    </div>
                </div>
            </div>

            <div className="new-services-section">
                <div className="container">
                    <div className="section-header-two text-center" data-aos="fade-up">
                        <h2 className="mb-2"><span className="title-bg"></span>Our New Skills<span className="title-bg2"></span></h2>
                        <p>Unlock a world of opportunities and take control of your future</p>
                    </div>
                    <div className="listing-tab" data-aos="fade-up">
                        <div className="listing-slider">
                            <ul className="nav nav-tabs justify-content-center">
                                <li className="nav-item">
                                    <a href="javascript:void(0);" className="nav-link active" data-bs-toggle="tab"
                                        data-bs-target="#allservices">
                                        All Skills
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="javascript:void(0);" className="nav-link" data-bs-toggle="tab"
                                        data-bs-target="#writing_translation">
                                        Writing & Translation
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="javascript:void(0);" className="nav-link" data-bs-toggle="tab"
                                        data-bs-target="#ai_services">
                                        AI Services
                                    </a>
                                </li>
                                <li>
                                    <a href="javascript:void(0);" className="nav-link" data-bs-toggle="tab"
                                        data-bs-target="#graphics_design">
                                        Graphics & Design
                                    </a>
                                </li>
                                <li>
                                    <a href="javascript:void(0);" className="nav-link" data-bs-toggle="tab"
                                        data-bs-target="#data_analysis">
                                        Data Analysis
                                    </a>
                                </li>
                                <li>
                                    <a href="javascript:void(0);" className="nav-link" data-bs-toggle="tab"
                                        data-bs-target="#analytics_strategy">
                                        Analytics & Strategy
                                    </a>
                                </li>
                                <li>
                                    <a href="javascript:void(0);" className="nav-link" data-bs-toggle="tab"
                                        data-bs-target="#video_animation">
                                        Video & Animation
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="tab-content" data-aos="fade-up">

                        <div className="tab-pane fade show active" id="allservices" role="tabpanel">
                            <div className="row">
                                <div className="col-xl-4 col-md-6">
                                    <div className="gigs-grid">
                                        <div className="gigs-img">
                                            <div className="img-slider owl-carousel">
                                                <div className="slide-images">
                                                    <a href="service-details.html">
                                                        <img src="assets/img/home/service-01.jpg" className="img-fluid"
                                                            alt="Gigs" />
                                                    </a>
                                                </div>
                                                <div className="slide-images">
                                                    <a href="service-details.html">
                                                        <img src="assets/img/gigs/gigs-06.jpg" className="img-fluid" alt="Gigs" />
                                                    </a>
                                                </div>
                                                <div className="slide-images">
                                                    <a href="service-details.html">
                                                        <img src="assets/img/gigs/gigs-07.jpg" className="img-fluid" alt="Gigs" />
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="card-overlay-badge">
                                                <a href="service.html"><span className="badge bg-warning"><i
                                                    className="feather-star"></i>Featured</span></a>
                                                <a href="service.html"><span className="badge bg-danger"><i
                                                    className="fa-solid fa-meteor"></i>Hot</span></a>
                                            </div>
                                            <div className="fav-selection">
                                                <a href="javascript:void(0);">
                                                    <i className="feather-video"></i>
                                                </a>
                                                <a href="javascript:void(0);" className="fav-icon">
                                                    <i className="feather-heart"></i>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="gigs-content">
                                            <div className="gigs-info">
                                                <div>
                                                    <a href="service-details.html" className="badge bg-light">
                                                        Programming & Tech
                                                    </a>
                                                    <span className="ms-2">+1</span>
                                                </div>
                                                <div className="star-rate">
                                                    <span><i className="fa-solid fa-star"></i>4.8 (360 Reviews)</span>
                                                </div>
                                            </div>
                                            <div className="gigs-title">
                                                <h5>
                                                    <a href="service-details.html">
                                                        Virtual assistants (VAs) Provide Administrative Support
                                                    </a>
                                                </h5>
                                            </div>

                                            <div className="gigs-card-footer">
                                                <div className="d-flex align-items-center gigs-left-text">
                                                    <a href="talent-profile.html"
                                                        className="avatar avatar-sm flex-shrink-0"><img
                                                            src="assets/img/user/profile.jpg" className="img-fluid rounded-pill"
                                                            alt="img" /></a>
                                                    <div className="ms-2">
                                                        <h6 className="mb-0"><a href="#">Adrian Silvia</a></h6>
                                                        <p className="mb-0">Newyork, USA</p>
                                                    </div>
                                                </div>
                                                <div className="text-end">
                                                    <h6 className="mb-1">$645</h6>
                                                    <span>Delivery in 1 day</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-md-6">
                                    <div className="gigs-grid">
                                        <div className="gigs-img">
                                            <div className="img-slider owl-carousel">
                                                <div className="slide-images">
                                                    <a href="service-details.html">
                                                        <img src="assets/img/home/service-02.jpg" className="img-fluid"
                                                            alt="Gigs" />
                                                    </a>
                                                </div>
                                                <div className="slide-images">
                                                    <a href="service-details.html">
                                                        <img src="assets/img/gigs/gigs-08.jpg" className="img-fluid" alt="Gigs" />
                                                    </a>
                                                </div>
                                                <div className="slide-images">
                                                    <a href="service-details.html">
                                                        <img src="assets/img/gigs/gigs-09.jpg" className="img-fluid" alt="Gigs" />
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="card-overlay-badge">
                                                <a href="service.html"><span className="badge bg-warning"><i
                                                    className="feather-star"></i>Featured</span></a>
                                                <a href="service.html"><span className="badge bg-danger"><i
                                                    className="fa-solid fa-meteor"></i>Hot</span></a>
                                            </div>
                                            <div className="fav-selection">
                                                <a href="javascript:void(0);">
                                                    <i className="feather-video"></i>
                                                </a>
                                                <a href="javascript:void(0);" className="fav-icon">
                                                    <i className="feather-heart"></i>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="gigs-content">
                                            <div className="gigs-info">
                                                <div>
                                                    <a href="service-details.html" className="badge bg-light">
                                                        Programming & Tech
                                                    </a>
                                                </div>
                                                <div className="star-rate">
                                                    <span><i className="fa-solid fa-star"></i>5.0 (40 Reviews)</span>
                                                </div>
                                            </div>
                                            <div className="gigs-title">
                                                <h5>
                                                    <a href="service-details.html">
                                                        Offer services for Events, Portraits, Product Shoots
                                                    </a>
                                                </h5>
                                            </div>

                                            <div className="gigs-card-footer">
                                                <div className="d-flex align-items-center gigs-left-text">
                                                    <a href="talent-profile.html"
                                                        className="avatar avatar-sm flex-shrink-0"><img
                                                            src="assets/img/user/profile.jpg" className="img-fluid rounded-pill"
                                                            alt="img" /></a>
                                                    <div className="ms-2">
                                                        <h6 className="mb-0"><a href="#">Sebastian Vettal</a></h6>
                                                        <p className="mb-0">Las Vegas, USA</p>
                                                    </div>
                                                </div>
                                                <div className="text-end">
                                                    <h6 className="mb-1">$830</h6>
                                                    <span>Delivery in 4 Days</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-md-6">
                                    <div className="gigs-grid">
                                        <div className="gigs-img">
                                            <div className="img-slider owl-carousel">
                                                <div className="slide-images">
                                                    <a href="service-details.html">
                                                        <img src="assets/img/home/service-03.jpg" className="img-fluid"
                                                            alt="Gigs" />
                                                    </a>
                                                </div>
                                                <div className="slide-images">
                                                    <a href="service-details.html">
                                                        <img src="assets/img/gigs/gigs-10.jpg" className="img-fluid" alt="Gigs" />
                                                    </a>
                                                </div>
                                                <div className="slide-images">
                                                    <a href="service-details.html">
                                                        <img src="assets/img/gigs/gigs-11.jpg" className="img-fluid" alt="Gigs" />
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="card-overlay-badge">
                                                <a href="service.html"><span className="badge bg-warning"><i
                                                    className="feather-star"></i>Featured</span></a>
                                                <a href="service.html"><span className="badge bg-danger"><i
                                                    className="fa-solid fa-meteor"></i>Hot</span></a>
                                            </div>
                                            <div className="fav-selection">
                                                <a href="javascript:void(0);">
                                                    <i className="feather-video"></i>
                                                </a>
                                                <a href="javascript:void(0);" className="fav-icon">
                                                    <i className="feather-heart"></i>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="gigs-content">
                                            <div className="gigs-info">
                                                <div>
                                                    <a href="service-details.html" className="badge bg-light">
                                                        Programming & Tech
                                                    </a>
                                                </div>
                                                <div className="star-rate">
                                                    <span><i className="fa-solid fa-star"></i>5.0 (36 Reviews)</span>
                                                </div>
                                            </div>
                                            <div className="gigs-title">
                                                <h5>
                                                    <a href="service-details.html">
                                                        Record Scripts for Advertisements, Audiobooks, Videos, and More.
                                                    </a>
                                                </h5>
                                            </div>

                                            <div className="gigs-card-footer">
                                                <div className="d-flex align-items-center gigs-left-text">
                                                    <a href="talent-profile.html"
                                                        className="avatar avatar-sm flex-shrink-0"><img
                                                            src="assets/img/user/profile.jpg" className="img-fluid rounded-pill"
                                                            alt="img" /></a>
                                                    <div className="ms-2">
                                                        <h6 className="mb-0"><a href="#">Alex Revaria</a></h6>
                                                        <p className="mb-0">California, USA</p>
                                                    </div>
                                                </div>
                                                <div className="text-end">
                                                    <h6 className="mb-1">$550</h6>
                                                    <span>Delivery in 2 Days</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className="tab-pane fade" id="writing_translation" role="tabpanel">
                            <div className="row">
                                <div className="col-xl-4 col-md-6">
                                    <div className="gigs-grid">
                                        <div className="gigs-img">
                                            <div className="img-slider owl-carousel">
                                                <div className="slide-images">
                                                    <a href="service-details.html">
                                                        <img src="assets/img/gigs/gigs-02.jpg" className="img-fluid" alt="Gigs" />
                                                    </a>
                                                </div>
                                                <div className="slide-images">
                                                    <a href="service-details.html">
                                                        <img src="assets/img/gigs/gigs-04.jpg" className="img-fluid" alt="Gigs" />
                                                    </a>
                                                </div>
                                                <div className="slide-images">
                                                    <a href="service-details.html">
                                                        <img src="assets/img/gigs/gigs-05.jpg" className="img-fluid" alt="Gigs" />
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="card-overlay-badge">
                                                <a href="service.html"><span className="badge bg-warning"><i
                                                    className="feather-star"></i>Featured</span></a>
                                                <a href="service.html"><span className="badge bg-danger"><i
                                                    className="fa-solid fa-meteor"></i>Hot</span></a>
                                            </div>
                                            <div className="fav-selection">
                                                <a href="javascript:void(0);">
                                                    <i className="feather-video"></i>
                                                </a>
                                                <a href="javascript:void(0);" className="fav-icon">
                                                    <i className="feather-heart"></i>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="gigs-content">
                                            <div className="gigs-info">
                                                <div>
                                                    <a href="service-details.html" className="badge bg-light">
                                                        Programming
                                                    </a>
                                                </div>
                                                <div className="star-rate">
                                                    <span><i className="fa-solid fa-star"></i>5.0 (28 Reviews)</span>
                                                </div>
                                            </div>
                                            <div className="gigs-title">
                                                <h5>
                                                    <a href="service-details.html">
                                                        Embedded Android & AOSP customizations
                                                    </a>
                                                </h5>
                                            </div>

                                            <div className="gigs-card-footer">
                                                <div className="d-flex align-items-center gigs-left-text">
                                                    <a href="talent-profile.html"
                                                        className="avatar avatar-sm flex-shrink-0"><img
                                                            src="assets/img/user/profile.jpg" className="img-fluid rounded-pill"
                                                            alt="img" /></a>
                                                    <div className="ms-2">
                                                        <h6 className="mb-0"><a href="#">Adrian Silvia</a></h6>
                                                        <p className="mb-0">Newyork, USA</p>
                                                    </div>
                                                </div>
                                                <div className="text-end">
                                                    <h6 className="mb-1">$645</h6>
                                                    <span>Delivery in 1 day</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-md-6">
                                    <div className="gigs-grid">
                                        <div className="gigs-img">
                                            <div className="img-slider owl-carousel">
                                                <div className="slide-images">
                                                    <a href="service-details.html">
                                                        <img src="assets/img/gigs/gigs-01.jpg" className="img-fluid" alt="Gigs" />
                                                    </a>
                                                </div>
                                                <div className="slide-images">
                                                    <a href="service-details.html">
                                                        <img src="assets/img/gigs/gigs-07.jpg" className="img-fluid" alt="Gigs" />
                                                    </a>
                                                </div>
                                                <div className="slide-images">
                                                    <a href="service-details.html">
                                                        <img src="assets/img/gigs/gigs-08.jpg" className="img-fluid" alt="Gigs" />
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="card-overlay-badge">
                                                <a href="service.html"><span className="badge bg-warning"><i
                                                    className="feather-star"></i>Featured</span></a>
                                                <a href="service.html"><span className="badge bg-danger"><i
                                                    className="fa-solid fa-meteor"></i>Hot</span></a>
                                            </div>
                                            <div className="fav-selection">
                                                <a href="javascript:void(0);">
                                                    <i className="feather-video"></i>
                                                </a>
                                                <a href="javascript:void(0);" className="fav-icon">
                                                    <i className="feather-heart"></i>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="gigs-content">
                                            <div className="gigs-info">
                                                <div>
                                                    <a href="service-details.html" className="badge bg-light">
                                                        Videography
                                                    </a>
                                                </div>
                                                <div className="star-rate">
                                                    <span><i className="fa-solid fa-star"></i>4.3 (22 Reviews)</span>
                                                </div>
                                            </div>
                                            <div className="gigs-title">
                                                <h5>
                                                    <a href="service-details.html">
                                                        I will do professional lifestyle and product photography
                                                    </a>
                                                </h5>
                                            </div>

                                            <div className="gigs-card-footer">
                                                <div className="d-flex align-items-center gigs-left-text">
                                                    <a href="talent-profile.html"
                                                        className="avatar avatar-sm flex-shrink-0"><img
                                                            src="assets/img/user/profile.jpg" className="img-fluid rounded-pill"
                                                            alt="img" /></a>
                                                    <div className="ms-2">
                                                        <h6 className="mb-0"><a href="#">Sebastian Vettal</a></h6>
                                                        <p className="mb-0">Las Vegas, USA</p>
                                                    </div>
                                                </div>
                                                <div className="text-end">
                                                    <h6 className="mb-1">$830</h6>
                                                    <span>Delivery in 4 Days</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-md-6">
                                    <div className="gigs-grid">
                                        <div className="gigs-img">
                                            <div className="img-slider owl-carousel">
                                                <div className="slide-images">
                                                    <a href="service-details.html">
                                                        <img src="assets/img/home/service-03.jpg" className="img-fluid"
                                                            alt="Gigs" />
                                                    </a>
                                                </div>
                                                <div className="slide-images">
                                                    <a href="service-details.html">
                                                        <img src="assets/img/gigs/gigs-10.jpg" className="img-fluid" alt="Gigs" />
                                                    </a>
                                                </div>
                                                <div className="slide-images">
                                                    <a href="service-details.html">
                                                        <img src="assets/img/gigs/gigs-11.jpg" className="img-fluid" alt="Gigs" />
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="card-overlay-badge">
                                                <a href="service.html"><span className="badge bg-warning"><i
                                                    className="feather-star"></i>Featured</span></a>
                                                <a href="service.html"><span className="badge bg-danger"><i
                                                    className="fa-solid fa-meteor"></i>Hot</span></a>
                                            </div>
                                            <div className="fav-selection">
                                                <a href="javascript:void(0);">
                                                    <i className="feather-video"></i>
                                                </a>
                                                <a href="javascript:void(0);" className="fav-icon">
                                                    <i className="feather-heart"></i>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="gigs-content">
                                            <div className="gigs-info">
                                                <div>
                                                    <a href="service-details.html" className="badge bg-light">
                                                        Programming & Tech
                                                    </a>
                                                </div>
                                                <div className="star-rate">
                                                    <span><i className="fa-solid fa-star"></i>5.0 (36 Reviews)</span>
                                                </div>
                                            </div>
                                            <div className="gigs-title">
                                                <h5>
                                                    <a href="service-details.html">
                                                        Record Scripts for Advertisements, Audiobooks, Videos, and More.
                                                    </a>
                                                </h5>
                                            </div>

                                            <div className="gigs-card-footer">
                                                <div className="d-flex align-items-center gigs-left-text">
                                                    <a href="talent-profile.html"
                                                        className="avatar avatar-sm flex-shrink-0"><img
                                                            src="assets/img/user/profile.jpg" className="img-fluid rounded-pill"
                                                            alt="img" /></a>
                                                    <div className="ms-2">
                                                        <h6 className="mb-0"><a href="#">Alex Revaria</a></h6>
                                                        <p className="mb-0">California, USA</p>
                                                    </div>
                                                </div>
                                                <div className="text-end">
                                                    <h6 className="mb-1">$550</h6>
                                                    <span>Delivery in 2 Days</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className="tab-pane fade" id="ai_services" role="tabpanel">
                            <div className="row">
                                <div className="col-xl-4 col-md-6">
                                    <div className="gigs-grid">
                                        <div className="gigs-img">
                                            <div className="img-slider owl-carousel">
                                                <div className="slide-images">
                                                    <a href="service-details.html">
                                                        <img src="assets/img/list/list-12.jpg" className="img-fluid" alt="Gigs" />
                                                    </a>
                                                </div>
                                                <div className="slide-images">
                                                    <a href="service-details.html">
                                                        <img src="assets/img/list/list-07.jpg" className="img-fluid" alt="Gigs" />
                                                    </a>
                                                </div>
                                                <div className="slide-images">
                                                    <a href="service-details.html">
                                                        <img src="assets/img/list/list-08.jpg" className="img-fluid" alt="Gigs" />
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="card-overlay-badge">
                                                <a href="service.html"><span className="badge bg-warning"><i
                                                    className="feather-star"></i>Featured</span></a>
                                                <a href="service.html"><span className="badge bg-danger"><i
                                                    className="fa-solid fa-meteor"></i>Hot</span></a>
                                            </div>
                                            <div className="fav-selection">
                                                <a href="javascript:void(0);">
                                                    <i className="feather-video"></i>
                                                </a>
                                                <a href="javascript:void(0);" className="fav-icon">
                                                    <i className="feather-heart"></i>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="gigs-content">
                                            <div className="gigs-info">
                                                <div>
                                                    <a href="service-details.html" className="badge bg-light">
                                                        Programming
                                                    </a>
                                                </div>
                                                <div className="star-rate">
                                                    <span><i className="fa-solid fa-star"></i>5.0 (28 Reviews)</span>
                                                </div>
                                            </div>
                                            <div className="gigs-title">
                                                <h5>
                                                    <a href="service-details.html">
                                                        I will do english or german transcript of any audio file or video
                                                    </a>
                                                </h5>
                                            </div>

                                            <div className="gigs-card-footer">
                                                <div className="d-flex align-items-center gigs-left-text">
                                                    <a href="talent-profile.html"
                                                        className="avatar avatar-sm flex-shrink-0"><img
                                                            src="assets/img/user/profile.jpg" className="img-fluid rounded-pill"
                                                            alt="img" /></a>
                                                    <div className="ms-2">
                                                        <h6 className="mb-0"><a href="#">Adrian Silvia</a></h6>
                                                        <p className="mb-0">Newyork, USA</p>
                                                    </div>
                                                </div>
                                                <div className="text-end">
                                                    <h6 className="mb-1">$645</h6>
                                                    <span>Delivery in 1 day</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-md-6">
                                    <div className="gigs-grid">
                                        <div className="gigs-img">
                                            <div className="img-slider owl-carousel">
                                                <div className="slide-images">
                                                    <a href="service-details.html">
                                                        <img src="assets/img/list/list-11.jpg" className="img-fluid" alt="Gigs" />
                                                    </a>
                                                </div>
                                                <div className="slide-images">
                                                    <a href="service-details.html">
                                                        <img src="assets/img/list/list-05.jpg" className="img-fluid" alt="Gigs" />
                                                    </a>
                                                </div>
                                                <div className="slide-images">
                                                    <a href="service-details.html">
                                                        <img src="assets/img/list/list-06.jpg" className="img-fluid" alt="Gigs" />
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="card-overlay-badge">
                                                <a href="service.html"><span className="badge bg-warning"><i
                                                    className="feather-star"></i>Featured</span></a>
                                                <a href="service.html"><span className="badge bg-danger"><i
                                                    className="fa-solid fa-meteor"></i>Hot</span></a>
                                            </div>
                                            <div className="fav-selection">
                                                <a href="javascript:void(0);">
                                                    <i className="feather-video"></i>
                                                </a>
                                                <a href="javascript:void(0);" className="fav-icon">
                                                    <i className="feather-heart"></i>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="gigs-content">
                                            <div className="gigs-info">
                                                <div>
                                                    <a href="service-details.html" className="badge bg-light">
                                                        Videography
                                                    </a>
                                                </div>
                                                <div className="star-rate">
                                                    <span><i className="fa-solid fa-star"></i>4.3 (22 Reviews)</span>
                                                </div>
                                            </div>
                                            <div className="gigs-title">
                                                <h5>
                                                    <a href="service-details.html">
                                                        I will do professional lifestyle and product photography
                                                    </a>
                                                </h5>
                                            </div>

                                            <div className="gigs-card-footer">
                                                <div className="d-flex align-items-center gigs-left-text">
                                                    <a href="talent-profile.html"
                                                        className="avatar avatar-sm flex-shrink-0"><img
                                                            src="assets/img/user/profile.jpg" className="img-fluid rounded-pill"
                                                            alt="img" /></a>
                                                    <div className="ms-2">
                                                        <h6 className="mb-0"><a href="#">Sebastian Vettal</a></h6>
                                                        <p className="mb-0">Las Vegas, USA</p>
                                                    </div>
                                                </div>
                                                <div className="text-end">
                                                    <h6 className="mb-1">$830</h6>
                                                    <span>Delivery in 4 Days</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-md-6">
                                    <div className="gigs-grid">
                                        <div className="gigs-img">
                                            <div className="img-slider owl-carousel">
                                                <div className="slide-images">
                                                    <a href="service-details.html">
                                                        <img src="assets/img/list/list-07.jpg" className="img-fluid" alt="Gigs" />
                                                    </a>
                                                </div>
                                                <div className="slide-images">
                                                    <a href="service-details.html">
                                                        <img src="assets/img/list/list-03.jpg" className="img-fluid" alt="Gigs" />
                                                    </a>
                                                </div>
                                                <div className="slide-images">
                                                    <a href="service-details.html">
                                                        <img src="assets/img/list/list-13.jpg" className="img-fluid" alt="Gigs" />
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="card-overlay-badge">
                                                <a href="service.html"><span className="badge bg-warning"><i
                                                    className="feather-star"></i>Featured</span></a>
                                                <a href="service.html"><span className="badge bg-danger"><i
                                                    className="fa-solid fa-meteor"></i>Hot</span></a>
                                            </div>
                                            <div className="fav-selection">
                                                <a href="javascript:void(0);">
                                                    <i className="feather-video"></i>
                                                </a>
                                                <a href="javascript:void(0);" className="fav-icon">
                                                    <i className="feather-heart"></i>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="gigs-content">
                                            <div className="gigs-info">
                                                <div>
                                                    <a href="service-details.html" className="badge bg-light">
                                                        Programming & Tech
                                                    </a>
                                                </div>
                                                <div className="star-rate">
                                                    <span><i className="fa-solid fa-star"></i>5.0 (36 Reviews)</span>
                                                </div>
                                            </div>
                                            <div className="gigs-title">
                                                <h5>
                                                    <a href="service-details.html">
                                                        Record Scripts for Advertisements, Audiobooks, Videos, and More.
                                                    </a>
                                                </h5>
                                            </div>

                                            <div className="gigs-card-footer">
                                                <div className="d-flex align-items-center gigs-left-text">
                                                    <a href="talent-profile.html"
                                                        className="avatar avatar-sm flex-shrink-0"><img
                                                            src="assets/img/user/profile.jpg" className="img-fluid rounded-pill"
                                                            alt="img" /></a>
                                                    <div className="ms-2">
                                                        <h6 className="mb-0"><a href="#">Alex Revaria</a></h6>
                                                        <p className="mb-0">California, USA</p>
                                                    </div>
                                                </div>
                                                <div className="text-end">
                                                    <h6 className="mb-1">$550</h6>
                                                    <span>Delivery in 2 Days</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className="tab-pane fade" id="graphics_design" role="tabpanel">
                            <div className="row">
                                <div className="col-xl-4 col-md-6">
                                    <div className="gigs-grid">
                                        <div className="gigs-img">
                                            <div className="img-slider owl-carousel">
                                                <div className="slide-images">
                                                    <a href="service-details.html">
                                                        <img src="assets/img/list/list-01.jpg" className="img-fluid" alt="Gigs" />
                                                    </a>
                                                </div>
                                                <div className="slide-images">
                                                    <a href="service-details.html">
                                                        <img src="assets/img/list/list-02.jpg" className="img-fluid" alt="Gigs" />
                                                    </a>
                                                </div>
                                                <div className="slide-images">
                                                    <a href="service-details.html">
                                                        <img src="assets/img/list/list-03.jpg" className="img-fluid" alt="Gigs" />
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="card-overlay-badge">
                                                <a href="service.html"><span className="badge bg-warning"><i
                                                    className="feather-star"></i>Featured</span></a>
                                                <a href="service.html"><span className="badge bg-danger"><i
                                                    className="fa-solid fa-meteor"></i>Hot</span></a>
                                            </div>
                                            <div className="fav-selection">
                                                <a href="javascript:void(0);">
                                                    <i className="feather-video"></i>
                                                </a>
                                                <a href="javascript:void(0);" className="fav-icon">
                                                    <i className="feather-heart"></i>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="gigs-content">
                                            <div className="gigs-info">
                                                <div>
                                                    <a href="service-details.html" className="badge bg-light">
                                                        Logo Design
                                                    </a>
                                                </div>
                                                <div className="star-rate">
                                                    <span><i className="fa-solid fa-star"></i>5.0 (28 Reviews)</span>
                                                </div>
                                            </div>
                                            <div className="gigs-title">
                                                <h5>
                                                    <a href="service-details.html">
                                                        I will do professional, unique and modern business logo
                                                    </a>
                                                </h5>
                                            </div>

                                            <div className="gigs-card-footer">
                                                <div className="d-flex align-items-center gigs-left-text">
                                                    <a href="talent-profile.html"
                                                        className="avatar avatar-sm flex-shrink-0"><img
                                                            src="assets/img/user/profile.jpg" className="img-fluid rounded-pill"
                                                            alt="img" /></a>
                                                    <div className="ms-2">
                                                        <h6 className="mb-0"><a href="#">Adrian Silvia</a></h6>
                                                        <p className="mb-0">Newyork, USA</p>
                                                    </div>
                                                </div>
                                                <div className="text-end">
                                                    <h6 className="mb-1">$645</h6>
                                                    <span>Delivery in 1 day</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-md-6">
                                    <div className="gigs-grid">
                                        <div className="gigs-img">
                                            <div className="img-slider owl-carousel">
                                                <div className="slide-images">
                                                    <a href="service-details.html">
                                                        <img src="assets/img/list/list-02.jpg" className="img-fluid" alt="Gigs" />
                                                    </a>
                                                </div>
                                                <div className="slide-images">
                                                    <a href="service-details.html">
                                                        <img src="assets/img/list/list-01.jpg" className="img-fluid" alt="Gigs" />
                                                    </a>
                                                </div>
                                                <div className="slide-images">
                                                    <a href="service-details.html">
                                                        <img src="assets/img/list/list-03.jpg" className="img-fluid" alt="Gigs" />
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="card-overlay-badge">
                                                <a href="service.html"><span className="badge bg-warning"><i
                                                    className="feather-star"></i>Featured</span></a>
                                                <a href="service.html"><span className="badge bg-danger"><i
                                                    className="fa-solid fa-meteor"></i>Hot</span></a>
                                            </div>
                                            <div className="fav-selection">
                                                <a href="javascript:void(0);">
                                                    <i className="feather-video"></i>
                                                </a>
                                                <a href="javascript:void(0);" className="fav-icon">
                                                    <i className="feather-heart"></i>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="gigs-content">
                                            <div className="gigs-info">
                                                <div>
                                                    <a href="service-details.html" className="badge bg-light">
                                                        Vector Graphics
                                                    </a>
                                                </div>
                                                <div className="star-rate">
                                                    <span><i className="fa-solid fa-star"></i>4.3 (22 Reviews)</span>
                                                </div>
                                            </div>
                                            <div className="gigs-title">
                                                <h5>
                                                    <a href="service-details.html">
                                                        I will design unique, simple and modern custom icons set
                                                    </a>
                                                </h5>
                                            </div>

                                            <div className="gigs-card-footer">
                                                <div className="d-flex align-items-center gigs-left-text">
                                                    <a href="talent-profile.html"
                                                        className="avatar avatar-sm flex-shrink-0"><img
                                                            src="assets/img/user/profile.jpg" className="img-fluid rounded-pill"
                                                            alt="img" /></a>
                                                    <div className="ms-2">
                                                        <h6 className="mb-0"><a href="#">Sebastian Vettal</a></h6>
                                                        <p className="mb-0">Las Vegas, USA</p>
                                                    </div>
                                                </div>
                                                <div className="text-end">
                                                    <h6 className="mb-1">$830</h6>
                                                    <span>Delivery in 4 Days</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-md-6">
                                    <div className="gigs-grid">
                                        <div className="gigs-img">
                                            <div className="img-slider owl-carousel">
                                                <div className="slide-images">
                                                    <a href="service-details.html">
                                                        <img src="assets/img/list/list-03.jpg" className="img-fluid" alt="Gigs" />
                                                    </a>
                                                </div>
                                                <div className="slide-images">
                                                    <a href="service-details.html">
                                                        <img src="assets/img/list/list-02.jpg" className="img-fluid" alt="Gigs" />
                                                    </a>
                                                </div>
                                                <div className="slide-images">
                                                    <a href="service-details.html">
                                                        <img src="assets/img/list/list-01.jpg" className="img-fluid" alt="Gigs" />
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="card-overlay-badge">
                                                <a href="service.html"><span className="badge bg-warning"><i
                                                    className="feather-star"></i>Featured</span></a>
                                                <a href="service.html"><span className="badge bg-danger"><i
                                                    className="fa-solid fa-meteor"></i>Hot</span></a>
                                            </div>
                                            <div className="fav-selection">
                                                <a href="javascript:void(0);">
                                                    <i className="feather-video"></i>
                                                </a>
                                                <a href="javascript:void(0);" className="fav-icon">
                                                    <i className="feather-heart"></i>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="gigs-content">
                                            <div className="gigs-info">
                                                <div>
                                                    <a href="service-details.html" className="badge bg-light">
                                                        Illustration
                                                    </a>
                                                </div>
                                                <div className="star-rate">
                                                    <span><i className="fa-solid fa-star"></i>4.6 (475 Reviews)</span>
                                                </div>
                                            </div>
                                            <div className="gigs-title">
                                                <h5>
                                                    <a href="service-details.html">
                                                        I will do vector tracing or convert to vector quickly
                                                    </a>
                                                </h5>
                                            </div>

                                            <div className="gigs-card-footer">
                                                <div className="d-flex align-items-center gigs-left-text">
                                                    <a href="talent-profile.html"
                                                        className="avatar avatar-sm flex-shrink-0"><img
                                                            src="assets/img/user/profile.jpg" className="img-fluid rounded-pill"
                                                            alt="img" /></a>
                                                    <div className="ms-2">
                                                        <h6 className="mb-0"><a href="#">Alex Revaria</a></h6>
                                                        <p className="mb-0">California, USA</p>
                                                    </div>
                                                </div>
                                                <div className="text-end">
                                                    <h6 className="mb-1">$550</h6>
                                                    <span>Delivery in 2 Days</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className="tab-pane fade" id="data_analysis" role="tabpanel">
                            <div className="row">
                                <div className="col-xl-4 col-md-6">
                                    <div className="gigs-grid">
                                        <div className="gigs-img">
                                            <div className="img-slider owl-carousel">
                                                <div className="slide-images">
                                                    <a href="service-details.html">
                                                        <img src="assets/img/list/list-03.jpg" className="img-fluid" alt="Gigs" />
                                                    </a>
                                                </div>
                                                <div className="slide-images">
                                                    <a href="service-details.html">
                                                        <img src="assets/img/list/list-05.jpg" className="img-fluid" alt="Gigs" />
                                                    </a>
                                                </div>
                                                <div className="slide-images">
                                                    <a href="service-details.html">
                                                        <img src="assets/img/list/list-06.jpg" className="img-fluid" alt="Gigs" />
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="card-overlay-badge">
                                                <a href="service.html"><span className="badge bg-warning"><i
                                                    className="feather-star"></i>Featured</span></a>
                                                <a href="service.html"><span className="badge bg-danger"><i
                                                    className="fa-solid fa-meteor"></i>Hot</span></a>
                                            </div>
                                            <div className="fav-selection">
                                                <a href="javascript:void(0);">
                                                    <i className="feather-video"></i>
                                                </a>
                                                <a href="javascript:void(0);" className="fav-icon">
                                                    <i className="feather-heart"></i>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="gigs-content">
                                            <div className="gigs-info">
                                                <div>
                                                    <a href="service-details.html" className="badge bg-light">
                                                        Data
                                                    </a>
                                                </div>
                                                <div className="star-rate">
                                                    <span><i className="fa-solid fa-star"></i>4.3 (22 Reviews)</span>
                                                </div>
                                            </div>
                                            <div className="gigs-title">
                                                <h5>
                                                    <a href="service-details.html">
                                                        I will do product data information & syetem analysis
                                                    </a>
                                                </h5>
                                            </div>

                                            <div className="gigs-card-footer">
                                                <div className="d-flex align-items-center gigs-left-text">
                                                    <a href="talent-profile.html"
                                                        className="avatar avatar-sm flex-shrink-0"><img
                                                            src="assets/img/user/profile.jpg" className="img-fluid rounded-pill"
                                                            alt="img" /></a>
                                                    <div className="ms-2">
                                                        <h6 className="mb-0"><a href="#">Adrian Silvia</a></h6>
                                                        <p className="mb-0">Newyork, USA</p>
                                                    </div>
                                                </div>
                                                <div className="text-end">
                                                    <h6 className="mb-1">$645</h6>
                                                    <span>Delivery in 1 day</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-md-6">
                                    <div className="gigs-grid">
                                        <div className="gigs-img">
                                            <div className="img-slider owl-carousel">
                                                <div className="slide-images">
                                                    <a href="service-details.html">
                                                        <img src="assets/img/list/list-11.jpg" className="img-fluid" alt="Gigs" />
                                                    </a>
                                                </div>
                                                <div className="slide-images">
                                                    <a href="service-details.html">
                                                        <img src="assets/img/list/list-05.jpg" className="img-fluid" alt="Gigs" />
                                                    </a>
                                                </div>
                                                <div className="slide-images">
                                                    <a href="service-details.html">
                                                        <img src="assets/img/list/list-06.jpg" className="img-fluid" alt="Gigs" />
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="card-overlay-badge">
                                                <a href="service.html"><span className="badge bg-warning"><i
                                                    className="feather-star"></i>Featured</span></a>
                                                <a href="service.html"><span className="badge bg-danger"><i
                                                    className="fa-solid fa-meteor"></i>Hot</span></a>
                                            </div>
                                            <div className="fav-selection">
                                                <a href="javascript:void(0);">
                                                    <i className="feather-video"></i>
                                                </a>
                                                <a href="javascript:void(0);" className="fav-icon">
                                                    <i className="feather-heart"></i>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="gigs-content">
                                            <div className="gigs-info">
                                                <div>
                                                    <a href="service-details.html" className="badge bg-light">
                                                        Videography
                                                    </a>
                                                </div>
                                                <div className="star-rate">
                                                    <span><i className="fa-solid fa-star"></i>4.3 (22 Reviews)</span>
                                                </div>
                                            </div>
                                            <div className="gigs-title">
                                                <h5>
                                                    <a href="service-details.html">
                                                        I will do professional lifestyle and product photography
                                                    </a>
                                                </h5>
                                            </div>

                                            <div className="gigs-card-footer">
                                                <div className="d-flex align-items-center gigs-left-text">
                                                    <a href="talent-profile.html"
                                                        className="avatar avatar-sm flex-shrink-0"><img
                                                            src="assets/img/user/profile.jpg" className="img-fluid rounded-pill"
                                                            alt="img" /></a>
                                                    <div className="ms-2">
                                                        <h6 className="mb-0"><a href="#">Sebastian Vettal</a></h6>
                                                        <p className="mb-0">Las Vegas, USA</p>
                                                    </div>
                                                </div>
                                                <div className="text-end">
                                                    <h6 className="mb-1">$830</h6>
                                                    <span>Delivery in 4 Days</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-md-6">
                                    <div className="gigs-grid">
                                        <div className="gigs-img">
                                            <div className="img-slider owl-carousel">
                                                <div className="slide-images">
                                                    <a href="service-details.html">
                                                        <img src="assets/img/list/list-12.jpg" className="img-fluid" alt="Gigs" />
                                                    </a>
                                                </div>
                                                <div className="slide-images">
                                                    <a href="service-details.html">
                                                        <img src="assets/img/list/list-07.jpg" className="img-fluid" alt="Gigs" />
                                                    </a>
                                                </div>
                                                <div className="slide-images">
                                                    <a href="service-details.html">
                                                        <img src="assets/img/list/list-08.jpg" className="img-fluid" alt="Gigs" />
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="card-overlay-badge">
                                                <a href="service.html"><span className="badge bg-warning"><i
                                                    className="feather-star"></i>Featured</span></a>
                                                <a href="service.html"><span className="badge bg-danger"><i
                                                    className="fa-solid fa-meteor"></i>Hot</span></a>
                                            </div>
                                            <div className="fav-selection">
                                                <a href="javascript:void(0);">
                                                    <i className="feather-video"></i>
                                                </a>
                                                <a href="javascript:void(0);" className="fav-icon">
                                                    <i className="feather-heart"></i>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="gigs-content">
                                            <div className="gigs-info">
                                                <div>
                                                    <a href="service-details.html" className="badge bg-light">
                                                        Programming
                                                    </a>
                                                </div>
                                                <div className="star-rate">
                                                    <span><i className="fa-solid fa-star"></i>5.0 (28 Reviews)</span>
                                                </div>
                                            </div>
                                            <div className="gigs-title">
                                                <h5>
                                                    <a href="service-details.html">
                                                        Embedded Android & AOSP customizations
                                                    </a>
                                                </h5>
                                            </div>

                                            <div className="gigs-card-footer">
                                                <div className="d-flex align-items-center gigs-left-text">
                                                    <a href="talent-profile.html"
                                                        className="avatar avatar-sm flex-shrink-0"><img
                                                            src="assets/img/user/profile.jpg" className="img-fluid rounded-pill"
                                                            alt="img" /></a>
                                                    <div className="ms-2">
                                                        <h6 className="mb-0"><a href="#">Alex Revaria</a></h6>
                                                        <p className="mb-0">California, USA</p>
                                                    </div>
                                                </div>
                                                <div className="text-end">
                                                    <h6 className="mb-1">$550</h6>
                                                    <span>Delivery in 2 Days</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className="tab-pane fade" id="analytics_strategy" role="tabpanel">
                            <div className="row">
                                <div className="col-xl-4 col-md-6">
                                    <div className="gigs-grid">
                                        <div className="gigs-img">
                                            <div className="img-slider owl-carousel">
                                                <div className="slide-images">
                                                    <a href="service-details.html">
                                                        <img src="assets/img/list/list-06.jpg" className="img-fluid" alt="Gigs" />
                                                    </a>
                                                </div>
                                                <div className="slide-images">
                                                    <a href="service-details.html">
                                                        <img src="assets/img/list/list-04.jpg" className="img-fluid" alt="Gigs" />
                                                    </a>
                                                </div>
                                                <div className="slide-images">
                                                    <a href="service-details.html">
                                                        <img src="assets/img/list/list-10.jpg" className="img-fluid" alt="Gigs" />
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="card-overlay-badge">
                                                <a href="service.html"><span className="badge bg-warning"><i
                                                    className="feather-star"></i>Featured</span></a>
                                                <a href="service.html"><span className="badge bg-danger"><i
                                                    className="fa-solid fa-meteor"></i>Hot</span></a>
                                            </div>
                                            <div className="fav-selection">
                                                <a href="javascript:void(0);">
                                                    <i className="feather-video"></i>
                                                </a>
                                                <a href="javascript:void(0);" className="fav-icon">
                                                    <i className="feather-heart"></i>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="gigs-content">
                                            <div className="gigs-info">
                                                <div>
                                                    <a href="service-details.html" className="badge bg-light">
                                                        Translation
                                                    </a>
                                                </div>
                                                <div className="star-rate">
                                                    <span><i className="fa-solid fa-star"></i>3.8 (11 Reviews)</span>
                                                </div>
                                            </div>
                                            <div className="gigs-title">
                                                <h5>
                                                    <a href="service-details.html">
                                                        I will do implementing chatbots on websites or messaging apps
                                                    </a>
                                                </h5>
                                            </div>

                                            <div className="gigs-card-footer">
                                                <div className="d-flex align-items-center gigs-left-text">
                                                    <a href="talent-profile.html"
                                                        className="avatar avatar-sm flex-shrink-0"><img
                                                            src="assets/img/user/profile.jpg" className="img-fluid rounded-pill"
                                                            alt="img" /></a>
                                                    <div className="ms-2">
                                                        <h6 className="mb-0"><a href="#">Adrian Silvia</a></h6>
                                                        <p className="mb-0">Newyork, USA</p>
                                                    </div>
                                                </div>
                                                <div className="text-end">
                                                    <h6 className="mb-1">$645</h6>
                                                    <span>Delivery in 1 day</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-md-6">
                                    <div className="gigs-grid">
                                        <div className="gigs-img">
                                            <div className="img-slider owl-carousel">
                                                <div className="slide-images">
                                                    <a href="service-details.html">
                                                        <img src="assets/img/list/list-04.jpg" className="img-fluid" alt="Gigs" />
                                                    </a>
                                                </div>
                                                <div className="slide-images">
                                                    <a href="service-details.html">
                                                        <img src="assets/img/list/list-05.jpg" className="img-fluid" alt="Gigs" />
                                                    </a>
                                                </div>
                                                <div className="slide-images">
                                                    <a href="service-details.html">
                                                        <img src="assets/img/list/list-06.jpg" className="img-fluid" alt="Gigs" />
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="card-overlay-badge">
                                                <a href="service.html"><span className="badge bg-warning"><i
                                                    className="feather-star"></i>Featured</span></a>
                                                <a href="service.html"><span className="badge bg-danger"><i
                                                    className="fa-solid fa-meteor"></i>Hot</span></a>
                                            </div>
                                            <div className="fav-selection">
                                                <a href="javascript:void(0);">
                                                    <i className="feather-video"></i>
                                                </a>
                                                <a href="javascript:void(0);" className="fav-icon">
                                                    <i className="feather-heart"></i>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="gigs-content">
                                            <div className="gigs-info">
                                                <div>
                                                    <a href="service-details.html" className="badge bg-light">
                                                        Videography
                                                    </a>
                                                </div>
                                                <div className="star-rate">
                                                    <span><i className="fa-solid fa-star"></i>4.3 (22 Reviews)</span>
                                                </div>
                                            </div>
                                            <div className="gigs-title">
                                                <h5>
                                                    <a href="service-details.html">
                                                        I will do professional lifestyle and product photography
                                                    </a>
                                                </h5>
                                            </div>

                                            <div className="gigs-card-footer">
                                                <div className="d-flex align-items-center gigs-left-text">
                                                    <a href="talent-profile.html"
                                                        className="avatar avatar-sm flex-shrink-0"><img
                                                            src="assets/img/user/profile.jpg" className="img-fluid rounded-pill"
                                                            alt="img" /></a>
                                                    <div className="ms-2">
                                                        <h6 className="mb-0"><a href="#">Sebastian Vettal</a></h6>
                                                        <p className="mb-0">Las Vegas, USA</p>
                                                    </div>
                                                </div>
                                                <div className="text-end">
                                                    <h6 className="mb-1">$830</h6>
                                                    <span>Delivery in 4 Days</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-md-6">
                                    <div className="gigs-grid">
                                        <div className="gigs-img">
                                            <div className="img-slider owl-carousel">
                                                <div className="slide-images">
                                                    <a href="service-details.html">
                                                        <img src="assets/img/list/list-03.jpg" className="img-fluid" alt="Gigs" />
                                                    </a>
                                                </div>
                                                <div className="slide-images">
                                                    <a href="service-details.html">
                                                        <img src="assets/img/list/list-07.jpg" className="img-fluid" alt="Gigs" />
                                                    </a>
                                                </div>
                                                <div className="slide-images">
                                                    <a href="service-details.html">
                                                        <img src="assets/img/list/list-08.jpg" className="img-fluid" alt="Gigs" />
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="card-overlay-badge">
                                                <a href="service.html"><span className="badge bg-warning"><i
                                                    className="feather-star"></i>Featured</span></a>
                                                <a href="service.html"><span className="badge bg-danger"><i
                                                    className="fa-solid fa-meteor"></i>Hot</span></a>
                                            </div>
                                            <div className="fav-selection">
                                                <a href="javascript:void(0);">
                                                    <i className="feather-video"></i>
                                                </a>
                                                <a href="javascript:void(0);" className="fav-icon">
                                                    <i className="feather-heart"></i>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="gigs-content">
                                            <div className="gigs-info">
                                                <div>
                                                    <a href="service-details.html" className="badge bg-light">
                                                        Programming
                                                    </a>
                                                </div>
                                                <div className="star-rate">
                                                    <span><i className="fa-solid fa-star"></i>5.0 (28 Reviews)</span>
                                                </div>
                                            </div>
                                            <div className="gigs-title">
                                                <h5>
                                                    <a href="service-details.html">
                                                        Embedded Android & AOSP customizations
                                                    </a>
                                                </h5>
                                            </div>

                                            <div className="gigs-card-footer">
                                                <div className="d-flex align-items-center gigs-left-text">
                                                    <a href="talent-profile.html"
                                                        className="avatar avatar-sm flex-shrink-0"><img
                                                            src="assets/img/user/profile.jpg" className="img-fluid rounded-pill"
                                                            alt="img" /></a>
                                                    <div className="ms-2">
                                                        <h6 className="mb-0"><a href="#">Alex Revaria</a></h6>
                                                        <p className="mb-0">California, USA</p>
                                                    </div>
                                                </div>
                                                <div className="text-end">
                                                    <h6 className="mb-1">$550</h6>
                                                    <span>Delivery in 2 Days</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="tab-pane fade" id="video_animation" role="tabpanel">
                            <div className="row">
                                <div className="col-xl-4 col-md-6">
                                    <div className="gigs-grid">
                                        <div className="gigs-img">
                                            <div className="img-slider owl-carousel">
                                                <div className="slide-images">
                                                    <a href="service-details.html">
                                                        <img src="assets/img/list/list-07.jpg" className="img-fluid" alt="Gigs" />
                                                    </a>
                                                </div>
                                                <div className="slide-images">
                                                    <a href="service-details.html">
                                                        <img src="assets/img/list/list-03.jpg" className="img-fluid" alt="Gigs" />
                                                    </a>
                                                </div>
                                                <div className="slide-images">
                                                    <a href="service-details.html">
                                                        <img src="assets/img/list/list-13.jpg" className="img-fluid" alt="Gigs" />
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="card-overlay-badge">
                                                <a href="service.html"><span className="badge bg-warning"><i
                                                    className="feather-star"></i>Featured</span></a>
                                                <a href="service.html"><span className="badge bg-danger"><i
                                                    className="fa-solid fa-meteor"></i>Hot</span></a>
                                            </div>
                                            <div className="fav-selection">
                                                <a href="javascript:void(0);">
                                                    <i className="feather-video"></i>
                                                </a>
                                                <a href="javascript:void(0);" className="fav-icon">
                                                    <i className="feather-heart"></i>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="gigs-content">
                                            <div className="gigs-info">
                                                <div>
                                                    <a href="service-details.html" className="badge bg-light">
                                                        Music & Audio
                                                    </a>
                                                </div>
                                                <div className="star-rate">
                                                    <span><i className="fa-solid fa-star"></i>4.6 (475 Reviews)</span>
                                                </div>
                                            </div>
                                            <div className="gigs-title">
                                                <h5>
                                                    <a href="service-details.html">
                                                        I will develop openai, dalle, chat gpt app for mobile
                                                    </a>
                                                </h5>
                                            </div>

                                            <div className="gigs-card-footer">
                                                <div className="d-flex align-items-center gigs-left-text">
                                                    <a href="talent-profile.html"
                                                        className="avatar avatar-sm flex-shrink-0"><img
                                                            src="assets/img/user/profile.jpg" className="img-fluid rounded-pill"
                                                            alt="img" /></a>
                                                    <div className="ms-2">
                                                        <h6 className="mb-0"><a href="#">Adrian Silvia</a></h6>
                                                        <p className="mb-0">Newyork, USA</p>
                                                    </div>
                                                </div>
                                                <div className="text-end">
                                                    <h6 className="mb-1">$645</h6>
                                                    <span>Delivery in 1 day</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-md-6">
                                    <div className="gigs-grid">
                                        <div className="gigs-img">
                                            <div className="img-slider owl-carousel">
                                                <div className="slide-images">
                                                    <a href="service-details.html">
                                                        <img src="assets/img/list/list-12.jpg" className="img-fluid" alt="Gigs" />
                                                    </a>
                                                </div>
                                                <div className="slide-images">
                                                    <a href="service-details.html">
                                                        <img src="assets/img/list/list-07.jpg" className="img-fluid" alt="Gigs" />
                                                    </a>
                                                </div>
                                                <div className="slide-images">
                                                    <a href="service-details.html">
                                                        <img src="assets/img/list/list-08.jpg" className="img-fluid" alt="Gigs" />
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="card-overlay-badge">
                                                <a href="service.html"><span className="badge bg-warning"><i
                                                    className="feather-star"></i>Featured</span></a>
                                                <a href="service.html"><span className="badge bg-danger"><i
                                                    className="fa-solid fa-meteor"></i>Hot</span></a>
                                            </div>
                                            <div className="fav-selection">
                                                <a href="javascript:void(0);">
                                                    <i className="feather-video"></i>
                                                </a>
                                                <a href="javascript:void(0);" className="fav-icon">
                                                    <i className="feather-heart"></i>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="gigs-content">
                                            <div className="gigs-info">
                                                <div>
                                                    <a href="service-details.html" className="badge bg-light">
                                                        Programming
                                                    </a>
                                                </div>
                                                <div className="star-rate">
                                                    <span><i className="fa-solid fa-star"></i>5.0 (28 Reviews)</span>
                                                </div>
                                            </div>
                                            <div className="gigs-title">
                                                <h5>
                                                    <a href="service-details.html">
                                                        I will do english or german transcript of any audio file or video
                                                    </a>
                                                </h5>
                                            </div>

                                            <div className="gigs-card-footer">
                                                <div className="d-flex align-items-center gigs-left-text">
                                                    <a href="talent-profile.html"
                                                        className="avatar avatar-sm flex-shrink-0"><img
                                                            src="assets/img/user/profile.jpg" className="img-fluid rounded-pill"
                                                            alt="img" /></a>
                                                    <div className="ms-2">
                                                        <h6 className="mb-0"><a href="#">Sebastian Vettal</a></h6>
                                                        <p className="mb-0">Las Vegas, USA</p>
                                                    </div>
                                                </div>
                                                <div className="text-end">
                                                    <h6 className="mb-1">$830</h6>
                                                    <span>Delivery in 4 Days</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-md-6">
                                    <div className="gigs-grid">
                                        <div className="gigs-img">
                                            <div className="img-slider owl-carousel">
                                                <div className="slide-images">
                                                    <a href="service-details.html">
                                                        <img src="assets/img/list/list-11.jpg" className="img-fluid" alt="Gigs" />
                                                    </a>
                                                </div>
                                                <div className="slide-images">
                                                    <a href="service-details.html">
                                                        <img src="assets/img/list/list-05.jpg" className="img-fluid" alt="Gigs" />
                                                    </a>
                                                </div>
                                                <div className="slide-images">
                                                    <a href="service-details.html">
                                                        <img src="assets/img/list/list-06.jpg" className="img-fluid" alt="Gigs" />
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="card-overlay-badge">
                                                <a href="service.html"><span className="badge bg-warning"><i
                                                    className="feather-star"></i>Featured</span></a>
                                                <a href="service.html"><span className="badge bg-danger"><i
                                                    className="fa-solid fa-meteor"></i>Hot</span></a>
                                            </div>
                                            <div className="fav-selection">
                                                <a href="javascript:void(0);">
                                                    <i className="feather-video"></i>
                                                </a>
                                                <a href="javascript:void(0);" className="fav-icon">
                                                    <i className="feather-heart"></i>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="gigs-content">
                                            <div className="gigs-info">
                                                <div>
                                                    <a href="service-details.html" className="badge bg-light">
                                                        Videography
                                                    </a>
                                                </div>
                                                <div className="star-rate">
                                                    <span><i className="fa-solid fa-star"></i>4.3 (22 Reviews)</span>
                                                </div>
                                            </div>
                                            <div className="gigs-title">
                                                <h5>
                                                    <a href="service-details.html">
                                                        I I will do professional lifestyle and product photographyons
                                                    </a>
                                                </h5>
                                            </div>

                                            <div className="gigs-card-footer">
                                                <div className="d-flex align-items-center gigs-left-text">
                                                    <a href="talent-profile.html"
                                                        className="avatar avatar-sm flex-shrink-0"><img
                                                            src="assets/img/user/profile.jpg" className="img-fluid rounded-pill"
                                                            alt="img" /></a>
                                                    <div className="ms-2">
                                                        <h6 className="mb-0"><a href="#">Alex Revaria</a></h6>
                                                        <p className="mb-0">California, USA</p>
                                                    </div>
                                                </div>
                                                <div className="text-end">
                                                    <h6 className="mb-1">$550</h6>
                                                    <span>Delivery in 2 Days</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>
                    <div className="text-center mt-3" data-aos="fade-up">
                        <a href="courses.html" className="btn btn-lg btn-dark">View All Skills</a>
                    </div>
                </div>
            </div>


            <div className="what-makes-dream-gigs">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-4">
                            <div className="what-makes-left" data-aos="fade-right">
                                <h2 className="mb-3">What Makes <span>Future Connect</span> Unique</h2>
                                <p className="mb-0">Future Connect is more than just a platform — it’s a launchpad for young
                                    talents to share their stories, showcase their skills, and inspire impact. From
                                    storytellers to creators and dreamers, we bring their potential to the spotlight.</p>
                            </div>
                        </div>
                        <div className="col-lg-8">
                            <div className="row row-gap-3" data-aos="fade-left">
                                <div className="col-lg-4">
                                    <div className="what-makes-item bg-white rounded-2">
                                        <div className="d-flex align-items-center justify-content-between">
                                            <span className="what-makes-icon bg-primary-transparent rounded"><i
                                                className="ti ti-sparkles"></i></span>
                                            <h2>01</h2>
                                        </div>
                                        <h6 className="mb-2">Authentic Talent Stories</h6>
                                        <p className="mb-0">Real stories from real talents. Discover inspiring journeys that
                                            reflect resilience, creativity, and growth.</p>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="what-makes-item bg-white rounded-2">
                                        <div className="d-flex align-items-center justify-content-between">
                                            <span className="what-makes-icon bg-pink-transparent rounded"><i
                                                className="ti ti-certificate"></i></span>
                                            <h2>02</h2>
                                        </div>
                                        <h6 className="mb-2">Skill-Focused Opportunities</h6>
                                        <p className="mb-0">Explore a curated space where talents can connect with mentors,
                                            showcase skills, and access paid opportunities.</p>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="what-makes-item bg-white rounded-2">
                                        <div className="d-flex align-items-center justify-content-between">
                                            <span className="what-makes-icon bg-success-transparent rounded"><i
                                                className="ti ti-users-group"></i></span>
                                            <h2>03</h2>
                                        </div>
                                        <h6 className="mb-2">Community of Changemakers</h6>
                                        <p className="mb-0">Join a growing community driven by purpose, collaboration, and
                                            positive social impact.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="testimonials-section-two">
                <img src="assets/img/home/shape-4.svg" alt="img" className="img-fluid testimonials-bg3 d-lg-inline-flex d-none" />
                <div className="container">
                    <div className="row align-items-center row-gap-4">
                        <div className="col-lg-6">
                            <div className="section-header-two" data-aos="fade-up">
                                <h2 className="mb-2 p-0">What Talents Say About Future Connect</h2>
                                <p>Discover the voices of passionate individuals whose lives have been impacted by sharing
                                    their stories and skills on Future Connect.</p>
                            </div>
                            <h6 className="mb-3" data-aos="fade-up">We’re Building a Global Talent Community</h6>
                            <div className="avatar-list-stacked me-2" data-aos="fade-up">
                                <span className="avatar avatar-md rounded-circle border-0"><img
                                    src="assets/img/user/profile.jpg"
                                    className="img-fluid rounded-circle border border-white" alt="Img" /></span>
                                <span className="avatar avatar-md rounded-circle border-0"><img
                                    src="assets/img/user/profile.jpg"
                                    className="img-fluid rounded-circle border border-white" alt="Img" /></span>
                                <span className="avatar avatar-md rounded-circle border-0"><img
                                    src="assets/img/user/profile.jpg"
                                    className="img-fluid rounded-circle border border-white" alt="Img" /></span>
                                <span className="avatar avatar-md rounded-circle border-0"><img
                                    src="assets/img/user/profile.jpg"
                                    className="img-fluid rounded-circle border border-white" alt="Img" /></span>
                                <span className="avatar avatar-md rounded-circle border-0"><img
                                    src="assets/img/user/profile.jpg"
                                    className="img-fluid rounded-circle border border-white" alt="Img" /></span>
                                <span className="avatar avatar-md rounded-circle border-0"><img
                                    src="assets/img/user/profile.jpg"
                                    className="img-fluid rounded-circle border border-white" alt="Img" /></span>
                                <span className="avatar avatar-md rounded-circle border-0"><img
                                    src="assets/img/user/profile.jpg"
                                    className="img-fluid rounded-circle border border-white" alt="Img" /></span>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="testimonials-item bg-white rounded" data-aos="fade-up">
                                <div className="d-flex align-items-center gigs-left-text mb-3">
                                    <a href="javascript:void(0);" className="avatar avatar-sm flex-shrink-0"><img
                                        src="assets/img/user/profile.jpg" className="img-fluid rounded-pill" alt="img" /></a>
                                    <div className="ms-2">
                                        <h6 className="mb-0"><a href="#">Adrian Silvia</a></h6>
                                        <p className="mb-0">Nairobi, Kenya</p>
                                    </div>
                                </div>
                                <h6 className="mb-1">Empowered Through Storytelling</h6>
                                <p className="mb-3">Future Connect gave me a platform to share my journey and skills. It helped
                                    me
                                    connect with mentors, peers, and even sponsors!</p>
                                <i className="ti ti-star-filled text-warning"></i>
                                <i className="ti ti-star-filled text-warning"></i>
                                <i className="ti ti-star-filled text-warning"></i>
                                <i className="ti ti-star-filled text-warning"></i>
                                <i className="ti ti-star-filled text-warning"></i>
                            </div>
                            <div className="testimonials-item bg-white rounded mb-0" data-aos="fade-up">
                                <div className="d-flex align-items-center gigs-left-text mb-3">
                                    <a href="javascript:void(0);" className="avatar avatar-sm flex-shrink-0"><img
                                        src="assets/img/user/profile.jpg" className="img-fluid rounded-pill" alt="img" /></a>
                                    <div className="ms-2">
                                        <h6 className="mb-0"><a href="#">James Don</a></h6>
                                        <p className="mb-0">Accra, Ghana</p>
                                    </div>
                                </div>
                                <h6 className="mb-1">A Platform That Truly Cares</h6>
                                <p className="mb-3">Sharing my skills on Future Connect opened doors I never imagined. From
                                    virtual
                                    gigs to recognition, I feel seen and valued.</p>
                                <i className="ti ti-star-filled text-warning"></i>
                                <i className="ti ti-star-filled text-warning"></i>
                                <i className="ti ti-star-filled text-warning"></i>
                                <i className="ti ti-star-filled text-warning"></i>
                                <i className="ti ti-star-filled text-warning"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="container">
                <div className="join-with-us">
                    <img src="assets/img/home/shape-5.svg" alt="img" className="img-fluid join-with-us-bg" />
                    <div className="d-sm-flex align-items-center justify-content-between">
                        <div data-aos="fade-right">
                            <h2 className="text-white">Join Future Connect</h2>
                            <p className="mb-0">Showcase your talent, share your story, and inspire others. Be part of a
                                community that empowers growth and recognition.</p>
                        </div>
                        <a href="upload-story.html" className="btn btn-lg btn-primary flex-shrink-0" data-aos="fade-left">Get
                            Started</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home