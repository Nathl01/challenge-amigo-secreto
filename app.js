let amigos = [];

function adicionarAmigo() {
  let nomeAmigo = document.getElementById("amigo").value;

  if (nomeAmigo === "") {
    alert("Por favor, insira um nome.");
    return;
  }

  amigos.push(nomeAmigo);
  atualizarListaAmigos();
  document.getElementById("amigo").value = "";
}

function atualizarListaAmigos() {
  let listaAmigos = document.getElementById("listaAmigos");
  listaAmigos.innerHTML = "";

  for (let amigo of amigos) {
    let novoItem = document.createElement("li");
    novoItem.textContent = amigo;
    listaAmigos.appendChild(novoItem);
  }
}

function sortearAmigo() {
  if (amigos.length === 0) {
    alert("Adicione amigos para realizar o sorteio.");
    return;
  }

  const indiceAleatorio = Math.floor(Math.random() * amigos.length);
  const amigoSorteado = amigos[indiceAleatorio];

  document.getElementById(
    "resultado"
  ).innerHTML = `O amigo sorteado é: ${amigoSorteado}`;
}
