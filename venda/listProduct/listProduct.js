document.addEventListener('DOMContentLoaded', function () {
    let products = JSON.parse(localStorage.getItem('products')) || [];

    const tableBody = document.querySelector('#product-table tbody');

    function renderTable() {
        tableBody.innerHTML = '';

        products.forEach((product, index) => {
            const row = document.createElement('tr');

            const nameCell = document.createElement('td');
            nameCell.textContent = product.name;
            row.appendChild(nameCell);

            const quantityCell = document.createElement('td');
            quantityCell.textContent = product.quantity;
            row.appendChild(quantityCell);

            const priceCell = document.createElement('td');
            priceCell.textContent = `R$ ${parseFloat(product.price).toFixed(2)}`;
            row.appendChild(priceCell);

            const totalCell = document.createElement('td');
            totalCell.textContent = `R$ ${(product.quantity * product.price).toFixed(2)}`;
            row.appendChild(totalCell);

            const actionsCell = document.createElement('td');
            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Excluir';
            deleteButton.classList.add('delete-btn');
            deleteButton.onclick = () => deleteProduct(index);
            actionsCell.appendChild(deleteButton);
            row.appendChild(actionsCell);

            tableBody.appendChild(row);
        });
    }

    function deleteProduct(index) {
        products.splice(index, 1);

        localStorage.setItem('products', JSON.stringify(products));

        renderTable();
    }

    renderTable();
});

function togglePopup() {
    const popup = document.getElementById('popup');
    popup.style.display = (popup.style.display === 'block') ? 'none' : 'block';
}

