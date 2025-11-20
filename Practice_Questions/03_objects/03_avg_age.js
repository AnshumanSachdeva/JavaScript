const averageAge = () => {
  let employees = [
    { name: "John", age: 28 },
    { name: "Alice", age: 34 },
    { name: "Bob", age: 26 },
  ];
  let totalAges = employees.reduce((acc, curr) => {
    return acc + curr.age;
  }, 0);
  let avg = totalAges / employees.length;
  return avg;
};
console.log(averageAge());
