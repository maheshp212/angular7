interface student{
	fname:string;
	lname:string;

	display();
}

class user implements student{
	fname:string;
	lname:string;

	constructor(fname, lastName){
		this.fname = fname;
		this.lname = lastName;
	}
	
	display(){
		console.log(`${this.fname} :: ${this.lname}`); //string interpolation
	}

	showMore(){
		console.log('showmore invoked')
	}
}

var obj = new user('hello', 'qshore');
obj.display();