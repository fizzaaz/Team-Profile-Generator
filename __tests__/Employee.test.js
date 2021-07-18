
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

    test("Can set name via constructor arguments",()=>
    {
testName="Fizza";
const emp=new Employee(5,testName);
expect(emp.name).toEqual(testName)
    });

