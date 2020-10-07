console.log(1)

let cards = document.querySelectorAll(".col-12")
let desc = document.querySelector(".desconto")
let tot = document.querySelector(".total")
let sub = document.querySelector(".subtotal")

console.log(cards)

let a = function(){
    for(let i = 0; i < cards.length; ++i){
        let btnMenos = cards[i].children[1].children[0].children[0]
        let btnMais = cards[i].children[1].children[0].children[2]
        let qnt = cards[i].children[1].children[0].children[1]
        let valor = cards[i].children[1].children[1]
        btnMais.addEventListener("click", function(){
            let n = qnt.innerText
            n++;
            qnt.innerText = n;

            let aux = valor.classList[1]
            valor.innerText = "R$ " + (aux*n).toFixed(2);
        })

        btnMenos.addEventListener("click", function(){
            let n = qnt.innerText
            n = (n - 1 >= 0 ? n-1 : 0);
            qnt.innerText = n;
            let aux = valor.classList[1]
            valor.innerText = "R$ " + (aux*n).toFixed(2);
        })
    }
}

a();