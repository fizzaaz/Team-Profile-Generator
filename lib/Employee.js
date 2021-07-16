class Employee{
    constructor (id,name,email)
    {
        //declared and assigned id ,email and name to employee.
        this.id=id;
        this.name=name;
        this.email=email;
    }
    //returns the employee's name that was given as an input in a constructor function
    getName()
    {
        return this.name;
    }
    //returns the employee's id that was given as an input in a constructor function
    getId()
    {
        return this.id;
    }
    //returns the employee's Email that was given as an input in a constructor function
    getEmail()
    {
        return this.email;
    }
    getRole()
    {
        return "Employee";
    }
}
