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

    function createCard(noteTitle, noteContent) {
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
            card.remove();
            deleteNoteFromStorage(noteTitle);
        });
        actionSection.appendChild(edit_button);
        actionSection.appendChild(deleteBtn);

        let TextArea = document.createElement("div");
        TextArea.style.background = "#21222B";
        TextArea.style.width = "300px";
        TextArea.style.height = "200px";
        TextArea.style.color = "white";
        TextArea.style.padding = ".5rem";
        TextArea.textContent = noteContent;

        card.appendChild(NotesHeader);
        card.appendChild(TextArea);

        div.prepend(card);
    }

    function getNotesFromStorage() {
        return JSON.parse(localStorage.getItem("notes")) || [];
    }

    function saveNoteToStorage(noteTitle, noteContent) {
        let notes = getNotesFromStorage();
        notes.push({ title: noteTitle, content: noteContent });
        localStorage.setItem("notes", JSON.stringify(notes));
    }

    function deleteNoteFromStorage(noteTitle) {
        let notes = getNotesFromStorage();
        notes = notes.filter(note => note.title !== noteTitle);
        localStorage.setItem("notes", JSON.stringify(notes));
    }

    Form.addEventListener("submit", function (details) {
        details.preventDefault();

        let noteTitle = details.target.title.value;
        let noteContent = details.target.content.value;

        saveNoteToStorage(noteTitle, noteContent);
        createCard(noteTitle, noteContent);

        Form.reset();
        addNotesDiv.style.display = "none";
    });

    // Load all saved notes
    let savedNotes = getNotesFromStorage();
    savedNotes.forEach(note => createCard(note.title, note.content));
});
