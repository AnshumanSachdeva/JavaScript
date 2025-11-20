// Create a counter that starts from 1 and prints every 2 seconds
// Stop the counter after it reaches 5 using clearInterval
let i = 1;
let interval = setInterval(() => {
  console.log(i);
  i++;
  if (i > 5) {
    clearInterval(interval);
  }
}, 2000);
