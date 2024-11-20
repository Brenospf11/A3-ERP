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
            <td>
                <button onclick="removePedido(${index})" class="delete-btn">Excluir</button>
                <button onclick="editPedido(${index})" class="edit-btn">Alterar</button>
            </td>
        `;
    });
}

function removePedido(index) {
    let pedidos = JSON.parse(localStorage.getItem('pedidos')) || [];
    pedidos.splice(index, 1);
    localStorage.setItem('pedidos', JSON.stringify(pedidos));
    loadPedidos();
}

function editPedido(index) {
    let pedidos = JSON.parse(localStorage.getItem('pedidos')) || [];
    let pedido = pedidos[index];

    const newDataPedido = prompt("Nova Data do Pedido:", pedido.dataPedido);
    const newNomeEmpresa = prompt("Novo Nome da Empresa:", pedido.nomeEmpresa);
    const newCNPJ = prompt("Novo CNPJ:", pedido.cnpjFornecedor);
    const newDescricao = prompt("Nova Descrição:", pedido.descricaoProdutos);
    const newQuantidade = prompt("Nova Quantidade:", pedido.quantidadeProdutos);
    const newPrazoEntrega = prompt("Novo Prazo de Entrega:", pedido.prazoEntrega);
    const newPreco = prompt("Novo Preço:", pedido.preco);
    const newCondicoesPagamento = prompt("Novas Condições de Pagamento:", pedido.condicoesPagamento);

    pedidos[index] = {
        dataPedido: newDataPedido || pedido.dataPedido,
        nomeEmpresa: newNomeEmpresa || pedido.nomeEmpresa,
        cnpjFornecedor: newCNPJ || pedido.cnpjFornecedor,
        descricaoProdutos: newDescricao || pedido.descricaoProdutos,
        quantidadeProdutos: newQuantidade || pedido.quantidadeProdutos,
        prazoEntrega: newPrazoEntrega || pedido.prazoEntrega,
        preco: newPreco || pedido.preco,
        condicoesPagamento: newCondicoesPagamento || pedido.condicoesPagamento
    };

    localStorage.setItem('pedidos', JSON.stringify(pedidos));
    loadPedidos();
}

window.onload = loadPedidos;

function togglePopup() {
    const popup = document.getElementById('popup');
    popup.style.display = (popup.style.display === 'block') ? 'none' : 'block';
}
