function init() {
    // Grab a reference to the dropdown select element
    var selector = d3.select("#selDataset");
  
    // Use the list of sample names to populate the select options
    d3.json("js/data.json").then((data) => {
      var movies = data.movieId;
  
      movies.forEach((movieId) => {
        selector
          .append("option")
          .text(movieId)
          .property("value", title_x);
          
      });
      
  
      // Use the first sample from the list to build the initial plots
      var firstMovie = movies[0];
      buildCharts(firstMovie);
      buildMetadata(firstMovie);
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
  function buildMetadata(movieID) {
    d3.json("js/data.json").then((data) => {
      var metadata = data.metadata;
      // Filter the data for the object with the desired sample number
      var resultArray = metadata.filter(movieObj => movieObj.id == movieID);
      var result = resultArray[0];
      // Use d3 to select the panel with id of `#sample-metadata`
      var panel = d3.select("#sample-metadata");
  
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
  
  // 1. Create the buildCharts function.
  function buildCharts(sample) {
    // 2. Use d3.json to load and retrieve the samples.json file 
    d3.json("js/data.json").then((data) => {
      // 3. Create a variable that holds the samples array. 
     var samples = data.samples;
  
      // 4. Create a variable that filters the samples for the object with the desired sample number.
      var filterArray = samples.filter(sampleObject => sampleObject.id == sample);
      //  5. Create a variable that holds the first sample in the array.
      var result = filterArray[0];
  
    });
  }
  
  
  
  
    
  