// map of our two locations (Leaflet)

// the locations are stored in an array
const locations = [
  { name: "T.C. Carpentry", address: "123 Rivonia Rd, Sandown, Sandton", lat: -26.10429, lng: 28.05863 },
  { name: "T.C. Carpentry", address: "45 Kent Ave, Ferndale, Randburg", lat: -26.10968, lng: 27.99511 }
];

function showMap() {
  // if the Leaflet file did not load, show a message instead of a broken map
  if (typeof L === "undefined") {
    let text = "The map could not load. Our locations: ";
    locations.forEach(function (place, index) {
      if (index > 0) {
        text = text + " and ";
      }
      text = text + place.address;
    });
    document.getElementById("map").textContent = text + ".";
    return;
  }

  let map = L.map("map").setView([-26.107, 28.027], 12);

  L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: "&copy; OpenStreetMap contributors"
  }).addTo(map);

  // one marker with a popup for each location in the array
  let points = [];
  locations.forEach(function (place) {
    let marker = L.marker([place.lat, place.lng]).addTo(map);
    let directions = "https://www.openstreetmap.org/directions?to=" + place.lat + "," + place.lng;
    marker.bindPopup(place.name + "<br>" + place.address +
      '<br><a href="' + directions + '" target="_blank" rel="noopener">Get directions</a>');
    points.push([place.lat, place.lng]);
  });

  // zoom so both locations are visible
  map.fitBounds(points, { padding: [40, 40] });
}

showMap();
