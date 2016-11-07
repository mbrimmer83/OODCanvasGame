class Player {
  constructor(xPosition, yPosition, dirX, dirY, speed) {
    this.xPosition = xPosition;
    this.yPosition = yPosition;
    this.dirX = dirX;
    this.dirY = dirY;
    this.speed = speed;
    this.imageUrl = imageUrl;
  }
  move() {
    console.log("Move");
  }
  fire() {
    console.log("Fire");
  }
  playerImage() {
    playerImage = new Image();
    playerImage.src = this.imageUrl;
  }
}

var hero = new Player(200, 200, 0 , 0, 2);

var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
