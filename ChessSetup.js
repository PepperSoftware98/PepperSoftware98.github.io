//Chess Board Creator


// Get the user's Desktop folder path
var fso = new ActiveXObject("Scripting.FileSystemObject");
var shell = new ActiveXObject("WScript.Shell");
var desktopPath = shell.SpecialFolders("Desktop");

// List of file names to create
var filenames = ["White Pawn 1", "White Pawn 2", "White Pawn 3", "White Pawn 4", "White Pawn 5", "White Pawn 6", "White Pawn 7", "White Pawn 8",
"White Knight 1", "White Knight 2", "White Rook 1", "White Rook 2", "White Bishop 1", "White Bishop 2", "White Queen", "White King", 

"Black Pawn 1", "Black Pawn 2", "Black Pawn 3", "Black Pawn 4", "Black Pawn 5", "Black Pawn 6", "Black Pawn 7", "Black Pawn 8",
"Black Knight 1", "Black Knight 2", "Black Rook 1", "Black Rook 2", "Black Bishop 1", "Black Bishop 2", "Black Queen", "Black King"

];

// Loop through the list and create each file
for (var i = 0; i < filenames.length; i++) {
    var filePath = desktopPath + "\\" + filenames[i];
    
    // Check if the file already exists
    if (!fso.FileExists(filePath)) {
        var file = fso.CreateTextFile(filePath, true);
        file.WriteLine("This text file represents the following chess piece:" + filenames[i]); // Add content to the file
        file.Close();
    } else {
        WScript.Echo(filenames[i] + " already exists.");
    }
}
