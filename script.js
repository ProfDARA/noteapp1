class AppBar extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `<div>${this.textContent}</div>`;
    }
}

customElements.define('app-bar', AppBar);

class NoteItem extends HTMLElement {
    set noteData(data) {
        this.innerHTML = `
            <div class="note-item">
                <h3>${data.title}</h3>
                <p>${data.body}</p>
                <button class="archive-button">${data.archived ? 'Unarchive' : 'Archive'}</button>
            </div>
        `;
        this.querySelector('.archive-button').addEventListener('click', () => {
            data.archived = !data.archived;
            displayNotes();
        });
    }
}

customElements.define('note-item', NoteItem);

class NoteForm extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <form id="noteForm">
                <div>
                    <label for="title">Title</label>
                    <input type="text" id="title" name="title" required>
                </div>
                <div>
                    <label for="body">Body</label>
                    <textarea id="body" name="body" required></textarea>
                </div>
                <button type="submit">Add Note</button>
            </form>
        `;

        this.querySelector('#noteForm').addEventListener('submit', this.addNote);
    }

    addNote = (event) => {
        event.preventDefault();
        const title = this.querySelector('#title').value;
        const body = this.querySelector('#body').value;
        const newNote = {
            id: `notes-${Date.now()}`,
            title,
            body,
            createdAt: new Date().toISOString(),
            archived: false
        };
        notesData.push(newNote);
        window.location.href = 'index.html';
    }
}

customElements.define('note-form', NoteForm);

function displayNotes(filter = 'not-archived') {
    const notesContainer = document.getElementById('notesContainer');
    notesContainer.innerHTML = '';
    notesData
        .filter(note => (filter === 'not-archived' && !note.archived) || (filter === 'archived' && note.archived))
        .forEach(note => {
            const noteItem = document.createElement('note-item');
            noteItem.noteData = note;
            notesContainer.appendChild(noteItem);
        });
}

document.addEventListener('DOMContentLoaded', () => {
    const addNoteButton = document.getElementById('addNoteButton');
    addNoteButton.addEventListener('click', () => {
        window.location.href = 'addNote.html';
    });

    const tabButtons = document.querySelectorAll('.tab-button');
    tabButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            if (e.target.id !== 'addNoteButton') {
                tabButtons.forEach(btn => btn.classList.remove('active'));
                e.target.classList.add('active');
                displayNotes(e.target.getAttribute('data-tab'));
            }
        });
    });

    displayNotes();
    document.querySelector('.tab-button[data-tab="not-archived"]').classList.add('active');
});