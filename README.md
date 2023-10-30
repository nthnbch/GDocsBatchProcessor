# GDocsBatchProcessor

**Description**: A Google Apps Script utility that processes Google Docs within a specified Google Drive folder (and its subfolders). The script alters document formatting, removes the first line, and inserts an image at the beginning of eligible files.

## Features:
1. **Font Change**: Transforms the entire document's font to 'Inter'.
2. **Italic Text Conversion**: Converts italicized text within the document to regular text.
3. **Header Removal**: Eliminates any headers found within the Google Docs.
4. **Image Insertion**: Places a specific image at the start of the document.
5. **First Line Deletion**: Deletes the first line of the document.

## Image Insertion:
For the script to successfully insert an image at the start of each Google Doc:
- Place the desired image in the root of the specified Drive folder.
- Ensure that no other files in the same directory share this name to avoid confusion.

## Usage:
Refer to `INSTALL.md` for setup and execution details.

## Participation and Contribution:
Thank you for your interest in GDocsBatchProcessor! We welcome and encourage collaboration.

### How to Participate:
1. **Fork the Repository**: Click on the 'Fork' button at the top right of this page. This creates your own copy of the repository.
2. **Clone Your Fork**: Clone your fork to your local machine and make your changes.
3. **Submit a Pull Request**: After pushing your changes to your forked repository, create a pull request to my **dev** repository. I'll review and merge your contributions.

### Issues and Feedback:
For any issues, bugs, or feedback, please open an issue in the repository.

## Disclaimer:
Please be cautious when using this script, especially with important documents. While every effort has been made to ensure the script works as intended, the authors and maintainers are not responsible for any unintended consequences or damages arising from the use of this tool.
