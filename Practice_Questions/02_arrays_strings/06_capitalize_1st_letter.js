let capitalizeWords = (str) => {
    return str
        .split(" ")
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");
};

console.log(capitalizeWords("bhai tu to pro coder hai"));
// Output: "Bhai Tu To Pro Coder Hai"
