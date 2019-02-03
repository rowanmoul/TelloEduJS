const expect = require("chai").expect;
const Mission = require("../src/Mission");

describe("Mission Class", function() {
    context("Constructor", function() {
        it("should produce a Mission instance with an empty commands array", function() {
            const mission = new Mission();
            expect(mission).to.have.property("commands").that.is.an("array").that.is.empty;
        });

        it("should produce a Mission instance with method 'takeOff'", function() {
            const mission = new Mission();
            expect(mission).to.have.property("takeOff").that.is.a("function");
        });

        it("should produce a Mission instance with method 'land'", function() {
            const mission = new Mission();
            expect(mission).to.have.property("land").that.is.a("function");
        });

        it("should produce a Mission instance with method 'streamOn'", function() {
            const mission = new Mission();
            expect(mission).to.have.property("streamOn").that.is.a("function");
        });

        it("should produce a Mission instance with method 'streamOff'", function() {
            const mission = new Mission();
            expect(mission).to.have.property("streamOff").that.is.a("function");
        });

        it("should produce a Mission instance with method 'emergency'", function() {
            const mission = new Mission();
            expect(mission).to.have.property("emergency").that.is.a("function");
        });

        it("should produce a Mission instance with method 'moveUp'", function() {
            const mission = new Mission();
            expect(mission).to.have.property("moveUp").that.is.a("function");
        });

        it("should produce a Mission instance with method 'moveDown'", function() {
            const mission = new Mission();
            expect(mission).to.have.property("moveDown").that.is.a("function");
        });

        it("should produce a Mission instance with method 'moveLeft'", function() {
            const mission = new Mission();
            expect(mission).to.have.property("moveLeft").that.is.a("function");
        });

        it("should produce a Mission instance with method 'moveRight'", function() {
            const mission = new Mission();
            expect(mission).to.have.property("moveRight").that.is.a("function");
        });

        it("should produce a Mission instance with method 'moveForward'", function() {
            const mission = new Mission();
            expect(mission).to.have.property("moveForward").that.is.a("function");
        });

        it("should produce a Mission instance with method 'moveBackward'", function() {
            const mission = new Mission();
            expect(mission).to.have.property("moveBackward").that.is.a("function");
        });

        it("should produce a Mission instance with method 'turnClockwise'", function() {
            const mission = new Mission();
            expect(mission).to.have.property("turnClockwise").that.is.a("function");
        });

        it("should produce a Mission instance with method 'turnCounterClockwise'", function() {
            const mission = new Mission();
            expect(mission).to.have.property("turnCounterClockwise").that.is.a("function");
        });

        it("should produce a Mission instance with method 'flip'", function() {
            const mission = new Mission();
            expect(mission).to.have.property("flip").that.is.a("function");
        });

        it("should produce a Mission instance with method 'goTo'", function() {
            const mission = new Mission();
            expect(mission).to.have.property("goTo").that.is.a("function");
        });

        it("should produce a Mission instance with method 'curve'", function() {
            const mission = new Mission();
            expect(mission).to.have.property("curve").that.is.a("function");
        });

        it("should produce a Mission instance with method 'setSpeed'", function() {
            const mission = new Mission();
            expect(mission).to.have.property("setSpeed").that.is.a("function");
        });

        it("should produce a Mission instance with method 'execute'", function() {
            const mission = new Mission();
            expect(mission).to.have.property("execute").that.is.a("function");
        });

        context("with no arguments", function() {
            it("should produce a Mission instance with waitForResponse set to false.", function() {
                const mission = new Mission();
                expect(mission).to.have.property("waitForResponse", false);
            });
        });
    });
});
