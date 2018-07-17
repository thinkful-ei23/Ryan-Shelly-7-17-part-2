let turtleMovement = [[0, 0], [0, 5], [-1, -3], [-3, 1], [2, -4], [3, 2]];

const nonNegativeMovement = turtleMovement.filter(x => x[0]>=0 && x[1]>=0 );

console.log(nonNegativeMovement);

const aggregate = nonNegativeMovement.map(x => x[0]+x[1]);
console.log(aggregate);

let sum = 0;
const final = aggregate.forEach(function(x){sum+=x;});
console.log(sum);
