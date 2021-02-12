class Engineer extends Employee {
    constructor(github){
        super(this.name, this.id, this.email);
        this.github = github;

        getGithub() {
            return this.github;
        }

        this.getRole() {
            return "Engineer";
        }
    }
}