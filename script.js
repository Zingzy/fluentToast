var corners = [false, false, false, false]; // bottom-right, top-right, bottom-left, top-left
var queue = [];

function displayNotification(id, text, duration, type, soundAlert) {
    var notification = document.createElement("div");
    notification.classList.add("custom-top-notification");
    notification.id = id;
    notification.innerHTML = '<span class="closebtn">&times;</span><p>This is a custom top notification</p><div class="close-progress-bar"></div>';

    if(type==="warning") {
        notification.classList.add("warning");
    }
    else if(type==="success") {
        notification.classList.add("success");
    }
    else if(type==="error") {
        notification.classList.add("error");
    }
    else if(type==="info") {
        notification.classList.add("info");
    }

    var cornerIndex = corners.indexOf(false);
    if (cornerIndex !== -1) {
        corners[cornerIndex] = true;
        notification.classList.add(["bottom-right", "top-right", "bottom-left", "top-left"][cornerIndex]);
    }

    document.body.appendChild(notification);

    var newNotification = document.getElementById(id);
    newNotification.getElementsByTagName("p")[0].innerHTML = text;
    newNotification.style.display = "block";

    var progressbar = newNotification.getElementsByClassName("close-progress-bar")[0];
    var animation = "progress-bar-animation " + duration + "s linear";
    progressbar.style.animation = animation;

    // Play sound if soundAlert is true
    if (soundAlert) {
        var audio = new Audio('assets/notification.mp3');
        audio.play();
    }

    newNotification.getElementsByClassName("closebtn")[0].onclick = function() {
        var cornerClass = ["bottom-right", "top-right", "bottom-left", "top-left"].find(c => newNotification.classList.contains(c));
        var cornerIndex = ["bottom-right", "top-right", "bottom-left", "top-left"].indexOf(cornerClass);
        corners[cornerIndex] = false;
        newNotification.remove();

        if (queue.length > 0) {
            var nextNotification = queue.shift();
            displayNotification(nextNotification.id, nextNotification.text, nextNotification.duration, nextNotification.type, soundAlert);
        }
    };

    setTimeout(function () {
        if (newNotification.parentNode) {
            newNotification.getElementsByClassName("closebtn")[0].onclick();
        }
    }, duration * 1000 - 200);
}

function fluentToast(Id, text, duration, type="info", soundAlert=true) {
    var element = document.getElementById("customNotification"+Id);
    if (element) {
        element.getElementsByClassName("closebtn")[0].onclick();
    }

    if (corners.includes(false)) {
        displayNotification("customNotification"+Id, text, duration, type, soundAlert);
    } else {
        queue.push({id: "customNotification"+Id, text: text, duration: duration, type: type, soundAlert: soundAlert});
    }
}