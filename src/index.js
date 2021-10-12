const menuBtn = document.getElementById('menu-btn');
const menuBar = document.getElementById('menu-bar')
const closeBtn = document.getElementById('close-menu')
const slider = document.getElementById('slider')
const shoppingIcon = document.getElementById('shopping-icon')
const basket = document.getElementById('shop-basket')
const incress = document.getElementById('incress');
const decress = document.getElementById('decrese')
const addToCart = document.getElementById('add-to-cart');
const price = document.getElementById('price')
let netPrice =document.getElementById('net-price').value;
const basketBody = document.getElementById('basket-body')
const empty = document.querySelector('.empty')
const modelName = document.getElementById('modelName')
const qteNull = document.getElementById('qte-null');
const ok = document.getElementById('ok')




function ShowMenu(){
    hideMenu();
    // show the menu bar 
    menuBtn.addEventListener('click',()=>{
        menuBar.classList.add('show')
        document.body.classList.add('dark')
    })


}
ShowMenu();


function hideMenu(){
    // close the menu bar
    closeBtn.addEventListener('click', ()=>{
        menuBar.classList.remove('show')
        document.body.classList.remove('dark')
    })

}


shoppingIcon.addEventListener('click', ()=>{
    basket.classList.toggle('show')
})

// -------------------------------------------
// Incresse and decrese the the qte of shose
//--------------------------------------------

function IncreAndDecrse(){
let i = 0;
decress.addEventListener('click',()=>{
if(i>0){
    i --;
    document.getElementById('qte').value = i;
}
else{
    document.getElementById('qte').value =0;
}
})

incress.addEventListener('click',()=>{
    i ++;
    document.getElementById('qte').value =i;
})

}
IncreAndDecrse();

//---------------------------------------------
//---------------------------------------------

// add article to shoping basket



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
        prdPrice.innerText = price.textContent + "x" + document.getElementById('qte').value + " $" + document.getElementById('qte').value * netPrice;

    
        priceAndTotal.appendChild(prdPrice)
        
        namePric.appendChild(priceAndTotal)
        firstDiv.appendChild(namePric)
    
        const deletIcon = document.createElement('img');
        deletIcon.setAttribute('src', './../images/delete.svg')
        deletIcon.className="delete-icon"
        deleteItem(deletIcon)
       
       
        // deletIcon.addEventListener('click', ()=>{
         //   deletIcon.parentElement.parentElement.remove();
           
       // })
        firstDiv.appendChild(deletIcon)
        
        const checkOutBtn = document.createElement('button');
        checkOutBtn.innerText ="Checkout"
        checkOutBtn.classList.add('check-out-btn')
        
        
        basketDiv.appendChild(firstDiv)
        basketDiv.appendChild(checkOutBtn)
        basketBody.appendChild(basketDiv)
    }


})

ok.addEventListener('click',()=>{
    qteNull.classList.remove('on')
})




function deleteItem(icon){
    icon.addEventListener('click', ()=>{
        icon.parentElement.parentElement.remove();
    })
}



/*


let images  =['img1.jpg', 'img2.jpg','img3.jpg','img4.jpg'];
let i = 0;
let time = 2000;


function changeImg(){
document.slide.src =images[i];

    if(i<images.length-1){
      i ++;
    }
    else{
     i =0;
    }
    setTimeout("changeImg()", time)
    }
    window.onload = changeImg();






*/
