var container = document.querySelector(".popupwraper");
var adicionarBotao = document.querySelector(".produto-adicionar-p");
var tituloPop = document.querySelector(".produto-titulo-p");
var descPop = document.querySelector(".produto-descricao-p");
var precPop = document.querySelector(".produto-preco-p");
var botaoX = document.querySelector(".botaoParaFecharPop");

var divisor1 = document.querySelector("#novos");
var divisor2 = document.querySelector("#promocao");
var divisor3 = document.querySelector("#colecao");

var fotoDoPopup;
var target;

var listaDeProdutos = [
  {
    img: "./img/foto1.jpg",
    tituloP: "Vestido Preto e Branco",
    descricaoP:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo",
    precoP: 329.99,
  },
  {
    img: "./img/foto2.jpg",
    tituloP: "Vestido Colorido",
    descricaoP:
      "Tatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo",
    precoP: 229.99,
  },
  {
    img: "./img/foto3.jpg",
    tituloP: "Blusa listrada",
    descricaoP: "Sed ut perspiciatis unde omnis iste  sunt explicabo",
    precoP: 115.0,
  },
  {
    img: "./img/foto4.jpg",
    tituloP: "Anel Verde",
    descricaoP:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo",
    precoP: 25.5,
  },
  {
    img: "./img/foto5.jpg",
    tituloP: "Blusa Xadrez",
    descricaoP:
      " iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo",
    precoP: 180.0,
  },
  {
    img: "./img/foto_1.jpg",
    tituloP: "Vestido Verde",
    descricaoP:
      "Doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt expl",
    precoP: 450.0,
  },
  {
    img: "./img/foto_2.jpg",
    tituloP: "Saia Verde",
    descricaoP: "Tis unde omnis iste natus error sit voluptatem accusantium do",
    precoP: 330.0,
  },
  {
    img: "./img/foto_3.jpg",
    tituloP: "Saia vermelha",
    descricaoP:
      "Audantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo",
    precoP: 410.99,
  },
  {
    img: "./img/foto_sobre.jpg",
    tituloP: "Vestido Branco",
    descricaoP:
      "lo inventore veritatis et quasi architecto beatae vitae dicta su",
    precoP: 240.0,
  },
  {
    img: "./img/foto6.jpg",
    tituloP: "Blusa duas cores",
    descricaoP:
      "Or sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo",
    precoP: 115.99,
  },
  {
    img: "./img/foto7.jpg",
    tituloP: "Blusa Cores",
    descricaoP:
      "Doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo",
    precoP: 150.0,
  },
  {
    img: "./img/foto8.jpg",
    tituloP: "Vestido Cores",
    descricaoP:
      "Illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo",
    precoP: 110.99,
  },
  {
    img: "./img/foto9.jpg",
    tituloP: "Barco",
    descricaoP:
      "omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore verita",
    precoP: 1118.99,
  },
  {
    img: "./img/foto10.jpg",
    tituloP: "Oculos",
    descricaoP: "voluptatem accusantium doloremque",
    precoP: 230.0,
  },
  {
    img: "./img/foto11.jpg",
    tituloP: "Sapato",
    descricaoP:
      "Loremque laudantium, totam rem aperiam, eaque ipsa quae ab illo invent",
    precoP: 230.0,
  },
];

for (let i = 0; i < 5; i++) {
  let produto = listaDeProdutos[i];
  let longa = "";
  let longo = "";
  if (i == 0) {
    longa = "longa";
    longo = "longo";
  } else {
    longa = "";
    longo = "";
  }
  let card = `
  <div class="bloco ${longo}">
    <div class="fotodiv ${longa}">
      <img src="${produto.img}" alt="${produto.tituloP}" class="fotosclass" />
    </div>
    <div class="textodiv">
      <p class="tituloproduto">${produto.tituloP}</p>
      <p class="precoproduto">R$${produto.precoP}</p>
    </div>
  </div>
  `;
  divisor1.innerHTML += card;
}

for (let i = 5; i < 10; i++) {
  let produto = listaDeProdutos[i];
  let longa = "";
  let longo = "";
  if (i == 7) {
    longa = "longa";
    longo = "longo";
  } else {
    longa = "";
    longo = "";
  }
  let card = `
  <div class="bloco ${longo}">
    <div class="fotodiv ${longa}">
      <img src="${produto.img}" alt="${produto.tituloP}" class="fotosclass" />
    </div>
    <div class="textodiv">
      <p class="tituloproduto">${produto.tituloP}</p>
      <p class="precoproduto">R$${produto.precoP}</p>
    </div>
  </div>
  `;
  divisor2.innerHTML += card;
}

for (let i = 10; i < 15; i++) {
  let produto = listaDeProdutos[i];
  let longa = "";
  let longo = "";
  if (i == 14) {
    longa = "longa";
    longo = "longo";
  } else {
    longa = "";
    longo = "";
  }
  let card = `
  <div class="bloco ${longo}">
    <div class="fotodiv ${longa}">
      <img src="${produto.img}" alt="${produto.tituloP}" class="fotosclass" />
    </div>
    <div class="textodiv">
      <p class="tituloproduto">${produto.tituloP}</p>
      <p class="precoproduto">R$${produto.precoP}</p>
    </div>
  </div>
  `;
  divisor3.innerHTML += card;
}

var fotos = document.querySelectorAll(".fotosclass");

for (foto of fotos) {
  foto.addEventListener("click", function (e) {
    fotoDoPopup = document.querySelector(".produto-imagem-p");
    imgSrc = e.srcElement.attributes.src.value;
    for (let i = 0; i < listaDeProdutos.length; i++) {
      if (listaDeProdutos[i].img == imgSrc) {
        target = listaDeProdutos[i];
      }
    }

    tituloPop.innerHTML = target.tituloP;
    descPop.innerHTML = target.descricaoP;
    precPop.innerHTML = "R$" + target.precoP;
    fotoDoPopup.attributes.src.value = target.img;
    container.style.display = "flex";
  });
}

container.addEventListener("click", function (e) {
  if (e.target !== this) return;
  container.style.display = "none";
});

botaoX.addEventListener("click", function (e) {
  container.style.display = "none";
});

adicionarBotao.addEventListener("click", function (e) {
  for (let i = 0; i < listaDeProdutos.length; i++) {
    if (listaDeProdutos[i].img == imgSrc) {
      var ex = {
        img: imgSrc,
        titulo: listaDeProdutos[i].tituloP,
        descricao: listaDeProdutos[i].descricaoP,
        valor: listaDeProdutos[i].precoP,
      };
    }
  }

  oi(ex);
  alert("Produto adicionado ao carrinho com sucesso");

  container.style.display = "none";
});

function oi(obj) {
  let carrinho = JSON.parse(localStorage.getItem("carrinho") || "[]");
  carrinho.push(obj);
  localStorage.setItem("carrinho", JSON.stringify(carrinho));
}
