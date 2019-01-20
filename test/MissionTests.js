const expect = require("chai").expect;
const Mission = require("../src/Mission");

describe("Mission", function() {
    describe("Constructor", function() {
        it("should produce a Mission instance with expected properties and methods", function() {
            const mission = new Mission();
            expect(mission).to.have.property("waitForResponse", false);
            expect(mission).to.have.property("commands").that.is.an("array").that.is.empty;
            expect(mission).to.have.property("takeOff").that.is.a("function");
            expect(mission).to.have.property("land").that.is.a("function");
            expect(mission).to.have.property("streamOn").that.is.a("function");
            expect(mission).to.have.property("streamOff").that.is.a("function");
            expect(mission).to.have.property("emergency").that.is.a("function");
            expect(mission).to.have.property("moveUp").that.is.a("function");
            expect(mission).to.have.property("moveDown").that.is.a("function");
            expect(mission).to.have.property("moveLeft").that.is.a("function");
            expect(mission).to.have.property("moveRight").that.is.a("function");
            expect(mission).to.have.property("moveForward").that.is.a("function");
            expect(mission).to.have.property("moveBackward").that.is.a("function");
            expect(mission).to.have.property("turnClockwise").that.is.a("function");
            expect(mission).to.have.property("turnCounterClockwise").that.is.a("function");
            expect(mission).to.have.property("flip").that.is.a("function");
            expect(mission).to.have.property("goTo").that.is.a("function");
            expect(mission).to.have.property("curve").that.is.a("function");
            expect(mission).to.have.property("setSpeed").that.is.a("function");
            expect(mission).to.have.property("execute").that.is.a("function");
        });
    });
});
