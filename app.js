import menu from "./components/menu/menu.js"
function app() {
    return ( 

        `
        ${menu()}
        `
     );
}

 
document.getElementById("root").innerHTML= app()
