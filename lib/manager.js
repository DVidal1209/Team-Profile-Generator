// Importing of Employee file
const Employee = require("./employee")

class Manager extends Employee{
    // Manager Constructor
    constructor(name, id, email, office){
        super(name, id, email);
        this.office = office;
        this.role = "☕ Manager"
    }
    // Function to return the office number
    getOffice(){
        return this.office;
    }

    // Function to create the Manager Card
    createCard(){
        let name = this.getName();
        let role = this.getRole();
        let id = this.getId();
        let email = this.getEmail();
        let office = this.getOffice();
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
                    Office Number: ${office}
                </li>
                </ul>
            </div>`
      return html;
    }

    // Function to append the Manager card to the existing html variable
    appendHtml(html){
        html = html + this.createCard();
        return html;
    }

}
module.exports = Manager;