var fs = require("fs");

// Test if server.js exists
var message = "Existence of server.js: ";
if (!fs.existsSync("server.js")) {
    console.log(message + "FAILED");
    process.exit(1);
} else {
    console.log(message + "SUCCESS");
    process.exit(0);
}
