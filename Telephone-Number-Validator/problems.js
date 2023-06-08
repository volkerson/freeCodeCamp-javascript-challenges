const regExPattern = [ 
    /^(1\s)?([0-9]{3}-){2}[0-9]{4}$/, 
    /^(1\s)([0-9]{3}-){2}[0-9]{4}$/,
    /^(1)\s\([0-9]{3}\)\s[0-9]{3}-[0-9]{4}$/,
    /^(1)\([0-9]{3}\)[0-9]{3}-[0-9]{4}$/,
    /^(1\s)([0-9]{3}\s){2}[0-9]{4}$/,
    /^\([0-9]{3}\)[0-9]{3}-[0-9]{4}$/,
    /^[0-9]{10}$/
];


function telephoneCheck(str) {

    let response = false;

    for(let i = 0; i <= regExPattern.length - 1; i++) {      
        regExPattern[i].test(str) ? response = true : null    
    }

    return response;

  }
  
