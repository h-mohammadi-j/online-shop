import filter from "./components/filter/filter.js";
import footer from "./components/footer/footer.js";
import menu from "./components/menu/menu.js";
import products from "./components/products/products.js";

function app() {
  // loading();

  return `
    <div class="w-full flex flex-col justify-center ">
    
    <div class="w-full">${menu()}</div>
    <div class="w-full sticky top-0 z-[2] shadow-[0_0_10px_rgba(0,0,0,0.5)]">${filter()}</div>
    
    
    <div id="productsView" class="bg-linear-to-tl from-amber-700 via-amber-600 via-amber-500 to-amber-400 bg-cover bg-no-repeat bg-conic-30w-full p-8 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 z-[1]"></div>
    
    <div>${footer()}</div>
    
    </div>
    `;
}

document.getElementById("root").innerHTML = app();

products();

let nav = document.getElementById("nav");
let humburger = document.getElementById("humburger");

humburger.addEventListener("click", () => {
  humburger.classList.toggle("active-burger");
  nav.classList.toggle("navActive");
});

// let productsView = document.getElementById("productsView");
// console.log(productsView);
// window.addEventListener("load", () => {
//   loadingView.classList.add("loading-hide");
//   console.log("hello");
// });
