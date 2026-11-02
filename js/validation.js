// validation.js - small helper functions used by both forms
// (the enquiry form and the contact form load this file first)

// show an error message under a field
function showError(id, message) {
  document.getElementById(id + "-error").textContent = message;
}

// remove the error message under a field
function clearError(id) {
  document.getElementById(id + "-error").textContent = "";
}

// returns true when the email looks like name@site.com
function isValidEmail(email) {
  let at = email.indexOf("@");
  let dot = email.lastIndexOf(".");

  if (email.includes(" ")) {
    return false;
  }
  // the @ must not be first, and the last dot must come after it
  if (at > 0 && dot > at + 1 && dot < email.length - 1) {
    return true;
  }
  return false;
}

// returns true when the phone is 10 digits and starts with 0
function isValidPhone(phone) {
  let digits = "0123456789";

  if (phone.length !== 10 || phone[0] !== "0") {
    return false;
  }
  for (let i = 0; i < phone.length; i++) {
    if (!digits.includes(phone[i])) {
      return false;
    }
  }
  return true;
}

// adds a new element (like a <p> or <h3>) with some text to a box
// textContent is used so anything the visitor typed is shown as plain text
function addToBox(box, tagName, text) {
  let element = document.createElement(tagName);
  element.textContent = text;
  box.appendChild(element);
}

// returns true when the name has at least 2 characters and no numbers
function isValidName(name) {
  let digits = "0123456789";

  if (name.length < 2) {
    return false;
  }
  for (let i = 0; i < name.length; i++) {
    if (digits.includes(name[i])) {
      return false;
    }
  }
  return true;
}
