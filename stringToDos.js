// Create a function that, given a string, returns all of that string’s contents, but without blanks. 
// If given the string " Pl ayTha tF u nkyM usi c ", return "PlayThatFunkyMusic".

const removeSpaces = (str) => {
    return str.split(" ").join("");
}
// Create a JavaScript function that given a string, returns the integer made from the string’s digits.
//  Given "0s1a3y5w7h9a2t4?6!8?0", the function should return the number 1357924680.

const getDigits = (str) => {
    let stringArr = str.split("");
    let intStr = "";
    for (let i = 0; i < stringArr.length; i++) {
        if (stringArr[i]%1 == 0) {
            intStr += stringArr[i];
        }
    }
    return intStr/1;
}
// Create a function that, given a string, returns the string’s acronym (first letters only, capitalized). 

// Given " there's no free lunch - gotta pay yer way. ", return "TNFL-GPYW". 

// Given "Live from New York, it's Saturday Night!", return "LFNYISN".
const acronyms = (str) => {
    var strArr = str.split(" ");
    var retStr = "";
    for (var i = 0; i < strArr.length; i++) {
        if (strArr[i] == false) {
            continue;
        } else {
            retStr += strArr[i][0].toUpperCase();
        }
    }
    return retStr;
}
//Accept a string and return the number of non-space characters found in the string. 

//For example, given "Honey pie, you are driving me crazy", return 29 (not 35).

const countNonStr = (str) => {
    var strArr = str.split("");
    var count = 0;
    for (var i = 0; ind < strArr.length; i++) {
        if (strArr[ind] == false) {
            continue;
        } else {
            count++;
        }
    }
    return count;
}

// Given a string array and value (length), remove any strings shorter than the length from the array.
const removeShort = (strArr, val) => {
    for (var ind = strArr.length-1; ind >= 0; ind--) {
        if (strArr[ind].length < val) {
            for (var i = ind; i < strArr.length-1; i++){
                var temp = strArr[i];
                strArr[i] = strArr[i+1];
                strArr[i+1] = temp;
            }
            strArr.pop();
        }
    }
    return strArr;
}
