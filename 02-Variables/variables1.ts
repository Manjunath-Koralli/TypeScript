//not to genearte js file if error 
//tsc -noEmitOnError filename.ts

//let <variable_name>: <data_type> = value;

let found:boolean = true;
let grade:number = 8.3;
let firstName:string = "Manjunath";
let lastName:string = "Koralli";

console.log(found);
console.log("Grade is " + grade);
console.log("Hi " + firstName + " " + lastName);

//for long string with lot of concatenation ` ${}  ${}` -> known template strings
//template string
console.log(`Hi ${firstName} ${lastName}`);