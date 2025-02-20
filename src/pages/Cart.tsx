import { Header } from "../components/Header";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";

export function Cart() {
    const [cart, setCart] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const [isOpen, setIsOpen] = useState(false);
    const token = localStorage.getItem("token");

    const fetchCart = async () => {
        try {
            setIsLoading(true);
            const response = await fetch("http://localhost:8080/api/cart", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
            });

            if (response.ok) {
                const data = await response.json();
                setCart(data);
            } else {
                throw new Error("Failed to fetch cart");
            }
        } catch (err) {
            setError(err.message);
        } finally {
            setIsLoading(false);
        }
    };

    const handleRemoveProduct = async (productId) => {
        try {
            const response = await fetch(
                `http://localhost:8080/api/cart/remove?productId=${productId}`,
                {
                    method: "DELETE",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            if (response.ok) {
                setCart({
                    ...cart,
                    cartItems: cart.cartItems.filter((item) => item.product.id !== productId),
                });
            } else {
                throw new Error("Failed to remove product from cart");
            }
        } catch (err) {
            alert(err.message);
        }
    };

    const handleCheckout = async () => {
        try {
            const response = await fetch("http://localhost:8080/api/cart/checkout", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
            });

            if (response.ok) {
                setCart({ ...cart, cartItems: [] });
                alert("Checkout completed successfully!");
            } else {
                throw new Error("Failed to complete checkout");
            }
        } catch (err) {
            alert(err.message);
        }
    };

    useEffect(() => {
        fetchCart();
    }, []);

    if (isLoading) return <p>Loading your cart...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <>
            <a href="#top" className="back-to-top" id="backto-top">
                <i className="fal fa-arrow-up" />
            </a>
            <Header />
            <main className="main-wrapper">
                <div className="axil-product-cart-area axil-section-gap">
                    <div className="container">
                        <div className="axil-product-cart-wrap">
                            <div className="product-table-heading">
                                <h4 className="title">Your Cart</h4>
                                <button className="cart-clear" onClick={handleCheckout}>
                                    Clear & Checkout
                                </button>
                            </div>
                            <div className="table-responsive">
                                <table className="table axil-product-table axil-cart-table mb--40">
                                    <thead>
                                    <tr>
                                        <th scope="col" className="product-remove" />
                                        <th scope="col" className="product-thumbnail">
                                            Product
                                        </th>
                                        <th scope="col" className="product-title" />
                                        <th scope="col" className="product-price">Price</th>
                                        <th scope="col" className="product-quantity">Quantity</th>
                                        <th scope="col" className="product-subtotal">Subtotal</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {cart.cartItems.map((item) => (
                                        <tr key={item.id}>
                                            <td className="product-remove">
                                                <button
                                                    className="remove-wishlist"
                                                    onClick={() => handleRemoveProduct(item.product.id)}
                                                >
                                                    <i className="fal fa-times" />
                                                </button>
                                            </td>
                                            <td className="product-thumbnail">
                                                <img
                                                    src={item.product.imageUrl}
                                                    alt={item.product.name}
                                                />
                                            </td>
                                            <td className="product-title">
                                                {item.product.name}
                                            </td>
                                            <td className="product-price">
                                                ${item.product.price.toFixed(2)}
                                            </td>
                                            <td className="product-quantity">
                                                {item.quantity}
                                            </td>
                                            <td className="product-subtotal">
                                                ${(item.product.price * item.quantity).toFixed(2)}
                                            </td>
                                        </tr>
                                    ))}
                                    </tbody>
                                </table>
                            </div>
                            <div className="cart-update-btn-area">
                                <button
                                    className="axil-btn btn-outline"
                                    onClick={() => fetchCart()}
                                >
                                    Update Cart
                                </button>
                            </div>
                            <div className="row">
                                <div className="col-xl-5 col-lg-7 offset-xl-7 offset-lg-5">
                                    <div className="axil-order-summery mt--80">
                                        <h5 className="title mb--20">Order Summary</h5>
                                        <div className="summery-table-wrap">
                                            <table className="table summery-table">
                                                <tbody>
                                                <tr className="order-subtotal">
                                                    <td>Subtotal</td>
                                                    <td>
                                                        $
                                                        {cart.cartItems
                                                            .reduce(
                                                                (total, item) =>
                                                                    total + item.product.price * item.quantity,
                                                                0
                                                            )
                                                            .toFixed(2)}
                                                    </td>
                                                </tr>
                                                <tr className="order-total">
                                                    <td>Total</td>
                                                    <td className="order-total-amount">
                                                        $
                                                        {cart.cartItems
                                                            .reduce(
                                                                (total, item) =>
                                                                    total + item.product.price * item.quantity,
                                                                0
                                                            )
                                                            .toFixed(2)}
                                                    </td>
                                                </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                        <button
                                            className="axil-btn btn-bg-primary checkout-btn"
                                            onClick={handleCheckout}
                                        >
                                            Process to Checkout
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer isModalOpen={isOpen}/>
        </>
    );
}