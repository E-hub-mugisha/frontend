import React, { useEffect, useState } from 'react';
import api from '../api';

const Stories = () => {
    
    const [stories, setStories] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchStories = async () => {
            try {
                const response = await api.get('/stories'); // Adjust the endpoint as necessary
                setStories(response.data.stories || []); // Assuming your API returns { stories: [...] }
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };
        fetchStories();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }
    if (error) {
        return <div>Error: {error.message}</div>;
    }
    if (stories.length === 0) {
        return <div>No stories available</div>;
    }

    return (
        <div>

            <div class="breadcrumb-bar breadcrumb-bar-info">
                <div class="breadcrumb-img">
                    <div class="breadcrumb-left">
                        <img src="assets/img/bg/banner-bg-03.png" alt="img" />
                    </div>
                </div>
                <div class="container">
                    <div class="row">
                        <div class="col-md-12 col-12">
                            <nav aria-label="breadcrumb" class="page-breadcrumb">
                                <ol class="breadcrumb">
                                    <li class="breadcrumb-item">
                                        <a href="index.html">Home</a>
                                    </li>
                                    <li class="breadcrumb-item" aria-current="page">Services</li>
                                    <li class="breadcrumb-item active" aria-current="page">Digital Marketing</li>
                                </ol>
                            </nav>
                            <h2 class="breadcrumb-title mb-0">
                                Featured Talents stories on <span class="text-primary">Future Connect</span>
                            </h2>
                        </div>
                    </div>
                </div>
            </div>

            <div class="page-content">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12">

                            <div class="filters-section">
                                <ul class="filters-wrap">


                                    <li>
                                        <div class="collapse-card">
                                            <div class="filter-header">
                                                <a role="button" tabIndex="0">
                                                    <i class="ti ti-list page input"></i> Categories
                                                </a>
                                            </div>
                                            <div id="categories" class="collapse-body">
                                                <div class="form-group search-group">
                                                    <span class="search-icon"><i class="feather-search"></i></span>
                                                    <input type="text" class="form-control" placeholder="Search Category" />
                                                </div>
                                                <ul class="checkbox-list categories-lists">
                                                    <li class="active">
                                                        <label class="custom_check">
                                                            <span class="checked-title">Programming & Coding</span>
                                                        </label>
                                                    </li>
                                                    <li>
                                                        <label class="custom_check">
                                                            <span class="checked-title">Data Science & Analysis</span>
                                                        </label>
                                                    </li>
                                                    <li>
                                                        <label class="custom_check">
                                                            <span class="checked-title">Databases </span>
                                                        </label>
                                                    </li>
                                                    <li>
                                                        <label class="custom_check">
                                                            <span class="checked-title">Mobile App Development</span>
                                                        </label>
                                                    </li>
                                                    <li>
                                                        <label class="custom_check">
                                                            <span class="checked-title">Email Template Development</span>
                                                        </label>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </li>

                                    <li>
                                        <div class="collapse-card">
                                            <div class="filter-header">
                                                <a role="button" tabIndex="0">
                                                    <i class="ti ti-map-pin-pin"></i>Locations
                                                </a>
                                            </div>
                                            <div id="locations" class="collapse-body">
                                                <div class="form-group search-group">
                                                    <span class="search-icon"><i class="feather-search"></i></span>
                                                    <input type="text" class="form-control" placeholder="Search Locations" />
                                                </div>
                                                <ul class="checkbox-list categories-lists">
                                                    <li class="active">
                                                        <label class="custom_check">
                                                            <span class="checked-title">Canada</span>
                                                        </label>
                                                    </li>
                                                    <li>
                                                        <label class="custom_check">
                                                            <span class="checked-title">Bolivia</span>
                                                        </label>
                                                    </li>
                                                    <li>
                                                        <label class="custom_check">
                                                            <span class="checked-title">Tunsania</span>
                                                        </label>
                                                    </li>
                                                    <li>
                                                        <label class="custom_check">
                                                            <span class="checked-title">Indonesia</span>
                                                        </label>
                                                    </li>
                                                    <li>
                                                        <label class="custom_check">
                                                            <span class="checked-title">UK</span>
                                                        </label>
                                                    </li>
                                                    <li>
                                                        <label class="custom_check">
                                                            <span class="checked-title">UAE</span>
                                                        </label>
                                                    </li>
                                                    <li>
                                                        <label class="custom_check">
                                                            <span class="checked-title">USA</span>
                                                        </label>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </li>


                                    <li>
                                        <div class="collapse-card">
                                            <div class="filter-header">
                                                <a role="button" tabIndex="0">
                                                    <i class="ti ti-stars"></i>Reviews
                                                </a>
                                            </div>
                                            <div id="ratings" class="collapse-body">
                                                <ul class="checkbox-list star-rate">
                                                    <li>
                                                        <label class="custom_check">
                                                            <input type="checkbox" />
                                                            <span class="checkmark"></span>
                                                            <span class="ratings ms-4">
                                                                <i class="fa-solid fa-star filled"></i>
                                                                <i class="fa-solid fa-star filled"></i>
                                                                <i class="fa-solid fa-star filled"></i>
                                                                <i class="fa-solid fa-star filled"></i>
                                                                <i class="fa-solid fa-star filled"></i>
                                                            </span>
                                                            <span class="rating-count">(5.0)</span>
                                                        </label>
                                                    </li>
                                                    <li>
                                                        <label class="custom_check">
                                                            <input type="checkbox" />
                                                            <span class="checkmark"></span>
                                                            <span class="ratings ms-4">
                                                                <i class="fa-solid fa-star filled"></i>
                                                                <i class="fa-solid fa-star filled"></i>
                                                                <i class="fa-solid fa-star filled"></i>
                                                                <i class="fa-solid fa-star filled"></i>
                                                                <i class="fa-solid fa-star"></i>
                                                            </span>
                                                            <span class="rating-count">(4.0)</span>
                                                        </label>
                                                    </li>
                                                    <li>
                                                        <label class="custom_check">
                                                            <input type="checkbox" />
                                                            <span class="checkmark"></span>
                                                            <span class="ratings ms-4">
                                                                <i class="fa-solid fa-star filled"></i>
                                                                <i class="fa-solid fa-star filled"></i>
                                                                <i class="fa-solid fa-star filled"></i>
                                                                <i class="fa-solid fa-star"></i>
                                                                <i class="fa-solid fa-star "></i>
                                                            </span>
                                                            <span class="rating-count">(3.0)</span>
                                                        </label>
                                                    </li>
                                                    <li>
                                                        <label class="custom_check">
                                                            <input type="checkbox" />
                                                            <span class="checkmark"></span>
                                                            <span class="ratings ms-4">
                                                                <i class="fa-solid fa-star filled"></i>
                                                                <i class="fa-solid fa-star filled"></i>
                                                                <i class="fa-solid fa-star"></i>
                                                                <i class="fa-solid fa-star"></i>
                                                                <i class="fa-solid fa-star"></i>
                                                            </span>
                                                            <span class="rating-count">(2.0)</span>
                                                        </label>
                                                    </li>
                                                    <li>
                                                        <label class="custom_check">
                                                            <input type="checkbox" />
                                                            <span class="checkmark"></span>
                                                            <span class="ratings ms-4">
                                                                <i class="fa-solid fa-star filled"></i>
                                                                <i class="fa-solid fa-star"></i>
                                                                <i class="fa-solid fa-star"></i>
                                                                <i class="fa-solid fa-star"></i>
                                                                <i class="fa-solid fa-star"></i>
                                                            </span>
                                                            <span class="rating-count">(1.0)</span>
                                                        </label>
                                                    </li>
                                                </ul>
                                                <div class="filter-btn">
                                                    <a role="button" tabIndex="0">Reset</a>
                                                    <button class="btn btn-primary">Apply</button>
                                                </div>
                                            </div>
                                        </div>
                                    </li>


                                    <li>
                                        <div class="collapse-card">
                                            <div class="filter-header">
                                                <a role="button" tabIndex="0">
                                                    <i class="ti ti-moneybag"></i>Budget
                                                </a>
                                            </div>
                                            <div id="budget" class="collapse-body">
                                                <div class="form-group">
                                                    <input type="text" class="form-control"
                                                        placeholder="Enter Custom Budget" />
                                                </div>
                                                <ul class="checkbox-list">
                                                    <li>
                                                        <label class="custom_radio">
                                                            <input type="radio" name="budget" checked />
                                                            <span class="checkmark"></span><span class="text-dark"> Value
                                                                :</span> Under $4500
                                                        </label>
                                                    </li>
                                                    <li>
                                                        <label class="custom_radio">
                                                            <input type="radio" name="budget" />
                                                            <span class="checkmark"></span><span class="text-dark">
                                                                Mid-range :</span> Under $4500
                                                        </label>
                                                    </li>
                                                    <li>
                                                        <label class="custom_radio">
                                                            <input type="radio" name="budget" />
                                                            <span class="checkmark"></span><span class="text-dark"> High-end
                                                                :</span> Under $4500
                                                        </label>
                                                    </li>
                                                </ul>
                                                <div class="filter-btn">
                                                    <a role="button" tabIndex="0">Reset</a>
                                                    <button class="btn btn-primary">Apply</button>
                                                </div>
                                            </div>
                                        </div>
                                    </li>


                                    <li class="more-content">
                                        <div class="collapse-card">
                                            <div class="filter-header">
                                                <a role="button" tabIndex="0">
                                                    <img src="assets/img/icons/user-icon.svg" alt="icon" class="me-2" />Seller
                                                    Details
                                                </a>
                                            </div>
                                            <div id="seller" class="collapse-body">
                                                <ul class="seller-list">
                                                    <li>
                                                        <a href="javascript:void(0):">Seller Level<span><i
                                                            class="feather-chevron-right"></i></span></a>
                                                    </li>
                                                    <li>
                                                        <a href="javascript:void(0):">Seller Availability<span><i
                                                            class="feather-chevron-right"></i></span></a>
                                                    </li>
                                                    <li>
                                                        <a href="javascript:void(0):">Seller Speaks<span><i
                                                            class="feather-chevron-right"></i></span></a>
                                                    </li>
                                                    <li>
                                                        <a href="javascript:void(0):">Seller Lives in<span><i
                                                            class="feather-chevron-right"></i></span></a>
                                                    </li>
                                                </ul>
                                                <div class="filter-btn">
                                                    <a role="button" tabIndex="0">Reset</a>
                                                    <button class="btn btn-primary">Apply</button>
                                                </div>
                                            </div>
                                        </div>
                                    </li>

                                    <li class="more-content">
                                        <div class="collapse-card">
                                            <div class="filter-header">
                                                <a role="button" tabIndex="0">
                                                    <img src="assets/img/icons/time-icon.svg" alt="icon"
                                                        class="me-2" />Delivery Time
                                                </a>
                                            </div>
                                            <div id="deivery" class="collapse-body">
                                                <ul class="checkbox-list">
                                                    <li>
                                                        <label class="custom_radio">
                                                            <input type="radio" name="budget" checked />
                                                            <span class="checkmark"></span>Enter 24H
                                                        </label>
                                                    </li>
                                                    <li>
                                                        <label class="custom_radio">
                                                            <input type="radio" name="budget" />
                                                            <span class="checkmark"></span>Upto 3 days
                                                        </label>
                                                    </li>
                                                    <li>
                                                        <label class="custom_radio">
                                                            <input type="radio" name="budget" />
                                                            <span class="checkmark"></span>Upto 7 days
                                                        </label>
                                                    </li>
                                                    <li>
                                                        <label class="custom_radio">
                                                            <input type="radio" name="budget" />
                                                            <span class="checkmark"></span>Anytime
                                                        </label>
                                                    </li>
                                                </ul>
                                                <div class="filter-btn">
                                                    <a role="button" tabIndex="0">Reset</a>
                                                    <button class="btn btn-primary">Apply</button>
                                                </div>
                                            </div>
                                        </div>
                                    </li>


                                    <li class="view-all">
                                        <a role="button" tabIndex="0" class="show-more"><span><img
                                            src="assets/img/icons/add-icon.svg" alt="img" /></span><span>Show
                                                More</span></a>
                                    </li>
                                </ul>


                                <div class="filters-wrap sort-categories">
                                    <div class="collapse-card float-lg-end">
                                        <div class="filter-header">
                                            <a role="button" tabIndex="0" class="sorts-list">
                                                <i class="ti ti-sort-ascending"></i>Sorts by: <span>Recommended</span>
                                            </a>
                                        </div>
                                        <div id="categories2" class="collapse-body" style={{ display: 'none' }}>
                                            <div class="form-group search-group">
                                                <span class="search-icon"><i class="feather-search"></i></span>
                                                <input type="text" class="form-control" placeholder="Search Category" />
                                            </div>
                                            <ul class="checkbox-list categories-lists">
                                                <li class="active">
                                                    <label class="custom_check">
                                                        <span class="checked-title"> Featured</span>
                                                    </label>
                                                </li>
                                                <li>
                                                    <label class="custom_check">
                                                        <span class="checked-title">Price: Low to High </span>
                                                    </label>
                                                </li>
                                                <li>
                                                    <label class="custom_check">
                                                        <span class="checked-title"> Price: High to Low </span>
                                                    </label>
                                                </li>
                                                <li>
                                                    <label class="custom_check">
                                                        <span class="checked-title"> Recommended </span>
                                                    </label>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>


                            </div>

                            <div class="trend-section">
                                <div class="row">
                                    <div class="container">

                                        <div className="row" data-aos="fade-up">
                                            {stories.map((story) => (
                                                <div className="col-xl-4 col-md-6" key={story.id}>
                                                    <div className="gigs-grid">
                                                        <div className="gigs-img">
                                                            <div className="img-slider owl-carousel">
                                                                <div className="slide-images">
                                                                    <a href={`/story-details/${story.slug}`}>
                                                                        <img src={story.media} className="img-fluid" alt={story.title} />
                                                                    </a>
                                                                </div>
                                                                <div className="slide-images">
                                                                    <a href={`/story-details/${story.slug}`}>
                                                                        <img src={story.thumbnail} className="img-fluid" alt={story.title} />
                                                                    </a>
                                                                </div>
                                                            </div>
                                                            <div className="card-overlay-badge">
                                                                {story.status === "published" && (
                                                                    <a role="button" tabIndex="0">
                                                                        <span className="badge bg-success">
                                                                            <i className="fa-solid fa-bolt"></i> Published
                                                                        </span>
                                                                    </a>
                                                                )}
                                                                {story.status === "draft" && (
                                                                    <a role="button" tabIndex="0">
                                                                        <span className="badge bg-warning">
                                                                            <i className="feather-star"></i> Draft
                                                                        </span>
                                                                    </a>
                                                                )}
                                                            </div>
                                                        </div>
                                                        <div className="gigs-content">
                                                            <div className="gigs-info">
                                                                <div>
                                                                    <span className="badge bg-light">Category ID: {story.category_id}</span>
                                                                    {story.tags && (
                                                                        <span className="ms-2">+{story.tags.split(",").length}</span>
                                                                    )}
                                                                </div>
                                                            </div>
                                                            <div className="gigs-title">
                                                                <h5>
                                                                    <a href={`/story-details/${story.slug}`}>
                                                                        {story.title}
                                                                    </a>
                                                                </h5>
                                                            </div>
                                                            <div className="gigs-card-footer">
                                                                <div className="d-flex align-items-center gigs-left-text">
                                                                    <a role="button" tabIndex="0" className="avatar avatar-sm flex-shrink-0">
                                                                        <img src="assets/img/user/profile.jpg" className="img-fluid rounded-pill" alt="img" />
                                                                    </a>
                                                                    <div className="ms-2">
                                                                        <h6 className="mb-0"><a role="button" tabIndex="0">Talent ID: {story.talent_id}</a></h6>
                                                                        <p className="mb-0">Posted: {new Date(story.created_at).toLocaleDateString()}</p>
                                                                    </div>
                                                                </div>
                                                                <div className="text-end">
                                                                    <h6 className="mb-1">Status: {story.status}</h6>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Stories