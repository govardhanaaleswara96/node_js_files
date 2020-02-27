// 1.Normal Function
let firstName = "Govardhan";
let lastName = "Aaleswara";
let age = 23;

function getAge(fName, lName, val) {
  return `${fName} ${lName} age is ${val} `;
}

console.log(getAge(firstName, lastName, age));

// 2.arrow function
let getAgeArrow = (fName, lName, val) => {
  return `${fName} ${lName} age is ${val} `;
};
console.log(getAgeArrow(firstName, lastName, age));

//3.object access
var course = {
  name: "Node Js",
  title: "Mean",
  uses: "Server Side",
  summary() {
    return `${this.name} is a ${this.uses} language`;
  }
  //   summary: function() {
  //     console.log(`${this.name} is a ${this.uses} language`);
  //   }
};
console.log(course.name);
course.summary();

//4.array methods
let arr = ["Mongo Db", "Express Js", "Angular", "Node Js"];
let arrMap = arr.map(e => {
  return `${e} Is Part Of Mean Stack`;
});

console.log(arr);
console.log(arrMap);

//5.spread and rest operators
let copyArr = [...arr];
console.log(copyArr);
let add = (...arg) => {
  let sum = arg.reduce((a, b) => {
    return a + b;
  });
  return sum;
};
console.log(add(10, 10, 50, 10));

//6.destructing
let { name, title } = course;
console.log(title);
console.log(name);
let [db, framework, client, server] = arr;
console.log(db, framework, client, server);

//7.async
setTimeout(() => {
  console.log("Asyn Fn1");
}, 1000);

console.log("Sync Fn1");
console.log("Sync Fn2");

let fetchData = callback => {
  setTimeout(() => {
    callback("Done");
  }, 1500);
};

setTimeout(() => {
  console.log("Time Is Done");
  fetchData(text => {
    console.log(text);
  });
}, 2000);

//8.promises
let fetchData1 = () => {
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Promise Done");
    }, 1500);
  });
  return promise;
};
setTimeout(() => {
  console.log("Promise Timer Is Done");
  fetchData1()
    .then(text => {
      console.log(text);
      return fetchData1();
    })
    .then(text2 => {
      console.log(text2);
    });
}, 2000);
