// 1 - result is 1
let i = 3;

while (i) {
  alert( i-- );
} 

// 2.1
//let i = 0;
while (++i < 5) alert( i ); // shows 1, 2, 3, 4
// 2.2
//let i = 0;
while (i++ < 5) alert( i ); // shows 1, 2, 3, 4, 5

// 3.1
for (let i = 0; i < 5; i++) alert( i ); // 0, 1, 2, 3, 4
// 3.2
for (let i = 0; i < 5; ++i) alert( i ); //  0, 1, 2, 3, 4

//4
for (let i=2; i<=10; i++){
    if (i%2==0) alert(i);
}

//5
//let i=0;
while(i<3){
    alert(`number ${i}!`)
    i++;
}

//6
let num;

do {
  num = prompt("Enter a number greater than 100:", 0);
} while (num <= 100 && num);

//7
let n=10;

next: 
for (let i=2; i<=n; i++){
    for (let j=2; j<i; j++){
        if (i%j==0) continue next; // go to next i
    }

    alert(i);
}
