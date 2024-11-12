function catCommand(file) {
    if (current_dir === "~/") {
        if (file === "about.me" || file === "./about.me") {
            processor(introduction);
        } else if (file === "banner.txt" || file === "./banner.txt") {
            processor(randomAscii(PenguinBanner));
        } else if (file === "contact.me" || file === "./contact.me") {
            processor(contact);
        } else {
            processor("File not found.");
        }
    } else if (current_dir === "~/projects") {
        if (file === "..about.me" || file === "../about.me") {
            processor(introduction);
        } else if (file === "..banner.txt" || file === "../banner.txt") {
            processor(randomAscii(PenguinBanner));
        } else if (file === "..contact.me" || file === "../contact.me") {
            processor(contact);
        } else {
            processor("File not found.");
        }
    } else {
        processor("File not found");
    }
}
