// Replace 'YOUR_FOLDER_ID' with your actual Google Drive folder ID.
var FOLDER_ID = 'YOUR_FOLDER_ID';

/**
 * Entry point to process Google Docs in the specified folder.
 */
function mainProcess() {
  var mainFolder = DriveApp.getFolderById(FOLDER_ID);
  
  // Fetch the image blob for later use
  var imageBlob = getImageBlob(mainFolder);
  
  processFilesInFolder(mainFolder, imageBlob);
}

/**
 * Gets the image blob from the specified folder.
 */
function getImageBlob(folder) {
  // Replace 'YOUR_IMAGE_NAME' with the iamge that has to be placed in the file, this iamge must be originally place in folder related to YOUR_FOLDER_ID
  var imageFile = folder.getFilesByName('YOUR_IMAGE_NAME').next();
  return imageFile.getBlob();
}

/**
 * Recursively processes Google Docs in the folder and subfolders.
 */
function processFilesInFolder(folder, imageBlob) {
  var files = folder.getFilesByType(MimeType.GOOGLE_DOCS);
  
  while (files.hasNext()) {
    var file = files.next();
    var fileName = file.getName();
    Logger.log('Processing file: ' + fileName);
    
    if (isValidFileName(fileName)) {
      try {
        var doc = DocumentApp.openById(file.getId());
        var body = doc.getBody();

        updateDocument(doc, body, imageBlob);

        doc.saveAndClose();
        Utilities.sleep(5000);
      } catch (e) {
        Logger.log(`Error processing file ${fileName}: ${e.toString()}`);
      }
    }
  }

  // Recursively process subfolders
  var subfolders = folder.getFolders();
  while (subfolders.hasNext()) {
    processFilesInFolder(subfolders.next(), imageBlob);
  }
}

function isValidFileName(fileName) {
// Replace "Example of name starting with - " and "Example of anothername starting with -  "with the names you want to search.
  return fileName.startsWith("Example of name starting with - ") || fileName.startsWith("Example of anothername starting with - ");
}

function updateDocument(doc, body, imageBlob) {
  removeHeader(doc);
  formatText(body);
  removeFirstLineFromBody(body);
  prependImage(body, imageBlob);
}

function removeHeader(doc) {
  var headers = doc.getHeader();
  headers && headers.removeFromParent();
}

function formatText(body) {
  // Replace 'YOUR_FONT_NAME' with the font you choose.
  body.setFontFamily('YOUR_FONT_NAME');
  const paragraphs = body.getParagraphs();
  paragraphs.forEach(para => {
    para.editAsText().setItalic(false);
  });
}

function removeFirstLineFromBody(body) {
  var firstElement = body.getChild(0);
  firstElement && firstElement.removeFromParent();
}

function prependImage(body, imageBlob) {
  body.insertImage(0, imageBlob);
}
