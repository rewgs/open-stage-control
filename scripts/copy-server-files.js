const fs = require("fs");
const path = require("path");

// Create the server directory if it doesn't exist
const serverDir = path.join(__dirname, "../app/server");
if (!fs.existsSync(serverDir)) {
  fs.mkdirSync(serverDir, { recursive: true });
}

// Copy all server files
const srcDir = path.join(__dirname, "../src/server");
const files = fs.readdirSync(srcDir);

files.forEach((file) => {
  if (file.endsWith(".js")) {
    fs.copyFileSync(path.join(srcDir, file), path.join(serverDir, file));
  }
});

// Copy Python files if they exist
const pythonSrcDir = path.join(srcDir, "python");
const pythonDestDir = path.join(serverDir, "python");

if (fs.existsSync(pythonSrcDir)) {
  if (!fs.existsSync(pythonDestDir)) {
    fs.mkdirSync(pythonDestDir, { recursive: true });
  }

  const pythonFiles = fs.readdirSync(pythonSrcDir);
  pythonFiles.forEach((file) => {
    fs.copyFileSync(
      path.join(pythonSrcDir, file),
      path.join(pythonDestDir, file)
    );
  });
}
