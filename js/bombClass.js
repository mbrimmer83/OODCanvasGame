class Bomb {
  constructor(object) {
    this.startX = object.playerX;
    this.startY = object.playerY;
    this.currentPositionX = this.startX;
    this.currentPositionY = this.startY;
    this.speed = object.speed;
    this.mouseCoords = object.mouseCoords
    this.vertexPointX;
    this.vertexPointY;
    this.createBomb();
  }
  toDegrees(angle) {
    return angle * (180 / Math.PI);
  }

  toRadians(angle) {
    return angle * (Math.PI / 180);
  }

  createBomb() {
    var self = this
    // Find the length of the line
    var vectorY = (this.mouseCoords.y - this.startY);
    var vectorX = (this.mouseCoords.x - this.startX);
    var length = Math.sqrt((vectorX * vectorX) + (vectorY * vectorY));
    // Find the midpoint of the line
    var midpointX = (this.mouseCoords.x + this.startX) / 2;
    var midpointY = (this.mouseCoords.y + this.startY) / 2;
    console.log("Midpoint: ", midpointX, midpointY);
    // Find the vertex angle
    var hypotonuseLength =  Math.sqrt(((length / 2) * (length / 2)) + ((length / 8) * (length / 8)));
    console.log(hypotonuseLength);
    var vertexAngleRadians = Math.asin((length / 2) / hypotonuseLength);
    var vertexAngle =  self.toDegrees(vertexAngleRadians)
    console.log("Vertex angle: ", vertexAngle);
    // Find Theta angle
    var theta = 90 - vertexAngle;
    console.log("Theta: ", theta);
    // Find the vertex coordinate points
    var vertexNumberIntermediate = Math.tan(self.toRadians(theta));
    console.log(vertexNumberIntermediate);
    this.vertexPointX =  midpointX + (vertexNumberIntermediate * (-(this.startY - midpointY)));
    this.vertexPointY =  midpointY + (vertexNumberIntermediate * (-(this.startX - midpointX)));
    console.log("Vertex: ", this.vertexPointX, this.vertexPointY);
  }

  updateBombPosition() {

  }

}
