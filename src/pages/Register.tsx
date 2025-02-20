import  { useState } from "react";
import { useNavigate } from "react-router-dom";

export function Register() {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        address: "",
        birthDate: "",
        password: "",
    });

    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch("http://localhost:8080/api/user/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            if (response.status === 201) {
                setSuccess("User registered successfully!");
                setError("");
                setTimeout(() => {
                    navigate("/login");
                }, 2000);
            } else {
                const errorResponse = await response.json();
                setError(errorResponse.message || "Registration failed!");
                setSuccess("");
            }
        } catch (error) {
            setError("An error occurred. Please try again later.");
            setSuccess("");
        }
    };

    return (
        <div className="axil-signin-area">
            <div className="signin-header">
                <div className="row align-items-center">
                    <div className="col-md-6">
                        <a href="/" className="site-logo">
                            <img src="assets/images/logo/logo.png" alt="logo" />
                        </a>
                    </div>
                    <div className="col-md-6">
                        <div className="singin-header-btn">
                            <p>Already a member?</p>
                            <a
                                href="/login"
                                className="axil-btn btn-bg-secondary sign-up-btn"
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
                            <h3 className="title">I'm New Here</h3>
                            <p className="b2 mb--55">Enter your detail below</p>
                            <form className="singin-form" onSubmit={handleSubmit}>
                                <div className="form-group">
                                    <label>First Name</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="firstName"
                                        value={formData.firstName}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Last Name</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="lastName"
                                        value={formData.lastName}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Email</label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Address</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="address"
                                        value={formData.address}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Birth Date</label>
                                    <input
                                        type="date"
                                        className="form-control"
                                        name="birthDate"
                                        value={formData.birthDate}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Password</label>
                                    <input
                                        type="password"
                                        className="form-control"
                                        name="password"
                                        value={formData.password}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                {error && <p className="text-danger">{error}</p>}
                                {success && <p className="text-success">{success}</p>}
                                <div className="form-group">
                                    <button
                                        type="submit"
                                        className="axil-btn btn-bg-primary submit-btn"
                                    >
                                        Create Account
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