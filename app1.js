function smallBig(arr){
    return [Math.min(...arr), Math.max(...arr)]
}

console.log(smallBig([23, 112, 22, 11, 1]))

module.exports=smallBig