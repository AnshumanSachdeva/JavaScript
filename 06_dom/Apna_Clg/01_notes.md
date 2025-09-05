async await >> promise chains >> callback hell
<br>
Sync in JS
Synchronous
Synchronous means the code runs in a particular sequence of instructions given in the program.
Each instruction waits for the previous instruction to complete its execution.
<br>
Asynchronous
Due to synchronous programming, sometimes imp instructions get
blocked due to some previous instructions, which causes a delay in the UI.
Asynchronous code execution allows to execute next instructions
immediately and doesn't block the flow.
<br>
Callbacks
A callback is a function passed as an argument to another function.
<br>
Callback Hell
Callback Hell : Nested callbacks stacked below one another forming a pyramid structure.(Pyramid of Doom)
This style of programming becomes difficult to understand & manage.
<br>
Promises
Promise is for "eventual" completion of task. It is an object in JS.
It is a solution to callback hell.
let promise = new Promise( (resolve, reject) => {...}) // function with two handlers

    <!-- *resolve & reject are callbacks provided by JS -->
<br>
Async-Await
async function always returns a promise.
async function myFunc( ) { .... }
await pauses the execution of its surrounding async function until the promise is settled.

<br>
<br>

-------------------------------------------------Fetch API---------------------------------------------------

<br>

The fetch api provides an interface for fetching (sending / recieving) resources
It uses request and response objects
the fetch() method is used to fetch a resource (data)


let promise = fetch(url, [options]) 
<br>
Understanding terms <br>
AJAX : AJAX is Asynchronous JS & XML.(Yeh purane jamane mein use hota tha)<br>
JSON : JSON is a javascript Object Notation(ajkal yeh use hota hai and jo output aya tha vo aisa hi aaya tha) AJAJ<br>
json() method : returns a second promise that resolves with the result of parsing the response body text as JSON. (Input is JSON, output is js object)