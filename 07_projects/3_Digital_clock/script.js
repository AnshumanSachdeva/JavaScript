const clock = document.getElementById('clock');
// document.querySelector('#clock')


setInterval(function(){ 
    let date = new Date()
    // console.log(date.toLocaleTimeString());
    clock.innerHTML = date.toLocaleTimeString('en-US')  // en-US sirf Am/Pm k liye kiya uske bina b chal jata but fir am/pm nhi aata
}, 1000)