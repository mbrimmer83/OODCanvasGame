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
