import {Header} from "../components/Header.tsx";
import {useEffect, useState} from "react";
import Footer from "../components/Footer.tsx";
import {Dialog} from "primereact/dialog";
import {Button} from "primereact/button";

export const Profile = () => {
    const [orders, setOrders] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const [products, setProducts] = useState([]);
    const [visible, setVisible] = useState(false);
    const [newProduct, setNewProduct] = useState({
        name: "",
        description: "",
        imageUrl: "",
        price: "",
        oldPrice: "",
        discount: ""
    });
    const [updProduct, setUpdProduct] = useState({
        id: null,
        name: "",
        description: "",
        imageUrl: "",
        price: "",
        oldPrice: "",
        discount: ""
    });

    const token = localStorage.getItem("token");

    const [userDetails, setUserDetails] = useState({
        firstName: "",
        lastName: "",
        email: "",
    });
    const [passwordDetails, setPasswordDetails] = useState({
        currentPassword: "",
        newPassword: "",
        confirmNewPassword: "",
    });
    const [success, setSuccess] = useState(null);

    const fetchProducts = async () => {
        try {
            setIsLoading(true);
            const response = await fetch("http://localhost:8080/api/product/all", {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "application/json",
                },
            });

            if (response.ok) {
                const data = await response.json();
                setProducts(data);
            } else {
                throw new Error("Failed to fetch products");
            }
        } catch (err) {
            setError(err.message);
        } finally {
            setIsLoading(false);
        }
    };

    const handleCreateProduct = async (event) => {
        event.preventDefault();

        try {
            const response = await fetch("http://localhost:8080/api/product", {
                method: "POST",
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(newProduct),
            });

            if (response.ok) {
                alert("Product created successfully!");
                fetchProducts();
            } else {
                throw new Error("Failed to create product");
            }
        } catch (err) {
            setError(err.message);
        }
    };

    const handleUpdateProduct = async (event) => {
        event.preventDefault();

        try {
            const response = await fetch(`http://localhost:8080/api/product/${updProduct.id}`, {
                method: "PUT",
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(updProduct),
            });

            if (response.ok) {
                alert("Product updated successfully!");
                setVisible(false);
                fetchProducts();
            } else {
                throw new Error("Failed to update product");
            }
        } catch (err) {
            setError(err.message);
        }
    };


    const handleDeleteProduct = async (id) => {
        try {
            const response = await fetch(`http://localhost:8080/api/product/${id}`, {
                method: "DELETE",
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            if (response.ok) {
                alert("Product deleted successfully!");
                fetchProducts();
            } else {
                throw new Error("Failed to delete product");
            }
        } catch (err) {
            setError(err.message);
        }
    };

    const fetchOrders = async () => {
        try {
            setIsLoading(true);

            const response = await fetch("http://localhost:8080/api/cart/orders", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
            });

            if (response.ok) {
                const data = await response.json();
                setOrders(data);
            } else {
                throw new Error("Failed to fetch orders");
            }
        } catch (err) {
            setError(err.message);
        } finally {
            setIsLoading(false);
        }
    };

    const fetchUserDetails = async () => {
        try {
            const response = await fetch("http://localhost:8080/api/user/me", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
            });

            if (response.ok) {
                const data = await response.json();
                console.log(data.name)
                setUserDetails({
                    firstName: data.name,
                    lastName: data.lastName,
                    email: data.email,
                });
            } else {
                throw new Error("Failed to fetch user details");
            }
        } catch (err) {
            setError(err.message);
        }
    };

    const handleSaveUserDetails = async (event) => {
        event.preventDefault();
        setError(null);
        setSuccess(null);

        try {
            const response = await fetch("http://localhost:8080/api/user/update", {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify(userDetails),
            });

            if (response.ok) {
                setSuccess("Account details updated successfully.");
            } else {
                throw new Error("Failed to update account details.");
            }
        } catch (err) {
            setError(err.message);
        }
    };

    const handleChangePassword = async (event) => {
        event.preventDefault();
        setError(null);
        setSuccess(null);

        if (passwordDetails.newPassword !== passwordDetails.confirmNewPassword) {
            setError("New passwords do not match.");
            return;
        }

        try {
            const response = await fetch("http://localhost:8080/api/user/change-password", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify({
                    currentPassword: passwordDetails.currentPassword,
                    newPassword: passwordDetails.newPassword,
                }),
            });

            if (response.ok) {
                setSuccess("Password changed successfully.");
                setPasswordDetails({
                    currentPassword: "",
                    newPassword: "",
                    confirmNewPassword: "",
                });
            } else {
                throw new Error("Failed to change password.");
            }
        } catch (err) {
            setError(err.message);
        }
    };

    const handleLogout = () => {
        localStorage.removeItem("token");
        window.location.href = "/";
    };

    useEffect(() => {
        fetchProducts();
        fetchOrders();
        fetchUserDetails();
    }, []);

    return (
        <>
            <Header />
            <main className="main-wrapper">
                <div className="axil-dashboard-area axil-section-gap">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-3 col-md-4">
                                <aside className="axil-dashboard-aside">
                                    <nav className="axil-dashboard-nav">
                                        <div className="nav nav-tabs" role="tablist">
                                            <a className="nav-item nav-link active" data-bs-toggle="tab" href="#nav-account">
                                                <i className="fas fa-user" /> Account Details
                                            </a>
                                            <a className="nav-item nav-link" data-bs-toggle="tab" href="#nav-orders">
                                                <i className="fas fa-shopping-basket" />Orders
                                            </a>
                                            <a className="nav-item nav-link" data-bs-toggle="tab" href="#nav-manage-products">
                                                <i className="fas fa-boxes" /> Manage Products
                                            </a>
                                            <a className="nav-item nav-link" data-bs-toggle="tab" href="#nav-add-products">
                                                <i className="fas fa-plus-circle" /> Add Product
                                            </a>
                                            <a className="nav-item nav-link" href="#" onClick={handleLogout}>
                                                <i className="fal fa-sign-out" /> Logout
                                            </a>
                                        </div>
                                    </nav>
                                </aside>
                            </div>
                            <div className="col-xl-9 col-md-8">
                                <div className="tab-content">
                                    <div className="tab-pane fade show active" id="nav-account" role="tabpanel">
                                        <div className="axil-dashboard-account">
                                            <form className="account-details-form" onSubmit={handleSaveUserDetails}>
                                                <div className="row">
                                                    <div className="col-lg-6">
                                                        <div className="form-group">
                                                            <label>First Name</label>
                                                            <input
                                                                type="text"
                                                                className="form-control"
                                                                value={userDetails.firstName}
                                                                onChange={(e) =>
                                                                    setUserDetails({
                                                                        ...userDetails,
                                                                        firstName: e.target.value,
                                                                    })
                                                                }
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-6">
                                                        <div className="form-group">
                                                            <label>Last Name</label>
                                                            <input
                                                                type="text"
                                                                className="form-control"
                                                                value={userDetails.lastName}
                                                                onChange={(e) =>
                                                                    setUserDetails({
                                                                        ...userDetails,
                                                                        lastName: e.target.value,
                                                                    })
                                                                }
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-12">
                                                        <div className="form-group">
                                                            <label>Email</label>
                                                            <input
                                                                type="email"
                                                                className="form-control"
                                                                value={userDetails.email}
                                                                readOnly
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="col-12">
                                                        <div className="form-group mb--0">
                                                            <button type="submit" className="axil-btn">
                                                                Save Changes
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </form>
                                            <form className="account-details-form mt--40" onSubmit={handleChangePassword}>
                                                <h5 className="title">Password Change</h5>
                                                <div className="form-group">
                                                    <label>Current Password</label>
                                                    <input
                                                        type="password"
                                                        className="form-control"
                                                        value={passwordDetails.currentPassword}
                                                        onChange={(e) =>
                                                            setPasswordDetails({
                                                                ...passwordDetails,
                                                                currentPassword: e.target.value,
                                                            })
                                                        }
                                                    />
                                                </div>
                                                <div className="form-group">
                                                    <label>New Password</label>
                                                    <input
                                                        type="password"
                                                        className="form-control"
                                                        value={passwordDetails.newPassword}
                                                        onChange={(e) =>
                                                            setPasswordDetails({
                                                                ...passwordDetails,
                                                                newPassword: e.target.value,
                                                            })
                                                        }
                                                    />
                                                </div>
                                                <div className="form-group">
                                                    <label>Confirm New Password</label>
                                                    <input
                                                        type="password"
                                                        className="form-control"
                                                        value={passwordDetails.confirmNewPassword}
                                                        onChange={(e) =>
                                                            setPasswordDetails({
                                                                ...passwordDetails,
                                                                confirmNewPassword: e.target.value,
                                                            })
                                                        }
                                                    />
                                                </div>
                                                <div className="form-group mb--0">
                                                    <button type="submit" className="axil-btn">
                                                        Change Password
                                                    </button>
                                                </div>
                                            </form>
                                            {error && <p className="text-danger mt--20">{error}</p>}
                                            {success && <p className="text-success mt--20">{success}</p>}
                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="nav-orders" role="tabpanel">
                                        <div className="axil-dashboard-order">
                                            {isLoading ? (
                                                <p>Loading orders...</p>
                                            ) : error ? (
                                                <p>Error: {error}</p>
                                            ) : orders.length === 0 ? (
                                                <p>No orders found.</p>
                                            ) : (
                                                <div className="table-responsive">
                                                    <table className="table">
                                                        <thead>
                                                        <tr>
                                                            <th>Order ID</th>
                                                            <th>Date</th>
                                                            <th>Total</th>
                                                        </tr>
                                                        </thead>
                                                        <tbody>
                                                        {orders.map(order => (
                                                            <tr key={order.id}>
                                                                <td>#{order.id}</td>
                                                                <td>{order.createdAt}</td>
                                                                <td>
                                                                    ${order.cartItems.reduce(
                                                                    (sum, item) => sum + item.quantity * item.product.price,
                                                                    0
                                                                ).toFixed(2)}
                                                                </td>
                                                            </tr>
                                                        ))}
                                                        </tbody>
                                                    </table>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="nav-manage-products" role="tabpanel">
                                        <div className="axil-dashboard-order">
                                            {isLoading ? (
                                                <p>Loading products...</p>
                                            ) : error ? (
                                                <p>Error: {error}</p>
                                            ) : products.length === 0 ? (
                                                <p>No products found.</p>
                                            ) : (
                                                <div className="table-responsive">
                                                    <table className="table">
                                                        <thead>
                                                        <tr>
                                                            <th>Name</th>
                                                            <th>Description</th>
                                                            <th>Price</th>
                                                            <th>Actions</th>
                                                        </tr>
                                                        </thead>
                                                        <tbody>
                                                        {products.map(product => (
                                                            <tr key={product.id}>
                                                                <td>{product.name}</td>
                                                                <td>{product.description}</td>
                                                                <td>${product.price.toFixed(2)}</td>
                                                                <td>
                                                                    <Button
                                                                        onClick={() => {
                                                                            setUpdProduct({
                                                                                id: product.id,
                                                                                name: product.name,
                                                                                description: product.description,
                                                                                imageUrl: product.imageUrl,
                                                                                price: product.price,
                                                                                oldPrice: product.oldPrice || "",
                                                                                discount: product.discount || ""
                                                                            });
                                                                            setVisible(true);
                                                                        }}
                                                                        >
                                                                        Edit
                                                                    </Button>
                                                                    <Button severity="danger"
                                                                        onClick={
                                                                        () => handleDeleteProduct(product.id)}>Delete
                                                                    </Button>
                                                                </td>
                                                            </tr>
                                                        ))}
                                                        </tbody>
                                                    </table>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="nav-add-products" role="tabpanel">
                                        <div className="axil-dashboard-account">
                                            <form onSubmit={handleCreateProduct}>
                                                <div className="form-group">
                                                    <label>Name</label>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        value={newProduct.name}
                                                        onChange={(e) =>
                                                            setNewProduct({...newProduct, name: e.target.value})
                                                        }
                                                        required
                                                    />
                                                </div>
                                                <div className="form-group">
                                                    <label>Description</label>
                                                    <textarea
                                                        className="form-control"
                                                        value={newProduct.description}
                                                        onChange={(e) =>
                                                            setNewProduct({...newProduct, description: e.target.value})
                                                        }
                                                        required
                                                    />
                                                </div>
                                                <div className="form-group">
                                                    <label>Image URL</label>
                                                    <input
                                                        type="url"
                                                        className="form-control"
                                                        value={newProduct.imageUrl}
                                                        onChange={(e) =>
                                                            setNewProduct({...newProduct, imageUrl: e.target.value})
                                                        }
                                                        required
                                                    />
                                                </div>
                                                <div className="form-group">
                                                    <label>Price</label>
                                                    <input
                                                        type="number"
                                                        className="form-control"
                                                        value={newProduct.price}
                                                        onChange={(e) =>
                                                            setNewProduct({...newProduct, price: e.target.value})
                                                        }
                                                        required
                                                    />
                                                </div>
                                                <button type="submit" className="axil-btn">Add Product</button>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer
                isModalOpen={false}
                isModalCart={false}
            />
            <Dialog header="Header" visible={visible} onHide={() => {if (!visible) return; setVisible(false); }}  style={{ width: '60vw' }} breakpoints={{ '960px': '75vw', '641px': '100vw' }}>
                <br />
                <form onSubmit={handleUpdateProduct}>
                    <div className="form-group">
                        <label>Name</label>
                        <input
                            type="text"
                            className="form-control"
                            value={updProduct.name}
                            onChange={(e) =>
                                setUpdProduct({...updProduct, name: e.target.value})
                            }
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Description</label>
                        <textarea
                            className="form-control"
                            value={updProduct.description}
                            onChange={(e) =>
                                setUpdProduct({...updProduct, description: e.target.value})
                            }
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Image URL</label>
                        <input
                            type="url"
                            className="form-control"
                            value={updProduct.imageUrl}
                            onChange={(e) =>
                                setUpdProduct({...updProduct, imageUrl: e.target.value})
                            }
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Price</label>
                        <input
                            type="number"
                            className="form-control"
                            value={updProduct.price}
                            onChange={(e) =>
                                setUpdProduct({...updProduct, price: e.target.value})
                            }
                            required
                        />
                    </div>
                    <button type="submit" className="axil-btn">Update Product</button>
                </form>
            </Dialog>
        </>
    );
};