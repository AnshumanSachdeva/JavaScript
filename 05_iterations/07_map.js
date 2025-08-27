const myNumbers = [1, 2, 3,4 ,5, 6, 7, 8, 9, 10];

// const newNums = myNumbers.map( (num) => num + 10)       // again map is a callback fn similar to forEach , yeh b returm krdeta hai but curly braces pe
// console.log(newNums);                           //  undefined deta hai yeh naki empty array

//************************************************************************Chanining****************************************************************
// ek fn k sath dusra fn lga diya usko bolte hai chaining. Jitna mann kre utni chaining kr skte hai. Diff fn ki chaining kr skte hai

const newNums = myNumbers
                        .map( (nums) => nums * 10)
                            .map( (num) => num + 1)
                                .filter( (num) => num >= 40)     // pahle sabhi elements multiply honge and fir next map mein multiplied 
//                                                                  //elements pass honge and 2nd map mein +1 wali command run hogi

console.log(newNums);