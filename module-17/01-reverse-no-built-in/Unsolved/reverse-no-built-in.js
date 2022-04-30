// Write code to return a new string with all of the characters in `str` reversed.
// You may NOT use the built-in reverse method
let seeStr;
const reverse = (str) => {
    let arr = [];
    let strArr = str.split('');

    for (let i = strArr.length - 1; i >= 0; i--) {
            let pushStr = strArr.slice(i)[0];
            arr.push(pushStr);
    }

    console.log(arr);
    return arr.join('');
};