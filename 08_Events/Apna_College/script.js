// let btn1 = document.querySelector("#btn1")
// // btn1.onclick = () => {
// //     console.log("Btn 1 was clicked ");
// // }
// // let div1 = document.querySelector("#div1")
// // div1.onmouseover = (e) => {
// //     console.log('Inside div');
// //     console.log(e);
// //     console.log(e.type);
// //     console.log(e.target);
    
// // }
// btn1.addEventListener("click", () =>{
//     console.log("Button1 was clicked h1");
    
// })
// btn1.addEventListener("click", () =>{
//     console.log("Button1 was clicked h2");
    
// })
// const handler3 =  () =>{
//     console.log("Button1 was clicked h3");

// }
// btn1.addEventListener("click", handler3)
// btn1.addEventListener("click", () =>{
//     console.log("Button1 was clicked h4");

// })


// btn1.removeEventListener("click", handler3)

let currmode = "light"
let modebutton = document.querySelector("#mode")
modebutton.addEventListener("click", ()=>{
    if (currmode === "light") {
        currmode = "dark"
        document.querySelector("body").classList.add("dark")
        document.querySelector("body").classList.remove("light")
    } else {
        currmode = "light"
        document.querySelector("body").classList.add("light")
        document.querySelector("body").classList.remove("dark")
    }
    console.log(currmode)
})