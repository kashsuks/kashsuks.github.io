// this script contains automated scripts for nav buttons

const input = document.getElementById("input");

let stopHome = false;
let stopWork = true;
let stopAbout = true;
let stopContact = true;

const auto = (cmd, timeout) => {
    input.style.display = "none";
    changePath("~/");
    output.innerHTML = "";
    processor(
        `<div class="help-log comment">
            Enter <b class="command">'help'</b> command to know
            the available commands.
        </div>`
    );
    if (cmd === "home") {
        processor(
            `<div class="prompt"><p class="user">kashyap@portfolio</p>[<p class="location" id="path">~/</p>] -> <div id="typing" class="typing cmd">cat banner.txt</div></div>`
        );
        stopHome = false;
        stopWork = true;
        stopAbout = true;
        stopContact = true;
    } else if (cmd === "about") {
        processor(
            `<div class="prompt"><p class="user">kashyap@portfolio</p>[<p class="location" id="path">~/</p>] -> <div id="typing" class="typing cmd">whoami</div></div>`
        );
        stopHome = true;
        stopWork = true;
        stopAbout = false;
        stopContact = true;
    } else if (cmd === "work") {
        processor(
            `<div class="prompt"><p class="user">kashyap@portfolio</p>[<p class="location" id="path">~/</p>] -> <div id="typing" class="typing cmd">ls ./projects</div></div>`
        );
        stopHome = true;
        stopWork = false;
        stopAbout = true;
        stopContact = true;
    } else if (cmd === "contact") {
        processor(
            `<div class="prompt"><p class="user">kashyap@portfolio</p>[<p class="location" id="path">~/</p>] -> <div id="typing" class="typing cmd">pingme</div></div>`
        );
        stopHome = true;
        stopWork = true;
        stopAbout = true;
        stopContact = false;
    }

    setTimeout(() => {
        const typing = document.getElementById("typing");
        typing.classList.remove("typing");
        if (cmd === "home") {
            if (stopHome === true) {
                return;
            } else {
                processor(randomAscii(PenguinBanner));
            }
        } else if (cmd === "about") {
            if (stopAbout === true) {
                return;
            } else {
                processor(introduction);
            }
        } else if (cmd === "work") {
            if (stopWork === true) {
                return;
            } else {
                processor(lsProjects);
            }
        } else if (cmd === "contact") {
            if (stopContact === true) {
                return;
            } else {
                processor("Opening Gmail on web browser ...");
                setTimeout(
                    () =>
                        window
                            .open(
                                "https://mail.google.com/mail/?view=cm&fs=1&to=ksukshavasi@gmail.com",
                                "_blank"
                            )
                            .focus(),
                    500
                );
            }
        }
        setTimeout(() => {
            input.style.display = "flex";
            console.log("auto command completed");
            focusInput();
        }, 400);
    }, 2100);
};
