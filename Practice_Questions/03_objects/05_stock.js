//Get list of products in stock
let check = () => {
  let products = [
    { name: "Laptop", inStock: true },
    { name: "Tablet", inStock: false },
    { name: "Phone", inStock: true },
  ];
  let ans = products.filter((product) => {
    if (product.inStock) {
      console.log(product.name);
    }
  });
  return ans;
};
check();
