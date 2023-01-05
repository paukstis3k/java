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

const helpBtn = document.querySelector(".help-btn")
const helpConst = document.querySelector(".modal")
const iksiukas = document.querySelector(".exit-btn")
const errorPop = document.querySelector(".error-message")
const addExpense = document.querySelector("#add-expense")
const budgetModal = document.querySelector(".modal")

helpBtn.addEventListener("click",openModal)
function openModal() {
    helpConst.style.display = "block"
}

iksiukas.addEventListener("click",closeModal)
function closeModal() {
    helpConst.style.display = "none"
}

document.querySelector("#my-input").addEventListener("input", function (event) {
    console.log(event.target.value);
});

const result = pureAdd(2,3)
console.log(result);

function Add(a, b) {
    return a + b;
}

function getInputValueNumber(input) {
    return Number(input.value);
}