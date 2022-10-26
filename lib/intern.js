const Employee = require("./employee")

class Intern extends Employee{
    constructor(name, id, email, school){
        super(name, id, email);
        this.school = school;
        this.job = "📖 Intern";
    }

    // Function to create the Intern Card
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
                    School: ${this.school}
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