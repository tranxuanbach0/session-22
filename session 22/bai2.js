let number = [2,5,7,4,1,8,6];
let choice = +prompt('nhap vao 1 so');

switch (choice) {
    case 2:
    case 7:
    case 1:
    case 8:
    case 6:
        console.log("chuc ban may man lan sau");
        break;
    case 5:
    case 4:
        console.log("bingo");
        break;
    default:
        console.log("so khong hop le");
}
