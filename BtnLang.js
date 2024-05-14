
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

    push();
    fill(this.isClicked(mouseX, mouseY) ? pink : darkRed);
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

  isClicked(px, py) {
    return px >= this.x && px <= this.x + this.w && py >= this.yb - this.h && py <= this.yb;
  }

  handleClick() {
    currentLayout = this.txt;
    stage = 0;
  }
}
