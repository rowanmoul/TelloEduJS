/**
 * A Mission object containing a set of commands for a Tello Edu drone.
 *
 * @param {boolean} waitForResponse - Optional flag to set whether to wait between commands or not. (Default false)
 */
class Mission {
    constructor(waitForResponse = false) {
        this.waitForResponse = waitForResponse;
        this.commands = [];
    }

    /**
     * Command the drone to automatically take off from its present location.
     */
    takeOff() {
        // Not Implemented.
    }

    /**
     * Command the drone to automatically land at its present location.
     */
    land() {
        // Not Implemented.
    }

    /**
     * Command the drone to start streaming video.
     */
    streamOn() {
        // Not Implemented.
    }

    /**
     * Command the drone to stop streaming video.
     */
    streamOff() {
        // Not Implemented.
    }

    /**
     * Command the drone to immediately stop its motors.
     */
    emergency() {
        // Not Implemented.
    }

    /**
     * Command the drone to move up.
     */
    moveUp() {
        // Not Implemented.
    }

    /**
     * Command the drone to move down.
     */
    moveDown() {
        // Not Implemented.
    }

    /**
     * Command the drone to move left.
     */
    moveLeft() {
        // Not Implemented.
    }

    /**
     * Command the drone to move right.
     */
    moveRight() {
        // Not Implemented.
    }

    /**
     * Command the drone to move forward.
     */
    moveForward() {
        // Not Implemented.
    }

    /**
     * Command the drone to move backward.
     */
    moveBackward() {
        // Not Implemented.
    }

    /**
     * Command the drone to turn clockwise.
     */
    turnClockwise() {
        // Not Implemented.
    }

    /**
     * Command the drone to turn counter clockwise.
     */
    turnCounterClockwise() {
        // Not Implemented.
    }

    /**
     * Command the drone to do a flip.
     */
    flip() {
        // Not Implemented.
    }

    /**
     * Command the drone to go to a certain set of coordinates based on its current location.
     */
    goTo() {
        // Not Implemented.
    }

    /**
     * Command the drone to fly in a curve between a certain pair of coordinates.
     */
    curve() {
        // Not Implemented.
    }

    /**
     * Set the flightspeed of the drone.
     */
    setSpeed() {
        // Not Implemented.
    }

    /**
     * Execute all commands contained in this mission.
     */
    execute() {
        // Not Implemented.
    }
}

module.exports = Mission;
