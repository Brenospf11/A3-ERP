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
            const actionsContainer = document.createElement('div');
            actionsContainer.classList.add('actions-cell');

            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Deletar';
            deleteButton.classList.add('delete-btn');
            deleteButton.onclick = () => deleteRequest(index);
            actionsContainer.appendChild(deleteButton);

            const editButton = document.createElement('button');
            editButton.textContent = 'Alterar';
            editButton.classList.add('edit-btn');
            editButton.onclick = () => editRequest(index);
            actionsContainer.appendChild(editButton);

            actionsCell.appendChild(actionsContainer);
            row.appendChild(actionsCell);

            tableBody.appendChild(row);
        });
    }

    function deleteRequest(index) {
        requests.splice(index, 1);
        localStorage.setItem('requests', JSON.stringify(requests));
        renderTable();
    }

    function editRequest(index) {
        const request = requests[index];

        const newIssueDate = prompt('Nova Data de Emissão:', request.issueDate);
        const newDeliveryDate = prompt('Nova Data de Entrega Desejada:', request.deliveryDate);
        const newRequesterName = prompt('Novo Solicitante:', request.requesterName);
        const newCostCenter = prompt('Novo Centro de Custo:', request.costCenter);
        const newCostElement = prompt('Novo Elemento de Custo:', request.costElement);
        const newRequestContext = prompt('Novo Contexto da Solicitação:', request.requestContext);
        const newRequestedItems = prompt('Novos Produtos ou Serviços Solicitados:', request.requestedItems);
        const newQuantity = prompt('Nova Quantidade:', request.quantity);

        requests[index] = {
            issueDate: newIssueDate || request.issueDate,
            deliveryDate: newDeliveryDate || request.deliveryDate,
            requesterName: newRequesterName || request.requesterName,
            costCenter: newCostCenter || request.costCenter,
            costElement: newCostElement || request.costElement,
            requestContext: newRequestContext || request.requestContext,
            requestedItems: newRequestedItems || request.requestedItems,
            quantity: newQuantity || request.quantity
        };

        localStorage.setItem('requests', JSON.stringify(requests));
        renderTable();
    }

    renderTable();
});

function togglePopup() {
    const popup = document.getElementById('popup');
    popup.style.display = (popup.style.display === 'block') ? 'none' : 'block';
}

document.addEventListener('click', function (event) {
    const popup = document.getElementById('popup');
    const logo = document.querySelector('.logo');
    if (!popup.contains(event.target) && event.target !== logo) {
        popup.style.display = 'none';
    }
});
