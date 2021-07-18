const Employee = require("../lib/Employee");

//check if can employee object is working //passed
describe("Employee", () => {
    it("Can instantiate Employee instance", () => {
        const e = new Employee();
        expect(typeof(e)).toBe("object");
    });
    it("Can set id via constructor arguments", () => {
        const e = new Employee(5);
        expect(e.id).toBe(5);
    });
});