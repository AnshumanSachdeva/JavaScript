// // Accessing Element
//     //by id
//         let heading = document.getElementById("heading") // h1
//         console.dir(heading);
//     // by class name
//         let body = document.getElementsByClassName("body")  // html collection 
//         console.log(body);
//         console.dir(body)
//     // by tag name
//         let para = document.getElementsByTagName('p');
//         console.dir(para);
//         console.log(para);
//     // query selector    // ismein kush b pass kr skte hai bs class pass krni hai toh .classname, id hai toh #id, and tag toh simple ho jata hai, yeh sirf first element return krke dega, agr sare chaiye toh fir, querySelectorAll use krna pdega, yeh nodelist return krta hai

// //DOM Manipulation
//  //Properties
//     // 1.get    // get se value check kr skte hai 
//     // 2.set    // set se value change, ya update kr skte hai

//     // 3.tagName    // returns tag name
//     // 4.innerText  // returns the text content of the element and all its children
//     // 5.innerHTML  // html tags jo use kiye hai, vo bhi return krega
//     // 6.textContent    // text content return krega and hidden cheeje bhi dikhayega
//     // in sabh se values set bhi kr skte hai

// let div = document.querySelector('div')
// console.dir(div)

// div.innerText = 'abcde'
// div.innerHTML = '<div>inner div</div>'

// let h2 = document.querySelector("h2")
// h2.innerText = h2.innerText + "  from Apna College"


let boxes = document.body.querySelectorAll(".box")
// boxes[0].innerText = "1st box"
// boxes[1].innerText = "2nd box"
// boxes[2].innerText = "3rd box"
let idx = 1;
for (const box of boxes) {
    box.innerText = `${idx} box`;
    idx ++;
}