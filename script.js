let product = (a, b) => {
    return a * b;
};

console.log(product(5, 4));

const student = {
    name: "Sukanya Roy",
    age: "24",
    greet() {
        console.log("Hi, I am", this.name);
    }
};
student.greet();