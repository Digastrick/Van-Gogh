const products = [
    {
        srcimg: "../src/img/imgProd1.jpg",
        name: "Встраиваемый светильник Markt",
        priceSale: "3 490 ₽",
        price: "5 060 ₽",
        isSale: true
    },
    {
        srcimg: "../src/img/imgProd2.jpg",
        name: "Линейный светильник ARG",
        price: "6 700 ₽",
        isSale: false
    },
    {
        srcimg: "../src/img/imgProd3.jpg",
        name: "Сведодиодный светильник",
        priceSale: "5 060 ₽",
        price: "6 060 ₽",
        isSale: true
    },
    {
        srcimg: "../src/img/imgProd4.jpg",
        name: "Встраиваемый светильник Markt",
        price: "3 490 ₽",
        isSale: false
    },
    {
        srcimg: "../src/img/imgProd5.jpg",
        name: "Линейный светильник ARG",
        priceSale: "6 700 ₽",
        price: "6 060 ₽",
        isSale: true
    },
    {
        srcimg: "../src/img/imgProd6.jpg",
        name: "Сведодиодный светильник",
        price: "5 060 ₽",
        isSale: false
    },
    {
        srcimg: "../src/img/imgProd7.jpg",
        name: "Встраиваемый светильник Markt",
        priceSale: "3 490 ₽",
        price: "6 060 ₽",
        isSale: true
    },
    {
        srcimg: "../src/img/imgProd8.jpg",
        name: "Линейный светильник ARG",
        price: "6 700 ₽",
        isSale: false
    }
];

const contentGoods = document.getElementById('content-goods');

products.forEach(product => {
    const productElement = document.createElement('div');
    productElement.classList.add('product');

    const saleMarkup = product.isSale ? `<div class="product__sale">Акция</div>` : '';
    
    // Изменяем разметку для отображения цены со скидкой и обычной цены
    productElement.innerHTML = `
        <div class="product__img" style="background-image: url('${product.srcimg}');">
            ${saleMarkup}
            <div class ="details">
                <button class ="details__button">
                    Подробнее
                </button>
            </div>
        </div>
        <p class="product__name">${product.name}</p>
        <p class="product__price">
            ${product.isSale ? `<span class="price-sale">${product.priceSale}</span> <span class="price-original">${product.price}</span>` : `<span class="price-regular">${product.price}</span>`}
        </p>
    `;

    contentGoods.appendChild(productElement);
});
