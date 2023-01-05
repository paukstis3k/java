const firstModal = document.querySelector(".first-modal");
const lastNameInput = document.querySelector("#first-name");
const emailNameInput = document.querySelector("#email-name");
const continueBtn = document.querySelector("#continue-button");
const backBtn = document.querySelector("#back-button");

const step0Content = document.querySelector(".step-0");
const step1Content = document.querySelector(".step-1");
const step2Content = document.querySelector(".step-2");
const step3Content = document.querySelector(".step-3");
const hiddenCLass = document.querySelector(".hidden");
const primaryAddressInput = document.querySelector();

const result = {
    step: 0,
    user: {},
  };

continueBtn.addEventListener("click", onContinue);

function onContinue(event) {
  event.preventDefault();
  if (result.step === 0) {
    if (
      !firstNameInput.value ||
      !emailNameInput.value ||
      !emailNameInput.validity.typeMismatch
    ) {
      if (!firstNameInput.value) {
        applyErrorToField(firstNameInput);
      }
      if (!lastNameInput.value) {
        applyErrorToField(lastNameInput);
      }
      if (!email.value) {
        applyErrorToField(email);
      }
    } else {
      result.user.firstName = firstNameInput.value;
      result.user.lastName = lastNameInput.value;
      result.user.email = emailInput.value;
      result.step += 1;
      displayWizardStep.WizardStep(1);
    }
  }
}

function applyErrorToField(input) {
  input.classList.add("error");
}

function displayWizardStep(step) {
  if (step === 0) {
    step0Content.classList.add(hiddenCLass);
    step1Content.classList.add(hiddenCLass);
    step2Content.classList.add(hiddenCLass);
    step3Content.classList.add(hiddenCLass);
    backBtn.classListList.remove(hiddenCLass);
  }
  if (step === 1) {
    step0Content.classList.add(hiddenCLass);
    step1Content.classList.add(hiddenCLass);
    step2Content.classList.add(hiddenCLass);
    step3Content.classList.add(hiddenCLass);
    backBtn.classListList.remove(hiddenCLass);
  }
  if (step === 2) {
    step0Content.classList.add(hiddenCLass);
    step1Content.classList.add(hiddenCLass);
    step2Content.classList.add(hiddenCLass);
    step3Content.classList.add(hiddenCLass);
    backBtn.classListList.remove(hiddenCLass);
  }
  if (step === 3) {
    step0Content.classList.add(hiddenCLass);
    step1Content.classList.add(hiddenCLass);
    step2Content.classList.add(hiddenCLass);
    step3Content.classList.add(hiddenCLass);
    backBtn.classListList.remove(hiddenCLass);
  }
  if (step === 4) {
    step0Content.classList.add(hiddenCLass);
    step1Content.classList.add(hiddenCLass);
    step2Content.classList.add(hiddenCLass);
    step3Content.classList.add(hiddenCLass);
    backBtn.classListList.remove(hiddenCLass);
  }
}