import fs from "fs";

var possibleGamesSum=0;
var gamePowerSum=0;

fs.readFile("input.txt", "utf8", (error, data)=>{
    const gameRecords=data.split(/\r?\n/);
    // Iterate through each game record
    gameRecords.forEach((gameRecord,index) => {
      let subsetPossibility=1;
      let minimumRedCountRequired=0;
      let minimumBlueCountRequired=0;
      let minimumGreenCountRequired=0;

      //Remove the 'Game number: ' part at the beginning of each game record
      gameRecord= gameRecord.slice(gameRecord.indexOf(':')+2);
      // Split the game record into subsets
      const subsets = gameRecord.split(';');
      
      // Iterate through each subset
      subsets.forEach(subset => {
        let redCount=12;
        let blueCount = 14;
        let greenCount = 13;

        // Split the subset into cube descriptions
        const cubeDescriptions = subset.trim().split(', ');
    
        // Iterate through each cube description
        cubeDescriptions.forEach(cube => {

            // Split the cube description into count and color
            const [countStr, color] = cube.split(' ');
    
            // Parse the count as an integer
            const count = parseInt(countStr);
    
            // Update the corresponding count based on the color
            if (color === 'red') {
            redCount -= count;
            minimumRedCountRequired=Math.max(minimumRedCountRequired,count);
            } else if (color === 'blue') {
            blueCount -= count;
            minimumBlueCountRequired=Math.max(minimumBlueCountRequired,count);
            } else if (color === 'green') {
            greenCount -= count;
            minimumGreenCountRequired=Math.max(minimumGreenCountRequired,count);
            }
        });
        if(redCount<0||blueCount<0||greenCount<0){
            subsetPossibility*=0;
        }
    });
  if(subsetPossibility){
    possibleGamesSum+=index+1;
  }

  let gamePower= minimumRedCountRequired*minimumBlueCountRequired*minimumGreenCountRequired;
  gamePowerSum=gamePowerSum+gamePower;

});
  
//output the result
  console.log("final possibleGamesSum is: "+possibleGamesSum);
  console.log("final gamePowerSum is: "+gamePowerSum);
});