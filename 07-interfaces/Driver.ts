import {Coach} from './Coach';
import {CricketCoach } from './CricketCoach';
import { GolfCoach} from './GolfCoach';

let myCricCoach = new CricketCoach();
let myGolfCoach = new GolfCoach();

let coaches : Coach[] = [];

coaches.push(myCricCoach);
coaches.push(myGolfCoach);
for(let tempCoach of coaches){
    console.log(tempCoach.getDailyWorkOut());
}