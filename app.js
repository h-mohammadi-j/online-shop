import filter from "./components/filter/filter.js";
import footer from "./components/footer/footer.js";
import menu from "./components/menu/menu.js";
import products from "./components/products/products.js";

function app() {
  return `
        <div class="w-full flex flex-col justify-center ">

            <div class="w-full">${menu()}</div>
            <div class="w-full sticky top-0 shadow-[0_0_10px_rgba(0,0,0,0.5)]">${filter()}</div>
            <div id="products" class="w-full p-8 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6"></div>
            <div>${footer()}</div>
            
        </div>
        `;
}

document.getElementById("root").innerHTML = app();
products();
let nav = document.getElementById("nav");
let humburger = document.getElementById("humburger");

humburger.addEventListener("click", () => {
    humburger.classList.toggle("active-burger")
    nav.classList.toggle("navActive")

});

