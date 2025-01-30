#!/usr/bin/env python3
import re

# Function to update image paths in a file using the 3-pass method
def update_image_paths(file_content):
    # First Pass: Replace images/ with images/Buttons/ for non-pressed images (exclude paths ending with P and Base.png/Icon.png)
    file_content = re.sub(
        r'images/((?!Base\.png|Icon\.png)[A-Za-z0-9]+(?<!P))\.png',
        r'images/Buttons/\1.png',
        file_content
    )

    # Second Pass: Replace images/ with images/Pushed/ for pressed images
    file_content = re.sub(
        r'images/([A-Za-z0-9]+P)\.png',
        r'images/Pushed/\1.png',
        file_content
    )

    # Third Pass: Remove the trailing 'P' from pressed image filenames
    file_content = re.sub(
        r'images/Pushed/([A-Za-z0-9]+)P\.png',
        r'images/Pushed/\1.png',
        file_content
    )

    return file_content

# Update index.html (assumed to be in the same directory as the script)
try:
    with open('index.html', 'r') as file:
        html_content = file.read()
        html_content = update_image_paths(html_content)

    with open('index.html', 'w') as file:
        file.write(html_content)
    print("index.html updated successfully.")
except Exception as e:
    print(f'Error updating index.html: {e}')

# Update renderer.js (assumed to be in the "scripts" folder, same directory as the script)
try:
    with open('scripts/renderer.js', 'r') as file:
        js_content = file.read()
        js_content = update_image_paths(js_content)

    with open('scripts/renderer.js', 'w') as file:
        file.write(js_content)
    print("renderer.js updated successfully.")
except Exception as e:
    print(f'Error updating renderer.js: {e}')
