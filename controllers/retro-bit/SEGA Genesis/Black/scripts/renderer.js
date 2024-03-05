//Button List
const aButtonImage = document.getElementById('a-button');
const bButtonImage = document.getElementById('b-button');
const cButtonImage = document.getElementById('c-button');
const xButtonImage = document.getElementById('x-button');
const yButtonImage = document.getElementById('y-button');
const zButtonImage = document.getElementById('z-button');
const startButtonImage = document.getElementById('start-button');
const selectButtonImage = document.getElementById('mode-button');
const leftBumperImage = document.getElementById('left-bumper');
const rightBumperImage = document.getElementById('right-bumper');
const dPadUpImage = document.getElementById('dpad-up');
const dPadUpRightImage = document.getElementById('dpad-up-right');
const dPadUpLeftImage = document.getElementById('dpad-up-left');
const dPadRightImage = document.getElementById('dpad-right');
const dPadDownLeftImage = document.getElementById('dpad-down-left');
const dPadDownRightImage = document.getElementById('dpad-down-right');
const dPadDownImage = document.getElementById('dpad-down');
const dPadLeftImage = document.getElementById('dpad-left');

// Function to handle gamepad connected event
function handleGamepadConnected(event) {
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

// Function to update image based on B button state
function updateCButtonImage(isPressed) {
    if (isPressed) {
        cButtonImage.src = 'images/CP.png';
    } else {
        cButtonImage.src = 'images/C.png';
    }
}

// Function to update image based on X button state
function updateXButtonImage(isPressed) {
    if (isPressed) {
        xButtonImage.src = 'images/XP.png';
    } else {
        xButtonImage.src = 'images/X.png';
    }
}

// Function to update image based on Y button state
function updateYButtonImage(isPressed) {
    if (isPressed) {
        yButtonImage.src = 'images/YP.png';
    } else {
        yButtonImage.src = 'images/Y.png';
    }
}

// Function to update image based on Y button state
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

// Function to update image based on Select button state
function updateSelectButtonImage(isPressed) {
    if (isPressed) {
        selectButtonImage.src = 'images/SelectP.png';
    } else {
        selectButtonImage.src = 'images/Select.png';
    }
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

// Function to update D-pad Up button state
function updateDPadUpButton(isPressed) {
    if (isPressed) {
        dPadUpImage.src = 'images/DUP.png';
    } else {
        dPadUpImage.src = 'images/DU.png';
    }
}

// Function to update D-pad Up Right button state
function updateDPadUpRightButton(isPressed) {
    if (isPressed) {
        dPadUpRightImage.src = 'images/DURP.png';
    } else {
        dPadUpRightImage.src = 'images/DUR.png';
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

// Function to update D-pad Down Right button state
function updateDPadDownRightButton(isPressed) {
    if (isPressed) {
        dPadDownRightImage.src = 'images/DDRP.png';
    } else {
        dPadDownRightImage.src = 'images/DDR.png';
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

// Function to update D-pad Up Left button state
function updateDPadUpLeftButton(isPressed) {
    if (isPressed) {
        dPadUpLeftImage.src = 'images/DULP.png';
    } else {
        dPadUpLeftImage.src = 'images/DUL.png';
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

// Function to update D-pad Down Left button state
function updateDPadDownLeftButton(isPressed) {
    if (isPressed) {
        dPadDownLeftImage.src = 'images/DDLP.png';
    } else {
        dPadDownLeftImage.src = 'images/DDL.png';
    }
}


// Function to check and update gamepad state
function checkGamepad() {
    const gamepads = navigator.getGamepads();

    // Ensure there's at least one non-null gamepad
    const gamepad = gamepads.find(pad => pad !== null);

    if (gamepad) {

        // Replace these values with the actual vendor and product IDs of your working controller
        const desiredVendorId = "0079";
        const desiredProductId = "0011";

        // Extract vendor and product information from the id string
        const match = /Vendor: (\w+) Product: (\w+)/.exec(gamepad.id);
        const vendorId = match ? match[1] : undefined;
        const productId = match ? match[2] : undefined;

        console.log("Vendor ID:", vendorId, "Product ID:", productId);

        // Check if the ID matches the desired controller
        if (vendorId === desiredVendorId && productId === desiredProductId) {
            console.log("Matching controller detected!");

            // Check DPad
            const XAxisValue = gamepad.axes[0];
            const YAxisValue = gamepad.axes[1];

            // Check left bumper
            const leftBumperValue = gamepad.buttons[6].pressed;
            updateLeftBumperImage(leftBumperValue);

            // Check right bumper
            const rightBumperValue = gamepad.buttons[7].pressed;
            updateRightBumperImage(rightBumperValue);

            // Check A button
            const isAButtonPressed = gamepad.buttons[1].pressed;
            updateAButtonImage(isAButtonPressed);

            // Check B button
            const isBButtonPressed = gamepad.buttons[2].pressed;
            updateBButtonImage(isBButtonPressed);

            // Check C button
            const isCButtonPressed = gamepad.buttons[4].pressed;
            updateCButtonImage(isCButtonPressed);

            // Check X button
            const isXButtonPressed = gamepad.buttons[0].pressed;
            updateXButtonImage(isXButtonPressed);

            // Check Y button
            const isYButtonPressed = gamepad.buttons[3].pressed;
            updateYButtonImage(isYButtonPressed);

            // Check Z button
            const isZButtonPressed = gamepad.buttons[5].pressed;
            updateZButtonImage(isZButtonPressed);

            // Check Start button
            const isStartButtonPressed = gamepad.buttons[9].pressed;
            updateStartButtonImage(isStartButtonPressed);

            // Check Select button
            const isSelectButtonPressed = gamepad.buttons[8].pressed;
            updateSelectButtonImage(isSelectButtonPressed);

            // Check D-pad Up button
            updateDPadUpButton(YAxisValue === -1 && XAxisValue !== 1  && XAxisValue !== -1);

            // Check D-pad Up Right button
            updateDPadUpRightButton(XAxisValue === 1 && YAxisValue === -1);

            // Check D-pad Right button
            updateDPadRightButton(XAxisValue === 1 && YAxisValue !== -1 && YAxisValue !== 1);

            // Check D-pad Down Right button
            updateDPadDownRightButton(XAxisValue === 1 && YAxisValue === 1);

            // Check D-pad Down button
            updateDPadDownButton(YAxisValue === 1 && XAxisValue !== 1  && XAxisValue !== -1);

            // Check D-pad Down Left button
            updateDPadDownLeftButton(XAxisValue === -1 && YAxisValue === 1);

            // Check D-pad Left button
            updateDPadLeftButton(XAxisValue === -1 && YAxisValue !== -1 && YAxisValue !== 1);

            // Check D-pad Up Left button
            updateDPadUpLeftButton(XAxisValue === -1 && YAxisValue === -1);
        }
    }

// Schedule the next update
requestAnimationFrame(checkGamepad);
}

// Listen for the gamepadconnected event
window.addEventListener('gamepadconnected', handleGamepadConnected);
