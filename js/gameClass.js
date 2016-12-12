'use-strict'

class Game {
  constructor(object) {
    this.background = object.backgroundUrl;
    this.canvas = object.canvas;
    this.canvasContext = object.canvasContext;
  }
  startGame() {
    var canvas = document.getElementById(this.canvas);
    return canvas.getContext(this.canvasContext);
  }
  setBackground() {
    var background = new Image();
    background.src = this.background;
    return background;
  }
}
