import footer from "./components/footer/footer.js";
import menu from "./components/menu/menu.js";
import products from "./components/products/products.js";

function app() {
    return ( 
        `
        <div class="w-full flex flex-col justify-center ">
            <div>${menu()}</div>
            <div id="products" class="wi-full flex justify-center gap-8 flex-wrap py-8 "></div>
            <div>${footer()}</div>
            
        </div>
        `
     );
}

 
document.getElementById("root").innerHTML= app()
products()
