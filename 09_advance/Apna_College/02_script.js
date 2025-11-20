// // to select attribute, we ca use getAttribute
// let div = document.querySelector("div")
// console.log(div);
// let id = div.getAttribute("id")
// console.log(id);
// let name = div.getAttribute("name")
// console.log(name);

// let p = document.querySelector("p");
// console.log(p.getAttribute("class"));

// // we can also set the attribute value using setAttribute
// p.setAttribute("class", "new")
// console.log(p.getAttribute("class"));

// // style attribute
// let div1 = document.querySelector("#first")
// div1.style.backgroundColor = "green"
// div1.innerText = "Hello"

// // to insert a new element
// /* To insert a new element we have to create a new element first
// 1. let el = document.createElement("div")
// 2. then we can use these properties as per our choice.
//     2.1. node.append(el);// adds at  the end of node(inside)
//     2.2. node.prepend(el) // adds at the start of the node(inside)
//     2.3. node.before(el) // adds before the node(outside)
//     2.4. node.after(el) // add after the node (outside) */

// let btn = document.createElement("Button")
// btn.innerText = "wow"
// let div2 = document.querySelector("div");
// div2.after(btn);

// let newHeading = document.createElement("h1")
// newHeading.innerHTML = "<i>Hii</i>";
// div2.before(newHeading)

// // we can also delete elements by node.remove()
// btn.remove()
// newHeading.remove()


// practice 1: To crate a new button and add text click me, background color red, and text color white and insert the button as first element in body tag

// let btn = document.createElement("button");
// btn.innerText = "Click me"
// btn.style.backgroundColor = "red"
// btn.style.color = "white"
// let body = document.querySelector("body");
// body.prepend(btn)

// practice 2: create p tag give it class and styling. craete a new class in css and append this class tp <p> element

let para = document.querySelector("p");
console.log( para.getAttribute("class")
);

para.classList.add("new") 
para.classList.remove('new')