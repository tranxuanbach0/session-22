let arr = []
let count = +prompt("nhap vao phan tu muon them");
arr = prompt("nhap vao 1 day so")
let max;
for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
        max = arr[i];
    }
}
console.log("Phần tử có giá trị lớn nhất trong mảng là: " + max);
