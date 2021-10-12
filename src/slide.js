export function hamburger() {
    const menuBtn = document.getElementById('menu-btn');
    const menuBar = document.getElementById('menu-bar')
    const closeBtn = document.getElementById('close-menu')


    // show the menu bar 
    menuBtn.addEventListener('click', () => {
        menuBar.classList.add('show')
        document.body.classList.add('dark')
    })

    // close the menu bar
    closeBtn.addEventListener('click', () => {
        menuBar.classList.remove('show')
        document.body.classList.remove('dark')
    })

}


export function changeImg() {
    //Grabbing the different elements just for readability
    
    let imgs = document.querySelectorAll(".productThumb");
    let bigImg = document.getElementById("product")

    for (let i=0; i<imgs.length; i++) {
        const img = imgs[i]
        img.addEventListener("click", function (e) {
            let offset = i+1
            let bigImgPath = "./images/image-product-"+offset+".jpg"
            console.log(bigImgPath)
            bigImg.src = bigImgPath
           
        });
    }
}


