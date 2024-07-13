// callback app bar custom element
class AppBar extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `<div>${this.textContent}</div>`;
    }
}


// custom element app bar
customElements.define('app-bar', AppBar);

// bagian item dalam container 
class NoteItem extends HTMLElement {
    set noteData(data) {
        // menampilkan data catatan
        this.innerHTML = `
            <div class="note-item">
                <h3>${data.title}</h3>
                <h4>${data.createdAt}</h4>
                <p>${data.body}</p>
                <button class="archive-button">${data.archived ? 'Unarchive' : 'Archive'}</button>
            </div>
        `;
        // event listener untuk tombol arsip
        this.querySelector('.archive-button').addEventListener('click', () => {
            data.archived = !data.archived;
            displayNotes();
        });
    }
}

// custom element note item
customElements.define('note-item', NoteItem);


// form tambah note/ catatan , required berfungsi untuk memastikan kolom terisi
class NoteForm extends HTMLElement {
    // form untuk tambah note
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
                <button type="submit">Submit</button>
            </form>
        `;
        // event listener untuk submit form
        this.querySelector('#noteForm').addEventListener('submit', this.addNote);
    }
    // event listener untuk tambah note ke restful api nantinya, secara default akan ke bagian non arsip
    addNote = (event) => {
        event.preventDefault();
        const title = this.querySelector('#title').value;
        const body = this.querySelector('#body').value;
        // menambahkan note ke array
        const newNote = {
            id: `notes-${Date.now()}`,
            title,
            body,
            createdAt: new Date().toISOString(),
            archived: false //bagian otomatis non arsip
        };
        notesData.push(newNote);
        window.location.href = 'index.html';
    }
}

customElements.define('note-form', NoteForm);
// fungsi untuk menapilkan yang tidak ter arsip
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

// bagian untuk tab dan tambah catatan
document.addEventListener('DOMContentLoaded', () => {
    const addNoteButton = document.getElementById('addNoteButton');
    addNoteButton.addEventListener('click', () => {
        window.location.href = 'addNote.html';
    });

    // event listener untuk tab
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
