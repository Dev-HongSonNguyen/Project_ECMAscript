import {render, router} from "./library";
import aboutPage from "./pages/about";
import ContactPage from "./pages/contact";
import homePage from "./pages/home";
import notFound from "./pages/notFound";

const app = document.querySelector("#app");

router.on("/", ()=> render(homePage, app));
router.on("/about", ()=> render(aboutPage, app));
router.on("/contact", ()=> render(ContactPage, app));
router.notFound(()=> render(notFound, app));
router.resolve();
