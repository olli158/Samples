/// <reference path="typings/jquery/jquery.d.ts" />
var TestInterface;
(function (TestInterface) {
    var Student = (function () {
        function Student(firstname, middleinitial, lastname) {
            this.firstname = firstname;
            this.middleinitial = middleinitial;
            this.lastname = lastname;
            this.fullname = firstname + " " + middleinitial + " " + lastname;
        }
        return Student;
    })();
    TestInterface.Student = Student;    
    function greeter(person) {
        return "Hello dear " + person.firstname + " " + person.lastname;
    }
    TestInterface.greeter = greeter;
    TestInterface.user = {
        firstname: "Eugeniusz",
        lastname: "Kowalski"
    };
    //var user = new Student("Eugeniusz", "M.", "Kowalski");
    })(TestInterface || (TestInterface = {}));
$(function () {
    $("#content2").html(TestInterface.greeter(TestInterface.user));
});
//@ sourceMappingURL=interfaces.js.map
