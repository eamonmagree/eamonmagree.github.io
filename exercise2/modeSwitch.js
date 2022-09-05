let isDark = false;

function switchModes(){

    if(isDark === true) {                /* sets condition for the following function */
        console.log ("i'm true");
        document.documentElement.style.setProperty("--col-01", "#171219")
        document.documentElement.style.setProperty("--col-02", "#ffffff")
/*         document.documentElement.style.setProperty("--col-03", "#5252ff")
        document.documentElement.style.setProperty("--col-05", "#ff52ab") */
        /* document.getElementById("modeButton").innerHTML = "Dark Mode"; */
        isDark = false;
    } else {
        console.log ("im false");
        document.documentElement.style.setProperty("--col-01", "#ffffff")
        document.documentElement.style.setProperty("--col-02", "#171219")
/*         document.documentElement.style.setProperty("--col-03", "#ff52ab")
        document.documentElement.style.setProperty("--col-05", "#5252ff") */
        /* document.getElementById("modeButton").innerHTML = "Light Mode"; */
        isDark = true;
    }

}