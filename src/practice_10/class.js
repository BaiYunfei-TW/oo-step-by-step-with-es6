class Class{
    constructor(no) {
        this.number = no;
    }

    getDisplayName() {
        return `Class ${this.number}`;
    }

    assignLeader(student) {
        if (student.klass.number !== this.number) {
            console.log("It is not one of us.");
            return ;
        }
        this.leader = student;
    }

    appendMember(student) {
        student.klass = this;
    }
}

export default Class;