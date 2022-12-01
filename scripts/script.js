
const cthemeButton = document.querySelector(".themebutton")
const ccancelButton = document.querySelector(".cancelbutton")
const csaveButton = document.querySelector(".savebutton")
const cnewnButton = document.querySelector(".newnbutton")
const textinput = document.querySelector(".placeholder")
const myNotes = document.querySelector(".blocky")

function changeTextLight() {
        cthemeButton.textContent = "Light Theme"
}

function changeTextDark() {
        cthemeButton.textContent = "Dark Theme"
}

// cthemeButton.addEventListener("click", changeText)

function enableDarkTheme() {
        document.body.classList.add("darktheme");
}

function disableDarkTheme() {
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

function toggleButton() {
        ccancelButton.classList.add("hidden")
        csaveButton.classList.add("hidden")
        textinput.classList.add("hidden")
}

ccancelButton.addEventListener("click", toggleButton)

function toggleNotes() {
        ccancelButton.classList.remove("hidden")
        csaveButton.classList.remove("hidden")
        textinput.classList.remove("hidden")
}

cnewnButton.addEventListener("click", toggleNotes)

let noteArray = [];

noteArray[0] = {
        title: "Test Title",
        note: "This is a test note",
};

populateList(noteArray)

function populateList(arr) {
        for (let item of arr) {
                let listItem = document.createElement("li");
                listItem.textContent = item.title;
                myNotes.appendChild(listItem);
        }
}

function askTitle() {
        let titles = prompt("Enter a title for your note")
}

function submitnoteArray(titles) {

        askTitle(titles)

        let objArray = {
                title: titles.value,
                note: textinput.value,
        };

        updateLists(objArray);

        noteArray.push(objArray);

        textinput.value = "";

};

function updateLists(notes) {

        const listItem = document.createElement("li");
        listItem.textContext = `${notes.title}`;

        myNotes.appendChild(listItem);
};

csaveButton.addEventListener("click", submitnoteArray)

function checkNotes(e) {

        let input = e.target.textContent

        for (let i=0; i < noteArray.length; i++) {
                if (noteArray[i].title.includes(input)) {
                        alert (`${noteArray[i].note}`)
                }
        }
        // if (e.target.textContent === noteArray) {
        //         alert(`${noteArray[i].note}.`)
        // }
}

myNotes.addEventListener("click", checkNotes)

