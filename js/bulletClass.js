class Bullet {
  constructor(object) {
    this.startX = object.playerX;
    this.startY = object.playerY;
    this.currentPositionX = this.startX;
    this.currentPositionY = this.startY;
    this.speed = object.speed;
    this.mouseCoords = object.mouseCoords
    this.incrementX;
    this.incrementY;
    this.createBullet();
  }
  createBullet() {
    var vectorY = (this.mouseCoords.y - this.startY);
    var vectorX = (this.mouseCoords.x - this.startX);
    var length = Math.sqrt((vectorX * vectorX) + (vectorY * vectorY));
    this.incrementX = (vectorX/length) * this.speed;
    this.incrementY = (vectorY/length) * this.speed;
  }
  updateBulletPosition() {
    if (this.currentPositionX >= 0 && this.currentPositionX <= 1200 && this.currentPositionY >= 0 && this.currentPositionY <= 800 ) {
      this.currentPositionX += this.incrementX;
      this.currentPositionY += this.incrementY;
    }else {
      return false;
    }

  }
}
