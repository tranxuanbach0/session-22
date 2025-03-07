let students = ["tran xuan bach", "tran yuan bach"];
let randomArr = [1,"hello world",false,true,[]];



//for (let student of students) {
   // console.log(student);
//}
//for (let index in students) {
   // console.log(index);
//}

students.unshift("nguyen van a");
console.log(students);

students.push("nguyen van c");
console.log(students);

students.splice(1, 0, "nguyen van b");
console.log(students);

students[6] = "nguyen van d";
console.log(students);

students.shift();
console.log(students);

students.pop();
console.log(students);

students.splice(2, 1);
console.log(students);