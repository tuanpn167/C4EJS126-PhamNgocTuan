// // BTVN - TUAN PHAM - BUOI 10



// Q1

let person = {
    name:       'Bob',
    occupation: 'web developer',
    hobbies:    'painting',
  };

// Method 1
console.log(person.name);
console.log(person.occupation);
console.log(person.hobbies);

// Method 2
console.log(person["name"]);
console.log(person["occupation"]);
console.log(person["hobbies"]);




// Q2

let obj = {
    b: 2,
    a: 1,
    c: 3,
  };
  
let keys = Object.keys(obj);

const keysUppercased = keys.map(key => key.toUpperCase());

console.log(keysUppercased);




// Q3

let myFamily = {
    quantity: 4,
    member: ["Dad", "Mom", "Me", "Daughter"],
    location: "Vietnam",
};

let family = Object.create(myFamily);



// Q4

let obj = {
    foo: { a: "hello", b: "world" },
    bar: ["example", "mem", null, { xyz: 6 }, 88],
    qux: [4, 8, 12]
};

// method 1
obj.bar.xyz = 606;

console.log(obj.bar);


// method 2
obj["bar"]["xyz"] = 606;

console.log(obj);