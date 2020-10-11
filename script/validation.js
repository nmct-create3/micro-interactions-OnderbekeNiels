let email = {},
  password = {},
  signInButton;

const getDomElements = function () {
  email.formField = document.querySelector(".js-email-form-field");
  email.input = document.querySelector(".js-email-input");
  email.label = document.querySelector(".js-email-label");

  password.formField = document.querySelector(".js-password-form-field");
  password.input = document.querySelector(".js-password-input");
  password.label = document.querySelector(".js-password-label");

  signInButton = document.querySelector(".js-sign-in-button");

  enableListeners();

  /*console.log(email);
  console.log(password);
  console.log(signInButton);*/
};

const enableListeners = function () {
  console.log("i listen");

  email.input.addEventListener("blur", checkEmailAddress);

  password.input.addEventListener("blur", checkPassword);

  signInButton.addEventListener("click", function (event) {
    console.log("click");
    event.preventDefault();

    if(checkEmailAddress() && checkPassword()){
        console.log(email.input.value);
        console.log(password.input.value);
    }
    
  });
};

const checkEmailAddress = function () {
  const classObject = email.input;
  const formField = email.formField;
  if (isEmpty(classObject.value)) {
    console.log("This field is required");
    addError(formField);
    classObject.addEventListener("input", doubleCheckEmailAddress);
    return false;
  } else if (!isValidEmailAddress(classObject.value)) {
    console.log("Invalid eMail address");
    addError(formField);
    classObject.addEventListener("input", doubleCheckEmailAddress);
    return false;
  }
  else{
      return true;
  }
};

const checkPassword = function () {
  const classObject = password.input;
  const formField = password.formField;
  if (isEmpty(classObject.value)) {
    console.log("This field is required");
    addError(formField);
    classObject.addEventListener("input", doubleCheckPassword);
    return false;
  } else if (!isValidPassword(classObject.value)) {
    console.log("Invalid password");
    addError(formField);
    classObject.addEventListener("input", doubleCheckPassword);
    return false;
  }
  else{
    return true;
}
};

const doubleCheckEmailAddress = function () {
  const classObject = email.input;
  const formField = email.formField;
  if (isEmpty(classObject.value)) {
    console.log("This field is required");
  } else if (!isValidEmailAddress(classObject.value)) {
    console.log("Invalid eMail address");
  } else {
    removeError(formField);
    classObject.removeEventListener("input", doubleCheckEmailAddress);
  }
};

const doubleCheckPassword = function () {
  const classObject = password.input;
  const formField = password.formField;
  if (isEmpty(classObject.value)) {
    console.log("This field is required");
  } else if (!isValidPassword(classObject.value)) {
    console.log("Invalid password");
  } else {
    removeError(formField);
    classObject.removeEventListener("input", doubleCheckPassword);
  }
};

const isValidEmailAddress = function (emailAddress) {
  // Basis manier om e-mailadres te checken.
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailAddress);
};

const isEmpty = function (fieldValue) {
  return !fieldValue || !fieldValue.length;
};

const isValidPassword = function (fieldValue) {
  return fieldValue.length > 1;
};

const addError = function (classObject) {
  classObject.classList.add("has-error");
};

const removeError = function (classObject) {
  classObject.classList.remove("has-error");
};

const listenToEvents = function(){
  email.input.addEventListener("focusout", function(){
      if(isEmpty(email.input.value)){
          removeIsFloating(email.label);
      }
      else{
          addIsFloating(email.label);
      }
  })

  password.input.addEventListener("focusout", function(){
    if(isEmpty(password.input.value)){
        removeIsFloating(password.label);
    }
    else{
        addIsFloating(password.label);
    }
})
}

const addIsFloating = function(formField){
  formField.classList.add('is-floating');
  console.log("adding is-floating");
}

const removeIsFloating = function(formField){
  formField.classList.remove('is-floating');
  console.log("deleting is-floating");
}



document.addEventListener("DOMContentLoaded", function () {
  console.log("Script loaded!");
  getDomElements();
  listenToEvents();
});
