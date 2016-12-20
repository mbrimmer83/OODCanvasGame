'use-strict'

class RotateObject {
  constructor(object){
    this.message = object.message;
  }
  imageRotation(position) {

  }

  setMessage(string) {
    this.message = string;
  }

  printMessage() {
    console.log(message);
  }
}
module.exports = new RotateObject({message: 'Hello from the rotation class!'})
