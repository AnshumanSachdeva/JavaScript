const squareNumbers = () => {
    let array = [1,2,3,4]
    let squared = array.map( (num) => {
        return num * num 
    })
    return squared;
}
console.log(squareNumbers());
