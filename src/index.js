// ini adalah url API yang digunakan
const API_URL = 'https://notes-api.dicoding.dev/v2';

// <<<<<PENTING>>>>> ,  ditambah import css supaya CSS masuk ke dalam bundle dan di load oleh index.html
import './style.css';

// callback app bar custom element
class AppBar extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `<div>${this.textContent}</div>`;
    }
}

// custom element app bar
customElements.define('app-bar', AppBar);

// Loading Bar Web Component
class LoadingBar extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <div class="loading-overlay">
                <div class="loading-bar-container">
                    <div class="loading-bar"></div>
                    <div class="loading-text">Loading... <span class="loading-percent">0%</span></div>
                </div>
            </div>
        `;
        this.updateProgress(0);
    }

    updateProgress(percent) {
        const loadingBar = this.querySelector('.loading-bar');
        const loadingPercent = this.querySelector('.loading-percent');
        loadingBar.style.width = `${percent}%`;
        loadingPercent.textContent = `${percent}%`;
    }

    simulateLoading(duration) {
        let percent = 0;
        const intervalTime = duration / 100;
        const interval = setInterval(() => {
            if (percent < 100) {
                percent += 10;
                this.updateProgress(percent);
            } else {
                clearInterval(interval);
            }
        }, intervalTime);
    }
}

customElements.define('loading-bar', LoadingBar);

// bagian item dalam container  
class NoteItem extends HTMLElement {
    set noteData(data) {
        // menampilkan data catatan
        this.innerHTML = `
            <div class="note-item">
                <h3>${data.title}</h3>
                <h4>${new Date(data.createdAt).toLocaleString()}</h4>
                <p>${data.body}</p>
                <button class="archive-button">${data.archived ? 'Unarchive' : 'Archive'}</button>
                <button class="delete-button">Hapus</button>
            </div>
        `;
        // event listener untuk tombol arsip
        this.querySelector('.archive-button').addEventListener('click', async () => {
            if (confirm(`Apa anda yakin untuk melakukan operasi ${data.archived ? 'unarchive' : 'archive'} pada note ini ?`)) {
                data.archived = !data.archived;
                await updateNoteStatus(data.id, data.archived);
                displayNotes();
            }
        });
        // event listener untuk tombol delete
        this.querySelector('.delete-button').addEventListener('click', async () => {
            if (confirm('Apa anda yakin untuk menghapus note ini?')) {
                await deleteNoteById(data.id);
                displayNotes();
            }
        });
    }
}

// custom element note item
customElements.define('note-item', NoteItem);

// bagian update note menggunakan restful api
async function updateNoteStatus(id, archived) {
    try {
        const response = await fetch(`${API_URL}/notes/${id}/${archived ? 'archive' : 'unarchive'}`, {
            method: 'POST'
        });
        if (!response.ok) {
            throw new Error('Gagal mengupdate status note');
        }
    } catch (error) {
        console.error('Error mengupdate status:', error);
    }
}

// bagian delete note menggunakan restful api
async function deleteNoteById(id) {
    try {
        const response = await fetch(`${API_URL}/notes/${id}`, {
            method: 'DELETE'
        });
        if (!response.ok) {
            throw new Error('Gagal menghapus note');
        }
    } catch (error) {
        console.error('Error menghapus note :', error);
    }
}

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
    addNote = async (event) => {
        event.preventDefault();
        const title = this.querySelector('#title').value;
        const body = this.querySelector('#body').value;
        const submitButton = this.querySelector('button[type="submit"]');
        const loadingBar = document.createElement('loading-bar');
        document.body.appendChild(loadingBar);
        submitButton.disabled = true;
        loadingBar.simulateLoading(3000); // 3 detik loading
        try {
            const response = await fetch(`${API_URL}/notes`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ title, body })
            });

            if (response.ok) {
                window.location.href = 'index.html';
            } else {
                console.error('Failed to add note');
            }
        } catch (error) {
            console.error('Error adding note:', error);
        } finally {
            submitButton.disabled = false;
            document.body.removeChild(loadingBar);
        }
    }
}

// elemen custom note form
customElements.define('note-form', NoteForm);

// fungsi untuk menapilkan yang tidak ter arsip
async function displayNotes(filter = 'not-archived') {
    const notesContainer = document.getElementById('notesContainer');
    const loadingBar = document.createElement('loading-bar');
    document.body.appendChild(loadingBar);
    loadingBar.simulateLoading(3000); // 3 detik loading
    try {
        const endpoint = filter === 'archived' ? 'notes/archived' : 'notes';
        const response = await fetch(`${API_URL}/${endpoint}`);

        if (response.ok) {
            const result = await response.json();
            const notes = result.data;
            notesContainer.innerHTML = '';
            notes.forEach(note => {
                const noteItem = document.createElement('note-item');
                noteItem.noteData = note;
                notesContainer.appendChild(noteItem);
            });
        } else {
            notesContainer.innerHTML = 'Failed to load notes';
        }
    } catch (error) {
        console.error('Error fetching notes:', error);
        notesContainer.innerHTML = 'Error loading notes';
    } finally {
        document.body.removeChild(loadingBar);
    }
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