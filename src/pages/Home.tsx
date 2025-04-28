import useBodyClass from "../hooks/useBodyClass.ts";
import Footer from "../components/Footer.tsx";
import { useState } from "react";
import i18n from "i18next";
import {useTranslation} from "react-i18next";


import logoNav from '../assets/images/logo/logo.png'


import {Link} from "react-router-dom";

export const Home = () => {
    useBodyClass('sticky-header newsletter-popup-modal');

    const [selectedLanguage, setSelectedLanguage] = useState(i18n.language || 'en');
    const [isPanelOpen, setIsPanelOpen] = useState(false);
    const [isOpenLan, setIsOpenLan] = useState(false);
    const [isOpen] = useState(false);
    const [isOpenCart] = useState(false);

    const {t} = useTranslation();

    const toggleLanguageDropdown = () => {
        setIsOpenLan((prev) => !prev);
    };


    const toggleDropdown = () => {
        setIsPanelOpen((prev) => !prev);
    };

    const changeLanguage = async (lng: string) => {
        await i18n.changeLanguage(lng);
        setSelectedLanguage(lng);
    };

    return (
        <>
            <a href="#top" className="back-to-top" id="backto-top"><i className="fal fa-arrow-up"></i></a>
            <header className="header axil-header header-style-1">
                <div className="axil-header-top">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-sm-6">
                                <div className="header-top-dropdown">
                                    <div className="dropdown">
                                        <button
                                            className="dropdown-toggle"
                                            type="button"
                                            aria-expanded={isOpen}
                                            onClick={toggleLanguageDropdown}
                                        >
                                            {t(`page.header.languages.${selectedLanguage}`)}
                                        </button>
                                        <ul className={`dropdown-menu ${isOpenLan ? 'show' : ''}`}>
                                            <li>
                                                <a
                                                    className="dropdown-item"
                                                    onClick={() => {
                                                        changeLanguage('en');
                                                        setIsOpenLan(false);
                                                    }}
                                                >
                                                    {t('page.header.languages.en')}
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    className="dropdown-item"
                                                    onClick={() => {
                                                        changeLanguage('es');
                                                        setIsOpenLan(false);
                                                    }}
                                                >
                                                    {t('page.header.languages.es')}
                                                </a>
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="dropdown">
                                        <button
                                            className="dropdown-toggle"
                                            type="button"
                                            data-bs-toggle="dropdown"
                                            aria-expanded="false"
                                        >
                                            USD
                                        </button>
                                        <ul className="dropdown-menu">
                                            <li><a className="dropdown-item" href="#">USD</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="header-top-link">
                                    <ul className="quick-link">
                                        <li><a href="#">{t('page.header.sign.help')}</a></li>
                                        <li><Link to="/register">{t('page.header.sign.sign-up')}</Link></li>
                                        <li><Link to="/login">{t('page.header.sign.sign-in')}</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="axil-sticky-placeholder"></div>
                <div className="axil-mainmenu">
                    <div className="container">
                        <div className="header-navbar">
                            <div className="header-brand">
                                <Link to="/" className="logo logo-dark">
                                    <img src={logoNav} alt="Site Logo"/>
                                </Link>
                            </div>
                            <div className="header-main-nav">
                                <nav className="mainmenu-nav">
                                    <button className="mobile-close-btn mobile-nav-toggler"><i
                                        className="fas fa-times"></i></button>
                                    <div className="mobile-nav-brand">
                                        <Link to="/" className="logo">
                                            <img src={logoNav} alt="Site Logo"/>
                                        </Link>
                                    </div>
                                    <ul className="mainmenu">
                                        <li><Link to="/">{t('page.header.navbar.home')}</Link></li>
                                        <li><Link to="/shop">{t('page.header.navbar.shop')}</Link></li>
                                        <li><Link to="/about">{t('page.header.navbar.about')}</Link></li>
                                    </ul>
                                </nav>
                            </div>
                            <div className="header-action">
                                <ul className="action-list">
                                    <li className="axil-search">
                                        <a href="javascript:void(0)" className="header-search-icon" title="Search">
                                            <i className="flaticon-magnifying-glass"></i>
                                        </a>
                                    </li>
                                   {/* <li className="wishlist">
                                        <a href="wishlist.html">
                                            <i className="flaticon-heart"></i>
                                        </a>
                                    </li>*/}
                                    <li className="shopping-cart">
                                        <Link to="/cart" className="cart-dropdown-btn">
                                           {/* <span className="cart-count">3</span>*/}
                                            <i className="flaticon-shopping-cart"></i>
                                        </Link>
                                    </li>
                                    <li className="my-account">
                                        <a href="#" onClick={(e) => {
                                            e.preventDefault();
                                            toggleDropdown();
                                        }}>
                                            <i className="flaticon-person"></i>
                                        </a>
                                        <div className={`my-account-dropdown ${isPanelOpen ? 'open' : ''}`}>
                                            <div className="login-btn">
                                                <Link to="/login" className="axil-btn btn-bg-primary">Login</Link>
                                            </div>
                                            <div className="reg-footer text-center">No account yet? <Link
                                                to="/register" className="btn-link">REGISTER HERE.</Link></div>
                                        </div>
                                    </li>

                                    <li className="axil-mobile-toggle">
                                        <button className="menu-btn mobile-nav-toggler">
                                            <i className="flaticon-menu-2"></i>
                                        </button>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <main className="main-wrapper">
                <div className="axil-main-slider-area main-slider-style-1">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-5 col-sm-6">
                                <div className="main-slider-content">
                                    <div className="slider-content-activation-one">
                                        <div
                                            className="single-slide slick-slide"
                                            data-sal="slide-up"
                                            data-sal-delay={400}
                                            data-sal-duration={800}
                                        >
                                            <span className="subtitle"> <i className="fas fa-fire"/> Hot Deal In This Week </span>
                                            <h1 className="title">Roco Wireless Headphone</h1>
                                            <div className="slide-action">
                                                <div className="shop-btn">
                                                    <Link to="/shop" className="axil-btn btn-bg-white">
                                                        <i className="fal fa-shopping-cart"/>  Shop Now
                                                    </Link>
                                                </div>
                                                <div className="item-rating">
                                                    <div className="thumb">
                                                        <ul>
                                                            <li>
                                                                <img src="/src/assets/images/others/author1.png" alt="Author" />
                                                            </li>
                                                            <li>
                                                                <img src="/src/assets/images/others/author2.png" alt="Author" />
                                                            </li>
                                                            <li>
                                                                <img src="/src/assets/images/others/author3.png" alt="Author" />
                                                            </li>
                                                            <li>
                                                                <img src="/src/assets/images/others/author4.png" alt="Author"/>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="content">
                                                        <span className="rating-icon">
                                                          <i className="fas fa-star"/>
                                                          <i className="fas fa-star"/>
                                                          <i className="fas fa-star"/>
                                                          <i className="fas fa-star"/>
                                                          <i className="fal fa-star"/>
                                                        </span>
                                                        <span className="review-text">
                                                          <span>100+</span> Reviews
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="single-slide slick-slide">
                                            <span className="subtitle"> <i className="fas fa-fire"/> Hot Deal In This Week </span>
                                            <h1 className="title">Smart Digital Watch</h1>
                                            <div className="slide-action">
                                                <div className="shop-btn">
                                                    <a href="shop.html" className="axil-btn btn-bg-white">
                                                        <i className="fal fa-shopping-cart"/>
                                                        Shop Now
                                                    </a>
                                                </div>
                                                <div className="item-rating">
                                                    <div className="thumb">
                                                        <ul>
                                                            <li>
                                                                <img src="/src/assets/images/others/author1.png" alt="Author" />
                                                            </li>
                                                            <li>
                                                                <img src="/src/assets/images/others/author2.png" alt="Author" />
                                                            </li>
                                                            <li>
                                                                <img src="/src/assets/images/others/author3.png" alt="Author" />
                                                            </li>
                                                            <li>
                                                                <img src="/src/assets/images/others/author4.png" alt="Author" />
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="content">
                                                        <span className="rating-icon">
                                                          <i className="fas fa-star"/>
                                                          <i className="fas fa-star"/>
                                                          <i className="fas fa-star"/>
                                                          <i className="fas fa-star"/>
                                                          <i className="fal fa-star"/>
                                                        </span>
                                                        <span className="review-text">
                                                          <span>100+</span> Reviews
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="single-slide slick-slide">
                                            <span className="subtitle">
                                                <i className="fas fa-fire"/> Hot Deal In This Week
                                            </span>
                                            <h1 className="title">Roco Wireless Headphone</h1>
                                            <div className="slide-action">
                                                <div className="shop-btn">
                                                    <a href="shop.html" className="axil-btn btn-bg-white">
                                                        <i className="fal fa-shopping-cart"/>
                                                        Shop Now
                                                    </a>
                                                </div>
                                                <div className="item-rating">
                                                    <div className="thumb">
                                                        <ul>
                                                            <li>
                                                                <img
                                                                    src="/src/assets/images/others/author1.png"
                                                                    alt="Author"
                                                                />
                                                            </li>
                                                            <li>
                                                                <img
                                                                    src="/src/assets/images/others/author2.png"
                                                                    alt="Author"
                                                                />
                                                            </li>
                                                            <li>
                                                                <img
                                                                    src="/src/assets/images/others/author3.png"
                                                                    alt="Author"
                                                                />
                                                            </li>
                                                            <li>
                                                                <img
                                                                    src="/src/assets/images/others/author4.png"
                                                                    alt="Author"
                                                                />
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="content">
                                                        <span className="rating-icon">
                                                          <i className="fas fa-star"/>
                                                          <i className="fas fa-star"/>
                                                          <i className="fas fa-star"/>
                                                          <i className="fas fa-star"/>
                                                          <i className="fal fa-star"/>
                                                        </span>
                                                        <span className="review-text">
                                                          <span>100+</span> Reviews
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="single-slide slick-slide">
                                            <span className="subtitle">
                                                <i className="fas fa-fire"/> Hot Deal In This Week
                                            </span>
                                            <h1 className="title">Smart Digital Watch</h1>
                                            <div className="slide-action">
                                                <div className="shop-btn">
                                                    <a href="shop.html" className="axil-btn btn-bg-white">
                                                        <i className="fal fa-shopping-cart"/>
                                                        Shop Now
                                                    </a>
                                                </div>
                                                <div className="item-rating">
                                                    <div className="thumb">
                                                        <ul>
                                                            <li>
                                                                <img
                                                                    src="/src/assets/images/others/author1.png"
                                                                    alt="Author"
                                                                />
                                                            </li>
                                                            <li>
                                                                <img
                                                                    src="/src/assets/images/others/author2.png"
                                                                    alt="Author"
                                                                />
                                                            </li>
                                                            <li>
                                                                <img
                                                                    src="/src/assets/images/others/author3.png"
                                                                    alt="Author"
                                                                />
                                                            </li>
                                                            <li>
                                                                <img
                                                                    src="/src/assets/images/others/author4.png"
                                                                    alt="Author"
                                                                />
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="content">
                                                        <span className="rating-icon">
                                                          <i className="fas fa-star"/>
                                                          <i className="fas fa-star"/>
                                                          <i className="fas fa-star"/>
                                                          <i className="fas fa-star"/>
                                                          <i className="fal fa-star"/>
                                                        </span>
                                                        <span className="review-text">
                                                          <span>100+</span> Reviews
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-7 col-sm-6">
                                <div className="main-slider-large-thumb">
                                    <div className="slider-thumb-activation-one axil-slick-dots">
                                        <div
                                            className="single-slide slick-slide"
                                            data-sal="slide-up"
                                            data-sal-delay={600}
                                            data-sal-duration={1500}
                                        >
                                            <img
                                                src="/src/assets/images/shop/slider/sport-nike.png"
                                                alt="Product"
                                            />
                                            <div className="product-price">
                                                <span className="text">From</span>
                                                <span className="price-amount">$49.00</span>
                                            </div>
                                        </div>
                                        <div
                                            className="single-slide slick-slide"
                                            data-sal="slide-up"
                                            data-sal-delay={600}
                                            data-sal-duration={1500}
                                        >
                                            <div className="product-price">
                                                <span className="text">From</span>
                                                <span className="price-amount">$49.00</span>
                                            </div>
                                        </div>
                                        <div className="single-slide slick-slide">
                                            <img
                                                src="/src/assets/images/product/product-38.png"
                                                alt="Product"
                                            />
                                            <div className="product-price">
                                                <span className="text">From</span>
                                                <span className="price-amount">$49.00</span>
                                            </div>
                                        </div>
                                        <div className="single-slide slick-slide">
                                            <img
                                                src="/src/assets/images/product/product-39.png"
                                                alt="Product"
                                            />
                                            <div className="product-price">
                                                <span className="text">From</span>
                                                <span className="price-amount">$49.00</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <ul className="shape-group">
                        <li className="shape-1">
                            <img src="/src/assets/images/others/shape-1.png" alt="Shape"/>
                        </li>
                        <li className="shape-2">
                            <img src="/src/assets/images/others/shape-2.png" alt="Shape"/>
                        </li>
                    </ul>
                </div>
                <div className="axil-categorie-area bg-color-dark axil-section-gapcommon">
                    <div className="container">
                        <div className="section-title-wrapper">
                              <span className="title-highlighter highlighter-secondary">
                                    {" "} <i className="far fa-tags"/> Categories
                              </span>
                            <h2 className="title">Browse by Category</h2>
                        </div>
                        <div
                            className="categrie-product-activation slick-layout-wrapper--15 axil-slick-arrow  arrow-top-slide">
                            <div className="slick-single-layout">
                                <div
                                    className="categrie-product"
                                    data-sal="zoom-out"
                                    data-sal-delay={200}
                                    data-sal-duration={500}
                                >
                                    <a href="#">
                                        <img
                                            className="img-fluid"
                                            src="/src/assets/images/shop/categories/clothes.png"
                                            alt="product categorie"
                                        />
                                        <h6 className="cat-title">{t('page.shop.categories.clothes')}</h6>
                                    </a>
                                </div>
                            </div>
                            <div className="slick-single-layout">
                                <div
                                    className="categrie-product"
                                    data-sal="zoom-out"
                                    data-sal-delay={300}
                                    data-sal-duration={500}
                                >
                                    <a href="#">
                                        <img
                                            className="img-fluid"
                                            src="/src/assets/images/shop/categories/fitness.png"
                                            alt="product categorie"
                                        />
                                        <h6 className="cat-title">{t('page.shop.categories.fitness')}</h6>
                                    </a>
                                </div>
                            </div>
                            <div className="slick-single-layout">
                                <div
                                    className="categrie-product"
                                    data-sal="zoom-out"
                                    data-sal-delay={400}
                                    data-sal-duration={500}
                                >
                                    <a href="#">
                                        <img
                                            className="img-fluid"
                                            src="/src/assets/images/shop/categories/equipment.png"
                                            alt="product categorie"
                                        />
                                        <h6 className="cat-title">{t('page.shop.categories.equipment')}</h6>
                                    </a>
                                </div>
                            </div>
                            <div className="slick-single-layout">
                                <div
                                    className="categrie-product"
                                    data-sal="zoom-out"
                                    data-sal-delay={500}
                                    data-sal-duration={500}
                                >
                                    <a href="#">
                                        <img
                                            className="img-fluid"
                                            src="/src/assets/images/shop/categories/footwear.png"
                                            alt="product categorie"
                                        />
                                        <h6 className="cat-title">{t('page.shop.categories.footwear')}</h6>
                                    </a>
                                </div>
                            </div>
                            <div className="slick-single-layout">
                                <div
                                    className="categrie-product"
                                    data-sal="zoom-out"
                                    data-sal-delay={600}
                                    data-sal-duration={500}
                                >
                                    <a href="#">
                                        <img
                                            className="img-fluid"
                                            src="/src/assets/images/shop/categories/outdoors.png"
                                            alt="product categorie"
                                        />
                                        <h6 className="cat-title">{t('page.shop.categories.outdoors')}</h6>
                                    </a>
                                </div>
                            </div>
                            <div className="slick-single-layout">
                                <div
                                    className="categrie-product"
                                    data-sal="zoom-out"
                                    data-sal-delay={700}
                                    data-sal-duration={500}
                                >
                                    <a href="#">
                                        <img
                                            className="img-fluid"
                                            src="/src/assets/images/shop/categories/supplements.png"
                                            alt="product categorie"
                                        />
                                        <h6 className="cat-title">{t('page.shop.categories.supplements')}</h6>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
               {/* <div className="axil-product-area bg-color-dark axil-section-gap">
                    <div className="container">
                        <div className="section-title-wrapper">
                            <span className="title-highlighter highlighter-primary">
                            {" "}
                                <i className="far fa-shopping-basket"/> Our Products
                            </span>
                            <h2 className="title">Explore our Products</h2>
                        </div>
                        <div
                            className="explore-product-activation slick-layout-wrapper slick-layout-wrapper--15 axil-slick-arrow arrow-top-slide">
                            <div className="slick-single-layout">
                                <div className="row row--15">
                                    <div className="col-xl-3 col-lg-4 col-sm-6 col-12 mb--30">
                                        <div className="axil-product product-style-one">
                                            <div className="thumbnail">
                                                <a href="single-product.html">
                                                    <img
                                                        data-sal="zoom-out"
                                                        data-sal-delay={200}
                                                        data-sal-duration={800}
                                                        loading="lazy"
                                                        className="main-img"
                                                        src="/src/assets/images/product/electric/product-01.png"
                                                        alt="Product Images"
                                                    />
                                                    <img
                                                        className="hover-img"
                                                        src="/src/assets/images/product/electric/product-08.png"
                                                        alt="Product Images"
                                                    />
                                                </a>
                                                <div className="label-block label-right">
                                                    <div className="product-badget">20% Off</div>
                                                </div>
                                                <div className="product-hover-action">
                                                    <ul className="cart-action">
                                                        <li className="quickview">
                                                            <a
                                                                href="#"
                                                                data-bs-toggle="modal"
                                                                data-bs-target="#quick-view-modal"
                                                            >
                                                                <i className="far fa-eye"/>
                                                            </a>
                                                        </li>
                                                        <li className="select-option">
                                                            <a href="single-product.html">Add to Cart</a>
                                                        </li>
                                                        <li className="wishlist">
                                                            <a href="wishlist.html">
                                                                <i className="far fa-heart"/>
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="product-content">
                                                <div className="inner">
                                                    <div className="product-rating">
                                                        <span className="icon">
                                                          <i className="fas fa-star"/>
                                                          <i className="fas fa-star"/>
                                                          <i className="fas fa-star"/>
                                                          <i className="fas fa-star"/>
                                                          <i className="fas fa-star"/>
                                                        </span>
                                                        <span className="rating-number">(64)</span>
                                                    </div>
                                                    <h5 className="title">
                                                        <a href="single-product.html">
                                                            Yantiti Leather &amp; Canvas Bags
                                                        </a>
                                                    </h5>
                                                    <div className="product-price-variant">
                                                        <span className="price current-price">$29.99</span>
                                                        <span className="price old-price">$49.99</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-3 col-lg-4 col-sm-6 col-12 mb--30">
                                        <div className="axil-product product-style-one">
                                            <div className="thumbnail">
                                                <a href="single-product.html">
                                                    <img
                                                        data-sal="zoom-out"
                                                        data-sal-delay={300}
                                                        data-sal-duration={800}
                                                        loading="lazy"
                                                        src="/src/assets/images/product/electric/product-02.png"
                                                        alt="Product Images"
                                                    />
                                                    <img
                                                        className="hover-img"
                                                        src="/src/assets/images/product/electric/product-06.png"
                                                        alt="Product Images"
                                                    />
                                                </a>
                                                <div className="product-hover-action">
                                                    <ul className="cart-action">
                                                        <li className="quickview">
                                                            <a
                                                                href="#"
                                                                data-bs-toggle="modal"
                                                                data-bs-target="#quick-view-modal"
                                                            >
                                                                <i className="far fa-eye"/>
                                                            </a>
                                                        </li>
                                                        <li className="select-option">
                                                            <a href="single-product.html">Select Option</a>
                                                        </li>
                                                        <li className="wishlist">
                                                            <a href="wishlist.html">
                                                                <i className="far fa-heart"/>
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="product-content">
                                                <div className="inner">
                                                    <h5 className="title">
                                                        <a href="single-product.html">Level 20 RGB Cherry</a>
                                                    </h5>
                                                    <div className="product-price-variant">
                                                        <span className="price current-price">$29.99</span>
                                                        <span className="price old-price">$49.99</span>
                                                    </div>
                                                    <div className="color-variant-wrapper">
                                                        <ul className="color-variant">
                                                            <li className="color-extra-01 active">
                                                                <span>
                                                                  <span className="color"/>
                                                                </span>
                                                            </li>
                                                            <li className="color-extra-02">
                                                                <span>
                                                                  <span className="color"/>
                                                                </span>
                                                            </li>
                                                            <li className="color-extra-03">
                                                                <span>
                                                                  <span className="color"/>
                                                                </span>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-3 col-lg-4 col-sm-6 col-12 mb--30">
                                        <div className="axil-product product-style-one">
                                            <div className="thumbnail">
                                                <a href="single-product.html">
                                                    <img
                                                        data-sal="zoom-out"
                                                        data-sal-delay={400}
                                                        data-sal-duration={800}
                                                        loading="lazy"
                                                        src="/src/assets/images/product/electric/product-03.png"
                                                        alt="Product Images"
                                                    />
                                                </a>
                                                <div className="label-block label-right">
                                                    <div className="product-badget">20% Off</div>
                                                </div>
                                                <div className="product-hover-action">
                                                    <ul className="cart-action">
                                                        <li className="quickview">
                                                            <a
                                                                href="#"
                                                                data-bs-toggle="modal"
                                                                data-bs-target="#quick-view-modal"
                                                            >
                                                                <i className="far fa-eye"/>
                                                            </a>
                                                        </li>
                                                        <li className="select-option">
                                                            <a href="single-product.html">Select Option</a>
                                                        </li>
                                                        <li className="wishlist">
                                                            <a href="wishlist.html">
                                                                <i className="far fa-heart"/>
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="product-content">
                                                <div className="inner">
                                                    <h5 className="title">
                                                        <a href="single-product.html">Logitech Streamcam</a>
                                                    </h5>
                                                    <div className="product-price-variant">
                                                        <span className="price current-price">$29.99</span>
                                                        <span className="price old-price">$49.99</span>
                                                    </div>
                                                    <div className="color-variant-wrapper">
                                                        <ul className="color-variant">
                                                            <li className="color-extra-01 active">
                                                                <span>
                                                                  <span className="color"/>
                                                                </span>
                                                            </li>
                                                            <li className="color-extra-02">
                                                                <span>
                                                                  <span className="color"/>
                                                                </span>
                                                            </li>
                                                            <li className="color-extra-03">
                                                                <span>
                                                                  <span className="color"/>
                                                                </span>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-3 col-lg-4 col-sm-6 col-12 mb--30">
                                        <div className="axil-product product-style-one">
                                            <div className="thumbnail">
                                                <a href="single-product.html">
                                                    <img
                                                        data-sal="zoom-out"
                                                        data-sal-delay={500}
                                                        data-sal-duration={800}
                                                        loading="lazy"
                                                        src="/src/assets/images/product/electric/product-04.png"
                                                        alt="Product Images"
                                                    />
                                                    <img
                                                        className="hover-img"
                                                        src="/src/assets/images/product/electric/product-05.png"
                                                        alt="Product Images"
                                                    />
                                                </a>
                                                <div className="product-hover-action">
                                                    <ul className="cart-action">
                                                        <li className="quickview">
                                                            <a
                                                                href="#"
                                                                data-bs-toggle="modal"
                                                                data-bs-target="#quick-view-modal"
                                                            >
                                                                <i className="far fa-eye"/>
                                                            </a>
                                                        </li>
                                                        <li className="select-option">
                                                            <a href="single-product.html">Select Option</a>
                                                        </li>
                                                        <li className="wishlist">
                                                            <a href="wishlist.html">
                                                                <i className="far fa-heart"/>
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="product-content">
                                                <div className="inner">
                                                    <div className="product-rating">
                                                        <span className="icon">
                                                          <i className="fas fa-star"/>
                                                          <i className="fas fa-star"/>
                                                          <i className="fas fa-star"/>
                                                          <i className="fas fa-star"/>
                                                          <i className="fas fa-star"/>
                                                        </span>
                                                        <span className="rating-number">(44)</span>
                                                    </div>
                                                    <h5 className="title">
                                                        <a href="single-product.html">3D™ wireless headset</a>
                                                    </h5>
                                                    <div className="product-price-variant">
                                                        <span className="price current-price">$29.99</span>
                                                        <span className="price old-price">$49.99</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-3 col-lg-4 col-sm-6 col-12 mb--30">
                                        <div className="axil-product product-style-one">
                                            <div className="thumbnail">
                                                <a href="single-product.html">
                                                    <img
                                                        data-sal="zoom-out"
                                                        data-sal-delay={200}
                                                        data-sal-duration={800}
                                                        loading="lazy"
                                                        src="/src/assets/images/product/electric/product-05.png"
                                                        alt="Product Images"
                                                    />
                                                    <img
                                                        className="hover-img"
                                                        src="/src/assets/images/product/electric/product-04.png"
                                                        alt="Product Images"
                                                    />
                                                </a>
                                                <div className="label-block label-right">
                                                    <div className="product-badget">20% Off</div>
                                                </div>
                                                <div className="product-hover-action">
                                                    <ul className="cart-action">
                                                        <li className="quickview">
                                                            <a
                                                                href="#"
                                                                data-bs-toggle="modal"
                                                                data-bs-target="#quick-view-modal"
                                                            >
                                                                <i className="far fa-eye"/>
                                                            </a>
                                                        </li>
                                                        <li className="select-option">
                                                            <a href="single-product.html">Select Option</a>
                                                        </li>
                                                        <li className="wishlist">
                                                            <a href="wishlist.html">
                                                                <i className="far fa-heart"/>
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="product-content">
                                                <div className="inner">
                                                    <h5 className="title">
                                                        <a href="single-product.html">Bass Meets Clarity</a>
                                                    </h5>
                                                    <div className="product-price-variant">
                                                        <span className="price current-price">$29.99</span>
                                                        <span className="price old-price">$49.99</span>
                                                    </div>
                                                    <div className="color-variant-wrapper">
                                                        <ul className="color-variant">
                                                            <li className="color-extra-01 active">
                                                                <span>
                                                                  <span className="color"/>
                                                                </span>
                                                            </li>
                                                            <li className="color-extra-02">
                                                                <span>
                                                                  <span className="color"/>
                                                                </span>
                                                            </li>
                                                            <li className="color-extra-03">
                                                                <span>
                                                                  <span className="color"/>
                                                                </span>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-3 col-lg-4 col-sm-6 col-12 mb--30">
                                        <div className="axil-product product-style-one">
                                            <div className="thumbnail">
                                                <a href="single-product.html">
                                                    <img
                                                        data-sal="zoom-out"
                                                        data-sal-delay={300}
                                                        data-sal-duration={800}
                                                        loading="lazy"
                                                        src="/src/assets/images/product/electric/product-06.png"
                                                        alt="Product Images"
                                                    />
                                                </a>
                                                <div className="label-block label-right">
                                                    <div className="product-badget">20% Off</div>
                                                </div>
                                                <div className="product-hover-action">
                                                    <ul className="cart-action">
                                                        <li className="quickview">
                                                            <a
                                                                href="#"
                                                                data-bs-toggle="modal"
                                                                data-bs-target="#quick-view-modal"
                                                            >
                                                                <i className="far fa-eye"/>
                                                            </a>
                                                        </li>
                                                        <li className="select-option">
                                                            <a href="single-product.html">Select Option</a>
                                                        </li>
                                                        <li className="wishlist">
                                                            <a href="wishlist.html">
                                                                <i className="far fa-heart"/>
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="product-content">
                                                <div className="inner">
                                                    <h5 className="title">
                                                        <a href="single-product.html">Mice Logitech</a>
                                                    </h5>
                                                    <div className="product-price-variant">
                                                        <span className="price current-price">$29.99</span>
                                                        <span className="price old-price">$49.99</span>
                                                    </div>
                                                    <div className="color-variant-wrapper">
                                                        <ul className="color-variant">
                                                            <li className="color-extra-01 active">
                            <span>
                              <span className="color"/>
                            </span>
                                                            </li>
                                                            <li className="color-extra-02">
                                                                <span>
                                                                  <span className="color"/>
                                                                </span>
                                                            </li>
                                                            <li className="color-extra-03">
                                                                <span>
                                                                  <span className="color"/>
                                                                </span>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-3 col-lg-4 col-sm-6 col-12 mb--30">
                                        <div className="axil-product product-style-one">
                                            <div className="thumbnail">
                                                <a href="single-product.html">
                                                    <img
                                                        data-sal="zoom-out"
                                                        data-sal-delay={400}
                                                        data-sal-duration={800}
                                                        loading="lazy"
                                                        src="/src/assets/images/product/electric/product-07.png"
                                                        alt="Product Images"
                                                    />
                                                    <img
                                                        className="hover-img"
                                                        src="/src/assets/images/product/electric/product-08.png"
                                                        alt="Product Images"
                                                    />
                                                </a>
                                                <div className="label-block label-right">
                                                    <div className="product-badget">20% Off</div>
                                                </div>
                                                <div className="product-hover-action">
                                                    <ul className="cart-action">
                                                        <li className="quickview">
                                                            <a
                                                                href="#"
                                                                data-bs-toggle="modal"
                                                                data-bs-target="#quick-view-modal"
                                                            >
                                                                <i className="far fa-eye"/>
                                                            </a>
                                                        </li>
                                                        <li className="select-option">
                                                            <a href="single-product.html">Select Option</a>
                                                        </li>
                                                        <li className="wishlist">
                                                            <a href="wishlist.html">
                                                                <i className="far fa-heart"/>
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="product-content">
                                                <div className="inner">
                                                    <div className="product-rating">
                                                        <span className="icon">
                                                          <i className="fas fa-star"/>
                                                          <i className="fas fa-star"/>
                                                          <i className="fas fa-star"/>
                                                          <i className="fas fa-star"/>
                                                          <i className="fas fa-star"/>
                                                        </span>
                                                        <span className="rating-number">(64)</span>
                                                    </div>
                                                    <h5 className="title">
                                                        <a href="single-product.html">Zone Headphone</a>
                                                    </h5>
                                                    <div className="product-price-variant">
                                                        <span className="price current-price">$29.99</span>
                                                        <span className="price old-price">$49.99</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-3 col-lg-4 col-sm-6 col-12 mb--30">
                                        <div className="axil-product product-style-one">
                                            <div className="thumbnail">
                                                <a href="single-product.html">
                                                    <img
                                                        data-sal="zoom-out"
                                                        data-sal-delay={500}
                                                        data-sal-duration={800}
                                                        loading="lazy"
                                                        src="/src/assets/images/product/electric/product-08.png"
                                                        alt="Product Images"
                                                    />
                                                </a>
                                                <div className="label-block label-right">
                                                    <div className="product-badget">20% Off</div>
                                                </div>
                                                <div className="product-hover-action">
                                                    <ul className="cart-action">
                                                        <li className="quickview">
                                                            <a
                                                                href="#"
                                                                data-bs-toggle="modal"
                                                                data-bs-target="#quick-view-modal"
                                                            >
                                                                <i className="far fa-eye"/>
                                                            </a>
                                                        </li>
                                                        <li className="select-option">
                                                            <a href="single-product.html">Select Option</a>
                                                        </li>
                                                        <li className="wishlist">
                                                            <a href="wishlist.html">
                                                                <i className="far fa-heart"/>
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="product-content">
                                                <div className="inner">
                                                    <h5 className="title">
                                                        <a href="single-product.html">3D™ wireless headset</a>
                                                    </h5>
                                                    <div className="product-price-variant">
                                                        <span className="price current-price">$29.99</span>
                                                        <span className="price old-price">$49.99</span>
                                                    </div>
                                                    <div className="color-variant-wrapper">
                                                        <ul className="color-variant">
                                                            <li className="color-extra-01 active">
                                                                <span>
                                                                  <span className="color"/>
                                                                </span>
                                                            </li>
                                                            <li className="color-extra-02">
                                                                <span>
                                                                  <span className="color"/>
                                                                </span>
                                                            </li>
                                                            <li className="color-extra-03">
                                                                <span>
                                                                  <span className="color"/>
                                                                </span>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="slick-single-layout">
                                <div className="row row--15">
                                    <div className="col-xl-3 col-lg-4 col-sm-6 col-12 mb--30">
                                        <div className="axil-product product-style-one">
                                            <div className="thumbnail">
                                                <a href="single-product.html">
                                                    <img
                                                        src="/src/assets/images/product/electric/product-01.png"
                                                        alt="Product Images"
                                                    />
                                                </a>
                                                <div className="label-block label-right">
                                                    <div className="product-badget">20% Off</div>
                                                </div>
                                                <div className="product-hover-action">
                                                    <ul className="cart-action">
                                                        <li className="quickview">
                                                            <a
                                                                href="#"
                                                                data-bs-toggle="modal"
                                                                data-bs-target="#quick-view-modal"
                                                            >
                                                                <i className="far fa-eye"/>
                                                            </a>
                                                        </li>
                                                        <li className="select-option">
                                                            <a href="single-product.html">Select Option</a>
                                                        </li>
                                                        <li className="wishlist">
                                                            <a href="wishlist.html">
                                                                <i className="far fa-heart"/>
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="product-content">
                                                <div className="inner">
                                                    <h5 className="title">
                                                        <a href="single-product.html">
                                                            Yantiti Leather &amp; Canvas Bags
                                                        </a>
                                                    </h5>
                                                    <div className="product-price-variant">
                                                        <span className="price current-price">$29.99</span>
                                                        <span className="price old-price">$49.99</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-3 col-lg-4 col-sm-6 col-12 mb--30">
                                        <div className="axil-product product-style-one">
                                            <div className="thumbnail">
                                                <a href="single-product.html">
                                                    <img
                                                        src="/src/assets/images/product/electric/product-02.png"
                                                        alt="Product Images"
                                                    />
                                                </a>
                                                <div className="product-hover-action">
                                                    <ul className="cart-action">
                                                        <li className="quickview">
                                                            <a
                                                                href="#"
                                                                data-bs-toggle="modal"
                                                                data-bs-target="#quick-view-modal"
                                                            >
                                                                <i className="far fa-eye"/>
                                                            </a>
                                                        </li>
                                                        <li className="select-option">
                                                            <a href="single-product.html">Select Option</a>
                                                        </li>
                                                        <li className="wishlist">
                                                            <a href="wishlist.html">
                                                                <i className="far fa-heart"/>
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="product-content">
                                                <div className="inner">
                                                    <h5 className="title">
                                                        <a href="single-product.html">3D™ wireless headset</a>
                                                    </h5>
                                                    <div className="product-price-variant">
                                                        <span className="price current-price">$29.99</span>
                                                        <span className="price old-price">$49.99</span>
                                                    </div>
                                                    <div className="color-variant-wrapper">
                                                        <ul className="color-variant">
                                                            <li className="color-extra-01 active">
                                                                <span>
                                                                  <span className="color"/>
                                                                </span>
                                                            </li>
                                                            <li className="color-extra-02">
                                                                <span>
                                                                  <span className="color"/>
                                                                </span>
                                                            </li>
                                                            <li className="color-extra-03">
                                                                <span>
                                                                  <span className="color"/>
                                                                </span>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-xl-3 col-lg-4 col-sm-6 col-12 mb--30">
                                        <div className="axil-product product-style-one">
                                            <div className="thumbnail">
                                                <a href="single-product.html">
                                                    <img
                                                        src="/src/assets/images/product/electric/product-03.png"
                                                        alt="Product Images"
                                                    />
                                                </a>
                                                <div className="label-block label-right">
                                                    <div className="product-badget">20% Off</div>
                                                </div>
                                                <div className="product-hover-action">
                                                    <ul className="cart-action">
                                                        <li className="quickview">
                                                            <a
                                                                href="#"
                                                                data-bs-toggle="modal"
                                                                data-bs-target="#quick-view-modal"
                                                            >
                                                                <i className="far fa-eye"/>
                                                            </a>
                                                        </li>
                                                        <li className="select-option">
                                                            <a href="single-product.html">Select Option</a>
                                                        </li>
                                                        <li className="wishlist">
                                                            <a href="wishlist.html">
                                                                <i className="far fa-heart"/>
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="product-content">
                                                <div className="inner">
                                                    <h5 className="title">
                                                        <a href="single-product.html">3D™ wireless headset</a>
                                                    </h5>
                                                    <div className="product-price-variant">
                                                        <span className="price current-price">$29.99</span>
                                                        <span className="price old-price">$49.99</span>
                                                    </div>
                                                    <div className="color-variant-wrapper">
                                                        <ul className="color-variant">
                                                            <li className="color-extra-01 active">
                                                                <span>
                                                                  <span className="color"/>
                                                                </span>
                                                            </li>
                                                            <li className="color-extra-02">
                                                                <span>
                                                                  <span className="color"/>
                                                                </span>
                                                            </li>
                                                            <li className="color-extra-03">
                                                                <span>
                                                                  <span className="color"/>
                                                                </span>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-3 col-lg-4 col-sm-6 col-12 mb--30">
                                        <div className="axil-product product-style-one">
                                            <div className="thumbnail">
                                                <a href="single-product.html">
                                                    <img
                                                        src="/src/assets/images/product/electric/product-04.png"
                                                        alt="Product Images"
                                                    />
                                                </a>
                                                <div className="product-hover-action">
                                                    <ul className="cart-action">
                                                        <li className="quickview">
                                                            <a
                                                                href="#"
                                                                data-bs-toggle="modal"
                                                                data-bs-target="#quick-view-modal"
                                                            >
                                                                <i className="far fa-eye"/>
                                                            </a>
                                                        </li>
                                                        <li className="select-option">
                                                            <a href="single-product.html">Select Option</a>
                                                        </li>
                                                        <li className="wishlist">
                                                            <a href="wishlist.html">
                                                                <i className="far fa-heart"/>
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="product-content">
                                                <div className="inner">
                                                    <h5 className="title">
                                                        <a href="single-product.html">3D™ wireless headset</a>
                                                    </h5>
                                                    <div className="product-price-variant">
                                                        <span className="price current-price">$29.99</span>
                                                        <span className="price old-price">$49.99</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-3 col-lg-4 col-sm-6 col-12 mb--30">
                                        <div className="axil-product product-style-one">
                                            <div className="thumbnail">
                                                <a href="single-product.html">
                                                    <img
                                                        src="/src/assets/images/product/electric/product-05.png"
                                                        alt="Product Images"
                                                    />
                                                </a>
                                                <div className="label-block label-right">
                                                    <div className="product-badget">20% Off</div>
                                                </div>
                                                <div className="product-hover-action">
                                                    <ul className="cart-action">
                                                        <li className="quickview">
                                                            <a
                                                                href="#"
                                                                data-bs-toggle="modal"
                                                                data-bs-target="#quick-view-modal"
                                                            >
                                                                <i className="far fa-eye"/>
                                                            </a>
                                                        </li>
                                                        <li className="select-option">
                                                            <a href="single-product.html">Select Option</a>
                                                        </li>
                                                        <li className="wishlist">
                                                            <a href="wishlist.html">
                                                                <i className="far fa-heart"/>
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="product-content">
                                                <div className="inner">
                                                    <h5 className="title">
                                                        <a href="single-product.html">3D™ wireless headset</a>
                                                    </h5>
                                                    <div className="product-price-variant">
                                                        <span className="price current-price">$29.99</span>
                                                        <span className="price old-price">$49.99</span>
                                                    </div>
                                                    <div className="color-variant-wrapper">
                                                        <ul className="color-variant">
                                                            <li className="color-extra-01 active">
                                                                <span>
                                                                  <span className="color"/>
                                                                </span>
                                                            </li>
                                                            <li className="color-extra-02">
                                                                <span>
                                                                  <span className="color"/>
                                                                </span>
                                                            </li>
                                                            <li className="color-extra-03">
                                                                <span>
                                                                  <span className="color"/>
                                                                </span>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-3 col-lg-4 col-sm-6 col-12 mb--30">
                                        <div className="axil-product product-style-one">
                                            <div className="thumbnail">
                                                <a href="single-product.html">
                                                    <img
                                                        src="/src/assets/images/product/electric/product-06.png"
                                                        alt="Product Images"
                                                    />
                                                </a>
                                                <div className="label-block label-right">
                                                    <div className="product-badget">20% Off</div>
                                                </div>
                                                <div className="product-hover-action">
                                                    <ul className="cart-action">
                                                        <li className="quickview">
                                                            <a
                                                                href="#"
                                                                data-bs-toggle="modal"
                                                                data-bs-target="#quick-view-modal"
                                                            >
                                                                <i className="far fa-eye"/>
                                                            </a>
                                                        </li>
                                                        <li className="select-option">
                                                            <a href="single-product.html">Select Option</a>
                                                        </li>
                                                        <li className="wishlist">
                                                            <a href="wishlist.html">
                                                                <i className="far fa-heart"/>
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="product-content">
                                                <div className="inner">
                                                    <h5 className="title">
                                                        <a href="single-product.html">3D™ wireless headset</a>
                                                    </h5>
                                                    <div className="product-price-variant">
                                                        <span className="price current-price">$29.99</span>
                                                        <span className="price old-price">$49.99</span>
                                                    </div>
                                                    <div className="color-variant-wrapper">
                                                        <ul className="color-variant">
                                                            <li className="color-extra-01 active">
                            <span>
                              <span className="color"/>
                            </span>
                                                            </li>
                                                            <li className="color-extra-02">
                            <span>
                              <span className="color"/>
                            </span>
                                                            </li>
                                                            <li className="color-extra-03">
                            <span>
                              <span className="color"/>
                            </span>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-3 col-lg-4 col-sm-6 col-12 mb--30">
                                        <div className="axil-product product-style-one">
                                            <div className="thumbnail">
                                                <a href="single-product.html">
                                                    <img
                                                        src="/src/assets/images/product/electric/product-07.png"
                                                        alt="Product Images"
                                                    />
                                                </a>
                                                <div className="label-block label-right">
                                                    <div className="product-badget">20% Off</div>
                                                </div>
                                                <div className="product-hover-action">
                                                    <ul className="cart-action">
                                                        <li className="quickview">
                                                            <a
                                                                href="#"
                                                                data-bs-toggle="modal"
                                                                data-bs-target="#quick-view-modal"
                                                            >
                                                                <i className="far fa-eye"/>
                                                            </a>
                                                        </li>
                                                        <li className="select-option">
                                                            <a href="single-product.html">Select Option</a>
                                                        </li>
                                                        <li className="wishlist">
                                                            <a href="wishlist.html">
                                                                <i className="far fa-heart"/>
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="product-content">
                                                <div className="inner">
                                                    <h5 className="title">
                                                        <a href="single-product.html">3D™ wireless headset</a>
                                                    </h5>
                                                    <div className="product-price-variant">
                                                        <span className="price current-price">$29.99</span>
                                                        <span className="price old-price">$49.99</span>
                                                    </div>
                                                    <div className="color-variant-wrapper">
                                                        <ul className="color-variant">
                                                            <li className="color-extra-01 active">
                            <span>
                              <span className="color"/>
                            </span>
                                                            </li>
                                                            <li className="color-extra-02">
                            <span>
                              <span className="color"/>
                            </span>
                                                            </li>
                                                            <li className="color-extra-03">
                            <span>
                              <span className="color"/>
                            </span>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-3 col-lg-4 col-sm-6 col-12 mb--30">
                                        <div className="axil-product product-style-one">
                                            <div className="thumbnail">
                                                <a href="single-product.html">
                                                    <img
                                                        src="/src/assets/images/product/electric/product-08.png"
                                                        alt="Product Images"
                                                    />
                                                </a>
                                                <div className="label-block label-right">
                                                    <div className="product-badget">20% Off</div>
                                                </div>
                                                <div className="product-hover-action">
                                                    <ul className="cart-action">
                                                        <li className="quickview">
                                                            <a
                                                                href="#"
                                                                data-bs-toggle="modal"
                                                                data-bs-target="#quick-view-modal"
                                                            >
                                                                <i className="far fa-eye"/>
                                                            </a>
                                                        </li>
                                                        <li className="select-option">
                                                            <a href="single-product.html">Select Option</a>
                                                        </li>
                                                        <li className="wishlist">
                                                            <a href="wishlist.html">
                                                                <i className="far fa-heart"/>
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="product-content">
                                                <div className="inner">
                                                    <h5 className="title">
                                                        <a href="single-product.html">3D™ wireless headset</a>
                                                    </h5>
                                                    <div className="product-price-variant">
                                                        <span className="price current-price">$29.99</span>
                                                        <span className="price old-price">$49.99</span>
                                                    </div>
                                                    <div className="color-variant-wrapper">
                                                        <ul className="color-variant">
                                                            <li className="color-extra-01 active">
                            <span>
                              <span className="color"/>
                            </span>
                                                            </li>
                                                            <li className="color-extra-02">
                            <span>
                              <span className="color"/>
                            </span>
                                                            </li>
                                                            <li className="color-extra-03">
                            <span>
                              <span className="color"/>
                            </span>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12 text-center mt--20 mt_sm--0">
                                <a
                                    href="shop.html"
                                    className="axil-btn btn-bg-lighter btn-load-more"
                                >
                                    View All Products
                                </a>
                            </div>
                        </div>
                    </div>
                </div>*/}
                
                <div className="axil-why-choose-area pb--50 pb_sm--30 bg-color-dark">
                    <div className="container">
                        <div className="section-title-wrapper section-title-center">
                              <span className="title-highlighter highlighter-secondary">
                                <i className="fal fa-thumbs-up"/>
                                Why Us
                              </span>
                              <h2 className="title">Why People Choose Us</h2>
                        </div>
                        <div className="row row-cols-xl-5 row-cols-lg-4 row-cols-md-3 row-cols-sm-2 row-cols-1 row--20">
                            <div className="col">
                                <div className="service-box">
                                    <div className="icon">
                                        <img src="/src/assets/images/icons/service6.png" alt="Service"/>
                                    </div>
                                    <h6 className="title">Fast &amp; Secure Delivery</h6>
                                </div>
                            </div>
                            <div className="col">
                                <div className="service-box">
                                    <div className="icon">
                                        <img src="/src/assets/images/icons/service7.png" alt="Service"/>
                                    </div>
                                    <h6 className="title">100% Guarantee On Product</h6>
                                </div>
                            </div>
                            <div className="col">
                                <div className="service-box">
                                    <div className="icon">
                                        <img src="/src/assets/images/icons/service8.png" alt="Service"/>
                                    </div>
                                    <h6 className="title">24 Hour Return Policy</h6>
                                </div>
                            </div>
                            <div className="col">
                                <div className="service-box">
                                    <div className="icon">
                                        <img src="/src/assets/images/icons/service9.png" alt="Service"/>
                                    </div>
                                    <h6 className="title">24 Hour Return Policy</h6>
                                </div>
                            </div>
                            <div className="col">
                                <div className="service-box">
                                    <div className="icon">
                                        <img src="/src/assets/images/icons/service10.png" alt="Service"/>
                                    </div>
                                    <h6 className="title">Next Level Pro Quality</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="axil-newsletter-area axil-section-gap pt--0 bg-color-dark">
                    <div className="container">
                        <div className="etrade-newsletter-wrapper bg_image bg_image--5">
                            <div className="newsletter-content">
                                <span className="title-highlighter highlighter-primary2">
                                  <i className="fas fa-envelope-open"/>
                                  Newsletter
                                </span>
                                <h2 className="title mb--40 mb_sm--30">Get weekly update</h2>
                                <div className="input-group newsletter-form">
                                    <div className="position-relative newsletter-inner mb--15">
                                        <input placeholder="example@gmail.com" type="text"/>
                                    </div>
                                    <button type="submit" className="axil-btn mb--15">
                                        Subscribe
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <div className="service-area bg-color-dark">
                <div className="container">
                    <div className="row row-cols-xl-4 row-cols-sm-2 row-cols-1 row--20">
                        <div className="col">
                            <div className="service-box service-style-2">
                                <div className="icon">
                                    <img src="/src/assets/images/icons/service1.png" alt="Service"/>
                                </div>
                                <div className="content">
                                    <h6 className="title">Fast &amp; Secure Delivery</h6>
                                    <p>Tell about your service.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="service-box service-style-2">
                                <div className="icon">
                                    <img src="/src/assets/images/icons/service2.png" alt="Service"/>
                                </div>
                                <div className="content">
                                    <h6 className="title">Money Back Guarantee</h6>
                                    <p>Within 10 days.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="service-box service-style-2">
                                <div className="icon">
                                    <img src="/src/assets/images/icons/service3.png" alt="Service"/>
                                </div>
                                <div className="content">
                                    <h6 className="title">24 Hour Return Policy</h6>
                                    <p>No question ask.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="service-box service-style-2">
                                <div className="icon">
                                    <img src="/src/assets/images/icons/service4.png" alt="Service"/>
                                </div>
                                <div className="content">
                                    <h6 className="title">Pro Quality Support</h6>
                                    <p>24/7 Live support.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer
                isModalOpen={isOpen}
                isModalCart={isOpenCart}
            />
        </>
    );
};