function addOptions(){
var request = new XMLHttpRequest();
    request.open("GET", "./js/data.json", false);
    request.send(null)
    var data = JSON.parse(request.responseText);
    var select = document.getElementById('movieDataset');
            var option;
            for (var i = 0; i < data.length; i++) {
              option = document.createElement('option');
              option.text = data[i]["movieId"];
              select.add(option);
            }
}
function init() {
    // Grab a reference to the dropdown select element
    var selector = d3.select("#movieDataset");
  
    // Use the list of sample names to populate the select options
    d3.json("js/data.json").then((value) => {
    
        value.forEach((title_x) => {   
            selector
            .append("option")
            .text(title_x)
            .property("value", title_x);
              });
            
            
        });
  
      // Use the first sample from the list to build the initial plots
      var firstCluster = data.Cluster;
      buildCharts(firstCluster);
      buildMetadata(firstCluster);
    }
  
  // Initialize the dashboard
  init();
  
  function optionChanged(newCluster) {
    // Fetch new data each time a new sample is selected
    buildMetadata(newCluster);
    buildCharts(newCluster);
    
  }
  // Demographics Panel 
  function buildMetadata(_movieId) {
    d3.json("js/data.json").then((data) => {
      var metadata = data.title_x;
      // Filter the data for the object with the desired sample number
      var resultArray = metadata.filter(sampleObj => sampleObj.id == title_x);
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
  
  
  
  
  
  
    
  

