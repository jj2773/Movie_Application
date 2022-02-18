var request = new XMLHttpRequest();
    request.open("GET", "./js/data.json", false);
    request.send(null)
    var data = JSON.parse(JSON.stringify(request.responseText));
    var newData = data.data;
    function init() {
      // Grab a reference to the dropdown select element
      var selector = d3.select("#movieDataset");
    
      // Use the list of sample names to populate the select options
      d3.json("js/data.json").then((newData) => {
        var movieNames = newData;
    
        Object.keys(movieNames).forEach((val) => {
          selector
            .append("option")
            .text(JSON.parse(JSON.stringify(val)))
            .property(JSON.parse(JSON.stringify('value', val)))
            
            
        });
      // Use the first movie from the list to build the initial plots
    var firstMovie = movieNames[0];
    buildCharts(firstMovie);
    buildMetadata(firstMovie);
  });
}
  

// Initialize the dashboard
init();

function optionChanged(newMovie) {
  // Fetch new data each time a new sample is selected
  buildCharts(newMovie);
  buildMetadata(newMovie);
  
}
// Store a JSON value in local storage
var filter1=localStorage.setItem('movieId', JSON.stringify({movieId: '1'}));

// parse the value when accessing it
const result = JSON.parse(localStorage.getItem('movieId'));
window.onload = function getItem() {
  fetch('./js/data.json')
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
// Movie Info Panel 
function buildMetadata(val) {
  d3.json("js/data.json").then((newData) => {
    var metadata = newData;
    // Filter the data for the object with the desired sample number
    var resultArray = metadata.filter(newData => newData.movieId== val);
    var result1 = resultArray[0]
    // Use d3 to select the panel with id of `#movie data`
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
  function buildCharts(val) {
      // 2. Use d3.json to load and retrieve the samples.json file 
      d3.json("js/data.json").then((newData) => {
        // 3. Create a variable that holds the samples array. 
       var movies = newData;
    
        // 4. Create a variable that filters the samples for the object with the desired sample number.
        var filterArray = movies.filter(newData => newData.movieId== val);
        //  5. Create a variable that holds the first sample in the array.
        var result1 = filterArray[0];
    
        // 6. Create variables that hold the otu_ids, otu_labels, and sample_values.
        var titles = result1.title_x;
        var cluster =result1.Cluster;
        var ratings= result1.ratings;
        var values = ratings.map(result1 => {return result1.ratings *result1.avg_rating});
        // 8. Create the trace for the bar chart. 
        var barData = [{
          x: titles,
          y: labels,
          type: "bar",
          orientation: "h",
          text: values
        }];
        // 9. Create the layout for the bar chart. 
        var barLayout = {
          title: "",
          xaxis: { title: "Rating counts * ratings" },
          yaxis: { title: "Movie Titles" }
       };
        // 10. Use Plotly to plot the data with the layout. 
    
       Plotly.newPlot('bar', barData, barLayout);
        });
      }
      
