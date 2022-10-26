const Employee = require("./employee")

class Engineer extends Employee{
    constructor(name, id, email, github){
        super(name, id, email);
        this.github = github;
        this.job = "👓 Engineer"
    }

    // Function to create the Engineer card
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
                    GitHub: ${this.github}
                </li>
                </ul>
            </div>`
      return html;
    }

    // Function to append the Engineer card to the existing html variable
    appendHtml(html){
        html = html +  this.createCard();
        return html;
    }
}

module.exports = Engineer;