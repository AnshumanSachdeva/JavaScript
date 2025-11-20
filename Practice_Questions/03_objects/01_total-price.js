let totalPrice = () => {
    let products = [
  { name: 'laptop', price: 60000 },
  { name: 'mobile', price: 30000 },
  { name: 'tablet', price: 20000 }
];
    let ans = products.reduce( (acc, curr) => {
        return curr.price + acc
    },0)
    return ans;
}
console.log(totalPrice());
