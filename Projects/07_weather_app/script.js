let city = document.querySelector("input");
const searchBtn = document.querySelector("#search");

searchBtn.addEventListener("click", async () => {
    let url = "https://geocoding-api.open-meteo.com/v1/search?name=Delhi";
    const res = await fetch(url)
    const data = await res.json()
    console.log(data);
    
})
