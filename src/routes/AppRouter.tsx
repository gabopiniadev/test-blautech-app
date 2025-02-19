import { Navigate, Route, BrowserRouter, Routes, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Home } from "../pages/Home.tsx";

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
                {/* <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route path="/profile" element={<ProfilePage />} />
                <Route path="/products" element={<ProductCatalog />} />
                <Route path="/cart" element={<ShoppingCart />} /> */}
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
        </BrowserRouter>
    );
};

export default AppRouter;