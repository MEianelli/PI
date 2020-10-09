// console.log(1)

// let desc = document.querySelector(".desconto")
// let cards = estrutura.children;
let estrutura = document.querySelector(".carrinho .row");
let tot = document.querySelector(".total")
let sub = document.querySelector(".subtotal")


// console.log(qntd)
// console.log(mais)




// parte do codigo do filipe

// pode mudar o nome das variaveis menos a do "carrinho" no localStorage se n, n vai dar certo

// o objeto 'ex' vc coloca as caracteristicas do produto
// let ex = {
//     img: './img/foto2.jpg',
//     titulo: 'Lorem ipsum dolor sit amet',
//     descricao: 'Lorem ipsum dolor sit amet',
//     valor: '49.99'
// }

// essa func oi vai guardar todos seus objetos no localStorage
// function oi(){
//     let carrinho = JSON.parse(localStorage.getItem('carrinho') || '[]');
    
//     carrinho.push(ex)
//     carrinho.push(ex)
//     localStorage.setItem('carrinho', JSON.stringify(carrinho));
// }

// oi();


window.addEventListener("load", function(){

    carrinho = JSON.parse(localStorage.getItem('carrinho') || '[]');

    if(carrinho == '[]')
        return;

    for(let i = 0; i < carrinho.length; ++i){
        car = carrinho[i];
        let card = `
            <div class="col-12 mb-4">
                <div class="junta">
                    <img class="img" src="${car.img}" alt="roupa">
                    <div class="texto">
                        <p class="titulo"><b>${car.titulo}</b></p>
                        <p class="desc">${car.descricao}</p>
                        </div>
                </div>
                <div class="preco">
                    <div class="choice">
                        <img class="menos" src="./img/btnMenos2.png" alt="botao menos">
                        <div class="qtd">1</div>
                        <img class="mais" src="./img/btnMais2.png" alt="botao mais">
                    </div>
                    <p class="valor ${car.valor}">R$ ${car.valor}</p>
                </div>
            </div>
        `

        estrutura.innerHTML += card;
    }
    a();
    b();
})


function a(){
    let mais = document.querySelectorAll(".mais");
    let qntd = document.querySelectorAll(".qtd");
    let menos = document.querySelectorAll(".menos");
    let arVal = document.querySelectorAll(".valor");

    console.log(1)
    console.log(mais)
    for(let i = 0; i < mais.length; ++i){
        //console.log(1)
        let valor = arVal[i];
        let preco = parseFloat(valor.classList[1]);
        let btnM = mais[i];

        btnM.addEventListener("click", function(){
            let n = qntd[i].innerText;
            n++;
            qntd[i].innerText = n;
            let aux = n*preco;
            valor.innerText = "R$ " + aux.toFixed(2);
            b();
        })

        btnMe = menos[i];

        btnMe.addEventListener("click", function(){
            let n = qntd[i].innerText;
            n = (n > 0 ? n-1 : 0);

            if(n == 0)
                if(window.confirm("Voce quer retirar esse produto do carrinho ?"))
                    btnM.parentElement.parentElement.parentElement.remove();

            qntd[i].innerText = n;
            let aux = n*preco;
            valor.innerText = "R$ " + aux.toFixed(2);
            b();
        })
        
    }
}

let b = function(){;
    let arVal = document.querySelectorAll(".valor");
    let total = 0;
    for(let i = 0; i < arVal.length; ++i){
        let valor = parseFloat(arVal[i].innerText.substr(3));

        total += valor;
    }    
    sub.innerText = "R$ " + total.toFixed(2);
    tot.innerText = "R$ " + total.toFixed(2);
}