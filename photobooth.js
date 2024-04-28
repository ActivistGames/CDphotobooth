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

let nextButton;
let repeatButton;
let pictureButton;
let startButton;
let finishButton;

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
  createCanvas(windowWidth-5, windowHeight-5);
 
  let cnv = document.querySelector('canvas');
  if (cnv) {
    cnv.getContext('2d', {
    willReadFrequently:
      true
    }
    );
  }
  frameRate(18);

  textFont(archivoBold);
  //rectMode(CENTER);
  yb = height*2;

  nextButton = new Button("Next", width / 2 - 100 / 2, height / 2, 100);
  finishButton = new Button("Finish", width / 2 - 120 / 2, 5*height/6, 120);
  repeatButton = new Button("Repeat picture", width / 2 - 200 / 2, 2 * height / 3, 200, 5);
  pictureButton = new Button("Take a picture", width / 2 - 200 / 2, 5*height/6, 200);
  startButton = new Button("Start", width / 2 - 100 / 2, 2 * height / 3, 100);
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

    // redButton("Start", 100, 3*height/4);
    startButton.display();
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

    nextButton.display();

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

    nextButton.display();

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
    nextButton.yb = height;
  } else if (stage == 6 || stage == 7) {
    capture.loadPixels();
    applyTintEffect(capture);
    capture.updatePixels();

    // Oblicz skalowanie na pełną szerokość i wysokość ekranu
    let scaleWidth = windowWidth / capture.width;
    let scaleHeight = windowHeight / capture.height;

    // Wybierz większy współczynnik skalowania, aby wypełnić ekran
    scaleFactor = max(scaleWidth, scaleHeight);

    // Oblicz pozycję Y, aby wycentrować obraz w pionie
    posY = (windowHeight - capture.height * scaleFactor) / 2;

    // Odbicie lustrzane obrazu w poziomie
    push(); // Zapisz bieżący stan transformacji
    translate(windowWidth, 0); // Przesuń punkt odniesienia na koniec szerokości ekranu
    scale(-1, 1); // Odbij poziomo

    // Rysuj obraz, wycentrowany
    image(capture, 0, posY, capture.width * scaleFactor, capture.height * scaleFactor);
    pop(); // Przywróć poprzedni stan transformacji

    if (stage==6) {
      // redButton("Take a picture", 200, 5*height/6) ;
      pictureButton.display();
      countDownTxt = 3;
    } else {
      countDown();
    }
  } else if (stage == 8) {
    image(capturedImage, 0, 0);
    nextButton.display();
    repeatButton.display();
  } else if (stage == 9) {
    image(capturedImage, 0, 0);
    stroke(darkRed);
    strokeWeight(90);

    line(width, 70, width - currentText.length*20-100, 70);
    noStroke();
    strokeWeight(1);
    textSize(36);
    fill(pink);
    textAlign(RIGHT, TOP);
    text(statment, 40, 50, width-80, height/8);
    textSize(36);
    fill(255);
    text(userName, 40, 120, width-80, height/8);
    finishButton.display();
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

function mousePressed() {
   fullscreen(true);
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
  if (countDownTxt==0) {
    capturedImage = get(); // Przechwycenie aktualnego obrazu z canvas (gdzie wyświetlana jest kamera)
    capture.stop(); // Zatrzymanie kamery, jeśli to konieczne
    applyTintEffect(capturedImage); // Stosowanie efektu do przechwyconego obrazu
    //  image(capturedImage, 0, posY, capturedImage.width * scaleFactor, capturedImage.height * scaleFactor); // Wyświetlenie przetworzonego obrazu

    stage++;
  } else {
    fill(184, 82, 82, 255-langT); //darkRed
    circle(width/2, 200, 200);
    fill(231, 216, 221, 255-langT); //pink
    noStroke();
    textSize(100);
    textAlign(CENTER, CENTER);
    text(countDownTxt, width/2, 190);

    langT += 30;
    if (langT>255) {
      langT = 0;
      countDownTxt--;
    }
  }
}


function windowResized() {
  resizeCanvas(windowWidth-5, windowHeight-5);
}

class Button {
  constructor(txt, x, y, w, nextStage = null) {
    this.txt = txt;
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = 50;
    this.nextStage = nextStage;
    this.easing = 0.09;
    this.yb = height; // początkowa pozycja y dla animacji
  }

  display() {
    let d = this.y - this.yb;
    this.yb += d * this.easing;

    if (mouseX >= this.x && mouseX <= this.x + this.w && mouseY >= this.yb - this.h && mouseY <= this.yb) {
      fill(pink);  // Kolor przycisku przy najechaniu kursorem
      if (mPressed && abs(d) < 10) { // mPressed powinno być zdefiniowane globalnie
        if (this.nextStage !== null) {
          stage = this.nextStage;
        } else {
          stage++;
        }
        //this.yb = this.y + this.h * 2; // Resetowanie pozycji animacji
        // this.y = height;
      }
    } else {
      fill(darkRed);  // Domyślny kolor przycisku
    }

    noStroke();
    rect(this.x, this.yb - this.h, this.w, this.h, 15);
    fill(255);
    textSize(24);
    textAlign(CENTER, TOP);
    text(this.txt, this.x + this.w / 2, this.yb - this.h + this.h / 4);
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
