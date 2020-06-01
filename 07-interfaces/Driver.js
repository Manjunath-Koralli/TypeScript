"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CricketCoach_1 = require("./CricketCoach");
var GolfCoach_1 = require("./GolfCoach");
var myCricCoach = new CricketCoach_1.CricketCoach();
var myGolfCoach = new GolfCoach_1.GolfCoach();
var coaches = [];
coaches.push(myCricCoach);
coaches.push(myGolfCoach);
for (var _i = 0, coaches_1 = coaches; _i < coaches_1.length; _i++) {
    var tempCoach = coaches_1[_i];
    console.log(tempCoach.getDailyWorkOut());
    console.log();
}
