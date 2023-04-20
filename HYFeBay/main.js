console.log("Script loaded");
const products = getAvailableProducts();
console.log(products);


const shipCountry = [
    'Denamrk',
    'Sweden',
    'Norway',
    'Germany',
    'Iceland',
    'England'];



function renderProducts(products){
    //append "li" child in "ul"
    const productLi = document.getElementById("productsList");

    for (let product of products) {
        //append 1st li content in "ul"
        
        const liContent = document.createElement("li")
        productLi.appendChild(liContent)        

        //append product name as header in list content
        const liHeader = document.createElement("h1");
        liHeader.innerHTML = product.name;
        liContent.appendChild(liHeader);

        //append product price as content of list
        const liPrice = document.createElement("div")
        liPrice.innerHTML = product.price;
        liContent.appendChild(liPrice)

        //append product rating as content of list
        const liRating = document.createElement("div");
        liRating.innerHTML = product.rating;
        liContent.appendChild(liRating)

     
        //append product shipping as content of list
        const productShip = document.createElement("div");
        productShip.innerHTML = shipCountry[Math.floor(Math.random() * shipCountry.length)];        
        liContent.appendChild(productShip)


    
    }
}
renderProducts(products);