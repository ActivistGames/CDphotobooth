let capture;

let mPressed = false;

let keys = [];
let currentLayout = "english";
let currentText = "";
let capsLock = false;
let displayText = "";
let altPressed = false;

let userName = "";
let statment = "";

let archivoBold;
let openBold;

let lang = 0;

let t = 0;
let wait = 0;
let langT = 0;
let countDownText = 0;
let capturedImage;
let yb = 0;
let ybc = 0;
let easing = 0.09;
let displayLangText = false;

let scaleFactor;
let posY;

let black = "#191818";
let violet = "#8083ae";
let pink = "#e7d8dd";
let turquoise = "#6bdbd6";
let darkRed = "#b85252";
let grey = "#808881";
let darkGrey = "#54534d";
let yellowBrown = "#cf9855";

let stage = 0;

const languages = [
  "english",
  "polish",
  "greek",
  "flemish",
  "dutch",
  "french",
  "czech",
  "croatian",
  "lithuanian",
  "spanish",
  "portuguese",
  "romanian"
];

const layouts = {
  other:
["1 2 3 4 5 6 7 8 9 0 bksp", "q w e r t y u i o p", "a s d f g h j k l", "shift z x c v b n m", "alt space enter language"],
  greek:
["1 2 3 4 5 6 7 8 9 0 bksp", "ς ε ρ τ υ θ ι ο π", "α σ δ φ γ η ξ κ λ", "shift ζ χ ψ ω β ν μ", "alt space enter language"],
  french:
["1 2 3 4 5 6 7 8 9 0 bksp", "a z e r t y u i o p", "q s d f g h j k l m", "shift w x c v b n", "alt space enter language"],
  };

const altLayouts = {
  english:
{
"a":
"á", "e":
"é", "i":
"í", "o":
"ó", "u":
"ú", "n":
"ñ", "c":
  "ç"
}
,
  polish:
{
"a":
"ą", "c":
"ć", "e":
"ę", "l":
"ł", "n":
"ń", "o":
"ó", "s":
"ś", "z":
"ż", "x":
  "ź"
}
,
  greek:
{
"α":
"ά", "ε":
"έ", "η":
"ή", "ι":
"ί", "ο":
"ό", "υ":
"ύ", "ω":
  "ώ"
}
,
  flemish:
{
"a":
"ä", "e":
"ë", "i":
"ï", "o":
"ö", "u":
  "ü"
}
,
  dutch:
{
"a":
"ä", "e":
"ë", "i":
"ï", "o":
"ö", "u":
  "ü"
}
,
  french:
{
"a":
"à", "e":
"é", "u":
"ù", "i":
"î", "o":
"ô", "c":
  "ç"
}
,
  czech:
{
"a":
"á", "c":
"č", "d":
"ď", "e":
"ě", "n":
"ň", "o":
"ó", "r":
"ř", "s":
"š", "t":
"ť", "u":
"ů", "z":
  "ž"
}
,
  croatian:
{
"c":
"č", "d":
"đ", "s":
"š", "z":
  "ž"
}
,
  lithuanian:
{
"a":
"ą", "c":
"č", "e":
"ę", "i":
"į", "s":
"š", "u":
"ų", "z":
  "ž"
}
,
  spanish:
{
"a":
"á", "e":
"é", "i":
"í", "o":
"ó", "u":
"ú", "n":
  "ñ"
}
,
  portuguese:
{
"a":
"ã", "c":
"ç", "e":
"é", "i":
"í", "o":
"ó", "u":
  "ú"
}
,
  romanian:
{
"a":
"ă", "A":
"Â", "i":
"î", "s":
"ș", "t":
"ț", "u":
  "u̯"
}
};


function preload() {
  archivoBold = loadFont('fonts/Archivo-Bold.ttf');
  openBold = loadFont('fonts/OpenSans-Bold.ttf');
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  frameRate(18);

  textFont(archivoBold);
  //rectMode(CENTER);
  yb = height*2;
}

function draw() {
  if (wait >0) {
    wait--;
  }
  background(turquoise);
  if (stage == 0) {

    fill(black);
    noStroke();
    textSize(24);
    textAlign(CENTER, CENTER);
    text("Make your own poster", width/2, height/8);

    fill(darkRed);
    textSize(32);
    text("Express your feelings about Democracy", width/2, height/2);

    redButton("Start", 100, 3*height/4);
  } else if (stage == 1) {
    t = 2;
    stage = 2;

    updateKeys(currentLayout);
  } else if (stage == 2) {
    if (displayLangText) {
      displayLang();
    }

    if (t > 0) {
      currentText = currentText.substring(0, currentText.length - 1);
      t--;
    }

    fill(black);
    noStroke();
    textSize(24);
    textAlign(CENTER, CENTER);
    text("What is your name?", width/2, height/8);
    textSize(36);
    fill(darkRed);
    textAlign(CENTER, TOP);
    text(displayText, width/2, height/4);

    redButton("Next", 100, height/2) ;

    keys.forEach(key => {
      key.display();
    }
    );
  } else if (stage==3) {
    userName = displayText;
    displayText = '';
    currentText  = '';
    stage = 4;
  } else if (stage == 4) {
    if (displayLangText) {
      displayLang();
    }

    stroke(darkRed);
    strokeWeight(90);

    line(width, 70, width - currentText.length*20-100, 70);
    noStroke();
    strokeWeight(1);
    textSize(36);
    fill(pink);
    textAlign(RIGHT, TOP);
    text(displayText, 40, 50, width-80, height/8);


    fill(black);
    noStroke();
    textSize(24);
    textAlign(CENTER, CENTER);
    text("Write your statement", width/2, height/4);

    redButton("Next", 100, height/2) ;

    keys.forEach(key => {
      key.display();
    }
    );
  } else if (stage == 5) {
    statment = displayText;
    capture = createCapture(VIDEO);
    capture.size(640, 480);
    capture.hide();
    stage = 6;
  } else if (stage == 6 || stage == 7) {

    capture.loadPixels();
    applyTintEffect(capture);
    capture.updatePixels();

    // Skalowanie obrazu do pełnej szerokości ekranu
    scaleFactor = windowWidth / capture.width;

    // Pozycjonowanie na środku ekranu w pionie
    posY = (windowHeight - capture.height * scaleFactor) / 2;

    // Odbicie lustrzane w pionie
    push(); // Zapisz bieżący stan transformacji
    translate(windowWidth, 0); // Przesuń punkt odniesienia na koniec szerokości ekranu
    scale(-1, 1); // Odbij poziomo

    // Rysuj obraz
    image(capture, 0, posY, capture.width * scaleFactor, capture.height * scaleFactor);
    pop(); // Przywróć poprzedni stan transformacji
    if (stage==6) {
      redButton("Take a picture", 200, 5*height/6) ;
      countDownTxt = 3;
    } else {
      countDown();
    }
  } else if (stage == 8) {
    image(capturedImage, 0, posY, capture.width * scaleFactor, capture.height * scaleFactor);
  }
}


function applyTintEffect(img) {
  let startColor = color(black); // Dark
  let endColor = color(turquoise); // Light
  for (let y = 0; y < capture.height; y++) {
    for (let x = 0; x < capture.width; x++) {
      let index = (x + y * capture.width) * 4;
      let brightnessValue = (capture.pixels[index] + capture.pixels[index + 1] + capture.pixels[index + 2]) / 3;
      let t = map(brightnessValue, 0, 255, 0, 1);
      let interColor = lerpColor(startColor, endColor, t);
      capture.pixels[index] = red(interColor);
      capture.pixels[index + 1] = green(interColor);
      capture.pixels[index + 2] = blue(interColor);
    }
  }
}

function redButton(txt, w, y) {
  let h = 50;
  let x = width / 2 - w / 2;
  let ybc = y;
  let d  = ybc-yb;
  yb += d*easing;

  // Sprawdzenie, czy kursor myszy znajduje się w obrębie przycisku
  if (mouseX >= x && mouseX <= x + w && mouseY >= y - h && mouseY <= y) {
    fill(pink);  // Kolor przycisku przy najechaniu kursorem
    if (mPressed && abs(d)<10) {
      stage++;
      yb = height+h*2;
    }
  } else {
    fill(darkRed);  // Domyślny kolor przycisku
  }

  noStroke();
  rect(x, yb - h, w, h, 15);
  fill(255);
  noStroke();
  textSize(24);
  textAlign(CENTER, TOP);
  text(txt, width/2, yb - h+h/4);
}

function mousePressed() {
  if (wait == 0) {
    mPressed = true;

    keys.forEach(key => {
      if (key.isClicked(mouseX, mouseY)) {
        handleKey(key.value);
      }
    }
    );
  }
  wait = 2;
}

function mouseReleased() {
  mPressed = false;
}

function handleKey(value) {
  if (value === "bksp") {
    currentText = currentText.substring(0, currentText.length - 1);
  } else if (value === "language") {
    lang++;
    if (lang==languages.length) {
      lang = 0;
    }
    currentLayout = languages[lang];
    updateKeys(currentLayout);
    t = 0;
    displayLangText = true;
  } else if (value === "shift") {
    capsLock = !capsLock;
  } else if (value === "enter" && stage != 1) {
    currentText += "\n";
  } else if (value === "space") {
    currentText += " ";
  } else if (value === "alt") {
    altPressed = !altPressed; // Toggle alt state
  } else {
    if (altPressed && altLayouts[currentLayout] && altLayouts[currentLayout][value]) {
      currentText += altLayouts[currentLayout][value];
    } else {
      currentText += capsLock ? value.toUpperCase() : value.toLowerCase();
    }
  }
  displayText = currentText;
}

function updateKeys(layout) {
  keys = [];
  let keyboard;
  if (layout === "french" || layout === "greek") {
    keyboard = layout;
  } else {
    keyboard = "other";
  }

  if (currentLayout == "greek") {
    textFont(openBold);
  } else {
    textFont(archivoBold);
  }

  const numRows = layouts[keyboard].length;
  //let keyHeight = height / (numRows + 1) * 0.8;  // Calculate the height of each key
  let keyHeight = 60;
  let startY = height - keyHeight * numRows;  // Start from the bottom of the screen

  layouts[keyboard].forEach((row, rowIndex) => {
    let rowKeys = row.split(' ');
    rowKeys.forEach((key, keyIndex) => {
      let keyWidth = width / rowKeys.length;
      let yPosition = startY + rowIndex * keyHeight;  // Calculate y position based on bottom alignment
      keys.push(new Key(keyIndex * keyWidth, yPosition, keyWidth, keyHeight, key));
    }
    );
  }
  );
}


function displayLang() {
  fill(0, 255-langT);
  noStroke();
  textSize(100);
  textAlign(CENTER, CENTER);
  text(languages[lang], width/2, 200);
  langT += 5;
  if (langT>255) {
    langT = 0;
    displayLangText = false;
  }
}


function countDown() {
  fill(184, 82, 82, 255-langT); //darkRed
  circle(width/2, 230, 200);
  fill(231, 216, 221, 255-langT); //pink
  noStroke();
  textSize(100);
  textAlign(CENTER, CENTER);
  text(countDownTxt, width/2, 200);
  langT += 30;
  if (langT>255) {
    langT = 0;
    countDownTxt--;
    if (countDownTxt==0) {
      capturedImage = createImage(capture.width, capture.height);
      capturedImage.loadPixels();
      applyTintEffect(capture);  // Ponownie zastosuj filtr
      capturedImage.copy(capture, 0, 0, capture.width, capture.height, 0, 0, capture.width, capture.height);
      capturedImage.updatePixels();
      stage++;
    }
  }
}


class Key {
  constructor(x, y, w, h, value) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.value = value;
  }

  display() {
    fill(this.isClicked(mouseX, mouseY) ? grey : darkGrey);
    if (altPressed && this.value == "alt") {
      fill(grey);
    }
    if (capsLock && this.value == "shift") {
      fill(grey);
    }
    stroke(black);
    rect(this.x, this.y, this.w, this.h, 5);
    noStroke();
    fill(255);
    textSize(16);
    //textAlign(CENTER, CENTER);
    let displayValue = this.value;
    if (altPressed && altLayouts[currentLayout] && altLayouts[currentLayout][this.value]) {
      displayValue = altLayouts[currentLayout][this.value];
    }
    if (capsLock) {
      displayValue = displayValue.toUpperCase();
    }
    text(displayValue, this.x + this.w / 2, this.y + this.h / 2 - 10);
  }

  isClicked(px, py) {
    return px >= this.x && px <= this.x + this.w && py >= this.y && py <= this.y + this.h;
  }
}
