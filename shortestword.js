
// Shortest Word
// https://www.codewars.com/kata/57cebe1dc6fdc20c57000ac9


function findShort(s) {
    return s.split(' ').sort(function (a, b) {
        return a.length - b.length
    })[0].length;

}

console.log(findShort("bitcoin take over the world maybe who knows perhaps"));