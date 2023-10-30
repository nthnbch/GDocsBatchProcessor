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
