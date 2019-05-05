class user {
	fname:string;
	lname:string;

	constructor(fname, lastName){
		this.fname = fname;
		this.lname = lastName;
	}
	
	display(){
		console.log(`${this.fname} :: ${this.lname}`); //string interpolation
	}
}

var obj = new user('hello', 'qshore');
obj.display();