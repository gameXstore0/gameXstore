function scrollToSection(id) {
  document.getElementById(id).scrollIntoView();
}

function openModal(title, desc) {
  document.getElementById("modal").style.display = "block";
  document.getElementById("gameTitle").innerText = title;
  document.getElementById("gameDesc").innerText = desc;
}

function closeModal() {
  document.getElementById("modal").style.display = "none";
}