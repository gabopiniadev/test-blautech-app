//import { useTranslation } from "react-i18next";

import cartImageOne from '../assets/images/icons/cart/cart-1.png'
import cartImageTwo from '../assets/images/icons/cart/cart-2.png'
import cartImageFive from '../assets/images/icons/cart/cart-5.png'
import appStore from '../assets/images/others/app-store.png';
import playStore from '../assets/images/others/play-store.png';


const Footer = ({isModalOpen}) => {
    //const { t } = useTranslation();

    return (
        <>
            <footer className="axil-footer-area footer-style-2">
                <div className="footer-top separator-top">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3 col-sm-6">
                                <div className="axil-footer-widget">
                                    <h5 className="widget-title">Support</h5>
                                    <div className="inner">
                                        <p>Venezuela <br/>
                                            Valencia <br/>
                                        </p>
                                        <ul className="support-list-item">
                                            <li><a href="mailto:example@domain.com"><i
                                                className="fal fa-envelope-open"></i> technicaltest@test.com</a></li>
                                            <li><a href="tel:+58)412 4931541"><i
                                                className="fal fa-phone-alt"></i> (+58)412 4931541</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6">
                                <div className="axil-footer-widget">
                                    <h5 className="widget-title">Account</h5>
                                    <div className="inner">
                                        <ul>
                                            <li><a href="my-account.html">My Account</a></li>
                                            <li><a href="sign-up.html">Login / Register</a></li>
                                            <li><a href="cart.html">Cart</a></li>
                                            <li><a href="wishlist.html">Wishlist</a></li>
                                            <li><a href="shop.html">Shop</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6">
                                <div className="axil-footer-widget">
                                    <h5 className="widget-title">Quick Link</h5>
                                    <div className="inner">
                                        <ul>
                                            <li><a href="privacy-policy.html">Privacy Policy</a></li>
                                            <li><a href="terms-of-service.html">Terms Of Use</a></li>
                                            <li><a href="#">FAQ</a></li>
                                            <li><a href="contact.html">Contact</a></li>
                                            <li><a href="contact.html">Contact</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6">
                                <div className="axil-footer-widget">
                                    <h5 className="widget-title">Download App</h5>
                                    <div className="inner">
                                        <span>Save $3 With App & New User only</span>
                                        <div className="download-btn-group">
                                            <div className="app-link">
                                                <a href="#">
                                                    <img src={appStore} alt="App Store"/>
                                                </a>
                                                <a href="#">
                                                    <img src={playStore} alt="Play Store"/>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="copyright-area copyright-default separator-top">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-xl-4">
                                <div className="social-share">
                                    <a href="#"><i className="fab fa-facebook-f"></i></a>
                                    <a href="#"><i className="fab fa-instagram"></i></a>
                                    <a href="#"><i className="fa-brands fa-x-twitter"></i></a>
                                    <a href="#"><i className="fab fa-linkedin-in"></i></a>
                                    <a href="#"><i className="fab fa-discord"></i></a>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-12">
                                <div className="copyright-left d-flex flex-wrap justify-content-center">
                                    <ul className="quick-link">
                                        <li>© 2025. All rights reserved by GaboDev.
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-12">
                                <div
                                    className="copyright-right d-flex flex-wrap justify-content-xl-end justify-content-center align-items-center">
                                    <span className="card-text">Accept For</span>
                                    <ul className="payment-icons-bottom quick-link">
                                        <li><img src={cartImageOne} alt="paypal cart"/></li>
                                        <li><img src={cartImageTwo} alt="paypal cart"/></li>
                                        <li><img src={cartImageFive} alt="paypal cart"/></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            <div
                className="modal fade quick-view-product"
                id="quick-view-modal"
                tabIndex={-1}
                aria-hidden="true"
            >
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            >
                                <i className="far fa-times"/>
                            </button>
                        </div>
                        <div className="modal-body">
                            <div className="single-product-thumb">
                                <div className="row">
                                    <div className="col-lg-7 mb--40">
                                        <div className="row">
                                            <div className="col-lg-10 order-lg-2">
                                                <div
                                                    className="single-product-thumbnail product-large-thumbnail axil-product thumbnail-badge zoom-gallery">
                                                    <div className="thumbnail">
                                                        <img
                                                            src="assets/images/product/product-big-01.png"
                                                            alt="Product Images"
                                                        />
                                                        <div className="label-block label-right">
                                                            <div className="product-badget">20% OFF</div>
                                                        </div>
                                                        <div className="product-quick-view position-view">
                                                            <a
                                                                href="assets/images/product/product-big-01.png"
                                                                className="popup-zoom"
                                                            >
                                                                <i className="far fa-search-plus"/>
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <div className="thumbnail">
                                                        <img
                                                            src="assets/images/product/product-big-02.png"
                                                            alt="Product Images"
                                                        />
                                                        <div className="label-block label-right">
                                                            <div className="product-badget">20% OFF</div>
                                                        </div>
                                                        <div className="product-quick-view position-view">
                                                            <a
                                                                href="assets/images/product/product-big-02.png"
                                                                className="popup-zoom"
                                                            >
                                                                <i className="far fa-search-plus"/>
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <div className="thumbnail">
                                                        <img
                                                            src="assets/images/product/product-big-03.png"
                                                            alt="Product Images"
                                                        />
                                                        <div className="label-block label-right">
                                                            <div className="product-badget">20% OFF</div>
                                                        </div>
                                                        <div className="product-quick-view position-view">
                                                            <a
                                                                href="assets/images/product/product-big-03.png"
                                                                className="popup-zoom"
                                                            >
                                                                <i className="far fa-search-plus"/>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-2 order-lg-1">
                                                <div className="product-small-thumb small-thumb-wrapper">
                                                    <div className="small-thumb-img">
                                                        <img
                                                            src="assets/images/product/product-thumb/thumb-08.png"
                                                            alt="thumb image"
                                                        />
                                                    </div>
                                                    <div className="small-thumb-img">
                                                        <img
                                                            src="assets/images/product/product-thumb/thumb-07.png"
                                                            alt="thumb image"
                                                        />
                                                    </div>
                                                    <div className="small-thumb-img">
                                                        <img
                                                            src="assets/images/product/product-thumb/thumb-09.png"
                                                            alt="thumb image"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-5 mb--40">
                                        <div className="single-product-content">
                                            <div className="inner">
                                                <div className="product-rating">
                                                    <div className="star-rating">
                                                        <img
                                                            src="assets/images/icons/rate.png"
                                                            alt="Rate Images"
                                                        />
                                                    </div>
                                                    <div className="review-link">
                                                        <a href="#">
                                                            (<span>1</span> customer reviews)
                                                        </a>
                                                    </div>
                                                </div>
                                                <h3 className="product-title">Serif Coffee Table</h3>
                                                <span className="price-amount">$155.00 - $255.00</span>
                                                <ul className="product-meta">
                                                    <li>
                                                        <i className="fal fa-check"/>
                                                        In stock
                                                    </li>
                                                    <li>
                                                        <i className="fal fa-check"/>
                                                        Free delivery available
                                                    </li>
                                                    <li>
                                                        <i className="fal fa-check"/>
                                                        Sales 30% Off Use Code: MOTIVE30
                                                    </li>
                                                </ul>
                                                <p className="description">
                                                    In ornare lorem ut est dapibus, ut tincidunt nisi pretium.
                                                    Integer ante est, elementum eget magna. Pellentesque
                                                    sagittis dictum libero, eu dignissim tellus.
                                                </p>
                                                <div className="product-variations-wrapper">
                                                    <div className="product-variation">
                                                        <h6 className="title">Colors:</h6>
                                                        <div className="color-variant-wrapper">
                                                            <ul className="color-variant mt--0">
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
                                                    <div className="product-variation">
                                                        <h6 className="title">Size:</h6>
                                                        <ul className="range-variant">
                                                            <li>xs</li>
                                                            <li>s</li>
                                                            <li>m</li>
                                                            <li>l</li>
                                                            <li>xl</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="product-action-wrapper d-flex-center">
                                                    <div className="pro-qty">
                                                        <input type="text" defaultValue={1}/>
                                                    </div>
                                                    <ul className="product-action d-flex-center mb--0">
                                                        <li className="add-to-cart">
                                                            <a
                                                                href="cart.html"
                                                                className="axil-btn btn-bg-primary"
                                                            >
                                                                Add to Cart
                                                            </a>
                                                        </li>
                                                        <li className="wishlist">
                                                            <a
                                                                href="wishlist.html"
                                                                className="axil-btn wishlist-btn"
                                                            >
                                                                <i className="far fa-heart"/>
                                                            </a>
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
                </div>
            </div>

            <div className={`header-search-modal ${isModalOpen ? 'open' : ''}`} id="header-search-modal">
                <button className="card-close sidebar-close">
                    <i className="fas fa-times"/>
                </button>
                <div className="header-search-wrap">
                    <div className="card-header">
                        <form action="#">
                            <div className="input-group">
                                <input
                                    type="search"
                                    className="form-control"
                                    name="prod-search"
                                    id="prod-search"
                                    placeholder="Write Something...."
                                />
                                <button type="submit" className="axil-btn btn-bg-primary">
                                    <i className="far fa-search"/>
                                </button>
                            </div>
                        </form>
                    </div>
                    <div className="card-body">
                        <div className="search-result-header">
                            <h6 className="title">24 Result Found</h6>
                            <a href="shop.html" className="view-all">
                                View All
                            </a>
                        </div>
                        <div className="psearch-results">
                            <div className="axil-product-list">
                                <div className="thumbnail">
                                    <a href="single-product.html">
                                        <img
                                            src="assets/images/product/electric/product-09.png"
                                            alt="Yantiti Leather Bags"
                                        />
                                    </a>
                                </div>
                                <div className="product-content">
                                    <div className="product-rating">
                                        <span className="rating-icon">
                                          <i className="fas fa-star"/>
                                          <i className="fas fa-star"/>
                                          <i className="fas fa-star"/>
                                          <i className="fas fa-star"/>
                                          <i className="fal fa-star"/>
                                        </span>
                                        <span className="rating-number">
                                          <span>100+</span> Reviews
                                        </span>
                                    </div>
                                    <h6 className="product-title">
                                        <a href="single-product.html">Media Remote</a>
                                    </h6>
                                    <div className="product-price-variant">
                                        <span className="price current-price">$29.99</span>
                                        <span className="price old-price">$49.99</span>
                                    </div>
                                    <div className="product-cart">
                                        <a href="cart.html" className="cart-btn">
                                            <i className="fal fa-shopping-cart"/>
                                        </a>
                                        <a href="wishlist.html" className="cart-btn">
                                            <i className="fal fa-heart"/>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="axil-product-list">
                                <div className="thumbnail">
                                    <a href="single-product.html">
                                        <img
                                            src="assets/images/product/electric/product-09.png"
                                            alt="Yantiti Leather Bags"
                                        />
                                    </a>
                                </div>
                                <div className="product-content">
                                    <div className="product-rating">
                                        <span className="rating-icon">
                                          <i className="fas fa-star"/>
                                          <i className="fas fa-star"/>
                                          <i className="fas fa-star"/>
                                          <i className="fas fa-star"/>
                                          <i className="fal fa-star"/>
                                        </span>
                                        <span className="rating-number">
                                          <span>100+</span> Reviews
                                        </span>
                                    </div>
                                    <h6 className="product-title">
                                        <a href="single-product.html">Media Remote</a>
                                    </h6>
                                    <div className="product-price-variant">
                                        <span className="price current-price">$29.99</span>
                                        <span className="price old-price">$49.99</span>
                                    </div>
                                    <div className="product-cart">
                                        <a href="cart.html" className="cart-btn">
                                            <i className="fal fa-shopping-cart"/>
                                        </a>
                                        <a href="wishlist.html" className="cart-btn">
                                            <i className="fal fa-heart"/>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={`cart-dropdown ${isModalOpen ? 'open' : ''}`} id="cart-dropdown">
                <div className="cart-content-wrap">
                    <div className="cart-header">
                        <h2 className="header-title">Cart review</h2>
                        <button className="cart-close sidebar-close">
                            <i className="fas fa-times"/>
                        </button>
                    </div>
                    <div className="cart-body">
                        <ul className="cart-item-list">
                            <li className="cart-item">
                                <div className="item-img">
                                    <a href="single-product.html">
                                        <img
                                            src="assets/images/product/electric/product-01.png"
                                            alt="Commodo Blown Lamp"
                                        />
                                    </a>
                                    <button className="close-btn">
                                        <i className="fas fa-times"/>
                                    </button>
                                </div>
                                <div className="item-content">
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
                                    <h3 className="item-title">
                                        <a href="single-product-3.html">Wireless PS Handler</a>
                                    </h3>
                                    <div className="item-price">
                                        <span className="currency-symbol">$</span>155.00
                                    </div>
                                    <div className="pro-qty item-quantity">
                                        <input
                                            type="number"
                                            className="quantity-input"
                                            defaultValue={15}
                                        />
                                    </div>
                                </div>
                            </li>
                            <li className="cart-item">
                                <div className="item-img">
                                    <a href="single-product-2.html">
                                        <img
                                            src="assets/images/product/electric/product-02.png"
                                            alt="Commodo Blown Lamp"
                                        />
                                    </a>
                                    <button className="close-btn">
                                        <i className="fas fa-times"/>
                                    </button>
                                </div>
                                <div className="item-content">
                                    <div className="product-rating">
                                        <span className="icon">
                                          <i className="fas fa-star"/>
                                          <i className="fas fa-star"/>
                                          <i className="fas fa-star"/>
                                          <i className="fas fa-star"/>
                                          <i className="fas fa-star"/>
                                        </span>
                                        <span className="rating-number">(4)</span>
                                    </div>
                                    <h3 className="item-title">
                                        <a href="single-product-2.html">Gradient Light Keyboard</a>
                                    </h3>
                                    <div className="item-price">
                                        <span className="currency-symbol">$</span>255.00
                                    </div>
                                    <div className="pro-qty item-quantity">
                                        <input
                                            type="number"
                                            className="quantity-input"
                                            defaultValue={5}
                                        />
                                    </div>
                                </div>
                            </li>
                            <li className="cart-item">
                                <div className="item-img">
                                    <a href="single-product-3.html">
                                        <img
                                            src="assets/images/product/electric/product-03.png"
                                            alt="Commodo Blown Lamp"
                                        />
                                    </a>
                                    <button className="close-btn">
                                        <i className="fas fa-times"/>
                                    </button>
                                </div>
                                <div className="item-content">
                                    <div className="product-rating">
                                        <span className="icon">
                                          <i className="fas fa-star"/>
                                          <i className="fas fa-star"/>
                                          <i className="fas fa-star"/>
                                          <i className="fas fa-star"/>
                                          <i className="fas fa-star"/>
                                        </span>
                                        <span className="rating-number">(6)</span>
                                    </div>
                                    <h3 className="item-title">
                                        <a href="single-product.html">HD CC Camera</a>
                                    </h3>
                                    <div className="item-price">
                                        <span className="currency-symbol">$</span>200.00
                                    </div>
                                    <div className="pro-qty item-quantity">
                                        <input
                                            type="number"
                                            className="quantity-input"
                                            defaultValue={100}
                                        />
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="cart-footer">
                        <h3 className="cart-subtotal">
                            <span className="subtotal-title">Subtotal:</span>
                            <span className="subtotal-amount">$610.00</span>
                        </h3>
                        <div className="group-btn">
                            <a href="cart.html" className="axil-btn btn-bg-primary viewcart-btn">
                                View Cart
                            </a>
                            <a
                                href="checkout.html"
                                className="axil-btn btn-bg-secondary checkout-btn"
                            >
                                Checkout
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="offer-popup-modal" id="offer-popup-modal">
                <div className="offer-popup-wrap">
                    <div className="card-body">
                        <button className="popup-close">
                            <i className="fas fa-times"/>
                        </button>
                        <div className="content">
                            <div className="section-title-wrapper">
                                <span className="title-highlighter highlighter-primary"> {" "} <i
                                    className="far fa-shopping-basket"/> Don’t Miss!! </span>
                                <h3 className="title">
                                    Best Sales Offer
                                    <br/> Grab Yours
                                </h3>
                            </div>
                            <div className="poster-countdown countdown"/>
                            <a href="shop.html" className="axil-btn btn-bg-primary">
                                Shop Now <i className="fal fa-long-arrow-right"/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="closeMask"/>
        </>
    );
};

export default Footer;