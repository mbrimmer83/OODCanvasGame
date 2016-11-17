class Bomb {
  constructor(object) {
    this.startX = object.playerX;
    this.startY = object.playerY;
    this.currentPositionX = this.startX;
    this.currentPositionY = this.startY;
    this.speed = object.speed;
    this.mouseCoords = object.mouseCoords;
    this.vertexPointX;
    this.vertexPointY;
    this.t = object.t;
    this.controlPoints = {};
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
    var self = this;
    // Find the length of the line
    var vectorY = (this.mouseCoords.y - this.startY);
    var vectorX = (this.mouseCoords.x - this.startX);
    var length = Math.sqrt((vectorX * vectorX) + (vectorY * vectorY));
    // Find the midpoint of the line
    var midpointX = (this.mouseCoords.x + this.startX) / 2;
    var midpointY = (this.mouseCoords.y + this.startY) / 2;
    // Find the quarter point of the line
    var quarterPointX = ((0.25 * this.mouseCoords.x) + (0.75 * this.startX));
    var quarterPointY = ((0.25 * this.mouseCoords.y) + (0.75 * this.startY));
    // Find the three quarter point of the line
    var threeQuarterPointX = ((0.75 * this.mouseCoords.x) + (0.25 * this.startX));
    var threeQuarterPointY = ((0.75 * this.mouseCoords.y) + (0.25 * this.startY));
    // Find the vertex angle
    var hypotonuseLength =  Math.sqrt(((length / 2) * (length / 2)) + ((length / 8) * (length / 8)));
    var vertexAngleRadians = Math.asin((length / 2) / hypotonuseLength);
    var vertexAngle =  self.toDegrees(vertexAngleRadians)
    // Find Theta angle
    var theta = 90 - vertexAngle;
    // Find the vertex coordinate points
    var vertexNumberIntermediate = Math.tan(self.toRadians(theta));
    this.vertexPointX =  midpointX + (vertexNumberIntermediate * (-(this.startY - midpointY)));
    this.vertexPointY =  midpointY + (vertexNumberIntermediate * (-(this.startX - midpointX)));
    // Find the quarter vertex point
    var quarterHypotonuseLength = Math.sqrt(((length / 4) * (length / 4)) + ((length / 8) * (length / 8)));
    var quarterVertexAngleRadians = Math.asin((length / 4) / quarterHypotonuseLength);
    var quarterVertexAngle = self.toDegrees(quarterVertexAngleRadians);
    var quarterTheta = 90 - quarterVertexAngle;
    var quarterNumberIntermediate = Math.tan(self.toRadians(quarterTheta));
    this.quarterVertexPointX =  quarterPointX + (quarterNumberIntermediate * (-(this.startY - quarterPointY)));
    this.quarterVertexPointY =  quarterPointY + (quarterNumberIntermediate * (-(this.startX - quarterPointX)));
    // Find the three quarter vertex point
    this.threeQuarterVertexPointX = threeQuarterPointX + (quarterNumberIntermediate * (-(midpointY - threeQuarterPointY)));
    this.threeQuarterVertexPointY = threeQuarterPointY + (quarterNumberIntermediate * (-(midpointX - threeQuarterPointX)));
    // Find endpoint of tangent to the curve
    var endpointTanX = this.mouseCoords.x + (vertexNumberIntermediate * (-(midpointX - this.mouseCoords.x)));
    var endpointTanY = this.mouseCoords.y + (vertexNumberIntermediate * (-(midpointY - this.mouseCoords.y)));
    // Find starting point of tangent to the curve
    var startPointTanX = 2 * this.vertexPointX - endpointTanX;
    // Find the first control point
    this.controlPoints['firstControlPointX'] = this.quarterVertexPointX;
    this.controlPoints['firstControlPointY'] = this.quarterVertexPointY;
    // Find the second control point
    this.controlPoints['secondControlPointX'] = this.threeQuarterVertexPointX;
    this.controlPoints['secondControlPointY'] = this.threeQuarterVertexPointY;
  }

  updateBombPosition() {
    var t = this.t;
    // Calculate the six Bezier coefficients
    var cx = 3 * (this.controlPoints.firstControlPointX - this.startX);
    var bx = 3 * (this.controlPoints.secondControlPointX - this.controlPoints.firstControlPointX) - cx;
    var ax = this.mouseCoords.x - this.startX - cx - bx;
    var cy = 3 * (this.controlPoints.firstControlPointY - this.startY);
    var by = 3 * (this.controlPoints.secondControlPointY - this.controlPoints.firstControlPointY) - cy;
    var ay = this.mouseCoords.y - this.startY - cy - by;
    this.t += this.speed;
    if (this.t > 1) {
         this.t = 1;
      }
    if (this.xt === this.mouseCoords.x && this.yt === this.mouseCoords.y) {
      return false;
    } else {
      // Update the position of the bomb
      this.xt = ax * (t * t * t )  + bx * (t * t )  + cx * t   + this.startX;
      this.yt = ay * (t * t * t )  + by * (t * t )  + cy * t   + this.startY;
    }

  }

}
