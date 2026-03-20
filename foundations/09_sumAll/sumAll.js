const sumAll = function(a,b) {
    if(typeof a ==="number" && typeof a ==="number" ){
        if(a<0 || b < 0 || !Number.isInteger(a) ||!Number.isInteger(b) ) return "ERROR";
        let space = Math.abs(a-b)+1;
        console.log(space);
        let m = Math.min(a,b);
        console.log(m);

        let res = 0;
        for(let i = 0 ; i < space ; i++){
            res += (m+i);
        
        }
        return res;

    }
    return "ERROR"; 
};
console.log(sumAll(2,4));
// Do not edit below this line
module.exports = sumAll;
