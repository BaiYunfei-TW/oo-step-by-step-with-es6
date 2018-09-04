class Class {
    constructor(no) {
        this.number = no;
        this.assignLeaderListener = [];
        this.joinListener = [];
    }

    getDisplayName() {
        return `Class ${this.number}`;
    }

    assignLeader(student) {
        if (student.klass.number !== this.number) {
            console.log("It is not one of us.");
            return;
        }
        this.leader = student;
        this.assignLeaderListener.forEach(e => e.notifyAssignLeader(student, this));
    }

    appendMember(student) {
        student.klass = this;
        this.joinListener.forEach(e => e.notifyJoin(student, this));
    }

    registerAssignLeaderListener(member) {
        this.assignLeaderListener.push(member);
    }

    registerJoinListener(member) {
        this.joinListener.push(member);
    }
}

export default Class;