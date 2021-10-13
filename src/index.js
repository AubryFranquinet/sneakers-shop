import { ShowMenu } from "./function";
import { IncreAndDecrse } from "./function";
import { deleteItem } from "./function";
import { removeAlert } from "./function";

const shoppingIcon = document.getElementById('shopping-icon')
const basket = document.getElementById('shop-basket')
const addToCart = document.getElementById('add-to-cart');
const price = document.getElementById('price')
let netPrice =document.getElementById('net-price').value;
const basketBody = document.getElementById('basket-body')
const empty = document.querySelector('.empty')
const modelName = document.getElementById('modelName')
const qteNull = document.getElementById('qte-null');



shoppingIcon.addEventListener('click', ()=>{
    basket.classList.toggle('show')
})

import { changeImg } from "./slide";
changeImg();

ShowMenu()

IncreAndDecrse();

// add article to shoping basket

function addArticleInCart(){

addToCart.addEventListener('click',()=>{
    if(document.getElementById('qte').value ==0){
        qteNull.classList.add('on')
    }
    else{
         
        empty.classList.add('hide')
        
        const basketDiv = document.createElement('div')
        const firstDiv = document.createElement('div');
        firstDiv.className ="firstDiv"
    
    
        const prdImg = document.createElement('img');
        prdImg.setAttribute('src', './../images/product-1.jpg')
        prdImg.className ="prd-img"
        firstDiv.appendChild(prdImg)
    
        const namePric = document.createElement('div');
        namePric.classList.add('namePrice')
    
        const mdlName = document.createElement('h4');
        mdlName.innerText = modelName.textContent;
        namePric.appendChild(mdlName)

        const priceAndTotal = document.createElement('div')
        priceAndTotal.classList =" priceAndTotal";
    
        const prdPrice = document.createElement('p');
        prdPrice.innerText = price.textContent + "x" + document.getElementById('qte').value + " = $" + document.getElementById('qte').value * netPrice;

    
        priceAndTotal.appendChild(prdPrice)
        
        namePric.appendChild(priceAndTotal)
        firstDiv.appendChild(namePric)
    
        const deletIcon = document.createElement('img');
        deletIcon.setAttribute('src', './images/delete.svg')
        deletIcon.className="delete-icon"
        deleteItem(deletIcon)
       

        firstDiv.appendChild(deletIcon)
        
        const checkOutBtn = document.createElement('button');
        checkOutBtn.innerText ="Checkout"
        checkOutBtn.classList.add('check-out-btn')
        
        
        basketDiv.appendChild(firstDiv)
        basketDiv.appendChild(checkOutBtn)
        basketBody.appendChild(basketDiv)
    }


})
}

addArticleInCart();
removeAlert();

