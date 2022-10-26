// Importing of Employee file
const Employee = require("./employee")

// Intern Object
class Intern extends Employee{
    // Intern Constructor
    constructor(name, id, email, school){
        super(name, id, email);
        this.school = school;
        this.role = "📖 Intern";
    }

    // Function to return the school
    getSchool(){
        return this.school
    }
    // Function to create the Intern Card
    createCard(){
        let name = this.getName();
        let role = this.getRole();
        let id = this.getId();
        let email = this.getEmail();
        let school = this.getSchool();
        const html =`
            <div class="card" style="width: 18rem;">
                <div class="card-header">
                    ${name}<br>${role}
                </div>
                <ul class="list-group">
                <li class="list-group-item">
                    ID: ${id}
                    <hr>
                    Email: <a href="mailto:${email}">${email}</a>
                    <hr>
                    School: ${school}
                </li>
                </ul>
            </div>`
      return html;
    }

    // Function to append the Intern card to the existing html variable
    appendHtml(html){
        html = html + this.createCard();
        return html;
    }
}

module.exports = Intern;