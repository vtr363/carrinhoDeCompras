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
    valorTotal[item] = parseFloat(valorProduto[item] * qtd[item])
    total.innerHTML = valorTotal[item]
}
function atualizaSubTotal(){
    let totalCompra = document.getElementById('valorTotalCompra')
    totalCompra.innerHTML = valorTotal.reduce((soma, a) => soma + a, 0)
}