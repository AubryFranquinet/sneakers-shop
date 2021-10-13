//GLOBAL VARIABLES

const menuBtn = document.getElementById('menu-btn');
const menuBar = document.getElementById('menu-bar')
const closeBtn = document.getElementById('close-menu')
const incress = document.getElementById('incress');
const decress = document.getElementById('decrese')
const qteNull = document.getElementById('qte-null');
const ok = document.getElementById('ok')
const shoppingIcon = document.getElementById('shopping-icon')
const basket = document.getElementById('shop-basket')
const addToCart = document.getElementById('add-to-cart');
const price = document.getElementById('price')
let netPrice = document.getElementById('net-price').value;
const basketBody = document.getElementById('basket-body')
const empty = document.querySelector('.empty')
const modelName = document.getElementById('modelName')



//Show the left side menu
export function ShowMenu() {
    hideMenu();
    // show the menu bar 
    menuBtn.addEventListener('click', () => {
        menuBar.classList.add('show')
        document.body.classList.add('dark')
    })


}

//Hide the left side menu
function hideMenu() {
    // close the menu bar
    closeBtn.addEventListener('click', () => {
        menuBar.classList.remove('show')
        document.body.classList.remove('dark')
    })

}

//Change number of items when +1 and -1 to the product
export function IncreAndDecrse() {
    let i = 0;
    decress.addEventListener('click', () => {
        if (i > 0) {
            i--;
            document.getElementById('qte').value = i;
        }
        else {
            document.getElementById('qte').value = 0;
        }
    })

    incress.addEventListener('click', () => {
        i++;
        document.getElementById('qte').value = i;
    })

}

// Delete the item added in basket
export function deleteItem(icon) {
    icon.addEventListener('click', () => {
        icon.parentElement.parentElement.remove();
    })
}

//Remove alert when the quantity of items is less than 0
export function removeAlert() {
    ok.addEventListener('click', () => {
        qteNull.classList.remove('on')
    })

}

//Show the shopping basket when clicked on
export function onClickShopping() {

    shoppingIcon.addEventListener('click', () => {
        basket.classList.toggle('show')
    })
}

//Add an article to the shopping basket when clicked on
export function addArticleInCart() {

    addToCart.addEventListener('click', () => {
        if (document.getElementById('qte').value == 0) {
            qteNull.classList.add('on')
        }
        else {

            empty.classList.add('hide')

            const basketDiv = document.createElement('div')
            const firstDiv = document.createElement('div');
            firstDiv.className = "firstDiv"


            const prdImg = document.createElement('img');
            prdImg.setAttribute('src', './../images/product-1.jpg')
            prdImg.className = "prd-img"
            firstDiv.appendChild(prdImg)

            const namePric = document.createElement('div');
            namePric.classList.add('namePrice')

            const mdlName = document.createElement('h4');
            mdlName.innerText = modelName.textContent;
            namePric.appendChild(mdlName)

            const priceAndTotal = document.createElement('div')
            priceAndTotal.classList = " priceAndTotal";

            const prdPrice = document.createElement('p');
            prdPrice.innerText = price.textContent + "x" + document.getElementById('qte').value + " = $" + document.getElementById('qte').value * netPrice;


            priceAndTotal.appendChild(prdPrice)

            namePric.appendChild(priceAndTotal)
            firstDiv.appendChild(namePric)

            const deletIcon = document.createElement('img');
            deletIcon.setAttribute('src', './images/delete.svg')
            deletIcon.className = "delete-icon"
            deleteItem(deletIcon)


            firstDiv.appendChild(deletIcon)

            const checkOutBtn = document.createElement('button');
            checkOutBtn.innerText = "Checkout"
            checkOutBtn.classList.add('check-out-btn')


            basketDiv.appendChild(firstDiv)
            basketDiv.appendChild(checkOutBtn)
            basketBody.appendChild(basketDiv)
        }


    })
}

//Show product images when thumbnail is clicked on
export function changeImg() {
    //Grabbing the different elements just for readability

    let imgs = document.querySelectorAll(".productThumb");
    let bigImg = document.getElementById("product")

    for (let i = 0; i < imgs.length; i++) {
        const img = imgs[i]
        img.addEventListener("click", function (e) {
            let offset = i + 1
            let bigImgPath = "./images/image-product-" + offset + ".jpg"
            console.log(bigImgPath)
            bigImg.src = bigImgPath

        });
    }
}