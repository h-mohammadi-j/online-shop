// let dashSidebar = document.getElementById("dashSidebar");
// let addProduct = document.getElementById("addProduct");
// let sidebarBtn = document.getElementById("sidebarBtn");
// let humburgerBtn = document.getElementById("humburgerBtn");
// let dashMain = document.getElementById("dashMain");
// let profile = document.getElementById("profile");
// let h1 = document.querySelector("h1 span");
// let lists = document.querySelectorAll("ul li a span");

// profile.addEventListener("click", ()=> {
//     document.getElementById("setting").classList.toggle("drop")
//     document.getElementById("logOut").classList.toggle("drop")
// })

// sidebarBtn.addEventListener("click", () => {
//   dashSidebar.classList.toggle("sidebar-active");
//   dashMain.classList.toggle("main-blur");
// });

// humburgerBtn.addEventListener("click", () => {
//   humburgerBtn.classList.toggle("burgerBtn-rotate");
//   h1.classList.toggle("li-content-hide");
//   dashSidebar.classList.toggle("mini-sidebar");

//   lists.forEach((li) => {
//     li.classList.toggle("li-content-hide");
//   });
// });

let dashSidebar = document.getElementById("dashSidebar");
let addProduct = document.getElementById("addProduct");
let sidebarBtn = document.getElementById("sidebarBtn");
let humburgerBtn = document.getElementById("humburgerBtn");
let dashMain = document.getElementById("dashMain");
let profile = document.getElementById("profile");
let addProductForm = document.getElementById("addProductForm");
let cancelBtn = document.getElementById("cancelBtn");
let h1 = document.querySelector("h1 span");
let lists = document.querySelectorAll("ul li a span");

profile.addEventListener("click", () => {
  document.getElementById("setting").classList.toggle("drop");
  document.getElementById("logOut").classList.toggle("drop");
});

sidebarBtn.addEventListener("click", () => {
  dashSidebar.classList.toggle("sidebar-active");
  dashMain.classList.toggle("main-blur");
});

humburgerBtn.addEventListener("click", () => {
  humburgerBtn.classList.toggle("burgerBtn-rotate");
  h1.classList.toggle("li-content-hide");
  dashSidebar.classList.toggle("mini-sidebar");

  lists.forEach((li) => {
    li.classList.toggle("li-content-hide");
  });
});

// input values

let category = document.getElementById("category"),
  title = document.getElementById("title"),
  description = document.getElementById("description"),
  price = document.getElementById("price"),
  image = document.getElementById("addImage"),
  stock = document.getElementById("stock"),
  discount = document.getElementById("discount"),
  createdAt = document.getElementById("createdAt"),
  rating = document.getElementById("rating");

let productManager = (method, url, data) => {
  fetch("http://localhost:3000/products", {
    method: method,
    headers: data ? { "Conten-Type": "application/json" } : {},
    body: JSON.stringify(data),
  }).then((res) => res.json());
};

let addForm = document.getElementById("addForm");
addForm.addEventListener("submit", (e) => {
     e.preventDefault();
  let data = {
    title: title.value,
    category: category.value,
    image: image.value,
    description: description.value,
    price: price.value,
    rating: rating.value,
    stock: stock.value,
    discount: discount.value,
    createdAt: createdAt.value,
  };
    fetch("http://localhost:3000/products",{
        method: "POST",
        headers:{"Content-Type": "application/json"},
        body: JSON.stringify(data)
    }).then(res => res.json()).then(data => console.log(data))
})


addProduct.addEventListener("click", () => {
  addProductForm.classList.add("addProductForm-active");
});

cancelBtn.addEventListener("click", () => {
  addProductForm.classList.remove("addProductForm-active");
});







