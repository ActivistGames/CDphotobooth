
class BtnLang {
  constructor(txt, x, y, w) {
    this.txt = txt;
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = 50;
    this.easing = 0.09;
    this.yb = height*2; // początkowa pozycja y dla animacji
  }

  display() {
    let d = this.y - this.yb;
    this.yb += d * this.easing;

    if (mouseX >= this.x && mouseX <= this.x + this.w && mouseY >= this.yb - this.h && mouseY <= this.yb) {
      fill(pink);  // Kolor przycisku przy najechaniu kursorem
      if (mPressed) { // mPressed powinno być zdefiniowane globalnie
        currentLayout = this.txt;
        stage = 0;
      }
    } else {
      fill(darkRed);  // Domyślny kolor przycisku
    }
    push();
    textFont(archivoBold);
    noStroke();
    rect(this.x, this.yb - this.h, this.w, this.h, 15);
    fill(255);
    textSize(24);
    textAlign(CENTER, TOP);
    let abbreviation = languageAbbreviations[this.txt.toLowerCase()] || "N/A";
    text(abbreviation, this.x + this.w / 2, this.yb - this.h + this.h / 4);
    pop();
  }
}
