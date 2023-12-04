import fs from "fs";

var result=0;

fs.readFile("input.txt", "utf8", (error, data)=>{
    const gameRecords=data.split(/\r?\n/);
    // Iterate through each game record
    gameRecords.forEach((gameRecord,index) => {
      let subsetPossibility=1;
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
        } else if (color === 'green') {
          greenCount -= count;
        } else if (color === 'blue') {
          blueCount -= count;
        }
      });
    if(redCount<0||greenCount<0||blueCount<0){
        subsetPossibility*=0;
    }
  });
  if(subsetPossibility){
    result+=index+1;
  }
});
  
//output the result
  console.log("final result is: "+result);
});