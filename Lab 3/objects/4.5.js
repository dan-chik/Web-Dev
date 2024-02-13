// 1 
function Calculator(){

    this.read = function(){
        this.a = +prompt('a?', 0);
        this.b = +prompt('b?', 0);
    };

    this.sum = function() {
        return this.a + this.b;
    };
    
    this.mul = function() {
        return this.a * this.b;
    };
}

let calculator = new Calculator();
calculator.read();

alert( calculator.sum() );
alert( calculator.mul() );

//-------------------------------------

// 2
function Accumulator(startingValue){
    this.value = startingValue;

    this.read = function(){
        this.value = +prompt ('Enter value:', 0);
    }
}

let accum = new Accumulator(0);
accum.read();
accum.read();
alert(accum.value);