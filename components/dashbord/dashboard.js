// Main selectors
let dashSidebar = document.getElementById("dashSidebar");
let addProduct = document.getElementById("addProduct");
let sidebarBtn = document.getElementById("sidebarBtn");
let humburgerBtn = document.getElementById("humburgerBtn");
let dashMain = document.getElementById("dashMain");
let profile = document.getElementById("profile");
let addProductForm = document.getElementById("addProductForm");
let cancelBtn = document.getElementById("cancelBtn");
let totalProducts = document.getElementById("totalProducts");
let h1 = document.querySelector("h1 span");
let lists = document.querySelectorAll("ul li a span");

// filter Selectors
let SearchProduct = document.getElementById("SearchProduct");
let categoryDash = document.getElementById("categoryDash");

// Add product Form selectors
let category = document.getElementById("category"),
  title = document.getElementById("title"),
  description = document.getElementById("description"),
  price = document.getElementById("price"),
  image = document.getElementById("addImage"),
  stock = document.getElementById("stock"),
  status = document.getElementById("status"),
  discount = document.getElementById("discount"),
  createdAt = document.getElementById("createdAt"),
  rating = document.getElementById("rating");

// Edit product Form selectors
let editCategory = document.getElementById("edit-category"),
  editTitle = document.getElementById("edit-title"),
  editDescription = document.getElementById("edit-description"),
  editPrice = document.getElementById("edit-price"),
  editImage = document.getElementById("edit-image"),
  editStock = document.getElementById("edit-stock"),
  editStatus = document.getElementById("edit-status"),
  editDiscount = document.getElementById("edit-discount"),
  editCreatedAt = document.getElementById("edit-createdAt"),
  editQuantity = document.getElementById("edit-quantity"),
  editRating = document.getElementById("edit-rating");

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

// Products table


let productsTable = document.getElementById("products-table");

let productsList = [];

fetch("http://localhost:3000/products")
  .then((res) => res.json())
  .then((data) => {
    productsList = data.products || data;
    renderTable();
  });

let renderTable = (data = productsList) => {
  productsTable.innerHTML = "";
  data.forEach((product) => {
    productsTable.innerHTML += `
      <tr data-id="${product.id}"  class="product-row border cursor-grab border-amber-800 text-center bg-amber-50">
        <td class="px-1 border-gray-300 border-r-2 py-4 whitespace-nowrap text-sm font-medium text-gray-900">${product.title}</td>
        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">${product.price} $</td>
        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">${product.quantity}</td>
        <td class="py-2.5 text-center font-bold flex items-center justify-center">

          <span class="flex items-center gap-2 justify-center ${product.stock == 0 ? "bg-red-600" : "bg-green-600"} w-fit py-1.5 px-2.5 min-w-[120px] rounded-full text-white shadow-[0_0_3px_rgba(0,0,0,0.5)_inset] hidden lg:block">${product.stock == 0 ? "Out of Stock" : "Stock"}</span>

            <span id="stock" class="text-2xl  lg:hidden flex items-center gap-2 justify-center ${product.stock == 0 ? "bg-red-600" : "bg-green-600"} py-1.5 px-2.5 size-10 rounded-full text-white shadow-[0_0_3px_rgba(0,0,0,0.5)_inset]">
                ${product.stock == 0 ? '<i class="fa-solid fa-exclamation"></i>' : '<i class="fa-solid fa-check"></i>'}
            </span>
        </td>

        <td id="status" class="py-2.5 text-center font-bold ${product.stock == 0 ? "text-red-600" : "text-green-600"}">
            ${product.stock == 0 ? "Inactive" : "Active"}
        </td>
                
        <td class="py-2.5 text-center font-bold flex items-center justify-center gap-4">
           
            
            <button id="edit" onclick="openEditForm('${product.id}')" class="py-2.5 px-2.5 lg:py-1.5 lg:px-4 flex items-center justify-center gap-4 border border-amber-600 rounded-lg bg-gray-400 text-white cursor-pointer">
                <i class="fa-solid fa-pencil"></i>
                <span class="hidden lg:block">Edit</span>
            </button>

            <button id="openAlert" onclick="openAlert('${product.id}')" class="py-2.5 px-2.5 lg:py-1.5 lg:px-4 flex items-center justify-center gap-4 border border-amber-600 rounded-lg bg-red-400 text-white cursor-pointer">
                <i class="fa-regular fa-trash-can"></i>
                <span class="hidden lg:block">Delete</span>
            </button>
        </td>   
    </tr>
      `;
  });

  // product Status logic
  totalAllProducts.innerHTML = data.length;
  let productRow = document.querySelectorAll(".product-row");

  productRow.forEach((row) => {
    row.addEventListener("click", () => {
      productRow.forEach((item) => {
        item.classList.remove("bg-amber-300");
      });
      row.classList.add("bg-amber-300");
      let activeProduct = document.getElementById("activeProducts");
      let outOfStock = document.getElementById("outOfStock");
      let id = row.dataset.id;
      let product = data.find((item) => item.id == id);
      totalProducts.innerHTML = product.quantity;
      activeProduct.innerHTML =  Number(product.stock) <= 0 ? (activeProduct.innerHTML = Number("0")) :  product.stock;
      outOfStock.innerHTML = Number(product.quantity) - Number(product.stock);
      
    });
  });
};

renderTable();

// Product selection

let alertPopup = document.getElementById("alertPopup");

function cancelDelete() {
  document.getElementById("alertPopup").classList.add("hidden");
  console.log("close");
}

function closeEditForm() {
  document.getElementById("editProductForm").classList.add("hidden");
}

// Delete product
let deletedId = null;
function openAlert(id) {
  deletedId = id;
  document.getElementById("alertPopup").classList.remove("hidden");
  console.log("open");
}

let deleteBtn = document.getElementById("deleteBtn");

deleteBtn.addEventListener("click", () => {
  fetch(`http://localhost:3000/products/${deletedId}`, {
    method: "DELETE",
  })
    .then((res) => res.json())
    .then((data) => {
      productsList = data.products || data;

      productsList = productsList.filter((item) => item.id != deletedId);
      renderTable();
      console.log("Delete");
    });

  document.getElementById("alertPopup").classList.add("hidden");
});

// Open Edit form

let currentId = null;
function openEditForm(id) {
  currentId = id;
  let product = productsList.find((item) => item.id == id);
  editCategory.value = product.category;
  editCreatedAt.value = product.createdAt;
  editDescription.value = product.description;
  editDiscount.value = product.discount;
  editPrice.value = product.price;
  editQuantity.value = product.quantity;
  editRating.value = product.rating;
  editStock.value = product.stock;
  editTitle.value = product.title;
  document.getElementById("editProductForm").classList.remove("hidden");
}

let updateBtn = document.getElementById("updateBtn");

updateBtn.addEventListener("click", async () => {
  let update = {
    title: editTitle.value,
    category: editCategory.value,
    description: editDescription.value,
    price: editPrice.value,
    rating: editRating.value,
    stock: editStock.value,
    discount: editDiscount.value,
    createdAt: editCreatedAt.value,
    quantity: editQuantity.value,
  };

  let response = await fetch(`http://localhost:3000/products/${currentId}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(update),
  });

  if (!response.ok) return alert("Fetch Api error");

  productsList = productsList.map((item) =>
    item.id == currentId ? { ...item, ...update } : item,
  );

  renderTable();
  document.getElementById("editProductForm").classList.add("hidden");
  console.log("Update");
});

// Add new product
let addForm = document.getElementById("addForm");
addForm.addEventListener("submit", (e) => {
  e.preventDefault();

  let data = {
    title: title.value,
    category: category.value,
    description: description.value,
    price: price.value,
    rating: rating.value,
    stock: stock.value,
    discount: discount.value,
    createdAt: createdAt.value,
    quantity: quantity.value,
  };

  fetch("http://localhost:3000/products", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((res) => res.json())

    .catch((error) => {
      console.log(error);
    });

  renderTable();
});

addProduct.addEventListener("click", () => {
  addProductForm.classList.add("addProductForm-active");
});

cancelBtn.addEventListener("click", () => {
  addProductForm.classList.remove("addProductForm-active");
});


// Filter products in Dashboard

function applyFilters() {
  let searchValue = SearchProduct.value.toLowerCase();
  let selectedCategory = categoryDash.value;

  let filtered = productsList.filter((product) => {
    let matchSearch = product.title.toLowerCase().includes(searchValue);
    let matchCategory =
      selectedCategory === "all" || product.category === selectedCategory;

    return matchSearch && matchCategory;
  });

  renderTable(filtered);
}

SearchProduct.addEventListener("input", applyFilters);

categoryDash.addEventListener("change", applyFilters);
