let closebtn = document.querySelector("#closeBtn");
let NoteDiv = document.querySelector(".addNotes");
let addNote = document.querySelector(".add-note");
let Modebtn = document.querySelector(".toggle-theme");
let div = document.querySelector(".mainDiv");

function createNote() {
    NoteDiv.style.display = "flex";
    let titleInput = document.querySelector("#title");
    titleInput.focus();
}

function closeNoteDiv() {
    NoteDiv.style.display = "none";
}

document.addEventListener("DOMContentLoaded", function () {
    let Form = document.querySelector(".Notes-form");
    const addNotesDiv = document.querySelector(".addNotes");

    Form.addEventListener("submit", function (details) {
        details.preventDefault();
        console.log(details);

        //storing the inputs of the from...
        let noteTitle = details.target.title.value;
        let noteContent = details.target.content.value;

        let card = document.createElement("div");
        card.classList.add("card");

        let NotesHeader = document.createElement("div");
        NotesHeader.classList.add("notesHeader");

        let headerTitle = document.createElement("div");
        headerTitle.classList.add("headerTitle");

        let notesTitle = document.createElement("label");
        notesTitle.classList.add("notesTitle");
        notesTitle.textContent = noteTitle;
        headerTitle.appendChild(notesTitle);

        let actionSection = document.createElement("div");
        actionSection.classList.add("actionSection");

        NotesHeader.appendChild(headerTitle);
        NotesHeader.appendChild(actionSection);


        let edit_button = document.createElement("button");
        edit_button.id = "editBtn";

        let penIcon = document.createElement("i");
        penIcon.id = "icon";
        penIcon.className = "fa-solid fa-pen";

        edit_button.appendChild(penIcon);

        let deleteBtn = document.createElement("button");
        deleteBtn.id = "closeBtn";
        deleteBtn.textContent = "x";
        deleteBtn.addEventListener("click", function () {
            card.style.display = "none";
        });
        actionSection.appendChild(edit_button);
        actionSection.appendChild(deleteBtn);

        let TextArea = document.createElement("textarea");
        TextArea.rows = "15";
        TextArea.cols = "30";
        TextArea.value = noteContent;
        
        

        card.appendChild(NotesHeader);
        card.appendChild(TextArea);

        div.appendChild(card);

        Form.reset();


        // Hide the addNotes div
        addNotesDiv.style.display = "none";
    });
});


