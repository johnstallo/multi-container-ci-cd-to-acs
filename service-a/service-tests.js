var page = require("webpage").create();

console.log("Waiting for service availability...");
setTimeout(function () {
    console.log("Opening http://service-a");
    page.open("http://service-a", function (status) {
        console.log("Status: " + status);
        if (status !== "success") {
            phantom.exit(1);
        }
        console.log("TESTS PASSED");
        phantom.exit();
    });
}, 2000);
