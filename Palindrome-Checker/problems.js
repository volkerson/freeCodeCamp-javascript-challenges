let regEx = /[a-z0-9]/;

const compareChars = (a,b) => a === b ? true : false

function palindrome(str) {

    // set the string to lower case
    let data = str.toLowerCase();

    // add all aphabetic chars to the array
    const dataArr = [];
    for(let i = 0; i <= data.length - 1; i++) {
        regEx.test(data[i]) ? dataArr.push(data[i]) : null
    }

    // compare all chars
   for(let i = 0; i <= dataArr.length - 1; i++) {
       if(!compareChars(dataArr[i], dataArr[(dataArr.length - 1) - i])) {
        return false
       }
   }

    return true;

  }
  
