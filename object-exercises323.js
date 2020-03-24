/*1. Write a JavaScript program to list the properties of a JavaScript object.
Sample object:

var student = {
    name: "David Rayy",
    sclass: "VI",
    rollno: 12
};
Sample Output: name, sclass, rollno
*/

var student = {
  name: "David Rayy",
  sclass: "VI",
  rollno: 12
};

function listProps(obj) {
  let str = "";
  for (var k in obj) {
    str += k + ", ";
  }
  return str;
}
listProps(student);

/*2. Write a JavaScript program to delete the rollno property from the following object.Also print the object before or after deleting the property.
Sample object:
*/
var student = {
  name: "David Rayy",
  sclass: "VI",
  rollno: 12
};

function delProperty(k) {
  console.log(student[k]);
  delete student[k];
}
delProperty("rollno");

/*3. Write a JavaScript program to get the length of an JavaScript object.
Sample object:
*/
var student = {
  name: "David Rayy",
  sclass: "VI",
  rollno: 12
};

function getObjectLength(obj) {
  return Object.keys(obj).length;
}
getObjectLength(student);

/*4. Write a JavaScript program to display the reading status(i.e.display book name, author name and reading status) of the following books. */
var library = [
  {
    author: "Bill Gates",
    title: "The Road Ahead",
    readingStatus: true
  },
  {
    author: "Steve Jobs",
    title: "Walter Isaacson",
    readingStatus: true
  },
  {
    author: "Suzanne Collins",
    title: "Mockingjay: The Final Book of The Hunger Games",
    readingStatus: false
  }
];

function readingStatus(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let k in arr[i]) {
      console.log(arr[i][k]);
    }
  }
}
readingStatus(library);

/*5. Write a JavaScript program to get the volume of a Cylinder with four decimal places using object classes.
Volume of a cylinder: V = πr2h
where r is the radius and h is the height of the cylinder.*/

class Cylinder {
  constructor(radius, height) {
    this.radius = radius;
    this.height = height;
  }

  get volume() {
    return this.calcVolume();
  }

  calcVolume() {
    return (3.1416 * (this.radius * this.radius) * (2 * this.height)).toFixed(
      4
    );
  }
}
const vol = new Cylinder(10, 10);
console.log(vol.volume);

/*6. Write a Bubble Sort algorithm in JavaScript.
    Note : Bubble sort is a simple sorting algorithm that works by repeatedly stepping through the list to be sorted, Sample Data: [6, 4, 0, 3, -2, 1]
Expected Output: [-2, 0, 1, 3, 4, 6]
*/

function bubbleSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}
bubbleSort([6, 4, 0, 3, -2, 1]);

/*7. Write a JavaScript program which returns a subset of a string.
Sample Data: dog
Expected Output: ["d", "do", "dog", "o", "og", "g"]
*/

function subsetOfString(str) {
  let arr = [];
  let index = 0;
  while (index < str.length) {
    for (let i = 1; i <= str.length; i++) {
      if (index === i) {
      } else {
        arr.push(str.substring(index, i));
      }
    }
    index++;
  }
  return arr;
}
subsetOfString("dog");

/*8. Write a JavaScript program to create a Clock.
    Note : The output will come every second.

Expected Console Output:
"14:37:42"
"14:37:43"
"14:37:44"
"14:37:45"
"14:37:46"
"14:37:47"  */

function clock() {
  var setTime = setInterval(myTimer, 1000);

  function myTimer() {
    var d = new Date();
    var h = d.getHours();
    var m = d.getMinutes();
    var s = d.getSeconds();
    console.log(h + ":" + m + ":" + s);
  }
}
clock();

/*9. Write a JavaScript program to calculate the area and perimeter of a circle.
    Note : Create two methods to calculate the area and perimeter.The radius of the circle will be supplied by the user. */

/*10. Write a JavaScript program to sort an array of JavaScript objects.
Sample Object:

var library = [
    {
        title: 'The Road Ahead',
        author: 'Bill Gates',
        libraryID: 1254
    },
    {
        title: 'Walter Isaacson',
        author: 'Steve Jobs',
        libraryID: 4264
    },
    {
        title: 'Mockingjay: The Final Book of The Hunger Games',
        author: 'Suzanne Collins',
        libraryID: 3245
    }];
Expected Output:

[[object Object] {
    author: "Walter Isaacson",
    libraryID: 4264,
    title: "Steve Jobs"
}, [object Object] {
    author: "Suzanne Collins",
    libraryID: 3245,
    title: "Mockingjay: The Final Book of The Hunger Games"
}, [object Object] {
    author: "The Road Ahead",
    libraryID: 1254,
    title: "Bill Gates"
}]
*/

/*11. Write a JavaScript function to print all the methods in an JavaScript object.
Test Data:
console.log(all_properties(Array));
["length", "name", "arguments", "caller", "prototype", "isArray", "observe", "unobserve"]
*/

//12. Write a JavaScript function to parse an URL.

//13. Write a JavaScript function to retrieve all the names of object's own and inherited properties.

//14. Write a JavaScript function to retrieve all the values of an object's properties.

//15. Write a JavaScript function to convert an object into a list of[key, value] pairs.

//16. Write a JavaScript function to get a copy of the object where the keys have become the values and the values the keys.

//17. Write a JavaScript function to check if an object contains given property.

//18. Write a JavaScript function to check whether a given value is a DOM element.
