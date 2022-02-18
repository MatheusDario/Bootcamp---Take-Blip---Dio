const nums = [2, 4, 6];

const carro = {
    value: 10
};

function utilizandoMap(arr) {
    return arr.map((item) => item * 2)
}

console.log('Map sem o this --> ',utilizandoMap(nums));

function mapComThis(arr, thisArgs){
    return arr.map(function (item) {return item * this.value}, thisArgs);
}

console.log('Map com o this --> ',mapComThis(nums, carro));

console.log(nums);