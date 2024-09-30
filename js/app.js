let total = 0;
document.getElementById('lista-produtos').innerHTML =  '';
document.getElementById('valor-total').textContent = 'R$0';
function adicionar() {

    let produto = document.getElementById('produto').value;
    let nomeProduto = produto.split('-')[0];
    let valorUnitario = produto.split('R$')[1];
    let quantidade = document.getElementById('quantidade').value;
    let subTotal = quantidade * valorUnitario;
    
    if (document.getElementById('quantidade').value == 0) {
        return alert('Você precisa adicionar alguma quantidade antes de adicionar ao carrinho.');
    } else {
        let carrinho = document.getElementById('lista-produtos');
        carrinho.innerHTML = carrinho.innerHTML + `<section class="carrinho__produtos__produto">
              <span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R$${subTotal}</span>
            </section>`;
    
        total = total + subTotal;
        let campoTotal = document.getElementById('valor-total');
        campoTotal.textContent = `R$${total}`;
        
        document.getElementById('quantidade').value = 0;
    }
}

function editarTexto(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function limpar() {
    total = 0;
    document.getElementById('lista-produtos').innerHTML =  '';
    document.getElementById('valor-total').textContent = 'R$0';
}
