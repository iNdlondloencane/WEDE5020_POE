// contact form - checks the form and makes an email
// (showError, clearError, isValidName, isValidEmail, isValidPhone and addToBox are in validation.js)
const form = document.getElementById("contact-form");
const responseBox = document.getElementById("contact-response");

// the email address the message is sent to
const emailTo = "info@tccarpentry.co.za";

// checks every field and returns an array of all the problems found
function validateForm() {
  let errors = [];

  let name = document.getElementById("c-name").value.trim();
  let email = document.getElementById("c-email").value.trim();
  let phone = document.getElementById("c-phone").value.trim();
  let type = document.getElementById("c-type").value;
  let message = document.getElementById("c-message").value.trim();

  if (!isValidName(name)) {
    showError("c-name", "Please enter your name (at least 2 letters, no numbers).");
    errors.push("name");
  } else {
    clearError("c-name");
  }

  if (!isValidEmail(email)) {
    showError("c-email", "Please enter a valid email, e.g. name@example.com.");
    errors.push("email");
  } else {
    clearError("c-email");
  }

  if (!isValidPhone(phone)) {
    showError("c-phone", "Phone must be 10 numbers and start with 0, e.g. 0821234567.");
    errors.push("phone");
  } else {
    clearError("c-phone");
  }

  if (type === "") {
    showError("c-type", "Please choose a type of message.");
    errors.push("type");
  } else {
    clearError("c-type");
  }

  if (message.length < 10) {
    showError("c-message", "Your message must be at least 10 characters.");
    errors.push("message");
  } else {
    clearError("c-message");
  }

  return errors;
}

// returns the mailto link that opens the visitor's email app with the message filled in
function makeEmailLink(name, email, phone, type, message) {
  let subject = type + " from " + name;
  let body = "Name: " + name + "\nEmail: " + email + "\nPhone: " + phone + "\n\n" + message;

  return "mailto:" + emailTo + "?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);
}

form.addEventListener("submit", function (event) {
  event.preventDefault();

  let errors = validateForm();

  // stop here if there are problems
  if (errors.length > 0) {
    responseBox.classList.remove("show");
    return;
  }

  let name = document.getElementById("c-name").value.trim();
  let email = document.getElementById("c-email").value.trim();
  let phone = document.getElementById("c-phone").value.trim();
  let type = document.getElementById("c-type").value;
  let message = document.getElementById("c-message").value.trim();

  // show the Send Email button
  responseBox.innerHTML = "";
  addToBox(responseBox, "p", "Thank you, " + name + ". Your email is ready. Click the button to send it.");

  let sendButton = document.createElement("a");
  sendButton.className = "btn";
  sendButton.href = makeEmailLink(name, email, phone, type, message);
  sendButton.textContent = "Send Email";
  responseBox.appendChild(sendButton);

  responseBox.classList.add("show");
});
