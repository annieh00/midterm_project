// script.js

// Function to fetch JSON data from the file
function fetchData() {
  return fetch('data.json')
      .then(response => response.json());
}

// Function to display the JSON data as a list
function displayDates() {
  var dateList = document.getElementById("dateList");

  fetchData()
      .then(data => {
          data.availableDates.forEach(function (item) {
              var listItem = document.createElement("li");
              listItem.textContent = item.date + ", " + item.year;
              dateList.appendChild(listItem);
          });
      })
      .catch(error => {
          console.error('Error fetching data:', error);
      });
}

// Call the displayDates function when the page is loaded
window.onload = displayDates;

// annie was here 
// Function to display the JSON data as a list
function displayNail() {
  var dateList = document.getElementById("nailList");

  fetchData()
      .then(data => {
          data.nail_prices.forEach(function (item) {
              var listItem = document.createElement("li");
              listItem.textContent = item.type1 + ": " + item.price1;
              dateList.appendChild(listItem);
          });
      })
      .catch(error => {
          console.error('Error fetching data:', error);
      });
}

// Call the displayDates function when the page is loaded
window.onload = displayNail;

// Function to display the JSON data as a list
function displayHair() {
  var dateList = document.getElementById("hairList");

  fetchData()
      .then(data => {
          data.hair_prices.forEach(function (item) {
              var listItem = document.createElement("li");
              listItem.textContent = item.type2 + ": " + item.price2;
              dateList.appendChild(listItem);
          });
      })
      .catch(error => {
          console.error('Error fetching data:', error);
      });
}

// Call the displayDates function when the page is loaded
window.onload = displayHair;

