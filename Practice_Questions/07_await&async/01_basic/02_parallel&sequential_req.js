/* 🔁 Sequential Requests – One After Another (Line mein lag ke)
 Concept:
    • Ek request complete hoti hai, tabhi next request start hoti hai.
    • Time zyada lagta hai, but order maintained rehta hai.

 Code Example:
    
    */
    async function sequentialRequest() {
        const res1 = await fetch('https://jsonplaceholder.typicode.com/posts/1')
        const data1 = await res1.json()
        console.log("Post 1: ", data1);
        
        const res2 = await fetch('https://jsonplaceholder.typicode.com/posts/1')
        const data2 = await res2.json()
        console.log("Post 2: ", data2);
    }
    sequentialRequest();
/*
 Flow:
    1. First fetch start hota hai
    2. Jab tak first ka data nahi aata, second wait karta hai
    3. Total time = Tl + T2 
    
🧨 Parallel Requests – Saath Saath Start (Group Study 😎)
 Concept:
    • Saare requests ek saath start hojaate hain.
    • Time kam lagta hai, kyunki sab parallelly chal rahe hote hain.
 
 Code Example:
*/
async function parallelRequest() {
        const res1 = await fetch('https://jsonplaceholder.typicode.com/posts/1')
        const res2 = await fetch('https://jsonplaceholder.typicode.com/posts/1')

        const data1 = await res1.json()
        const data2 = await res2.json()

        console.log("Post 1: ", data1);
        console.log("Post 2: ", data2);
    }
    parallelRequest();

/*
 Flow:
    1. Dono fetch ek saath start hojaate hain
    2. Jab dono ka response ready ho, tabhi aage ka code chalta hai
    3. Total time = Math.max(T1, T2) 
    
 Real-life Metaphor:
    Imagine tu do parcel order karta hai:
        • Sequential: Pehle ek parcel deliver hoga, tab dusra niklega
        • Parallel: Dono ek hi time pe dispatch hote hain, jo pehle aaye use le lete ho
        
        
        
One more thing is that agr mai parallel wale code mein await fetch likhu toh vo sequentially ki tarah work krega and agr sequential mein await hata du toh vo parallel ki tarah kaam kr skta hai but fir mujhe uska response handle krne ka tarika change krna pdega*/