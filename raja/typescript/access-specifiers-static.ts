class user {
	fname:string;
	lname:string;

	constructor(fname, lastName){
		this.fname = fname;
		this.lname = lastName;
	}
	private showfname(){
		console.log(this.fname);
	}
	protected showlname(){
		console.log(this.lname);
	}
	public display2(){
		console.log(`${this.fname} :: ${this.lname}`); 
	}
	static callMe(){
		console.log('cllame invoked');
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
		super.display2(); // calls parenvt
		this.display(); // calls child
		console.log(this.age)
		this.showlname()
	}
	display(){
		console.log('this is child class  display invoked');
	}	
}

var obj = new student('hello', 'qshore', 45);
obj.showDetails();
obj.display2()
user.callMe();