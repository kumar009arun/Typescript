var y;
y = 12;
console.log("value of y :", y);
function f1() {
    var x = 12;
    if (x == 12) {
        var x = 10; //shadowing
        var y_1 = 2;
        //let y = 3; not shadowing
        console.log(x);
    }
    console.log(x);
}
f1();
