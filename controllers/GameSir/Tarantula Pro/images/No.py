import os

# Specify the directory containing the files
folder_path = './'

# Iterate over all files in the folder
for filename in os.listdir(folder_path):
    # Check if the file contains a capital P
    if 'P' in filename:
        # Construct the full file path
        old_file = os.path.join(folder_path, filename)

        # Create the new filename by replacing 'P' with an empty string
        new_filename = filename.replace('P', '')

        # Construct the full path for the new file
        new_file = os.path.join(folder_path, new_filename)

        # Rename the file
        os.rename(old_file, new_file)
        print(f'Renamed: {filename} -> {new_filename}')
