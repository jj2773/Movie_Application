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
    var resultArray = metadata.filter(newData => newData.movieid== val);
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
      d3.json("js/data.json").then((data) => {
        // 3. Create a variable that holds the samples array. 
       var movies=  (JSON.parse(JSON.stringify(data)));
    
        // 4. Create a variable that filters the samples for the object with the desired sample number.
        var filterArray = movies.filter(data => data.movieid== val);
        //  5. Create a variable that holds the first sample in the array.
     
        
        
       
        var cluster = Object.keys(movies).map(function (Cluster) {
          return movies[Cluster];
         });
        
        var filterArray1 = movies.filter(data =>data.data ==data);
        
        var clusterKeyValue2 = (JSON.parse(JSON.stringify((Object.values(filterArray[0])))))["1"];
        console.log(clusterKeyValue2);
        
       
        
          
            
          var movieTitle= (JSON.parse(JSON.stringify((Object.entries(movies)))))["2"];
            
          var avgRatingValue = (JSON.parse(JSON.stringify((Object.values(filterArray[0])))))["4"];
          var avgRatingCount = (JSON.parse(JSON.stringify((Object.values(filterArray[0])))))["5"];
          
          

          var clusterValue = Object.keys(filterArray1).map(function (Cluster) {
            return filterArray1[Cluster];
             });
             
           var values2 = movies.filter(obj => {
            return obj.Cluster === clusterKeyValue2;
          });
          
             var titles=values2.map(({ title }) => title).slice(0,10).reverse();
             var avg_rating=values2.map(({ avg_rating }) => avg_rating);
             var rating_counts=values2.map(({ rating_counts }) => rating_counts);
             var ratings=titles.map(titles => avg_rating*rating_counts);
             var genres=values2.map(({ genres }) => genres);
             var rating = (values2.map( values => values.avg_rating* values.rating_counts).slice(0,10).reverse());
             var rating2 = rating.slice(0,10).reverse();
             var genres2 = values2.map( values => values.genres);
             console.log (genres2);
  
    
          var barData = [{
            x: rating2,
            y: titles,
            type: "bar",
            orientation: "h",
            transforms: [{
              type: 'sort',
              target: 'x',
              order: 'descending',
            },
            {
              type: 'filter',
              target: 'x',
              operation: '>',
              value: 1,
            }],
            text: titles,
          }];
        
      
        
        

      
        // 8. Create the trace for the bar chart. 
        
        // 9. Create the layout for the bar chart. 
        var barLayout = {
          showlegend: false,
          xaxis: {
            rangemode: 'tozero',
            autorange: true,
            title: "Avg_Rating *Ratings"
          },
          yaxis: {
            rangemode: 'nonnegative',
            autorange: true,
            showticklabels: true,
            tickangle: 55,
            
          }
        };
      
    
            
        // 10. Use Plotly to plot the data with the layout. 
    
       Plotly.newPlot('bar', barData, barLayout);
       
      
       var myWords =genres2;
      
        
        
       var margin = {top: 10, right: 10, bottom: 10, left: 10},
    width = 450 - margin.left - margin.right,
    height = 450 - margin.top - margin.bottom;
    var fill = d3.scale.category20();

// append the svg object to the body of the page
var movieDataset = d3.select("#my_dataviz").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform",
          "translate(" + margin.left + "," + margin.top + ")");

// Constructs a new cloud layout instance. It run an algorithm to find the position of words that suits your requirements
var layout = d3.layout.cloud()
  .size([width, height])
  .words(myWords.map(function(d) { return {text: d}; }))
  .padding(10)
  .fontSize(60)
  .on("end", draw);
layout.start();
var options = movieDataset.selectAll("option")
.data(myWords)
.enter()
.append("option")
.text(function(d) {
  return d;
})
.attr("value", function(d) {
  return d;
})
// This function takes the output of 'layout' above and draw the words
// Better not to touch it. To change parameters, play with the 'layout' variable above
function draw(words) {
  movieDataset
    .append("g")
      .attr("transform", "translate(" + layout.size()[0] / 2 + "," + layout.size()[1] / 2 + ")")
      .selectAll("text")
        .data(words)
      .enter().append("text")
        .style("font-size", function(d) { return d.size + "px"; })
        .attr("text-anchor", "middle")
        .attr("transform", function(d) {
          return "translate(" + [d.x, d.y] + ")rotate(" + d.rotate + ")";
        })
        .text(function(d) { return d.text; })
        .on("change", update);
        function update() {
          // Using your function and the value of the venue to filter data
          var filteredData = this.value;
          // Calculate the new domain with the new values
          fontScale.domain([
            d3.min(newValue, function(d) {
              return d.value
            }),
            d3.max(newValue, function(d) {
              return d.value
            }),
          ]);
          // Calculate the layout with new values
          d3.layout.cloud()
            .size([width, height])
            .words(filteredData)
            .rotate(0)
            .text(function(d) {
              return d.label;
            })
            .font("Impact")
            .fontSize(function(d) {
              return fontScale(d.value)
            })
            .on("end", draw)
            .start()
            .remove();
            movieDataset
            .transition()
            .duration(10)
            .style("font-size", function(d) {
                return fontScale(d.value)
            })
            .attr("transform", function(d) {
                return "translate(" + [d.x, d.y] + ")rotate(" + d.rotate + ")";
            })
            .style("fill-opacity", 1);
            movieDataset
            .exit()
        .transition()
            .duration(10)
            .style('fill-opacity', 1e-6)
            .attr('font-size', 1)
            .remove()
            d3.select("select").on("change", remove());
        }
       
       
        
        
}
   })
   
    
        
}
   

  
    
   
  



