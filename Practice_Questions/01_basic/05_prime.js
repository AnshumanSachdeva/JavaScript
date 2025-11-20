function primeCheck(number) {
    if(number <= 1){
        return `The given number ${number}, is not prime`
    }
    for (let i = 2; i*i <= number; i++) {
        if(number % i == 0) {
            return `The given number ${number}, is not prime`
        }
    }
    return `The given number ${number}, is prime`
}
let number = 4;
console.log(primeCheck(number))