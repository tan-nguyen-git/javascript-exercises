const helper = (e, arr)=>{
    return arr.find(x=>x ===e);
}

const removeFromArray = function(arr, ...toFilter) {
    return arr.filter(e=> !helper(e,toFilter));
};


console.log(removeFromArray([1,2,3], 1));

// Do not edit below this line
module.exports = removeFromArray;
