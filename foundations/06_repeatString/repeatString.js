const repeatString = function(str, n) {
    if(n<0) return 'ERROR';
    if(n == 0) return '';
    let word = str;
    for(let i =0; i < n-1 ;i++){
        str += word;
    }
    return str;

};

// Do not edit below this line
module.exports = repeatString;
