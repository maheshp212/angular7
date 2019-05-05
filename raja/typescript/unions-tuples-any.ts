
var b:number = 2;
console.log(b);

//union- allowing more than one datatype for a variable
var a:number | string = 2;
a = 'hello';
console.log(a);

var c:number | string | null | boolean = 2;
c = 'hello';
c = true;
c = null;
console.log(c);

// homogeneous arrayut
var fruits:string[] | number[] = ['angular', 'tech']; 
fruits = [34, 46, 45];

//hetrogeneous array
var fruits2:(string | number)[] = ['angular', 'tech', 3 , 45 , 'sdf']; 


// tuple - an hetrogeneous array without the data type
var fruits3 = ['angular', 'tech', 3 , 45 , 'sdf', null ,true]; 

// any -- behaves likes an javascript variable. this means.. it accepts all the datatypes
var d:any = 3;
d = 'hello';
d = true;
d = [234, 'asdf', true];
console.log(d);
