let productsSection = document.getElementById("ProductsSection");
let searchFilter = document.getElementById("searchFilter");
let categoryFilter = document.getElementById("categoryFilter");
let priceFilter = document.getElementById("priceFilter");

let dataList = [];

fetch("http://localhost:3000/products")
  .then((res) => res.json())
  .then((data) => {
    dataList = data.products || data;
    console.log(dataList);

    renderProducts(dataList);
  });

function renderProducts(list) {
  productsSection.innerHTML = "";
  list.forEach((card) => {
    productsSection.innerHTML += `
          <div class="w-full min-h-[450px] bg-white rounded-lg shadow-[0_0_10px_rgba(0,0,0,0.5)] overflow-hidden text-center flex flex-col items-center hover:scale-105 transition-all duration-300">
          <img class="w-full h-[300px] object-cover object-center rounded-sm hover:scale-105 transition-all duration-300" src=${card.image} />
          
          <div class="py-1.5 px-4 flex flex-col items-center gap-1.5">
          <h1 class="p-2.5 font-bold text-xl text-gray-600  ">${card.title}</h1>
          <p class="p-2.5 font-bold h-[100px] text-gray-500 tracking-wider overflow-y-auto text-left">${card.description}</p>
          <p class="p-2.5 font-bold text-xl border-amber-500 border px-6  rounded-lg w-fit hover:bg-amber-500 hover:text-white transition-all duration=300 cursor-pointer mb-4">Price: ${card.price}</p>
          </div>
          </div>
          `;
  });
}


function checkPrice(p) {
  if (priceFilter.value === "low") return p.price <= 80;
  if (priceFilter.value === "med") return p.price > 80 && p.price <= 250;
  if (priceFilter.value === "heigh") return p.price > 250;
  return true;
}
function filterList() {
  let search = searchFilter.value.toLowerCase().trim();
  let category = categoryFilter.value;
  let price = priceFilter.value;

  let result = dataList.filter((item) => {
    let title = (item.title || "").toLowerCase();

    let matchSearch = title.includes(search);
    let matchCategory = category === "all" || item.category === category;
    let matchPrice = checkPrice(item);


    return matchSearch && matchCategory && matchPrice;
  });
  renderProducts(result);
}



searchFilter.addEventListener("input", filterList);

categoryFilter.addEventListener("change", filterList);

priceFilter.addEventListener("change", filterList);

