let longestWord = (str) => {
    return str
        .split(" ")
        .reduce((longest, curr) => curr.length > longest.length ? curr : longest);
};

console.log(longestWord("bhai tu to pro coder hai"));
// Output: "coder"
