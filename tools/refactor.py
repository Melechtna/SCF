#!/usr/bin/env python3
import os

# Specify the directories
base_folder = './'
buttons_folder = os.path.join(base_folder, 'Buttons')  # Capitalized
pushed_folder = os.path.join(base_folder, 'Pushed')    # Capitalized

# Ensure the Buttons and Pushed folders exist
os.makedirs(buttons_folder, exist_ok=True)
os.makedirs(pushed_folder, exist_ok=True)

# Files to ignore
ignored_files = {'Base.png', 'Icon.png'}

# Iterate over all files in the base folder
for filename in os.listdir(base_folder):
    # Skip ignored files, directories, and the script itself
    if (
        filename in ignored_files
        or os.path.isdir(os.path.join(base_folder, filename))
        or filename == 'refactor.py'  # Exclude the script itself
        or not filename.lower().endswith('.png')  # Only process .png files
    ):
        continue

    # Check if the file ends with a capital P
    if filename.endswith('P.png'):
        # Construct the full file path
        old_file = os.path.join(base_folder, filename)

        # Create the new filename by removing the trailing 'P'
        new_filename = filename[:-5] + '.png'  # Remove 'P' before '.png'

        # Construct the full path for the new file in the Pushed folder
        new_file = os.path.join(pushed_folder, new_filename)

        # Move and rename the file
        os.rename(old_file, new_file)
        print(f'Moved and renamed: {filename} -> {new_filename}')
    else:
        # Construct the full file path
        old_file = os.path.join(base_folder, filename)

        # Construct the full path for the new file in the Buttons folder
        new_file = os.path.join(buttons_folder, filename)

        # Move the file
        os.rename(old_file, new_file)
        print(f'Moved: {filename} -> {new_file}')
