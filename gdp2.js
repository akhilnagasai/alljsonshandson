var fs = require('fs');
var readline = require('readline');

// Required variable declarations for performing the operation
var country,  gdp12;
//Arrays to store the resultant
var gdpArray = [];
// reading the CSV file
var rl = readline.createInterface({
    input: fs.createReadStream('data.csv')
});

// functions to split and differentiate the operations

function gdpChart(country, gdp12) {

    this.country = country;
    this.gdp12 = gdp12;
};

rl.on("line", function(line) {
    var linerecords = line.trim().split(",");
        
        country = linerecords[0].replace(/"/g,"");
        gdp12 = parseFloat(linerecords[8].replace(/"/g,""));
                 
// populating the arrays with the desired result
        gdpArray.push(new gdpChart(country, gdp12));
        
// sorting the value stored in an array in descending order
        
         
        gdpArray.sort(function(a, b) {
              return parseFloat(b.gdp12) - parseFloat(a.gdp12)
        });    

        
// converting the resultant CSV output into relevant JSON File
        fs.writeFileSync("gdp12.json", JSON.stringify(gdpArray), encoding = "utf8");
              myObj=JSON.stringify(gdpArray)
              myfile=JSON.parse(myObj)
    }).on('close', function() {
        function countriesgdp12(){
       
            for (i = 1; i < myfile.length; i++) {
             countrygdp = myfile[i];
               console.log(countrygdp)
              
            }
    
        }
  countriesgdp12();
});        
         
        