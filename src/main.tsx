import { StrictMode, useEffect } from 'react';
import { createRoot } from 'react-dom/client';

// Language Project
import '../src/utils/i18n.ts';

// Router App
import AppRouter from "./routes/AppRouter.tsx";

// CSS React Prime
import "primereact/resources/themes/lara-light-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";

// CSS Theme
import '../src/assets/css/vendor/bootstrap.min.css';
import '../src/assets/css/vendor/base.css';
import '../src/assets/css/vendor/font-awesome.css';
import '../src/assets/css/vendor/flaticon/flaticon.css';
import '../src/assets/css/vendor/slick.css';
import '../src/assets/css/vendor/slick-theme.css';
import '../src/assets/css/vendor/jquery-ui.min.css';
import '../src/assets/css/vendor/sal.css';
import '../src/assets/css/vendor/magnific-popup.css';
import '../src/assets/css/style.min.css';

const useLoadScripts = () => {
    useEffect(() => {
        const loadScript = (src: string): Promise<void> => {
            return new Promise((resolve, reject) => {
                const script = document.createElement("script");
                script.src = src;
                script.async = true;
                script.onload = () => resolve();
                script.onerror = () => reject(new Error(`Error al cargar el script: ${src}`));
                document.body.appendChild(script);
            });
        };

        const loadAllScripts = async () => {
            try {
                await loadScript("/src/assets/js/vendor/modernizr.min.js");
                await loadScript("/src/assets/js/vendor/jquery.js");
                await loadScript("/src/assets/js/vendor/popper.min.js");
                await loadScript("/src/assets/js/vendor/bootstrap.min.js");
                await loadScript("/src/assets/js/vendor/slick.min.js");
                await loadScript("/src/assets/js/vendor/js.cookie.js");
                await loadScript("/src/assets/js/vendor/jquery-ui.min.js");
                await loadScript("/src/assets/js/vendor/jquery.ui.touch-punch.min.js");
                await loadScript("/src/assets/js/vendor/jquery.countdown.min.js");
                await loadScript("/src/assets/js/vendor/sal.js");
                await loadScript("/src/assets/js/vendor/jquery.magnific-popup.min.js");
                await loadScript("/src/assets/js/vendor/imagesloaded.pkgd.min.js");
                await loadScript("/src/assets/js/vendor/isotope.pkgd.min.js");
                await loadScript("/src/assets/js/vendor/counterup.js");
                await loadScript("/src/assets/js/vendor/waypoints.min.js");
                await loadScript("/src/assets/js/main.js");
                console.log("Todos los scripts cargados correctamente.");
            } catch (error) {
                console.error(error);
            }
        };

        loadAllScripts();

        return () => {
            const vendorScripts = document.querySelectorAll("script[src*='/src/assets/js/vendor/']");
            vendorScripts.forEach(script => script.remove());
        };
    }, []);
};


const App = () => {
    useLoadScripts();
    return <AppRouter />;
};

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <App />
    </StrictMode>,
);