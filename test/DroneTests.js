const expect = require("chai").expect;
const Drone = require("../src/Drone");

describe("Drone", function() {
    describe("Constructor", function() {
        it("should produce a Drone instance with expected properties and methods", function() {
            const drone = new Drone();
            expect(drone).to.have.property("ipAddress").that.is.undefined;
            expect(drone).to.have.property("activateSDKMode").that.is.a("function");
            expect(drone).to.have.property("setWirelessCredentials").that.is.a("function");
            expect(drone).to.have.property("connectToExternalNetwork").that.is.a("function");
            expect(drone).to.have.property("getCommandSocket").that.is.a("function");
            expect(drone).to.have.property("getStateSocket").that.is.a("function");
            expect(drone).to.have.property("getVideoStreamSocket").that.is.a("function");
            expect(drone).to.have.property("getSpeed").that.is.a("function");
            expect(drone).to.have.property("getBatteryLevel").that.is.a("function");
            expect(drone).to.have.property("getFlightTime").that.is.a("function");
            expect(drone).to.have.property("getWirelessSettings").that.is.a("function");
        });
    });
});
