const button = document.querySelector("#button");
const para = document.querySelector("#para");

button.addEventListener('click', async() => {
    try{
        const url = "https://official-joke-api.appspot.com/jokes/random";
        let response = await fetch(url);
        let data = await response.json()
        para.textContent = `${data.setup}`;  
        setTimeout(() => {
            para.textContent = `${data.setup}${data.punchline} 😂`;    
        }, 3000);
        
    } catch(err){
        console.error("Error: ", err);
        para.textContent = "Oops! Joke nahi mil payi 😅";
    }
})