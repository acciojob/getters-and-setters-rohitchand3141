//complete this code
class Person {
	constructor (name,age)
	{
		this.name=name;
		this.age=age;
	}
	get name(name)
	{
		return this.name;
	}
	set age(age)
	{
		
	}
}
class Student extends Person
{
	study(name)
	{
		console.log(name+"is studing");
	}
} 
class Teacher extends Person{
	teach()
	{
		console.log(name+"is teaching");
	}
}

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
