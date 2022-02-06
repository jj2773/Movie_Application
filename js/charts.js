function init() {
    // Grab a reference to the dropdown select element
    var selector = d3.select("#data");
  
    // Use the list of sample names to populate the select options
    d3.json("js/data.json").then((data) => {
      var movies = data.movieId;
  
      movies.forEach((data) => {
        selector
          .append("option")
          .text(data)
          .property("value", data);
        
      })
      });
  // Demographics Panel 
  function buildMetadata(movieID) {
    d3.json("js/data.json").then((data);
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
        
      })
  
}
}