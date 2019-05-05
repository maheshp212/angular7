var user = /** @class */ (function () {
    function user() {
        //feilds
        this.fname = 'hello';
        this.lname = 'world';
        console.log('constructor invoked');
    }
    //methods
    user.prototype.display = function () {
        console.log(this.fname + this.lname);
    };
    return user;
}());
var obj = new user();
obj.display();
