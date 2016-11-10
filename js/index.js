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


class Player {
  constructor(object) {
    this.xPosition = object.xPosition;
    this.yPosition = object.yPosition;
    this.dirX = object.dirX;
    this.dirY = object.dirY;
    this.speed = object.speed;
    this.imageUrl = object.imageUrl;
  }
  playerImage() {
    var playerImage = new Image();
    playerImage.src = this.imageUrl;
    return playerImage;
  }

  movementListners() {
    var self = this;
    window.addEventListener('keydown', function(e) {
      var key = e.keyCode;
      if (key === 37) { // left
        self.xPosition = 1;
      }
      if (key === 39) { // right
        self.xPosition = -1;
      }
      if (key === 38) { // up
        self.yPosition = 1;
      }
      if (key === 40) { // down
        self.yPosition = -1;
      }
    });
    window.addEventListener('keyup', function(e) {
      var key = e.keyCode;
      if (key === 37) { // left
        self.xPosition = 0;
      }
      if (key === 39) { // right
        self.xPosition = 0;
      }
      if (key === 38) { // up
        self.yPosition = 0;
      }
      if (key === 40) { // down
        self.yPosition = 0;
      }
    });
    window.addEventListener('keydown', function(e) {
      var key = e.keyCode;
      if (key === 32) {
        self.fire();
      }
    })
  }
  move() {
    if (this.xPosition === 1) {
      this.dirX -= this.speed;
    } else if (this.xPosition === -1) {
      this.dirX += this.speed;
    } else if (this.yPosition === 1) {
      this.dirY -= this.speed;
    } else if (this.yPosition === -1) {
      this.dirY += this.speed;
    }
  }
  fire() {
    new Bullet(this.dirX, this.dirY, 10, 10, 10000);
  }
}

class Bullet {
  constructor(startX, startY, speed, direction, lifeLength) {
    this.startX = startX;
    this.startY = startY;
    this.speed = speed;
    this.direction = direction;
    this.lifeLength = lifeLength;
    this.createBullet();
  }
  createBullet() {
    console.log("A new Bullet was created!");
  }
}
class Bomb {
  constructor() {

  }
}
