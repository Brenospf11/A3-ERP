document.getElementById('request-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const issueDate = formatDate(document.getElementById('issue-date').value);
    const deliveryDate = formatDate(document.getElementById('delivery-date').value);
    const requesterName = document.getElementById('requester-name').value;
    const costCenter = document.getElementById('cost-center').value;
    const costElement = document.getElementById('cost-element').value;
    const requestContext = document.getElementById('request-context').value;
    const requestedItems = document.getElementById('requested-items').value;
    const quantity = document.getElementById('quantity').value;

    const request = {
        issueDate,
        deliveryDate,
        requesterName,
        costCenter,
        costElement,
        requestContext,
        requestedItems,
        quantity
    };

    let requests = JSON.parse(localStorage.getItem('requests')) || [];

    requests.push(request);

    localStorage.setItem('requests', JSON.stringify(requests));

    showConfirmationPopup();
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

function showConfirmationPopup() {
    const popup = document.getElementById('popup-confirmation');
    popup.style.display = 'block';
}

function closeConfirmationPopup() {
    const popup = document.getElementById('popup-confirmation');
    popup.style.display = 'none';
}

function formatDate(dateString) {
    const [year, month, day] = dateString.split("-");
    return `${day}/${month}/${year}`;
  }
