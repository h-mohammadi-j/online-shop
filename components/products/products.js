const products = async () => {
  try {
    let res = await fetch(
      "https://fakestoreapiserver.reactbd.org/api/products",
    );
    // let res = await fetch("http://localhost:3000/products");
    let result = await res.json();
    let data = result.data;
    let products = document.getElementById("productsView");
    
    data.forEach((card) => {
      products.innerHTML += `
      
                    <div class="min-h-[500px] max-h-[600px] bg-white rounded-lg shadow-[0_0_10px_rgba(0,0,0,0.5)] overflow-hidden text-center flex flex-col items-center">
                    <img class="w-full h-[300px] object-cover object-center rounded-sm " src=${card.image} />
                    <div class="p-6 flex flex-col items-center gap-4">
                        <h1 class="p-2.5 font-bold text-xl text-gray-600  ">${card.title}</h1>
                        <p class="p-2.5 font-bold text-gray-500 tracking-wider">${card.description}</p>
                        <p class="p-2.5 font-bold text-xl border-amber-500 border px-6  rounded-lg w-fit hover:bg-amber-500 hover:text-white transition-all duration=300 cursor-pointer">Price: ${card.price}</p>
                    </div>
                    </div>
            `;
    });
  } catch (error) {
    console.error("fetch failed", error);
  }
   
};
  export default products;
