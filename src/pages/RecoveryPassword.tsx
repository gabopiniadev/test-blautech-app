export function RecoveryPassword() {
    return (
        <div className="axil-signin-area">
            <div className="signin-header">
                <div className="row align-items-center">
                    <div className="col-xl-4 col-sm-6">
                        <a href="index-2.html" className="site-logo">
                            <img src="assets/images/logo/logo.png" alt="logo" />
                        </a>
                    </div>
                    <div className="col-md-2 d-lg-block d-none">
                        <a href="sign-in.html" className="back-btn">
                            <i className="far fa-angle-left" />
                        </a>
                    </div>
                    <div className="col-xl-6 col-lg-4 col-sm-6">
                        <div className="singin-header-btn">
                            <p>Already a member?</p>
                            <a
                                href="sign-in.html"
                                className="sign-up-btn axil-btn btn-bg-secondary"
                            >
                                Sign In
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-xl-4 col-lg-6">
                    <div className="axil-signin-banner bg_image bg_image--10">
                        <h3 className="title">We Offer the Best Products</h3>
                    </div>
                </div>
                <div className="col-lg-6 offset-xl-2">
                    <div className="axil-signin-form-wrap">
                        <div className="axil-signin-form">
                            <h3 className="title">Forgot Password?</h3>
                            <p className="b2 mb--55">
                                Enter the email address you used when you joined and we’ll send
                                you instructions to reset your password.
                            </p>
                            <form className="singin-form">
                                <div className="form-group">
                                    <label>Email</label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        name="email"
                                        defaultValue="annie@example.com"
                                    />
                                </div>
                                <div className="form-group">
                                    <button
                                        type="submit"
                                        className="axil-btn btn-bg-primary submit-btn"
                                    >
                                        Send Reset Instructions
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}