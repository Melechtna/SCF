//Button List
const aButtonImage = document.getElementById('a-button');
const bButtonImage = document.getElementById('b-button');
const zButtonImage = document.getElementById('z-button');
const StickImage = document.getElementById('stick');
const startButtonImage = document.getElementById('start-button');
const leftBumperImage = document.getElementById('left-bumper');
const rightBumperImage = document.getElementById('right-bumper');
const dPadUpImage = document.getElementById('dpad-up');
const dPadRightImage = document.getElementById('dpad-right');
const dPadDownImage = document.getElementById('dpad-down');
const dPadLeftImage = document.getElementById('dpad-left');
const cUpImage = document.getElementById('c-up');
const cRightImage = document.getElementById('c-right');
const cDownImage = document.getElementById('c-down');
const cLeftImage = document.getElementById('c-left');

// Function to handle gamepad connected event
function handleGamepadConnected(event) {
    // Start checking gamepad state
    requestAnimationFrame(checkGamepad);
}

// Function to update image based on A button state
function updateAButtonImage(isPressed) {
    if (isPressed) {
        aButtonImage.src = 'images/AP.png';
    } else {
        aButtonImage.src = 'images/A.png';
    }
}

// Function to update image based on B button state
function updateBButtonImage(isPressed) {
    if (isPressed) {
        bButtonImage.src = 'images/BP.png';
    } else {
        bButtonImage.src = 'images/B.png';
    }
}

// Function to update image based on X button state
function updateZButtonImage(isPressed) {
    if (isPressed) {
        zButtonImage.src = 'images/ZP.png';
    } else {
        zButtonImage.src = 'images/Z.png';
    }
}

// Function to update image based on Start button state
function updateStartButtonImage(isPressed) {
    if (isPressed) {
        startButtonImage.src = 'images/StartP.png';
    } else {
        startButtonImage.src = 'images/Start.png';
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

// Function to update C Up button state
function updatecUpButton(isPressed) {
    if (isPressed) {
        cUpImage.src = 'images/CUP.png';
    } else {
        cUpImage.src = 'images/CU.png';
    }
}

// Function to update C Right button state
function updatecRightButton(isPressed) {
    if (isPressed) {
        cRightImage.src = 'images/CRP.png';
    } else {
        cRightImage.src = 'images/CR.png';
    }
}

// Function to update C Down button state
function updatecDownButton(isPressed) {
    if (isPressed) {
        cDownImage.src = 'images/CDP.png';
    } else {
        cDownImage.src = 'images/CD.png';
    }
}

// Function to update C Left button state
function updatecLeftButton(isPressed) {
    if (isPressed) {
        cLeftImage.src = 'images/CLP.png';
    } else {
        cLeftImage.src = 'images/CL.png';
    }
}

// Function to update left stick position based on joystick input
function updateStickPosition(x, y) {
    // Scale the values to control the movement speed (adjust these values accordingly)
    const scaleFactor = 20;
    const offsetX = x * scaleFactor;
    const offsetY = y * scaleFactor;

    // Apply translation to left stick image
    StickImage.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
}

// Function to update image based on Left bumper state
function updateLeftBumperImage(isPressed) {
    if (isPressed) {
        leftBumperImage.src = 'images/L1P.png';
    } else {
        leftBumperImage.src = 'images/L1.png';
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

// Function to check if the vendor and product ID match the desired controller
function isVendorProductMatch(vendorId, productId, desiredVendorId, desiredProductId) {
    return vendorId === desiredVendorId && productId === desiredProductId;
}

// Separate functions for each configuration
function checkGamepad() {
    const gamepads = navigator.getGamepads();

    // Ensure there's at least one non-null gamepad
    const gamepad = gamepads.find(pad => pad !== null);

    if (gamepad) {

        // Replace these values with the actual vendor and product IDs of your working controller
        const desiredVendorId = "0079";
        const desiredProductId = "0006";

        // Extract vendor and product information from the id string
        const match = /Vendor: (\w+) Product: (\w+)/.exec(gamepad.id);
        const vendorId = match ? match[1] : undefined;
        const productId = match ? match[2] : undefined;

        // Check if the ID matches the desired controller
        if (vendorId === desiredVendorId && productId === desiredProductId) {

            // Check Stick
            const XAxisValue = gamepad.axes[0];
            const YAxisValue = gamepad.axes[1];

            // Call the updateStickPosition function with the obtained values
            updateStickPosition(XAxisValue, YAxisValue);

            // Check left bumper
            const leftBumperValue = gamepad.buttons[4].pressed;
            updateLeftBumperImage(leftBumperValue);

            // Check right bumper
            const rightBumperValue = gamepad.buttons[5].pressed;
            updateRightBumperImage(rightBumperValue);

            // Check A button
            const isAButtonPressed = gamepad.buttons[6].pressed;
            updateAButtonImage(isAButtonPressed);

            // Check B button
            const isBButtonPressed = gamepad.buttons[8].pressed;
            updateBButtonImage(isBButtonPressed);

            // Check Z button
            const isZButtonPressed = gamepad.buttons[7].pressed;
            updateZButtonImage(isZButtonPressed);

            // Check Start button
            const isStartButtonPressed = gamepad.buttons[9].pressed;
            updateStartButtonImage(isStartButtonPressed);

            // Check D-pad Up button
            const isDpadUpButtonPressed = gamepad.buttons[12].pressed;
            updateDPadUpButton(isDpadUpButtonPressed);

            // Check D-pad Right button
            const isDpadRightPressed = gamepad.buttons[15].pressed;
            updateDPadRightButton(isDpadRightPressed);

            // Check D-pad Down button
            const isDpadDownPressed = gamepad.buttons[13].pressed;
            updateDPadDownButton(isDpadDownPressed);

            // Check D-pad Left button
            const isDpadLeftPressed = gamepad.buttons[14].pressed;
            updateDPadLeftButton(isDpadLeftPressed);

            // Check C Up button
            const isCUpButtonPressed = gamepad.buttons[0].pressed;
            updatecUpButton(isCUpButtonPressed);

            // Check C Right button
            const isCRightButtonPressed = gamepad.buttons[1].pressed;
            updatecRightButton(isCRightButtonPressed);

            // Check C Down button
            const isCDownButtonPressed = gamepad.buttons[2].pressed;
            updatecDownButton(isCDownButtonPressed);

            // Check C Left button
            const isCLeftButtonPressed = gamepad.buttons[3].pressed;
            updatecLeftButton(isCLeftButtonPressed);
        }
    }

    // Schedule the next update
    requestAnimationFrame(checkGamepad);
}

// Listen for the gamepadconnected event
window.addEventListener('gamepadconnected', handleGamepadConnected);
