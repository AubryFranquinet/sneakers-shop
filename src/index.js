const menuBtn = document.getElementById('menu-btn');
const menuBar = document.getElementById('menu-bar')
const closeBtn = document.getElementById('close-menu')
const slider = document.getElementById('slider')
const shoppingIcon = document.getElementById('shopping-icon')
const basket = document.getElementById('shop-basket')
const incress = document.getElementById('incress');
const decress = document.getElementById('decrese')
const number = document.getElementById('number')


// show the menu bar 
menuBtn.addEventListener('click',()=>{
    menuBar.classList.add('show')
    document.body.classList.add('dark')
})

// close the menu bar
closeBtn.addEventListener('click', ()=>{
    menuBar.classList.remove('show')
    document.body.classList.remove('dark')
})


shoppingIcon.addEventListener('click', ()=>{
    basket.classList.toggle('show')
})


let i = 0;
decress.addEventListener('click',()=>{
    i --;
    number.innerText = i;
})

incress.addEventListener('click',()=>{
    i ++;
     number.innerText =i;
})



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






/*

let images = [
    {
        name:"one",
        img: "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/jvcf7clhvzyavyopsi9n/revolution-5-running-shoe-7TKVTL.png"
    },
    {
        name:"one",
        img: "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/e125b578-4173-401a-ab13-f066979c8848/air-force-1-older-shoes-xjblV7.png"
    },
    {
        name:"one",
        img: "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/fb7eda3c-5ac8-4d05-a18f-1c2c5e82e36e/blazer-mid-77-vintage-shoe-Q6SCp0.png"
    }
]



let myImg =['product-1.png', 'product-2.png', 'product-3.png'];
let i =0;
let time = 200;







/*
for(let i = 0; i<images.length; i++){

    let allimage = document.createElement('img');
    allimage.setAttribute('src', images[i].img);
    newmain.appendChild(allimage)
}
*/







