class Employee{
    constructor (id,name,email)
    {
        //declared and assigned id ,email and name to employee.
        this.id=id;
        this.name=name;
        this.email=email;
    }
    //returns the employee name that was given in a constructor function
    getName()
    {
        return this.name;
    }
}
