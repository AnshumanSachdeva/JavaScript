const removeDuplicates = () =>{
    let arr = [1,1,2,3,2,4,5,3,1,6,3]
    for (let i = 0; i < arr.length; i++) {
        for (let j = i+1; j < arr.length; j++) {
            if(arr[i] === arr[j]){
                arr.splice(j,1);
                j--             // yeh zaruri hai bcz, splice k baad index change ho jata hai
            }
            
        }
        
    }
    return arr;
}

console.log(removeDuplicates())