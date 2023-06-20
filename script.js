'use strict';

// LECTURE: Functions
function describeCountry(country, population, capitalCity) {
    return `${country} has ${population} million people and its capital city is ${capitalCity}`;
}
const vietnam = describeCountry('Vietnam', '100', 'Ho Chi Minh');
const italy   = describeCountry('Italy', '60', 'Rome');
const france  = describeCountry('France', '68', 'Paris');
console.log(`${vietnam}\n${italy}\n${france}`);

// LECTURE: Function Declarations vs. Expressions
function percentageOfWorld1(population) {  // function declaration
    return Math.round((population / 7900) * 100 * 100) / 100;
}
let vietnamPopulationPct = percentageOfWorld1(100);
let italyPopulationPct   = percentageOfWorld1(60);
let francePopulationPct  = percentageOfWorld1(68);
console.log(`Vietnam: ${vietnamPopulationPct}%\nItaly: ${italyPopulationPct}%\nFrance: ${francePopulationPct}%`);

const percentageOfWorld2 = function(population) {  // function expression
    return Math.round((population / 7900) * 100 * 100) / 100;
}
vietnamPopulationPct = percentageOfWorld2(100);
italyPopulationPct   = percentageOfWorld2(60);
francePopulationPct  = percentageOfWorld2(68);
console.log(`Vietnam: ${vietnamPopulationPct}%\nItaly: ${italyPopulationPct}%\nFrance: ${francePopulationPct}%`);

// LECTURE: Arrow Functions
const percentageOfWorld3 = population => Math.round((population / 7900) * 100 * 100) / 100;
vietnamPopulationPct = percentageOfWorld3(100);
italyPopulationPct   = percentageOfWorld3(60);
francePopulationPct  = percentageOfWorld3(68);
console.log(`Vietnam: ${vietnamPopulationPct}%\nItaly: ${italyPopulationPct}%\nFrance: ${francePopulationPct}%`);

// LECTURE: Functions Calling Other Functions
const describePopulation = (country, population) => `${country} has ${population} million people, which is about ${percentageOfWorld1(population)}% of the world.`;
console.log(describePopulation('Vietnam', 100));
console.log(describePopulation('Italy', 60));
console.log(describePopulation('France', 68));

// LECTURE: Introduction to Arrays
const populations = [100, 60, 68, 83];  // vietnam, italy, france, germany
console.log(populations.length === 4);
const percentages = [percentageOfWorld1(populations[0]), percentageOfWorld1(populations[1]), percentageOfWorld1(populations[2]), percentageOfWorld1(populations[3])];
console.log(percentages);

// LECTURE: Basic Array Operations (Methods)
const neighbours = ['Cambodia', 'China', 'Lao'];
console.log(neighbours);
neighbours.push('Utopia');
console.log(neighbours);
neighbours.pop();
console.log(neighbours);
if (!neighbours.includes('Germany')) console.log('Probably not a central European country :D');
neighbours[0] = 'CAMBODIA';
console.log(neighbours);

// LECTURE: Introduction to Objects
const myCountry = {
    country     : 'Vietnam',
    capital     : 'Ho Chi Minh',
    language    : 'Vietnamese',
    population  : 100,
    neighbours  : ['Cambodia', 'China', 'Lao']
}

// LECTURE: Dot vs. Bracket Notation
console.log(`${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}.`);
myCountry.population += 2;
myCountry['population'] -= 2;
console.log(myCountry);

// LECTURE: Object Methods
myCountry.describe = function() {
    console.log(`${this.country} has ${this.population} million ${this.language}-speaking people, ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}.`)
};
myCountry.checkIsland = function() {
    this.isIsland = this.neighbours.length === 0;
}
myCountry.describe();
myCountry.checkIsland();
console.log(myCountry);

// LECTURE: Iteration: The for Loop
for (let voterID = 1; voterID <= 50; voterID++) {
    console.log(`Voter number ${voterID} is currently voting`);
}

// LECTURE: Looping Arrays, Breaking and Continuing
const percentages2 = [];
for (let i = 0; i < populations.length; i++) {
    percentages2.push(percentageOfWorld1(populations[i]));
}
console.log(percentages, percentages2);

// LECTURE: Looping Backwards and Loops in Loops
const listOfNeighbours = [['Canada', 'Mexico'], ['Spain'], ['Norway', 'Sweden', 'Russia']];
for (let i = 0; i < listOfNeighbours.length; i++) {
    for (let j = 0; j < listOfNeighbours[i].length; j++) {
        console.log(`Neighbour: ${listOfNeighbours[i][j]}`);
    }
}

// LECTURE: The while Loop
const percentages3 = [];
let i = 0;
while (i < populations.length) {
    percentages3.push(percentageOfWorld1(populations[i]));
    i++;
}
console.log(percentages, percentages3);

// Coding Challenge #1
const calcAverage   = (a, b, c) => (a + b + c) / 3;
let scoreDolphins = calcAverage(44, 23, 71);
let scoreKoalas   = calcAverage(65, 54, 49);
const checkWinner   = function (avgDolphins, avgKoalas) {
    if (avgDolphins >= 2 * avgKoalas) {
        console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
    } else if (avgKoalas >= 2 * avgDolphins) {
        console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
    } else {
        console.log('No team wins...');
    }
}
checkWinner(scoreDolphins, scoreKoalas);
scoreDolphins = calcAverage(85, 54, 41);
scoreKoalas   = calcAverage(23, 34, 27);
checkWinner(scoreDolphins, scoreKoalas);

// Coding Challenge #2
const calcTip = bill => bill * (bill >= 50 && bill <= 300 ? 0.15 : 0.2);
console.log(calcTip(100));
const bills = [125, 555, 44];
const tips  = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
console.log(bills, tips, total);

// Coding Challenge #3
const mark = {
    fullName: 'Mark Miller',
    mass    : 78,
    height  : 1.69,
    calcBMI : function() {
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    }
}
const john = {
    fullName: 'John Smith',
    mass    : 92,
    height  : 1.95,
    calcBMI : function() {
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    }
}
mark.calcBMI();
john.calcBMI();
if (mark.bmi > john.bmi) {
    console.log(`${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s (${john.bmi})!`);
} else if (john.bmi > mark.bmi) {
    console.log(`${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s (${mark.bmi})!`);
}

// Coding Challenge #4
const bills2  = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips2   = [];
const totals2 = [];
for (let i = 0; i < bills2.length; i++) {
    tips2[i]   = calcTip(bills2[i]);
    totals2[i] = tips2[i] + bills2[i];
}
console.log(bills2, tips2, totals2);
const calcAverage2 = function(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum / arr.length;
}
console.log(calcAverage2(totals2));
