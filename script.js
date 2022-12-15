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
// const element = document.querySelector(".query")

// elemento parametrai
// element.innerText
// element.className

// let birthdate - 1995;
// let thisyear - 2022;

// let sakinys = thisyear - birthdate

// alert{yourage};

// alertas su vardu prideta prie pavardes

// let firstname = "Artur";
// let lastname = "Andrejev";

// let name = `${firstname} ${lastname}`;

// alert(name);

// let x = 0.01
// let tipas = typeof x;

// console.log(tipas);

// let svoris = prompt ("Koks jusu svoris?");
// let svorisKg = Number(svoris);

// console.log(svorisKg, typeof svorisKg);

// let svoris = prompt("Koks jusu svoris? (kg)");
// svoris = Number(svoris);

// let ugis = Number(prompt("Koks jusu ugis? (cm)"));

// const daugiklis = 10_000;

// const BMI = (svoris / ugis ** 2) * daugiklis;

// alert(`Jusu BMI: ${BMI}`);

// const currentHours = Number(prompt("kiek dabar valandu?"))
// const currentMinutes = Number(prompt("kiek dabar minuciu?"))

// const shouldReduceHour = currentMinutes > 0;

// const additionalHour = Number(shouldReduceHour);

// const isNotTooLate = Number(currentHour < 18);

// const hourDifference = (18 - currentHours - additionalHour) * isNotTooLate;
// const minuteDifference = (60 - currentMinutes) * additionalHour * isNotTooLate;

// alert(`Liko: ${hourDifference} val. ${minuteDifference} min.`);

// const metai = prompt("Kurie dabar metai?");

// if (metai === "2022") {
//     alert("Tu teisus!");
//     let x = 0;
//     console.log(x);
// } else {
//     alert("Tu neteisus!");
//     x = 1;
// }

// console.log(x);

// const colour = prompt("Kokia spalva?(red,blue,yellow");
// cons model = prompt("Koks modelis?(rasykite metus)");
// const make = prompt("kokia marke?(ferrari, golfas)");
// const mileage = prompt("kokia rida?(kiek km nuvaziuota?");

// if (colour === "red") {
//     // yes
//     if (Number(model) > 2010) {
//         alert("Buy!");
//     } else if (mileage < 50000) {
//         alert ("Buy");
//     }
//     else {
//         alert("Don't buy!");
//     }
// } else {
//     //no
//     if (colour == "yellow") {
//         if (make === "ferrari") {
//             alert("Buy!");
//         }
//         else {
//             alert("Don't buy!");
//         }
//     } else {}
// }

// const svoris = Number(prompt("Koks Jusu svoris (kg?)"));
// const ugis = Number(prompt("Koks Jusu ugis (m)?"))**2;

// const KMI = svoris / ugisKv;

// if (KMI < 10.5) {
//     alert("Under wight");
// } else if (KMI < 30) {
//     alert("Normal");
// } else if (KMI < 30) {
//     alert("Overweight");
// } else if (KMI < 35) {
//     alert("Obesity (Class I)");
// } else if

// const gender = prompt("Kokia jusu lytis? ( vyras . mteris)");
// const weight = Number(prompt("Koks jusu svoris? ( kg )"));
// const height = Number(prompt("Koks jusu ugis? ( cm )"));
// const age = Number(prompt("Koks jusu amzius? ( metais )"));
// const activityLevel = Number(prompt("Koks jusu aktyvumo lygis? ( 0 , 1 , 2 , 3 , 4)"));

// let BMR;

// if (gender === "vyras") {
//     BMR = (66.5 + (13.75 * weight) + (5.003 + height) - (6.75 * age))
//     console.log("vyras")
// }
// else {
//     BMR = (655.1 + (9.563 * weight) + (1.850 + height) - (4.676 * age))
//     console.log("moteris")

// }
// console.log(BMR);

// if (activityLevel === 0) {
//     alert(BMR * 1.2)
// }
// else if (activityLevel === 1) {
//     alert(BMR = 1.375)
// }
// else if (activityLevel === 2) {
//     alert(BMR = 1.55)
// }
// else if (activityLevel === 3) {
//     alert(BMR = 1.725)
// }
// else if (activityLevel === 4) {
//     alert(BMR = 1.9)
// }

// const answer = prompt("Kazkoks klausimas (y/n")

// const cssSelector = "#some-element";
// const element = document.querySelector(cssSelector);

// element.className = "element-style";
// element.className += "active";
// console.log(element.className);

// const heading = document.querySelector("#my-element > h1");
// const paragraph = document.querySelector("#my-element > p");

// console.log(heading);
// console.log(paragraph);

// const heading = document.querySelector("#my-element h1");

// let text = heading.innerText;
// heading.innerText = "Ivyko klaida!!";
// console.log(heading.innerText);

// const button = document.querySelector("#my-button");

// let i = 0;

// function yourFunction() {
//     i++;
//     button.innerText = i;
// }

// const DROPDOWN_ACTIVE = "dropdown-menu active";
// const DROPDOWN_HIDDEN = "dropdown-menu";

// const dropdownElement = document.querySelector(`#dropdown .${DROPDOWN_HIDDEN}`);

// function toggle() {
//     console.log(dropdownElement.innerText);
//     if (dropdownElement.className === DORPDOWN_ACTIVE) {
//     dropdownElement.className = DROPDOWN_HIDDEN;
//     } else {
//         dropdownElement.className = DORPDOWN_ACTIVE;
//     }

// }

// const bodyElement = document.querySelector("body");

// function changeMode() {
//     if (className === "light") {
//         bodyElement.className = "dark";
//     } else {
//         bodyElement.className = "light";
//     }
// }

// 1. salyga - jeigu sveisus fonas, tada fonas pasikeicia i tamsu
// sviesus fonas yra class-"light"
// kad pasikeistu i tamsu body klase turi pasikeisti i class="dark"

// 2. salyga - jeigu tamsus fonas, pasikeicia i sviesu
// tamsus fonas yra class="dark"
//  Kad pasikeistu i sviesu body klase turi pasikeisti

// const height = 180;
// const weight = 90;
// // kadangi mes kai kurias reikšmes gauname iš inputų, jos gali būti neteisingos, dėl to turime jas patikrinti.
// // BOOLEAN
// const isHeightValid = Number(height) > 0; // tikra verte // true jei geras skaičius ir false jei 0 arba NaN
// const isWeightValid = Number(weight) > 0; // tikra verte // true jei geras skaičius ir false jei 0 arba NaN
// if (isHeightValid) {
//  if (isWeightValid) {
//  // A.
//  // mūsų success path
//  } else {
//  // B.
//  // svoris nevalidus
//  }
// } else {
//  // C.
//  // aukštis nevalidus
//  if (!isWeightValid) {
//  // B.
//  // svoris nevalidus
//  }
// }
// // Kad naudotis AND (&&) operatorium, abidvi sąlygos turi būti įgyvendintos.
// if (isHeightValid && isWeightValid) {
//  // A.
//  // Success path
//  console.log(true && true);
// } else {
//  if (!isHeightValid) {
//  // Neteisingas Svoris
//  // B.
//  // Klaida prie svorio inputo
//  }
//  // dėl ko čia nėra else?
//  if (!isWeightValid) {
//  // Neteisingas aukštis
//  // C.
//  // Klaida prie aukščio inputo
//  }
// }
// // // Jei bent viena sąlyga yra įgyvendinta, jis veiks.
// if (!isHeightValid || !isWeightValid) {
//  if (!isHeightValid) {
//  // Neteisingas Svoris
//  // B.
//  // Klaida prie svorio inputo
//  }
//  // dėl ko čia nėra else?
//  if (!isWeightValid) {
//  // Neteisingas aukštis
//  // C.
//  // Klaida prie aukščio inputo
//  }
// } else {
//  // A.
//  // Success path
//  console.log(true && true);
// }
// // _ !isHeightValid || !isWeightValid yra priešingas isHeightValid && isWeightValid
// console.log(
//  !(isHeightValid && isWeightValid) === !isHeightValid || !isWeightValid
// );
// // 2 operatoriai:
// // and - && IR
// // or - || ARBA

// 2. Sukurti BMR kalkuliatorių
// For men: BMR = 66.5 + (13.75 * weight in kg) + (5.003 * height in cm) - (6.75 * age)
// For women: BMR = 655.1 + (9.563 * weight in kg) + (1.850 * height in cm) - (4.676 * age)

// To determine your total daily calorie needs, multiply your BMR by the appropriate activity factor, as follows:
// Sedentary (little or no exercise): calories = BMR × 1.2;
// Lightly active (light exercise/sports 1-3 days/week): calories = BMR × 1.375;
// Moderately active (moderate exercise/sports 3-5 days/week): calories = BMR × 1.55;
// Very active (hard exercise/sports 6-7 days a week): calories = BMR × 1.725; and
// If you are extra active (very hard exercise/sports & a physical job): calories = BMR × 1.9.
// // suvedami atsakymai ar esam vyras/moteris, svoris aukštis ir amžius.
// // atsakomas koks mūsų aktyvumo lygis
// // atsakomas kiek kalorijų mums reikia per dieną

// function calculateBMR() {
//   // Reikia duomenu Ugis, Svoris, Amzius, Lytis, Aktyvumas.
//   // Reikia pasiimti iboutus ir issaugoti juos kaip kintamuosius
//   // documento
//   // document.querySelector("#height");
//   const heightEl = document.querySelector("#height");
//   console.log(heightEl);

//   const weightEl = document.querySelector("#weight");
//   console.log(weightEl);

//   const ageEl = document.querySelector("#age");
//   console.log(ageEl);

//   const height = Number(heightEl.value);
//   console.log(height);

//   const weight = Number(weightEl.value);
//   console.log(weight);

//   const age = Number(ageEl.value);
//   console.log(age);

//   //   console.log(document.querySelector('input[name="gender"]:checked'));
//   //   const gender = document.querySelector('input[name="gender"]:checked').value;

//   const genderEl = document.querySelector('input[name="gender"]:checked');

//   let gender;

//   if (genderEl) {
//     gender = genderEl.value;
//     console.log(gender);
//   }

//   const activityEl = document.querySelector('input[name="activity"]:checked');
//   let activity;

//   if (activityEl) {
//     // alert("iveskite aktyvuma");
//     activity = activityEl.value;
//     console.log(activity);
//   }

//   const isHeightValid = height > 0;
//   const isWeightValid = weight > 0;
//   const isAgeValid = age > 0;
//   const isGenderValid = "man" === gender || "woman" === gender;

//   console.log(isGenderValid);

//   const isActivityValid = "sedentary" === activity || "light" === activity || "moderately" === activity;
//   console.log(isActivityValid)
// }

// 1. Kažkoks "display"
// 2. Yra 2 rūšių mygtukai: skaičiai ir operatoriai
/**
 *
 * 1. Vartotojas įveda skaičių
 *
 * 2. (optional) Vartotojas gali įvesti ir antrą ir trečią skaičių,
 * jie bus sudedami kaip stringai.
 * T.y. paspaudus "2" ir "5" ir "9" gausime "259".
 *
 * 3. Vartotojas paspaudžia operatorių ir kažkur išsaugoma vertė,
 * o "display" įvestas skaičius neberodomas.
 *
 * 4. Įvedamas kitas skaičius, gali būti daugiau negu vienas,
 * t.y. panašiai kaip antram žingsnyje.
 *
 * 5. Paspaudžiama lygu, kažkur išsaugoma antroji vertė,
 * įvyksta skaičiavimas ir ir rezultatas parodomas "display" vietoje antrosios įvesties.
 *
 *
 * Užduotis: Darom vieną skaičiaus mygtuką, pvz.: 2, daugybos operatorių ir lygu.
 *
 */

// const displayElement = document.querySelector("#display");
// let temporaryValue;
// let operationType;

// function call1() {
//   const value = 1;
//   displayElement.innerText += value;
// }

// function call2() {
//   const value = 2;
//   displayElement.innerText += value;
// }

// function call3() {
//   const value = 3;
//   displayElement.innerText += value;
// }

// function call4() {
//   const value = 4;
//   displayElement.innerText += value;
// }

// function call5() {
//   const value = 5;
//   displayElement.innerText += value;
// }

// function call6() {
//   const value = 6;
//   displayElement.innerText += value;
// }

// function call7() {
//   const value = 7;
//   displayElement.innerText += value;
// }

// function call8() {
//   const value = 8;
//   displayElement.innerText += value;
// }

// function call9() {
//   const value = 9;
//   displayElement.innerText += value;
// }

// function call0() {
//   const value = 0;
//   displayElement.innerText += value;
// }

// function multiply() {
//   if (
//     typeof temporaryValue === "number" &&
//     typeof operationType !== "underfined"
//   ) {
//     let result;

//     if (operationType === "multiply") {
//       result = temporaryValue * Number(displayElement.innerText);
//     } else if (operationType === "divide") {
//       result = temporaryValue / Number(displayElement.innerText);
//       console.log(displayElement.innerText, temporaryValue);
//     } else if (operationType === "add") {
//       result = temporaryValue + Number(displayElement.innerText);
//     } else if (operationType === "subtract") {
//       result = temporaryValue - Number(displayElement.innerText);
//     }
//     temporaryValue = result;
//   } else {
//     temporaryValue = Number(displayElement.innerText);
//   }
//   displayElement.innerText = "";
//   operationType = "multiply";
// }

// function divide() {
//   temporaryValue = Number(displayElement.innerText);
//   displayElement.innerText = "";
//   operationType = "divide";
// }

// function add() {
//   temporaryValue = Number(displayElement.innerText);
//   displayElement.innerText = "";
//   operationType = "add";
// }

// function subtract() {
//   temporaryValue = Number(displayElement.innerText);
//   displayElement.innerText = "";
//   operationType = "subtract";
// }

// function calculateResult() {
//   let result;

//   if (operationType === "multiply") {
//     result = temporaryValue * Number(displayElement.innerText);
//   } else if (operationType === "divide") {
//     result = temporaryValue / Number(displayElement.innerText);
//     console.log(displayElement.innerText, temporaryValue);
//   } else if (operationType === "add") {
//     result = temporaryValue + Number(displayElement.innerText);
//   } else if (operationType === "subtract") {
//     result = temporaryValue - Number(displayElement.innerText);
//   }

//   displayElement.innerText = result;
//   temporaryValue = undefined;
//   operationType = undefined;
// }

// function clearResult() {
//   console.log("text");
//   displayElement.innerText = "";
//   temporaryValue = undefined;
//   operationType = undefined;
// }

/**
 *
 * (2 x 22) x 2 = 88
 *
 * 1. (spaudžiam ant skaičiaus mygtuko) Išsaugom skaičių display.innerText'e.
 *    operationType === undefined
 *    innerText === "2"
 *    temporaryValue === undefined
 *
 * 2. Išsaugom vertę temporaryValue ir nustatom operacijos tipą.
 *    operationType === "multiply"
 *    innerText === ""
 *    temporaryValue === 2
 *
 * 3. Įvedam 22, atsivaizduoja display
 *    operationType === "multiply"
 *    innerText === "22"
 *    temporaryValue === 2
 *
 * 4. Kai paspaudžiam x operatorių antrą kartą, mes turime apskaičiuoti seną vertę.
 *    Atliekam skaičiavimus ir išsaugom juos į temporaryValue.
 *
 *    Patikrinam ar yra jau egzistuojantis operationType (IF)
 *    Jei egzistuoja:
 *      Skaičuojam rezultatą
 *
 *    operationType === "multiply"
 *    innerText === ""
 *    temporaryValue === 44
 *
 * 5. Įvedam 2 ir jis atsivaizduoja inner text'e
 *    operationType === "multiply"
 *    innerText === "2"
 *    temporaryValue === 44
 *
 * 6. suveikia calculateResult()
 */


// new Date().toLocaleString();







// Acceptance Criteria:
// 1. Show audit log information on the left hand side. It should be empty by default
// 2. Show 'Help' button on the right bottom corner
//     a. On button click it should open form dialog
//     b. Form dialog should be animated on open
// 3. Create form dialog with 4 inputs:
//     a. First name (required)
//     b. Last name (required)
//     c. Email (required and should be valid email)
//     d. Complaint (required)
// 4. Form should be validated before submitting it
//     a. If form is not valid, then display generic error text and highlight fields that are invalid
// 5. If form is valid then submit it
//     a. clear all, if any, errors, clear input values and close dialog
//     b. fill in audit info fields with user input



// const helpBtn = document.querySelector(".help-btn")
// const helpConst = document.querySelector(".modal")
// const iksiukas = document.querySelector(".exit-btn")
// const errorPop = document.querySelector(".error-message")





// helpBtn.addEventListener("click",openModal)
// function openModal() {
//     helpConst.style.display = "block"    
// }


// iksiukas.addEventListener("click",closeModal)
// function closeModal() {
//     helpConst.style.display = "none"
// }











// document.querySelector("#my-input").addEventListener("input", function (event) {
//     console.log(event.target.value);
// });





// const result = pureAdd(2,3)
// console.log(result);

// function Add(a, b) {
//     return a + b;
// }

// function getInputValueNumber(input) {
//     return Number(input.value);
// }


const addExpense = document.querySelector("#add-expense")
const budgetModal = document.querySelector(".modal")

