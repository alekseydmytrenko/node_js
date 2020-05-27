const path = require("path")

console.log("file name: ", path.basename(__filename))

console.log("directory name: ", path.dirname(__filename))

console.log("File extension name: ", path.extname(__filename))

console.log("Parse: ", path.parse(__filename))

console.log(path.join(__dirname, "server", "index.html"))