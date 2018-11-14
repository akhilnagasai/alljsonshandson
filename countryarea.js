  var fs = require('fs');
  var readline = require('readline');
  
  // Required variable declarations for performing the operation
  var area,country,continent;
  
  //Arrays to store the resultant
  var areaArray = [];
  
  // reading the CSV file
  var rl = readline.createInterface({
      input: fs.createReadStream('data1.csv')
  });
  
  // functions to split and differentiate the operations
  function areaChart(continent,country, area) {
      this.continent=continent;
      this.country = country;
      this.area = area;
  };
 
  rl.on("line", function(line) {
      var linerecords = line.trim().split(",");
      continent = linerecords[0].replace(/"/g,"");
         country = linerecords[1].replace(/"/g,"");
              area = parseFloat(linerecords[2].replace(/"/g,""));
            
  // populating the arrays with the desired result
           areaArray.push(new areaChart(continent,country,area)) 
  // sorting the value stored in an array in descending order
          areaArray.sort(function(a, b) {
                 return parseFloat(b.area) - parseFloat(a.area)
          });
     // converting the resultant CSV output into relevant JSON File
          fs.writeFileSync("continents_countries_areas.json", JSON.stringify(areaArray), encoding = "utf8");
                myObj=JSON.stringify(areaArray)
                myfile=JSON.parse(myObj)   
        }).on('close', function() {
                  function countriesArea(){
                    for (i = 1; i < myfile.length; i++) {
                        countryarea = myfile[i];
                         console.log(countryarea)    
                         

                    }
                    }
     countriesArea()

      }); 