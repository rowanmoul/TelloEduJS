const expect = require("chai").expect;
const Drone = require("../src/Drone");

describe("Drone Class", function() {
    context("Constructor", function() {
        it("should produce a Drone instance with method 'activateSDKMode'", function() {
            const drone = new Drone();
            expect(drone).to.have.property("activateSDKMode").that.is.a("function");
        });

        it("should produce a Drone instance with method 'setWirelessCredentials'", function() {
            const drone = new Drone();
            expect(drone).to.have.property("setWirelessCredentials").that.is.a("function");
        });

        it("should produce a Drone instance with method 'connectToExternalNetwork'", function() {
            const drone = new Drone();
            expect(drone).to.have.property("connectToExternalNetwork").that.is.a("function");
        });

        it("should produce a Drone instance with method 'getCommandSocket'", function() {
            const drone = new Drone();
            expect(drone).to.have.property("getCommandSocket").that.is.a("function");
        });

        it("should produce a Drone instance with method 'getStateSocket'", function() {
            const drone = new Drone();
            expect(drone).to.have.property("getStateSocket").that.is.a("function");
        });

        it("should produce a Drone instance with method 'getVideoStreamSocket'", function() {
            const drone = new Drone();
            expect(drone).to.have.property("getVideoStreamSocket").that.is.a("function");
        });

        it("should produce a Drone instance with method 'getSpeed'", function() {
            const drone = new Drone();
            expect(drone).to.have.property("getSpeed").that.is.a("function");
        });

        it("should produce a Drone instance with method 'getBatteryLevel'", function() {
            const drone = new Drone();
            expect(drone).to.have.property("getBatteryLevel").that.is.a("function");
        });

        it("should produce a Drone instance with method 'getFlightTime'", function() {
            const drone = new Drone();
            expect(drone).to.have.property("getFlightTime").that.is.a("function");
        });

        it("should produce a Drone instance with method 'getWirelessSettings'", function() {
            const drone = new Drone();
            expect(drone).to.have.property("getWirelessSettings").that.is.a("function");
        });

        context("with no arguments", function() {
            it("should produce a Drone instance with an undefined ip address.", function() {
                const drone = new Drone();
                expect(drone).to.have.property("ipAddress").that.is.undefined;
            });
        });
    });
});
