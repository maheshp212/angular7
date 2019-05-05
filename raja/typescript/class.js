var user = /** @class */ (function () {
    function user() {
        //feilds
        this.fname = 'hello';
        this.lname = 'world';
        //members :: feilds + methods
    }
    //methods
    user.prototype.display = function () {
        console.log(this.fname + this.lname);
    };
    return user;
}());
var obj = new user();
obj.display();
