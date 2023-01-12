import Navigo from "navigo";
const router = new Navigo('/', { hash: true, linksSelector: "a" });
const render = function(content, location){
    location.innerHTML = content();
}
export {render, router};