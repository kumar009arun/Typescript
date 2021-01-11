let y : number ;
y = 12;

console.log("value of y :", y);


function f2() {
    var x = 12;
    if(x == 12) {
        var x = 10; //shadowing
        let y = 2;
        //let y = 3; not shadowing
        console.log(x); 
    }
    console.log(x);
}

f2();