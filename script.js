import data from "./product.json" assert{type:"json"}

let vals = ""

data.map((item,index)=>{
    vals += `<div class="card">
    <img src=${item.image} style="width: 250px;border-radius:30px" class="image">
    <h2 class="name">${item.name}</h2>
    
    <h4 class="price">$${item.price}</h4>
</div>`
})

document.querySelector(".card-container").innerHTML=vals;