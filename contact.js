
"use strict";

const readline = require("readline");

const contacts = [
    "1|Scott|scott@murach.com|1-559-555-5555",
    "2|Joel|joel@murach.com|1-409-555-5555",
    "3|Mike|mike@murach.com|1-363-555-5555"
];

const menuString = "COMMAND MENU\n" +
    "list - List all contacts\n" +
    "get # - Get contact with the specified number\n" +
    "exit - Exit program";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function showMenu() {
    console.log("\n" + menuString + "\n");

    rl.question("Enter command: ", function(command) {
        command = command.trim().toLowerCase();

        if (command === "exit") {
            console.log("Exiting Contact Viewer.");
            rl.close();
        }

        else if (command === "list") {
            console.log("\nCONTACT LIST");

            contacts.forEach(function(contact) {
                const fields = contact.split("|");
                console.log(fields[0] + " - " + fields[1]);
            });

            showMenu();
        }

        else if (command.startsWith("get ")) {
            const number = command.substring(4).trim();

            const foundContact = contacts.find(function(contact) {
                return contact.split("|")[0] === number;
            });

            if (foundContact) {
                const fields = foundContact.split("|");

                console.log("\nCONTACT INFORMATION");
                console.log("Number: " + fields[0]);
                console.log("Name: " + fields[1]);
                console.log("Email: " + fields[2]);
                console.log("Phone: " + fields[3]);
            } else {
                console.log("Contact " + number + " not found.");
            }

            showMenu();
        }

        else {
            console.log("Invalid command. Please try again.");
            showMenu();
        }
    });
}

showMenu();
