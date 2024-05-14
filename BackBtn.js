class BackButton {
  constructor() {
    this.wb = 100;
    this.hb = 50;
    this.marginB = 30;
    this.sW = 30;
    this.a1 = PI;
    this.a2 = this.a1 + TWO_PI * 1/3;
    this.a3 = this.a2 + TWO_PI * 1/3;
  }

  display() {
    push();

    if (this.isClicked(mouseX, mouseY)) {
      fill(violet);
      stroke(pink);
    } else {
      fill(darkRed);
      stroke(yellowBrown);
    }

    strokeWeight(this.sW);
    line(this.marginB*2 + this.sW/2, this.marginB*2, this.marginB*2 + this.wb, this.marginB*2);
    noStroke();
    triangle(this.marginB*2 + cos(this.a1) * this.hb/2, this.marginB*2 + sin(this.a1) * this.hb/2,
      this.marginB*2 + cos(this.a2) * this.hb/2, this.marginB*2 + sin(this.a2) * this.hb/2,
      this.marginB*2 + cos(this.a3) * this.hb/2, this.marginB*2 + sin(this.a3) * this.hb/2);
    pop();
  }

  isClicked(x, y) {
    return x >= this.marginB && x <= this.marginB * 2 + this.sW/2 + this.wb && y >= this.marginB && y <= this.marginB + this.hb;
  }

  handleClick() {
    stage = 0;  // Resetowanie sceny do początkowej
  }
}
