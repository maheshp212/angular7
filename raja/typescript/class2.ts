class  user{
	//feilds
	fname: string = 'hello';
	lname:string ='world';

	constructor(){

		console.log('constructor invoked');
	}

	//methods
	display(){
		console.log(this.fname + this.lname)
	}

	//members :: feilds + methods
}

var obj = new user();
obj.display();