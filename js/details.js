const conteiner = document.querySelector(".coffee-details");

const querryString = document.location.search;

const params = new URLSearchParams(querryString);

const id = params.get("id");

console.log(id);

const url =
  "https://consious-coffee.cmsproject.one/wp-json/wc/store/products/" + id;

async function fetchCoffee() {
  try {
    const response = await fetch(url);
    const json = await response.json();

    console.log(json);
    createHTML(json);
  } catch (error) {
    console.log(error);
  }
}

fetchCoffee();

function createHTML(json) {
  conteiner.innerHTML += `<div >
                        <img src="${json.images[0].src}" alt="${json.name}" class="coffee-details-image">
                          </div>
  
  
                         <div class="coffee-details__details">
                         <h1>${json.name}</h1>
                         <p>${json.description}</p>
                         <p>${json.price_html}</p>
                         <a href="checkout.html" class="cart cta-cart">Add to cart</a>
                         </div>`;
}
