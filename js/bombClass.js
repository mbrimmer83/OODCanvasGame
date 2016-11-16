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
    this.t = object.t;
    this.controlPoints = {}
    this.xt;
    this.yt;
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
    // Find the vertex angle
    var hypotonuseLength =  Math.sqrt(((length / 2) * (length / 2)) + ((length / 8) * (length / 8)));
    // console.log(hypotonuseLength);
    var vertexAngleRadians = Math.asin((length / 2) / hypotonuseLength);
    var vertexAngle =  self.toDegrees(vertexAngleRadians)
    // console.log("Vertex angle: ", vertexAngle);
    // Find Theta angle
    var theta = 90 - vertexAngle;
    // console.log("Theta: ", theta);
    // Find the vertex coordinate points
    var vertexNumberIntermediate = Math.tan(self.toRadians(theta));
    // console.log(vertexNumberIntermediate);
    this.vertexPointX =  midpointX + (vertexNumberIntermediate * (-(this.startY - midpointY)));
    this.vertexPointY =  midpointY + (vertexNumberIntermediate * (-(this.startX - midpointX)));
    // Find endpoint of tangent to the curve
    var endpointTanX = this.mouseCoords.x + (vertexNumberIntermediate * (-(midpointX - this.mouseCoords.x)));
    var endpointTanY = this.mouseCoords.y + (vertexNumberIntermediate * (-(midpointY - this.mouseCoords.y)));
    // Find starting point of tangent to the curve
    var startPointTanX = 2 * this.vertexPointX - endpointTanX;
    var startPointTanY = 2 * this.vertexPointY - endpointTanY;
    // console.log(startPointTanX, startPointTanY);
    // Find the first control point
    this.controlPoints['firstControlPointX'] = (midpointX - (1 - .75) * startPointTanX) / .75;
    this.controlPoints['firstControlPointY'] = (midpointY - (1 - .75) * startPointTanY) / .75;
    // Find the second control point
    this.controlPoints['secondControlPointX'] = (endpointTanX - (1 - .25) * midpointX) / .25;
    this.controlPoints['secondControlPointY'] = (endpointTanY - (1 - .25) * midpointY) / .25;
    console.log(this.mouseCoords.x, this.mouseCoords.y);
    console.log(this.controlPoints);
  }

  updateBombPosition() {
    var t = this.t;
    this.t += this.speed;
    // Calculate the six Bezier coefficients
    var cx = 3 * (this.controlPoints.firstControlPointX - this.startX);
    var bx = 3 * (this.controlPoints.secondControlPointX - this.controlPoints.firstControlPointX) - cx;
    var ax = this.mouseCoords.x - this.startX - cx - bx;
    var cy = 3 * (this.controlPoints.firstControlPointY - this.startY);
    var by = 3 * (this.controlPoints.secondControlPointY - this.controlPoints.firstControlPointY) - cy;
    var ay = this.mouseCoords.y - this.startY - cy - by;
    // Update the position of the bomb
    this.xt = ax * (t * t * t )  + bx * (t * t )  + cx * t   + this.startX;
    this.yt = ay * (t * t * t )  + by * (t * t )  + cy * t   + this.startY;
  }

}
