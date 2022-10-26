const Engineer = require("../lib/engineer");

describe("Engineer", () => {
    describe("Initialization", () => {
        it("should create an object with a Name, ID, email and Github link", () => {
            const engineer = new Engineer("Joshua", "153AC", "joshua@test.com", "joshuatest");

            expect(engineer.name).toEqual("Joshua");
            expect(engineer.id).toEqual("153AC");
            expect(engineer.email).toEqual("joshua@test.com");
            expect(engineer.github).toEqual("joshuatest");
            expect(engineer.role).toEqual("👓 Engineer");
        });
    });

    describe("Github Return", () => {
        it ("Should return the github username when called", () => {
            const engineer = new Engineer("Joshua", "153AC", "joshua@test.com", "joshuatest");

            github = engineer.getGitHub();

            expect(github).toEqual("joshuatest")
        })
    })

    describe("HTML Append", () => {
        it("should append data created from the class to already existing variable", () =>{
            const engineer = new Engineer("Joshua", "153AC", "joshua@test.com", "joshuatest");
            let html = `<body>`;

            html = engineer.appendHtml(html);

            expect(html).toEqual(expect.stringContaining("Joshua<br>"));
        })
    })
})