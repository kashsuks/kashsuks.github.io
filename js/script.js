function focusInput() {
    document.getElementById("command").focus();
}

window.addEventListener("load", () => {
    setTimeout(() => {
        auto("home");
    }, 1000);
});

current_dir = "~/";

const commandInput = document.getElementById("command");

let current_path = document.querySelector("#path");

let output = document.querySelector(".output");

let scrollbtm = document.querySelector(".scrollTo");

commandInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        const command = commandInput.value.toLowerCase();
        const words = command.split(" ");

        commandInput.value = "";
        processor(
            `<div class="prompt"><p class="user">kashyap@portfolio</p>[<p class="location" id="path">${current_dir}</p>] -> <div class="cmd">${command}</div></div>`
        );

        if (words[0] === "cd" && words[1] !== "") {
            CdCommand(words[1]);
        } else if (words[0] === "clear") {
            output.innerHTML = "";
        } else if (words[0] === "pwd") {
            PWD();
        } else if (words[0] === "ls") {
            lsCommand(words[1]);
        } else if (words[0] === "sudo") {
            processor(randomAscii(sudoer));
        } else if (words[0] === "help") {
            processor(help);
        } else if (command === "whoami") {
            processor(introduction);
        } else if (words[0] === "cat") {
            catCommand(words[1]);
        } else if (words[0] === "gui") {
            processor("GUI version of site is still in development ... ");
            processor("Sorry for the inconvinience ... ");
            // processor("Opening GUI portfolio");
            // setTimeout(() => {
            //     window.location.href = "/gui";
            // }, 1000);
        } else if (command === "") {
            console.log("blank cmd");
        } else if (command === "email") {
            processor("opening default mail client ...");
            window
                .open("mailto:ksukshavasi@gmail.com", "_blank")
                .focus();
        } else if (command === "gmail" || command === "pingme") {
            processor("opening gmail on web browser ...");
            window
                .open(
                    "https://mail.google.com/mail/?view=cm&fs=1&to=ksukshavasi@gmail.com ",
                    "_blank"
                )
                .focus();
        } else if (command === "instagram" || command === "insta") {
            processor("opening Instagram on web browser ...");
            window.open("https://instagram.com/kashyaplvtech", "_blank").focus();
        } else if (command === "x" || command === "x.com") {
            processor("opening X.com on web browser ...");
            window.open("https://x.com/shkev03", "_blank").focus();
        } else if (command === "github" || command === "git") {
            processor("opening GitHub on web browser ...");
            window.open("https://github.com/kashsuks", "_blank").focus();
        } else {
            // Handle other commands or display an error message
            processor(
                `<p>Command ${words[0]} not found : Enter <b class="command">'help'</b> command to know the available commands.</p>`
            );
            console.log("Unknown command:", words[0]);
        }
        scrollbtm.scrollIntoView();
    } else if (event.ctrlKey && event.key === "l") {
        event.preventDefault();
        output.innerHTML = "";
    }
});

function processor(out) {
    output.innerHTML += `<p>${out}</p>`;
}

function showSidebar() {
    const sidebar = document.querySelector(".sidebar");
    sidebar.style.display = "flex";
    sidebar.style.opacity = 1;
}

function hideSidebar() {
    const sidebar = document.querySelector(".sidebar");
    sidebar.style.display = "none";
    sidebar.style.opacity = 0;
}

const terminal = document.querySelector(".container");

let max = false;

const maximize = () => {
    max = !max;
    console.log(max);
    if (max === true) {
        terminal.classList.add("maximized");
    } else if (max === false) {
        terminal.classList.remove("maximized");
    }
};

const errorMsg = document.getElementById("error");

const error = (msg) => {
    console.log(`error: ${msg}`);
    errorMsg.innerHTML = msg;
    errorMsg.style.display = "block";
    setTimeout(() => {
        errorMsg.style.display = "none";
    }, 2000);
};

const randomAscii = (asciiArtList) => {
    return asciiArtList[Math.floor(Math.random() * asciiArtList.length)];
};
