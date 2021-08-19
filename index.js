// Your code here
function mapToNegativize(sourceArray) {
    let newArray = []
    for (const el of sourceArray) {
        newArray.push(el * -1)
    }
    return newArray
}

function mapToNoChange(sourceArray) {
    let newArray = []
    for (const el of sourceArray) {
        newArray.push(el)
    }
    return newArray
}

function mapToDouble(sourceArray) {
    let newArray = []
    for (const el of sourceArray) {
        newArray.push(el * 2)
    }
    return newArray
}

function mapToSquare(sourceArray) {
    let newArray = []
    for (const el of sourceArray) {
        newArray.push(el ** 2)
    }
    return newArray
}

function reduceToTotal(sourceArray, startingPoint) {
    let reducer = (accumulator, currentValue) => accumulator + currentValue
    if (startingPoint) {
       return sourceArray.reduce(reducer, startingPoint)
    } else {
       return sourceArray.reduce(reducer)
    }    
}

function reduceToAllTrue(sourceArray) {
    let el = sourceArray.values()
    if (sourceArray.includes(!el)) {
        return false
    } else {
        return true
    }
}

function reduceToAnyTrue(sourceArray) {
    if (sourceArray.find(el => el)) {
        return true
    } else {
    return false
    }
}