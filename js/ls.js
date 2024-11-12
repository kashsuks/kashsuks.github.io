function lsCommand(dir) {
    if (current_dir === "~/") {
        if (
            dir === "projects" ||
            dir === "./projects" ||
            dir === "projects/" ||
            dir === "./projects/"
        ) {
            processor(lsProjects);
        } else if (
            dir === "skills" ||
            dir === "./skills" ||
            dir === "skills/" ||
            dir === "./skills/"
        ) {
            processor(lsSkills);
        } else if (dir === ".." || dir === "/" || dir === "../") {
            processor(
                `Access Denied : You don't have permission to access this directory.`
            );
        } else if (
            dir === "projects/amazon-clone" ||
            dir === "./projects/amazon-clone/" ||
            dir === "./projects/amazon-clone/"
        ) {
            processor("opening /Amazon-Clone on github.com ...");
            processor(
                "redirecting to <b class='link'>https://github.com/ShKev03/Amazon</b>..."
            );
            window.open("https://github.com/ShKev03/Amazon", "_blank").focus();
        } else if (
            dir === "projects/zoom-clone" ||
            dir === "./projects/zoom-clone/" ||
            dir === "./projects/zoom-clone/"
        ) {
            processor("opening /Zoom-Clone on github.com ...");
            processor(
                "redirecting to <b class='link'>https://github.com/ShKev03/Zoom</b>..."
            );
            window.open("https://github.com/ShKev03/Zoom", "_blank").focus();
        } else if (
            dir === "projects/whatsapp-clone" ||
            dir === "./projects/whatsapp-clone/" ||
            dir === "./projects/whatsapp-clone/"
        ) {
            processor("opening /Whatsapp-Clone on github.com ...");
            processor(
                "redirecting to <b class='link'>https://github.com/ShKev03/WhatsChat</b>..."
            );
            window
                .open("https://github.com/ShKev03/WhatsChat", "_blank")
                .focus();
        } else if (
            dir === "projects/instagram-clone" ||
            dir === "./projects/instagram-clone/" ||
            dir === "./projects/instagram-clone/"
        ) {
            processor("opening /Instagram-Clone on github.com ...");
            processor(
                "redirecting to <b class='link'>https://github.com/ShKev03/Instagram</b>..."
            );
            window
                .open("https://github.com/ShKev03/Instagram", "_blank")
                .focus();
        } else if (
            dir === "projects/facebook-clone" ||
            dir === "./projects/facebook-clone/" ||
            dir === "./projects/facebook-clone/"
        ) {
            processor("opening /Facebook-Clone on github.com ...");
            processor(
                "redirecting to <b class='link'>https://github.com/ShKev03/Facebook </b> ..."
            );
            window
                .open("https://github.com/shkev03/Facebook", "_blank")
                .focus();
        } else {
            processor(lsHome);
        }
    } else if (current_dir === "~/projects") {
        if (
            dir === "amazon-clone" ||
            dir === "./amazon-clone" ||
            dir === "./amazon-clone/"
        ) {
            processor("opening /Amazon-Clone on github.com ...");
            processor(
                "redirecting to <b class='link'>https://github.com/ShKev03/Amazon</b>..."
            );
            window.open("https://github.com/ShKev03/Amazon", "_blank").focus();
        } else if (
            dir === "zoom-clone" ||
            dir === "./zoom-clone" ||
            dir === "./zoom-clone/"
        ) {
            processor("opening /Zoom-Clone on github.com ...");
            processor(
                "redirecting to <b class='link'>https://github.com/ShKev03/Zoom</b>..."
            );
            window.open("https://github.com/ShKev03/Zoom", "_blank").focus();
        } else if (
            dir === "whatsapp-clone" ||
            dir === "./whatsapp-clone" ||
            dir === "./whatsapp-clone/"
        ) {
            processor("opening /Whatsapp-Clone on github.com ...");
            processor(
                "redirecting to <b class='link'>https://github.com/ShKev03/WhatsChat</b>..."
            );
            window
                .open("https://github.com/ShKev03/WhatsChat", "_blank")
                .focus();
        } else if (
            dir === "instagram-clone" ||
            dir === "./instagram-clone" ||
            dir === "./instagram-clone/"
        ) {
            processor("opening /Instagram-Clone on github.com ...");
            processor(
                "redirecting to <b class='link'>https://github.com/ShKev03/Instagram</b>..."
            );
            window
                .open("https://github.com/ShKev03/Instagram", "_blank")
                .focus();
        } else if (
            dir === "facebook-clone" ||
            dir === "./facebook-clone" ||
            dir === "./facebook-clone/"
        ) {
            processor("opening /Facebook-Clone on github.com ...");
            processor(
                "redirecting to <b class='link'>https://github.com/ShKev03/Facebook</b> ..."
            );
            window
                .open("https://github.com/shkev03/Facebook", "_blank")
                .focus();
        } else {
            processor(lsProjects);
        }
    } else if (current_dir === "~/skills") {
        if (
            dir === "../projects/amazon-clone" ||
            dir === "../projects/amazon-clone/  " ||
            dir === "../projects/amazon-clone/"
        ) {
            processor("opening /Amazon-Clone on github.com ...");
            processor(
                "redirecting to <b class='link'>https://github.com/ShKev03/Amazon</b>..."
            );
            window.open("https://github.com/ShKev03/Amazon", "_blank").focus();
        } else if (
            dir === "zoom-clone" ||
            dir === "../projects/zoom-clone/" ||
            dir === "../projects/zoom-clone/"
        ) {
            processor("opening /Zoom-Clone on github.com ...");
            processor(
                "redirecting to <b class='link'>https://github.com/ShKev03/Zoom</b>..."
            );
            window.open("https://github.com/ShKev03/Zoom", "_blank").focus();
        } else if (
            dir === "whatsapp-clone" ||
            dir === "../projects/whatsapp-clone/" ||
            dir === "../projects/whatsapp-clone/"
        ) {
            processor("opening /Whatsapp-Clone on github.com ...");
            processor(
                "redirecting to <b class='link'>https://github.com/ShKev03/WhatsChat</b>..."
            );
            window
                .open("https://github.com/ShKev03/WhatsChat", "_blank")
                .focus();
        } else if (
            dir === "../projects/instagram-clone" ||
            dir === "../projects/instagram-clone/" ||
            dir === "../projects/instagram-clone/"
        ) {
            processor("opening /Instagram-Clone on github.com ...");
            processor(
                "redirecting to <b class='link'>https://github.com/ShKev03/Instagram</b>..."
            );
            window
                .open("https://github.com/ShKev03/Instagram", "_blank")
                .focus();
        } else if (
            dir === "../projects/facebook-clone" ||
            dir === "../projects/facebook-clone/" ||
            dir === "../projects/facebook-clone/"
        ) {
            processor("opening /Facebook-Clone on github.com ...");
            processor(
                "redirecting to <b class='link'>https://github.com/ShKev03/Facebook</b> ..."
            );
            window
                .open("https://github.com/shkev03/Facebook", "_blank")
                .focus();
        } else {
            processor(lsSkills);
        }
    } else {
        processor("Empty Folder");
    }
}
