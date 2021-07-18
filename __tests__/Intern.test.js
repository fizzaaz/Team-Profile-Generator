const Intern = require("../lib/Intern");

test("Can set school via constructor", () => {
  const testValue = "UTAUSTIN";
  const e = new Intern(5, "fIZZA", "FIZZ@FIZZ.com", testValue);
  expect(e.school).toBe(testValue);
});

test("getRole() should return \"Intern\"", () => {
  const testValue = "Intern";
  const e = new Intern(5, "FIZZA", "FIZZ.ZEJRA@GMAIL.com", "UTAUSTIN");
  expect(e.getRole()).toBe(testValue);
});

test("Can get school via getSchool()", () => {
  const testValue = "UTAUSTIN";
  const e = new Intern("Foo", 1, "test@test.com", testValue);
  expect(e.getSchool()).toBe(testValue);
});