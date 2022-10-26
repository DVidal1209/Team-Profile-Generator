const Manager = require("../lib/manager");

describe("Manager", () => {
    describe("Initialization", () => {
        it("should create an object with a Name, ID, email and office", () => {
            const manager = new Manager("Steve", "100BB", "steve@test.com", "12");

            expect(manager.name).toEqual("Steve");
            expect(manager.id).toEqual("100BB");
            expect(manager.email).toEqual("steve@test.com");
            expect(manager.office).toEqual("12");
        });
    });

    describe("HTML Append", () => {
        it("should append data created from the class to already existing variable", () =>{
            const manager = new Manager("Steve", "100BB", "steve@test.com", "12");

            let html = `<body>`;

            html = manager.appendHtml(html);

            expect(html).toEqual(expect.stringContaining("Steve<br>"));
        })
    })
})