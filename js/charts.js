function init() {
    // Grab a reference to the dropdown select element
    var selector = d3.select("#movieDataset");
  
    // Use the list of sample names to populate the select options
    d3.json("js/data2.json").then((data) => {  
      var movieNames=data.movies;
      movieNames.forEach((movieId) => {
        selector
          .append("option")
          .text (JSON.stringify(movieId))
          .property (JSON.stringify('value', movieId))
          
      });
    
    });
    
  }
  
  // Initialize the dashboard
  init();
  
  
  function optionChanged(newMovie) {
    // Fetch new data each time a new sample is selected
    buildMetadata(newMovie);
    buildCharts(newMovie);
    
  }
  // Demographics Panel 
  function buildMetadata(movie) {
    d3.json("js/data2.json").then((data) => {
      var metadata = data.movies;
      // Filter the data for the object with the desired sample number
      var resultArray = metadata.filter(movieObj => movieObj.id == movie);
      var result = resultArray[2];
      // Use d3 to select the panel with id of `#sample-metadata`
      var panel = d3.select("#moviedata");
  
      // Use `.html("") to clear any existing metadata
      panel.html("");
  
      // Use `Object.entries` to add each key and value pair to the panel
      // Hint: Inside the loop, you will need to use d3 to append new
      // tags for each key-value in the metadata.
      Object.entries(result).forEach(([key, value]) => {
        panel.append("h6").text(`${key}: ${value}`);
        {console.log(key + ': ' + value);}
        });
      });
  
    }
