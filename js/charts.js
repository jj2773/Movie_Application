var request = new XMLHttpRequest();
    request.open("GET", "./js/data2.json", false);
    request.send(null)
    var data = JSON.parse(JSON.stringify(request.responseText));
    var newData = data.data;
    function init() {
      // Grab a reference to the dropdown select element
      var selector = d3.select("#movieDataset");
    
      // Use the list of sample names to populate the select options
      d3.json("js/data2.json").then((newData) => {
        var movieNames = newData;
    
        Object.keys(movieNames).forEach((val) => {
          selector
            .append("option")
            .text(JSON.parse(JSON.stringify(val)))
            .property(JSON.parse(JSON.stringify('value', val)))
            
            
        });
      
  });
}

// Initialize the dashboard
init();

function optionChanged(newMovie) {
  // Fetch new data each time a new sample is selected
  buildMetadata(newMovie);
  
}
// 👇️ Store a JSON value in local storage
var filter1=localStorage.setItem('movieid', JSON.stringify({movieid: '1'}));

// 👇️ parse the value when accessing it
const result = JSON.parse(localStorage.getItem('movieid'));
window.onload = function getItem() {
  fetch('./js/data2.json')
    .then(response => {
      if (!response.ok) {
        throw new Error(`Error status: ${response.status}`);
      }

      return response.json();
    })
    .then(result => {
      console.log(result);
    })
    .catch(err => console.log(err));
  }
// Demographics Panel 
function buildMetadata(val) {
  d3.json("js/data2.json").then((newData) => {
    var metadata = newData;
    // Filter the data for the object with the desired sample number
    var resultArray = metadata.filter(newData => newData.movieid== val);
    var result1 = resultArray[0]
    // Use d3 to select the panel with id of `#sample-metadata`
    var panel = d3.select("#moviedata");

    // Use `.html("") to clear any existing metadata
    panel.html("");

    // Use `Object.entries` to add each key and value pair to the panel
    // Hint: Inside the loop, you will need to use d3 to append new
    // tags for each key-value in the metadata.
    Object.entries(result1).forEach(([key, value]) => {
      panel.append("h6").text(`${key}: ${value}`);
      {console.log(key + ': ' + value);}
      
    });

  });
}
  

    // Use the first sample from the list to build the initial plots
  

  
