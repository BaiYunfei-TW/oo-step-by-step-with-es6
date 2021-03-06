import Person from './person';

class Worker extends Person {
    constructor(name, age, klass) {
        super(name, age);
        this.klass = klass;
    }

    introduce() {
        if(this.klass){
            return super.introduce() + ` I am a Teacher. I teach Class ${this.klass.number}.`
        }
        return super.introduce() + ` I am a Teacher. I teach No Class.`
    }

    introduceWith(student) {
        if (student.klass.number === this.klass.number) {
            return `My name is ${this.name}. I am ${this.age} years old. I am a Teacher. I teach ${student.name}.`;
        }
        return `My name is ${this.name}. I am ${this.age} years old. I am a Teacher. I don't teach ${student.name}.`;
    }
}

export default Worker;

