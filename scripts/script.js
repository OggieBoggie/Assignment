const cthemeButton = document.querySelector(".themebutton")
const ccancelButton = document.querySelector(".cancelbutton")
const csaveButton = document.querySelector(".savebutton")
const cnewnButton = document.querySelector(".newnbutton")
const textinput = document.querySelector(".placeholder")

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

function toggleButton () {
        ccancelButton.classList.add("hidden")
        csaveButton.classList.add("hidden")
        textinput.classList.add("hidden")
}

ccancelButton.addEventListener("click", toggleButton)

function toggleNotes () {
        ccancelButton.classList.remove("hidden")
        csaveButton.classList.remove("hidden")
        textinput.classList.remove("hidden")
}

cnewnButton.addEventListener("click", toggleNotes)