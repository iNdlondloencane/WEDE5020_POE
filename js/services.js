// services page - the services are stored in an array (in A to Z order)
const services = [
  { name: "Custom Furniture", text: "Tables, chairs, beds, cabinets, and bespoke pieces designed and built to your exact measurements and style." },
  { name: "General Repairs", text: "Sticking doors, broken drawers, loose joints, and general wood repairs around the home." },
  { name: "Kitchen Fitting", text: "Complete kitchen cupboard installs - from initial measure-up to the final fitted finish." },
  { name: "Structural Carpentry", text: "Decking, roof timber work, staircase, and structural carpentry for residential and commercial sites." }
];

const searchBox = document.getElementById("service-search");
const sortBox = document.getElementById("service-sort");
const servicesList = document.getElementById("services-list");
const serviceCount = document.getElementById("service-count");

// returns a new array with only the services that contain the search text
function findServices(searchText) {
  let matches = [];

  services.forEach(function (service) {
    let words = (service.name + " " + service.text).toLowerCase();
    if (words.includes(searchText)) {
      matches.push(service);
    }
  });

  return matches;
}

// returns the list in A-Z order, or Z-A order when the visitor asks for it
function sortServices(list, order) {
  if (order === "az") {
    return list;
  }

  // unshift adds each item to the front, so the list ends up reversed
  let reversed = [];
  list.forEach(function (service) {
    reversed.unshift(service);
  });
  return reversed;
}

// builds the HTML for one service card
function makeCard(service) {
  return "<div><h3>" + service.name + "</h3><p>" + service.text + "</p></div>";
}

function showServices() {
  let searchText = searchBox.value.trim().toLowerCase();
  let matches = findServices(searchText);
  let sorted = sortServices(matches, sortBox.value);
  let html = "";

  sorted.forEach(function (service) {
    html = html + makeCard(service);
  });

  servicesList.innerHTML = html;

  if (sorted.length === 0) {
    serviceCount.textContent = "No services match \"" + searchBox.value.trim() + "\". Try a different word.";
  } else {
    serviceCount.textContent = sorted.length + " of " + services.length + " services shown";
  }
}

// update the list while the visitor types or changes the sort
searchBox.addEventListener("input", showServices);
sortBox.addEventListener("change", showServices);
showServices();
