// Atmintine

// console.log - debugging

// kintamieji
// let ir const deklaravimas

// narsykles funkcijos
// prompt, alert

// duomenu tipai
// string, number, boolean, null, underfined

// operatoriai
// ==, +, -, *, /, >, <, **, !==, >=, <=, %

// if () {}, else if () {}, else {}

// funkcion

//  funkcija pasiimti elementa
const element = document.querySelector(".query")

elemento parametrai
element.innerText
element.className

let birthdate - 1995;
let thisyear - 2022;

let sakinys = thisyear - birthdate

alert{yourage};

alertas su vardu prideta prie pavardes

let firstname = "Artur";
let lastname = "Andrejev";

let name = `${firstname} ${lastname}`;

alert(name);

let x = 0.01
let tipas = typeof x;

console.log(tipas);

let svoris = prompt ("Koks jusu svoris?");
let svorisKg = Number(svoris);

console.log(svorisKg, typeof svorisKg);

let svoris = prompt("Koks jusu svoris? (kg)");
svoris = Number(svoris);

let ugis = Number(prompt("Koks jusu ugis? (cm)"));

const daugiklis = 10_000;

const BMI = (svoris / ugis ** 2) * daugiklis;

alert(`Jusu BMI: ${BMI}`);

const currentHours = Number(prompt("kiek dabar valandu?"))
const currentMinutes = Number(prompt("kiek dabar minuciu?"))

const shouldReduceHour = currentMinutes > 0;

const additionalHour = Number(shouldReduceHour);

const isNotTooLate = Number(currentHour < 18);

const hourDifference = (18 - currentHours - additionalHour) * isNotTooLate;
const minuteDifference = (60 - currentMinutes) * additionalHour * isNotTooLate;

alert(`Liko: ${hourDifference} val. ${minuteDifference} min.`);

const metai = prompt("Kurie dabar metai?");

if (metai === "2022") {
    alert("Tu teisus!");
    let x = 0;
    console.log(x);
} else {
    alert("Tu neteisus!");
    x = 1;
}

console.log(x);