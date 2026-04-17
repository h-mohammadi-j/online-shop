const dashboard = () => {
    return ( 
      ``

     );
}

let dashSidebar = document.getElementById("dashSidebar");
let addProduct = document.getElementById("addProduct");
let sidebarBtn = document.getElementById("sidebarBtn");
let dashMain = document.getElementById("dashMain");

sidebarBtn.addEventListener("click", () => {
  dashSidebar.classList.toggle("sidebar-active");
  dashMain.classList.toggle("main-blur")
});
 
export default dashboard;