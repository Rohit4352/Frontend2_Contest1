/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperbyMap(){
  arr.map(varMap); 
  // Each element is stored in "varMap" variable
  
  function varMap(value) {
    if (value.profession === "developer") {
      console.log(value);
    }
  }
}

function PrintDeveloperbyForEach() {
  arr.forEach(varForEach); 
// Each element is stored in "varForEach" variable
  
  function varForEach(arr) {
    if (arr.profession === "developer") {
      console.log(arr);
    }
  }
}

function addData() {
// adding new object with new values
  const num = arr[arr.length-1].id ;
  let newObj = { id: num+1, name: "rohit", age: ageCal(), profession: profSelector() };

  arr.push(newObj);
  console.log(arr);
}

function removeAdmin() {
  var filtered = arr.filter(function(prof) { 
    return prof.profession != "admin"; 
  }); 

  //this will not change the original array of object
  console.log(filtered);
}

function concatenateArray() {
  const num = arr[arr.length-1].id ;

  let other_arr = [
    { id: num+1, name: "Richa", age: ageCal(), profession:profSelector() },
    { id: num+2, name: "Rohan", age: ageCal(), profession: profSelector() },
    { id: num+3, name: "Prashant", age: ageCal(), profession: profSelector() },
  ];

  arr = arr.concat(other_arr);
  console.log(arr);
}

function ageCal() {
  let age = Math.floor(Math.random() * 63);

  return age.toString();
}

function profSelector() {
  var chosenValue = Math.random() < 0.7 ? "developer" : "admin";

  return chosenValue;
}
