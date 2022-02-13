function init() {
    // Grab a reference to the dropdown select element
    var selector = d3.select("#selDataset");
  
    // Use the list of sample names to populate the select options
    d3.json("./js/data.json").then((data) => {
      var sampleNames = data.names;
      var clusterID=obj.Cluster;
  
      clusterID.forEach((val) => {
        selector
          .append("option")
          .text(val)
          .property("value", val);
          
      });
      
  
      // Use the first sample from the list to build the initial plots
      var firstCluster = obj.Cluster[0];
      buildCharts(firstCluster);
      buildMetadata(firstCluster);
    });
  }
  
  // Initialize the dashboard
  init();
  
  function optionChanged(newCluster) {
    // Fetch new data each time a new sample is selected
    buildMetadata(newCluster);
    buildCharts(newCluster);
    
  }
  // Demographics Panel 
  function buildMetadata(clusterID) {
    d3.json("js/data.json").then((clusterID) => {
      var metadata = obj.title_x;
      // Filter the data for the object with the desired sample number
      var resultArray = obj.title_x.filter(sampleObj => sampleObj.id == obj.movieID);
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
  
  
  
  
  
  
    
  