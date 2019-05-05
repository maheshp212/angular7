class user {
	fname:string = 'hello';
	lname:string = 'world';

	display(){
		console.log(this.fname + '::' + this.lname); // string concatenation
	}
}

class  student extends user {
	age: number = 45;
	showDetails(){
		this.display();
		console.log(this.age);
	}	
}

var obj = new student();
obj.showDetails();