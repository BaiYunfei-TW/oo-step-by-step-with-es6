class Person{
    constructor(id, name, age){
        this.id = id;
        this.name = name;
        this.age = age;
    }

    introduce() {
        return `My name is ${this.name}. I am ${this.age} years old.`;
    }

    notifyAssignLeader(member, klass) {
        let message = `I am ${this.name}. I know ${member.name} become Leader of Class ${klass.number}.`;
        console.log(message);
    }

    notifyJoin(member, klass) {
        let message = `I am ${this.name}. I know ${member.name} has joined Class ${klass.number}.`;
        console.log(message);
    }
}

export default Person;