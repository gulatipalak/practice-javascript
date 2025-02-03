//reverse a string

//palak = kalap

function stringReverse(str) {
    let newStr = " ";
    let stringLenght = str.length;
    // console.log(stringLenght);
    for(let i = stringLenght-1; i >= 0 ; i--) {
        //console.log(str[i]);
        newStr += str[i];
    }
    console.log(newStr);
    //console.log(str.split("").reverse().join(""));

}

stringReverse("palak gulati");