let arr = [3, 4];
let arr2 = [3, 4, 5, 6];

const subsets = function(arr, arr2) {
    return arr.every(el => arr2.includes(el));
};

console.log(subsets(arr, arr2));