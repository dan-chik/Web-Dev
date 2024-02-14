//1
function ucFirst(str) {

    if (!str) return str;
    return str[0].toUpperCase() + str.slice(1);
}
  
alert( ucFirst("john") ); // John

// 2
function checkSpam(s1){
    let s2 = s1.toLowerCase();

    return s2.includes('viagra') || s2.includes('xxx')
}
alert( checkSpam('buy ViAgRA now') );
alert( checkSpam('free xxxxx') );
alert( checkSpam("innocent rabbit") );

// 3
function truncate(s, maxLength){
    return (s.length > maxLength) ?
      str.slice(0, maxLength-1) + '...' : s;
}
truncate("What I'd like to tell on this topic is:", 20)

// 4
function extractCurrencyValue(str) {
    return +str.slice(1);
}