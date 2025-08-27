/* for loop , syntax again similar to cpp wali for */ 

    // for (let i = 0; i <= 10; i++) {
    //     const element = i;
    //     if (element == 5) {
    //         console.log('😎');
    //     }
    //     console.log(element);
    // } 


// for (let i = 0; i < 10; i++) {
//     console.log(`\nOuter loopvalue ${i} \n` );
//     for (let j = 0; j < 10; j++) {
//         console.log(`inner loopvalue ${j} & inner loop ${i} ` );
//     }    
// }


// let myArray = ["flash", "batman", "superman"]

// for (let index = 0; index < myArray.length; index++) {
//     const element = myArray[index];
//     console.log(element)
// }


//****************************************************Break & Continue**************************************************************
// inki working bhi same hai jaise cpp wale break & continue kki hai 

for (let i = 0; i <= 20; i++) {
    if(i == 5) {
        console.log("detected 5");
        break;                              // detected 5 , k bad loop terminate ho jayegi
    }
    console.log( `Value is ${i}`);
    
}
for (let i = 0; i <= 20; i++) {
    if(i == 5) {
        console.log("detected 5");
        continue;                              // detected 5 print ho jayega but value is 5 print nhi hoga and baki ka chalega
    }
    console.log( `Value is ${i}`);
    
}