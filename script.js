const getProduct = document.querySelector("#product");

fetch("https://fakestoreapi.com/products")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);

    data.map((product) => {
      getProduct.innerHTML += `<div class="col-md-6 col-lg-3" id="product-${
        product.id
      }">
            <div class="card h-100 shadow-sm">
              <img
                src=${product.image}
                class="card-img-top"
                alt="Product 1"
              />
              <div class="card-body d-flex flex-column">
                <h5 class="card-title">${product.title}</h5>
                <p class="card-text" style="flex-grow: 1">${product.description.slice(
                  0,
                  150
                )}  </p>
                <p class="text-primary fw-bold mb-2">$: ${product.price}</p>
                <a href="#" class="btn btn-primary w-100 mt-auto"
                  >Add to Cart</a
                >
              </div>
            </div>
          </div>`;
    });
  })
  .catch((error) => {
    console.error("Error fetching products:", error);
    getProduct.innerHTML = `<div class="col-12 text-center">
        <p class="text-danger">Failed to load products. Please try again later.</p>
    </div>`;
  });
