import {Shape} from './Shape';
import {Circle} from './circle';
import {Rectangle} from './rectangle';

let myShape = new Shape(10,20);
console.log(myShape.getInfo());

let myCircle = new Circle(10,20,5);
console.log(myCircle.getInfo());

let myRectangle = new Rectangle(0,0,10,20);
console.log(myRectangle.getInfo());