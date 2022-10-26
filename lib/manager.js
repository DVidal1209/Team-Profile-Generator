// Importing of Employee file
const Employee = require("./employee")

class Manager extends Employee{
    // Manager Constructor
    constructor(name, id, email, office){
        super(name, id, email);
        this.office = office;
        this.job = "☕ Manager"
    }

    // Function to create the Manager Card
    createCard(){
        const html =`
            <div class="card" style="width: 18rem;">
                <div class="card-header">
                    ${this.name}<br>${this.job}
                </div>
                <ul class="list-group">
                <li class="list-group-item">
                    ID: ${this.id}
                    <hr>
                    Email: ${this.email}
                    <hr>
                    Office Number: ${this.office}
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