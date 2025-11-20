// numbers print krne hai 1-100 and unmein se jo number 3 se divisible hoga toh print krna fizz, agr 5 se divisible toh print krna buzz, agr dono se divisible ho toh print krna hai fizzbuzz
function printing(){
    for (let i = 1; i <= 100; i++) {
        if(i % 3 === 0 && i % 5 === 0){
            console.log('fizzbuzz');
        } else if(i % 5 === 0){
            console.log('buzz');
        } else if(i % 3 === 0 ){
            console.log('fizz');
        } else {
            console.log(i);
        }
    }
}

printing();