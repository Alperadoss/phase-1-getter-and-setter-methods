// Add your Circle class here
const piNum = Math.PI;

class Circle {
  constructor(radius) {
    this.radius = radius;
  }
  //diameter
  get diameter() {
    return this.radius * 2;
  }
  set diameter(diameter) {
    this.radius = diameter / 2;
  }
  //circumference
  get circumference() {
    return this.radius * 2 * piNum;
  }
  set circumference(circumference) {
    this.radius = circumference / (piNum * 2);
  }
  //area
  get area() {
    return piNum * (this.radius * this.radius);
  }
  set area(area) {
    this.radius = Math.sqrt(area / piNum);
  }
}
