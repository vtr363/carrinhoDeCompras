let valorTotal = [0,0];
let valorProduto = [50.00, 30.00];
let qtd = [0,0];


function adcionarItem(item){
    let quantidade = document.getElementById('quantidade' + item)
    qtd[item] += 1;
    quantidade.innerHTML = qtd[item]
    atualizaTotalProduto(item)
    atualizaSubTotal()
}
function removeItem(item){
    let quantidade = document.getElementById('quantidade' + item)
    if (qtd[item] > 0){
        qtd[item] -= 1;
        quantidade.innerHTML = qtd[item]
        atualizaTotalProduto(item)
        atualizaSubTotal()
    }
    
}
function atualizaTotalProduto(item){
    let total = document.getElementById('total' + item)
    valorTotal[item] = Number.parseFloat(valorProduto[item] * qtd[item])
    total.innerHTML = valorTotal[item].toFixed(2)
}
function atualizaSubTotal(){
    let totalCompra = document.getElementById('valorTotalCompra')
    totalCompra.innerHTML = valorTotal.reduce((soma, a) => soma + a, 0).toFixed(2)
}
function removeProduto(item){
    let carrinho = document.getElementById('carrinho')
    let produto = document.getElementById('produto' + item)

    if (confirm("Você tem certeza que deseja excluir o produto?")){
        qtd[item] = 0;
        carrinho.removeChild(produto);
    }
}