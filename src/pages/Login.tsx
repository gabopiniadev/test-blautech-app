import { useState } from "react";
import { useNavigate } from "react-router-dom";


export const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const navigate = useNavigate();


    const handleLogin = async (e:any) => {
        e.preventDefault();
        try {
            const response = await fetch("http://localhost:8080/api/user/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email, password }),
            });

            if (response.ok) {
                const token = await response.text();
                localStorage.setItem("token", token);
                navigate("/profile");
            } else {
                throw new Error("Invalid email or password");
            }
        } catch (err:any) {
            setError(err.message);
        }
    };


    return (
        <div className="axil-signin-area">
            <div className="signin-header">
                <div className="row align-items-center">
                    <div className="col-sm-4">
                        <a href="/" className="site-logo">
                            <img src="assets/images/logo/logo.png" alt="logo" />
                        </a>
                    </div>
                    <div className="col-sm-8">
                        <div className="singin-header-btn">
                            <p>Not a member?</p>
                            <a
                                href="/sign-up"
                                className="axil-btn btn-bg-secondary sign-up-btn"
                            >
                                Sign Up Now
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-xl-4 col-lg-6">
                    <div className="axil-signin-banner bg_image bg_image--9">
                        <h3 className="title">We Offer the Best Products</h3>
                    </div>
                </div>
                <div className="col-lg-6 offset-xl-2">
                    <div className="axil-signin-form-wrap">
                        <div className="axil-signin-form">
                            <h3 className="title">Sign in to eTrade.</h3>
                            <p className="b2 mb--55">Enter your detail below</p>
                            <form className="singin-form" onSubmit={handleLogin}>
                                <div className="form-group">
                                    <label>Email</label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        name="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Password</label>
                                    <input
                                        type="password"
                                        className="form-control"
                                        name="password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        required
                                    />
                                </div>
                                {error && <p className="text-danger">{error}</p>}
                                <div className="form-group d-flex align-items-center justify-content-between">
                                    <button
                                        type="submit"
                                        className="axil-btn btn-bg-primary submit-btn"
                                    >
                                        Sign In
                                    </button>
                                    <a href="/forgot-password" className="forgot-btn">
                                        Forgot password?
                                    </a>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};