import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';
import api from '../../api';

export const UserHeader = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetchCategories();
    }, []);

    const fetchCategories = async () => {
        try {
            const response = await api.get('/categories'); // Adjust the endpoint as necessary
            setCategories(response.data);
        } catch (error) {
            console.error('Error fetching categories:', error);
        }
    };
    return (
        <div>
            <header class="header">
                <div class="container">
                    <nav class="navbar navbar-expand-lg header-nav p-0">
                        <div class="navbar-header">
                            <a id="mobile_btn" href="#">
                                <span class="bar-icon">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </span>
                            </a>
                            <a href="index.html" class="navbar-brand logo">
                                <img src="assets/img/FUTURE CONNECT LOGO - LONG.svg" alt="Logo" />
                            </a>
                            <a href="index.html" class="dark-logo">
                                <img src="assets/img/FUTURE CONNECT LOGO - LONG - WHITE.svg" alt="Logo" class="img-fluid" />
                            </a>
                            <a href="index.html" class="navbar-brand logo-small">
                                <img src="assets/img/FUTURE CONNECT LOGO.png" class="img-fluid" alt="Logo" />
                            </a>
                        </div>
                        <div class="main-menu-wrapper">
                            <div class="menu-header">
                                <a href="index.html" class="menu-logo">
                                    <img src="assets/img/FUTURE CONNECT LOGO.png" class="img-fluid" alt="Logo" />
                                </a>
                                <a href="index.html" class="menu-logo dark-logo">
                                    <img src="assets/img/FUTURE CONNECT LOGO - LONG - WHITE.svg" alt="Logo"
                                        class="img-fluid" />
                                </a>
                                <a id="menu_close" class="menu-close" href="#"> <i class="fas fa-times"></i></a>
                            </div>
                            <ul class="main-nav navbar-nav">
                                <li><a href="/" class="nav-link active">Home</a></li>

                                <li class="has-submenu">
                                    <a href="#">Talents <i class="fas fa-chevron-down"></i></a>
                                    <ul class="submenu">
                                        <li><a href="/talents">All Talents</a></li>
                                        <li><a href="/register_as_talent">Register as Talent</a></li>
                                        <li class="has-submenu">
                                            <a href="#">Talent Categories </a>
                                            <ul class="submenu">
                                                {categories.map((cat) => (<li><a href="talents.html?category=music">{cat.name}</a></li>
                                                ))}
                                            </ul>
                                        </li>
                                    </ul>
                                </li>

                                <li>
                                    <a href="/announcements">Announcements</a>
                                </li>

                                <li class="has-submenu">
                                    <a href="#">Stories <i class="fas fa-chevron-down"></i></a>
                                    <ul class="submenu">
                                        <li><a href="stories.html">All Stories</a></li>
                                        <li><a href="upload-story.html">Upload Story</a></li>
                                        <li class="has-submenu">
                                            <a href="#">Talent Categories </a>
                                            <ul class="submenu">
                                                <li><a href="stories.html?category=music">Music & Performance</a></li>
                                                <li><a href="stories.html?category=tech">Tech & Coding</a></li>
                                                <li><a href="stories.html?category=art">Art & Design</a></li>
                                                <li><a href="stories.html?category=entrepreneurship">Entrepreneurship</a>
                                                </li>
                                                <li><a href="stories.html?category=education">Education & Research</a></li>
                                                <li><a href="stories.html?category=health">Health & Wellness</a></li>
                                                <li><a href="stories.html?category=sports">Sports & Fitness</a></li>
                                                <li><a href="stories.html?category=community">Community Leadership</a></li>
                                                <li><a href="stories.html?category=life">Personal Growth</a></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>



                            </ul>

                        </div>

                        <div class="d-flex align-items-center">

                            <div class="nav-item dropdown flag-nav nav-item-box nav-item-box-home me-3">
                                <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#"
                                    role="button">
                                    <i class="ti ti-sun-high"></i>
                                    <i class="ti ti-moon"></i>
                                </a>
                                <ul class="dropdown-menu p-2">
                                    <li class="mb-1">
                                        <a href="#" class="dropdown-item active theme-toggle rounded-2"
                                            id="light-mode-toggle">
                                            <i class="ti ti-sun-high me-2"></i>Light Mode
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" class="dropdown-item theme-toggle rounded-2"
                                            id="dark-mode-toggle">
                                            <i class="ti ti-moon me-2"></i>Dark Mode
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <ul class="nav header-navbar-rht">
                                <li class="nav-item">
                                    <a class="btn btn-light d-inline-flex align-items-center" href="signin.html"><i
                                        class="ti ti-lock me-1"></i>Sign In</a>
                                </li>
                                <li class="nav-item">
                                    <a class="btn btn-primary d-inline-flex align-items-center" href="signup.html"><i
                                        class="ti ti-user me-1"></i>Sign Up</a>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </header>

        </div>
    )
}
