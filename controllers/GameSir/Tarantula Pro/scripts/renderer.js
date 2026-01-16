//Button List
const aButtonImage = document.getElementById('a-button');
const bButtonImage = document.getElementById('b-button');
const xButtonImage = document.getElementById('x-button');
const yButtonImage = document.getElementById('y-button');
const startButtonImage = document.getElementById('menu-button');
const selectButtonImage = document.getElementById('view-button');
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

//Setup Variable to set website title with relavent mode
let detectedMode = "no";

// Update the document title with the detected mode
document.title = `GameSir Tarantula Pro (${detectedMode} mode)`;

// Check if CBC exists, if it does, use it instead for the Color Bar
document.addEventListener("DOMContentLoaded", function() {
    function checkImageExists(imagePath, callback) {
        const img = new Image();
        img.onload = function() {
            callback(true);
        };
        img.onerror = function() {
            callback(false);
        };
        img.src = imagePath;
    }

    // Paths to the images
    const cbcPath = "images/CBC.png";
    const cbPath = "images/Buttons/CB.png";

    // Get the image element by its ID
    const cbElement = document.getElementById("cb");
    if (!cbElement) {
        return;
    }

    // Check if CBC.png exists
    checkImageExists(cbcPath, function(exists) {
        if (exists) {
            cbElement.src = cbcPath; // Use CBC.png if it exists
        } else {
            cbElement.src = cbPath; // Fall back to CB.png if CBC.png doesn't exist
        }
    });
});


// Function to handle gamepad connected event
function handleGamepadConnected(event) {
    requestAnimationFrame(checkGamepad);
}

// Function to update image based on A button state
function updateAButtonImage(isPressed) {
    if (isPressed) {
        aButtonImage.src = 'images/Pressed/A.png';
    } else {
        aButtonImage.src = 'images/Buttons/A.png';
    }
}

// Function to update image based on B button state
function updateBButtonImage(isPressed) {
    if (isPressed) {
        bButtonImage.src = 'images/Pressed/B.png';
    } else {
        bButtonImage.src = 'images/Buttons/B.png';
    }
}

// Function to update image based on X button state
function updateXButtonImage(isPressed) {
    if (isPressed) {
        xButtonImage.src = 'images/Pressed/X.png';
    } else {
        xButtonImage.src = 'images/Buttons/X.png';
    }
}

// Function to update image based on Y button state
function updateYButtonImage(isPressed) {
    if (isPressed) {
        yButtonImage.src = 'images/Pressed/Y.png';
    } else {
        yButtonImage.src = 'images/Buttons/Y.png';
    }
}

// Function to update image based on A button state for switch mode
function updateASwitchButtonImage(isPressed) {
    if (isPressed) {
        document.getElementById('a-button').src = 'images/Pressed/SA.png';
    } else {
        document.getElementById('a-button').src = 'images/Buttons/SA.png';
    }
}

// Function to update image based on B button state for switch mode
function updateBSwitchButtonImage(isPressed) {
    if (isPressed) {
        document.getElementById('b-button').src = 'images/Pressed/SB.png';
    } else {
        document.getElementById('b-button').src = 'images/Buttons/SB.png';
    }
}

// Function to update image based on X button state for switch mode
function updateXSwitchButtonImage(isPressed) {
    if (isPressed) {
        document.getElementById('x-button').src = 'images/Pressed/SX.png';
    } else {
        document.getElementById('x-button').src = 'images/Buttons/SX.png';
    }
}

// Function to update image based on Y button state for switch mode
function updateYSwitchButtonImage(isPressed) {
    if (isPressed) {
        document.getElementById('y-button').src = 'images/Pressed/SY.png';
    } else {
        document.getElementById('y-button').src = 'images/Buttons/SY.png';
    }
}


// Function to update image based on Start button state
function updateStartButtonImage(isPressed) {
    if (isPressed) {
        startButtonImage.src = 'images/Pressed/Menu.png';
    } else {
        startButtonImage.src = 'images/Buttons/Menu.png';
    }
}

// Function to update image based on Select button state
function updateSelectButtonImage(isPressed) {
    if (isPressed) {
        selectButtonImage.src = 'images/Pressed/View.png';
    } else {
        selectButtonImage.src = 'images/Buttons/View.png';
    }
}

// Function to update image based on Home button state
function updateHomeButtonImage(isPressed) {
    if (isPressed) {
        homeButtonImage.src = 'images/Pressed/Home.png';
    } else {
        homeButtonImage.src = 'images/Buttons/Home.png';
    }
}

// Function to update image based on Home button state
function updateCaptureButtonImage(isPressed) {
    if (isPressed) {
        captureButtonImage.src = 'images/Pressed/Capture.png';
    } else {
        captureButtonImage.src = 'images/Buttons/Capture.png';
    }
}

// Function to update D-pad Up button state
function updateDPadUpButton(isPressed) {
    if (isPressed) {
        dPadUpImage.src = 'images/Pressed/DU.png';
    } else {
        dPadUpImage.src = 'images/Buttons/DU.png';
    }
}

// Function to update D-pad Right button state
function updateDPadRightButton(isPressed) {
    if (isPressed) {
        dPadRightImage.src = 'images/Pressed/DR.png';
    } else {
        dPadRightImage.src = 'images/Buttons/DR.png';
    }
}

// Function to update D-pad Down button state
function updateDPadDownButton(isPressed) {
    if (isPressed) {
        dPadDownImage.src = 'images/Pressed/DD.png';
    } else {
        dPadDownImage.src = 'images/Buttons/DD.png';
    }
}

// Function to update D-pad Left button state
function updateDPadLeftButton(isPressed) {
    if (isPressed) {
        dPadLeftImage.src = 'images/Pressed/DL.png';
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
        leftBumperImage.src = 'images/Pressed/LB.png';
    } else {
        leftBumperImage.src = 'images/Buttons/LB.png';
    }
}

// Function to update left trigger image based on trigger input
function updateLeftTriggerImage(value) {
    // Adjust this threshold as needed
    const threshold = 0.1;

    // Check if the trigger is pressed
    if (value > threshold) {
        if (!isLeftTriggerPressed) {
            leftTriggerImage.src = 'images/Pressed/LT.png';
            isLeftTriggerPressed = true;
        }
    } else {
        if (isLeftTriggerPressed) {
            leftTriggerImage.src = 'images/Buttons/LT.png';
            isLeftTriggerPressed = false;
        }
    }
}

// Function to update image based on Right bumper state
function updateRightBumperImage(isPressed) {
    if (isPressed) {
        rightBumperImage.src = 'images/Pressed/RB.png';
    } else {
        rightBumperImage.src = 'images/Buttons/RB.png';
    }
}

// Function to update right trigger image based on trigger input
function updateRightTriggerImage(value) {
    // Adjust this threshold as needed
    const threshold = 0.1;

    // Check if the trigger is pressed
    if (value > threshold) {
        if (!isRightTriggerPressed) {
            rightTriggerImage.src = 'images/Pressed/RT.png';
            isRightTriggerPressed = true;
        }
    } else {
        if (isRightTriggerPressed) {
            rightTriggerImage.src = 'images/Buttons/RT.png';
            isRightTriggerPressed = false;
        }
    }
}


// Function to update left stick image based on pressed state
function updateLeftStickPressedState(isPressed) {
    if (isPressed) {
        leftStickImage.src = 'images/Pressed/LS.png';
        isLeftStickPressed = true;
    } else {
        leftStickImage.src = 'images/Buttons/LS.png';
        isLeftStickPressed = false;
    }
}

// Function to update right stick image based on pressed state
function updateRightStickPressedState(isPressed) {
    if (isPressed) {
        rightStickImage.src = 'images/Pressed/RS.png';
        isRightStickPressed = true;
    } else {
        rightStickImage.src = 'images/Buttons/RS.png';
        isRightStickPressed = false;
    }
}

// Function to check if the vendor and product ID match the desired controller
function isVendorProductMatch(vendorId, productId, desiredVendorId, desiredProductId) {
    return vendorId === desiredVendorId && productId === desiredProductId;
}

function checkGamepad() {
    const gamepads = navigator.getGamepads();

    // Ensure there's at least one non-null gamepad
    const gamepad = gamepads.find(pad => pad !== null);

    if (gamepad) {
        // Extract vendor and product information from the id string
        const match = /Vendor: (\w+) Product: (\w+)/.exec(gamepad.id);
        const vendorId = match ? match[1] : undefined;
        const productId = match ? match[2] : undefined;

        // Check if the ID matches any of the desired configurations
        if (isVendorProductMatch(vendorId, productId, "057e", "2009")) {
            handleSwitch(gamepad);
            detectedMode = "Switch";
        } else if (isVendorProductMatch(vendorId, productId, "3537", "103e") | (isVendorProductMatch(vendorId, productId, "045e", "028e"))) {
            handleXbox(gamepad);
            detectedMode = "XBox";
        } else if (isVendorProductMatch(vendorId, productId, "054c", "05c4") | (isVendorProductMatch(vendorId, productId, "054c", "09cc"))) {
            handlePS4(gamepad);
            detectedMode = "PS4";
        } else if (isVendorProductMatch(vendorId, productId, "2345", "e008") | (isVendorProductMatch(vendorId, productId, "054c", "09cc"))) {
            handleGamSir(gamepad);
            detectedMode = "GameSir";
        } else {
            // Do nothing if no configuration matches
        }
    }

    // Schedule the next update
    requestAnimationFrame(checkGamepad);
    document.title = `GameSir Tarantula Pro (${detectedMode} mode)`;
}

// Separate functions for each configuration
function handleSwitch(gamepad) {
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
    const isAButtonPressed = gamepad.buttons[1].pressed;
    updateASwitchButtonImage(isAButtonPressed);

    // Check B button
    const isBButtonPressed = gamepad.buttons[0].pressed;
    updateBSwitchButtonImage(isBButtonPressed);

    // Check X button
    const isXButtonPressed = gamepad.buttons[3].pressed;
    updateXSwitchButtonImage(isXButtonPressed);

    // Check Y button
    const isYButtonPressed = gamepad.buttons[2].pressed;
    updateYSwitchButtonImage(isYButtonPressed);

    // Check Start button
    const isStartButtonPressed = gamepad.buttons[9].pressed;
    updateStartButtonImage(isStartButtonPressed);

    // Check Select button
    const isSelectButtonPressed = gamepad.buttons[8].pressed;
    updateSelectButtonImage(isSelectButtonPressed);

    // Check Home button
    const isHomeButtonPressed = gamepad.buttons[16].pressed;
    updateHomeButtonImage(isHomeButtonPressed);

    // Check Capture button
    const isCaptureButtonPressed = gamepad.buttons[17].pressed;
    updateCaptureButtonImage(isCaptureButtonPressed);

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

function handleXbox(gamepad) {
    // Check Left stick
    const LeftxAxisValue = gamepad.axes[0];
    const LeftyAxisValue = gamepad.axes[1];

    // Check Right stick
    const RightxAxisValue = gamepad.axes[3];
    const RightyAxisValue = gamepad.axes[4];

    // Check DPad
    const DxAxisValue = gamepad.axes[6];
    const DyAxisValue = gamepad.axes[7];

    // Update left stick position based on joystick input
    updateLeftStickPosition(LeftxAxisValue, LeftyAxisValue);

    // Update right stick position based on joystick input
    updateRightStickPosition(RightxAxisValue, RightyAxisValue);

    // Check left stick press
    const isLeftStickButtonPressed = gamepad.buttons[9].pressed;
    updateLeftStickPressedState(isLeftStickButtonPressed);

    // Check right stick press
    const isRightStickButtonPressed = gamepad.buttons[10].pressed;
    updateRightStickPressedState(isRightStickButtonPressed);

    // Check left bumper
    const leftBumperValue = gamepad.buttons[4].pressed;
    updateLeftBumperImage(leftBumperValue);

    // Check left trigger
    const leftTriggerValue = gamepad.axes[2];
    updateLeftTriggerImage(leftTriggerValue);

    // Check right bumper
    const rightBumperValue = gamepad.buttons[5].pressed;
    updateRightBumperImage(rightBumperValue);

    // Check right trigger
    const rightTriggerValue = gamepad.axes[5];
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

    // Check Start button
    const isStartButtonPressed = gamepad.buttons[7].pressed;
    updateStartButtonImage(isStartButtonPressed);

    // Check Select button
    const isSelectButtonPressed = gamepad.buttons[6].pressed;
    updateSelectButtonImage(isSelectButtonPressed);

    // Check Home button
    const isHomeButtonPressed = gamepad.buttons[8].pressed;
    updateHomeButtonImage(isHomeButtonPressed);

    // Check D-pad Up button
    updateDPadUpButton(DyAxisValue === -1);

    // Check D-pad Right button
    updateDPadRightButton(DxAxisValue === 1 );


    // Check D-pad Down button
    updateDPadDownButton(DyAxisValue === 1 );


    // Check D-pad Left button
    updateDPadLeftButton(DxAxisValue === -1 );
}

function handlePS4(gamepad) {
    // Check Left stick
    const LeftxAxisValue = gamepad.axes[0];
    const LeftyAxisValue = gamepad.axes[1];

    // Check Right stick
    const RightxAxisValue = gamepad.axes[2];
    const RightyAxisValue = gamepad.axes[3];

    // Check DPad
    const DxAxisValue = gamepad.axes[4];
    const DyAxisValue = gamepad.axes[5];

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
    const leftTriggerValue = gamepad.buttons[6].value;
    updateLeftTriggerImage(leftTriggerValue);

    // Check right bumper
    const rightBumperValue = gamepad.buttons[5].pressed;
    updateRightBumperImage(rightBumperValue);

    // Check right trigger
    const rightTriggerValue = gamepad.buttons[7].value;
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
    const isStartButtonPressed = gamepad.buttons[9].pressed;
    updateStartButtonImage(isStartButtonPressed);

    // Check View button
    const isSelectButtonPressed = gamepad.buttons[8].pressed;
    updateSelectButtonImage(isSelectButtonPressed);

    // Check Home button
    const isHomeButtonPressed = gamepad.buttons[16].pressed;
    updateHomeButtonImage(isHomeButtonPressed);

    // Check D-pad Up button
    const isDPadUpButtonPressed = gamepad.buttons[12].pressed;
    updateDPadUpButton(isDPadUpButtonPressed);

    // Check D-pad Right button
    const isDPadRightButtonPressed = gamepad.buttons[15].pressed;
    updateDPadRightButton(isDPadRightButtonPressed);


    // Check D-pad Down button
    const isDPadDownButtonPressed = gamepad.buttons[13].pressed;
    updateDPadDownButton(isDPadDownButtonPressed);


    // Check D-pad Left button
    const isDPadLeftButtonPressed = gamepad.buttons[14].pressed;
    updateDPadLeftButton(isDPadLeftButtonPressed);
}

function handleGamSir(gamepad) {
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
    const leftTriggerValue = gamepad.axes[5];
    updateLeftTriggerImage(leftTriggerValue);

    // Check right bumper
    const rightBumperValue = gamepad.buttons[7].pressed;
    updateRightBumperImage(rightBumperValue);

    // Check right trigger
    const rightTriggerValue = gamepad.axes[4];
    updateRightTriggerImage(rightTriggerValue);

    // Check A button
    const isAButtonPressed = gamepad.buttons[0].pressed;
    updateAButtonImage(isAButtonPressed);

    // Check B button
    const isBButtonPressed = gamepad.buttons[1].pressed;
    updateBButtonImage(isBButtonPressed);

    // Check X button
    const isXButtonPressed = gamepad.buttons[3].pressed;
    updateXButtonImage(isXButtonPressed);

    // Check Y button
    const isYButtonPressed = gamepad.buttons[4].pressed;
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