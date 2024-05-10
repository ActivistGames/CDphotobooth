
class Button {
  constructor(txt, x, y, w, nextStage = null) {
    this.txt = txt;
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = 50;
    this.nextStage = nextStage;
    this.easing = 0.09;
    this.yb = height;
    this.y2 = y;
    this.yb2 = height;
  }

  display() {
    let d = this.y - this.yb;
    this.yb += d * this.easing;
    push();
    if (mouseX >= this.x && mouseX <= this.x + this.w && mouseY >= this.yb - this.h && mouseY <= this.yb) {
      fill(pink);
      if (mPressed) {
        if (this.nextStage !== null) {
          stage = this.nextStage;
        } else {
          stage++;
        }
        this.reset();
      }
    } else {
      fill(darkRed);
    }

    noStroke();
    rect(this.x, this.yb - this.h, this.w, this.h, 15);
    fill(255);
    textSize(24);
    textAlign(CENTER, TOP);
    let gr = 0;
    if (currentLayout == "greek") {
      gr = 5;
    }
    text(getTranslation(currentLayout, this.txt), this.x + this.w / 2, this.yb - this.h + this.h / 4 - gr);
    pop();
  }
  reset() {
    this.y = this.y2;
    this.yb = this.yb2;
  }
}
