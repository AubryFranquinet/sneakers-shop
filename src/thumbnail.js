export function displayThumb() {

    let click = document.querySelectorAll("clicks")
    click.onclick = function () {

        let thumb_id = document.getElementById('productThumb');
        let product_id = document.getElementById('product')
        if (thumb_id.src.match("./images/image-product-1-thumbnail.jpg")) {
            product_id.src = "./images/image-product-1.jpg";
        }
        else if (thumb_id.src.match("./images/image-product-2-thumbnail.jpg")) {
            product_id.src = "./images/image-product-2.jpg";

        }
        else if (thumb_id.src.match("./images/image-product-3-thumbnail.jpg")) {
            product_id.src = "./images/image-product-3.jpg";

        }
        else if (thumb_id.src.match("./images/image-product-4-thumbnail.jpg")) {
            product_id.src = "./images/image-product-4.jpg";

        }
        console.log("test passed")
    }
}
