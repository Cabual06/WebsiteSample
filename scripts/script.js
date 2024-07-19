
let productHTML = "";

products.forEach((product) => {
    productHTML += `
    
    <div id="container>">
        <div class="image">
            <img src="${product.image}"/>
        </div>
        <div class="info">
            <h1>${product.keyword}</h1>
            <p>${product.price}</p>
        </div>
    </div>
    `
    console.log(productHTML);
});

document.querySelector(".product-grid").innerHTML = productHTML;