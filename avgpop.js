var fs = require('fs');
var readline = require('readline');

// Required variable declarations for performing the operation
var country, population13;

//Arrays to store the resultant
var populationArray = [];

// reading the CSV file
var rl = readline.createInterface({
    input: fs.createReadStream('data.csv')
});

// functions to split and differentiate the operations
function populationChart(country, population13) {

    this.country = country;
    this.population13 = population13;
};




rl.on('line', function(line) {
    var lineRecords = line.trim().split(",");
        
        country = lineRecords[0].replace(/"/g,"");
        population13 = parseFloat(lineRecords[5].replace(/"/g,""));
       
          
// populating the arrays with the desired result
        populationArray.push(new populationChart(country, population13));

// sorting the value stored in an array in descending order
        populationArray.sort(function(a, b) {
               return parseFloat(b.population13) - parseFloat(a.population13)
        });
         
       
// converting the resultant CSV output into relevant JSON File
        fs.writeFileSync("population13.json", JSON.stringify(populationArray), encoding = "utf8");
                myObj=JSON.stringify(populationArray)   
                myfile=JSON.parse(myObj)
    }).on('close', function() {
        function countriespopulation13(){
var total = 0;      // do not name local variables same as function
var i;             // use var for i variable, otherwise it would be global variable 
for (i = 1; i < myfile.length; i++){
    total =(total+ myfile[i].population13)/(myfile.length-1); 
        
            }

} var total=countriespopulation13()
console.log(total)
}); 
