import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

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
import '../src/assets/css/vendor//sal.css';
import '../src/assets/css/vendor/magnific-popup.css';
import '../src/assets//css/style.min.css';

// Loading JavaScript Proejct
const loadScript = (src: string) => {
    const script = document.createElement("script");
    script.src = src;
    script.async = true;
    document.body.appendChild(script);
};

loadScript("/src/assets/js/vendor/modernizr.min.js");
loadScript("/src/assets/js/vendor/jquery.js");
loadScript("/src/assets/js/vendor/popper.min.js");
loadScript("/src/assets/js/vendor/bootstrap.min.js");
loadScript("/src/assets/js/vendor/slick.min.js");
loadScript("/src/assets/js/vendor/js.cookie.js");
loadScript("/src/assets/js/vendor/jquery-ui.min.js");
loadScript("/src/assets/js/vendor/jquery.ui.touch-punch.min.js");
loadScript("/src/assets/js/vendor/jquery.countdown.min.js");
loadScript("/src/assets/js/vendor/sal.js");
loadScript("/src/assets/js/vendor/jquery.magnific-popup.min.js");
loadScript("/src/assets/js/vendor/imagesloaded.pkgd.min.js");
loadScript("/src/assets/js/vendor/isotope.pkgd.min.js");
loadScript("/src/assets/js/vendor/counterup.js");
loadScript("/src/assets/js/vendor/waypoints.min.js");
loadScript("/src/assets/js/main.js");

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <AppRouter />
  </StrictMode>,
)
