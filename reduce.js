const words = 'noggin oreo the moon time tele steed his tent apollo her lives though shoo tofu budapest'

let tau = words.split(' ');

function iterate(newArray){
    let newString = ' ';
    for(let i=0; i < newArray.length;i++){
	 if (newArray[i].length == 3 ) {
         newString += ' ';
       }
       else{
           let x = newArray[i].charAt(newArray[i].length - 1).toUpperCase();
           newString += x;
       }
    }
    return newString;
}

console.log(iterate(tau));

