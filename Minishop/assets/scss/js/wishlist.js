let product = document.getElementById("wishlist");

function getProducts() {
  product.innerHTML = ``;
  let wishList = JSON.parse(localStorage.getItem("wishList")) || [];
  console.log(wishList)
  wishList.map((item, index) => {
    let div = document.createElement("div") ;
    div.className = "box" ;
    div.innerHTML= `
    <img src="${item.image}" alt="">
    <h3>${item.title}</h3>
    <p>${item.price}</p>
    <button onclick="removeItem(${index})">Xosuma gelmedi</button>
    `;

    product.appendChild(div);
  });
}

function removeItem(index) {
  let wishList = JSON.parse(localStorage.getItem("wishList")) || [];
  wishList.splice(index, 1);
  localStorage.setItem("wishList", JSON.stringify(wishList));
  getProducts();
}
getProducts()