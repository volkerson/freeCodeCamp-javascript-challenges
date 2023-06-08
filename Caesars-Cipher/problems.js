const decodeTable = {
    1: "A",
    2: "B",
    3: "C",
    4: "D",
    5: "E",
    6: "F",
    7: "G",
    8: "H",
    9: "I",
    10: "J",
    11: "K",
    12: "L",
    13: "M",
    14: "N",
    15: "O",
    16: "P",
    17: "Q",
    18: "R",
    19: "S",
    20: "T",
    21: "U",
    22: "V",
    23: "W",
    24: "X",
    25: "Y",
    26: "Z"
}

const jumpOverPositions = 13;
const lengthOfDecodeAlphabet = Object.keys(decodeTable).length;

let indexOld;
let indexNew;

let regEx = /[A-Z]/;

// get key of a value in an object
function getKeyByValue(object, value) {
    return Object.keys(object).find(key => object[key] === value);
  }

function rot13(str) {

    const resultArr = [];

    for(let i = 0; i <= str.length -1; i++) {
        if(regEx.test(str[i])) {

            // get index of char 
            indexOld = parseInt(getKeyByValue(decodeTable, str[i]));

            // set new index
            indexOld + jumpOverPositions > lengthOfDecodeAlphabet ?
            indexNew = (jumpOverPositions - (26 - indexOld))
            : indexNew = indexOld + jumpOverPositions;

            // add new char to arr
            resultArr.push(decodeTable[indexNew]);
        }
        else {
            // keep char and add it to arr
            resultArr.push(str[i]);
        }
    }

    const result = resultArr.join("");
    return result;
}

