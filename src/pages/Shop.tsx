import Footer from "../components/Footer.tsx";
import React, { useState, useEffect } from "react";
import { Header } from "../components/Header.tsx";

interface ProductDTO {
    id: number;
    name: string;
    description: string;
    imageUrl: string;
    price: number;
    oldPrice?: number;
    discount?: string;
}

export function Shop() {
    const [products, setProducts] = useState<ProductDTO[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);
    const [isOpenModal, setIsOpenModal] = useState(false);
    const [userId] = useState(1);
    const [message, setMessage] = useState<string | null>(null);

    const fetchProducts = async () => {
        try {
            const response = await fetch("http://localhost:8080/api/products/all");
            if (response.ok) {
                const data = await response.json();
                setProducts(data);
            } else {
                console.error("Error al obtener los productos", response.statusText);
                setIsError(true);
            }
        } catch (error) {
            console.error("Error de red o backend no disponible:", error);
            setIsError(true);
        } finally {
            setIsLoading(false);
        }
    };

    const addToCart = async (productId: number, quantity: number) => {
        try {
            const token = localStorage.getItem("token");

            const response = await fetch(
                `http://localhost:8080/api/cart/add?productId=${productId}&quantity=${quantity}`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${token}`,
                    },
                }
            );

            if (response.ok) {
                const result = await response.text();
                setMessage(result);
            } else {
                console.error(
                    "Error al agregar el producto al carrito",
                    response.statusText
                );
                setMessage("Error adding the product to the cart.");
            }
        } catch (error) {
            console.error("Error de red:", error);
            setMessage("Network error while adding the product.");
        }
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    if (isLoading) {
        return <div>Loading products...</div>;
    }

    if (isError) {
        return <div>Error loading products. Please try again later.</div>;
    }

    return (
        <>
            <Header />
            <main className="main-wrapper">
                <div className="axil-shop-area axil-section-gap bg-color-white">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-9">
                                <div className="row row--15">
                                    {products.map((product) => (
                                        <div className="col-xl-4 col-sm-6" key={product.id}>
                                            <div className="axil-product product-style-one mb--30">
                                                <div className="thumbnail">
                                                    <a href="#">
                                                        <img src={product.imageUrl} alt={product.name} />
                                                    </a>
                                                </div>
                                                <div className="product-content">
                                                    <div className="inner">
                                                        <h5 className="title">
                                                            <a href="#">{product.name}</a>
                                                        </h5>
                                                        <div className="product-price-variant">
                                                            <span className="price current-price">${product.price}</span>
                                                            {product.oldPrice && (
                                                                <span className="price old-price">${product.oldPrice}</span>
                                                            )}
                                                        </div>
                                                    </div>
                                                    <button
                                                        className="axil-btn btn-bg-primary mt--10"
                                                        onClick={() => addToCart(product.id, 1)}
                                                    >
                                                        Add to Cart
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {message && (
                    <div className="alert alert-success">
                        <p>{message}</p>
                    </div>
                )}
            </main>
            <Footer
                isModalOpen={isOpenModal}
                isModalCart={true}
            />
        </>
    );
}