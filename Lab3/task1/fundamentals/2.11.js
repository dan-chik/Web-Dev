// 1
alert( null || 2 || undefined ); // 2
// 2
alert( alert(1) || 2 || alert(3) ); // first 1, then 2
// 3
alert( 1 && null && 2 ); // null
// 4
alert( alert(1) && alert(2) ); // 1 and undefined
// 5
alert( null || 2 && 3 || 4 ); // 3

// 6
let age;
if(age>=14 && age<=90) alert('good')

// 7
if(!(age>=14 && age<=90)) alert('excellent')
if (age<14 || age>90) alert('excellent')

// 8
if (-1 || 0) alert( 'first' ); // -1
if (-1 && 0) alert( 'second' ); // 0
if (null || -1 && 1) alert( 'third' ); // 1

// 9
let login = prompt('Enter login:', '');

if(login='Admin'){
    let password = prompt('Enter password:', password);
    if(password===(''||null)){
        alert('Canceled');
    }
    else if(password==="TheMaster"){
        alert("Welcome!");
    }
    else alert("Wrong password");
}
else if(login===(''||null)){
    alert("Canceled");
}
else alert("I don't know u")