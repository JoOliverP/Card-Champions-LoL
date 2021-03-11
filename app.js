const card = document.querySelector(".card");
const container = document.querySelector(".container");
//Items
const title = document.querySelector(".title");
const champion = document.querySelector(".champion img");
const about = document.querySelector(".about button");
const description = document.querySelector(".info h3");
const sizes = document.querySelector(".sizes");

//Logica evento animação
container.addEventListener("mousemove", (e) => {
  let xAxis = (window.innerWidth / 2 - e.pageX) / 25;
  let yAxis = (window.innerHeight / 2 - e.pageY) / 25;

  card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});
//Animações se movendo
container.addEventListener("mouseenter", (e) => {
  card.style.transition = "none";

  title.style.transform = "translateZ(150px)";
  champion.style.transform = "translateZ(200px) ";
  sizes.style.transform = "translateZ(100px)";
  description.style.transform = "translateZ(125px)";
  purchase.style.transform = "translateZ(75px)";
});
//Reset da animações
container.addEventListener("mouseleave", (e) => {
  card.style.transition = "all 0.5s ease";
  card.style.transform = `rotateY(0deg) rotateX(0deg)`;

  title.style.transform = "translateZ(0px)";
  champion.style.transform = "translateZ(0px) rotateZ(0deg)";
  sizes.style.transform = "translateZ(0px)";
  description.style.transform = "translateZ(0px)";
  purchase.style.transform = "translateZ(0px)";
});

/*Funções que alteram as imagens */
function alteraYasuo() {
  document.getElementById("slide").src = "./img/yasuo.png";
  document.getElementById("title").textContent = "Yasuo";
  document.getElementById("description").textContent =
    "Um ioniano extremamente determinado, é também um ágil espadachim que usa o próprio ar como arma para enfrentar seus inimigos.";
  document.getElementById("link-About").href =
    "https://br.leagueoflegends.com/pt-br/champions/yasuo/";
}
function alteraJinx() {
  document.getElementById("slide").src = "./img/jinx.png";
  document.getElementById("title").textContent = "Jinx";
  document.getElementById("description").textContent =
    "Uma criminosa impulsiva e maníaca de Zaun, Jinx vive para disseminar o caos sem se preocupar com as consequências.";
  document.getElementById("link-About").href =
    "https://br.leagueoflegends.com/pt-br/champions/jinx/";
}

function alteraTris() {
  document.getElementById("slide").src = "./img/tristana.png";
  document.getElementById("title").textContent = "Tristana";
  document.getElementById("description").textContent =
    "Apesar de muitos outros yordles focarem sua energia em descobertas, invenções ou simplesmente travessuras, Tristana sempre se inspirou nas aventuras de grandes guerreiros.";
  document.getElementById("link-About").href =
    "https://br.leagueoflegends.com/pt-br/champions/tristana/";
}
