findPrimes(0, 100); // first number is the start of the range, and the second number is the end of the range

function findPrimes(rangeStart, rangeEnd) {
    let primeNumbers = []; // create an array for the prime numbers to be in
    for (i = rangeStart; i <= rangeEnd; i++) {
        if (isPrime(i)) { // here the isPrime function is used to check whether a number is prime or not
            primeNumbers.push(i);  // if the number is prime, it gets added to the primeNumbers array
        }
    }
    console.log(primeNumbers); // print the primeNumbers array, displaying all of the prime numbers in the given range
}

function isPrime(number) { // this function will determine if a number is prime or composite
    if (number <= 1) return false; // a prime number cannot be 1, so this will immediately discard 1
    for (let i = 2; i <= Math.sqrt(number); i++) { // this part will check for factors
        if (number % i === 0) { 
            return false;
        }
    }
    return true;
}