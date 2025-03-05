import {Link} from "react-router-dom";
import logoNav from "../assets/images/logo/logo.png";
import {useTranslation} from "react-i18next";
import {useEffect, useState} from "react";
import i18n from "i18next";

export const Header = () => {

    const {t} = useTranslation();
    const [selectedLanguage, setSelectedLanguage] = useState(i18n.language || 'en');
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [cartItemsCount, setCartItemsCount] = useState(0);

    const token = localStorage.getItem("token");

    const fetchCartItemCount = async () => {
        try {
            const response = await fetch("http://localhost:8080/api/cart/items", {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            if (response.ok) {
                const count = await response.json();
                setCartItemsCount(count);
            } else {
                console.error("Failed to fetch cart item count");
            }
        } catch (error) {
            console.error("Error fetching cart item count:", error);
        }
    };


    useEffect(() => {
        setIsAuthenticated(!!token);

        if (token) {
            fetchCartItemCount();
        }
    }, [token]);


    const changeLanguage = async (lng: string) => {
        await i18n.changeLanguage(lng);
        setSelectedLanguage(lng);
    };
    return (
        <>
            <header className="header axil-header header-style-5">
                <div className="axil-header-top">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6 col-sm-6 col-12">
                                <div className="header-top-dropdown">
                                    <div className="dropdown">
                                        <button
                                            className="dropdown-toggle"
                                            type="button"
                                            data-bs-toggle="dropdown"
                                            aria-expanded="false"
                                        >
                                            {t(`page.header.languages.${selectedLanguage}`)}
                                        </button>
                                        <ul className="dropdown-menu">
                                            <li>
                                                <a
                                                    className="dropdown-item"
                                                    onClick={() => changeLanguage('en')}
                                                >
                                                    {t(`page.header.languages.en`)}
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    className="dropdown-item"
                                                    onClick={() => changeLanguage('es')}
                                                >
                                                    {t(`page.header.languages.es`)}
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
                                            <li>
                                                <a className="dropdown-item" href="#">
                                                    USD
                                                </a>
                                            </li>
                                            <li>
                                                <a className="dropdown-item" href="#">
                                                    EUR
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-sm-6 col-12">
                                <div className="header-top-link">
                                    <ul className="quick-link">
                                        <li><a href="#">{t('page.header.sign.help')}</a></li>
                                        {!isAuthenticated ? (
                                            <>
                                                <li><Link to="/register">{t('page.header.sign.sign-up')}</Link></li>
                                                <li><Link to="/login">{t('page.header.sign.sign-in')}</Link></li>
                                            </>
                                        ) : (
                                            <li><Link to="/profile">{t('page.header.navbar.my-account')}</Link></li>
                                        )}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="axil-sticky-placeholder"/>
                <div className="axil-mainmenu">
                    <div className="container">
                        <div className="header-navbar">
                            <div className="header-brand">
                                <Link to="/home" className="logo logo-dark">
                                    <img src={logoNav} alt="Site Logo"/>
                                </Link>
                            </div>
                            <div className="header-main-nav">
                                <nav className="mainmenu-nav">
                                    <button className="mobile-close-btn mobile-nav-toggler">
                                        <i className="fas fa-times"/>
                                    </button>
                                    <div className="mobile-nav-brand">
                                        <Link to="/home" className="logo logo-dark">
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
                                    {/*<li className="axil-search d-xl-block d-none">
                                        <input
                                            type="search"
                                            className="placeholder product-search-input"
                                            name="search2"
                                            id="search2"
                                            defaultValue=""
                                            maxLength={128}
                                            placeholder="What are you looking for?"
                                            autoComplete="off"
                                        />
                                        <button type="submit" className="icon wooc-btn-search">
                                            <i className="flaticon-magnifying-glass" />
                                        </button>
                                    </li>*/}
                                    {/*<li className="axil-search d-xl-none d-block">
                                        <a
                                            href="javascript:void(0)"
                                            className="header-search-icon"
                                            title="Search"
                                        >
                                            <i className="flaticon-magnifying-glass" />
                                        </a>
                                    </li>*/}
                                    {/*<li className="wishlist">
                                        <a href="wishlist.html">
                                            <i className="flaticon-heart" />
                                        </a>
                                    </li>*/}
                                    {isAuthenticated && (
                                        <>
                                            <li className="shopping-cart">
                                                <Link to="/cart" className="cart-dropdown-btn">
                                                    <span className="cart-count">{cartItemsCount}</span>
                                                    <i className="flaticon-shopping-cart"/>
                                                </Link>
                                            </li>
                                            <li className="my-account">
                                                <Link to="/profile">
                                                    <i className="flaticon-person"/>
                                                </Link>
                                            </li>
                                            <li className="axil-mobile-toggle">
                                                <button className="menu-btn mobile-nav-toggler">
                                                    <i className="flaticon-menu-2"/>
                                                </button>
                                            </li>
                                        </>
                                    )}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="header-top-campaign">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-xl-5 col-lg-6 col-md-10">
                                <div
                                    className="header-campaign-activation axil-slick-arrow arrow-both-side header-campaign-arrow">
                                    <div className="slick-slide">
                                        <div className="campaign-content">
                                            <p>
                                                STUDENT NOW GET 10% OFF : <a href="#">GET OFFER</a>
                                            </p>
                                        </div>
                                    </div>
                                    <div className="slick-slide">
                                        <div className="campaign-content">
                                            <p>
                                                STUDENT NOW GET 10% OFF : <a href="#">GET OFFER</a>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
};