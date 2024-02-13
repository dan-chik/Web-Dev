// 1
let a = +prompt("The first number?", "");
let b = +prompt("The second number?", "");

alert( a + b );

// 2
alert( Math.round(6.35 * 10) / 10 ); // 6.35 -> 63.5 -> 64(rounded) -> 6.4

// 3
function readNum(){
    let num;

    do {
        num = prompt("Enter a number:", 0);
    } while ( !isFinite(num) );

    if (num === null || num === '') return null;

    return +num;
}
alert(`Read: ${readNumber()}`);

// 4
function random(min, max) {
    return min + Math.random() * (max - min);
}
  
alert( random(1, 5) );
alert( random(1, 5) );
alert( random(1, 5) );

// 5
function randomInteger(min, max) {
    // now rand is from  (min-0.5) to (max+0.5)
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand);
}
  
alert( randomInteger(1, 3) );
