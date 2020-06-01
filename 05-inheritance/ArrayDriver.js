"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Shape_1 = require("./Shape");
var circle_1 = require("./circle");
var rectangle_1 = require("./rectangle");
var myShape = new Shape_1.Shape(10, 20);
var myCircle = new circle_1.Circle(10, 20, 5);
var myRectangle = new rectangle_1.Rectangle(0, 0, 10, 20);
var shapes = [];
shapes.push(myShape);
shapes.push(myCircle);
shapes.push(myRectangle);
for (var _i = 0, shapes_1 = shapes; _i < shapes_1.length; _i++) {
    var tempShape = shapes_1[_i];
    console.log(tempShape.getInfo());
}
