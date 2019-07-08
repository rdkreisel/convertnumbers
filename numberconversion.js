var numWords = {
	 naught: 'zero',
	 ones: ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'],
	 tentotwelve: ['ten','eleven', 'twelve'],
	 teens: ['thir','four','fif','six','seven','eight','nine'],
	 tens: ['twen','thir','for','fif','six','seven','eigh','nine'],
	 hundreds: 'hundred',
	 thousands: 'thousand',
	 millions: 'million',
	 billions: 'billion',
}

var myNum = document.getElementById('number');

function numStringToArray () {
	// var num = 1144589;
	    // just so we know we're here
    console.log("someone invoked the numStringToArray function!");
	var numArray = myNum.toString();
	var num = numArray.match(/\w/g);;

	return numArray;
}

console.log(numStringToArray());

var printArray = document.getElementById('convertIt');
convertIt.addEventListener('click', numStringToArray);

console.log(numStringToArray());

