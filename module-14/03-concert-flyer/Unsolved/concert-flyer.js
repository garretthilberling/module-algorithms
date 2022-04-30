// Write a function that takes two strings and returns true if every word found in the second string is present in the first string. You will be checking for both words and their frequency. Assume you'll need to worry about casing, but the strings won't contain any punctuation. Assume neither string will be empty

var concertFlyer = function (magazine, flyer) {
    var magArr = magazine.split(' ');
    
    for (var i = 0; i < flyer.split(' ').length; i++) {
        
        var re = new RegExp(`${flyer.split(' ')[i]}`);
        
        if(!magazine.match(re)) {
            return false;
        } else {
            delete magArr[(magazine.split(' ').indexOf(flyer.split(' ')[i]))];
            magazine = magArr.filter(() => true).join(' ');
        }
    }
    return true;
};
