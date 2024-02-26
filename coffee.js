
let previewcontainer = document.querySelector('.product_previews');
let previewboxes = document.querySelectorAll('.previews');

document.querySelectorAll('.images .product-img').forEach(product => {
    product.onclick = () => {
        let name = product.getAttribute('data-name');
        previewboxes.forEach(previewbox => {
            let target = previewbox.getAttribute('data-target');
            if (name === target) {
                previewbox.classList.add('active');
            }
        });
    };
});

previewboxes.forEach(close =>{
    close.querySelector('.fa-times').onclick =() =>{
        close.classList.remove('active')
        previewcontainer.style.display = 'none';
    }
})