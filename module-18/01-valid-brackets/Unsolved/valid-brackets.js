// Write a function to take a string and return true if it contains valid sets of matching brackets, else return false

const validBrackets = function(str) {
    let arr = [];
    
    for(let i = 0; i < str.length; i++) {
        let char = str[i];

        if(char === '(' || char === '[' || char === '{') {
            arr.push(char);
            continue;
        }
        if(char === ')') {
            if(arr.pop() !== '(') {
                return false;
            }
            continue;
        }
        if(char === ']') {
            if(arr.pop() !== '[') {
                return false;
            }
            continue;
        }
        if(char === '}') {
            if(arr.pop() !== '{') {
                return false;
            }
            continue;
        }
    }
    return arr.length === 0;
};
