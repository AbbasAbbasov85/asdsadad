let prodacts = document.getElementById("prodacts")
let load = document.getElementById("load");

let page = 1
let limit = 3

const renderProducts = async() => {
    try{
        const response = await axios.get( `https://655c839c25b76d9884fd6e12.mockapi.io/Cefer?page=${page}&limit=${limit}`);
       const data = response.data;
       db = data ;
    db.map((item ) => {
        let div = document.createElement("div") ;
        div.className = "box" ;
        div.innerHTML= `
        <img src="${item.image}" alt="">
            <h3>${item.title}</h3>
            <p>${item.price}</p>
            <button onclick="addToCart(${item.id})">$${item.price}</button>
            <button onclick="wishList(${item.id})"><i class="fa-solid fa-heart"></i></button>
        ` ;
        prodacts.appendChild(div);
    });
       page++
} catch (error){
    console.log(error)
}
};
        load.addEventListener("click" , renderProducts);
        const addToCart = (id) => {
            let cart = JSON.parse(localStorage.getItem("cart")) || [];
            cart.push(db.find((item) => item.id == id )) ;
            localStorage.setItem("cart", JSON.stringify(cart)) ;
        };
       

renderProducts()


function addToBasket(id){
    let cart=JSON.parse(localStorage.getItem("cart")) || []
    cart.push(db.find(item=>item.id==id))
    localStorage.setItem("cart",JSON.stringify(cart))
}

function wishList(id){
    let wishList=JSON.parse(localStorage.getItem("wishList")) || []
    wishList.push(db.find(item=>item.id==id))
    localStorage.setItem("wishList",JSON.stringify(wishList))
}
function sortByPrice() {
    db.sort((a, b) => a.price - b.price);
    displayProducts(db);
}