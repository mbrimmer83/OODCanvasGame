class Player {
  constructor(xPosition, yPosition, dirX, dirY, speed) {
    this.xPosition = xPosition;
    this.yPosition = yPosition;
    this.dirX = dirX;
    this.dirY = dirY;
    this.speed = speed;
  }
  movementListners() {
    window.addEventListener('keydown', function(e) {
      console.log(this.xPosition);
      var key = e.keyCode;
      if (key === 37) { // left
        this.xPosition = 1;
        console.log("Left key is down");
      }
      if (key === 39) { // right
        this.xPosition = -1;
      }
      if (key === 38) { // up
        this.yPosition = 1;
      }
      if (key === 40) { // down
        this.yPosition = -1;
      }
    });
    window.addEventListener('keyup', function(e) {
      console.log("event listener added");
      var key = e.keyCode;
      if (key === 37) { // left
        this.xPosition = 0;
      }
      if (key === 39) { // right
        this.xPosition = 0;
      }
      if (key === 38) { // up
        this.yPosition = 0;
      }
      if (key === 40) { // down
        this.yPosition = 0;
      }
    });
    window.addEventListener('keydown', function(e) {
      var key = e.keyCode;
      if (key === 32) {
        this.fire();
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
    console.log("Fire");
  }
  playerImage() {
    playerImage = new Image();
    playerImage.src = this.imageUrl;
  }
}

var hero = new Player(200, 200, 0 , 0, 2);
console.log(hero);

var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
var heroImage = new Image();
heroImage.src = "images/hero.png";
hero.movementListners();

function main() {
  ctx.beginPath();
  hero.move();
  ctx.drawImage(heroImage, hero.dirX, hero.dirY, 25, 25);
  requestAnimationFrame(main);

}
main();
