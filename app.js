function cambia_borde() {
  let imagen = document.getElementById("imagen");

  if (imagen.style.borderColor === "rgb(255, 255, 255)") {
    imagen.style.borderColor = "rgb(255, 0, 0)";
  } else {
    imagen.style.borderColor = "rgb(255, 255, 255)";
  }
}

function verificar_sticker() {
  let cantidad1 = parseInt(document.getElementById("input_sticker1").value);
  let cantidad2 = parseInt(document.getElementById("input_sticker2").value);
  let cantidad3 = parseInt(document.getElementById("input_sticker3").value);

  isNaN(cantidad1) ? (cantidad1 = 0) : false;
  isNaN(cantidad2) ? (cantidad2 = 0) : false;
  isNaN(cantidad3) ? (cantidad3 = 0) : false;

  let total = Number.parseInt(cantidad1 + cantidad2 + cantidad3);

  let colorParrafo;
  let mensaje_parrafo;

  if (total == 0) {
    colorParrafo = "green";
    mensaje_parrafo = "No has seleccionado ningún sticker";
  } else if (total > 0 && total <= 10) {
    colorParrafo = "blue";
    mensaje_parrafo = "Has seleccionado " + total + " stickers";
  } else {
    colorParrafo = "red";
    mensaje_parrafo = "Llevas demasiados stickers";
  }

  let parrafo = document.getElementById("parrafo-verificar");

  if (parrafo == null) {
    const container = document.querySelector(".parrafo-boton");
    const secondItem = container.querySelector(".boton-verificar");
    const newNode = document.createElement("p");
    newNode.textContent = mensaje_parrafo;
    newNode.id = "parrafo-verificar";
    newNode.style.marginTop = "15px";
    newNode.style.marginBottom = "10px";
    newNode.style.color = colorParrafo;
    container.insertBefore(newNode, secondItem);
  } else {
    parrafo.innerHTML = mensaje_parrafo;
    parrafo.style.color = colorParrafo;
  }
}

function verifica_password() {
  let pw1 = "911";
  let pw2 = "714";
  let mensaje_verificacion;
  let digito1 = document.getElementById("digito1").value;
  let digito2 = document.getElementById("digito2").value;
  let digito3 = document.getElementById("digito3").value;
  let pw_ingresada = digito1 + digito2 + digito3;
  let color_parrafo;

  if (pw_ingresada == pw1) {
    mensaje_verificacion = "Contraseña 1 correcta!";
    color_parrafo = "green";
  } else if (pw_ingresada == pw2) {
    mensaje_verificacion = "Contraseña 2 correcta!";
    color_parrafo = "green";
  } else {
    mensaje_verificacion = "Contraseña incorrecta!";
    color_parrafo = "red";
  }

  let p = document.getElementById("parrafo-mensaje-pw");
  if (p == null) {
    const container = document.querySelector(".contendor-pw");
    const p = document.createElement("p");
    p.id = "parrafo-mensaje-pw";
    p.innerText = mensaje_verificacion;
    p.style.color = color_parrafo;
    container.appendChild(p);
  } else {
    p.innerText = mensaje_verificacion;
    p.style.color = color_parrafo;
  }
}
