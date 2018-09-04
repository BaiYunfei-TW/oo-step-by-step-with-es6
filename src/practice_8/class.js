class Class{
    constructor(no) {
        this.number = no;
    }

    getDisplayName() {
        return `Class ${this.number}`;
    }

    assignLeader(student) {
        if (student.klass.number !== this.number) {
            return ;
        }
        this.leader = student;
    }
}

export default Class;