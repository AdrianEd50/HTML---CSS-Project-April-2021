const url = "https://consious-coffee.cmsproject.one/wp-json/wc/store/products";
const coffeeConteiner = document.querySelector(".coffee-products");

async function getCoffees() {
  try {
    const response = await fetch(url);
    const results = await response.json();
    createHTML(results);
  } catch (error) {
    console.log(error);
  }
}

getCoffees();

function createHTML(coffees) {
  for (let i = 0; i < coffees.length; i++) {
    let productLink = `<a href="products.html?id=${coffees[i].id}" class="cta">View</a>`;
    console.log(coffees);
    coffeeConteiner.innerHTML += `<div class="coffee">
    <img src="${coffees[i].images[0].src}" alt="${coffees[i].name}">
    <h2>${coffees[i].name}</h2>
    <p>${coffees[i].price_html}</p>
    <div class="link">${productLink}</div>
    </div>`;
  }
}
