class Bomb {
  constructor(object) {
    this.startX = object.playerX;
    this.startY = object.playerY;
    this.currentPositionX = this.startX;
    this.currentPositionY = this.startY;
    this.speed = object.speed;
    this.mouseCoords = object.mouseCoords
    this.incrementX;
    this.incrementY;
  }
}
