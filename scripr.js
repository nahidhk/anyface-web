let os = "web";
let icon = '<i class="bi bi-hdd"></i>'

if (navigator.userAgent.indexOf("Android") !== -1) {
    os = 'Android';
    icon = '<i class="bi bi-android"></i>';
} else if (navigator.userAgent.indexOf("Win") !== -1) {
    os = 'Windows';
    icon = '<i class="bi bi-windows"></i>';
} else if (navigator.userAgent.indexOf("Mac") !== -1) {
    os = 'macos';
    icon = '<i class="bi bi-apple"></i>';
} else if (navigator.userAgent.indexOf("X11") !== -1 || navigator.userAgent.indexOf("Linux") !== -1) {
    os = 'Linux';
    icon = '<i class="bi bi-ubuntu"> </i>';
} else if (navigator.userAgent.indexOf("iPhone") !== -1) {
    os = 'iOS (iPhone)';
    icon = '<i class="bi bi-apple"></i>';
} else if (navigator.userAgent.indexOf("iPad") !== -1) {
    os = 'iOS (iPad)';
    icon = '<i class="bi bi-apple"></i>';
} else if (navigator.userAgent.indexOf("iPod") !== -1) {
    os = 'iOS (iPod)';
    icon = '<i class="bi bi-apple"></i>';
}

document.getElementById("os").innerHTML = os;
document.getElementById("icon").innerHTML = icon;

const myappc = document.getElementById("appsvs");

if (os == "Windows" || os == "macos" || os == "Linux") {
    myappc.innerHTML = "software";
} else if (os == "Android" || os.includes("iOS")) {
    myappc.innerHTML = "apps";
}
let deferredPrompt;
window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredPrompt = e;
    document.getElementById('installBtn').addEventListener('click', () => {
        deferredPrompt.prompt();
        deferredPrompt.userChoice.then((choiceResult) => {
            if (choiceResult.outcome === 'accepted') {
                console.log('User accepted the install prompt');
            } else {
                console.log('User dismissed the install prompt');
            }
            deferredPrompt = null;
        });
    });
});

function getstart(){
    window.location.href="https://anyface.readyoffercareer.com/";
}

