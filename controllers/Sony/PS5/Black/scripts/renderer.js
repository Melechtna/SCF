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
        crossButtonImage.src = 'images/CrossP.png';
    } else {
        crossButtonImage.src = 'images/Cross.png';
    }
}

// Function to update image based on Circle button state
function updateCircleButtonImage(isPressed) {
    if (isPressed) {
        circleButtonImage.src = 'images/CircleP.png';
    } else {
        circleButtonImage.src = 'images/Circle.png';
    }
}

// Function to update image based on Triangle button state
function updateTriangleButtonImage(isPressed) {
    if (isPressed) {
        triangleButtonImage.src = 'images/TriangleP.png';
    } else {
        triangleButtonImage.src = 'images/Triangle.png';
    }
}

// Function to update image based on Square button state
function updateSquareButtonImage(isPressed) {
    if (isPressed) {
        squareButtonImage.src = 'images/SquareP.png';
    } else {
        squareButtonImage.src = 'images/Square.png';
    }
}

// Function to update image based on Menu button state
function updateMenuButtonImage(isPressed) {
    if (isPressed) {
        menuButtonImage.src = 'images/MenuP.png';
    } else {
        menuButtonImage.src = 'images/Menu.png';
    }
}

// Function to update image based on Share button state
function updateShareButtonImage(isPressed) {
    if (isPressed) {
        shareButtonImage.src = 'images/ShareP.png';
    } else {
        shareButtonImage.src = 'images/Share.png';
    }
}

// Function to update image based on PS button state
function updatePSButtonImage(isPressed) {
    if (isPressed) {
        psButtonImage.src = 'images/PSP.png';
    } else {
        psButtonImage.src = 'images/PS.png';
    }
}

// Function to update image based on TP button state
function updateTPButtonImage(isPressed) {
    if (isPressed) {
        tpButtonImage.src = 'images/TPP.png';
    } else {
        tpButtonImage.src = 'images/TP.png';
    }
}

// Function to update D-pad Up button state
function updateDPadUpButton(isPressed) {
    if (isPressed) {
        dPadUpImage.src = 'images/DUP.png';
    } else {
        dPadUpImage.src = 'images/DU.png';
    }
}

// Function to update D-pad Right button state
function updateDPadRightButton(isPressed) {
    if (isPressed) {
        dPadRightImage.src = 'images/DRP.png';
    } else {
        dPadRightImage.src = 'images/DR.png';
    }
}

// Function to update D-pad Down button state
function updateDPadDownButton(isPressed) {
    if (isPressed) {
        dPadDownImage.src = 'images/DDP.png';
    } else {
        dPadDownImage.src = 'images/DD.png';
    }
}

// Function to update D-pad Left button state
function updateDPadLeftButton(isPressed) {
    if (isPressed) {
        dPadLeftImage.src = 'images/DLP.png';
    } else {
        dPadLeftImage.src = 'images/DL.png';
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
        leftBumperImage.src = 'images/L1P.png';
    } else {
        leftBumperImage.src = 'images/L1.png';
    }
}

// Function to update left trigger image based on trigger input
function updateLeftTriggerImage(value) {
    // Adjust this threshold as needed
    const threshold = 0.1;

    // Check if the trigger is pressed
    if (value > threshold) {
        if (!isLeftTriggerPressed) {
            leftTriggerImage.src = 'images/L2P.png';
            isLeftTriggerPressed = true;
        }
    } else {
        if (isLeftTriggerPressed) {
            leftTriggerImage.src = 'images/L2.png';
            isLeftTriggerPressed = false;
        }
    }
}

// Function to update image based on Right bumper state
function updateRightBumperImage(isPressed) {
    if (isPressed) {
        rightBumperImage.src = 'images/R1P.png';
    } else {
        rightBumperImage.src = 'images/R1.png';
    }
}

// Function to update right trigger image based on trigger input
function updateRightTriggerImage(value) {
    // Adjust this threshold as needed
    const threshold = 0.1;

    // Check if the trigger is pressed
    if (value > threshold) {
        if (!isRightTriggerPressed) {
            rightTriggerImage.src = 'images/R2P.png';
            isRightTriggerPressed = true;
        }
    } else {
        if (isRightTriggerPressed) {
            rightTriggerImage.src = 'images/R2.png';
            isRightTriggerPressed = false;
        }
    }
}


// Function to update left stick image based on pressed state
function updateLeftStickPressedState(isPressed) {
    if (isPressed) {
        leftStickImage.src = 'images/LSP.png';
        isLeftStickPressed = true;
    } else {
        leftStickImage.src = 'images/LS.png';
        isLeftStickPressed = false;
    }
}

// Function to update right stick image based on pressed state
function updateRightStickPressedState(isPressed) {
    if (isPressed) {
        rightStickImage.src = 'images/RSP.png';
        isRightStickPressed = true;
    } else {
        rightStickImage.src = 'images/RS.png';
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
