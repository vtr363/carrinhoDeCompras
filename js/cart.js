var valorTotal = [0,0];
var valorProduto = [50.00, 30.00];
var qtd = [0,0];

function adcionarItem(item){
    var quantidade = document.getElementById('quantidade' + item)
    qtd[item] += 1;
    quantidade.innerHTML = qtd[item]
}
function removeItem(item){
    var quantidade = document.getElementById('quantidade' + item)
    qtd[item] -= 1;
    quantidade.innerHTML = qtd[item]
}