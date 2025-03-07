let arr = [9,7,9,4,6];
let oddnum = 0;
let evennum = 0;

for(let i = 0; i < 5; i++){
    if(arr[i] % 2 !== 0){
        oddnum+=arr[i]
    } else {
        evennum+=arr[i]
    }
}
console.log(`so chan la: ${evennum}`);
console.log(`so le la: ${oddnum}`);
