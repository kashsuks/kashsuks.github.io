function CdCommand(directory) {
    // Implement the cd command logic here
    if (current_dir === "~/") {
        if (
            directory === "projects" ||
            directory === "./projects" ||
            directory === "/projects"
        ) {
            current_dir = current_dir + "projects";
            changePath(current_dir);
        } else if (
            directory === "skills" ||
            directory === "./skills" ||
            directory === "/skills"
        ) {
            current_dir = current_dir + "skills";
            changePath(current_dir);
        } else if (
            directory === ".." ||
            directory === "/" ||
            directory === "../"
        ) {
            processor(
                `Access Denied : You don't have permission to access this directory.`
            );
        } else if (
            directory === "projects/amazon-clone" ||
            directory === "./projects/amazon-clone/" ||
            directory === "./projects/amazon-clone/"
        ) {
            processor("opening /Amazon-Clone on github.com ...");
            processor(
                "redirecting to <b class='link'>https://github.com/ShKev03/Amazon</b>..."
            );
            window.open("https://github.com/ShKev03/Amazon", "_blank").focus();
        } else if (
            directory === "projects/zoom-clone" ||
            directory === "./projects/zoom-clone/" ||
            directory === "./projects/zoom-clone/"
        ) {
            processor("opening /Zoom-Clone on github.com ...");
            processor(
                "redirecting to <b class='link'>https://github.com/ShKev03/Zoom</b>..."
            );
            window.open("https://github.com/ShKev03/Zoom", "_blank").focus();
        } else if (
            directory === "projects/whatsapp-clone" ||
            directory === "./projects/whatsapp-clone/" ||
            directory === "./projects/whatsapp-clone/"
        ) {
            processor("opening /Whatsapp-Clone on github.com ...");
            processor(
                "redirecting to <b class='link'>https://github.com/ShKev03/WhatsChat</b>..."
            );
            window
                .open("https://github.com/ShKev03/WhatsChat", "_blank")
                .focus();
        } else if (
            directory === "projects/instagram-clone" ||
            directory === "./projects/instagram-clone/" ||
            directory === "./projects/instagram-clone/"
        ) {
            processor("opening /Instagram-Clone on github.com ...");
            processor(
                "redirecting to <b class='link'>https://github.com/ShKev03/Instagram</b>..."
            );
            window
                .open("https://github.com/ShKev03/Instagram", "_blank")
                .focus();
        } else if (
            directory === "projects/facebook-clone" ||
            directory === "./projects/facebook-clone/" ||
            directory === "./projects/facebook-clone/"
        ) {
            processor("opening /Facebook-Clone on github.com ...");
            processor(
                "redirecting to <b class='link'>https://github.com/ShKev03/Facebook </b> ..."
            );
            window
                .open("https://github.com/shkev03/Facebook", "_blank")
                .focus();
        } else {
            processor(
                `Directory ${directory} not found. Please Enter a valid directory`
            );
        }
    } else if (current_dir === "~/projects") {
        if (directory === ".." || directory === "../") {
            current_dir = "~/";
            changePath(current_dir);
        } else if (
            directory === "../.." ||
            directory === "/" ||
            directory === "../../"
        ) {
            processor(
                `Access Denied : You don't have permission to access this directory.`
            );
        } else if (directory === "../skills" || directory === "../skills/") {
            current_dir = "~/skills";
            changePath(current_dir);
        } else if (
            directory === "amazon-clone" ||
            directory === "./amazon-clone/" ||
            directory === "./amazon-clone/"
        ) {
            processor("opening /Amazon-Clone on github.com ...");
            processor(
                "redirecting to <b class='link'>https://github.com/ShKev03/Amazon</b>..."
            );
            window.open("https://github.com/ShKev03/Amazon", "_blank").focus();
        } else if (
            directory === "zoom-clone" ||
            directory === "./zoom-clone/" ||
            directory === "./zoom-clone/"
        ) {
            processor("opening /Zoom-Clone on github.com ...");
            processor(
                "redirecting to <b class='link'>https://github.com/ShKev03/Zoom</b>..."
            );
            window.open("https://github.com/ShKev03/Zoom", "_blank").focus();
        } else if (
            directory === "whatsapp-clone" ||
            directory === "./whatsapp-clone/" ||
            directory === "./whatsapp-clone/"
        ) {
            processor("opening /Whatsapp-Clone on github.com ...");
            processor(
                "redirecting to <b class='link'>https://github.com/ShKev03/WhatsChat</b>..."
            );
            window
                .open("https://github.com/ShKev03/WhatsChat", "_blank")
                .focus();
        } else if (
            directory === "instagram-clone" ||
            directory === "./instagram-clone/" ||
            directory === "./instagram-clone/"
        ) {
            processor("opening /Instagram-Clone on github.com ...");
            processor(
                "redirecting to <b class='link'>https://github.com/ShKev03/Instagram</b>..."
            );
            window
                .open("https://github.com/ShKev03/Instagram", "_blank")
                .focus();
        } else if (
            directory === "facebook-clone" ||
            directory === "./facebook-clone/" ||
            directory === "./facebook-clone/"
        ) {
            processor("opening /Facebook-Clone on github.com ...");
            processor(
                "redirecting to <b class='link'>https://github.com/ShKev03/Facebook</b> ..."
            );
            window
                .open("https://github.com/shkev03/Facebook", "_blank")
                .focus();
        } else {
            processor(
                `Directory ${directory} not found. Please Enter a valid directory`
            );
        }
    } else if (current_dir === "~/skills") {
        if (directory === ".." || directory === "../") {
            current_dir = "~/";
            changePath(current_dir);
        } else if (
            directory === "../.." ||
            directory === "/" ||
            directory === "../../"
        ) {
            processor(
                `Access Denied : You don't have permission to access this directory.`
            );
        } else if (
            directory === "../projects" ||
            directory === "../projects/"
        ) {
            current_dir = "~/projects";
            changePath(current_dir);
        } else if (
            directory === "../projects/amazon-clone" ||
            directory === "../projects/amazon-clone/" ||
            directory === "../projects/amazon-clone/"
        ) {
            processor("opening /Amazon-Clone on github.com ...");
            processor(
                "redirecting to <b class='link'>https://github.com/ShKev03/Amazon</b>..."
            );
            window.open("https://github.com/ShKev03/Amazon", "_blank").focus();
        } else if (
            directory === "../projects/zoom-clone" ||
            directory === "../projects/zoom-clone/" ||
            directory === "../projects/zoom-clone/"
        ) {
            processor("opening /Zoom-Clone on github.com ...");
            processor(
                "redirecting to <b class='link'>https://github.com/ShKev03/Zoom</b>..."
            );
            window.open("https://github.com/ShKev03/Zoom", "_blank").focus();
        } else if (
            directory === "../projects/whatsapp-clone" ||
            directory === "../projects/whatsapp-clone/" ||
            directory === "../projects/whatsapp-clone/"
        ) {
            processor("opening /Whatsapp-Clone on github.com ...");
            processor(
                "redirecting to <b class='link'>https://github.com/ShKev03/WhatsChat</b>..."
            );
            window
                .open("https://github.com/ShKev03/WhatsChat", "_blank")
                .focus();
        } else if (
            directory === "../projects/instagram-clone" ||
            directory === "../projects/instagram-clone/" ||
            directory === "../projects/instagram-clone/"
        ) {
            processor("opening /Instagram-Clone on github.com ...");
            processor(
                "redirecting to <b class='link'>https://github.com/ShKev03/Instagram</b>..."
            );
            window
                .open("https://github.com/ShKev03/Instagram", "_blank")
                .focus();
        } else if (
            directory === "../projects/facebook-clone" ||
            directory === "../projects/facebook-clone/" ||
            directory === "../projects/facebook-clone/"
        ) {
            processor("opening /Facebook-Clone on github.com ...");
            processor(
                "redirecting to <b class='link'>https://github.com/ShKev03/Facebook</b> ..."
            );
            window
                .open("https://github.com/shkev03/Facebook", "_blank")
                .focus();
        } else {
            processor(
                `Directory ${directory} not found. Please Enter a valid directory`
            );
        }
    }
}

function changePath(path) {
    console.log(path);
    current_path.innerHTML = path;
}

function changePathButton(path) {
    processor(
        `<div class="prompt"><p class="user">kashyap@portfolio</p>[<p class="location" id="path">${current_dir}</p>] -> <div class="cmd"> ls ${path}</div></div>`
    );
    processor(`<p class="comment"> changing path to ${path} </p>`);
    console.log(path);
    current_dir = path;
    changePath(path);
}
