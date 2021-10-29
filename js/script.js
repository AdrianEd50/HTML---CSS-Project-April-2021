const url = "https://consious-coffee.cmsproject.one/wp-json/wc/store/products";
const coffeeConteiner = document.querySelector(".home-product-spesific");

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

function createHTML(homeCoffees) {
  for (let i = 0; i < homeCoffees.length; i++) {
    let productLink = `<a href="products.html?id=${homeCoffees[i].id}" class="cta-home">View</a>`;
    if (i === 4) {
      break;
    }
    console.log(homeCoffees);
    coffeeConteiner.innerHTML += `<div class="home-coffee"> 
    <img src="${homeCoffees[i].images[0].src}" alt="${homeCoffees[i].name}">
    <h2>${homeCoffees[i].name}</h2>
    <p>${homeCoffees[i].price_html}</p>
    <div class="home-link">${productLink}</div>
    </div>`;
  }
}
