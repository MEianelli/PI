var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

window.addEventListener('load', function() {
  let formulario = document.querySelector('#news');
  formulario.addEventListener ('submit', function (event) {

    let nome = document.querySelector('#nome');
    let telefone = document.querySelector('#telefone');
    let email = document.querySelector('#email');

    let erro = []
    let errosUl = document.querySelector('.erro ul');

    if (nome.value == "" ){
      erro.push('Ocorreu um erro no campo nome.');
    }

    if (telefone.value.length < 7 ){
      erro.push('Ocorreu um erro no campo telefone.');
    }

    if (email.value == "" ){
      erro.push('Ocorreu um erro no campo e-mail.');
    }

    if (erro.length > 0){
      event.preventDefault();
    }

    for (let i = 0; i <erro.length; i++) {
      errosUl.innerHTML += "<li>" + erro[i] + "</li>"
    }
      })
  });


