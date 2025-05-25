//Button List
const minusButtonImage = document.getElementById('minus-button');
const captureButtonImage = document.getElementById('capture-button');
const leftStickImage = document.getElementById('left-stick');
const leftTriggerImage = document.getElementById('left-trigger');
const leftBumperImage = document.getElementById('left-bumper');
const dPadUpImage = document.getElementById('dpad-up');
const dPadRightImage = document.getElementById('dpad-right');
const dPadDownImage = document.getElementById('dpad-down');
const dPadLeftImage = document.getElementById('dpad-left');
const SLLeftImage = document.getElementById('sl-left');
const SRLeftImage = document.getElementById('sr-left');

let isLeftTriggerPressed = false;
let isLeftStickPressed = false;

// Function to handle gamepad connected event
function handleGamepadConnected(event) {
    // Start checking gamepad state
    requestAnimationFrame(checkGamepad);
}

// Function to update image based on Minus button state
function updateMinusButtonImage(isPressed) {
    if (isPressed) {
        minusButtonImage.src = 'images/Pushed/Minus.png';
    } else {
        minusButtonImage.src = 'images/Buttons/Minus.png';
    }
}

// Function to update image based on Home button state
function updateCaptureButtonImage(isPressed) {
    if (isPressed) {
        captureButtonImage.src = 'images/Pushed/Capture.png';
    } else {
        captureButtonImage.src = 'images/Buttons/Capture.png';
    }
}

// Function to update D-pad Up button state
function updateDPadUpButton(isPressed) {
    if (isPressed) {
        dPadUpImage.src = 'images/Pushed/DU.png';
    } else {
        dPadUpImage.src = 'images/Buttons/DU.png';
    }
}

// Function to update D-pad Right button state
function updateDPadRightButton(isPressed) {
    if (isPressed) {
        dPadRightImage.src = 'images/Pushed/DR.png';
    } else {
        dPadRightImage.src = 'images/Buttons/DR.png';
    }
}

// Function to update D-pad Down button state
function updateDPadDownButton(isPressed) {
    if (isPressed) {
        dPadDownImage.src = 'images/Pushed/DD.png';
    } else {
        dPadDownImage.src = 'images/Buttons/DD.png';
    }
}

// Function to update D-pad Left button state
function updateDPadLeftButton(isPressed) {
    if (isPressed) {
        dPadLeftImage.src = 'images/Pushed/DL.png';
    } else {
        dPadLeftImage.src = 'images/Buttons/DL.png';
    }
}

// Function to update SL Left button state
function updateSLLeftButton(isPressed) {
    if (isPressed) {
        SLLeftImage.src = 'images/Pushed/SLL.png';
    } else {
        SLLeftImage.src = 'images/Buttons/SLL.png';
    }
}

// Function to update SR Left button state
function updateSRLeftButton(isPressed) {
    if (isPressed) {
        SRLeftImage.src = 'images/Pushed/SRL.png';
    } else {
        SRLeftImage.src = 'images/Buttons/SRL.png';
    }
}

// Function to update left stick position based on joystick input
function updateLeftStickPosition(x, y) {
    // Scale the values to control the movement speed (adjust these values accordingly)
    const scaleFactor = 20;
    const offsetX = x * scaleFactor;
    const offsetY = y * scaleFactor;

    // Apply translation to left stick image
    leftStickImage.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
}

// Function to update image based on Left bumper state
function updateLeftBumperImage(isPressed) {
    if (isPressed) {
        leftBumperImage.src = 'images/Pushed/L.png';
    } else {
        leftBumperImage.src = 'images/Buttons/L.png';
    }
}

// Function to update left trigger image based on trigger input
function updateLeftTriggerImage(value) {
    // Adjust this threshold as needed
    const threshold = 0.1;

    // Check if the trigger is pressed
    if (value > threshold) {
        if (!isLeftTriggerPressed) {
            leftTriggerImage.src = 'images/Pushed/ZL.png';
            isLeftTriggerPressed = true;
        }
    } else {
        if (isLeftTriggerPressed) {
            leftTriggerImage.src = 'images/Buttons/ZL.png';
            isLeftTriggerPressed = false;
        }
    }
}

// Function to update left stick image based on pressed state
function updateLeftStickPressedState(isPressed) {
    if (isPressed) {
        leftStickImage.src = 'images/Pushed/LS.png';
        isLeftStickPressed = true;
    } else {
        leftStickImage.src = 'images/Buttons/LS.png';
        isLeftStickPressed = false;
    }
}

// Function to check and update gamepad state
function checkGamepad() {
    const gamepads = navigator.getGamepads();

    // Ensure there's at least one non-null gamepad
    const gamepad = gamepads.find(pad => pad !== null);

    if (gamepad) {

        // Replace these values with the actual vendor and product IDs of your working controller
        const desiredVendorId = "057e";
        const desiredProductId = "2006";

        // Extract vendor and product information from the id string
        const match = /Vendor: (\w+) Product: (\w+)/.exec(gamepad.id);
        const vendorId = match ? match[1] : undefined;
        const productId = match ? match[2] : undefined;

        // Check if the ID matches the desired controller
        if (vendorId === desiredVendorId && productId === desiredProductId) {

            // Check Left stick
            const LeftxAxisValue = gamepad.axes[0];
            const LeftyAxisValue = gamepad.axes[1];

            // Update left stick position based on joystick input
            updateLeftStickPosition(LeftxAxisValue, LeftyAxisValue);

            // Check left stick press
            const isLeftStickButtonPressed = gamepad.buttons[10].pressed;
            updateLeftStickPressedState(isLeftStickButtonPressed);

            // Check left bumper
            const leftBumperValue = gamepad.buttons[8].pressed;
            updateLeftBumperImage(leftBumperValue);

            // Check left trigger
            const leftTriggerValue = gamepad.axes[5] || gamepad.buttons[6].value;
            updateLeftTriggerImage(leftTriggerValue);

            // Check Minus button
            const isMinusButtonPressed = gamepad.buttons[9].pressed;
            updateMinusButtonImage(isMinusButtonPressed);

            // Check Capture button
            const isCaptureButtonPressed = gamepad.buttons[16].pressed;
            updateCaptureButtonImage(isCaptureButtonPressed);

            // Check D-pad Up button
            const isDPadUpPressed = gamepad.buttons[2].pressed;
            updateDPadUpButton(isDPadUpPressed);

            // Check D-pad Right button
            const isDPadRightPressed = gamepad.buttons[3].pressed;
            updateDPadRightButton(isDPadRightPressed);

            // Check D-pad Down button
            const isDPadDownPressed = gamepad.buttons[1].pressed;
            updateDPadDownButton(isDPadDownPressed);

            // Check D-pad Left button
            const isDPadLeftPressed = gamepad.buttons[0].pressed;
            updateDPadLeftButton(isDPadLeftPressed);

            // Check SL Left button
            const isSLLeftPressed = gamepad.buttons[4].pressed;
            updateSLLeftButton(isSLLeftPressed);

            // Check SR Left button
            const isSRLeftPressed = gamepad.buttons[5].pressed;
            updateSRLeftButton(isSRLeftPressed);
        }
    }

    // Schedule the next update
    requestAnimationFrame(checkGamepad);
}

// Listen for the gamepadconnected event
window.addEventListener('gamepadconnected', handleGamepadConnected);

// Debugging Console
document.addEventListener("DOMContentLoaded", function () {
    const isDebuggingEnabled = document.body.getAttribute("debug") === "true";

    if (!isDebuggingEnabled) {
        console.log("Debugging disabled.");
        return; // Stop execution if debugging is off
    }

    console.log("Debugging enabled. Setting up debug panel...");

    // Create and insert the debug panel dynamically
    const debugOutput = document.createElement("div");
    debugOutput.id = "debug-output";
    debugOutput.style.position = "fixed";
    debugOutput.style.top = "0";
    debugOutput.style.right = "0";
    debugOutput.style.width = "30%";
    debugOutput.style.height = "100%";
    debugOutput.style.background = "black";
    debugOutput.style.color = "white";
    debugOutput.style.padding = "10px";
    debugOutput.style.fontFamily = "monospace";
    debugOutput.style.whiteSpace = "pre-wrap";
    debugOutput.style.overflowY = "auto";
    document.body.appendChild(debugOutput);

    function logGamepadDetails(gamepad) {
        const match = gamepad.id.match(/(.+?) \(.*?Vendor: (\w+) Product: (\w+)\)/);
        let formattedId = match ? match[1] : gamepad.id;
        let vendorId = match ? match[2] : "Unknown";
        let productId = match ? match[3] : "Unknown";

        return `${formattedId}\nVendor: ${vendorId} Product: ${productId}\nIndex: ${gamepad.index}\nButtons: ${gamepad.buttons.length}\nAxes: ${gamepad.axes.length}\n` +
        gamepad.buttons.map((button, index) => `Button ${index}: ${button.pressed} (Value: ${button.value})`).join("\n") +
        "\n" +
        gamepad.axes.map((axis, index) => `Axis ${index}: ${axis}`).join("\n");
    }

    function updateGamepadInfo() {
        const gamepads = navigator.getGamepads();
        debugOutput.textContent = Array.from(gamepads)
        .filter(g => g) // Remove null entries
        .map(logGamepadDetails)
        .join("\n\n");
    }

    // Poll every 250ms instead of every frame
    setInterval(updateGamepadInfo, 30);

    window.addEventListener("gamepadconnected", (event) => {
        console.log("Gamepad connected:", event.gamepad.id);
        updateGamepadInfo();
    });

    window.addEventListener("gamepaddisconnected", (event) => {
        console.log("Gamepad disconnected:", event.gamepad.id);
        updateGamepadInfo();
    });
});
