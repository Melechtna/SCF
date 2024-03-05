//Button List
const aButtonImage = document.getElementById('a-button');
const bButtonImage = document.getElementById('b-button');
const xButtonImage = document.getElementById('x-button');
const yButtonImage = document.getElementById('y-button');
const startButtonImage = document.getElementById('start-button');
const selectButtonImage = document.getElementById('select-button');
const homeButtonImage = document.getElementById('home-button');
const captureButtonImage = document.getElementById('capture-button');
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


 // Function to check and update gamepad state
 function checkGamepad() {
     const gamepads = navigator.getGamepads();

     // Ensure there's at least one non-null gamepad
     const gamepad = gamepads.find(pad => pad !== null);

     if (gamepad) {

         // Replace these values with the actual vendor and product IDs of your working controller
         const desiredVendorId = "0079";
         const desiredProductId = "181c";

         // Extract vendor and product information from the id string
         const match = /Vendor: (\w+) Product: (\w+)/.exec(gamepad.id);
         const vendorId = match ? match[1] : undefined;
         const productId = match ? match[2] : undefined;

         console.log("Vendor ID:", vendorId, "Product ID:", productId);

         // Check if the ID matches the desired controller
         if (vendorId === desiredVendorId && productId === desiredProductId) {
             console.log("Matching controller detected!");

             // Check Left stick
             const LeftxAxisValue = gamepad.axes[0];
             const LeftyAxisValue = gamepad.axes[1];

             // Check Right stick
             const RightxAxisValue = gamepad.axes[2];
             const RightyAxisValue = gamepad.axes[3];

             // Check DPad
             const DxAxisValue = gamepad.axes[6];
             const DyAxisValue = gamepad.axes[7];

             // Update left stick position based on joystick input
             updateLeftStickPosition(LeftxAxisValue, LeftyAxisValue);

             // Update right stick position based on joystick input
             updateRightStickPosition(RightxAxisValue, RightyAxisValue);

             // Check left stick press
             const isLeftStickButtonPressed = gamepad.buttons[13].pressed;
             updateLeftStickPressedState(isLeftStickButtonPressed);

             // Check right stick press
             const isRightStickButtonPressed = gamepad.buttons[14].pressed;
             updateRightStickPressedState(isRightStickButtonPressed);

             // Check left bumper
             const leftBumperValue = gamepad.buttons[6].pressed;
             updateLeftBumperImage(leftBumperValue);

             // Check left trigger
             const leftTriggerValue = gamepad.axes[5] || gamepad.buttons[8].value;
             updateLeftTriggerImage(leftTriggerValue);

             // Check right bumper
             const rightBumperValue = gamepad.buttons[7].pressed;
             updateRightBumperImage(rightBumperValue);

             // Check right trigger
             const rightTriggerValue = gamepad.axes[4] || gamepad.buttons[9].value;
             updateRightTriggerImage(rightTriggerValue);

             // Check A button
             const isAButtonPressed = gamepad.buttons[1].pressed;
             updateAButtonImage(isAButtonPressed);

             // Check B button
             const isBButtonPressed = gamepad.buttons[0].pressed;
             updateBButtonImage(isBButtonPressed);

             // Check X button
             const isXButtonPressed = gamepad.buttons[4].pressed;
             updateXButtonImage(isXButtonPressed);

             // Check Y button
             const isYButtonPressed = gamepad.buttons[3].pressed;
             updateYButtonImage(isYButtonPressed);

             // Check Start button
             const isStartButtonPressed = gamepad.buttons[11].pressed;
             updateStartButtonImage(isStartButtonPressed);

             // Check Select button
             const isSelectButtonPressed = gamepad.buttons[10].pressed;
             updateSelectButtonImage(isSelectButtonPressed);

             // Check D-pad Up button
             updateDPadUpButton(DyAxisValue === -1);

             // Check D-pad Right button
             updateDPadRightButton(DxAxisValue === 1 );


             // Check D-pad Down button
             updateDPadDownButton(DyAxisValue === 1 );


             // Check D-pad Left button
             updateDPadLeftButton(DxAxisValue === -1 );

         }
     }

     // Schedule the next update
     requestAnimationFrame(checkGamepad);
 }

 // Listen for the gamepadconnected event
window.addEventListener('gamepadconnected', handleGamepadConnected);
