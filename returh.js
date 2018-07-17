function hazardWarningCreator(typeOfWarning){
   let warningCounter = 0;
   

   return function(location){
      warningCounter++;
      console.log(`"DANGER! There is a ${typeOfWarning} hazard at ${location}"`);
      console.log(`The ${typeOfWarning} hazard alert has triggered ${warningCounter} time(s) today!`);
   };
}

const rockWarning = hazardWarningCreator('Rocks on the Road');
const waterWarning = hazardWarningCreator('Water on the Road');
const childrenWarning = hazardWarningCreator('Children in the road');

rockWarning('the freeway');
waterWarning('at the mailbox');
rockWarning('shut up dad');
childrenWarning('in your house');
