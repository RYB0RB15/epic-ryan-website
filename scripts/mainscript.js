document.addEventListener('DOMContentLoaded', function () {
    window.scrollTo(0, document.body.scrollHeight); //scrolls to bottom of page when loaded
    const sunglassesFilter = document.getElementById("sunglassesFilter");
    
    sunglassCheck();
}); 


const FIVE_YEARS = 5 * 365 * 24 * 60 * 60 * 1000;
function setCookie(cname, cvalue) {
    const d = new Date();
    d.setTime(d.getTime() + FIVE_YEARS); //5 years expiry date
    let expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + "; path=/; domain=.ryb0.world;";
}

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

function glassesToggle()
{
    sunglassesAnim = document.getElementById("sunglanim");
    let glassesCheck = getCookie("sunglassesOn");
    sunglassesAnim.style.visibility = "visible";

    if (glassesCheck != "true")
    {
        setCookie("sunglassesOn", "true");
        sunglassesAnim.src = "images/sunglanim.webm";
    }

    else
    {
        setCookie("sunglassesOn", "false");
        sunglassCheck();
        sunglassesAnim.src = "images/sunglanim2.webm";
    }
    sunglassesAnim.currentTime = 0;

    setTimeout(function () {
        sunglassesAnim.style.visibility = "hidden";
        sunglassCheck();
    }, 900);
    sunglassesAnim.play();


    console.log( "end of toggle function, sunglassesOn =  " + getCookie("sunglassesOn"));
    return;
}

function sunglassCheck()
{
    let glassesCheck = getCookie("sunglassesOn");

    if (glassesCheck === "true") {
        sunglassesFilter.style.backgroundColor = 'rgba(0,0,0,0.5)';
    }
    else {
        sunglassesFilter.style.backgroundColor = 'rgba(0,0,0,0)';
    }
}
