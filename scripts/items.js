document.addEventListener('DOMContentLoaded', function () {
    const sunglassesFilter = document.getElementById("sunglassesFilter");    
    sunglassCheck();
}); 

function glassesToggle()
{
    sunglassesAnim = document.getElementById("sunglanim");
    sunglassesItemBox = document.getElementById("sunglassesBox");


    let glassesCheck = getCookie("sunglassesOn");
    sunglassesAnim.style.visibility = "visible";

    if (glassesCheck != "true")
    {
        setCookie("sunglassesOn", "true");
        sunglassesAnim.src = "images/sunglanim.webm";
        sunglassesItemBox.style.backgroundColor = "#fff3b2";

    }

    else
    {
        setCookie("sunglassesOn", "false");
        sunglassCheck();
        sunglassesAnim.src = "images/sunglanim2.webm";
        sunglassesItemBox.style.backgroundColor = "var(--itemhover)";

    }
    sunglassesAnim.currentTime = 0;
    sunglassesAnim.play();


    console.log( "end of toggle function, sunglassesOn =  " + getCookie("sunglassesOn"));
    return;
}

function sunglanimEnd() {
    sunglassesAnim.style.visibility = "hidden";
    sunglassCheck(); }

function sunglassCheck()
{
    sunglassesItemBox = document.getElementById("sunglassesBox");

    let glassesCheck = getCookie("sunglassesOn");

    if (glassesCheck === "true") {
        sunglassesFilter.style.backgroundColor = 'rgba(0,0,0,0.5)';
        sunglassesItemBox.style.backgroundColor = "#fff3b2";
    }
    else {
        sunglassesFilter.style.backgroundColor = 'rgba(0,0,0,0)';
        sunglassesItemBox.style.backgroundColor = "var(--itemhover)";
    }
}
