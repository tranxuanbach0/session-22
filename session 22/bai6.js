let arr = [2, 5, 7, 1, 8, 6, 2, 5, 7];
let check = +prompt("Nhập vào 1 số:");
let count = 0;

for (let i = 0; i < arr.length; i++) {
    if (arr[i] === check) {
        count++;
    }
}

if (count > 0) {
    console.log("Số " + check + " xuất hiện " + count + " lần");
} else {
    console.log("Số " + check + " không xuất hiện trong mảng");
}