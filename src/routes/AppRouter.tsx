import { Navigate, Route, BrowserRouter, Routes, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Home } from "../pages/Home.tsx";
import {Login} from "../pages/Login.tsx";
import {Register} from "../pages/Register.tsx";
import {Profile} from "../pages/Profile.tsx";
import {Shop} from "../pages/Shop.tsx";
import {Checkout} from "../pages/Checkout.tsx";
import {Cart} from "../pages/Cart.tsx";
import {Product} from "../pages/Product.tsx";
import PrivateRoute from "./PrivateRoute.tsx";
import {About} from "../pages/About.tsx";

const BodyClassController = () => {
    const location = useLocation();

    useEffect(() => {
        if (location.pathname === '/') {
            document.body.className = 'sticky-header newsletter-popup-modal';
        } else {
            document.body.className = 'sticky-header';
        }
        return () => {
            document.body.className = '';
        };
    }, [location.pathname]);

    return null;
};

const AppRouter = () => {
    return (
        <BrowserRouter>
            <BodyClassController/>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/about" element={<About />} />
                <Route path="/profile" element={<PrivateRoute><Profile /></PrivateRoute>} />
                <Route path="/product" element={<Product />} />
                <Route path="/shop" element={<Shop />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/cart/checkout" element={<PrivateRoute><Checkout /></PrivateRoute>} />
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
        </BrowserRouter>
    );
};

export default AppRouter;