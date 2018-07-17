function hello(){console.log('hello world!');}
function goodbye(){console.log('goodbye');}


function repeat (fn,n){
	 for (let i = 0; i<n; i++) { 
	fn();
	 } 
}

repeat(hello,5);
repeat(goodbye,3);
