const Intern = require("../lib/intern");

describe("Intern", () => {
    describe("Initialization", () => {
        it("should create an object with a Name, ID, email and School", () => {
            const intern = new Intern("James", "102AC", "james@test.com", "Test School");

            expect(intern.name).toEqual("James");
            expect(intern.id).toEqual("102AC");
            expect(intern.email).toEqual("james@test.com");
            expect(intern.school).toEqual("Test School");
        });
    });

    describe("School Return", () => {
        it("Should return the Intern's school when the getSchool() function is called", () => {
            const intern = new Intern("James", "102AC", "james@test.com", "Test School");

            school = intern.getSchool();

            expect(school).toEqual("Test School")
        })
    })

    describe("HTML Append", () => {
        it("should append data created from the class to already existing variable", () =>{
            const intern = new Intern("James", "102AC", "james@test.com", "Test School");

            let html = `<body>`;

            html = intern.appendHtml(html);

            expect(html).toEqual(expect.stringContaining("James<br>"));
        })
    })
})