import footer from "./components/footer/footer.js";
import menu from "./components/menu/menu.js";
import products from "./components/products/products.js";

function app() {
    return ( 
        `
        <div class="w-full flex flex-col justify-center ">
            <div>${menu()}</div>
            <div id="products" class="wi-full bg-gray-300 flex justify-center gap-4 flex-wrap "></div>
            <div>${footer()}</div>
            
        </div>
        `
     );
}

 
document.getElementById("root").innerHTML= app()
products()
