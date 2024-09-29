const products = [
    { name: 'phone', category: 'Electronics', price: 800 },
    { name: 'smart-TV', category: 'Electronics', price: 2000 },
    { name: 'Laptop', category: 'Electronics', price: 3000 },
    { name: 'Scarf', category: 'Clothing', price: 10 },
    { name: 'Gloves', category: 'Clothing', price: 5 },
    { name: 'Jeans', category: 'Clothing', price: 90 },
];

const productList = document.getElementById('product-area');
const Buttons = document.querySelectorAll('.filter-btn');
function displayProducts(Product) {
    productList.innerHTML = '';

    Product.forEach(product => {
        const productItem = document.createElement('div');
        productItem.classList.add('product-item');
        productItem.innerHTML = `
            <h3>${product.name}</h3>
            <p>Category: ${product.category}</p>
            <p>Price: $${product.price}</p>
        `;
        productList.appendChild(productItem);
    });
}

Buttons.forEach(button => {
    button.addEventListener('click', () => {
        const category = button.dataset.category;

        if (category === 'All') {
            displayProducts(products); 
        } else {
            const ProductsFiltered = products.filter(product => product.category === category);
            displayProducts(ProductsFiltered); 
        }
    });
});

displayProducts(products);
