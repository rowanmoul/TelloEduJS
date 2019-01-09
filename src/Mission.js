/**
 * A Mission object containing a set of commands for a Tello Edu drone.
 *
 * @param waitForResponse - Flag to set wether to wait between commands or not.
 */
class Mission {
    constructor(waitForResponse = false) {
        this.waitForResponse = waitForResponse;
        this.commands = [];
    }

    /**
     * Commands the drone to enter SDK mode. This is required to send any other commands.
     */
    activateSDKMode() {
        // Not Impmenented.
    }
}

module.exports = Mission;
