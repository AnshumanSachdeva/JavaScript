// 1. For Accessing Elements

    // 🔹 Select element by ID (returns single element)
    let title = document.getElementById("main-title"); 
    // ⬆️ Returns: <h1 id="main-title">Hello</h1>

    // 🔹 Select elements by class name (returns HTMLCollection)
    let items = document.getElementsByClassName("list-item"); 
    // ⬆️ Returns: [HTMLCollection] like array → doesn't support forEach

    // 🔹 Select elements by tag name (returns HTMLCollection)
    let allDivs = document.getElementsByTagName("div");
    // ⬆️ Returns: All <div> elements

    // 🔹 Select first matching element using CSS selector
    let card = document.querySelector(".card"); 
    // ⬆️ Returns: first element with class 'card'

    // 🔹 Select all matching elements using CSS selector
    let allItems = document.querySelectorAll(".list-item"); 
    // ⬆️ Returns: NodeList → supports forEach ✅


//2. Attributes


    let link = document.querySelector("a");

    // 🔹 Get attribute value
    link.getAttribute("href");       
    // ⬆️ Returns: "https://google.com"

    // 🔹 Set attribute value
    link.setAttribute("href", "https://chat.openai.com"); 
    // ⬆️ Updates href attribute

    // 🔹 Remove attribute
    link.removeAttribute("target");  
    // ⬆️ Removes target="_blank" etc.


//3. Styling Elements

    let box = document.querySelector(".box");

    // 🔹 Inline style changes
    box.style.backgroundColor = "yellow";  
    // ⬆️ Adds inline CSS

    // 🔹 Class control
    box.classList.add("active");        
    // ⬆️ Adds class "active"

    box.classList.remove("hidden");     
    // ⬆️ Removes class

    box.classList.toggle("highlight");  
    // ⬆️ Adds if not present, else removes

    box.classList.contains("dark");     
    // ⬆️ Returns true/false if class exists


//4. Creating, Appending, Removing Elements


    // 🔹 Create a new element
    let li = document.createElement("li");      
    // ⬆️ Creates: <li></li>

    // 🔹 Add text to new element
    li.textContent = "New Item";

    // 🔹 Append element as last child
    document.querySelector("ul").appendChild(li);
    // ⬆️ Adds <li> to <ul> end

    // 🔹 Insert before a specific element
    ul.insertBefore(li, ul.children[1]);        
    // ⬆️ Adds before second item

    // 🔹 Remove a child element
    ul.removeChild(ul.firstElementChild);        
    // ⬆️ Removes first child of <ul>


//5. NodeList vs HTMLCollection (Important Difference)


    let nlist = document.querySelectorAll(".list-item");     
    // ⬆️ NodeList → static, supports forEach ✅

    let hlist = document.getElementsByClassName("list-item");
    // ⬆️ HTMLCollection → live, no forEach ❌

    nlist.forEach((item) => {
    item.style.color = "blue";  
    });

    // For HTMLCollection, use classic loop:
    for (let i = 0; i < hlist.length; i++) {
    hlist[i].style.color = "green";
    }


//6. DOM Tree Navigation


    let el = document.querySelector(".item");

    // 🔹 Parent and children
    el.parentNode;             // ⬆️ Returns parent node
    el.children;               // ⬆️ Returns HTMLCollection of children

    // 🔹 Sibling navigation
    el.nextElementSibling;     // ⬆️ Next element on same level
    el.previousElementSibling; // ⬆️ Previous element on same level

    // 🔹 First/last child
    el.firstElementChild;      // ⬆️ First element inside
    el.lastElementChild;       // ⬆️ Last element inside


//7. Event Handling


    let btn = document.querySelector("button");

    // 🔹 Add event listener
    btn.addEventListener("click", function () {
    alert("Button clicked!");
    });
    // ⬆️ On click, alert will trigger

    // 🔹 Remove event listener
    btn.removeEventListener("click", myFunction);
    // ⬆️ Removes attached function if matched

    // 🔹 Prevent default behaviour (useful in forms)
    form.addEventListener("submit", function (e) {
    e.preventDefault();  
    });
    // ⬆️ Stops page from reloading
