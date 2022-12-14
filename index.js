// Importing other libraries and declariing variabled
const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
const fs = require("fs");
const inquirer = require('inquirer');

// Initial declaration of html data
var html = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/css/bootstrap.min.css">
    <link href = "assets/style.css" rel = stylesheet>
    <title>Team Profile</title>
</head>
<body>
    <header class="jumbotron jumbotron-fluid">
        <div class="container">
          <h1 class="display-4">My Team</h1>
        </div>
    </header>
    <div class="container">
        <div class="row">`


inquirer
    // Collection of Manager Information
    .prompt([
        {
            type: "input",
            message: "Input Manager Name",
            name: "mName"
        },
        {
            type: "input",
            message: "Enter Manager ID",
            name: "mId"
        },
        {
            type: "input",
            message: "Enter Manager Email",
            name: "mEmail"
        },
        {
            type: "input",
            message: "Enter Office Number",
            name: "office"
        },
    ])
    .then((response) => {
        const manager = new Manager(response.mName, response.mId, response.mEmail, response.office)
        html = manager.appendHtml(html)
        selection()
    })
    
    // Function to accept input in the command line
async function selection(){
    inquirer.prompt([
        {
            // Question to determine what the user wishes to do
            type: "list",
            message: "What would you like to do?",
            name: "selection",
            choices: ["Add an Engineer", "Add an Intern", "Exit"]
        }
    ])
    .then((response) => {
        // Questions for when user wisher to add an Engineer
        if (response.selection === "Add an Engineer"){
            inquirer.prompt([
                {
                    type: "input",
                    message: "Enter Engineer name",
                    name: "enName"
                },
                {
                    type: "input",
                    message: "input Engineer ID",
                    name: "enId"
                },
                {
                    type: "input",
                    message: "Input Engineer Email",
                    name: "enEmail"
                },
                {
                    type: "input",
                    message: "Enter Engineer GitHub",
                    name: "enGitHub",
                }
            ])
            .then((response) => {
                // Appending Engineer card to html element
                const engineer = new Engineer(response.enName, response.enId, response.enEmail, response.enGitHub);
                html = engineer.appendHtml(html);
                selection();
            })
        } else 
        // Questions for when user wisher to add an Intern
        if (response.selection === "Add an Intern"){
                inquirer.prompt([
                    {
                        type: "input",
                        message: "Enter Intern name",
                        name: "inName"
                    },
                    {
                        type: "input",
                        message: "input Intern ID",
                        name: "inId"
                    },
                    {
                        type: "input",
                        message: "Input Intern Email",
                        name: "inEmail"
                    },
                    {
                        type: "input",
                        message: "Enter Intern School",
                        name: "inSchool",
                    }
                ])
                .then((response) => {
                    // Appending Intern card to html element
                    const intern = new Intern(response.inName, response.inId, response.inEmail, response.inSchool);
                    html = intern.appendHtml(html);
                    selection()
                })
            } else {
                // Adding the last part of the html file then creating the file
                html += `
            </div>
        </div>
    </body>
              
</html>`;
                fs.writeFile("index.html", html, (err) =>{
                    err ? console.err(err) : console.log("Your file was successfully generated")
                })
            }
        })
}