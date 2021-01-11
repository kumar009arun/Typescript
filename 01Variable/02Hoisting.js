//Hoisting : Declaration block can be define even after it;s rendering block.
f1(); //hoisting.
function f1() {
    x = 10;
    console.log("value of x:", x);
    var x; //hositing
}
