/**
 * A Drone object containing the details of a specific Tello Edu drone.
 *
 * @param {string} ipAddress - The IP Address of the Tello Drone.
 */
class Drone {
    constructor(ipAddress) {
        this.ipAddress = ipAddress;
    }

    /**
     * Commands the drone to enter SDK mode. This is required to send any other commands.
     */
    activateSDKMode() {
        // Not Impmenented.
    }

    /**
     * Sets the SSID and password for the Wifi network created by the Tello drone.
     */
    setWirelessCredentials() {
        // Not Implemented.
    }

    /**
     * Commands the drone to connect to an external Wifi network rather than creating its own.
     */
    connectToExternalNetwork() {
        // Not Implemented.
    }

    /**
     * Get a refrence to the network socket that can be used to send commands to the drone.
     */
    getCommandSocket() {
        // Not Implemented.
    }

    /**
     * Get a refrence to the network socket that can be used to listen for the drone's state updates.
     */
    getStateSocket() {
        // Not Implemented.
    }

    /**
     * Get a refrence to the network socket that can be used to receive the drone's video stream.
     */
    getVideoStreamSocket() {
        // Not Implemented.
    }

    /**
     * Get the drone's currently set speed.
     */
    getSpeed() {
        // Not Implemented.
    }

    /**
     * Get the drone's current battery level.
     */
    getBatteryLevel() {
        // Not Implemented.
    }

    /**
     * Get the drone's currently elapsed flight time.
     */
    getFlightTime() {
        // Not Implemented.
    }

    /**
     * Get the drone's current Wifi settings.
     */
    getWirelessSettings() {
        // Not Implemented.
    }
}

module.exports = Drone;
