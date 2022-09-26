const plateA = 'KAA001A'
const plateB = 'KDH999Z'
const charNumMap = new Map([
    ['A', 1],
    ['B', 2],
    ['C', 3], 
    ['D', 4],
    ['E', 5],
    ['F', 6],
    ['G', 7],
    ['H', 8],
    ['I', 9],
    ['J', 10],
    ['K', 11],
    ['L', 12],
    ['M', 13],
    ['N', 14],
    ['O', 15],
    ['P', 16],
    ['Q', 17],
    ['R', 18],
    ['S', 19],
    ['T', 20],
    ['U', 21],
    ['V', 22],
    ['W', 23],
    ['X', 24],
    ['Y', 25],
    ['Z', 26],    
])

/**
 * Removes the first character of the number plate (insignificant) then iterates over the remaining characters
 * while combining them into a single digit (Digit representation of the number plate)
 * @param {string} plate - 7 char Kenyan number plate string
 * @returns {Number} - Digit representation of the number plate
 */
function processPlate (plate) {
    const plateArr = plate.split('').slice(1,plateA.length).reduce((acc, char) => {
        if ( !(Number(char))) {
            acc.push(charNumMap.get(char))
        }
        else {
            acc.push(Number(char))
        }
        return acc;
    }, [])

    return +plateArr.join('')
}

function getVehicleCount(plateA, plateB) {
    const numericPlateA = processPlate(plateA)
    const numericPlateB = processPlate(plateB)
    return Math.abs(numericPlateB - numericPlateA)
}



console.log(getVehicleCount(plateA, plateB))