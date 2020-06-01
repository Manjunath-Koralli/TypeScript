let sportsTwo: string[] = ["Golf","Cricket","Tennis","Swimming"];

//simplified for loop

for(let tempSport of sportsTwo){
    console.log(tempSport);
}
sportsTwo.push("Base Ball");
sportsTwo.push("Foot ball");
for(let tempSport of sportsTwo){
    console.log(tempSport);
}