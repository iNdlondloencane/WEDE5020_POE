// enquiry form - checks the form and shows an estimate
// (showError, clearError, isValidName, isValidEmail, isValidPhone and addToBox are in validation.js)
const form = document.getElementById("enquiry-form");
const responseBox = document.getElementById("enquiry-response");

// returns the project size that is ticked, or "" if none is ticked
function getSize() {
  if (document.getElementById("size-small").checked) {
    return "Small";
  } else if (document.getElementById("size-medium").checked) {
    return "Medium";
  } else if (document.getElementById("size-large").checked) {
    return "Large";
  }
  return "";
}

// returns the estimated price - change these numbers to the real prices
function calculatePrice(service, size, wantsMaterials, wantsDelivery) {
  let price = 0;

  switch (service) {
    case "Custom Furniture":
      price = 3500;
      break;
    case "Kitchen Fitting":
      price = 8000;
      break;
    case "Structural Carpentry":
      price = 6000;
      break;
    case "General Repairs":
      price = 800;
      break;
    default:
      price = 0;
  }

  if (size === "Medium") {
    price = price * 1.5;
  } else if (size === "Large") {
    price = price * 2;
  }

  if (wantsMaterials) {
    price = price + 1500;
  }
  if (wantsDelivery) {
    price = price + 500;
  }

  return price;
}

// checks every field and returns an array of all the problems found
function validateForm() {
  let errors = [];

  let name = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value.trim();
  let phone = document.getElementById("phone").value.trim();
  let service = document.getElementById("service").value;
  let size = getSize();
  let dateText = document.getElementById("date").value;

  if (!isValidName(name)) {
    showError("name", "Please enter your name (at least 2 letters, no numbers).");
    errors.push("name");
  } else {
    clearError("name");
  }

  if (!isValidEmail(email)) {
    showError("email", "Please enter a valid email, e.g. name@example.com.");
    errors.push("email");
  } else {
    clearError("email");
  }

  if (!isValidPhone(phone)) {
    showError("phone", "Phone must be 10 numbers and start with 0, e.g. 0821234567.");
    errors.push("phone");
  } else {
    clearError("phone");
  }

  if (service === "") {
    showError("service", "Please choose a service.");
    errors.push("service");
  } else {
    clearError("service");
  }

  if (size === "") {
    showError("size", "Please choose a project size.");
    errors.push("size");
  } else {
    clearError("size");
  }

  // the date must be chosen, not in the past, and a weekday
  let today = new Date();
  today.setHours(0, 0, 0, 0);
  let date = new Date(dateText + "T00:00:00");

  if (dateText === "") {
    showError("date", "Please choose a date.");
    errors.push("date");
  } else if (date < today) {
    showError("date", "The date can not be in the past.");
    errors.push("date");
  } else if (date.getDay() === 0 || date.getDay() === 6) {
    showError("date", "We work Monday to Friday. Please choose a weekday.");
    errors.push("date");
  } else {
    clearError("date");
  }

  return errors;
}

form.addEventListener("submit", function (event) {
  event.preventDefault();

  let errors = validateForm();

  // stop here if there are problems
  if (errors.length > 0) {
    responseBox.classList.remove("show");
    return;
  }

  let name = document.getElementById("name").value.trim();
  let phone = document.getElementById("phone").value.trim();
  let service = document.getElementById("service").value;
  let size = getSize();
  let date = new Date(document.getElementById("date").value + "T00:00:00");

  let price = calculatePrice(
    service,
    size,
    document.getElementById("materials").checked,
    document.getElementById("delivery").checked
  );

  // show the answer
  responseBox.innerHTML = "";
  addToBox(responseBox, "h3", "Thank you, " + name + "!");
  addToBox(responseBox, "p", "Estimated cost for " + service + " (" + size + " project): from R" + price +
    ". The final price is confirmed after we see the job.");
  addToBox(responseBox, "p", "We are available on " + date.toDateString() +
    ". We will phone you on " + phone + " to confirm.");
  responseBox.classList.add("show");
});
