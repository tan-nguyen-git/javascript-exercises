const reverseString = function(str) {
    str = str.split("");
    let n = str.length;
    
    console.log(n);
    for(let i =0; i < Math.floor(n/2);i++){
        let j = n-i-1;
        console.log(i);
        console.log(j);
        let temp = str[i];
        str[i] = str[j];
        str[j] = temp;
    }
    return str.join("");

};

console.log(reverseString("hello"));
// Do not edit below this line
module.exports = reverseString;
