let carrinho = []

function start(){

    adicionaAoCarrinho(
        "COTTON T-SHIRT", 
        "https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        "091091001",
        "White",
        "M",
        50.00
    )
    
    adicionaAoCarrinho(
        "WHITE T-SHIRT", 
        "https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        "056289891",
        "White",
        "XL",
        30.00
    )
    
    
    atualizaCarrinho()
}



function adicionaAoCarrinho(nome, imgLink, artNo, cor, tamanho, preco){
    carrinho.push({
        "nome": nome,
        "imgLink": imgLink,
        "artNo": artNo,
        "cor": cor,
        "tamanho": tamanho,
        "preco": Number.parseFloat(preco),
        "quantidade": 0,
        "total": 0.0
    })
}

function atualizaCarrinho(){
    
    let carrinhoHtml = document.getElementById("carrinho")
    
    carrinho.forEach((produto,index) => {
        
        carrinhoHtml.innerHTML +=
        `<div
            id='produto${index}'
            class='d-flex flex-row justify-content-between align-items-center pt-lg-4 pt-2 pb-3 border-bottom mobile'
        >
            <div class='d-flex flex-row align-items-center'>
                <div>
                    <img
                        src='${produto.imgLink}'
                        width='150'
                        height='150'
                        alt=''
                        id='image'
                    />
                </div>
                <div class='d-flex flex-column pl-md-3 pl-1'>
                    <div><h6>${produto.nome}</h6></div>
                    <div>Art.No:<span class='pl-2'>${produto.artNo}</span></div>
                    <div>Color:<span class='pl-3'>${produto.cor}</span></div>
                    <div>Size:<span class='pl-4'>${produto.tamanho}</span></div>
                </div>
            </div>
            <div class='pl-md-0 pl-1'><b>R$ ${produto.preco.toFixed(2)}</b></div>
            <div class='pl-md-0 pl-2'>
                <span
                    class='fa fa-minus-square text-secondary'
                    onclick='removeItem(${index})'
                ></span
                ><span class='px-md-3 px-1' id='quantidade${index}'>${produto.quantidade}</span
                ><span
                    class='fa fa-plus-square text-secondary'
                    onclick='adcionarItem(${index})'
                ></span>
            </div>
            <div class='pl-md-0 pl-1'>
                <b>R$ <span id='total${index}'>0</span></b>
            </div>
            <div class='close' onclick='removeProduto(${index})'>&times;</div>
        </div>`
        
        
    });
    
}

function adcionarItem(item){
    console.log(item)
    let qtd = document.getElementById('quantidade' + item)
    let produto = carrinho[item]
    produto.quantidade += 1;
    qtd.innerHTML = produto.quantidade

    atualizaNumerosTela(qtd, item)
}

function removeItem(item){
    let qtd = document.getElementById('quantidade' + item)
    let produto = carrinho[item]
    if (produto.quantidade > 0){
        produto.quantidade -= 1;
        qtd.innerHTML = produto.quantidade

        atualizaNumerosTela(qtd, item)
    }
    
}

function atualizaNumerosTela(qtd, item){
    qtd.innerHTML = carrinho[item].quantidade
    atualizaTotalProduto(item)
    atualizaSubTotal()
}

function atualizaTotalProduto(item){
    let total = document.getElementById('total' + item)
    let produto = carrinho[item]
    produto.total = Number.parseFloat(
        produto.quantidade * produto.preco
    )
    total.innerHTML = produto.total.toFixed(2)
}

function atualizaSubTotal(){
    let totalCompra = document.getElementById('valorTotalCompra')
    let subtotal = 0
    carrinho.forEach(produto => {
        subtotal += produto.quantidade * produto.preco
    });
    totalCompra.innerHTML = subtotal.toFixed(2)
}

function removeProduto(item){
    let carrinhoHtml = document.getElementById('carrinho')
    let produto = document.getElementById('produto' + item)

    if (confirm("Você tem certeza que deseja excluir o produto?")){
        carrinho[item].quantidade = 0;
        atualizaSubTotal()
        carrinhoHtml.removeChild(produto);
    }
}