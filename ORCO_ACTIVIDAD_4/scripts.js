document.getElementById('saveNote-btn').addEventListener('click', function() {
    const noteInput = document.getElementById('noteInput');
    const noteText = noteInput.value.trim();
    if (noteText) {
        let notes = JSON.parse(localStorage.getItem('notes')) || [];
        notes.push(noteText);
        localStorage.setItem('notes', JSON.stringify(notes));
        noteInput.value = '';
        displayNotes();

        // Reiniciar el contador de caracteres
        const contador = document.getElementById('contador-caracteres');
        contador.textContent = 'Caracteres: 0';
    }
});

function displayNotes() {
    const notesList = document.getElementById('notesList');
    notesList.innerHTML = '';
    const notes = JSON.parse(localStorage.getItem('notes')) || [];
    notes.forEach(function(note, index) {
        const li = document.createElement('li');
        li.textContent = note;

        // Create delete button
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.className = 'delete-btn';
        deleteBtn.addEventListener('click', function() {
            deleteNote(index);
        });

        li.appendChild(deleteBtn);
        notesList.appendChild(li);
    });
}

function deleteNote(index) {
    let notes = JSON.parse(localStorage.getItem('notes')) || [];
    notes.splice(index, 1); // Remove the note at the given index
    localStorage.setItem('notes', JSON.stringify(notes));
    displayNotes(); // Refresh the notes list
}

// Display notes on page load
window.onload = displayNotes;

// Search bar input
document.getElementById('searchBar').addEventListener('input', function() {
    const searchText = this.value.toLowerCase();
    const notesList = document.getElementById('notesList');
    const notes = JSON.parse(localStorage.getItem('notes')) || [];

    notesList.innerHTML = '';
    notes.forEach(function(note, index) {
        if (note.toLowerCase().includes(searchText)) {
            const li = document.createElement('li');
            li.textContent = note;

            // Create delete button
            const deleteBtn = document.createElement('button');
            deleteBtn.textContent = 'Delete';
            deleteBtn.className = 'delete-btn';
            deleteBtn.addEventListener('click', function() {
                deleteNote(index);
            });

            li.appendChild(deleteBtn);
            notesList.appendChild(li);
        }
    });
});

// Actualizar el contador de caracteres en tiempo real
document.getElementById('noteInput').addEventListener('input', function() {
    const contador = document.getElementById('contador-caracteres');
    contador.textContent = `Caracteres: ${this.value.length}`;
});