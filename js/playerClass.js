class Player {
  constructor(object) {
    this.xPosition = object.xPosition;
    this.yPosition = object.yPosition;
    this.dirX = object.dirX;
    this.dirY = object.dirY;
    this.speed = object.speed || 5;
    this.imageUrl = object.imageUrl;
    this.lastMousePosition = {};
    this.currentBullets = [];
    this.currentBombs = [];
  }
  playerImage() {
    var playerImage = new Image();
    playerImage.src = this.imageUrl;
    return playerImage;
  }

  keyBoardMovementListners() {
    var self = this;
    window.addEventListener('keydown', function(e) {
      var key = e.keyCode;
      if (key === 37 || key === 65) { // left
        self.xPosition = 1;
      }
      if (key === 39 || key === 68) { // right
        self.xPosition = -1;
      }
      if (key === 38 || key === 87) { // up
        self.yPosition = 1;
      }
      if (key === 40 || key === 83) { // down
        self.yPosition = -1;
      }
    });
    window.addEventListener('keyup', function(e) {
      var key = e.keyCode;
      if (key === 37 || key === 65) { // left
        self.xPosition = 0;
      }
      if (key === 39 || key === 68) { // right
        self.xPosition = 0;
      }
      if (key === 38 || key === 87) { // up
        self.yPosition = 0;
      }
      if (key === 40 || key === 83) { // down
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
  mouseEventListener() {
    var self = this;
    var canvas = document.getElementById('canvas');
    canvas.addEventListener('mousemove', function(event) {
      var mousePosition = self.getMousePoition(canvas, event);
      // console.log(mousePosition);
    });
  }
  getMousePoition(canvas, event) {
    var rect = canvas.getBoundingClientRect();
    this.lastMousePosition = {
      x: event.clientX - rect.left,
      y: event.clientY - rect.top
    }
    return this.lastMousePosition
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
    var self = this;
    // this.currentBullets.push(new Bullet({
    //   playerX: this.dirX,
    //   playerY: this.dirY,
    //   speed: 10,
    //   mouseCoords: this.lastMousePosition
    // }));
    this.currentBombs.push(new Bomb({
      playerX: this.dirX,
      playerY: this.dirY,
      speed: 0.025,
      mouseCoords: this.lastMousePosition,
      t: 0
    }));
  }
  drawBullets() {
    var self = this;
    this.currentBullets.forEach(function(bullet, idx){
      // console.log(bullet);
      if (bullet.updateBulletPosition() === false) {
        self.currentBullets.splice(idx, 1);
      }
    });
    return this.currentBullets;
  }

  drawBombs() {
    var self = this;
    this.currentBombs.forEach(function(bomb, idx) {
      if (bomb.updateBombPosition() === false) {
        self.currentBombs.splice(idx, 1);
      }
    });
    return this.currentBombs;
  }
}
