const myNums = [1, 2, 3]

const myTotal = myNums.reduce(function (acc , curVal) {
    return acc + curVal
}, 0);
console.log(myTotal);

/* How is it Working ? sabse pahle acc means Accumulator , curVal means currentvalue. Reduce bhi ek call back function hi hai , iss example mein acc 
    curval la sum ho rha hai from mynums. curVal toh hogi array ki vo value jo 1st index pr hai and filhaal k liye acc ko nhi pta uski value , usko
    nhi pta kaha se start krna hai isliye ek initial(starting) value bhi dete hai scope {} k bahar and humari example mein vo initial value zero hai
    ab acc mein initial value aayegi and usmein curVal add hojayega , next time , acc mein (acc + curVal) wali value hogi and curVal mein array k
    next index wali value hogi and again acc+curVal run goga and iski value acc mein chali jayegi , curVal next index ki value aayegi and again addition
    hoga and tab tak hota rahega jab tak array mein values khtm na ho jaye.
    
    NOTE: initial value ka istemaal sirf ek bar hi hoga 👍 */