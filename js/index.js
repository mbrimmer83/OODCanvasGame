class Game {
  constructor(object) {
    this.background = object.background;
    this.canvas = object.canvas;
    this.canvasContext = object.canvasContext;
  }
  startGame() {
    var canvas = document.getElementById(this.canvas);
    var ctx = canvas.getContext(this.canvasContext);
  }
}


class Player {
  constructor(xPosition, yPosition, dirX, dirY, speed) {
    this.xPosition = xPosition;
    this.yPosition = yPosition;
    this.dirX = dirX;
    this.dirY = dirY;
    this.speed = speed;
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
