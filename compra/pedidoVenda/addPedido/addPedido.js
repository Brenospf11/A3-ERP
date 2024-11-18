document.getElementById('pedido-form').addEventListener('submit', (event) => {
    event.preventDefault();

    const pedido = {
        nomeEmpresa: document.getElementById('nomeEmpresa').value,
        cnpjFornecedor: document.getElementById('cnpjFornecedor').value,
        descricaoProdutos: document.getElementById('descricaoProdutos').value,
        quantidadeProdutos: document.getElementById('quantidadeProdutos').value,
        prazoEntrega: document.getElementById('prazoEntrega').value,
        dataPedido: document.getElementById('dataPedido').value,
        preco: document.getElementById('preco').value,
        condicoesPagamento: document.getElementById('condicoesPagamento').value
    };

    let pedidos = JSON.parse(localStorage.getItem('pedidos')) || [];
    pedidos.push(pedido);
    localStorage.setItem('pedidos', JSON.stringify(pedidos));

    document.getElementById('pedido-form').reset();
    alert("Pedido adicionado com sucesso!");
});

function togglePopup() {
    const popup = document.getElementById('popup');
    popup.style.display = (popup.style.display === 'block') ? 'none' : 'block';
}
