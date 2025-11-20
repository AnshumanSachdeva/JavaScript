const largest = () => {
    let arr = [1, 2, 3, 4, 5, 6, 8, 7, 9, 11, 12];
    let element = arr[0]; // Assume first element is largest

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > element) {
            element = arr[i];
        }
    }
    return element;
}

console.log(largest());  // Output: 1
