const FIVE_YEARS = 5 * 365 * 24 * 60 * 60 * 1000;
function setCookie(cname, cvalue) {
    const d = new Date();
    d.setTime(d.getTime() + FIVE_YEARS); //5 years expiry date
    let expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + "; path=/; domain=.ryb0.world;"; 
}

//^^comment out path, domain when testing locally^^

function deleteCookie(cname) {
    document.cookie = cname + "=; expires=Thu, 18 Dec 2013 12:00:00 UTC;path=/; domain=.ryb0.world";
}

function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) === ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) === 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}