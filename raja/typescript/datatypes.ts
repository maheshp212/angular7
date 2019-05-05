/*datatypes
- primitive (pre-defined) data types
- number
- string
- boolean
- null

- non primitive(user-defined) data types
 - array
 - interface
 - abstract

 parent data type: **any**
*/

           var age:number = 34; //number
           var fname:string = 'qshore'; //string
           var fruits:string[] = ['angular', 'tech']; // array
           var user:any= {fname:'qshore', lname:'tech'}; //object
           var interest:null = null; //null
           var gender:boolean = true; //boolean
           var undf:any; // undefined-- variable with no value


           console.log(age);
           console.log(fname);
           console.log(fruits);
           console.log(fruits[1]);
           console.log(user);
           console.log(user.fname); // value :: qshore
           console.log(interest);
           console.log(gender);
           console.log(undf);

           var a:number = 2;
           var b:number = 3;
           
           console.log("a+b :: "+a+b); // 23
           console.log("a+b :: "+(a+b)); //5
           console.log("a-b :: "+(a-b));
           console.log("a*b :: "+(a*b));
           console.log("a/b :: "+(a/b));
           console.log("a%b :: "+(a%b));

           a += b;
           console.log(a); //5
           a -= b;
           console.log(a);  // 2
           a *= b;
           console.log(a); //6
           a /= b;
           console.log(a); //2
           a %= b;
           console.log(a);  //2


           
            if(a !== 2)  {
                console.log('if');
            } else if(a <2){
                console.log('else if');
            } else {
                console.log('else');
            }

            var c:string = !(a>2) ? 'yes' : 'no';

            switch(a){
                case 2 :
                    console.log(2);
                    break;
                case 22 :
                    console.log(22);
                    break;
                case 222 :
                    console.log(222);
                    break;
                case 2222 :
                    console.log(2222);
                    break;
                default:
                    console.log('default');
                    break;
            }

            for(var i:number=0;i<10;i++){
                console.log('var for ::' + i); // 9
            }


            var j:number =0;
            while(j<10){
                j++;
                console.log( "while ::" +j);//10
            }

            var k:number=0;
            do{
                console.log("do while ::" +k); // 9
                k++;
            } while(k<10);


            function callMe():void{
                console.log('callMe invoked');
            }    
            callMe();

            function pcallMe(a:number,b:number):void{
                var c:number = a+b
                console.log('pcallMe invoked :: ' + c);
            }    
            pcallMe(2,3);

            function rpcallMe(a:number,b:string):string{
                var c:string = a+b
                console.log('rpcallMe invoked :: ' + c);
                return c;
            }    
            var res = rpcallMe(2,'3');
            console.log(res);
////////////////////////////////////////////////
 
          // anonymous function : function without funciton name 
          //variable function: assigning an `anonymous function` to a variable
            var vcallMe = function ():void{
                console.log('vcallMe invoked');
            }    
            vcallMe();
            console.log(vcallMe) //it will print function

            var vpcallMe = function(a:number,b:number):void{
                var c:number = a+b
                console.log('vpcallMe invoked :: ' + c);
            }    
            // var v = vpcallMe(2,3);
            // console.log(v)

            console.log(vpcallMe(2,3));
            //vpcallem invoked :: 5
            //undefined

            var vrpcallMe = function (a:number,b:number):number{
                var c:number = a+b
                console.log('vrpcallMe invoked :: ' + c);
                return c;
            }    
            // var vres = vrpcallMe(2,3);
            // console.log(vres);

            console.log(vrpcallMe(2,3));            


