//Button List
const crossButtonImage = document.getElementById('cross-button');
const circleButtonImage = document.getElementById('circle-button');
const triangleButtonImage = document.getElementById('triangle-button');
const squareButtonImage = document.getElementById('square-button');
const menuButtonImage = document.getElementById('menu-button');
const shareButtonImage = document.getElementById('share-button');
const psButtonImage = document.getElementById('ps-button');
const tpButtonImage = document.getElementById('tp-button');
const leftStickImage = document.getElementById('left-stick');
const rightStickImage = document.getElementById('right-stick');
const leftTriggerImage = document.getElementById('left-trigger');
const leftBumperImage = document.getElementById('left-bumper');
const rightTriggerImage = document.getElementById('right-trigger');
const rightBumperImage = document.getElementById('right-bumper');
const dPadUpImage = document.getElementById('dpad-up');
const dPadRightImage = document.getElementById('dpad-right');
const dPadDownImage = document.getElementById('dpad-down');
const dPadLeftImage = document.getElementById('dpad-left');

let isLeftTriggerPressed = false;
let isRightTriggerPressed = false;
let isLeftStickPressed = false;
let isRightStickPressed = false;

// Function to handle gamepad connected event
function handleGamepadConnected(event) {
    // Start checking gamepad state
    requestAnimationFrame(checkGamepad);
}

// Function to update image based on A button state
function updateCrossButtonImage(isPressed) {
    if (isPressed) {
        crossButtonImage.src = 'images/Pushed/Cross.png';
    } else {
        crossButtonImage.src = 'images/Buttons/Cross.png';
    }
}

// Function to update image based on Circle button state
function updateCircleButtonImage(isPressed) {
    if (isPressed) {
        circleButtonImage.src = 'images/Pushed/Circle.png';
    } else {
        circleButtonImage.src = 'images/Buttons/Circle.png';
    }
}

// Function to update image based on Triangle button state
function updateTriangleButtonImage(isPressed) {
    if (isPressed) {
        triangleButtonImage.src = 'images/Pushed/Triangle.png';
    } else {
        triangleButtonImage.src = 'images/Buttons/Triangle.png';
    }
}

// Function to update image based on Square button state
function updateSquareButtonImage(isPressed) {
    if (isPressed) {
        squareButtonImage.src = 'images/Pushed/Square.png';
    } else {
        squareButtonImage.src = 'images/Buttons/Square.png';
    }
}

// Function to update image based on Menu button state
function updateMenuButtonImage(isPressed) {
    if (isPressed) {
        menuButtonImage.src = 'images/Pushed/Menu.png';
    } else {
        menuButtonImage.src = 'images/Buttons/Menu.png';
    }
}

// Function to update image based on Share button state
function updateShareButtonImage(isPressed) {
    if (isPressed) {
        shareButtonImage.src = 'images/Pushed/Share.png';
    } else {
        shareButtonImage.src = 'images/Buttons/Share.png';
    }
}

// Function to update image based on PS button state
function updatePSButtonImage(isPressed) {
    if (isPressed) {
        psButtonImage.src = 'images/Pushed/PS.png';
    } else {
        psButtonImage.src = 'images/Buttons/PS.png';
    }
}

// Function to update image based on TP button state
function updateTPButtonImage(isPressed) {
    if (isPressed) {
        tpButtonImage.src = 'images/Pushed/T.png';
    } else {
        tpButtonImage.src = 'images/Buttons/T.png';
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

// Function to update left stick position based on joystick input
function updateLeftStickPosition(x, y) {
    // Scale the values to control the movement speed (adjust these values accordingly)
    const scaleFactor = 20;
    const offsetX = x * scaleFactor;
    const offsetY = y * scaleFactor;

    // Apply translation to left stick image
    leftStickImage.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
}

// Function to update right stick position based on joystick input
function updateRightStickPosition(x, y) {
    // Scale the values to control the movement speed (adjust these values accordingly)
    const scaleFactor = 20;
    const offsetX = x * scaleFactor;
    const offsetY = y * scaleFactor;

    // Apply translation to left stick image
    rightStickImage.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
}

// Function to update image based on Left bumper state
function updateLeftBumperImage(isPressed) {
    if (isPressed) {
        leftBumperImage.src = 'images/Pushed/L1.png';
    } else {
        leftBumperImage.src = 'images/Buttons/L1.png';
    }
}

// Function to update left trigger image based on trigger input
function updateLeftTriggerImage(value) {
    // Adjust this threshold as needed
    const threshold = 0.1;

    // Check if the trigger is pressed
    if (value > threshold) {
        if (!isLeftTriggerPressed) {
            leftTriggerImage.src = 'images/Pushed/L2.png';
            isLeftTriggerPressed = true;
        }
    } else {
        if (isLeftTriggerPressed) {
            leftTriggerImage.src = 'images/Buttons/L2.png';
            isLeftTriggerPressed = false;
        }
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

// Function to update right trigger image based on trigger input
function updateRightTriggerImage(value) {
    // Adjust this threshold as needed
    const threshold = 0.1;

    // Check if the trigger is pressed
    if (value > threshold) {
        if (!isRightTriggerPressed) {
            rightTriggerImage.src = 'images/Pushed/R2.png';
            isRightTriggerPressed = true;
        }
    } else {
        if (isRightTriggerPressed) {
            rightTriggerImage.src = 'images/Buttons/R2.png';
            isRightTriggerPressed = false;
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

// Function to update right stick image based on pressed state
function updateRightStickPressedState(isPressed) {
    if (isPressed) {
        rightStickImage.src = 'images/Pushed/RS.png';
        isRightStickPressed = true;
    } else {
        rightStickImage.src = 'images/Buttons/RS.png';
        isRightStickPressed = false;
    }
}

// Function to check if the vendor and product ID match the desired controller
// Function to check and update gamepad state
function checkGamepad() {
    const gamepads = navigator.getGamepads();

    // Ensure there's at least one non-null gamepad
    const gamepad = gamepads.find(pad => pad !== null);

    if (gamepad) {

        // Replace these values with the actual vendor and product IDs of your working controller
        const desiredVendorId = "054c";
        const desiredProductId = "0ce6";

        // Extract vendor and product information from the id string
        const match = /Vendor: (\w+) Product: (\w+)/.exec(gamepad.id);
        const vendorId = match ? match[1] : undefined;
        const productId = match ? match[2] : undefined;

        // Check if the ID matches the desired controller
        if (vendorId === desiredVendorId && productId === desiredProductId) {

            // Check Left stick
            const LeftxAxisValue = gamepad.axes[0];
            const LeftyAxisValue = gamepad.axes[1];

            // Check Right stick
            const RightxAxisValue = gamepad.axes[2];
            const RightyAxisValue = gamepad.axes[3];

            // Update left stick position based on joystick input
            updateLeftStickPosition(LeftxAxisValue, LeftyAxisValue);

            // Update right stick position based on joystick input
            updateRightStickPosition(RightxAxisValue, RightyAxisValue);

            // Check left stick press
            const isLeftStickButtonPressed = gamepad.buttons[10].pressed;
            updateLeftStickPressedState(isLeftStickButtonPressed);

            // Check right stick press
            const isRightStickButtonPressed = gamepad.buttons[11].pressed;
            updateRightStickPressedState(isRightStickButtonPressed);

            // Check left bumper
            const leftBumperValue = gamepad.buttons[4].pressed;
            updateLeftBumperImage(leftBumperValue);

            // Check left trigger
            const leftTriggerValue = gamepad.axes[5] || gamepad.buttons[6].value;
            updateLeftTriggerImage(leftTriggerValue);

            // Check right bumper
            const rightBumperValue = gamepad.buttons[5].pressed;
            updateRightBumperImage(rightBumperValue);

            // Check right trigger
            const rightTriggerValue = gamepad.axes[4] || gamepad.buttons[7].value;
            updateRightTriggerImage(rightTriggerValue);

            // Check Cross button
            const isCrossButtonPressed = gamepad.buttons[0].pressed;
            updateCrossButtonImage(isCrossButtonPressed);

            // Check Circle button
            const isCircleButtonPressed = gamepad.buttons[1].pressed;
            updateCircleButtonImage(isCircleButtonPressed);

            // Check Triangle button
            const isTriangleButtonPressed = gamepad.buttons[3].pressed;
            updateTriangleButtonImage(isTriangleButtonPressed);

            // Check Square button
            const isSquareButtonPressed = gamepad.buttons[2].pressed;
            updateSquareButtonImage(isSquareButtonPressed);

            // Check Menu button
            const isMenuButtonPressed = gamepad.buttons[9].pressed;
            updateMenuButtonImage(isMenuButtonPressed);

            // Check Share button
            const isShareButtonPressed = gamepad.buttons[8].pressed;
            updateShareButtonImage(isShareButtonPressed);

            // Check PS button
            const isPSButtonPressed = gamepad.buttons[16].pressed;
            updatePSButtonImage(isPSButtonPressed);

            // Check D-pad Up button
            const isDPadUpPressed = gamepad.buttons[12].pressed;
            updateDPadUpButton(isDPadUpPressed);

            // Check D-pad Right button
            const isDPadRightPressed = gamepad.buttons[15].pressed;
            updateDPadRightButton(isDPadRightPressed);

            // Check D-pad Down button
            const isDPadDownPressed = gamepad.buttons[13].pressed;
            updateDPadDownButton(isDPadDownPressed);

            // Check D-pad Left button
            const isDPadLeftPressed = gamepad.buttons[14].pressed;
            updateDPadLeftButton(isDPadLeftPressed);
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
