const cthemeButton = document.querySelector(".themebutton")
const ccancelButton = document.querySelector(".cancelbutton")

function changeTextLight () {
        cthemeButton.textContent = "Light Theme"
}

function changeTextDark () {
        cthemeButton.textContent = "Dark Theme"
}

// cthemeButton.addEventListener("click", changeText)

function enableDarkTheme () {
        document.body.classList.add("darktheme");
}

function disableDarkTheme () {
        document.body.classList.remove("darktheme");
}

cthemeButton.addEventListener("click", () => {
    if (cthemeButton.textContent != "Light Theme") {
        changeTextLight()
        enableDarkTheme()
    }
    else {
        changeTextDark()
        disableDarkTheme()
    }

})