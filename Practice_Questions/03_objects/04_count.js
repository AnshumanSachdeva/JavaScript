const fruits = ["apple", "banana", "apple", "orange", "banana", "apple"];

const fruitCount = {}; // empty object banaya

for (let fruit of fruits) {
  // loop chalayenge har fruit ke liye
  if (fruitCount[fruit]) {
    // agar fruit already object me hai
    fruitCount[fruit] += 1; // to uska count +1 karo
  } else {
    fruitCount[fruit] = 1; // warna usko 1 se start karo
  }
}

console.log(fruitCount);
