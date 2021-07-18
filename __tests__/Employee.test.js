
const Employee = require("../lib/Employee");

//check if can employee object is working //passed
    test("Can instantiate Employee instance", () => {
        const e = new Employee();
        expect(typeof(e)).toBe("object");
    });

 //check if can employee can set employee it with constrctor
    test("Can set id via constructor arguments", () => {
        testId=5;
        const emp = new Employee(testId);
        expect(emp.id).toBe(testId);
    });

   //check if the number is numbers only  //passed
     test("Id must be numbers only", () => {
    const emp = new Employee(5);
    expect(emp.id).toEqual(expect.any(Number));
    });


//set name wiith constrctor args
    test("Can set name via constructor arguments",()=>
    {
        testName="Fizza";
        const emp=new Employee(5,testName);
        expect(emp.name).toEqual(testName)
    });
    //set email via cons args
    test("Can set email via constructor argument", () => {
        const testValue = "fizz.zehra14@gmail.com";
        const emp = new Employee(5, "Fizza", testValue);
        expect(emp.email).toBe(testValue);
    });

    //email must be strng only
    test("check if email is a string", () => {
        const testValue = "fizz.zehra14@gmail.com";
        const emp = new Employee(5, "Fizza", testValue);
        expect(emp.email).toEqual(expect.any(String));
    });

    test("Can get ID via getId()", () => {
        const testValue = 5;
        const e = new Employee(testValue);
        expect(e.getId()).toBe(testValue);
    });

     //check if the number is numbers only  //passed
     test("Id must be numbers only", () => {
        const emp = new Employee(5);
        expect(emp.getId()).toEqual(expect.any(Number));
        });

    test("Can get name via getName()", () => {
        const testValue = "Fizza";
        const e = new Employee(5,testValue);
        expect(e.getName()).toBe(testValue);
    });

    test("Can get EMAIL via geteEmail()", () => {
        const testValue = "Fizza.zhera@gmail.com";
        const e = new Employee(5,"Fizza",testValue);
        expect(e.getEmail()).toBe(testValue);
    });
 //email must be strng only
 test("check if email is a string", () => {
    const testValue = "fizz.zehra14@gmail.com";
    const emp = new Employee(5, "Fizza", testValue);
    expect(emp.getEmail()).toEqual(expect.any(String));
});
