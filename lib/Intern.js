class Intern extends Employee {
    constructor(school) {
        super(this.name, this.id, this.email);

        getSchool() {
            return this.school;
        }
        
        getRole() {
            return 'Intern';
        }
    }
}