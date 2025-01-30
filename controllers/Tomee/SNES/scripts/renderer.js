//Button List
const aButtonImage = document.getElementById('a-button');
const bButtonImage = document.getElementById('b-button');
const xButtonImage = document.getElementById('x-button');
const yButtonImage = document.getElementById('y-button');
const startButtonImage = document.getElementById('start-button');
const selectButtonImage = document.getElementById('select-button');
const leftBumperImage = document.getElementById('left-bumper');
const rightBumperImage = document.getElementById('right-bumper');
const dPadUpImage = document.getElementById('dpad-up');
const dPadRightImage = document.getElementById('dpad-right');
const dPadDownImage = document.getElementById('dpad-down');
const dPadLeftImage = document.getElementById('dpad-left');

// Function to handle gamepad connected event
function handleGamepadConnected(event) {
    requestAnimationFrame(checkGamepad);
}

// Function to update image based on A button state
function updateAButtonImage(isPressed) {
    if (isPressed) {
        aButtonImage.src = 'images/Pushed/A.png';
    } else {
        aButtonImage.src = 'images/Buttons/A.png';
    }
}

// Function to update image based on B button state
function updateBButtonImage(isPressed) {
    if (isPressed) {
        bButtonImage.src = 'images/Pushed/B.png';
    } else {
        bButtonImage.src = 'images/Buttons/B.png';
    }
}

// Function to update image based on X button state
function updateXButtonImage(isPressed) {
    if (isPressed) {
        xButtonImage.src = 'images/Pushed/X.png';
    } else {
        xButtonImage.src = 'images/Buttons/X.png';
    }
}

// Function to update image based on Y button state
function updateYButtonImage(isPressed) {
    if (isPressed) {
        yButtonImage.src = 'images/Pushed/Y.png';
    } else {
        yButtonImage.src = 'images/Buttons/Y.png';
    }
}

// Function to update image based on Start button state
function updateStartButtonImage(isPressed) {
    if (isPressed) {
        startButtonImage.src = 'images/Pushed/Start.png';
    } else {
        startButtonImage.src = 'images/Buttons/Start.png';
    }
}

// Function to update image based on Select button state
function updateSelectButtonImage(isPressed) {
    if (isPressed) {
        selectButtonImage.src = 'images/Pushed/Select.png';
    } else {
        selectButtonImage.src = 'images/Buttons/Select.png';
    }
}

// Function to update image based on Left bumper state
function updateLeftBumperImage(isPressed) {
    if (isPressed) {
        leftBumperImage.src = 'images/Pushed/L1.png';
    } else {
        leftBumperImage.src = 'images/Buttons/L1.png';
    }
}

// Function to update image based on Right bumper state
function updateRightBumperImage(isPressed) {
    if (isPressed) {
        rightBumperImage.src = 'images/Pushed/R1.png';
    } else {
        rightBumperImage.src = 'images/Buttons/R1.png';
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


// Function to check and update gamepad state
function checkGamepad() {
    const gamepads = navigator.getGamepads();

    // Ensure there's at least one non-null gamepad
    const gamepad = gamepads.find(pad => pad !== null);

    if (gamepad) {

        // Replace these values with the actual vendor and product IDs of your working controller
        const desiredVendorId = "12bd";
        const desiredProductId = "d015";

        // Extract vendor and product information from the id string
        const match = /Vendor: (\w+) Product: (\w+)/.exec(gamepad.id);
        const vendorId = match ? match[1] : undefined;
        const productId = match ? match[2] : undefined;

        // Check if the ID matches the desired controller
        if (vendorId === desiredVendorId && productId === desiredProductId) {

            // Check DPad
            const XAxisValue = gamepad.axes[0];
            const YAxisValue = gamepad.axes[1];

            // Check left bumper
            const leftBumperValue = gamepad.buttons[4].pressed;
            updateLeftBumperImage(leftBumperValue);

            // Check right bumper
            const rightBumperValue = gamepad.buttons[5].pressed;
            updateRightBumperImage(rightBumperValue);

            // Check A button
            const isAButtonPressed = gamepad.buttons[1].pressed;
            updateAButtonImage(isAButtonPressed);

            // Check B button
            const isBButtonPressed = gamepad.buttons[2].pressed;
            updateBButtonImage(isBButtonPressed);

            // Check X button
            const isXButtonPressed = gamepad.buttons[0].pressed;
            updateXButtonImage(isXButtonPressed);

            // Check Y button
            const isYButtonPressed = gamepad.buttons[3].pressed;
            updateYButtonImage(isYButtonPressed);

            // Check Start button
            const isStartButtonPressed = gamepad.buttons[9].pressed;
            updateStartButtonImage(isStartButtonPressed);

            // Check Select button
            const isSelectButtonPressed = gamepad.buttons[8].pressed;
            updateSelectButtonImage(isSelectButtonPressed);

            // Check D-pad Up button
            updateDPadUpButton(YAxisValue === -1);

            // Check D-pad Right button
            updateDPadRightButton(XAxisValue === 1);

            // Check D-pad Down button
            updateDPadDownButton(YAxisValue === 1);

            // Check D-pad Left button
            updateDPadLeftButton(XAxisValue === -1);

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
