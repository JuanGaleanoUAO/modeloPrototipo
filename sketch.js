/* eslint-disable no-undef, no-unused-vars */
let imagenRegiones;

let buttonCaribe;
let buttonAndina;
let buttonPacifica;
let buttonOrinoquia;
let buttonAmazonia;

let buttonSonidoPress = false;

let interfazVisible = true;
let buttonVisibles = true;

let pressCaribe = false;
let pressAndina = false;
let pressPacifica = false;
let pressOrinoquia = false;
let pressAmazonia = false;

function preload() {
  imagenRegiones = loadImage(
    "https://uploads.codesandbox.io/uploads/user/3fddf699-6313-443c-a09a-44b49571cf77/SZzm-regionesColombia.webp"
  );
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  // Put setup code here
}

function draw() {
  // Put drawings here
  image(imagenRegiones, 0, 0, windowWidth, windowHeight);

  if (buttonVisibles) {
    createButtonsI1();
  }

  if (!buttonVisibles) {
    removeElements();
  }

  if (pressCaribe) {
    removeElements();
    cargarImagenCaribe();

    escritura = createImage("COLOCAR URL");
    escritura.postion("AJUSTAR", "LUGAR");
    escritura.size("AJUSTAR", "TAMAÑO");

    buttonSonido = createImage("COLOCAR URL");
    buttonSonido.postion("AJUSTAR", "LUGAR");
    buttonSonido.size("AJUSTAR", "TAMAÑO");
    buttonSonido.mousePressed(buttonSonidoPresionado);

    if (buttonSonidoPress) {
      playAudio("COLOCAR SONIDO");
    }
  }

  if (pressAndina) {
    removeElements();
    cargarImagenAndina();

    escritura = createImage("COLOCAR URL");
    escritura.postion("AJUSTAR", "LUGAR");
    escritura.size("AJUSTAR", "TAMAÑO");

    buttonSonido = createImage("COLOCAR URL");
    buttonSonido.postion("AJUSTAR", "LUGAR");
    buttonSonido.size("AJUSTAR", "TAMAÑO");
    buttonSonido.mousePressed(buttonSonidoPresionado);

    if (buttonSonidoPress) {
      playAudio("COLOCAR SONIDO");
    }
  }

  if (pressPacifica) {
    removeElements();
    cargarImagenPacifica();

    escritura = createImage("COLOCAR URL");
    escritura.postion("AJUSTAR", "LUGAR");
    escritura.size("AJUSTAR", "TAMAÑO");

    buttonSonido = createImage("COLOCAR URL");
    buttonSonido.postion("AJUSTAR", "LUGAR");
    buttonSonido.size("AJUSTAR", "TAMAÑO");
    buttonSonido.mousePressed(buttonSonidoPresionado);

    if (buttonSonidoPress) {
      playAudio("COLOCAR SONIDO");
    }
  }

  if (pressOrinoquia) {
    removeElements();
    cargarImagenOrinoquia();

    escritura = createImage("COLOCAR URL");
    escritura.postion("AJUSTAR", "LUGAR");
    escritura.size("AJUSTAR", "TAMAÑO");

    buttonSonido = createImage("COLOCAR URL");
    buttonSonido.postion("AJUSTAR", "LUGAR");
    buttonSonido.size("AJUSTAR", "TAMAÑO");
    buttonSonido.mousePressed(buttonSonidoPresionado);

    if (buttonSonidoPress) {
      playAudio("COLOCAR SONIDO");
    }
  }

  if (pressAmazonia) {
    removeElements();
    cargarImagenAmazonia();

    escritura = createImage("COLOCAR URL");
    escritura.postion("AJUSTAR", "LUGAR");
    escritura.size("AJUSTAR", "TAMAÑO");

    buttonSonido = createImage("COLOCAR URL");
    buttonSonido.postion("AJUSTAR", "LUGAR");
    buttonSonido.size("AJUSTAR", "TAMAÑO");
    buttonSonido.mousePressed(buttonSonidoPresionado);

    if (buttonSonidoPress) {
      playAudio("COLOCAR SONIDO");
    }
  }
  noLoop();
}

function createButtonsI1() {
  buttonCaribe = createImage("COLOCAR URL");
  buttonCaribe.postion("AJUSTAR", "LUGAR");
  buttonCaribe.size("AJUSTAR", "TAMAÑO");
  buttonCaribe.mousePressed(buttonCaribePresionado);

  buttonAndina = createImage("COLOCAR URL");
  buttonAndina.postion("AJUSTAR", "LUGAR");
  buttonAndina.size("AJUSTAR", "TAMAÑO");
  buttonAndina.mousePressed(buttonAndinaPresionado);

  buttonPacifica = createImage("COLOCAR URL");
  buttonPacifica.postion("AJUSTAR", "LUGAR");
  buttonPacifica.size("AJUSTAR", "TAMAÑO");
  buttonPacifica.mousePressed(buttonPacificaPresionado);

  buttonOrinoquia = createImage("COLOCAR URL");
  buttonOrinoquia.postion("AJUSTAR", "LUGAR");
  buttonOrinoquia.size("AJUSTAR", "TAMAÑO");
  buttonOrinoquia.mousePressed(buttonOrinoquiaPresionado);

  buttonAmazonia = createImage("COLOCAR URL");
  buttonAmazonia.postion("AJUSTAR", "LUGAR");
  buttonAmazonia.size("AJUSTAR", "TAMAÑO");
  buttonAmazonia.mousePressed(buttonAmazoniaPresionado);
}

function buttonCaribePresionado() {
  buttonCaribe = true;
  buttonAndina = false;
  buttonPacifica = false;
  buttonOrinoquia = false;
  buttonAmazonia = false;

  redraw();
}

function buttonAndinaPresionado() {
  buttonCaribe = false;
  buttonAndina = true;
  buttonPacifica = false;
  buttonOrinoquia = false;
  buttonAmazonia = false;

  redraw();
}

function buttonPacificaPresionado() {
  buttonCaribe = false;
  buttonAndina = false;
  buttonPacifica = true;
  buttonOrinoquia = false;
  buttonAmazonia = false;

  redraw();
}

function buttonOrinoquiaPresionado() {
  buttonCaribe = false;
  buttonAndina = false;
  buttonPacifica = false;
  buttonOrinoquia = true;
  buttonAmazonia = false;

  redraw();
}

function buttonAmazoniaPresionado() {
  buttonCaribe = false;
  buttonAndina = false;
  buttonPacifica = false;
  buttonOrinoquia = false;
  buttonAmazonia = false;

  redraw();
}

function cargarImagenCaribe() {
  imagenCaribe = createImage("COLOCAR URL");
  imagenCaribe.postion("AJUSTAR", "LUGAR");
  imagenCaribe.size("AJUSTAR", "TAMAÑO");
}

function cargarImagenAndina() {
  imagenAndina = createImage("COLOCAR URL");
  imagenAndina.postion("AJUSTAR", "LUGAR");
  imagenAndina.size("AJUSTAR", "TAMAÑO");
}

function cargarImagenPacifica() {
  imagenPacifica = createImage("COLOCAR URL");
  imagenPaciica.postion("AJUSTAR", "LUGAR");
  imagenPacifica.size("AJUSTAR", "TAMAÑO");
}

function cargarImagenOrinoquia() {
  imagenOrinoquia = createImage("COLOCAR URL");
  imagenOrinoquia.postion("AJUSTAR", "LUGAR");
  imagenOrinoquia.size("AJUSTAR", "TAMAÑO");
}

function cargarImagenAmazonia() {
  imagenAmazonia = createImage("COLOCAR URL");
  imagenAmazonia.postion("AJUSTAR", "LUGAR");
  imagenAmazonia.size("AJUSTAR", "TAMAÑO");
}

function buttonSonidoPresionado() {
  buttonSonidoPress = true;
  redraw();
}

function playAudio(audio) {
  if (audio.isPlaying()) {
    audio.stop();
  } else {
    audio.play();
  }
}

// This Redraws the Canvas when resized
windowResized = function () {
  resizeCanvas(windowWidth, windowHeight);
};
