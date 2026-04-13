const products = async () => {
  try {
    let res = await fetch(
      "https://fakestoreapiserver.reactbd.org/api/products",
    );
    let result = await res.json();
    let data = result.data;
    let products = document.getElementById("products");

    data.forEach((card) => {
      products.innerHTML += `
                
                    <div class="w-[250px] h-[500px] rounded-lg shadow-[0_0_10px_rgba(0,0,0,0.5)]">
                    <img class="w-full" src=${card.image} />
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
