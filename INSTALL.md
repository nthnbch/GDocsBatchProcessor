# Installation & Execution Guide

## Pre-requisites:
1. **Google Account**: Ensure you are logged into your Google Account.
2. **Google Drive Permissions**: Grant necessary permissions to access and modify files.

## Image Preparation:
1. **Upload Image**:
   - Ensure you have uploaded an image named as you want to the root of the Google Drive folder specified by the `FOLDER_ID`.
2. **Unique Name**:
   - Confirm that there aren't multiple files named of name the of the image you want to place in the folder, within the same folder to avoid unexpected behaviors.

## Script Setup:
1. Navigate to [Google Apps Script](https://script.google.com/).
2. Start a new project and paste the provided script.
3. Replace `YOUR_FOLDER_ID_HERE` in the script with your Google Drive folder ID.
4. Replace `YOUR_IMAGE_NAME` in the script with the name of the image you put a the root folder.
5. Replace `OUR_FONT_NAME` in the script with the font you want to choose for your files.
6. Save the project.

## Execution:
1. Within Google Apps Script, click on the play (▶️) button.
2. Grant the required permissions when prompted.
3. The script will begin processing the documents within the specified folder.

Note: Make sure to test the script with a few documents first before running on an entire directory to ensure desired results.
