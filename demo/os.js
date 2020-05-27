const os = require("os");

console.log("OS: ", os.platform())

console.log("Architecture: ", os.arch())

console.log("Processor Info: ", os.cpus())

console.log("Free memory: ", os.freemem())

console.log("Total memory: ", os.totalmem())

console.log("Home Directory: ", os.homedir())

console.log("Work time: ", os.uptime())