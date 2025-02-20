export function ResetPassword() {
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
                        <a href="forgot-password.html" className="back-btn">
                            <i className="far fa-angle-left" />
                        </a>
                    </div>
                    <div className="col-xl-6 col-lg-4 col-sm-6">
                        <div className="singin-header-btn">
                            <p>
                                Already a member?{" "}
                                <a href="sign-in.html" className="sign-in-btn">
                                    Sign In
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-xl-4 col-lg-6">
                    <div className="axil-signin-banner bg_image bg_image--10">
                        <h2 className="title">We Offer the Best Products</h2>
                    </div>
                </div>
                <div className="col-lg-6 offset-xl-2">
                    <div className="axil-signin-form-wrap">
                        <div className="axil-signin-form">
                            <h3 className="title mb--35">Reset Password</h3>
                            <form className="singin-form">
                                <div className="form-group">
                                    <label>New password</label>
                                    <input
                                        type="password"
                                        className="form-control"
                                        name="password1"
                                        defaultValue={123456789}
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Confirm password</label>
                                    <input
                                        type="password"
                                        className="form-control"
                                        name="password2"
                                        defaultValue={123456789}
                                    />
                                </div>
                                <div className="form-group">
                                    <button
                                        type="submit"
                                        className="axil-btn btn-bg-primary submit-btn"
                                    >
                                        Resrt Password
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