import {Shape} from './Shape';
import {Circle} from './circle';
import {Rectangle} from './rectangle';

let myShape = new Shape(10,20);
let myCircle = new Circle(10,20,5);
let myRectangle = new Rectangle(0,0,10,20);

let shapes: Shape[] = [];

shapes.push(myShape);
shapes.push(myCircle);
shapes.push(myRectangle);

for(let tempShape of shapes){
    console.log(tempShape.getInfo());
}

