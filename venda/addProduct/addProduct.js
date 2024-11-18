document.getElementById('product-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('productName').value;
    const quantity = document.getElementById('productQuantity').value;
    const price = document.getElementById('productPrice').value;

    const product = { name, quantity, price };

    const products = JSON.parse(localStorage.getItem('products')) || [];

    products.push(product);

    localStorage.setItem('products', JSON.stringify(products));

    document.getElementById('product-form').reset();

    alert('Produto adicionado com sucesso!');
});

function togglePopup() {
    const popup = document.getElementById('popup');
    popup.style.display = (popup.style.display === 'block') ? 'none' : 'block';
}
