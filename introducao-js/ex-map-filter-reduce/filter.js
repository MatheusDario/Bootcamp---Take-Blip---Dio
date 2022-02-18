const nums = [0, 1, 2, 3, 5, 9, 11, 12, 222, 998];

function numPar(arr) {
    //return arr.filter(callback)
    return arr.filter((item) => {return item % 2 !== 0})
}

function callback(item) {return item % 2 === 0}

console.log(numPar(nums));