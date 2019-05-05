class user {
	fname:string = 'hello';
	lname:string = 'world';

	constructor(){
		console.log('constructor invoked');
	}
	
	display(){
		console.log(`${this.fname} :: ${this.lname}`); //string interpolation
	}
}

class  student extends user {

	showDetails(){
		this.display();
	}	
}

var obj = new student();
obj.showDetails();