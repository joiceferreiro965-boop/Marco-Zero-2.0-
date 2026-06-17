function buscar() {
  let input = document.getElementById("pesquisa").value.toLowerCase();
  let lista = document.getElementById("lista");
  let itens = lista.querySelectorAll("li");

  let encontrou = false;

  itens.forEach(item => {
    let texto = item.innerText.toLowerCase();

    if (texto.includes(input) && input !== "") {
      item.style.display = "block";
      encontrou = true;
    } else {
      item.style.display = "none";
    }
  });

  // mostrar ou esconder a lista
  lista.style.display = encontrou ? "block" : "none";
}

function irPara(pagina){
  window.location.href = pagina;
}

function toggleFiltro(){
  let painel = document.getElementById("painel-filtro");
    
  if(painel.style.display === "block"){
    painel.style.display = "none";
  } else {
    painel.style.display = "block";
  }
}


function filtrar(categoria){
  let lojas = document.querySelectorAll(".loja");

  lojas.forEach(loja => {
    let id = loja.id;

    if(
      categoria === "todas" ||

      (categoria === "comida" && (id === "B" || id === "C")) ||

      (categoria === "beleza" && id === "A") ||

      (categoria === "roupa" && id === "D")
    ){
      loja.style.display = ""; //  mantém o grid normal
    } else {
      loja.style.display = "none";
    }
  });
}

function toggleMenu(){
  let menu = document.getElementById("menu-lateral");
  menu.classList.toggle("ativo");
}

function abrirWhatsApp(){
  let numero = "558894495461";

  let mensagem =
  "Olá! Gostaria de cadastrar minha loja no Marco Zero.";

  let url =
  "https://wa.me/" +
  numero +
  "?text=" +
  encodeURIComponent(mensagem);

  window.open(url, "_blank");
}

function abrirWhatsAppContato(){
  let numero = "558894495461";

  let mensagem =
  "Olá! Gostaria de entrar em contato com o suporte do Marco Zero.";

  let url =
  "https://wa.me/" +
  numero +
  "?text=" +
  encodeURIComponent(mensagem);

  window.open(url, "_blank");
}

function moverPromocoes(direcao){

  document
    .getElementById("promocoes-galeria")
    .scrollBy({
      left: direcao * 320,
      behavior: "smooth"
    });

}

function moverNovidades(direcao){

  const galeria =
  document.getElementById("novidades-galeria");

  galeria.scrollBy({
    left: direcao * 300,
    behavior: "smooth"
  });

}