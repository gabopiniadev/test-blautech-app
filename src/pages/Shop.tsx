import Footer from "../components/Footer.tsx";
import {useState, useEffect} from "react";
import {Header} from "../components/Header.tsx";

// Dependencias React Prime

import { Paginator } from 'primereact/paginator';


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

    const [first, setFirst] = useState(0);
    const [rows, setRows] = useState(10);

    const onPageChange = (event) => {
        setFirst(event.first);
        setRows(event.rows);
    };

    const fetchProducts = async () => {
        try {
            const response = await fetch("http://localhost:8080/api/product/all");
            if (response.ok) {
                const data = await response.json();
                setProducts(data);
            } else {
                console.error("Error al obtener los productos", response.statusText);
                setProducts([])
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
            <Header/>
            <main className="main-wrapper">
                <div className="axil-shop-area axil-section-gap bg-color-white">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3">
                                <div className="axil-shop-sidebar">
                                    <div className="d-lg-none">
                                        <button className="sidebar-close filter-close-btn"><i
                                            className="fas fa-times"></i></button>
                                    </div>
                                    <div className="toggle-list product-categories active">
                                        <h6 className="title">CATEGORIES</h6>
                                        <div className="shop-submenu">
                                            <ul>
                                                <li className="current-cat"><a href="#">Sun Care</a></li>
                                                <li><a href="#">Night Care</a></li>
                                                <li><a href="#">Treatments</a></li>
                                                <li><a href="#">Moisturizers</a></li>
                                                <li><a href="#">Eye Care</a></li>
                                                <li><a href="#">Masks</a></li>
                                                <li><a href="#">Featured</a></li>
                                                <li><a href="#">On Sale</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="toggle-list product-categories product-gender active">
                                        <h6 className="title">GENDER</h6>
                                        <div className="shop-submenu">
                                            <ul>
                                                <li className="chosen"><a href="#">Men (40)</a></li>
                                                <li><a href="#">Women (56)</a></li>
                                                <li><a href="#">Unisex (18)</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="toggle-list product-color active">
                                        <h6 className="title">COLORS</h6>
                                        <div className="shop-submenu">
                                            <ul>
                                                <li className="chosen"><a href="#" className="color-extra-01"></a></li>
                                                <li><a href="#" className="color-extra-02"></a></li>
                                                <li><a href="#" className="color-extra-03"></a></li>
                                                <li><a href="#" className="color-extra-04"></a></li>
                                                <li><a href="#" className="color-extra-05"></a></li>
                                                <li><a href="#" className="color-extra-06"></a></li>
                                                <li><a href="#" className="color-extra-07"></a></li>
                                                <li><a href="#" className="color-extra-08"></a></li>
                                                <li><a href="#" className="color-extra-09"></a></li>
                                                <li><a href="#" className="color-extra-10"></a></li>
                                                <li><a href="#" className="color-extra-11"></a></li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="toggle-list product-size active">
                                        <h6 className="title">SIZE</h6>
                                        <div className="shop-submenu">
                                            <ul>
                                                <li className="chosen"><a href="#">XS</a></li>
                                                <li><a href="#">S</a></li>
                                                <li><a href="#">M</a></li>
                                                <li><a href="#">L</a></li>
                                                <li><a href="#">XL</a></li>
                                                <li><a href="#">XXL</a></li>
                                                <li><a href="#">3XL</a></li>
                                                <li><a href="#">4XL</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="toggle-list product-price-range active">
                                        <h6 className="title">PRICE</h6>
                                        <div className="shop-submenu">
                                            <ul>
                                                <li className="chosen"><a href="#">30</a></li>
                                                <li><a href="#">5000</a></li>
                                            </ul>
                                            <form action="#" className="mt--25">
                                                <div
                                                    id="slider-range"
                                                    className="ui-slider ui-corner-all ui-slider-horizontal ui-widget ui-widget-content"
                                                >
                                                    <div
                                                        className="ui-slider-range ui-corner-all ui-widget-header"
                                                        style={{ left: '0%', width: '60%' }} // Estilo en formato objeto
                                                    ></div>
                                                    <span
                                                        tabIndex={0}
                                                        className="ui-slider-handle ui-corner-all ui-state-default"
                                                        style={{ left: '0%' }}
                                                    ></span>
                                                    <span
                                                        tabIndex={0}
                                                        className="ui-slider-handle ui-corner-all ui-state-default"
                                                        style={{ left: '60%' }}
                                                    ></span>
                                                </div>
                                                <div className="flex-center mt--20">
                                                    <span className="input-range">Price: </span>
                                                    <input
                                                        type="text"
                                                        id="amount"
                                                        className="amount-range"
                                                        readOnly
                                                    />
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                    <button className="axil-btn btn-bg-primary">All Reset</button>
                                </div>
                            </div>
                            <div className="col-lg-9">
                                <div className="row row--15">
                                    {products.map((product) => (
                                        <div className="col-xl-4 col-sm-6" key={product.id}>
                                            <div className="axil-product product-style-one mb--30">
                                                <div className="thumbnail">
                                                    <a href="#">
                                                        <img src={product.imageUrl} alt={product.name}/>
                                                    </a>
                                                </div>
                                                <div className="product-content">
                                                    <div className="inner">
                                                        <h5 className="title">
                                                            <a href="#">{product.name}</a>
                                                        </h5>
                                                        <div className="product-price-variant">
                                                            <span
                                                                className="price current-price">${product.price}</span>
                                                            {product.oldPrice && (
                                                                <span
                                                                    className="price old-price">${product.oldPrice}</span>
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
                {/*<div className="paginator">
                    <Paginator first={first} rows={rows} totalRecords={120} rowsPerPageOptions={[10, 20, 30]} onPageChange={onPageChange} />
                </div>*/}
                {message && (
                    <div className="alert alert-success">
                        <p>{message}</p>
                    </div>
                )}
            </main>
            <Footer
                isModalOpen={isOpenModal}
                isModalCart={false}
            />
        </>
    );
}