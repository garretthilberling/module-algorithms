// Write code to create a function that accepts a string and returns the string in camelCase

var camelCase = function(str) {
    return str.toLowerCase().replace(/[^a-zA-Z0-9]+(.)/g, (m, chr) => chr.toUpperCase());
};
