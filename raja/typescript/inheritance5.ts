class user {
	fname:string;
	lname:string;

	constructor(fname, lastName){
		this.fname = fname;
		this.lname = lastName;
	}
	
	display(){
		console.log(`${this.fname} :: ${this.lname}`); 
	}
}

class  student extends user {
	age:number;
	constructor(lname, fname, age){
		super(fname, lname);
		this.age = age;
		console.log('child class constructor invoked');
	}
	showDetails(){
		this.display();
		console.log(this.age)
	}	
}

var obj = new student('hello', 'qshore', 45);
obj.showDetails();