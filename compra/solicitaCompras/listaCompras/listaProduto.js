document.addEventListener('DOMContentLoaded', function () {

    let requests = JSON.parse(localStorage.getItem('requests')) || [];

    const tableBody = document.querySelector('#request-table tbody');

    function renderTable() {
        tableBody.innerHTML = '';

        requests.forEach((request, index) => {
            const row = document.createElement('tr');

            const issueDateCell = document.createElement('td');
            issueDateCell.textContent = request.issueDate;
            row.appendChild(issueDateCell);

            const deliveryDateCell = document.createElement('td');
            deliveryDateCell.textContent = request.deliveryDate;
            row.appendChild(deliveryDateCell);

            const requesterNameCell = document.createElement('td');
            requesterNameCell.textContent = request.requesterName;
            row.appendChild(requesterNameCell);

            const costCenterCell = document.createElement('td');
            costCenterCell.textContent = request.costCenter;
            row.appendChild(costCenterCell);

            const costElementCell = document.createElement('td');
            costElementCell.textContent = request.costElement;
            row.appendChild(costElementCell);

            const requestContextCell = document.createElement('td');
            requestContextCell.textContent = request.requestContext;
            row.appendChild(requestContextCell);

            const requestedItemsCell = document.createElement('td');
            requestedItemsCell.textContent = request.requestedItems;
            row.appendChild(requestedItemsCell);

            const quantityCell = document.createElement('td');
            quantityCell.textContent = request.quantity;
            row.appendChild(quantityCell);

            const actionsCell = document.createElement('td');
            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Deletar';
            deleteButton.classList.add('delete-btn');
            deleteButton.onclick = () => deleteRequest(index);
            actionsCell.appendChild(deleteButton);
            row.appendChild(actionsCell);

            tableBody.appendChild(row);
        });
    }

    function deleteRequest(index) {
        requests.splice(index, 1);
        localStorage.setItem('requests', JSON.stringify(requests));
        renderTable();
    }

    renderTable();
});

function togglePopup() {
    const popup = document.getElementById('popup');
    popup.style.display = (popup.style.display === 'block') ? 'none' : 'block';
}

document.addEventListener('click', function(event) {
    const popup = document.getElementById('popup');
    const logo = document.querySelector('.logo');
    if (!popup.contains(event.target) && event.target !== logo) {
        popup.style.display = 'none';
    }
});
