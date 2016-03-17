var num= parseInt(prompt("Submit any positive, whole number."));

function fizzbuzz(num) {
	if (num%1!=0) {
		return "That's not a whole number.";
	} else if (num<0) {
		return "That's not a positive number.";
	}

	for (i=0; i<=num; i++) {
		if (i%15===0) {
			document.write('<p>fizzbuzz</p>');
		} else if (i%5===0) {
			document.write('<p>buzz</p>');
		} else if (i%3===0) {
			document.write('<p>fizz</p>');
		} else {
			document.write('<p>'+i+'</p>');
		}
	}
}

fizzbuzz(num);