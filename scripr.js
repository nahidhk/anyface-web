let os = "Unknown OS";

if (navigator.userAgent.indexOf("Win") !== -1) os = "Windows";
else if (navigator.userAgent.indexOf("Mac") !== -1) os = "MacOS";
else if (navigator.userAgent.indexOf("X11") !== -1) os = "Linux";
else if (navigator.userAgent.indexOf("Linux") !== -1) os = "Linux";

