function loadPedidos() {
    const pedidosTable = document.getElementById('pedidosTable').getElementsByTagName('tbody')[0];
    pedidosTable.innerHTML = "";

    let pedidos = JSON.parse(localStorage.getItem('pedidos')) || [];
    pedidos.forEach((pedido, index) => {
        const row = pedidosTable.insertRow();

        row.innerHTML = `
            <td>${pedido.dataPedido}</td>
            <td>${pedido.nomeEmpresa}</td>
            <td>${pedido.cnpjFornecedor}</td>
            <td>${pedido.descricaoProdutos}</td>
            <td>${pedido.quantidadeProdutos}</td>
            <td>${pedido.prazoEntrega}</td>
            <td>${pedido.preco}</td>
            <td>${pedido.condicoesPagamento}</td>
            <td><button onclick="removePedido(${index})">Excluir</button></td>
        `;
    });
}

function removePedido(index) {
    let pedidos = JSON.parse(localStorage.getItem('pedidos')) || [];
    pedidos.splice(index, 1);
    localStorage.setItem('pedidos', JSON.stringify(pedidos));
    loadPedidos();
}

window.onload = loadPedidos;

function togglePopup() {
    const popup = document.getElementById('popup');
    popup.style.display = (popup.style.display === 'block') ? 'none' : 'block';
}