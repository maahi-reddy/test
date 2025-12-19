function User(name, email) {
    this.name = name;
    this.email = email;
}

User.prototype.login = function () {
    console.log(this.name + " has logged in");
};
const user1 = new User("Maahi", "maahi@gmail.com");

user1.login();