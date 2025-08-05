const bucket  = document.getElementById("bucket");
const lilypad = document.getElementById("lilypad");

function dragstartHandler(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function dragoverHandler(ev) {
    ev.preventDefault();
}

function dropHandler(ev) {
    ev.preventDefault();

    const sender = document.getElementById(ev.dataTransfer.getData("text"));
    const receiver = ev.target;

    if (sender != receiver && sender.dataset.hasFrog === "true" && frogUpdate(receiver, true)) {
        frogUpdate(sender, false);
    }
}

function frogUpdate(element, value) {
    switch (element.id) {
        case "bucket":
            element.src = value ? "images/frucket4.gif" : "images/empty.gif";
            element.dataset.hasFrog = value;
            element.draggable = value;
            break;

        case "lilypad":
            element.style.visibility = value ? "visible" : "hidden";
            element.dataset.hasFrog = value;
            element.draggable = value;
            break;
        default:
            return false;
    }
    return true;
}