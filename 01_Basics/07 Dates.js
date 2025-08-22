let myDate = new Date();
console.log(myDate); // Current date and time
console.log(myDate.toString()); // Current date and time in string format
console.log(myDate.toLocaleString()); // Current date and time in local format
console.log(myDate.toDateString()); // Current date in string format
console.log(myDate.toTimeString()); // Current time in string format
console.log(myDate.toISOString()); // Current date and time in ISO format
console.log(myDate.toLocaleDateString()); // Current date in local format
console.log(myDate.toLocaleTimeString()); // Current time in local format
console.log(myDate.getFullYear()); // Current year
console.log(myDate.getMonth()); // Current month (0-11, where 0 is January and 11 is December)
console.log(myDate.getDate()); // Current day of the month (1-31)
console.log(myDate.getDay()); // Current day of the week (0-6, where 0 is Sunday and 6 is Saturday)
console.log(myDate.getHours()); // Current hour (0-23) where 0 is midnight and 23 is 11 PM
console.log(myDate.getMinutes()); // Current minutes (0-59)

console.log(myDate.toLocaleString('default' ,{
    weekday: 'long', // 'short' for abbreviated weekday names, 'narrow' for single-letter weekday names
    year: 'numeric', // '2-digit' for two-digit year
    timeZone: 'Asia/Kolkata', // Specify the timezone, e.g., 'America/New_York', 'Europe/London', etc.
}));

console.log(typeof myDate); // object

let myDate2 = new Date(2026,1,25); // Creating a date object with a specific date , time , hour , minutes , seconds , year, month, and day
console.log(myDate2); // Date object for February 25, 2026 // 2026-02-24T18:30:00.000Z

let myDate3 = new Date("2026-02-25T00:00:00Z"); // Creating a date object with a specific date in ISO format
console.log(myDate3); // Date object for February 25, 2026 // 2026-02-24T18:30:00.000Z

let myDate4 = new Date("February 25, 2026 00:00:00"); // Creating a date object with a specific date in string format

let myDate5 = new Date("2026-02-25"); // Creating a date object with a specific date in string format

let myDate6 = new Date("2026-02-25T00:00:00+05:30"); // Creating a date object with a specific date in string format with timezone offset

let myDate7 = new Date("01/25/2026"); // Creating a date object with a specific date in string format with US format (MM/DD/YYYY)
let myDate8 = new Date("25/01/2026"); // Creating a date object with a specific date in string format with UK format (DD/MM/YYYY)

let myTimestamp = Date.now(); // Getting the current timestamp in milliseconds since January 1, 1970
console.log(myTimestamp); // Current timestamp in milliseconds
console.log(myTimestamp / 1000); // Current timestamp in seconds but ismein decimal value bhi aata hai
console.log(Math.floor(myTimestamp / 1000)); // Current timestamp in seconds without decimal value

