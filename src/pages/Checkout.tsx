import {Header} from "../components/Header.tsx";
import React from "react";

export const Checkout = () => {
    return (
        <>
            <a href="#top" className="back-to-top" id="backto-top">
                <i className="fal fa-arrow-up" />
            </a>
            <Header />
            <main className="main-wrapper">
                <div className="axil-checkout-area axil-section-gap">
                    <div className="container">
                        <form action="#">
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="axil-checkout-notice">
                                        <div className="axil-toggle-box">
                                            <div className="toggle-bar">
                                                <i className="fas fa-user" /> Returning customer?{" "}
                                                <a href="javascript:void(0)" className="toggle-btn">
                                                    Click here to login <i className="fas fa-angle-down" />
                                                </a>
                                            </div>
                                            <div className="axil-checkout-login toggle-open">
                                                <p>If you didn't Logged in, Please Log in first.</p>
                                                <div className="signin-box">
                                                    <div className="form-group">
                                                        <label>Email</label>
                                                        <input
                                                            type="email"
                                                            className="form-control"
                                                            name="email"
                                                        />
                                                    </div>
                                                    <div className="form-group">
                                                        <label>Password</label>
                                                        <input
                                                            type="password"
                                                            className="form-control"
                                                            name="password"
                                                        />
                                                    </div>
                                                    <div className="form-group mb--0">
                                                        <button
                                                            type="submit"
                                                            className="axil-btn btn-bg-primary submit-btn"
                                                        >
                                                            Sign In
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="axil-toggle-box">
                                            <div className="toggle-bar">
                                                <i className="fas fa-pencil" /> Have a coupon?{" "}
                                                <a href="javascript:void(0)" className="toggle-btn">
                                                    Click here to enter your code{" "}
                                                    <i className="fas fa-angle-down" />
                                                </a>
                                            </div>
                                            <div className="axil-checkout-coupon toggle-open">
                                                <p>If you have a coupon code, please apply it below.</p>
                                                <div className="input-group">
                                                    <input placeholder="Enter coupon code" type="text" />
                                                    <div className="apply-btn">
                                                        <button
                                                            type="submit"
                                                            className="axil-btn btn-bg-primary"
                                                        >
                                                            Apply
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="axil-checkout-billing">
                                        <h4 className="title mb--40">Billing details</h4>
                                        <div className="row">
                                            <div className="col-lg-6">
                                                <div className="form-group">
                                                    <label>
                                                        First Name <span>*</span>
                                                    </label>
                                                    <input type="text" id="first-name" placeholder="Adam" />
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="form-group">
                                                    <label>
                                                        Last Name <span>*</span>
                                                    </label>
                                                    <input type="text" id="last-name" placeholder="John" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label>Company Name</label>
                                            <input type="text" id="company-name" />
                                        </div>
                                        <div className="form-group">
                                            <label>
                                                Country/ Region <span>*</span>
                                            </label>
                                            <select id="Region">
                                                <option value={3}>Australia</option>
                                                <option value={4}>England</option>
                                                <option value={6}>New Zealand</option>
                                                <option value={5}>Switzerland</option>
                                                <option value={1}>United Kindom (UK)</option>
                                                <option value={2}>United States (USA)</option>
                                            </select>
                                        </div>
                                        <div className="form-group">
                                            <label>
                                                Street Address <span>*</span>
                                            </label>
                                            <input
                                                type="text"
                                                id="address1"
                                                className="mb--15"
                                                placeholder="House number and street name"
                                            />
                                            <input
                                                type="text"
                                                id="address2"
                                                placeholder="Apartment, suite, unit, etc. (optonal)"
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label>
                                                Town/ City <span>*</span>
                                            </label>
                                            <input type="text" id="town" />
                                        </div>
                                        <div className="form-group">
                                            <label>Country</label>
                                            <input type="text" id="country" />
                                        </div>
                                        <div className="form-group">
                                            <label>
                                                Phone <span>*</span>
                                            </label>
                                            <input type="tel" id="phone" />
                                        </div>
                                        <div className="form-group">
                                            <label>
                                                Email Address <span>*</span>
                                            </label>
                                            <input type="email" id="email" />
                                        </div>
                                        <div className="form-group input-group">
                                            <input type="checkbox" id="checkbox1" name="account-create" />
                                            <label htmlFor="checkbox1">Create an account</label>
                                        </div>
                                        <div className="form-group different-shippng">
                                            <div className="toggle-bar">
                                                <a href="javascript:void(0)" className="toggle-btn">
                                                    <input
                                                        type="checkbox"
                                                        id="checkbox2"
                                                        name="diffrent-ship"
                                                    />
                                                    <label htmlFor="checkbox2">
                                                        Ship to a different address?
                                                    </label>
                                                </a>
                                            </div>
                                            <div className="toggle-open">
                                                <div className="form-group">
                                                    <label>
                                                        Country/ Region <span>*</span>
                                                    </label>
                                                    <select id="Region">
                                                        <option value={3}>Australia</option>
                                                        <option value={4}>England</option>
                                                        <option value={6}>New Zealand</option>
                                                        <option value={5}>Switzerland</option>
                                                        <option value={1}>United Kindom (UK)</option>
                                                        <option value={2}>United States (USA)</option>
                                                    </select>
                                                </div>
                                                <div className="form-group">
                                                    <label>
                                                        Street Address <span>*</span>
                                                    </label>
                                                    <input
                                                        type="text"
                                                        id="address1"
                                                        className="mb--15"
                                                        placeholder="House number and street name"
                                                    />
                                                    <input
                                                        type="text"
                                                        id="address2"
                                                        placeholder="Apartment, suite, unit, etc. (optonal)"
                                                    />
                                                </div>
                                                <div className="form-group">
                                                    <label>
                                                        Town/ City <span>*</span>
                                                    </label>
                                                    <input type="text" id="town" />
                                                </div>
                                                <div className="form-group">
                                                    <label>Country</label>
                                                    <input type="text" id="country" />
                                                </div>
                                                <div className="form-group">
                                                    <label>
                                                        Phone <span>*</span>
                                                    </label>
                                                    <input type="tel" id="phone" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label>Other Notes (optional)</label>
                                            <textarea
                                                id="notes"
                                                rows={2}
                                                placeholder="Notes about your order, e.g. speacial notes for delivery."
                                                defaultValue={""}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="axil-order-summery order-checkout-summery">
                                        <h5 className="title mb--20">Your Order</h5>
                                        <div className="summery-table-wrap">
                                            <table className="table summery-table">
                                                <thead>
                                                <tr>
                                                    <th>Product</th>
                                                    <th>Subtotal</th>
                                                </tr>
                                                </thead>
                                                <tbody>
                                                <tr className="order-product">
                                                    <td>
                                                        Commodo Blown Lamp{" "}
                                                        <span className="quantity">x1</span>
                                                    </td>
                                                    <td>$117.00</td>
                                                </tr>
                                                <tr className="order-product">
                                                    <td>
                                                        Commodo Blown Lamp{" "}
                                                        <span className="quantity">x1</span>
                                                    </td>
                                                    <td>$198.00</td>
                                                </tr>
                                                <tr className="order-subtotal">
                                                    <td>Subtotal</td>
                                                    <td>$117.00</td>
                                                </tr>
                                                <tr className="order-shipping">
                                                    <td colSpan={2}>
                                                        <div className="shipping-amount">
                                                            <span className="title">Shipping Method</span>
                                                            <span className="amount">$35.00</span>
                                                        </div>
                                                        <div className="input-group">
                                                            <input
                                                                type="radio"
                                                                id="radio1"
                                                                name="shipping"
                                                                defaultChecked={false}
                                                            />
                                                            <label htmlFor="radio1">Free Shippping</label>
                                                        </div>
                                                        <div className="input-group">
                                                            <input type="radio" id="radio2" name="shipping" />
                                                            <label htmlFor="radio2">Local</label>
                                                        </div>
                                                        <div className="input-group">
                                                            <input type="radio" id="radio3" name="shipping" />
                                                            <label htmlFor="radio3">Flat rate</label>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr className="order-total">
                                                    <td>Total</td>
                                                    <td className="order-total-amount">$323.00</td>
                                                </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                        <div className="order-payment-method">
                                            <div className="single-payment">
                                                <div className="input-group">
                                                    <input type="radio" id="radio4" name="payment" />
                                                    <label htmlFor="radio4">Direct bank transfer</label>
                                                </div>
                                                <p>
                                                    Make your payment directly into our bank account. Please
                                                    use your Order ID as the payment reference. Your order
                                                    will not be shipped until the funds have cleared in our
                                                    account.
                                                </p>
                                            </div>
                                            <div className="single-payment">
                                                <div className="input-group">
                                                    <input type="radio" id="radio5" name="payment" />
                                                    <label htmlFor="radio5">Cash on delivery</label>
                                                </div>
                                                <p>Pay with cash upon delivery.</p>
                                            </div>
                                            <div className="single-payment">
                                                <div className="input-group justify-content-between align-items-center">
                                                    <input
                                                        type="radio"
                                                        id="radio6"
                                                        name="payment"
                                                        defaultChecked={false}
                                                    />
                                                    <label htmlFor="radio6">Paypal</label>
                                                    <img
                                                        src="assets/images/others/payment.png"
                                                        alt="Paypal payment"
                                                    />
                                                </div>
                                                <p>
                                                    Pay via PayPal; you can pay with your credit card if you
                                                    don’t have a PayPal account.
                                                </p>
                                            </div>
                                        </div>
                                        <button
                                            type="submit"
                                            className="axil-btn btn-bg-primary checkout-btn"
                                        >
                                            Process to Checkout
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </main>
            <div className="service-area">
                <div className="container">
                    <div className="row row-cols-xl-4 row-cols-sm-2 row-cols-1 row--20">
                        <div className="col">
                            <div className="service-box service-style-2">
                                <div className="icon">
                                    <img src="assets/images/icons/service1.png" alt="Service" />
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
                                    <img src="assets/images/icons/service2.png" alt="Service" />
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
                                    <img src="assets/images/icons/service3.png" alt="Service" />
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
                                    <img src="assets/images/icons/service4.png" alt="Service" />
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
            <footer className="axil-footer-area footer-style-2">
                <div className="footer-top separator-top">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3 col-sm-6">
                                <div className="axil-footer-widget">
                                    <h5 className="widget-title">Support</h5>
                                    <div className="inner">
                                        <p>
                                            685 Market Street, <br />
                                            Las Vegas, LA 95820, <br />
                                            United States.
                                        </p>
                                        <ul className="support-list-item">
                                            <li>
                                                <a href="mailto:example@domain.com">
                                                    <i className="fal fa-envelope-open" /> example@domain.com
                                                </a>
                                            </li>
                                            <li>
                                                <a href="tel:(+01)850-315-5862">
                                                    <i className="fal fa-phone-alt" /> (+01) 850-315-5862
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-3 col-sm-6">
                                <div className="axil-footer-widget">
                                    <h5 className="widget-title">Account</h5>
                                    <div className="inner">
                                        <ul>
                                            <li>
                                                <a href="my-account.html">My Account</a>
                                            </li>
                                            <li>
                                                <a href="sign-up.html">Login / Register</a>
                                            </li>
                                            <li>
                                                <a href="cart.html">Cart</a>
                                            </li>
                                            <li>
                                                <a href="wishlist.html">Wishlist</a>
                                            </li>
                                            <li>
                                                <a href="shop.html">Shop</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6">
                                <div className="axil-footer-widget">
                                    <h5 className="widget-title">Quick Link</h5>
                                    <div className="inner">
                                        <ul>
                                            <li>
                                                <a href="privacy-policy.html">Privacy Policy</a>
                                            </li>
                                            <li>
                                                <a href="terms-of-service.html">Terms Of Use</a>
                                            </li>
                                            <li>
                                                <a href="#">FAQ</a>
                                            </li>
                                            <li>
                                                <a href="contact.html">Contact</a>
                                            </li>
                                            <li>
                                                <a href="contact.html">Contact</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6">
                                <div className="axil-footer-widget">
                                    <h5 className="widget-title">Download App</h5>
                                    <div className="inner">
                                        <span>Save $3 With App &amp; New User only</span>
                                        <div className="download-btn-group">
                                            <div className="qr-code">
                                                <img src="assets/images/others/qr.png" alt="Axilthemes" />
                                            </div>
                                            <div className="app-link">
                                                <a href="#">
                                                    <img
                                                        src="assets/images/others/app-store.png"
                                                        alt="App Store"
                                                    />
                                                </a>
                                                <a href="#">
                                                    <img
                                                        src="assets/images/others/play-store.png"
                                                        alt="Play Store"
                                                    />
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
                                    <a href="#">
                                        <i className="fab fa-facebook-f" />
                                    </a>
                                    <a href="#">
                                        <i className="fab fa-instagram" />
                                    </a>
                                    <a href="#">
                                        <i className="fa-brands fa-x-twitter" />
                                    </a>
                                    <a href="#">
                                        <i className="fab fa-linkedin-in" />
                                    </a>
                                    <a href="#">
                                        <i className="fab fa-discord" />
                                    </a>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-12">
                                <div className="copyright-left d-flex flex-wrap justify-content-center">
                                    <ul className="quick-link">
                                        <li>
                                            © 2025. All rights reserved by{" "}
                                            <a target="_blank" href="https://axilthemes.com/">
                                                Axilthemes
                                            </a>
                                            .
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-12">
                                <div className="copyright-right d-flex flex-wrap justify-content-xl-end justify-content-center align-items-center">
                                    <span className="card-text">Accept For</span>
                                    <ul className="payment-icons-bottom quick-link">
                                        <li>
                                            <img
                                                src="assets/images/icons/cart/cart-1.png"
                                                alt="paypal cart"
                                            />
                                        </li>
                                        <li>
                                            <img
                                                src="assets/images/icons/cart/cart-2.png"
                                                alt="paypal cart"
                                            />
                                        </li>
                                        <li>
                                            <img
                                                src="assets/images/icons/cart/cart-5.png"
                                                alt="paypal cart"
                                            />
                                        </li>
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
                                <i className="far fa-times" />
                            </button>
                        </div>
                        <div className="modal-body">
                            <div className="single-product-thumb">
                                <div className="row">
                                    <div className="col-lg-7 mb--40">
                                        <div className="row">
                                            <div className="col-lg-10 order-lg-2">
                                                <div className="single-product-thumbnail product-large-thumbnail axil-product thumbnail-badge zoom-gallery">
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
                                                                <i className="far fa-search-plus" />
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
                                                                <i className="far fa-search-plus" />
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
                                                                <i className="far fa-search-plus" />
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
                                                        <i className="fal fa-check" />
                                                        In stock
                                                    </li>
                                                    <li>
                                                        <i className="fal fa-check" />
                                                        Free delivery available
                                                    </li>
                                                    <li>
                                                        <i className="fal fa-check" />
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
                                <span className="color" />
                              </span>
                                                                </li>
                                                                <li className="color-extra-02">
                              <span>
                                <span className="color" />
                              </span>
                                                                </li>
                                                                <li className="color-extra-03">
                              <span>
                                <span className="color" />
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
                                                        <input type="text" defaultValue={1} />
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
                                                                <i className="far fa-heart" />
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
            <div className="header-search-modal" id="header-search-modal">
                <button className="card-close sidebar-close">
                    <i className="fas fa-times" />
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
                                    <i className="far fa-search" />
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
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fal fa-star" />
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
                                            <i className="fal fa-shopping-cart" />
                                        </a>
                                        <a href="wishlist.html" className="cart-btn">
                                            <i className="fal fa-heart" />
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
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fal fa-star" />
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
                                            <i className="fal fa-shopping-cart" />
                                        </a>
                                        <a href="wishlist.html" className="cart-btn">
                                            <i className="fal fa-heart" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="cart-dropdown" id="cart-dropdown">
                <div className="cart-content-wrap">
                    <div className="cart-header">
                        <h2 className="header-title">Cart review</h2>
                        <button className="cart-close sidebar-close">
                            <i className="fas fa-times" />
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
                                        <i className="fas fa-times" />
                                    </button>
                                </div>
                                <div className="item-content">
                                    <div className="product-rating">
                <span className="icon">
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
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
                                        <i className="fas fa-times" />
                                    </button>
                                </div>
                                <div className="item-content">
                                    <div className="product-rating">
                <span className="icon">
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
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
                                        <i className="fas fa-times" />
                                    </button>
                                </div>
                                <div className="item-content">
                                    <div className="product-rating">
                <span className="icon">
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
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
        </>
    );
};