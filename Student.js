// User constructor
function User(name, email) {
    this.name = name;
    this.email = email;
}

// Method on User prototype
User.prototype.login = function () {
    console.log(this.name + " has logged in");
};

// Student constructor
function Student(name, email, rollNo) {
    // Call User constructor to reuse name and email
    User.call(this, name, email);
    this.rollNo = rollNo;
}

// Inherit login() using prototype chain
Student.prototype = Object.create(User.prototype);
Student.prototype.constructor = Student;

// Add new method to Student prototype
Student.prototype.registerEvent = function () {
    console.log(this.name + " registered for an event");
};

// Example usage
const student1 = new Student("Maahi", "maahi@gmail.com", 101);

student1.login();          // inherited from User
student1.registerEvent(); // Student-specific

