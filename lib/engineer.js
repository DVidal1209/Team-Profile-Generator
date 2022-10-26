// Importing of Employee file
const Employee = require("./employee")

// Engineer object
class Engineer extends Employee{

    // Engineer Constructor
    constructor(name, id, email, github){
        super(name, id, email);
        this.github = github;
        this.role = "👓 Engineer"
    }

    // Function to return GitHub username
    getGitHub(){
        return this.github;
    }

    // Function to create the Engineer card
    createCard(){
        let name = this.getName();
        let role = this.getRole();
        let id = this.getId();
        let email = this.getEmail();
        let github = this.getGitHub();
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
                    GitHub: <a href ="https://www.github.com/${github}">${github}</a>
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