// const instance = basicLightbox.create(
//   `
//     <div class="modal">
//         <h1>Hello Word</h1>
//     </div>
// `,
//   {
//     onShow: (instance) => {
// console.log('Hello word');
//     },
//   }
// );

// instance.show();

const products = [
    {
        id: 1,
        img: 'https://static7.depositphotos.com/1004999/710/i/450/depositphotos_7100026-stock-photo-winter.jpg',
        name: 'Picture',
        prise: 2000,
        description: '28 step'
    },
    {
        id: 2,
        img: 'https://i.pinimg.com/736x/0c/de/1b/0cde1b91bdd4b991869df8d36faa375f.jpg',
        name: 'Picture',
        prise: 3000,
        description: '28 step'
    },
    {
        id: 3,
        img:'https://img.freepik.com/free-photo/christmas-lantern-with-fir-branch-and-decoration-on-snowy-table-defocused-background-generative-ai_1258-150854.jpg?size=626&ext=jpg&ga=GA1.1.1788068356.1710547200&semt=ais',
        name: 'Picture',
        prise: 4000,
        description: '28 step'
    },
    {
        id: 4,
        img:'https://img.freepik.com/premium-photo/beautiful-snowman-in-winter-forest-at-sunset-christmas-backgroundgenerative-ai_841229-1683.jpg',
        name: 'Picture',
        prise: 5000,
        description: '28 step'
    }
]



// функция для одной картики
function ProductTemplate (item) {
return `
<li class="product-item">
            <img src="${item.img}" alt="">
            <h3>${item.name}</h3>
             <p>${item.prise}</p>
        </li>`
}

//  функция для розметки массива картинок
function ProductListTemplate (products) {
const markup = products.map(ProductTemplate).join('')
return markup
}

// находим место куда вставить нащу розметку
const container = document.querySelector('.products')


// функция для всех картинок
function render () {
    const markup = ProductListTemplate (products)
    container.innerHTML = markup
}
render()