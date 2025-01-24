// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
const nameFriend = document.getElementById("amigo");
const btnAddFriends = document.querySelector(".button-add");
const listFriendsHTML = document.getElementById("listaAmigos");
const btnSortFriends = document.querySelector(".button-draw");
const resultado = document.getElementById("resultado");

const listFriends = [];

btnAddFriends.addEventListener("click", () => {
  if (nameFriend.value === "") {
    alert("Por favor, inserte un nombre.");
  } else {
    const nameInput = nameFriend.value;
    listFriends.push(nameInput);

    // Crear un elemento <li> por cada nombre y agregarlo a la lista
    const li = document.createElement("li");
    li.textContent = nameInput;
    listFriendsHTML.appendChild(li);
  }
  nameFriend.value = "";
});

btnSortFriends.addEventListener("click", () => {
  if (listFriends.length === 0) {
    alert("Por favor, inserte un nombre.");
  } else {
    const randomNumber = Math.round(Math.random() * (listFriends.length - 1));
    const randomResult = listFriends[randomNumber];
    const result = `El amigo secreto sorteado es: ${randomResult}`

    //Limpiamos la lista de elementos que teniamos al agregar
    listFriendsHTML.innerHTML = "";

    // Crear un elemento <li> para agregarlo a la lista
    const li = document.createElement("li");
    li.textContent = result;
    resultado.appendChild(li);
  }
});
