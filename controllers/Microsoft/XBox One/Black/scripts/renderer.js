//Button List
const aButtonImage = document.getElementById('a-button');
const bButtonImage = document.getElementById('b-button');
const xButtonImage = document.getElementById('x-button');
const yButtonImage = document.getElementById('y-button');
const menuButtonImage = document.getElementById('menu-button');
const viewButtonImage = document.getElementById('view-button');
const homeButtonImage = document.getElementById('home-button');
const leftStickImage = document.getElementById('left-stick');
const rightStickImage = document.getElementById('right-stick');
const leftTriggerImage = document.getElementById('left-trigger');
const leftBumperImage = document.getElementById('left-bumper');
const rightTriggerImage = document.getElementById('right-trigger');
const rightBumperImage = document.getElementById('right-bumper');
const dPadUpImage = document.getElementById('dpad-up');
const dPadUpRightImage = document.getElementById('dpad-up-right');
const dPadUpLeftImage = document.getElementById('dpad-up-left');
const dPadRightImage = document.getElementById('dpad-right');
const dPadDownLeftImage = document.getElementById('dpad-down-left');
const dPadDownRightImage = document.getElementById('dpad-down-right');
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

// Function to update image based on Menu button state
function updateMenuButtonImage(isPressed) {
    if (isPressed) {
        menuButtonImage.src = 'images/MenuP.png';
    } else {
        menuButtonImage.src = 'images/Menu.png';
    }
}

// Function to update image based on Share button state
function updateViewButtonImage(isPressed) {
    if (isPressed) {
        viewButtonImage.src = 'images/ViewP.png';
    } else {
        viewButtonImage.src = 'images/View.png';
    }
}

// Function to update image based on Home button state
function updateHomeButtonImage(isPressed) {
    if (isPressed) {
        homeButtonImage.src = 'images/HomeP.png';
    } else {
        homeButtonImage.src = 'images/Home.png';
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
        leftBumperImage.src = 'images/LBP.png';
    } else {
        leftBumperImage.src = 'images/LB.png';
    }
}

// Function to update left trigger image based on trigger input
function updateLeftTriggerImage(value) {
    // Adjust this threshold as needed
    const threshold = 0.1;

    // Check if the trigger is pressed
    if (value > threshold) {
        if (!isLeftTriggerPressed) {
            leftTriggerImage.src = 'images/LTP.png';
            isLeftTriggerPressed = true;
        }
    } else {
        if (isLeftTriggerPressed) {
            leftTriggerImage.src = 'images/LT.png';
            isLeftTriggerPressed = false;
        }
    }
}

// Function to update image based on Right bumper state
function updateRightBumperImage(isPressed) {
    if (isPressed) {
        rightBumperImage.src = 'images/RBP.png';
    } else {
        rightBumperImage.src = 'images/RB.png';
    }
}

// Function to update right trigger image based on trigger input
function updateRightTriggerImage(value) {
    // Adjust this threshold as needed
    const threshold = 0.1;

    // Check if the trigger is pressed
    if (value > threshold) {
        if (!isRightTriggerPressed) {
            rightTriggerImage.src = 'images/RTP.png';
            isRightTriggerPressed = true;
        }
    } else {
        if (isRightTriggerPressed) {
            rightTriggerImage.src = 'images/RT.png';
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
        const desiredVendorId = "045e";
        const desiredProductId = "02e0";

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

            // Check A button
            const isAButtonPressed = gamepad.buttons[0].pressed;
            updateAButtonImage(isAButtonPressed);

            // Check B button
            const isBButtonPressed = gamepad.buttons[1].pressed;
            updateBButtonImage(isBButtonPressed);

            // Check X button
            const isXButtonPressed = gamepad.buttons[2].pressed;
            updateXButtonImage(isXButtonPressed);

            // Check Y button
            const isYButtonPressed = gamepad.buttons[3].pressed;
            updateYButtonImage(isYButtonPressed);

            // Check Menu button
            const isMenuButtonPressed = gamepad.buttons[9].pressed;
            updateMenuButtonImage(isMenuButtonPressed);

            // Check View button
            const isViewButtonPressed = gamepad.buttons[8].pressed;
            updateViewButtonImage(isViewButtonPressed);

            // Check Home button
            const isHomeButtonPressed = gamepad.buttons[16].pressed;
            updateHomeButtonImage(isHomeButtonPressed);

            // Check D-pad Up button
            updateDPadUpButton(gamepad.buttons[12].pressed && !gamepad.buttons[14].pressed && !gamepad.buttons[15].pressed);

            // Check D-pad Up Right button
            updateDPadUpRightButton(gamepad.buttons[12].pressed && gamepad.buttons[15].pressed);

            // Check D-pad Right button
            updateDPadRightButton(gamepad.buttons[15].pressed && !gamepad.buttons[12].pressed && !gamepad.buttons[13].pressed);

            // Check D-pad Down Right button
            updateDPadDownRightButton(gamepad.buttons[13].pressed && gamepad.buttons[15].pressed);

            // Check D-pad Down button
            updateDPadDownButton(gamepad.buttons[13].pressed && !gamepad.buttons[15].pressed  && !gamepad.buttons[14].pressed);

            // Check D-pad Down Left button
            updateDPadDownLeftButton(gamepad.buttons[13].pressed  && gamepad.buttons[14].pressed);

            // Check D-pad Left button
            updateDPadLeftButton(gamepad.buttons[14].pressed && !gamepad.buttons[13].pressed && !gamepad.buttons[12].pressed);

            // Check D-pad Up Left button
            updateDPadUpLeftButton(gamepad.buttons[14].pressed && gamepad.buttons[12].pressed);
        }
    }

    // Schedule the next update
    requestAnimationFrame(checkGamepad);
}

// Listen for the gamepadconnected event
window.addEventListener('gamepadconnected', handleGamepadConnected);
