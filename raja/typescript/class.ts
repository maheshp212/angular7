class  user{
	//feilds
	fname: string = 'hello';
	lname:string ='world';

	//methods
	display(){
		console.log(this.fname + this.lname)
	}

	//members :: feilds + methods
}

var obj = new user();
obj.display();