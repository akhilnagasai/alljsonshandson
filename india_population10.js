var fs = require('fs');
var readline = require('readline');

// Required variable declarations for performing the operation
var country,population10;

//Arrays to store the resultant
var populationArray = [];

// reading the CSV file
var rl = readline.createInterface({
    input: fs.createReadStream('data.csv')
});

// functions to split and differentiate the operations
function populationChart(country, population10) {

    this.country = country;
    this.population10 = population10;
};

rl.on("line", function(line) {
    var linerecords = line.trim().split(",");
        
        country = linerecords[0].replace(/"/g,"");
        population10 = linerecords[2].replace(/"/g,"");
       

// populating the arrays with the desired result
        populationArray.push(new populationChart(country, population10));
       
// sorting the value stored in an array in descending order
        populationArray.sort(function(a, b) {
               return parseFloat(b.population10) - parseFloat(a.population10)
        });
        population=[populationArray[2]]
// converting the resultant CSV output into relevant JSON File
       fs.writeFileSync("india_population_10.json",JSON.stringify(population), encoding = "utf8");
       myObj=JSON.stringify(population)
       myfile=JSON.parse(myObj)
}).on('close', function() {
       
            function india_population_10(){
        
                console.log(myfile)   
            
                
            }
               india_population_10();
         
           
        }) 