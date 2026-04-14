import filter from "./components/filter/filter.js";
import footer from "./components/footer/footer.js";
import menu from "./components/menu/menu.js";
import products from "./components/products/products.js";

function app() {
  return `
        <div class="w-full flex flex-col justify-center ">
            <div class="w-full">${menu()}</div>
            <div class="w-full sticky top-0 shadow-[0_0_10px_rgba(0,0,0,0.5)]">${filter()}</div>
            <div id="products" class="wi-full  p-8 flex justify-center gap-8 flex-wrap py-8 "></div>
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

