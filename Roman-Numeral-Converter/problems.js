
const romanNumTable = {
    1: "I",
    4: "IV",
    5: "V",
    9: "IX",
    10: "X",
    40: "XL",
    50: "L",
    90: "XC",
    100: "C",
    400: "CD",
    500: "D",
    900: "CM",
    1000: "M"
}


let remainder;
let response;
let roman = "";

const convertToRoman = (num) => {

    let romanNumber = "";

    if(num >= 1000 && num < 10000) {
        response =  getRomanNum(num, 1000, romanNumber);
        romanNumber = response[0];
        num = response[1];
    }    


    if(num >= 100 && num < 1000) {
        response =  getRomanNum(num, 100, romanNumber);
        romanNumber = response[0];
        num = response[1];
    }    

    if(num >= 10 && num < 100) {
        response =  getRomanNum(num, 10, romanNumber);
        romanNumber = response[0];
        num = response[1];
    }


    if(num >= 1 && num < 10) {
        response =  getRomanNum(num, 1, romanNumber);
        romanNumber = response[0];
    }

    return romanNumber;

}

const getRomanNum = (num, i, romanNum) => {
    
    remainder = num % i;
    num -= remainder;
    let lowerBound = 0;
    let upperBound;

    roman = romanNum;
    

    num == (9 * i) ? roman += romanNumTable[9 * i] : null

    if (num > (5 * i) && num < (9 * i)) { 
        roman += romanNumTable[5 * i];
        upperBound = num - (5 * i);

        while(lowerBound <  upperBound ) {
            roman += romanNumTable[i]; 
            lowerBound += i;
        }
    } 

    num == (5 * i) ? roman += romanNumTable[5 * i] : null
    num == (4 * i) ? roman += romanNumTable[4 * i] : null
     
    if(num < (4 * i)) {
        upperBound =  num;     
        while(lowerBound < upperBound ) {            
            roman += romanNumTable[i]; 
            lowerBound += i;
        }
    }

    return [roman, remainder];
}
