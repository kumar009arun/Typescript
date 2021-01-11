//Meta character
let cities : string[] = ['bam', 'bbsr', 'jajpur'];
let data: any[] = ['data', 10, true];

//Array Constructor
let countries : string[] = new Array('india', 'usa');
//let datas: any[] = new Array(10, true); //error accept the datatype in of first 
//let datas: any[] = new Array(size); //error accept the datatype in of first 
//example:
let datas: any[] = new Array(10); //error accept the datatype in of first 
datas[0] = 'arun';
console.log(cities);
console.log(data);
console.log(datas);
console.log(countries);


//array methods
//1.Reading data 
    //toString()
    //join()
    //filter()
    cities.filter( function(value, indexNo, array) {
        console.log("Value is:",value);
        console.log("Index no is:",indexNo);
        console.log("Array is:",array);
    })

    data.filter(function(e) {
        console.log(e);
    })
    //slice()

//2. Adding value
    //push() atlast
    //unshift() atfirst
    //splice(indexNo, No.of.item to remove)

//3. Removing value
    //pop() atlast
    //shift() atfirst
    //splice(indexNo, NO.ofItem to remove)

//4. Sorting an Array
    //sort()
    //reverse()

//5. Finding an index 
    //index()
    //lastIndexOf()
    //entries()
    //findIndex()
    //find()
    //forEach()
    