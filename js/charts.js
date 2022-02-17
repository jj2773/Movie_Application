function init() {
    // Grab a reference to the dropdown select element
    var selector = d3.select("#movieDataset");
   
    // Use the list of sample names to populate the select options
    d3.json("js/data2.json").then((data) => { 
    var movieNames=data.movies
     Object.keys(movieNames).forEach((movie) => {
        selector
          .append("option")
          .text (JSON.stringify(movie))
          
          
      });
   
    

    // Use the first sample from the list to build the initial plots
    var firstSample1 = movieNames[1];
    buildMoviedata(firstSample1);
  });
}
  
  
  
  // Initialize the dashboard
  init();
  
function optionChanged(newMovie) {
    // Fetch new data each time a new sample is selected
    buildMoviedata(newMovie);
    
  }
  // Demographics Panel 
function buildMoviedata(movie) {
    d3.json("js/data2.json").then((data) => {
      var metadata = data.movies;
      // Filter the data for the object with the desired sample number
      var resultArray = metadata.filter(movie => movie.id == movie);
      var result = resultArray;
      // Use d3 to select the panel with id of `#sample-metadata`
      var panel = d3.select("#moviedata");
  
      // Use `.html("") to clear any existing metadata
      panel.html("");
  
      // Use `Object.entries` to add each key and value pair to the panel
      // Hint: Inside the loop, you will need to use d3 to append new
      // tags for each key-value in the metadata.
      Object.entries(result).forEach(([key, value]) => {
        panel.append("h5").text(`${key}: ${value}`);
        {console.log(key + ': ' + value);}
      });

    });
  }
