const products = async () => {
  try {
    // let res = await fetch(
    //   "http://localhost:3000/products",
    // );
    let res = await fetch(
      "https://fakestoreapiserver.reactbd.org/api/products",
    );
    let result = await res.json();
    let data = result.data;
    let products = document.getElementById("products");

    data.forEach((card) => {
      products.innerHTML += `
                
<<<<<<< HEAD
                    <div class=" w-full sm:w-[250px] h-[500px] p-4 rounded-lg shadow-[0_0_10px_rgba(0,0,0,0.5)] overflow-hidden p-2.5 text-center">
                    <img class="w-full h-[250px] object-cover object-center rounded-sm " src=${card.image} />
=======
                    <div class="w-[250px] h-[500px] rounded-lg shadow-[0_0_10px_rgba(0,0,0,0.5)] overflow-hidden p-2.5 text-center">
                    <img class="size-[250px] object-cover object-center rounded-sm " src=${card.image} />
>>>>>>> e85ee0c702a68b76f5f57237884263a0584dd4e0
                        <h2>${card.title}</h2>
                        <p>${card.description}</p>
                        <p>${card.price}</p>
                    </div>
            `;
    });
  } catch (error) {
    console.error("fetch failed", error);
  }
};

export default products;
