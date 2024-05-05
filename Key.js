
class Key {
  constructor(x, y, w, h, value) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.value = value;
  }

  display() {
    push();

    if (currentLayout == "greek") {
      textFont(openBold);
    } else {
      textFont(archivoBold);
    }
    fill(this.isClicked(mouseX, mouseY) ? grey : darkGrey);
    if (altPressed && this.value == "alt") {
      fill(grey);
    }
    if (capsLock && this.value == "shift") {
      fill(grey);
    }
    stroke(black);
    strokeWeight(1);
    rect(this.x, this.y, this.w, this.h, 5);
    noStroke();
    fill(255);
    textSize(16);
    textAlign(CENTER, CENTER);
    let displayValue = this.value;
    if (altPressed && altLayouts[currentLayout] && altLayouts[currentLayout][this.value]) {
      displayValue = altLayouts[currentLayout][this.value];
    }
    if (capsLock) {
      displayValue = displayValue.toUpperCase();
    }
    text(displayValue, this.x + this.w / 2, this.y + this.h / 2);
    pop();
  }

  isClicked(px, py) {
    return px >= this.x && px <= this.x + this.w && py >= this.y && py <= this.y + this.h;
  }
}
